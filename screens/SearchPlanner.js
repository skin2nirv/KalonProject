import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
  TextInput
} from "react-native";
import { connect } from "react-redux";
import _ from "lodash";
import { FlatList } from "react-native-gesture-handler";
import Ionicons from "react-native-vector-icons/Ionicons";

class SearchPlanner extends React.Component {
  state = {};
  static navigationOptions = ({ navigation }) => {
    return {
      headerStyle: { backgroundColor: "#F5DA81", justifyContent: "flex-start" }
    };
  };

  componentDidMount() {
    this.setState({
      PlannerInfo: _.filter(this.props.PlannerInfo, {
        name: this.props.SearchingIndex
      })
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <View
          style={{
            flexDirection: "row",
            height: 50,
            width: "100%",
            justifyContent: "center"
          }}
        />
        {
          //   PlanerInfo
          //   name: "김유준",
          //   startDay: "18.09.02", //설계사 등록일
          //   clientNum: 384,
          //   team: "HICompany",
          //   averageEstimation: 2, //별점
          //   uri:
          //     "https://kizmom.hankyung.com/pdsdata/model/KIZMOM_20170602100640.jpg",
          //   smartRecommedPoint: 23
        }
        <ScrollView style={{ width: "100%" }}>
          <View
            style={{
              borderTopColor: "#F2F2F2",
              borderTopWidth: 1,
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              height: 20
            }}
          />
          <FlatList
            style={{ width: "100%" }}
            contentContainerStyle={{ alignItems: "center" }}
            data={this.state.PlannerInfo}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={{
                  width: 350,
                  height: 200,
                  margin: 20
                }}
                onPress={() => {
                  this.props.navigation.navigate("InsurancePlannerDetail"),
                    this.props.dispatch({
                      type: "ADD_PLANNER_DETAIL",
                      item: item
                    });
                }}
              >
                <View
                  style={{
                    width: 350,
                    height: 150,

                    borderTopRightRadius: 10,
                    borderTopLeftRadius: 10,
                    backgroundColor: "#F2F2F2"
                  }}
                >
                  <Image
                    style={{
                      position: "absolute",
                      left: 20,
                      top: 15,
                      height: 120,
                      width: 100,
                      borderRadius: 5
                    }}
                    source={{ uri: item.uri }}
                  />
                  <View
                    style={{
                      position: "absolute",
                      width: 200,
                      height: 150,
                      right: 0,
                      justifyContent: "center",
                      alignItems: "flex-start"
                    }}
                  >
                    <Text style={{ color: "#585858", fontSize: 20 }}>
                      {item.team}
                    </Text>
                    <Text>{item.name} 설계사</Text>
                    <Text>담당 고객 : {item.clientNum}명</Text>
                    <Text>똑똑포인트 : {item.smartRecommedPoint}</Text>

                    <Text
                      style={{
                        fontSize: 15,
                        color: "#6E6E6E",
                        position: "absolute",
                        top: 20,
                        right: 20,
                        backgroundColor: "white",
                        paddingRight: 5,
                        paddingLeft: 5
                      }}
                    >
                      <Ionicons
                        name="ios-star"
                        style={{ fontSize: 20, color: "#FFBF00" }}
                      />
                      X{item.averageEstimation}
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    width: 350,
                    height: 50,
                    borderBottomEndRadius: 10,
                    borderColor: "#F2F2F2",
                    borderWidth: 1,
                    justifyContent: "center",
                    alignItems: "center"
                  }}
                >
                  <Text style={{ fontSize: 20, color: "#585858" }}>
                    "{item.comment}"
                  </Text>
                </View>
              </TouchableOpacity>
            )}
          />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1
  }
});

const mapStateToProps = state => {
  return {
    PlannerInfo: state.PlannerInfo,
    SearchingIndex: state.SearchingIndex
  };
};

export default connect(mapStateToProps)(SearchPlanner);
