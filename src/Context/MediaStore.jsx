import axios from "axios";
import { createContext, useEffect, useState } from "react";

export let GameContext = createContext(null);
export default function GameContextProvider(props) {
  const [topGames, setTopGames] = useState([]);
  const [allGames, setAllGames] = useState([]);
  const [pcGames, setPcGames] = useState([]);
  const [browserGames, setBrowserGames] = useState([]);
  const [ReleaseDateGames, setReleaseDateGames] = useState([]);
  const [PopularityGames, setPopularityGames] = useState([]);
  const [AlphabeticalGames, setAlphabeticalGames] = useState([]);
  const [RelevanceGames, setRelevanceGames] = useState([]);
  const [RacingGames, setRacingGames] = useState([]);
  const [SportsGames, setSports] = useState([]);
  const [SocialGames, setSocialGames] = useState([]);
  const [ShooterGames, setShooterGames] = useState([]);
  const [OpenworldGames, setOpenworldGames] = useState([]);
  const [ZombieGames, setZombieGames] = useState([]);
  const [FantasyGames, setFantasyGames] = useState([]);
  const [ActionrbgGames, setActionrbgGames] = useState([]);
  const [BattleroyaleGames, setBattleroyaleGames] = useState([]);
  const [FlightGames, setFlightGames] = useState([]);
  const [ActionGames, setActionGames] = useState([]);
  let getGamesItems = async (type, callback) => {
    let { data } = await axios.get(
      "https://free-to-play-games-database.p.rapidapi.com/api/games",
      {
        headers: {
          "X-RapidAPI-Key":
            "97b22f7158mshe62d177a88ff065p1d5102jsn7fe93b3ebacf",
          "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
        },
        params: type,
      }
    );
    callback(data);
    // console.log(data);
  };
  let getMoreGames = () => {};
  useEffect(() => {
    getGamesItems({ "sort-by": "popularity" }, setTopGames);
    getGamesItems({ "": "" }, setAllGames);
    getGamesItems({ platform: "pc" }, setPcGames);
    getGamesItems({ platform: "browser" }, setBrowserGames);
    getGamesItems({ "sort-by": "release-date" }, setReleaseDateGames);
    getGamesItems({ "sort-by": "popularity" }, setPopularityGames);
    getGamesItems({ "sort-by": "alphabetical" }, setAlphabeticalGames);
    getGamesItems({ "sort-by": "relevance" }, setRelevanceGames);
    getGamesItems({ category: "racing" }, setRacingGames);
    getGamesItems({ category: "sports" }, setSports);
    getGamesItems({ category: "social" }, setSocialGames);
    getGamesItems({ category: "shooter" }, setShooterGames);
    getGamesItems({ category: "open-world" }, setOpenworldGames);
    getGamesItems({ category: "zombie" }, setZombieGames);
    getGamesItems({ category: "fantasy" }, setFantasyGames);
    getGamesItems({ category: "action-rpg" }, setActionrbgGames);
    getGamesItems({ category: "action" }, setActionGames);
    getGamesItems({ category: "flight" }, setFlightGames);
    getGamesItems({ category: "battle-royale" }, setBattleroyaleGames);
  }, []);

  return (
    <GameContext.Provider
      value={{
        topGames,
        allGames,
        pcGames,
        browserGames,
        ReleaseDateGames,
        PopularityGames,
        AlphabeticalGames,
        RelevanceGames,
        RacingGames,
        SportsGames,
        SocialGames,
        ShooterGames,
        OpenworldGames,
        ZombieGames,
        FantasyGames,
        ActionrbgGames,
        ActionGames,
        FlightGames,
        BattleroyaleGames,
      }}
    >
      {props.children}
    </GameContext.Provider>
  );
}
