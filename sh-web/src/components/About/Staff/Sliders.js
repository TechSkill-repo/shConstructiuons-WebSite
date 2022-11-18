import React, { Component } from "react";
import Slider from "react-slick";
import './Staff.scss';

export default class Sliders extends Component {

  
  state = {
    screen:1
  }
   
 componentDidMount() {
 
   this.setState({
    screen: window.matchMedia('(max-width: 600px)').matches? 1 : 4 

   })
   
}
  render() {
    const settings = {
      dots: true,
     
      infinite: true,
      slidesToShow:this.state.screen ,
      slidesToScroll: 3,
      autoplay: true,
      speed: 1000,
      autoplaySpeed: 2000,
      cssEase: "linear",
      className: "center",
      centerMode: true,
      infinite: true,
    };
    return (
      <div>
       
        <Slider {...settings}>
          
           
        <div>
        <div className="staff-card">
            <div className="img">
              <img
                src="https://preview.codeless.co/bygge/default/wp-content/uploads/2021/06/staff2.png"
                alt=""
              />
            </div>
            <div class="card-content">
              <h4 class="name">Simon John</h4>
              <div class="clip des">CTO/CO FOUNDER</div>
              <div class="team-socials">
                <a href="#">
                <i class="fa-brands fa-facebook"></i>
                </a>
                <a href="#">
                <i class="fa-brands fa-instagram"></i>
                </a>
                <a href="#">
                <i class="fa-brands fa-twitter"></i>
                </a>
               
              </div>
            </div>
          </div>
          </div>
          <div>
          <div className="staff-card">
            <div className="img">
              <img
                src="https://preview.codeless.co/bygge/default/wp-content/uploads/2021/06/staff2.png"
                alt=""
              />
            </div>
            <div class="card-content">
              <h4 class="name">Simon John</h4>
              <div class="clip des">CTO/CO FOUNDER</div>
              <div class="team-socials">
                <a href="#">
                <i class="fa-brands fa-facebook"></i>
                </a>
                <a href="#">
                <i class="fa-brands fa-instagram"></i>
                </a>
                <a href="#">
                <i class="fa-brands fa-twitter"></i>
                </a>
               
              </div>
            </div>
          </div>
          </div>
          <div>
          <div className="staff-card">
            <div className="img">
              <img
                src="https://preview.codeless.co/bygge/default/wp-content/uploads/2021/06/staff2.png"
                alt=""
              />
            </div>
            <div class="card-content">
              <h4 class="name">Simon John</h4>
              <div class="clip des">CTO/CO FOUNDER</div>
              <div class="team-socials">
                <a href="#">
                <i class="fa-brands fa-facebook"></i>
                </a>
                <a href="#">
                <i class="fa-brands fa-instagram"></i>
                </a>
                <a href="#">
                <i class="fa-brands fa-twitter"></i>
                </a>
               
              </div>
            </div>
          </div>
          </div>
          <div>
          <div className="staff-card">
            <div className="img">
              <img
                src="https://preview.codeless.co/bygge/default/wp-content/uploads/2021/06/staff2.png"
                alt=""
              />
            </div>
            <div class="card-content">
              <h4 class="name">Simon John</h4>
              <div class="clip des">CTO/CO FOUNDER</div>
              <div class="team-socials">
                <a href="#">
                <i class="fa-brands fa-facebook"></i>
                </a>
                <a href="#">
                <i class="fa-brands fa-instagram"></i>
                </a>
                <a href="#">
                <i class="fa-brands fa-twitter"></i>
                </a>
               
              </div>
            </div>
          </div>
          </div>
          <div>
          <div className="staff-card">
            <div className="img">
              <img
                src="https://preview.codeless.co/bygge/default/wp-content/uploads/2021/06/staff2.png"
                alt=""
              />
            </div>
            <div class="card-content">
              <h4 class="name">Simon John</h4>
              <div class="clip des">CTO/CO FOUNDER</div>
              <div class="team-socials">
                <a href="#">
                <i class="fa-brands fa-facebook"></i>
                </a>
                <a href="#">
                <i class="fa-brands fa-instagram"></i>
                </a>
                <a href="#">
                <i class="fa-brands fa-twitter"></i>
                </a>
               
              </div>
            </div>
          </div>
          </div>
          <div>
          <div className="staff-card">
            <div className="img">
              <img
                src="https://preview.codeless.co/bygge/default/wp-content/uploads/2021/06/staff2.png"
                alt=""
              />
            </div>
            <div class="card-content">
              <h4 class="name">Simon John</h4>
              <div class="clip des">CTO/CO FOUNDER</div>
              <div class="team-socials">
                <a href="#">
                <i class="fa-brands fa-facebook"></i>
                </a>
                <a href="#">
                <i class="fa-brands fa-instagram"></i>
                </a>
                <a href="#">
                <i class="fa-brands fa-twitter"></i>
                </a>
               
              </div>
            </div>
          </div>
          </div>
          <div>
          <div className="staff-card">
            <div className="img">
              <img
                src="https://preview.codeless.co/bygge/default/wp-content/uploads/2021/06/staff2.png"
                alt=""
              />
            </div>
            <div class="card-content">
              <h4 class="name">Simon John</h4>
              <div class="clip des">CTO/CO FOUNDER</div>
              <div class="team-socials">
                <a href="#">
                <i class="fa-brands fa-facebook"></i>
                </a>
                <a href="#">
                <i class="fa-brands fa-instagram"></i>
                </a>
                <a href="#">
                <i class="fa-brands fa-twitter"></i>
                </a>
               
              </div>
            </div>
          </div>
          </div>
          <div>
          <div className="staff-card">
            <div className="img">
              <img
                src="https://preview.codeless.co/bygge/default/wp-content/uploads/2021/06/staff2.png"
                alt=""
              />
            </div>
            <div class="card-content">
              <h4 class="name">Simon John</h4>
              <div class="clip des">CTO/CO FOUNDER</div>
              <div class="team-socials">
                <a href="#">
                <i class="fa-brands fa-facebook"></i>
                </a>
                <a href="#">
                <i class="fa-brands fa-instagram"></i>
                </a>
                <a href="#">
                <i class="fa-brands fa-twitter"></i>
                </a>
               
              </div>
            </div>
          </div>
          </div>
          <div>
          <div className="staff-card">
            <div className="img">
              <img
                src="https://preview.codeless.co/bygge/default/wp-content/uploads/2021/06/staff2.png"
                alt=""
              />
            </div>
            <div class="card-content">
              <h4 class="name">Simon John</h4>
              <div class="clip des">CTO/CO FOUNDER</div>
              <div class="team-socials">
                <a href="#">
                <i class="fa-brands fa-facebook"></i>
                </a>
                <a href="#">
                <i class="fa-brands fa-instagram"></i>
                </a>
                <a href="#">
                <i class="fa-brands fa-twitter"></i>
                </a>
               
              </div>
            </div>
          </div>
          </div>
        </Slider>
      </div>
    );
  }
}