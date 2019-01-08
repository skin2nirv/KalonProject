import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  FlatList,
  TouchableOpacity
} from "react-native";
import { connect } from "react-redux";
import _ from "lodash";

class InsurancePlannerDetail extends React.Component {
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
  componentDidMount() {
    {
      console.log(this.props.DetailPlannerInfo);
    }
  }

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
            height: 230,
            width: "100%",
            backgroundColor: "#D8D8D8",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <Image
            source={{ uri: this.props.DetailPlannerInfo.uri }}
            style={{ height: 200, width: 150, borderRadius: 10 }}
          />
        </View>
        <View
          style={{
            height: 230,
            width: "100%",
            borderWidth: 1,
            bordercolor: "#D8D8D8",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          {
            // DetailPlannerInfo
            // id: 1,
            // name: "권태희",
            // startDay: "18.09.04", //설계사 등록일
            // clientNum: 80,
            // team: "KALON",
            // averageEstimation: 4, //별점
            // uri: "http://img.hankyung.com/photo/201808/01.17511742.1.jpg",
            // smartRecommedPoint: 10,
            // comment: "미모가 보험 설계의 전부."
          }
          <Text>{this.props.DetailPlannerInfo.name}</Text>
          <Text>{this.props.DetailPlannerInfo.comment}</Text>
          <Text>
            평점 : {this.props.DetailPlannerInfo.averageEstimation} ({" "}
            {this.props.DetailPlannerInfo.clientNum} 명)
          </Text>
        </View>
        <View
          style={{
            height: 60,
            width: "100%",
            borderWidth: 1,
            bordercolor: "#D8D8D8",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <Text>기본정보</Text>
        </View>
        <View
          style={{
            height: 150,
            width: "100%",
            borderWidth: 1,
            bordercolor: "#D8D8D8",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          {
            // DetailPlannerInfo
            // id: 1,
            // name: "권태희",
            // startDay: "18.09.04", //설계사 등록일
            // clientNum: 80,
            // team: "KALON",
            // averageEstimation: 4, //별점
            // uri: "http://img.hankyung.com/photo/201808/01.17511742.1.jpg",
            // smartRecommedPoint: 10,
            // comment: "미모가 보험 설계의 전부."
          }
          <Text>시작일 : {this.props.DetailPlannerInfo.startDay}</Text>
          <Text>고객수 : {this.props.DetailPlannerInfo.clientNum}</Text>
          <Text>소속팀 : {this.props.DetailPlannerInfo.team}</Text>
          <Text>
            똑똑이 점수 : {this.props.DetailPlannerInfo.smartRecommedPoint}
          </Text>
        </View>
        <View
          style={{
            height: 60,
            width: "100%",
            borderWidth: 1,
            bordercolor: "#D8D8D8",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <Text>최근활동</Text>
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
            height: 60,
            width: "100%",
            borderWidth: 1,
            bordercolor: "#D8D8D8",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <Text>Comment</Text>
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
          data={this.props.UserComment}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={{
                height: 70,
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "row"
              }}
            >
              <Image
                style={{
                  width: 50,
                  height: 50,
                  position: "absolute",
                  left: 15,
                  borderColor: "#E6E6E6",
                  borderWidth: 1,
                  borderRadius: 25
                }}
                source={{ uri: item.uri }}
              />
              <View
                style={{
                  width: "100%",
                  paddingLeft: 90,
                  flexDirection: "column"
                }}
              >
                <Text style={{ fontSize: 18 }}>{item.username}</Text>
                <Text style={{ fontSize: 13, marginTop: 3 }}>
                  {item.comment}
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "column",
                  position: "absolute",
                  right: 20,
                  top: 15
                }}
              >
                <Text style={{ fontSize: 10 }}> 별점 : {item.start} </Text>
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
    DetailPlannerInfo: state.DetailPlannerInfo,
    UserInsuranceInfo: state.UserInsuranceInfo,
    UserComment: state.UserComment
  };
};

export default connect(mapStateToProps)(InsurancePlannerDetail);
