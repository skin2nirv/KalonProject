import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  Image,
  FlatList,
  ScrollView
} from "react-native";
import {
  createStackNavigator,
  createBottomTabNavigator,
  createAppContainer
} from "react-navigation";
import { connect } from "react-redux";
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";
import _ from "lodash";
import HomeRoundButton from "../components/HomeRoundButton";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Entypo from "react-native-vector-icons/Entypo";

// 할일
//1. naver news app을 통해서 뉴스 받아오기
//2. 버튼 연결하기
//3. FlatList Components로 빼기.
//4. style 전부 빼기
//    headerStyle: {
//  backgroundColor: '#f4511e',
//},
//headerTintColor: '#fff',
//headerTitleStyle: {
//  fontWeight: 'bold',
//},
//};
//
//

class Home extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: "KALON",
      headerStyle: { backgroundColor: "#F5DA81" }, // 노란색
      headerTitleStyle: { fontSize: 22, color: "white" },
      headerRight: (
        <TouchableOpacity
          style={{
            flexDirection: "column",
            alignItems: "center",
            paddingRight: 20
          }}
          onPress={() => navigation.navigate("Login")}
        >
          <AntDesign name="login" style={{ color: "white", size: 10 }} />
          <Text style={{ fontSize: 10, color: "white" }}>로그인</Text>
        </TouchableOpacity>
      )
    };
  };

  state = {
    query: "보험시장"
  };
  //
  //
  // redux에서 받아 온 데이터를 특정 배열에 넣고 lodash를 이용해서 특정 배열을 변화시킨다.
  // 1. 별점순으로 재배열 시킨다. (sortBy 사용)
  // 2. 상위 8개 만 출력시킨다. (slice 사용)
  // 3. 변환된 데이터를 state에 추가하여 render를 자동으로 하게 만든다.
  // 의문점 "이러한 작업을 reducer 자체 일차적 필터를 통해 받는 방법이 없는가?"
  // 얼만큼 stylesheet로 빼야하고 얼만큼 컴퍼넌트로 빼야하나? -> 이건 개인의 취향.. 하지만 뺄 수 있는만큼 빼는 것이 일반적인 듯??
  //
  //
  //
  //

  fetchNews(page = 1) {
    const display = 10;
    const start = display * (page - 1) + 1;
    var query = this.state.query;

    return fetch(
      `https://openapi.naver.com/v1/search/news.json?query=${query}&display=${display}&start=${start}`,
      {
        headers: {
          "X-Naver-Client-Id": "vTiJhVKTgkFtmAOe1aRw",
          "X-Naver-Client-Secret": "KNnOp1CgQd"
        }
      }
    )
      .then(response => response.json())
      .then(responseJson => {
        return responseJson.items;
      })
      .catch(error => {
        console.error(error);
      });
  }

  componentDidMount() {
    this.fetchNews().then(items =>
      this.setState({
        NewsItems: items
      })
    );
    this.setState({
      items: this.props.PlannerInfo,
      index: 1,
      News: this.props.News
    });
    //
    //firstButton = "grey";
    //secondButton = "white";
    //
  }
  /* [2번] 질문 이 코드 왜 안먹히는 걸까? state로 하는 경우도 
  buttonColor() {
    if (this.state.index == 1) {
      (fisrtButton = "grey"), (secondButton = "white");
    } else if (this.state.index == 2) {
      (fisrtButton = "white"), (secondButton = "grey");
    }
  }

    buttonColor() {
    if (this.state.index == 1) {
      this.setState(
        { 
          fisrtButton : 'grey',
          secondButton : 'red'
        }
      )
    } else if (this.state.index == 2) {
      this.setState(
        { 
          fisrtButton : 'red',
          secondButton : 'grey'
        }
      )
    }
  }
*/

  render() {
    // [2번 질문]   this.buttonColor();
    // render에 setState함수가 들어가면 안된다. 무언 루프에 빠지게 되기 때문...
    //this.fetchNews();
    //3번 이슈 state의 query 값이 변화할때 다시 fetch를 하도록
    return (
      <ScrollView style={styles.container}>
        <View
          style={{
            borderColor: "#D8D8D8",
            borderWidth: 1,
            justifyContent: "space-around",
            alignItems: "center",
            height: 80,
            width: "100%",
            flexDirection: "row"
          }}
        >
          <HomeRoundButton
            onPressTopButton={() => this.props.navigation.navigate("내정보")}
            name="md-search"
            text="내정보"
          />

          <HomeRoundButton
            onPressTopButton={() => this.props.navigation.navigate("CoinInfo")}
            name="logo-bitcoin"
            text="코인"
          />
        </View>
        <View
          style={{
            height: 60,
            width: "100%",
            backgroundColor: "#F2F2F2",
            justifyContent: "center",
            flexDirection: "row",
            alignItems: "center"
          }}
        >
          <TouchableOpacity
            style={{
              backgroundColor: "white",
              height: 55,
              width: 121,
              borderColor: "#F2F2F2",
              borderWidth: 1,
              justifyContent: "center",
              alignItems: "center"
            }}
            onPress={() => {
              this.props.navigation.navigate("RecomandInsurance");
            }}
          >
            <AntDesign
              name="inbox"
              style={{
                textAlign: "center",
                color: "#F7D358",
                paddingBottom: 3,
                fontSize: 20
              }}
            />
            <Text style={{ fontSize: 12, color: "#A4A4A4" }}>추천상품</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: "white",
              height: 55,
              width: 121,
              borderColor: "#F2F2F2",
              borderWidth: 1,
              justifyContent: "center",
              alignItems: "center"
            }}
            onPress={() => this.props.navigation.navigate("InsurancePlan")}
          >
            <FontAwesome
              name="list-alt"
              style={{
                textAlign: "center",
                color: "#F7D358",
                paddingBottom: 5,
                fontSize: 20
              }}
            />
            <Text style={{ fontSize: 12, color: "#A4A4A4" }}>설계일정</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: "white",
              height: 55,
              width: 121,
              borderColor: "#F2F2F2",
              borderWidth: 1,
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <FontAwesome
              name="stethoscope"
              style={{
                textAlign: "center",
                color: "#F7D358",
                paddingBottom: 5,
                fontSize: 20
              }}
            />
            <Text style={{ fontSize: 12, color: "#A4A4A4" }}>병력조회</Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            height: 250,
            width: "100%",
            backgroundColor: "white",

            justifyContent: "flex-start",
            alignItems: "center"
          }}
        >
          <Text
            style={{
              fontSize: 18,
              marginTop: 15,
              marginBottom: 5,
              color: "#585858"
            }}
          >
            인기설계사>
          </Text>

          <FlatList
            style={{ height: 250, width: "100%" }}
            data={this.state.items}
            horizontal={true}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={{
                  justifyContent: "center",
                  alignItem: "center"
                }}
                onPress={() => {
                  this.props.navigation.navigate("InsurancePlannerDetail"),
                    this.props.dispatch({
                      type: "ADD_PLANNER_DETAIL",
                      item: item
                    });
                }}
              >
                <Image
                  source={{
                    uri: item.uri
                  }}
                  style={{ width: 120, height: 120, margin: 8 }}
                />
                <Text
                  style={{ color: "#6E6E6E", fontSize: 18, paddingLeft: 10 }}
                >
                  {item.team}
                </Text>
                <Text style={{ paddingLeft: 10 }}>{item.name} 설계사</Text>
                <Text
                  style={{ paddingLeft: 10, fontSize: 10, color: "#6E6E6E" }}
                >
                  <Ionicons
                    name="ios-star"
                    style={{ fontSize: 15, color: "#FFBF00" }}
                  />
                  X{item.averageEstimation}
                </Text>
              </TouchableOpacity>

              // ruducer 형태.
              // name: "권태희",
              // startDay: "18.09.04",
              // clientNum: 80,
              // team: "kalon",
              // averageEstimation: 4,
              // url: "http://img.hankyung.com/photo/201808/01.17511742.1.jpg"
            )}
          />
        </View>
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
        <View style={{ width: "100%" }}>
          <View
            style={{
              height: 50,
              paddingLeft: 5,
              justifyContent: "flex-start",
              alignItems: "center",
              flexDirection: "row",
              borderColor: "#F2F2F2",
              borderWidth: 2
            }}
          >
            <TouchableOpacity
              style={[
                styles.tabButton,
                {
                  borderColor: this.state.index == 1 ? "#F5DA81" : "white"
                }
              ]}
              onPress={() => {
                //  Onpress 에 두 가지 함수를 넘길 수 있다.
                // Setstate는 비동기로 실행되기 때문에 같은 함수 내에서 두번 호출하더라도 같은 값이 Q에 넘어간다.
                // 같은 key값을 변동시키는 setstate는 의미가 없다.
                // 파라미터로 함수를 넘겨준다??
                this.setState(
                  {
                    index: 1,
                    query: "보험시장"
                  },
                  () => {
                    this.fetchNews().then(items =>
                      this.setState({
                        NewsItems: items
                      })
                    );
                  }
                );
              }}
            >
              <Text>새소식</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                marginLeft: 15,
                borderColor: this.state.index == 2 ? "#F5DA81" : "white",
                borderWidth: 0.5,
                borderRadius: 25,
                width: 80,
                height: 30,
                justifyContent: "center",
                alignItems: "center"
              }}
              onPress={() => {
                this.setState(
                  {
                    index: 2,
                    query: "GA시장"
                  },
                  () => {
                    this.fetchNews().then(items =>
                      this.setState({
                        NewsItems: items
                      })
                    );
                  }
                );
              }}
            >
              <Text>보험 뉴스</Text>
            </TouchableOpacity>
          </View>
          <FlatList
            style={{ width: "100%" }}
            data={this.state.NewsItems}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={{
                  height: 50,
                  borderColor: "#F2F2F2",
                  borderWidth: 1,
                  justifyContent: "center",
                  alignItems: "flex-start",
                  paddingLeft: 5
                }}
                onPress={() =>
                  this.props.navigation.navigate("MyWeb", {
                    itemUri: item.link
                  })
                }
              >
                <Text style={{ fontSize: 13 }}>{item.title}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
        {console.log(this.state.query)}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  tabButton: {
    borderWidth: 0.5,
    borderRadius: 25,
    width: 80,
    height: 30,
    justifyContent: "center",
    alignItems: "center"
  }
});

const mapStateToProps = state => {
  return {
    InsuranceInfo: state.UserInsuranceInfo,
    PlannerInfo: state.PlannerInfo,
    News: state.News,
    InsuranceNews: state.InsuranceNews,
    topPlanner: _.sortBy(
      state.PlannerInfo,
      p => p.averageEstimation * -1
    ).slice(0, 5)
  };
};

export default connect(mapStateToProps)(Home);
