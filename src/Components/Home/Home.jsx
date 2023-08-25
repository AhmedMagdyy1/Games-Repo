import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Home.module.scss";
import { Helmet } from "react-helmet";
import { GameContext } from "../../Context/MediaStore";

export default function Home() {
  let { topGames } = useContext(GameContext);
  // const [topGames, setTopGames] = useState([]);
  // let getTopGames = async () => {
  //   let { data } = await axios.get(
  //     "https://free-to-play-games-database.p.rapidapi.com/api/games",
  //     {
  //       headers: {
  //         "X-RapidAPI-Key":
  //           "b52128808dmsh5826403ec30ac21p1b9548jsnfca5769e0b68",
  //         "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
  //       },
  //       params: { "sort-by": "popularity" },
  //     }
  //   );
  //   console.log(data);
  //   setTopGames(data);
  // };
  // useEffect(() => {
  //   getTopGames();
  // }, []);
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div
        className={`d-flex justify-content-center align-items-center flex-column py-5 ${styles.bgImage}`}
      >
        <h2>
          Find & track the best
          <span className={styles.spanInfo}>free-to-play</span> games!
        </h2>
        <p className={`p-2 ${styles.pInfo}`}>
          Track what you've played and search for what to play next! Plus get
          free premium loot!
        </p>
        <Link className="btn btn-dark" to="/All">
          Browse Games
        </Link>
      </div>
      <li className="d-flex py-4">
        <i className="fas fa-robot mt-3 mx-2 fa-xl"></i>
        <h3>Personalized Recommendations</h3>
      </li>
      <div className="row">
        {topGames.slice(0, 3).map((item, index) => (
          <div key={index} className="col-md-4 py-3">
            <Link className="nav-link" to={`/details/${item.id}`}>
              <div className="card">
                <img className="w-100" src={item.thumbnail} alt="game-over" />
                <div className="d-flex justify-content-between align-items-center p-2">
                  <h4 className="px-2">{item.title}</h4>
                  <button className="btn btn-info text-white py-1 px-2">
                    FREE
                  </button>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
