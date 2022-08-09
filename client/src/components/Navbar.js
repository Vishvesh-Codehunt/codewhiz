function Navbar(){
    return (
        <div className="container-fluid navbar-container">
        <nav className="navbar navbar-expand-lg">
            <a className="navbar-brand color" href="/"><span className="bolder">A+</span>  Studio</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"><i className="fa fa-2x fa-bars" style={{color: "#2639ED",fontSize:"22px",backgroundColor:"white",padding:"10px"}} aria-hidden="true"></i></span>
            </button>
            <div className="collapse navbar-collapse ml-auto" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                    <a className="nav-link" href="/">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/">What We Do</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/">Services</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/">Project</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/">Blog</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/">Contact</a>
                </li>
                </ul>
            </div>
        </nav>
        </div>
    );
}

export default Navbar;