import React,{useState,useEffect} from 'react';
import '../../styles/Testimonials.css'
import {testimonials} from '../data'

function Testimonials() {

   const [display, setDisplay] = useState(0);


   
  const previous = _ => {
    if (display > 0) {
      setDisplay(display - 1);
    } else {
      setDisplay(3 - 1);
    }
  
    
  };
  const next = _ => {
    if (display < 2) {
      setDisplay(display + 1);
    }
    else {
      setDisplay(0);
    }
  };
  useEffect(() => {
    const interval = setInterval(next,3000);

    return () => clearTimeout(interval);


  }, [display]);
  return (
	<div className='testimonials'>
    <h3>Testimonials </h3>    
    <div className='test'>
    <div className="box">

	<div className="wrapper">


		
		<div className="testimonial-container" id="testimonial-container" key={testimonials[0].name}
		
		style={{opacity: display === 0 ? 1 : 0}}
		
		>
			<div id="testimonial1" className="active">
				<div className='content'>

			<i className="fas fa-quote-left"></i>
               <h6>
				
				{testimonials[0].message}
				</h6> 
				
				<i className="fas fa-quote-right"></i>
				<p>{testimonials[0].name}</p>
				<p>{testimonials[0].designation}</p>
				</div>

					
				<img src={testimonials[0].imgUrl} />
               
		
			</div>

		</div>
		<div className="testimonial-container" id="testimonial-container" key={testimonials[1].name}
		style={{opacity: display === 1 ? 1 : 0}}
		
		>
			<div id="testimonial1" className="active">
				<div className='content'>

			<i className="fas fa-quote-left"></i>
               <h6>
				
				{testimonials[1].message}
				</h6> 
				
				<i className="fas fa-quote-right"></i>
				<p>{testimonials[1].name}</p>
				<p>{testimonials[1].designation}</p>
				</div>

					
				<img src={testimonials[1].imgUrl} />
               
		
			</div>

		</div>
		<div className="testimonial-container" id="testimonial-container" key={testimonials[2].name}
		
		style={{opacity: display === 2 ? 1 : 0}}
		>
			<div id="testimonial1" className="active">
				<div className='content'>

			<i className="fas fa-quote-left"></i>
               <h6>
				
				{testimonials[2].message}
				</h6> 
				
				<i className="fas fa-quote-right"></i>
				<p>{testimonials[2].name}</p>
				<p>{testimonials[2].designation}</p>
				</div>

					
				<img src={testimonials[2].imgUrl} />
               
		
			</div>

		</div>
		<button id="prev" onClick={previous}> <i className="fas fa-chevron-left left-own-arrow"></i></button>
		<button id="next" onClick={next}> <i className="fas fa-chevron-right right-own-arrow"></i></button>
	</div>
	
</div></div>
	</div>
  )
}

export default Testimonials