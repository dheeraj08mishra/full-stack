import React from "react";
class GrandChild extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      calledFrom: "",
    };
    console.log(this.state.calledFrom + "GrandChild constructor");
  }
  componentDidMount() {
    console.log(this.state.calledFrom + "GrandChild componentDidMount");
  }
  render() {
    return (
      console.log(this.state.calledFrom + "grandchild render"),
      (<div>{/* <h1>GrandChild</h1> */}</div>)
    );
  }
}

export default GrandChild;
