import './App.css';

import Header from './Components/myHeader/Header';
// import DaniyalCoverPhoto from "./Assets/Whisk_57428692ee41e1c83374e51f034ceae9dr.png"
import DaniyalMainPhoto from "./Assets/Gemini_Generated_Image_5rhqp85rhqp85rhq.png";
import Button from './Components/myButton/Button';
import Card from './Components/myCards/Card';
import AboutMe from './Components/About Me/AboutMe';
import GetInTouch from "./Components/Get in Touch/GetInTouch";
import Footer from './Components/Footer/Footer';
import Skills from './Components/mySkills/SKills';

function App() {
  return (
    <main>
      
      <nav className='navBar'>
       <Header />
      </nav> 
      
      <img id='home' src={DaniyalMainPhoto} alt="Dniyal cover pic" className='DaniyalPic'></img>
      
      
      <div className='AboutMe-div'>
        <AboutMe />
      </div>
      
      <p className='buttonPara'>
        <Button />
      </p> 
      {/* <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAPXQr98oHNOe7H1zbVra1gPKV4xAP76JZJ-p-vNw81-XgysMfcWeN6xw&s=10'
        alt="CAr pic"></img> */}
     
     <div className='Skills-section'>
      <Skills />
     </div>
      <div className='CardClassMain'>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />  
        <Card />  
      </div>
     
      <div className='GetInTouch-div'>
        <GetInTouch />
      </div>
     
     <div className='Footer-div'>
      <Footer />
     </div>
    
    </main>
  );
}

export default App;
