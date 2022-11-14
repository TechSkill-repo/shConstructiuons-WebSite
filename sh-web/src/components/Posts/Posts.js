import './Posts.scss';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { PostContext } from '../../context/PostContext';
import { useContext } from 'react';


function Posts() {

    const {data} = useContext(PostContext)
    // console.log(data.post.imgUrl)
  return (
    <>
    <Navbar dark={true} ></Navbar>
    <div className='posts'>
    <div className="posts-hero">
        <div className="posts-hero-heading">
            <h1>
            {data.post.title}
                </h1>
                <p className='clip'>{new Date().toLocaleDateString()}</p>
        </div>
        <img className='post-image' src="https://preview.codeless.co/bygge/default/wp-content/uploads/2022/01/shutterstock_1006180303.jpg" alt="" />
    </div>

    <div className="post">
         
         <p className="post-content">
            {data.post.para1}
         </p>
         <div className="post-content-image">
              <img src={data.post.imgUrl} alt="" />
         </div>
        
         <h3 className='post-content-heading'>{data.post.subHeading}</h3>
         <p className='post-content'>{data.post.para1}</p>
         <p className='post-content'>{data.post.para1}</p>
       
           

    </div>
    
           
    <Footer></Footer>

    </div>
    </>

  )
}

export default Posts