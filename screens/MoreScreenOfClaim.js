import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
  ScrollView
} from "react-native";
import { connect } from "react-redux";
import Entypo from "@expo/vector-icons/Entypo";
import Modal from "react-native-modal";
import AntDesign from "react-native-vector-icons/AntDesign";

class MoreScreenOfClaim extends React.Component {
  state = {
    isModalVisible: false,
    onPressItem: {}
  };

  _toggleModal = () =>
    this.setState({ isModalVisible: !this.state.isModalVisible });
  companyLogo(companyName) {
    if (companyName == "삼성") {
      return "https://t1.daumcdn.net/news/201706/22/sfdirect/20170622162421882zmiv.jpg";
    } else if (companyName == "국민")
      return "https://yt3.ggpht.com/a-/AN66SAxGY8-zefx7A2NaQGRgY0SIm20xE2vr4aIGCg=s900-mo-c-c0xffffffff-rj-k-no";
    else if (companyName == "메리츠")
      return "http://image.nsmall.com/itemimg/3/26/963/26451963_S.jpg";
  }
  render() {
    return (
      <ScrollView style={styles.container}>
        <View
          style={{
            height: 50,
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row"
          }}
        >
          <Entypo
            name="export"
            style={{ fontSize: 18, paddingRight: 3, color: "#F5DA81" }}
          />
          <Text style={{ fontSize: 18, color: "grey" }}>보험금청구내역></Text>
        </View>
        <FlatList
          style={{ width: "100%" }}
          ItemSeparatorComponent={() => (
            <View
              style={{
                height: StyleSheet.hairlineWidth,
                marginLeft: 20,
                marginRight: 20,
                backgroundColor: "grey"
              }}
            />
          )}
          data={this.props.RequestForISM}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={{
                height: 70,
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "row"
              }}
              onPress={() => {
                this.setState(
                  {
                    onPressItem: item
                  },

                  this._toggleModal
                );
              }}

              //   accidentName: "교통사고",
              //   accidentDay: "18.06.29",
              //   requestDay: "180629",
              //   accidentNum: "045sDSF456",
              //   insuranceName: " 김정수",
              //   insuranceCo: "국민"
              // },
            >
              <Modal isVisible={this.state.isModalVisible}>
                <View
                  style={{
                    paddingLeft: 20,
                    height: 500,
                    width: 300,
                    backgroundColor: "white",
                    borderRadius: 20,
                    justifyContent: "center",
                    alignItems: "center",
                    position: "absolute",
                    left: 18
                  }}
                >
                  <AntDesign
                    style={{ fontSize: 30, color: "#F5DA81", marginBottom: 10 }}
                    name="customerservice"
                  />
                  <Text style={{ fontSize: 20 }}>청구세부내역</Text>
                  <Image
                    style={{
                      width: 100,
                      height: 100,
                      marginBottom: 40,
                      marginTop: 20,
                      borderColor: "#E6E6E6",
                      borderWidth: 1,
                      borderRadius: 10
                    }}
                    source={{
                      uri: this.companyLogo(this.state.onPressItem.insuranceCo)
                    }}
                  />
                  <View style={{ width: "100%" }}>
                    <Text style={{ fontSize: 20, padding: 5 }}>
                      사고내역 : {this.state.onPressItem.accidentName}
                    </Text>
                    <View
                      style={{
                        height: StyleSheet.hairlineWidth,
                        marginRight: 17,
                        backgroundColor: "grey"
                      }}
                    />
                    <Text style={{ fontSize: 20, padding: 5 }}>
                      사고일자 : {this.state.onPressItem.accidentDay}
                    </Text>
                    <View
                      style={{
                        height: StyleSheet.hairlineWidth,
                        marginRight: 17,
                        backgroundColor: "grey"
                      }}
                    />
                    <Text style={{ fontSize: 20, padding: 5 }}>
                      요청일자 : {this.state.onPressItem.requestDay}
                    </Text>
                    <View
                      style={{
                        height: StyleSheet.hairlineWidth,
                        marginRight: 17,
                        backgroundColor: "grey"
                      }}
                    />
                    <Text style={{ fontSize: 20, padding: 5 }}>
                      현설계사 : {this.state.onPressItem.insuranceName}
                    </Text>
                    <View
                      style={{
                        height: StyleSheet.hairlineWidth,
                        marginRight: 17,
                        backgroundColor: "grey"
                      }}
                    />
                    <Text style={{ fontSize: 20, padding: 5 }}>
                      지급상황 :{" "}
                      {this.state.onPressItem.stateReceive == false
                        ? "미지급"
                        : this.state.onPressItem.stateReceive}
                    </Text>
                  </View>
                  <TouchableOpacity
                    style={{ position: "absolute", top: 20, right: 20 }}
                    onPress={this._toggleModal}
                    //   accidentName: "교통사고",
                    //   accidentDay: "18.06.29",
                    //   requestDay: "180629",
                    //   accidentNum: "045sDSF456",
                    //   insuranceName: " 김정수",
                    //   insuranceCo: "국민"
                    //   stateReceive : fauls
                    // },
                  >
                    <AntDesign style={{ fontSize: 20 }} name="closecircleo" />
                  </TouchableOpacity>
                </View>
              </Modal>
              <Image
                style={{
                  width: 50,
                  height: 50,
                  position: "absolute",
                  left: 15,
                  borderColor: "#E6E6E6",
                  borderWidth: 1,
                  borderRadius: 10
                }}
                source={{ uri: this.companyLogo(item.insuranceCo) }}
              />
              <View
                style={{
                  width: "100%",
                  paddingLeft: 90,
                  flexDirection: "column"
                }}
              >
                <Text style={{ fontSize: 18 }}>{item.accidentName}</Text>
                <Text style={{ fontSize: 13, marginTop: 3 }}>
                  {item.accidentDay}
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "column",
                  position: "absolute",
                  right: 20
                }}
              >
                <Text style={{ fontSize: 15 }}>
                  {item.stateReceive ? "+" + item.stateReceive : "미지급"}
                </Text>
              </View>
              {console.log(this.companyLogo(item.insuranceCo))}
            </TouchableOpacity>
          )}
        />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
});

const mapStateToProps = state => {
  return {
    UserInfo: state.UserInfo,
    RequestForISM: state.RequestForISM,
    UserInsuranceInfo: state.UserInsuranceInfo
  };
};

export default connect(mapStateToProps)(MoreScreenOfClaim);
