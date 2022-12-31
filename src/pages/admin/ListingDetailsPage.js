import { useParams, useNavigate, Link } from "react-router-dom";
import { useState, useEffect } from "react";

import FsLightbox from "fslightbox-react";

import * as listingsAPI from "../../utilities/listings-api";
import { deleteListing } from "../../utilities/listings-service";
import loading from "../../components/loading";



export default function ListingDetailsPage({ listings }) {
  const [listing, setListing] = useState(); //getting all listings from db

  const [slide, setSlide] = useState(false); //for slide show
  const { id } = useParams();
  const navigation = useNavigate();

  async function getListing() {
    const listing = await listingsAPI.getById(id);
    setListing(listing);
  }

  useEffect(() => {
    getListing();
  }, [setListing]);

  const handleDelete = async (evt) => {
    // evt.preventdefault()
    try {
      navigation("/principal");
      await deleteListing(listing);
    } catch {}
  };

  function loaded() {
    let quals = listing.qualifications.split(".");
    return (
      <>
        <div className="return">
          <div className="back">
            <Link to="/principal">
              <h2 className="arrow left title">
                <i></i> Back{" "}
              </h2>
            </Link>
          </div>

          <h1 className="title">{listing.title}</h1>
        </div>

        <div className="main-info">
          <div className="stack-container">
            <div onClick={() => setSlide(!slide)} className="stack">
              <img src={listing.selectedFile1} width="250" height="180" />
              <span>
                Click to See All Photos and <br />
                Virtual Tour
              </span>
            </div>
          </div>

          <FsLightbox
            toggler={slide}
            sources={[
              listing.selectedFile1,
              <iframe
                src="https://www.google.com/maps/embed?pb=!4v1672167750164!6m8!1m7!1sCAoSLEFGMVFpcE42WkZhcWhydG5waWxKVF9WYmhhUGdQdEg4bkNHTmRPb3FWaExu!2m2!1d39.7746093!2d-84.21754469999999!3f192.34562104242204!4f-14.765138178736677!5f0.4000000000000002"
                width="900"
                height="550"
                allowFullScreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>,

              listing.selectedFile2,
              listing.selectedFile3,
              listing.selectedFile4,
              listing.selectedFile5,
              listing.selectedFile6,
              listing.selectedFile7,
              listing.selectedFile8,
            ]}
          />

          <div className="info">
            {listing.available ? (
              <h5 className="available">Available</h5>
            ) : (
              <h3 className="not-available">Not Available</h3>
            )}

            <h3 className="info-title">
              Rent: <span className="price">{listing.rent}</span>
            </h3>
            <h3 className="info-title">
              Security Deposit:{" "}
              <span className="price">{listing.securityDeposit} </span>
            </h3>

            <p>
              <span className="info-title sub-title">Utilities: </span>
              <span>{listing.utilities}</span>
            </p>

            <p>{listing.description1}</p>
            <p>{listing.description2}</p>

            <p>
              <span className="info-title sub-title">Pets: </span>
              {listing.pets}
            </p>
          </div>
        </div>

        <div className="quals">
          <h2>Qualifications:</h2>
          <div>
            {quals.map((pa, idx) => {
              return <p key={idx}>{pa}</p>;
            })}
          </div>
        </div>

        <div className="bottom-buttons">
          <Link to={`/principal/${listing._id}/edit`}>
            <button className="create-btn">
            <i className="fa fa-pencil" aria-hidden="true"></i>
              &nbsp; Edit</button>
          </Link>

          <form>
            <button onClick={handleDelete} className="delete-btn">
              <i className="fa fa-trash" aria-hidden="true"></i>
              &nbsp; Delete
            </button>
          </form>
        </div>
      </>
    );
  }

  return (
    <>
      {listing ? loaded() : loading()}
    </>
  );
}
