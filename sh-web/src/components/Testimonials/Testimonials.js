import React from 'react';
import '../../styles/Testimonials.css'
import {testimonials} from '../data'

function Testimonials() {
  return (
	<div className='testimonials'>
    <h3>Testimonials</h3>    
    <div className='test'>
    <div className="box">

	<div className="wrapper">

		{testimonials.map((testimonial) => (

		<div className="testimonial-container" id="testimonial-container" key={testimonial.name}>
			<div id="testimonial1" className="active">
				<div className='content'>

			<i className="fas fa-quote-left"></i>
                {testimonial.message}
				
				<i className="fas fa-quote-right"></i>
				<p>{testimonial.name}</p>
				<p>{testimonial.designation}</p>
				</div>

					
				<img src={testimonial.imgUrl} />
               
		
			</div>

		</div>
		)
	 					)}
		<button id="prev" > <i className="fas fa-chevron-left left-own-arrow"></i></button>
		<button id="next"> <i className="fas fa-chevron-right right-own-arrow"></i></button>
	</div>
	
</div></div>
	</div>
  )
}

export default Testimonials