import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Button,
  Image
} from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import { ImagePicker, Permissions } from "expo";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import { connect } from "react-redux";
import { FlatList } from "react-native-gesture-handler";
import _ from "lodash";
import Entypo from "@expo/vector-icons/Entypo";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Modal from "react-native-modal";

class Myinfo extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: "KALON",
      headerStyle: { backgroundColor: "#F5DA81" },
      headerTitleStyle: { fontSize: 22, color: "white" }
    };
  };
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

  async componentDidMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
  }
  render() {
    let { image } = this.props.UserInfo;

    return (
      <ScrollView style={styles.container}>
        <View
          style={{
            flex: 1,
            paddingTop: 20,
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <View style={{ width: 105, height: 105 }}>
            {image && (
              <Image
                source={{ uri: image }}
                style={{ borderRadius: 30, width: 100, height: 100 }}
              />
            )}
            <TouchableOpacity
              style={{
                backgroundColor: "white",
                width: 30,
                height: 30,
                position: "absolute",
                borderColor: "#D8D8D8",
                borderWidth: 1,
                bottom: 0,
                right: 0,
                borderRadius: 50,
                justifyContent: "center",
                alignItems: "center"
              }}
              onPress={this._pickImage}
            >
              <EvilIcons
                name="pencil"
                style={{
                  fontSize: 20
                }}
              />
            </TouchableOpacity>
          </View>
          <View
            style={{
              height: 100,
              width: "100%",

              paddingTop: 15,
              justifyContent: "flex-start",
              alignItems: "center"
            }}
          >
            <Text style={{ fontSize: 25 }}>{this.props.UserInfo.name}</Text>
            <View
              style={{
                marginTop: 10,
                justifyContent: "center",
                alignItems: "center",
                borderColor: "#F2F2F2",
                borderWidth: 0.5,
                paddingLeft: 10,
                paddingRight: 10,
                borderRadius: 5,
                paddingTop: 5,
                paddingBottom: 5
              }}
            >
              <Text style={{ fontSize: 15 }}>{this.props.UserInfo.email}</Text>
            </View>
          </View>
        </View>
        <View
          style={{
            height: 80,
            width: "100%",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <TouchableOpacity
            style={{
              height: 50,
              width: 110,
              backgroundColor: "#F2F2F2",
              justifyContent: "center",
              alignItems: "center",
              borderTopLeftRadius: 10,
              borderBottomLeftRadius: 10
            }}
            onPress={() =>
              this.props.navigation.navigate("InsuranceStockOption")
            }
          >
            <Text style={{ textAlign: "center" }}>증권추가</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              height: 50,
              width: 110,
              backgroundColor: "#F2F2F2",
              justifyContent: "center",
              alignItems: "center"
            }}
            onPress={() => this.props.navigation.navigate("CoinInfo")}
          >
            <Text style={{ textAlign: "center" }}>보유코인</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              height: 50,
              width: 110,
              backgroundColor: "#F2F2F2",
              justifyContent: "center",
              alignItems: "center",
              borderTopRightRadius: 10,
              borderBottomRightRadius: 10
            }}
            onPress={() => this.props.navigation.navigate("PrivateData")}
          >
            <Text style={{ textAlign: "center" }}>개인정보</Text>
          </TouchableOpacity>
        </View>
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
        <View
          style={{
            height: StyleSheet.hairlineWidth,
            marginLeft: 20,
            marginRight: 20,
            backgroundColor: "grey"
          }}
        />
        <TouchableOpacity
          style={{
            height: 50,
            justifyContent: "center",
            alignItems: "flex-start",
            paddingLeft: 5,
            justifyContent: "center",
            alignItems: "center"
          }}
          onPress={() => {
            this.props.navigation.navigate("MoreScreenOfClaim");
          }}
        >
          <Text style={{ fontSize: 10 }}>더보기></Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            height: 100,
            width: "100%",
            borderColor: "#F2F2F2",
            borderWidth: 8,
            backgroundColor: "#F7F8E0",
            flexDirection: "row"
          }}
          onPress={() => {
            this.props.navigation.navigate("MyWeb", {
              itemUri: "https://www.kbli.co.kr/CUCO/CUCO10010M.do"
            });
          }}
        >
          <Image
            source={{
              uri:
                "http://insight.kbinsure.co.kr/wp-content/uploads/2018/02/%EB%B0%B0%EB%84%882.png"
            }}
            style={{ width: "100%", height: "100%" }}
          />
        </TouchableOpacity>
        <View
          style={{
            height: 50,
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row"
          }}
        >
          <MaterialCommunityIcons
            name="file-import"
            style={{ fontSize: 18, paddingRight: 3, color: "#F5DA81" }}
          />

          <Text style={{ fontSize: 18, color: "grey" }}>가입보험></Text>
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
          data={this.props.UserInsuranceInfo}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={{
                height: 70,
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "row"
              }}
              onPress={() =>
                this.props.navigation.navigate("InsuranceDetail", {
                  item: item
                })
              }
              // name: "국민 행복 암 보험",
              // startDay: "18.06.29",
              // contractor: "김정수",
              // insured: " 김정수",
              // price: "10000",
              // insuranceCo: "메리츠"
            >
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
                <Text style={{ fontSize: 18 }}>{item.name}</Text>
                <Text style={{ fontSize: 13, marginTop: 3 }}>
                  {item.startDay}
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "column",
                  position: "absolute",
                  right: 20
                }}
              >
                <Text style={{ fontSize: 12 }}>{item.price}원 </Text>
              </View>
              {console.log(this.companyLogo(item.insuranceCo))}
            </TouchableOpacity>
          )}
        />
        <View
          style={{
            height: StyleSheet.hairlineWidth,
            marginLeft: 20,
            marginRight: 20,
            backgroundColor: "grey"
          }}
        />
        <TouchableOpacity
          style={{
            height: 50,
            justifyContent: "center",
            alignItems: "flex-start",
            paddingLeft: 5,
            justifyContent: "center",
            alignItems: "center"
          }}
          onPress={() => {
            this.props.navigation.navigate("MoreScreenOfMyInsurance");
          }}
        >
          <Text style={{ fontSize: 10 }}>더보기></Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }
  _pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3]
    });

    console.log(result);

    if (!result.cancelled) {
      this.props.dispatch({
        type: "ADD_USER_IMAGE",
        image: result.uri
      });
    }
  };
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
    RequestForISM: _.sortBy(state.RequestForISM, p => p.requestDay * -1).slice(
      0,
      5
    ),
    UserInsuranceInfo: state.UserInsuranceInfo
  };
};

export default connect(mapStateToProps)(Myinfo);
