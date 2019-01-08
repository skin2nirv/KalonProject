/* state information 
UserInfo - 사용자의 개인정보
UserInsurancInfo - 사용자의 개인정보 중 현재 가입한 보험에 대한 내역
PlannerInfo - 설계사에 대한 정보 , 설계사 개인 페이지 링크도 필요할 듯?
RequestForISM - 보험금 청구내역 
InsuranceInfo - 특정 보험에 대한 데이터 
*/

const reducer = (
  state = {
    DetailPlannerInfo: {},
    SearchingIndex: "",
    UserStockImage: [],
    count: 1,
    InsuranceInfo: {
      id: 1111,
      guaranteeContents: [
        {
          guranteeName: "무배당 가족보험",
          detailPrice: 1200,
          detailContent: "사랑, 질병"
        },
        {
          guranteeName: "무배당 연인보험",
          detailPrice: 2120,
          detailContent: "이별, 100일 보장"
        },
        {
          guranteeName: "무배당 친구보험",
          detailPrice: 120,
          detailContent: "절교, 축의금"
        },
        {
          guranteeName: "배당 비트코인 보험",
          detailPrice: 2000,
          detailContent: "50% 하락시 보장"
        },
        {
          guranteeName: "배당 하이퍼렛저 보험",
          detailPrice: 4200,
          detailContent: "어려움, 배워도 모르겠음, 보장못함"
        }
      ]
    },
    UserInfo: {
      id: "kjs0629",
      name: "김정수",
      age: 30,
      sex: "남자",
      email: "jungsubabo@naver.com",
      phonenumber: "010-4383-8890",
      image:
        "https://freecartok.com/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png"
    },
    PlannerInfo: [
      {
        id: 1,
        name: "권태희",
        startDay: "18.09.04", //설계사 등록일
        clientNum: 80,
        team: "KALON",
        averageEstimation: 4, //별점
        uri: "http://img.hankyung.com/photo/201808/01.17511742.1.jpg",
        smartRecommedPoint: 10,
        comment: "미모가 보험 설계의 전부."
      },
      {
        id: 2,
        name: "김정수",
        startDay: "18.06.29", //설계사 등록일
        clientNum: 1,
        team: "KB생명",
        averageEstimation: 4, //별점
        uri: "https://images.shazam.com/coverart/t40174962-b767300956_s400.jpg",
        smartRecommedPoint: 100,
        comment: "설계의 차이는 곧 경험의 차이."
      },
      {
        id: 3,
        name: "김유준",
        startDay: "18.09.02", //설계사 등록일
        clientNum: 384,
        team: "HICompany",
        averageEstimation: 5, //별점
        uri:
          "https://kizmom.hankyung.com/pdsdata/model/KIZMOM_20170602100640.jpg",
        smartRecommedPoint: 14,
        comment: "진짜 이거 너무 빡세다.."
      },
      {
        id: 4,
        name: "권태희",
        startDay: "18.09.04", //설계사 등록일
        clientNum: 80,
        team: "kalon",
        averageEstimation: 4, //별점
        uri: "http://img.hankyung.com/photo/201808/01.17511742.1.jpg",
        smartRecommedPoint: 90,
        comment: "미모가 보험 설계의 전부."
      },
      {
        id: 5,
        name: "이태희",
        startDay: "18.09.04", //설계사 등록일
        clientNum: 80,
        team: "kalon",
        averageEstimation: 3, //별점
        uri: "http://img.hankyung.com/photo/201808/01.17511742.1.jpg",
        smartRecommedPoint: 25,
        comment: "마음과 달랐어 왜 이렇게 달라지는 건지."
      },
      {
        id: 6,
        name: "권희태",
        startDay: "18.09.04", //설계사 등록일
        clientNum: 80,
        team: "kalon",
        averageEstimation: 2, //별점
        uri: "http://img.hankyung.com/photo/201808/01.17511742.1.jpg",
        smartRecommedPoint: 1,
        comment: "왜 함께한 날들이 떠오르는지 ."
      },
      {
        id: 7,
        name: "김준",
        startDay: "18.09.02", //설계사 등록일
        clientNum: 384,
        team: "HICompany",
        averageEstimation: 1, //별점
        uri:
          "https://kizmom.hankyung.com/pdsdata/model/KIZMOM_20170602100640.jpg",
        smartRecommedPoint: 32,
        comment: "혹시 나와같은지 바쁜일상속에 내생각은..."
      },
      {
        id: 8,
        name: "유준김",
        startDay: "18.09.02", //설계사 등록일
        clientNum: 384,
        team: "HICompany",
        averageEstimation: 3, //별점
        uri:
          "https://kizmom.hankyung.com/pdsdata/model/KIZMOM_20170602100640.jpg",
        smartRecommedPoint: 32,
        comment: "운다고 달라지는 일은 아무것도 없어요."
      },
      {
        id: 9,
        name: "김유준",
        startDay: "18.09.02", //설계사 등록일
        clientNum: 384,
        team: "HICompany",
        averageEstimation: 2, //별점
        uri:
          "https://kizmom.hankyung.com/pdsdata/model/KIZMOM_20170602100640.jpg",
        smartRecommedPoint: 23,
        comment: "후회하지 않는지 끝이라는게... 생각보다 쉬운일."
      }
    ],
    UserInsuranceInfo: [
      {
        UserInsuranceID: 1,
        insuranceId: 1111,
        name: "국민 행복 암 보험",
        startDay: "18.06.29",
        contractor: "김정수",
        insured: " 김정수",
        price: "10000",
        insuranceCo: "메리츠",
        insurancStock: true
      },
      {
        UserInsuranceID: 2,
        insuranceId: 1111,
        name: "변비 보험",
        startDay: "18.09.04",
        contractor: "김수정",
        insured: " 김수정",
        price: "12350",
        insuranceCo: "국민",
        insurancStock: false
      },
      {
        UserInsuranceID: 3,
        insuranceId: 1111,
        name: "설사 보험",
        startDay: "18.09.02",
        contractor: "수정김",
        insured: " 수김정",
        price: "132450",
        insuranceCo: "삼성",
        insurancStock: false
      },
      {
        UserInsuranceID: 4,
        insuranceId: 1111,
        name: "복통 보험",
        startDay: "18.09.04",
        contractor: "김태희",
        insured: "김태희",
        price: "12350",
        insuranceCo: "국민",
        insurancStock: false
      },
      {
        UserInsuranceID: 5,
        insuranceId: 1111,
        name: "인민 암 보험",
        startDay: "18.06.29",
        contractor: "김정수",
        insured: " 김정수",
        price: "10000",
        insuranceCo: "메리츠",
        insurancStock: false
      },
      {
        UserInsuranceID: 6,
        insuranceId: 1111,
        name: "인민 설사 보험 ",
        startDay: "18.06.29",
        contractor: "김정수",
        insured: " 김정수",
        price: "10000",
        insuranceCo: "삼성",
        insurancStock: false
      }
    ],
    RequestForISM: [
      {
        accidentName: "교통사고",
        accidentDay: "18.06.29",
        requestDay: "180629",
        accidentNum: "045sD456",
        insuranceName: " 김정수",
        insuranceCo: "삼성",
        stateReceive: false
      },
      {
        accidentName: "치과진단 ",
        accidentDay: "18.09.04",
        requestDay: "180630",
        accidentNum: "54SDFN6",
        insuranceName: " 권태희",
        insuranceCo: "국민",
        stateReceive: "3,000"
      },
      {
        accidentName: "복통",
        accidentDay: "18.05.02",
        requestDay: "180902",
        accidentNum: "SDF5423",
        insuranceName: "김희태",
        insuranceCo: "메리츠",
        stateReceive: false
      },
      {
        accidentName: "비염",
        accidentDay: "18.06.01",
        requestDay: "180904",
        accidentNum: "0sd45f",
        insuranceName: " 김유준",
        insuranceCo: "삼성",
        stateReceive: "2,500"
      },
      {
        accidentName: "두통",
        accidentDay: "18.08.21",
        requestDay: "180930",
        accidentNum: "sdf12s1",
        insuranceName: " 김수정",
        insuranceCo: "메리츠",
        stateReceive: "500"
      },
      {
        accidentName: " 머리아픔 ",
        accidentDay: "18.08.21",
        requestDay: "170203",
        accidentNum: "sdf165s1",
        insuranceName: " 김수정",
        insuranceCo: "메리츠",
        stateReceive: false
      }
    ]
  },
  action
) => {
  switch (action.type) {
    case "ADD_USER_IMAGE":
      return {
        ...state,
        UserInfo: {
          ...state.UserInfo,
          image: action.image
        }
      };
    // case "ADD_USER_STOCKIMAGE":
    //   const UII = state.UserInsuranceInfo;
    //   return {
    //     UserInsurancInfo: UII.map(info =>
    //       action.Id === info.UserInsuranceID
    //         ? { ...info, insurancStock: action.insuranceStockImage }
    //         : info
    //     )
    //   };
    case "ADD_SEARCH_INDEX":
      return {
        ...state,

        SearchingIndex: action.SearchingIndex
      };
    case "ADD_PLANNER_DETAIL":
      return {
        ...state,

        DetailPlannerInfo: action.item
      };
  }

  return state;
};

export default reducer;
