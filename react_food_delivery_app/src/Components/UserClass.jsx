import React from "react";
import GrandChild from "./GrandChild";
class UserCLass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: "",
    };

    console.log(this.props.userData + " constructor");
  }

  componentDidMount() {
    console.log(this.props.userData + " componentDidMount");
    this.intervalId = setInterval(() => {
      console.log("loading loading");
    }, 1000);
  }
  componentWillUnmount() {
    console.log(this.props.userData + " componentWillUnmount");

    // Clear the interval when the component is about to unmount
    clearInterval(this.intervalId);
  }

  render() {
    console.log(this.props.userData + " render");
    return <div>{/* <GrandChild calledFrom={this.props.userData} /> */}</div>;
  }
}

export default UserCLass;
