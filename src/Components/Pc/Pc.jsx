import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { GameContext } from "../../Context/MediaStore";

export default function Pc() {
  let { pcGames } = useContext(GameContext);
  // const [pcGames, setPcGames] = useState([]);
  // let getPcGames = async () => {
  //   let { data } = await axios.get(
  //     "https://free-to-play-games-database.p.rapidapi.com/api/games",
  //     {
  //       headers: {
  //         "X-RapidAPI-Key":
  //           "b52128808dmsh5826403ec30ac21p1b9548jsnfca5769e0b68",
  //         "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
  //       },
  //       params: { platform: "pc" },
  //     }
  //   );
  //   console.log(data);
  //   setPcGames(data);
  // };
  // useEffect(() => {
  //   getPcGames();
  // }, []);
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>PC-Games</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className="row">
        {pcGames.length > 0 ? (
          pcGames.slice(0, 50).map((item, index) => (
            <div key={index} className="col-md-3 py-3">
              <Link className="nav-link" to={`/details/${item.id}`}>
                <div className="card">
                  <img className="w-100" src={item.thumbnail} alt="game-over" />
                  <div className="d-flex justify-content-between align-items-center p-2">
                    <h4 className="px-2 text-truncate">{item.title}</h4>
                    <button className="btn btn-info text-white py-1 px-2">
                      FREE
                    </button>
                  </div>
                  <p className="text-truncate px-3 w-75">
                    {item.short_description}
                  </p>
                  <div className="d-flex justify-content-between align-items-center py-2 px-3">
                    <i className="fas fa-plus-square"></i>
                    {item.platform === "PC (Windows)" ? (
                      <li className="list-unstyled">
                        <span>{item.genre}</span>
                        <i className="fab fa-windows me-1 mx-2"></i>
                      </li>
                    ) : (
                      <li className="list-unstyled">
                        <span>{item.genre}</span>
                        <i className="fas fa-window-maximize text-muted m-1 mx-2"></i>
                      </li>
                    )}
                  </div>
                </div>
              </Link>
            </div>
          ))
        ) : (
          <div className="vh-100 d-flex justify-content-center align-items-center">
            <i class="fas fa-spinner fa-spin fa-4x text-info"></i>
          </div>
        )}
      </div>
    </>
  );
}
