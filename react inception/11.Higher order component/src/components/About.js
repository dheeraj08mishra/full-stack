import User from './User';
import UserClass from './UserClass';
const About = () => {
    return (
        <div className="about">
        <h1>About us</h1>
       
       {/* <User /> */}
       <UserClass name={"Dheeraj Mishra(class based)"} location={"Kanpur Classbasaed"} contact={"@dheerajmishra08"} />
        </div>
    );
}

export default About;