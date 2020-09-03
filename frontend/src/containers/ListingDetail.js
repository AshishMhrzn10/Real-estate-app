import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import axios from "axios";
import { Link } from "react-router-dom";

const ListingDetail = (props) => {
  const [listing, setListing] = useState({});
  const [realtor, setRealtor] = useState({});
  const [price, setPrice] = useState(0);

  const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  useEffect(() => {
    const slug = props.match.params.id;

    const config = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };

    axios
      .get(`http://127.0.0.1:8000/api/listings/${slug}/`, config)
      .then((res) => {
        setListing(res.data);
        setPrice(numberWithCommas(res.data.price));
      })
      .catch((err) => {});
  }, [props.match.params.id]);

  useEffect(() => {
    const id = listing.realtor;

    const config = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };

    if (id) {
      axios
        .get(`http://127.0.0.1:8000/api/realtors/${id}/`, config)
        .then((res) => {
          setRealtor(res.data);
        })
        .catch((err) => {});
    }
  }, [listing.realtor]);

  const displayInteriorImages = () => {
    let images = [];
    images.push(
      <div key={1} className="row">
        <div className="col-1-of-3">
          {listing.photo_1 ? (
            <div className="listingdetail__display">
              <img
                className="listingdetail__display__image"
                src={listing.photo_1}
                alt=""
              />
            </div>
          ) : null}
        </div>

        <div className="col-1-of-3">
          {listing.photo_1 ? (
            <div className="listingdetail__display">
              <img
                className="listingdetail__display__image"
                src={listing.photo_2}
                alt=""
              />
            </div>
          ) : null}
        </div>

        <div className="col-1-of-3">
          {listing.photo_1 ? (
            <div className="listingdetail__display">
              <img
                className="listingdetail__display__image"
                src={listing.photo_3}
                alt=""
              />
            </div>
          ) : null}
        </div>
      </div>
    );

    images.push(
      <div key={2} className="row">
        <div className="col-1-of-3">
          {listing.photo_1 ? (
            <div className="listingdetail__display">
              <img
                className="listingdetail__display__image"
                src={listing.photo_4}
                alt=""
              />
            </div>
          ) : null}
        </div>

        <div className="col-1-of-3">
          {listing.photo_1 ? (
            <div className="listingdetail__display">
              <img
                className="listingdetail__display__image"
                src={listing.photo_5}
                alt=""
              />
            </div>
          ) : null}
        </div>

        <div className="col-1-of-3">
          {listing.photo_1 ? (
            <div className="listingdetail__display">
              <img
                className="listingdetail__display__image"
                src={listing.photo_6}
                alt=""
              />
            </div>
          ) : null}
        </div>
      </div>
    );

    images.push(
      <div key={3} className="row">
        <div className="col-1-of-3">
          {listing.photo_1 ? (
            <div className="listingdetail__display">
              <img
                className="listingdetail__display__image"
                src={listing.photo_7}
                alt=""
              />
            </div>
          ) : null}
        </div>

        <div className="col-1-of-3">
          {listing.photo_1 ? (
            <div className="listingdetail__display">
              <img
                className="listingdetail__display__image"
                src={listing.photo_8}
                alt=""
              />
            </div>
          ) : null}
        </div>

        <div className="col-1-of-3">
          {listing.photo_1 ? (
            <div className="listingdetail__display">
              <img
                className="listingdetail__display__image"
                src={listing.photo_9}
                alt=""
              />
            </div>
          ) : null}
        </div>
      </div>
    );

    images.push(
      <div key={4} className="row">
        <div className="col-1-of-3">
          {listing.photo_1 ? (
            <div className="listingdetail__display">
              <img
                className="listingdetail__display__image"
                src={listing.photo_10}
                alt=""
              />
            </div>
          ) : null}
        </div>
      </div>
    );

    return images;
  };

  return (
    <div className="listingdetail">
      <Helmet>
        <title>Realest Estate - Listing | {`${listing.title}`}</title>
        <meta name="description" content="listing detail" />
      </Helmet>

      <div className="listingdetail__header">
        <h1 className="listingdetail__title">{listing.title}</h1>
        <p className="listingdetail__location">
          {listing.city}, {listing.state}, {listing.zipcode}
        </p>
      </div>

      <div className="row">
        <div className="listingdetail__breadcrumb">
          <Link className="listingdetail__breadcrumb__link" to="/">
            Home
          </Link>{" "}
          / {listing.title}
        </div>
      </div>

      <div className="row">
        <div className="col-3-of-4">
          <div className="listingdetail__display">
            <img
              className="listingdetail__display__image"
              src={listing.photo_main}
              alt=""
            />
          </div>
        </div>

        <div className="col-1-of-4">
          <div className="listingdetail__display">
            <img
              className="listingdetail__display__image"
              src={realtor.photo}
              alt=""
            />
          </div>
          <h3 className="listingdetail__realtor">{realtor.name}</h3>
          <p className="listingdetail__contact">{realtor.phone}</p>
          <p className="listingdetail__contact">{realtor.email}</p>
          <p className="listingdetail__about">{realtor.description}</p>
        </div>
      </div>
      <div className="row">
        <div className="col-1-of-2">
          <ul className="listingdetail__list">
            <li className="listingdetail__list__item">
              Home Type: {listing.home_type}
            </li>
            <li className="listingdetail__list__item">Price: ${price}</li>
            <li className="listingdetail__list__item">
              Bedrooms: {listing.bedrooms}
            </li>
            <li className="listingdetail__list__item">
              Bathrooms: {listing.bathrooms}
            </li>
            <li className="listingdetail__list__item">Sqft: {listing.sqft}</li>
          </ul>
        </div>

        <div className="col-1-of-2">
          <ul className="listingdetail__list">
            <li className="listingdetail__list__item">
              Sale Type: {listing.sale_type}
            </li>
            <li className="listingdetail__list__item">
              Address: {listing.address}
            </li>
            <li className="listingdetail__list__item">City: {listing.city}</li>
            <li className="listingdetail__list__item">
              State: {listing.state}
            </li>
            <li className="listingdetail__list__item">
              Zip code: {listing.zipcode}
            </li>
          </ul>
        </div>
      </div>

      <div className="row">
        <p className="listingdetail__description">{listing.description}</p>
      </div>

      {displayInteriorImages()}
    </div>
  );
};
export default ListingDetail;
