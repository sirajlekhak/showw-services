import React from "react";

function WelcomePage() {
    return (
        <div>
          <header>
            <div class="container">
              <h3>Welcome to Showwcase services</h3>

              <a href="#" class="google-btn">
                <i class="fab fa-google"></i>Sign in with Google
              </a>
              <a href="#" class="github-btn">
                <i class="fab fa-github"></i>Sign in with GitHub
              </a>
              <a href="#" class="twitter-btn">
                <i class="fab fa-twitter"></i>Sign in with Twitter
              </a>
            </div>
          </header>
        </div>
    );
}
export default WelcomePage;