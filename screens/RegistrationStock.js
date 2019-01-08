//증권등록하기를 누르면 reducer상의 데이터에가 바뀌어야 하는데 현재 구현을 못한 상태
// dispach 함수 설정하는게 너무 어렵다. 혼자서 하기 힘들듯. 조언 필요.
// 또한 증권등록하기를 누르면 다른 이전화면으로 돌아가도록 구현할 것
// 증권을 추가한 경우 보험(미등록 증권) screen에서 등록한 보험 내역이 사라지나 확인할 것
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

import { ImagePicker, Permissions } from "expo";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import { connect } from "react-redux";

import _ from "lodash";

import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

class RegistrationStock extends React.Component {
  state = {
    image:
      "http://mblogthumb3.phinf.naver.net/MjAxODA2MTVfMjkg/MDAxNTI5MDM2Mzc2NTMx.Ivt22TO6PAHisNnQ0hZr1TGhAKpX0jS3P8DOgd7eUzcg.bOEGQziKBWU89ao2RBaB-eAXGy79kcEu4OC9vMj3lJMg.PNG.stan322/image.png?type=w800"
  };
  static navigationOptions = ({ navigation }) => {
    return {
      title: "KALON",
      headerStyle: { backgroundColor: "#F5DA81" },
      headerTitleStyle: { fontSize: 22, color: "white" }
    };
  };

  //   async componentDidMount() {
  //     const name = this.props.navigation.getParam("name");
  //      const insuranceCo = this.props.navigation.getParam("insuranceCo");
  //      const startDay = this.props.navigation.getParam("startDay");
  //   }
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
    let image = this.state.image;
    var name = this.props.navigation.getParam("name");
    var startDay = this.props.navigation.getParam("startDay");
    var insuranceCo = this.props.navigation.getParam("insuranceCo");
    var UserInsuranceID = this.props.navigation.getParam("UserInsuranceID");

    // name: item.name,
    // startDay: item.startDay,
    // insuranceCo: item.insuranceCo,
    // UserInsuranceID: item.UserInsuranceID

    return (
      <ScrollView style={styles.container}>
        <View
          style={{
            width: "100%",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <View
            style={{
              height: 70,
              width: "90%",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "row",
              borderColor: "#D8D8D8",
              borderWidth: 1,
              borderRadius: 10,
              marginTop: 20
            }}

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
              source={{ uri: this.companyLogo(insuranceCo) }}
            />
            <View
              style={{
                width: "100%",
                paddingLeft: 90,
                flexDirection: "column"
              }}
            >
              <Text style={{ fontSize: 18 }}>{name}</Text>
              <Text style={{ fontSize: 13, marginTop: 3 }}>{startDay}</Text>
            </View>
            <MaterialCommunityIcons
              name="checkbox-marked-outline"
              style={{ position: "absolute", fontSize: 25, right: 20 }}
            />
          </View>
        </View>
        <View
          style={{
            flex: 1,
            paddingTop: 20,
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <View style={{ width: 300, height: 300 }}>
            <Image
              source={{ uri: image }}
              style={{ borderRadius: 30, width: 290, height: 290 }}
            />

            <TouchableOpacity
              style={{
                backgroundColor: "white",
                width: 50,
                height: 50,
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
                  fontSize: 40
                }}
              />
            </TouchableOpacity>
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
              width: 250,

              justifyContent: "center",
              alignItems: "center",
              borderRadius: 20,
              borderColor: "#F5DA81",
              borderWidth: 1.5
            }}
            onPress={() => {
              if (
                this.state.image ==
                "http://mblogthumb3.phinf.naver.net/MjAxODA2MTVfMjkg/MDAxNTI5MDM2Mzc2NTMx.Ivt22TO6PAHisNnQ0hZr1TGhAKpX0jS3P8DOgd7eUzcg.bOEGQziKBWU89ao2RBaB-eAXGy79kcEu4OC9vMj3lJMg.PNG.stan322/image.png?type=w800"
              ) {
                return alert("연필모양을 눌러 증권을 등록해주세요");
              }
              // reducer에 데이터 추가하는 거 못해먹겠다.
              // else {
              //   this.props.dispatch({
              //     type: "ADD_USER_STOCKIMAGE",
              //     id: UserInsuranceID,
              //     insuranceStockImage: this.state.image
              //   });
              // }
            }}
          >
            <Text> 증권 등록하기 </Text>
          </TouchableOpacity>
        </View>
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
      this.setState({
        image: result.uri
      });
      //   this.props.dispatch({
      //     type: "ADD_USER_STOCKIMAGE",
      //     StockImageId: this.insuranceNum,
      //     image: result.uri
      // });
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
    UserInsuranceInfo: state.UserInsuranceInfo.slice(0, 5)
  };
};

export default connect(mapStateToProps)(RegistrationStock);
