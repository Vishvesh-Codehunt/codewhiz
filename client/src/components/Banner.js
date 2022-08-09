import bannerImage from '../Images/banner.png';
import ellipse from '../Images/Ellipse.png';
import dot from '../Images/dot.png';
import rectangle from '../Images/Rectangle.png';
import google from '../Images/google.png';
import airbnb from '../Images/airbnb.png';
import uber from '../Images/uber.png';
import amazon from '../Images/amazon.png';
import rectLeft from '../Images/rect-left.png';
import rectRight from '../Images/rect-right.png';
import boxSearch from '../Images/search.png';
import wallet from '../Images/wallet.png';
import code from '../Images/code.png';
import chart from '../Images/chart.png';
import circle from '../Images/circle.png';
import blue from '../Images/blue.png';
import videoPic from '../Images/video-pic.png';
import orangeCircle from '../Images/orange-ellipse.png';
import play from '../Images/play.png';
import lightBlue from '../Images/light-blue-rect.png';

function Banner(){
    return(
        <>
        <section id="banner">
        <div className='container-fluid banner-cnt'>
            <div className='row'>
                <div className='col-md-6 col-12 col-sm-12 col-lg-6'>
                    <img src={ellipse} className='ellipse-img' alt="ellipse-img"></img>
                    <div className='banner-content'>
                        <h2 className='banner-h2'>
                            A Digital Product Agency
                        </h2>
                        <p className="banner-p">
                        Leading digital agency with solid design and development expertise. We build readymade websites, mobile applications, and elaborate online business services.
                        </p>
                        <a href='/'>
                            <button className='btn btn-lg contact-btn'>
                                Contact Now
                            </button>
                        </a>
                    </div>
                    <div className='dot-pattern'>
                        <img src={dot} className="dot-top" alt="dot-top"/>
                    </div>
                </div>
                <div className='col-md-6 col-12 col-sm-12 col-lg-6'>
                    <img src={bannerImage} className='banner-img' alt="banner-img"/>
                </div>
            </div>
            <div className='row'>
                <img src={rectangle} className="rect-img" alt="rect-img"></img>
            </div>
        </div>
        </section>

<section id="client">
<div className="container-fluid banner-cnt">
    <div className="row">
        <div className="col-md-3 col-12 col-sm-12 col-lg-3">
            <h1 className="client-h1">
                Our Client
            </h1>
            <p className="banner-p client-p">
            Several selected clients, who already believe in our service.
            </p>
        </div>
       
            <div className="col-md-6 col-6 col-sm-12 col-lg-2 logo-grid mx-auto">
                <img src={google} className='client-img' alt="client-img"></img>
            </div>
            <div className="col-md-6 col-6 col-sm-12 col-lg-2 logo-grid mx-auto">
                <img src={airbnb} className='airbnb' alt="airbnb"></img>
            </div>
            <div className="col-md-6 col-6 col-sm-12 col-lg-2 logo-grid mx-auto">
                <img src={uber} className='uber' alt="uber"></img>
            </div>
            <div className="col-md-6 col-6 col-sm-12 col-lg-2 logo-grid mx-auto">
                <img src={amazon} className='amazon' alt="amazon"></img>
            </div>
    
    </div>
</div>
</section>

<section id='help'>
<div className='container-fluid banner-cnt'>
    <div className='row'>
        <div className='col-12 col-sm-12 col-lg-4 col-md-4 help-left'>
            <img src={rectLeft} className="rect-left" alt="rect-left"></img>
            <h2 className='banner-h2'>
                How can we help your Business ?
            </h2>
            <p className='banner-p help-p'>
            We build readymade websites, mobile applications, and elaborate online business services.
            </p>
            <img src={blue} className="blue-img" alt="blue-img"></img>
        </div>
        <div className='col-12 col-sm-12 col-lg-8 col-md-8 help-right'>
            <img src={rectRight} className="rect-right" alt="rect-right"></img>
            <div className='row box-row'>
                <div className='col-md-2 col-12 col-sm-12 col-lg-2'>

                </div>
                <div className='col-md-4 col-12 col-sm-12 col-lg-4 help-box box-1 mx-auto'>
                    <div className='img-bg mx-auto'>
                        <img src={boxSearch} className="box-search" alt="box search"></img>
                    </div>
                    <h3 className='help-box-title'>
                        Business Idea <br/>Planning
                    </h3>
                    <p className="help-box-p">
                    We present you a proposal and discuss niffty-gritty like
                    </p>
                </div>
                <div className='col-md-4 col-12 col-sm-12 col-lg-4 box-2 help-box'>
                <div className='img-bg mx-auto second-box'>
                        <img src={wallet} className="box-search" alt="wallet"></img>
                    </div>
                    <h3 className='help-box-title'>
                    Financial <br/> Planning System
                    </h3>
                    <p className="help-box-p">
                    Protocols apart from aengage models, pricing billing
                    </p>
                </div>
                <div className='col-md-2 col-12 col-sm-12 col-lg-2'>
                    
                </div>
            </div>

            <div className='row box-row'>
                <div className='col-md-2 col-12 col-sm-12 col-lg-2'>

                </div>
                <div className='col-md-4 col-12 col-sm-12 col-lg-4 help-box box-1 box-3 mx-auto'>
                    <div className='img-bg third-box mx-auto'>
                        <img src={code} className="box-search" alt="search"></img>
                    </div>
                    <h3 className='help-box-title'>
                    Development  <br/>Website and App
                    </h3>
                    <p className="help-box-p">
                    Communication protocols apart from engagement models
                    </p>
                </div>
                <div className='col-md-4 col-12 col-sm-12 col-lg-4 box-2 box-4 help-box'>
                <div className='img-bg mx-auto fourth-box'>
                        <img src={chart} className="box-search" alt="search"></img>
                    </div>
                    <h3 className='help-box-title'>
                    Market <br/> Analysis Project
                    </h3>
                    <p className="help-box-p">
                    Protocols apart from aengage models, pricing billing
                    </p>
                </div>
                <div className='col-md-2 col-12 col-sm-12 col-lg-2'>
                    
                </div>
            </div>

            <img src={circle} className="circle" alt="circle"></img>
        </div>
    </div>
   
</div>
</section>


<section id='product'>
<div className='container-fluid banner-cnt'>
    <div className='row'>
        <div className='col-md-6 col-12 col-sm-12 col-lg-6 product-left'>
            <img src={videoPic} className='video-pic' alt="Video Photo"></img>
            <img src={play} className="play-btn" alt="play-video"></img>
            <img src={orangeCircle} className='ornage-circle' alt="Orange Circle SVG"></img>
        </div>
        <div className='col-md-6 col-12 col-sm-12 col-lg-6 product-right'>
            <img src={lightBlue} className='lightblue' alt="light blue svg"></img>
            <div className='product-content'>
                <h2 className='banner-h2 product-h2'>
                Great Digital Product <br/> Agency since 2016 
                </h2>
                <p className='banner-p product-p'>
                Our Business Plan is a written document describing a company's core business activites, Objectives, and how it plans to achieve its goals. Our goal is to provide our client high quality Product with modern idea accordingly their budgets and according thir reuirements.
                </p>
            </div>
        </div>
    </div>
    
</div>
</section>
</>
    )
}

export default Banner;