 # Monolith architechture

 # Microservice architecture


1. as soon as page loads -> api--> render
2. loads -> render-> api-> rerender  react uses this one

# useEffect
useEffect(()=>{},[]);
1st -> callback function
2nd-> dependecy

callback function will get call once application get render


we can create shimmer ui for initial loading in case of before data load

# in react we are able to modify the const variable how?
by using useState whenever function get called it create new const with updated value that how it is getting updated
const [btnName, setBtnName] = useState("Login");
<button className="login-btn" onClick={()=>{setBtnName(btnName!=="Login"?"Login":"Logout")}} >{btnName}</button>

it is basically re concile algo.

# for input type text
usestate and onchange property should get used