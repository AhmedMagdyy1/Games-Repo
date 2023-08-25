import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./Details.module.scss";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function Details() {
  const [itemDetails, setItemDetails] = useState({});
  const [screenshots, setScreenshots] = useState([]);
  const [minimumReqGraphics, setMinimumReqGraphics] = useState([]);
  const [minimumReqMemory, setMinimumReqMemory] = useState([]);
  const [minimumReqOs, setMinimumReqOs] = useState([]);
  const [minimumReqProcessor, setMinimumReqProcessor] = useState([]);
  const [minimumReqStorage, setMinimumReqStorage] = useState([]);
  let { id } = useParams();
  let getItemDetails = async () => {
    let { data } = await axios.get(
      "https://free-to-play-games-database.p.rapidapi.com/api/game",
      {
        headers: {
          "X-RapidAPI-Key":
            "b52128808dmsh5826403ec30ac21p1b9548jsnfca5769e0b68",
          "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
        },
        params: {
          id: id,
        },
      }
    );
    setItemDetails(data);
    setScreenshots(data.screenshots);
    setMinimumReqGraphics(data.minimum_system_requirements.graphics);
    setMinimumReqMemory(data.minimum_system_requirements.memory);
    setMinimumReqOs(data.minimum_system_requirements.os);
    setMinimumReqProcessor(data.minimum_system_requirements.processor);
    setMinimumReqStorage(data.minimum_system_requirements.storage);
    console.log(data);
  };
  let goToGameLink = () => {
    window.open(itemDetails.freetogame_profile_url, "_blank");
  };
  useEffect(() => {
    getItemDetails();
  }, []);
  return (
    <>
      {screenshots.length > 0 ? (
        <div className="row my-5">
          <div className="col-md-4">
            <div className="w-100">
              <img
                className="w-100 rounded-3 my-3"
                src={itemDetails.thumbnail}
                alt="game-over"
              />
              <div className="d-flex justify-content-between">
                <button className="btn btn-dark w-25 mx-2">Free</button>
                <button onClick={goToGameLink} className="btn btn-info w-75">
                  PLAY NOW
                  <i className="fas fa-sign-out-alt mx-2 text-white"></i>
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-8">
            <h1 className="my-2">{itemDetails.title}</h1>
            <p>About {itemDetails.title}</p>
            <p>{itemDetails.description}</p>
            {minimumReqGraphics == "" ? (
              ""
            ) : (
              <div>
                <h4>Minimum System Requirements</h4>
                <ul className="list-unstyled">
                  <li>Graphics : {minimumReqGraphics}</li>
                  <li>Memory : {minimumReqMemory}</li>
                  <li>Os : {minimumReqOs}</li>
                  <li>Processor : {minimumReqProcessor}</li>
                  <li>Storage : {minimumReqStorage}</li>
                </ul>
              </div>
            )}
            <h4>{itemDetails.title} Screenshots</h4>
            <div>
              {screenshots.map((screenshot) => (
                <Carousel>
                  <div>
                    <img src={screenshot.image} alt="game-over" />
                  </div>
                </Carousel>
              ))}
            </div>
            <h4>Additional Information</h4>
            <div className="row">
              <div className="col-md-4 d-flex flex-column">
                <ul className="list-unstyled">
                  <li className={styles.colorLi}>Title</li>
                  <li>{itemDetails.title}</li>
                </ul>
                <ul className="list-unstyled">
                  <li className={styles.colorLi}>Release Date</li>
                  <li>{itemDetails.release_date}</li>
                </ul>
              </div>
              <div className="col-md-4 d-flex flex-column">
                <ul className="list-unstyled">
                  <li className={styles.colorLi}>Developer</li>
                  <li>{itemDetails.developer}</li>
                </ul>
                <ul className="list-unstyled">
                  <li className={styles.colorLi}>Genre</li>
                  <li>{itemDetails.genre}</li>
                </ul>
              </div>
              <div className="col-md-4 d-flex flex-column">
                <ul className="list-unstyled">
                  <li className={styles.colorLi}>Publisher</li>
                  <li>{itemDetails.publisher}</li>
                </ul>
                <ul className="list-unstyled">
                  <li className={styles.colorLi}>Platform</li>
                  {itemDetails.platform === "Windows" ? (
                    <li>
                      <i className="fab fa-windows me-1 text-white"></i>
                      Windows
                    </li>
                  ) : (
                    <li>
                      <i className="fas fa-window-maximize text-muted m-1 text-white"></i>
                      Web Browser
                    </li>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="vh-100 d-flex justify-content-center align-items-center">
          <i class="fas fa-spinner fa-spin fa-4x text-info"></i>
        </div>
      )}
    </>
  );
}
