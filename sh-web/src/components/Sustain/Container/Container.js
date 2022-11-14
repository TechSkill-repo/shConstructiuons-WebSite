import "./Container.scss";
import { sustain_cards } from "../../data";
import { PostContext } from "../../../context/PostContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { sustain_posts } from "../../data";
function Container() {

  const {dispatch} =useContext(PostContext)
const showPost = (title)=>
{
  const post = sustain_posts.find((post)=>post.title===title)
  dispatch({type:"SET_POST", payload:{post}})
}

  return (
    <div className="sustain-container">
      <div className="sustain-container-heading">
        <p className="clip">WHAT WE PROVIDE</p>
        <h1>Sustainability We Provide</h1>
      </div>

      <div className="sustain-container-cards">
        {sustain_cards.slice(0,3).map((card, index) => (
          <div className="sustain-container-cards-card" key={card.title}>
            <img src={card.url} alt="sustain" />

            <div className="card-content">

            <h4>{card.title}</h4>
            <p>{card.desc}</p>
            <Link className="clip link" onClick={()=>showPost(card.title)} to="/sustainability/post">
              READ MORE{" "}
              <svg
                width="9"
                height="10"
                viewBox="0 0 9 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.49889 0.96674C8.48052 0.691209 8.24227 0.482738 7.96674 0.501107L3.47671 0.800443C3.20118 0.818811 2.99271 1.05706 3.01107 1.33259C3.02944 1.60813 3.2677 1.8166 3.54323 1.79823L7.53437 1.53215L7.80044 5.52329C7.81881 5.79882 8.05706 6.00729 8.3326 5.98893C8.60813 5.97056 8.8166 5.7323 8.79823 5.45677L8.49889 0.96674ZM1.37629 9.32925L8.37629 1.32925L7.62371 0.670747L0.623712 8.67075L1.37629 9.32925Z"
                  fill="#CA3D00"
                  />
              </svg>
            </Link>
                  </div>
          </div>
        ))}
      </div>
      <div className="sustain-container-cards">
        {sustain_cards.slice(3).map((card, index) => (
          <div className="sustain-container-cards-card" key={card.title}>
            <img src={card.url} alt="sustain" />

            <div className="card-content">

            <h4>{card.title}</h4>
            <p>{card.desc}</p>
            <Link className="clip link" onClick={()=>showPost(card.title)} to="/sustainability/post" >
              READ MORE{" "}
              <svg
                width="9"
                height="10"
                viewBox="0 0 9 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.49889 0.96674C8.48052 0.691209 8.24227 0.482738 7.96674 0.501107L3.47671 0.800443C3.20118 0.818811 2.99271 1.05706 3.01107 1.33259C3.02944 1.60813 3.2677 1.8166 3.54323 1.79823L7.53437 1.53215L7.80044 5.52329C7.81881 5.79882 8.05706 6.00729 8.3326 5.98893C8.60813 5.97056 8.8166 5.7323 8.79823 5.45677L8.49889 0.96674ZM1.37629 9.32925L8.37629 1.32925L7.62371 0.670747L0.623712 8.67075L1.37629 9.32925Z"
                  fill="#CA3D00"
                  />
              </svg>
            </Link>
                  </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Container;
