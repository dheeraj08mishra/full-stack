import React from "react";
import User from "./User";
import UserCLass from "./UserClass";
// const About = () => {
//   return (
//     <div>
//       {/* <User /> */}
//       <UserCLass userData="Dheeraj" />
//       <UserCLass userData="Dheeraj2" />
//     </div>
//   );
// };

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showUser: true,
    };
    console.log("Parent constructor");
  }
  componentDidMount() {
    console.log("Parent componentDidMount");
  }

  render() {
    console.log("Parent render");
    return (
      <>
        <User />
        <UserCLass userData="Dheeraj" />
        {/* <UserCLass userData="Dheeraj2" /> */}
      </>
    );
  }
}
export default About;
