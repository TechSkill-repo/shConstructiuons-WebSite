import "./Footer.scss";

function Footer() {
  return (
    <div className="footer">
      <div className="head">
        <div className="left">
          <h2>Newsletter Signup</h2>
          <p className="clip">
            Get notified about updates and be the first to get early access to
            new episodes.
          </p>
        </div>
        <div className="right">
          <input type="text" placeholder="Your email address" />
          <button>Subscribe</button>
        </div>
      </div>
      <div className="wrapper">
        
      <div className="body">
        <div className="logo cursive">S.H. CONSTRUCTIONS</div>
        <div className="sub-grp">
          <h3>Office</h3>
          <div className="content">
            <p>+800 123 456 789</p>
            <p>shconstructions@sh.com</p>
            <p>
              2231 REDBUD DRIVE
              <p>WHITESTONE, NY 11357</p>
            </p>
            <p>
              MON – FRI: 9 AM – 7 PM <p>SAT – SUN: CLOSED</p>
            </p>
          </div>
        </div>
        <div className="sub-grp">
            <h3>Links</h3>
            <div className="content links">
                <p>Home</p>
                <p>About</p>
                <p>Services</p>
                <p>Blog</p>
                <p>Contact</p>
                </div>

        </div>
        <div className="sub-grp">
            <h3>Social Links</h3>
            <div className="logos">
                <div className="social">
                <i class="fa-brands fa-facebook"></i>
                </div>
                <div className="social">
                <i class="fa-brands fa-twitter"></i>
                </div>
                <div className="social">
                <i class="fa-brands fa-instagram"></i>
                 </div>
                 <div className="social">
                <i class="fa-brands fa-linkedin"></i>
                 </div>

            </div>
        </div>
      </div>
      <p className="footer-clip" >
      © 2022, ALL RIGHTS RESERVED | S.H. Constructions
      </p>
      </div>
    </div>
  );
}

export default Footer;
