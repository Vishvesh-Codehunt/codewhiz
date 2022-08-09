import facebook from '../Images/facebook.png';
import twitter from '../Images/twitter.png';
import linkedin from '../Images/linkedin.png';

function Footer(){
    return(
        <>
            <section id="footer">
                <div className="container-fluid banner-cnt">
                    <div className="row">
                        <div className="col-md-3 col-12 col-sm-12 col-lg-3">
                        <a className="navbar-brand color" href="/"><span className="bolder">A+</span>  Studio</a>
                        <p className="footer-p">
                        Leading digital agency with solid design and development expertise. We build readymade websites, mobile applications, and elaborate online business services.
                        </p>
                        <div className='icons'>
                            <a href='/' className='fb-a'>
                                <img src={facebook} className='fb-icon' alt="Facebook Icon"></img>
                            </a>
                            <a href='/' className='fb-a'>
                                <img src={twitter} className='fb-icon' alt="Facebook Icon"></img>
                            </a>
                            <a href='/' className='fb-a'>
                                <img src={linkedin} className='fb-icon' alt="Facebook Icon"></img>
                            </a>
                        </div>
                        </div>
                        <div className="col-md-1 col-12 col-sm-12 col-lg-1">

                        </div>
                        <div className="col-md-3 col-12 col-sm-12 col-lg-3">
                            <h4 className='footer-h4'>
                                What We Do
                            </h4>
                            <ul className='footer-ul'>
                                <a href="/">
                                    <li>
                                        Website Design
                                    </li>
                                </a>
                                <a href="/">
                                    <li>
                                        App Design
                                    </li>
                                </a>
                                <a href="/">
                                    <li>
                                        Social Media Manage
                                    </li>
                                </a>
                                <a href="/">
                                    <li>
                                        Market Analysis Project
                                    </li>
                                </a>
                            </ul>
                        </div>
                        <div className="col-md-2 col-12 col-sm-12 col-lg-2">
                        <h4 className='footer-h4'>
                                Company
                            </h4>
                            <ul className='footer-ul'>
                                <a href="/">
                                    <li>
                                        About Us
                                    </li>
                                </a>
                                <a href="/">
                                    <li>
                                        Career
                                    </li>
                                </a>
                                <a href="/">
                                    <li>
                                        Become Investor
                                    </li>
                                </a>
                               
                            </ul>
                        </div>
                        <div className="col-md-2 col-12 col-sm-12 col-lg-2">
                        <h4 className='footer-h4'>
                                Support
                            </h4>
                            <ul className='footer-ul'>
                                <a href="/">
                                    <li>
                                        FAQ
                                    </li>
                                </a>
                                <a href="/">
                                    <li>
                                        Policy
                                    </li>
                                </a>
                                <a href="/">
                                    <li>
                                        Business
                                    </li>
                                </a>
                               
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
export default Footer;