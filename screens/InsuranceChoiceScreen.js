//증권추가하기 누르면 나오는 화면

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
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import JoininsuranceFlatList from "../components/JoinInsuranceFlatList";

class InsuranceChoiceScreen extends React.Component {
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
        <View style={styles.textBox}>
          <MaterialCommunityIcons
            name="file-import"
            style={{ fontSize: 18, paddingRight: 3, color: "#F5DA81" }}
          />

          <Text style={{ fontSize: 18, color: "grey" }}>가입보험></Text>
        </View>
        <FlatList
          style={{ width: "100%" }}
          ItemSeparatorComponent={() => <View style={styles.separatorLine} />}
          data={this.props.UserInsuranceInfo}
          renderItem={({ item }) => (
            <JoininsuranceFlatList
              onPress={() => {
                this.props.dispatch({
                  type: "ADD_CHOICEINSURANCE",
                  ChoiceInsurance: item.name
                }),
                  this.props.navigation.navigate("ClaimForInsurance");
              }}
              uri={this.companyLogo(item.insuranceCo)}
              name={item.name}
              startDay={item.startDay}
              price={item.price}
            />
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
  },
  textBox: {
    height: 50,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row"
  },
  separatorLine: {
    height: StyleSheet.hairlineWidth,
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: "grey"
  }
});

const mapStateToProps = state => {
  return {
    UserInsuranceInfo: state.UserInsuranceInfo
  };
};

export default connect(mapStateToProps)(InsuranceChoiceScreen);
