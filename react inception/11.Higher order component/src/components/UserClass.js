import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userinfo: {
        name: "Dheeraj Mishra",
        location: "Kanpur",
        contact: "@dheerajmishra08",
      },
    };
  }
  async componentDidMount() {
    // console.log(this.props.name + "componentDidMount got called for child component")

    const response = await fetch(
      "https://api.github.com/users/dheeraj08mishra"
    );
    const data = await response.json();
    console.log(data);
    this.setState({ userinfo: data });
  }
  componentDidUpdate() {
    console.log( "componentDidUpdate got called for child component")
  }
  componentWillUnmount() {
    console.log( "componentWillUnmount got called for child component")
  }
  render() {
    debugger;
    const { name, location, login, public_repos,avatar_url } = this.state.userinfo;
    return (
      <div className="user-card">
        <img src={avatar_url} alt="Dheeraj" className="UserImage" />
        <h1>Public Repo:{public_repos}</h1>

        <h2>Name:{name}</h2>
        <h3>Location: {location}</h3>
        <h3>UserLogin:{login}</h3>
      </div>
    );
  }
}

export default UserClass;
