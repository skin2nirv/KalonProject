import React from "react";
import {} from "react-native";
import {
  createStackNavigator,
  createBottomTabNavigator,
  createAppContainer
} from "react-navigation";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Home from "./screens/Home";
import ClaimForInsurance from "./screens/ClaimForInsurance";
import Myinfo from "./screens/Myinfo";
import HomeDetail from "./screens/HomeDetail";
import Planner from "./screens/Planner";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducers";
import MyWeb from "./screens/MyWeb";
import Login from "./screens/Login";
import CoinInfo from "./screens/CoinInfo";
import InsuranceStockOption from "./screens/InsuranceStockOption";
import RegistrationStock from "./screens/RegistrationStock";
import InsuranceDetail from "./screens/InsuranceDetail";
import Test from "./screens/Test";
import InsurancePlan from "./screens/InsurancePlan";
import RecomandInsurance from "./screens/RecomandInsurance";
import PrivateData from "./screens/PrivateData";
import PersonalInformationUsageHistory from "./screens/PersonalInformationUsageHistory";
import LeaveServce from "./screens/LeaveServce";
import MoreScreenOfClaim from "./screens/MoreScreenOfClaim";
import MoreScreenOfMyInsurance from "./screens/MoreScreenOfMyInsurance";
import SearchPlanner from "./screens/SearchPlanner";
import InsurancePlannerDetail from "./screens/InsurancePlannerDetail";

// 할일
// async storage 설정하기
// 소비자가 작성한 댓글 추가하기
//
//로그인 화면, 증권추가하기, CoinInfo화면 모달형식으로 빼기
//증권 내역도 추가해야하나? 그냥 내 보험 내역에 증권의 해쉬값을 표시하는 형태로?

let store = createStore(reducer);

const homeStack = createStackNavigator({
  Home: Home, // Home 으로 바꿀 것

  Login: {
    screen: Login
  },
  Detail: HomeDetail,
  ClaimForInsurance: ClaimForInsurance,
  Planner: Planner,
  MyWeb: MyWeb,
  InsurancePlan: InsurancePlan,
  RecomandInsurance: RecomandInsurance
});

const MyInfoStack = createStackNavigator({
  Myinfo: Myinfo,
  InsuranceStockOption: InsuranceStockOption,
  RegistrationStock: RegistrationStock,
  InsuranceDetail: InsuranceDetail,
  PrivateData: PrivateData,
  PersonalInformationUsageHistory: PersonalInformationUsageHistory,
  LeaveServce: LeaveServce,
  MoreScreenOfClaim: MoreScreenOfClaim,
  MoreScreenOfMyInsurance: MoreScreenOfMyInsurance
});

const CoinInfoStack = createStackNavigator({
  CoinInfo: CoinInfo
});

// 스택에 들어가야지 header 값이 생긴다.
//

const PlannerStack = createStackNavigator({
  Planner: Planner,
  SearchPlanner: SearchPlanner,
  InsurancePlannerDetail: InsurancePlannerDetail
});
const TabNavigator = createBottomTabNavigator(
  {
    홈: homeStack,
    //분석: HomeDetail,
    청구: ClaimForInsurance,
    설계사: PlannerStack, //PlannerStack으로 바꿀것
    내정보: MyInfoStack
  },
  {
    defaultNavigationOptions: ({ navigation, navigationOptions }) => ({
      tabBarIcon: ({ horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === "홈") {
          iconName = "ios-home";
        } else if (routeName === "분석") {
          return (
            <MaterialCommunityIcons
              name="google-analytics"
              size={horizontal ? 20 : 25}
              color={tintColor}
            />
          );
        } else if (routeName === "설계사") {
          iconName = "ios-people";
        } else if (routeName === "내정보") {
          iconName = "ios-book";
        } else if (routeName === "청구") {
          return (
            <MaterialCommunityIcons
              name="plus-minus-box"
              size={horizontal ? 20 : 25}
              color={tintColor}
            />
          );
        }
        return (
          <Ionicons
            name={iconName}
            size={horizontal ? 20 : 25}
            color={tintColor}
          />
        );
      }
    }),
    tabBarOptions: {
      activeTintColor: "#F7D358",
      inactiveTintColor: "gray"
    }
  }
);

const RootStack = createStackNavigator(
  {
    Main: {
      screen: TabNavigator
    },
    MyModal: {
      screen: CoinInfoStack
    }
  },
  {
    mode: "modal",
    headerMode: "none"
  }
);

const AppContainer = createAppContainer(RootStack);

export default function() {
  return (
    <Provider store={store}>
      <AppContainer />
    </Provider>
  );
}
