import {useState, useEffect} from 'react';
import subscribe from '../Images/subscribe-bg.png';
import blueRect from '../Images/blue-rect.png';
import subRect from '../Images/sub-rect.png';
import Axios from 'axios';


function Subscribe(){

    const [email, setEmail] = useState('');

    const submitEmail = function(){
        Axios.post('http://localhost:3001/insert', {email:email}).then(function(){
            alert("Thanks for subscribing");
        });
    }

    return(
        <>
            <section id="subscribe">
                <div className="container-fluid banner-cnt subscribe-cnt">
                    <div className="row sub-row">
                        <div className='col-md-12 col-sm-12 col-lg-12 col-12'>
                            <img src={subscribe} alt="subscribe-img" className='subscribe-img'></img>
                            <img src={subRect} className='sub-rect' alt="sub-rect"></img>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-md-7 col-12 col-sm-12 col-lg-7 left-row'>
                            <h2 className='sub-h2'>
                            Subscribe Newsletter
                            </h2>
                            <p className='sub-p'>
                            I will update good news and promotion service not spam
                            </p>
                        </div>
                        <div className='col-md-5 col-12 col-sm-12 col-lg-5'>
                            <img src={blueRect} className="rect-blue" alt="blue rectangle" />
                            <div className='sub-form'>
                                <input type="email" className='form-control' placeholder='Enter Your Email Address' value={email} name="email" required onChange={function(e){
                                    setEmail(e.target.value);
                                    console.log(email);
                                }}></input> 
                                <button type='submit' className='btn btn-lg submit-btn' onClick={submitEmail}>Contact Now</button>
                            </div>
                        </div>
                    </div>

                    <hr className='myhr'></hr>
                </div>
            </section>
        </>
    );
}

export default Subscribe;