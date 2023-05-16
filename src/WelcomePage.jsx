import React from "react";

function WelcomePage() {
    return (
        <div>
          <header>
            <div className="container">
              <h3>Welcome to Showwcase services</h3>

              <a href="#" className="google-btn">
                <i className="fab fa-google"></i>Sign in with Google
              </a>
              <a href="#" className="github-btn">
                <i className="fab fa-github"></i>Sign in with GitHub
              </a>
              <a href="#" className="twitter-btn">
                <i className="fab fa-twitter"></i>Sign in with Twitter
              </a>
            </div>
          </header>
        </div>
    );
}
export default WelcomePage;