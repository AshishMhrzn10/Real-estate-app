import React, { useState, useEffect, Fragment } from "react";
import { Helmet } from "react-helmet";
import axios from "axios";
import House from "../assets/images/house.jpg";

const About = () => {
  const [topSeller, setTopSeller] = useState([]);
  const [realtors, setRealtors] = useState([]);

  useEffect(() => {
    axios.defaults.headers = {
      "Content-Type": "application/json",
    };
    const getTopSeller = async () => {
      try {
        const res = await axios.get(
          "http://127.0.0.1:8000/api/realtors/topseller/"
        );
        setTopSeller(res.data);
      } catch (err) {}
    };

    getTopSeller();
  }, []);

  useEffect(() => {
    axios.defaults.headers = {
      "Content-Type": "application/json",
    };

    const getRealtors = async () => {
      try {
        const res = await axios.get("http://127.0.0.1:8000/api/realtors/");
        setRealtors(res.data);
      } catch (err) {}
    };
    getRealtors();
  }, []);

  const getAllRealtors = () => {
    let allRealtors = [];
    let results = [];

    realtors.map((realtor) => {
      return allRealtors.push(
        <Fragment key={realtor.id}>
          <div className="about__display">
            <img className="about__display__image" src={realtor.photo} alt="" />
          </div>
          <h3 className="about__realtor">{realtor.name}</h3>
          <p className="about__contact">{realtor.phone}</p>
          <p className="about__contact">{realtor.email}</p>
          <p className="about__about">{realtor.description}</p>
        </Fragment>
      );
    });

    for (let i = 0; i < realtors.length; i += 3) {
      results.push(
        <div key={i} className="row">
          <div className="col-1-of-3">{allRealtors[i]}</div>
          <div className="col-1-of-3">
            {allRealtors[i + 1] ? allRealtors[i + 1] : null}
          </div>
          <div className="col-1-of-3">
            {allRealtors[i + 2] ? allRealtors[i + 2] : null}
          </div>
        </div>
      );
    }

    return results;
  };

  const getTopSeller = () => {
    let result = [];
    topSeller.map((seller) => {
      return result.push(
        <Fragment key={seller.id}>
          <div className="about__display">
            <img className="about__display__image" src={seller.photo} alt="" />
          </div>
          <h3 className="about__topseller">Top Seller:</h3>
          <p className="about__realtor">{seller.name}</p>
          <p className="about__contact">{seller.phone}</p>
          <p className="about__contact">{seller.email}</p>
          <p className="about__about">{seller.description}</p>
        </Fragment>
      );
    });

    return result;
  };
  return (
    <main className="about">
      <Helmet>
        <title> Realest Estate - About</title>
        <meta name="description" content="About us" />
      </Helmet>
      <header className="about__header">
        <h1 className="about__heading">About Realest Estate</h1>
      </header>
      <section className="about__info">
        <div className="row">
          <div className="col-3-of-4">
            <h2 className="about__subheading">
              We find the perfect home for you
            </h2>
            <p className="about__paragraph">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              vel ultricies orci, a sollicitudin magna. Proin et venenatis elit.
              Mauris molestie nisi eu tortor porttitor rhoncus. Suspendisse
              semper purus ac ante sagittis mollis. Mauris vestibulum bibendum
              purus quis elementum. Aliquam interdum scelerisque quam at rutrum.
              Vestibulum ut ligula ullamcorper, lacinia diam at, rhoncus risus.
              Etiam at dolor sollicitudin, tincidunt est vitae, lacinia urna.
              Etiam fringilla enim et fermentum dapibus. Maecenas et molestie
              lacus. Proin vel erat justo. Nullam congue erat nec orci auctor,
              id feugiat libero molestie. Etiam in dui quam.
            </p>
            <div className="about__display">
              <img className="about__display__image" src={House} alt="" />
            </div>
            <p className="about__paragraph">
              Phasellus efficitur varius pharetra. Donec auctor ultricies risus
              rutrum lacinia. Curabitur eleifend dui quis mi consectetur, nec
              egestas ipsum tempus. Quisque id mauris sollicitudin, auctor magna
              quis, viverra quam. Aliquam lacinia turpis non massa semper
              consectetur a nec massa. Pellentesque vehicula dolor sit amet nisl
              semper tincidunt. Morbi luctus metus a hendrerit maximus.
              Suspendisse tincidunt ornare elit, in accumsan erat commodo et.
              Aliquam id metus vel justo pharetra convallis. Ut blandit neque
              sed sagittis faucibus. Nullam nec odio a justo suscipit placerat.
              Morbi ut dolor nulla. Ut sed suscipit nisi. Donec viverra tortor
              eget vestibulum tincidunt. Curabitur maximus dolor nisi, at
              pharetra eros pellentesque in. Nullam imperdiet orci risus, vel
              tempus ante dapibus ultrices.
            </p>
          </div>

          <div className="col-1-of-4">{getTopSeller()}</div>
        </div>
      </section>

      <section className="about__team">
        <div className="row">
          <h2 className="about__subheading">Meet our Awesome Team</h2>
        </div>
        {getAllRealtors()}
      </section>
    </main>
  );
};
export default About;
