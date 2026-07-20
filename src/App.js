// import logo from './logo.svg';
import './App.css';

import Header from './Components/myHeader/Header';
import DaniyalCoverPhoto from "./Assets/Whisk_57428692ee41e1c83374e51f034ceae9dr.png"
import Button from './Components/myButton/Button';
import { campus, instituteName } from './additional';
import Card from './Components/myCards/Card';

function App() {
  let firstName = "Syed"
  let midName = "Daniyal"
  let lastName = "Hussain"
  return (
    <div>
      <nav className='navBar'>
       <Header />
      </nav> 
      {/* <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAPXQr98oHNOe7H1zbVra1gPKV4xAP76JZJ-p-vNw81-XgysMfcWeN6xw&s=10'
        alt="CAr pic"></img> */}
      <img src={DaniyalCoverPhoto} alt="Dniyal cover pic" className='DaniyalPic'></img>
      <h1 className='firsth1'>
        {`HEY! I am ${firstName} ${midName} ${lastName} `}
        <br />
        {`I am Studing in ${instituteName} at ${campus}`}
      </h1>
      <p className='buttonPara'>For more Click here
        <Button />
      </p>
      <p className='CardClassMain'>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />  
      </p>

    </div>
  );
}

export default App;
