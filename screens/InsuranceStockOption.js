//미등록 증권 보험 내역을 보여주는 화면

import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity
} from "react-native";
import { connect } from "react-redux";
import _ from "lodash";

class InsuranceStockOption extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: "KALON",
      headerStyle: { backgroundColor: "#F5DA81" },
      headerTitleStyle: { fontSize: 22, color: "white" }
    };
  };
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
      <View
        style={{
          flex: 1,
          width: "100%",
          height: "100%"
        }}
      >
        <View
          style={{
            height: 70,
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
            paddingLeft: 15
          }}
        >
          <Text style={{ fontSize: 20 }}>보험</Text>
          <Text>(미등록 증권)</Text>
        </View>
        <View
          style={{
            height: 2,
            marginLeft: 20,
            marginRight: 20,
            backgroundColor: "#F5DA81"
          }}
        />
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
                this.props.navigation.navigate("RegistrationStock", {
                  name: item.name,
                  startDay: item.startDay,
                  insuranceCo: item.insuranceCo,
                  UserInsuranceID: item.UserInsuranceID
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
            </TouchableOpacity>
          )}
        />
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    UserInfo: state.UserInfo,
    RequestForISM: _.sortBy(state.RequestForISM, p => p.requestDay * -1).slice(
      0,
      5
    ),
    //_.filter(users, ['active', false]);
    UserInsuranceInfo: _.filter(state.UserInsuranceInfo, [
      "insurancStock",
      false
    ])
  };
};

export default connect(mapStateToProps)(InsuranceStockOption);
