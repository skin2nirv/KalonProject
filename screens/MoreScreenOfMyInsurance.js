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
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

class MoreScreenOfMyInsurance extends React.Component {
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

export default connect(mapStateToProps)(MoreScreenOfMyInsurance);
