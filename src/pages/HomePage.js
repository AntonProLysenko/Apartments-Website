import { Link } from "react-router-dom";
import { useState } from "react";
// import "animate.css";



import Footer from "../components/Footer";

export default function HomePage({ listings }) {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  const loaded = () => {
    const availableListings = []; //finding available listings

    listings.map((listing) => {
      if (listing.available === true) {
        // console.log(listing)
        return availableListings.push(listing);
      }
      return null
    });



    function MultipleAvailable() {

      return (
        <div className="add-container">
          <div className="ad">
            <span>
              We have {availableListings.length} available apartments
              <br />
              <Link to="/available">
                {" "}
                <button className="btn-add">See more</button>
              </Link>
            </span>
          </div>

          <div className="directions">
            <div>
              <i className="fa fa-compass" aria-hidden="true"></i>
              <span> Directions:</span>
            </div>
            <a
              href="https://www.google.com/maps/dir//1102+Salem+Ave,+Dayton,+OH+45406/@39.7746572,-84.2196603,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x88408122b505a61d:0xc35c5f962acf2cf5!2m2!1d-84.2174716!2d39.7746572"
              target="_blank"
              rel="noreferrer"
            >
              <span>1102 Salem Ave. Dayton, OH 45406</span>
            </a>
          </div>

          {
            //Pseudo element for aligning items to the very left and even center
          }
          <div className="ad-hidden">
            <div>
              <i className="fa fa-compass" aria-hidden="true"></i>
              <span> Directions:</span>
            </div>
            <a
              href="https://www.google.com/maps/dir//1102+Salem+Ave,+Dayton,+OH+45406/@39.7746572,-84.2196603,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x88408122b505a61d:0xc35c5f962acf2cf5!2m2!1d-84.2174716!2d39.7746572"
              target="_blank"
              rel="noreferrer"
            >
              <span>1102 Salem Ave. Dayton, OH 45406</span>
            </a>
            <br />
          </div>
        </div>
      );
    }

    function SingleAvailable() {
      //finding available listings

      return (
        <div className="add-container">
          <div className="ad">
            We have {availableListings.length} available apartment
            <br />
            <Link to="/available">
              <button className="btn-add">See more</button>
            </Link>
          </div>

          <div className="directions">
            <div>
              <i className="fa fa-compass" aria-hidden="true"></i>
              <span> Directions:</span>
            </div>
            <a
              href="https://www.google.com/maps/dir//1102+Salem+Ave,+Dayton,+OH+45406/@39.7746572,-84.2196603,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x88408122b505a61d:0xc35c5f962acf2cf5!2m2!1d-84.2174716!2d39.7746572"
              target="_blank"
              rel="noreferrer"
            >
              <span>1102 Salem Ave. Dayton, OH 45406</span>
            </a>
          </div>

          {
            //Pseudo element for aligning items to the very left and even center
          }
          <div className="ad-hidden">
            <br />
          </div>
        </div>
      );
    }

    return availableListings.length === 1
      ? SingleAvailable()
      : availableListings.length === 0
      ? noneAvailable()
      : MultipleAvailable();
  };

  function noneAvailable() {
    return (
      <div className="single-direction">
        <div>
          <i className="fa fa-compass" aria-hidden="true"></i>
          <span> Directions:</span>
        </div>
        <a
          href="https://www.google.com/maps/dir//1102+Salem+Ave,+Dayton,+OH+45406/@39.7746572,-84.2196603,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x88408122b505a61d:0xc35c5f962acf2cf5!2m2!1d-84.2174716!2d39.7746572"
          target="_blank"
          rel="noreferrer"
        >
          <span>1102 Salem Ave. Dayton, OH 45406</span>
        </a>
      </div>
    );
  }

  return (
    <>
      <div className="homepageContainer">
        {listings ? loaded() : noneAvailable()}

        <div
          className={isHovering ? "homePic-faded" : "homePic"}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          <img
            className="animate__zoomIn animate__bounce"
            src="https://i.imgur.com/T8ueCt2.jpg"
            alt = "Salem Crown Outside Vector Style"
          />

          {/* <h3 className="home-pic-text">
          One Bedroom Apartments for Rent in Dayton, OH
        </h3> */}

          <div className="home-pic-text">
            <h1 className="title-main">Salem Crown Apartments</h1>
            <br />
            <p>
              Fully remodeled One Bedroom Apartments with luxury vinyl plank
              floors, and newer appliances that consist of a stove, fridge and
              dishwasher.
            </p>

            <Link to="/about">
              <button className="home-btn">See More</button>
            </Link>
          </div>
        </div>
      </div>
      
      <Footer />
    </>
  );
}
