export default function Footer() {
    return (
      <div className="footer">
        {/* <hr/> */}
        <a target="_blank" href="https://www.google.com/maps/dir//1102+Salem+Ave,+Dayton,+OH+45406/@39.7746572,-84.2196603,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x88408122b505a61d:0xc35c5f962acf2cf5!2m2!1d-84.2174716!2d39.7746572"> <i className="fa fa-map-marker" aria-hidden="true"></i>&nbsp;1102 Salem Ave. Dayton, OH 45406</a>
        <br/>
        <a className="social" href="https://www.facebook.com/SalemCrownApts/" target="_blank"><i className="fa fa-facebook-square" aria-hidden="true"></i></a>
        &nbsp;  &nbsp;
        <a className="social" target="_blank" href="https://www.yelp.com/biz/salem-crown-apartments-dayton"><i className="fa fa-yelp" aria-hidden="true"></i></a>
        <br/>
      <span className= "copy"> &copy;  Copyright 2023 Salem Crown Apartments. </span>
      &nbsp; &nbsp; &nbsp;
      <span className="copy"> Designed and Developed by <a target="_blank" href="http://antonlys.com">me</a></span>

     
      </div>
    )
  }