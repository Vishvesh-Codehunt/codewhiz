import clientImg from '../Images/client.png';
import dot from '../Images/dot2.png';
import ring from '../Images/circle.png';
import happyClient from '../Images/happy-client.png';
import orangeCircle from '../Images/orange-ellipse.png';

function Testimonials(){
    return(
        <>
            <section id="testimonial">
                <div className="container-fluid banner-cnt">
                    <h1 className="test-h1">
                        What our happy client say
                    </h1>
                    <p className="banner-p test-p mx-auto">
                    Several selected clients, who already believe in our service.
                    </p>
                    <div className="row client-row">
                        <div className='col-md-4 col-12 col-sm-12 col-lg-4'>
                            <img src={dot} className='dot-img' alt="dot image" />
                            <img src={clientImg} className='client-human-img' alt="client-image"></img>
                            <img src={ring} className='ring' alt="ring-img"></img>
                        </div>
                        <div className='col-md-4 col-12 col-sm-12 col-lg-4 center-col'>
                            <h2 className='test-h2'>
                                Matthew Paul
                            </h2>
                            <p className='review'>
                            Perfect, very good job! Thank you for the amazing design and work. Really impressed with the high quality and quick turnaround time. Highly recommend.
                            </p>
                            <div className='dots'>
                                <i class="fa fa-circle active-circle" aria-hidden="true"></i>
                                <i class="fa fa-circle" aria-hidden="true"></i>
                                <i class="fa fa-circle" aria-hidden="true"></i>
                                <i class="fa fa-circle" aria-hidden="true"></i>
                                <i class="fa fa-circle" aria-hidden="true"></i>
                            </div>
                        </div>
                        <div className='col-md-4 col-12 col-sm-12 col-lg-4 right-col'>
                            <img src={orangeCircle} className="orange-circle" alt="orange-circle" />
                            <img src={happyClient} className='happy-client' alt="Happy Client Image"/>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Testimonials;