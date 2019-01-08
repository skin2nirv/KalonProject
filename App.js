// Project 기본 사항.
// App이름 : KALON
// 기본색상 : #F5DA81 (navigation header color - 노란색)
// backUpColor : #F7D358 (조금 진한 노란색)
// 배경 회색 : #D8D8D8

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
import InsurancePlan from "./screens/InsurancePlan";
import RecomandInsurance from "./screens/RecomandInsurance";
import PrivateData from "./screens/PrivateData";
import PersonalInformationUsageHistory from "./screens/PersonalInformationUsageHistory";
import LeaveServce from "./screens/LeaveServce";
import MoreScreenOfClaim from "./screens/MoreScreenOfClaim";
import MoreScreenOfMyInsurance from "./screens/MoreScreenOfMyInsurance";
import SearchPlanner from "./screens/SearchPlanner";
import InsurancePlannerDetail from "./screens/InsurancePlannerDetail";
import InsuranceChoiceScreen from "./screens/InsuranceChoiceScreen";
//import Test from "./screens/Test";

// 할일
//1. async storage 설정하기
//2. 소비자가 작성한 댓글 추가하기
//3. 화면 뒤로가기 구성하기(현재 navigation option 중 goBack이 안먹힘.. 왜 ???)
//4. 로그인 화면, 증권추가하기, CoinInfo화면 모달형식으로 빼기 [화면 전환 UI상태 다시 기획할 필요가 있음.]
//5. 증권과 보험금청구내역 해쉬값으로 표시하는 방식 추가하기. 그냥 내 보험 내역에 증권의 해쉬값을 표시하는 형태로?
//

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
  CoinInfo: CoinInfo,
  RecomandInsurance: RecomandInsurance
});

const ClaimForInsuranceStack = createStackNavigator({
  ClaimForInsurance: ClaimForInsurance,
  InsuranceChoiceScreen: InsuranceChoiceScreen // 이화면 모달로 처리하기
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
    청구: ClaimForInsuranceStack,
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
