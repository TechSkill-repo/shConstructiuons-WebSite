import './Form.scss'
import map from '../../../assets/map.png'
import {useState} from 'react'

function Form() {

    

        const [formDetails, setFormDetails] = useState({name:"", email:"", message:""});

        const handleInput = e =>
        {
            const {name, value} = e.target;
            setFormDetails({...formDetails, [name]: value});
            console.log(formDetails);
        }
  return (
    <div className="contact-form">

        <div className="contact-form-left">
            <h3>Reach Out To Us</h3>

            <form>
                 <div>
                    <input type="text" name="name" value={formDetails.name} placeholder="Name" onChange={handleInput}/>
                    <input type="email" name="email" value={formDetails.email} placeholder="Email"  onChange={handleInput} />
                    </div> 

                    <textarea name="message" placeholder="Message" value={formDetails.message} cols="30" rows="10"  onChange={handleInput}></textarea>
                     
                     <button type="submit" >Submit</button>

            </form>
        </div>
        <div className="contact-form-right">
                   <img src={map} alt="" />
        </div>
    </div>
  )
}

export default Form