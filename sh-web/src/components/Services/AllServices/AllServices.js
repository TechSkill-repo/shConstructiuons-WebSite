import './AllServices.scss'
import workers from '../../../assets/workers.jpg'

function AllServices() {
  return (
    <div className='all-services'>
 
        <div className="all-services-heading">
            <p className="clip">SERVICES WE OFFER</p>
            <h1>All Services </h1>
        </div>

        <div className="all-services-cards">
        <div className="all-services-cards-card">

<img src={workers} alt="" />
<div>

<h2>Man Power</h2>
<p className='description'>Lorem Lorem ipsum dolor sit. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, velit. ipsum dolor sit amet consectetur, adipisicing elit. Aperiam, suscipit.</p>
</div>
</div>
            <div className="all-services-cards-card">

                <img src="https://images.pexels.com/photos/5453837/pexels-photo-5453837.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                <div>

                <h2>Technical Support</h2>
                <p className='description'>Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Id nobis magni maxime exercitationem natus ab ullam vel quo dicta. ipsum dolor sit amet consectetur, adipisicing elit. Aperiam, suscipit.</p>
                </div>
            </div>

            <div className="all-services-cards-card">

                <img src="https://images.pexels.com/photos/159275/macro-focus-cogwheel-gear-159275.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                <div>

                <h2>Mechanical Maintainance</h2>
                <p className='description'>Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Id nobis magni maxime exercitationem natus ab ullam vel quo dicta. ipsum dolor sit amet consectetur, adipisicing elit. Aperiam, suscipit.</p>
                </div>
            </div>
        </div>

    </div>
  )
}

export default AllServices