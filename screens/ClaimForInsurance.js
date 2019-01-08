import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { connect } from "react-redux";
import { ImagePicker, Permissions } from "expo";
import EvilIcons from "react-native-vector-icons/EvilIcons";

class ClaimForInsurance extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: "KALON",
      headerStyle: { backgroundColor: "#F5DA81" },
      headerTitleStyle: { fontSize: 22, color: "white" }
    };
  };
  state = {
    image:
      "http://mblogthumb3.phinf.naver.net/MjAxODA2MTVfMjkg/MDAxNTI5MDM2Mzc2NTMx.Ivt22TO6PAHisNnQ0hZr1TGhAKpX0jS3P8DOgd7eUzcg.bOEGQziKBWU89ao2RBaB-eAXGy79kcEu4OC9vMj3lJMg.PNG.stan322/image.png?type=w800"
  };
  async componentDidMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
  }
  render() {
    var item = this.props.ChoiceInsurance;
    return (
      //  UserInfo: {
      //     id: "kjs0629",
      //     name: "김정수",
      //     age: 30,
      //     sex: "남자",
      //     email: "jungsubabo@naver.com",
      //     phonenumber: "010-4383-8890",
      //     image:
      //       "https://freecartok.com/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png"
      //   },

      <View style={styles.container}>
        <View
          style={{
            height: 60,
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
            borderColor: "#D8D8D8",
            borderWidth: 1
          }}
        >
          <Text>보험금 청구하기</Text>
        </View>
        <View
          style={{
            height: 60,
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
            borderColor: "#D8D8D8",
            borderWidth: 1
          }}
        >
          <Text> 청구자 : {this.props.UserInfo.name}</Text>
        </View>
        <TouchableOpacity
          style={{
            height: 60,
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
            borderColor: "#D8D8D8",
            borderWidth: 1
          }}
          onPress={() => {
            this.props.navigation.navigate("InsuranceChoiceScreen");
          }}
        >
          <Text> {item || "보험선택 click"} </Text>
        </TouchableOpacity>

        <View
          style={{
            height: 60,
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
            borderColor: "#D8D8D8",
            borderWidth: 1
          }}
        >
          <Text>보험 영수증 등록하기</Text>
        </View>
        <View style={{ height: 30 }} />

        <View style={{ width: 300, height: 300 }}>
          <Image
            source={{ uri: this.state.image }}
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
                return alert("연필모양을 눌러 영수증을 등록해주세요");
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
            <Text> 영수증 등록하기 </Text>
          </TouchableOpacity>
        </View>
      </View>
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
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start"
  }
});

const mapStateToProps = state => {
  return {
    UserInfo: state.UserInfo,
    ChoiceInsurance: state.ChoiceInsurance
  };
};

export default connect(mapStateToProps)(ClaimForInsurance);
