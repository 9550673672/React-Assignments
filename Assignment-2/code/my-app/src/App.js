// import './index.css';
import './App.css';
import './index.js';

const employee = {
    name: 'Tom',
    location: 'New York',
    bloodGroup: 'B+',
    age: 28,
    profileImg: 'https://www.w3schools.com/howto/img_avatar.png'
}

function data(props){
  return(
  <div className="container">
      <img className='img' src={props.profileImg} alt="logo"/>
      <h4 className='name'>{props.name}</h4>
  <div className='details'>
      <h4>Location</h4>
      <p>{props.location}</p>
      <h4>Blood Group</h4>
      <p>{props.bloodGroup}</p>
      <h4>Age</h4>
      <p>{props.age}</p>
  </div>  
  </div>
);
}
let App=()=>data(employee)
export default App;
