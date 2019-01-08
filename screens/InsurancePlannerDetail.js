import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { connect } from "react-redux";
import _ from "lodash";

class InsurancePlannerDetail extends React.Component {
  componentDidMount() {
    {
      console.log(this.props.DetailPlannerInfo);
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>설계사 디테일 화면</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

const mapStateToProps = state => {
  return {
    DetailPlannerInfo: state.DetailPlannerInfo
  };
};

export default connect(mapStateToProps)(InsurancePlannerDetail);
