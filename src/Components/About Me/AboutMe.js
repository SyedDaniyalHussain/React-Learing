import "./AboutMe.css"
import DaniyalAboutPic from "../../Assets/1707950010190.jpg";

function AboutMe() {
    return (
        <main id="About" className="main-About-div">
            <h1 className="AboutMe-heading">About Me</h1>
            
            <div className="about-container">
               
                <div className="image-div">
                    <img src={DaniyalAboutPic} alt="daniyalAboutMePic"></img>
                
                </div>
                
                <div className="About-note">
                    <p className="aboutPara">I'm a passionate developer with expertise in creating modern web applications and digital experiences.
                        With a background in both design and development, I bring a unique perspective to every project.
                        <br />
                        <br />
                        My journey in tech began with a curiosity about how things work online.
                        I've since developed skills across the full stack while specializing in front-end development with clean, efficient code.
                        <br />
                        <br />
                        When I'm not coding, you can find me exploring new design trends, contributing to open-source projects, or mentoring aspiring developers in my community.
                       </p>
                </div>
            </div>
        </main>
    );
}

export default AboutMe