import React from "react";
import { Link} from "react-router-dom"; 

const About = () => {
    return (
        <div>
            <h1>About Page</h1>
            <p> You made it to the about page!</p>
            <div>
                <Link to="/">
                  <button>Back to Main</button>
                </Link>
              </div>
        </div>
        
    )
}

export default About;
