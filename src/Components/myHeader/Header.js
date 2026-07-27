import "./Header.css"

function Header() {
  let firstName = "Syed"
  let midName = "Daniyal"
  let lastName = "Hussain"
  return (
    <div className="main-header-div">
      <nav className="container-header">
      
       <div className="header-heading">
          <h1 className="heading-syed">{firstName}<span className="daniyal"> {midName}</span> {lastName}</h1>
        </div>
      
        <div className='navBar'>
          <a className="header-points" href="#home">Home</a>
          <a className="header-points" href="#About">About</a>
          <a className="header-points" href="#Skills">Skills</a>
          <a className="header-points" href="#Projects">Projects</a>
          <a className="header-points" href="#GetInTouch">Get In Touch</a>   
        </div>
      
      </nav>
    
    </div>
  )
}

export default Header