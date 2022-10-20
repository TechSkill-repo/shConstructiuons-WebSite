import React from "react";
import "../../styles/Footer.css";
function Footer() {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <h2 className="cursive">S.H.  Constructions</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est
            delectus rem architecto minima corporis molestiae maxime consequatur
            quod, aut quo fugiat inventore iusto. Vel nam at sequi facilis
            ducimus officiis rerum reprehenderit labore suscipit ex, iste amet
            expedita nobis corporis nostrum vero totam quo nemo aspernatur
            aliquid quisquam nesciunt accusantium.
          </p>
        </div>
        <div className="footer-content-mid">
          <h2>Address</h2>
          <h6>Admin</h6>
          <p><i class="fa-solid fa-phone"></i> +91 7377727777</p>
          <p>8708 Canal Dr. Henderson, KY 42420</p>
          <h6>Central</h6>
          <p><i class="fa-solid fa-phone"></i> +91 7377727777</p>
          <p>6 E. Glen Creek Street Lakewood, NJ 08701</p>

          <p>
            India</p>
           
        </div>
        <div className="footer-content-right">
          <h2>Contact Us</h2>
          <h6>For Buying</h6>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae,
            eaque. <br />
            <i class="fa-solid fa-envelope"></i> lorem8988@gmail.com
          </p>
          <h6>For Jobs and Oppurtunities</h6>
          <p>Lorem ipsum dolor sit amet. <br />
            <i class="fa-solid fa-envelope"></i> lorem8988@gmail.com</p>
          <h6>Social Links</h6>
          <div className="social-links">
            <a href="https://www.facebook.com/">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://www.instagram.com/">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://www.twitter.com/">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://www.linkedin.com/">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
    
      </div>
      <p className="bottom">  SH Constructions © 2022</p>
    </div>
  );
}

export default Footer;
