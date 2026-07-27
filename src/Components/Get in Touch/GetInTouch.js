import "./GetInTouch.css"

function GetInTouch() {
    
    return (
        <main className="main-GetInTouch" id="GetInTouch">

            <div className="text-div">
                <h1 className="GetInTouch-heading">Get In Touch</h1>
                <h2 className="Lets-work-together">Let's Work Together</h2>

                <p className="short-para">I'm currently accepting new projects and would love to hear about yours.
                    <br />
                    Let me bring your vision to life with beautiful, functional digital experiences.<br />
                    <br />
                    Email: Sdaniyalh4@gmail.com<br />
                    <br />
                    Contact: 0336-123123 <br />
                    <br />
                    Location: Karachi, Pakistan</p>
            </div>
            <div className="input-div">
                <input type="text" placeholder="Your Name" className="input"></input>
                <input type="text" placeholder="Your Email" className="input"></input>
                <textarea type="text" placeholder="Your Message" rows={15} cols={60} className="input"></textarea>
                <button className="send-button">Send Message</button>
            </div>


        </main>
    )
}

export default GetInTouch