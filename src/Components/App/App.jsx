// import logo from './logo.svg';
import { useContext } from "react";
import { Offline, Online } from "react-detect-offline";
import { createHashRouter, RouterProvider } from "react-router-dom";
import { AuthenticationContext } from "../../Context/AuthenticationStore";
import Details from "../Details/Details";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import Action from "./../Action/Action";
import Actionrbg from "./../Actionrbg/Actionrbg";
import All from "./../All/All";
import Alphabetical from "./../Alphabetical/Alphabetical";
import Battleroyale from "./../Battleroyale/Battleroyale";
import Browser from "./../Browser/Browser";
import Fantasy from "./../Fantasy/Fantasy";
import Flight from "./../Flight/Flight";
import Home from "./../Home/Home";
import Login from "./../Login/Login";
import Masterlayout from "./../Masterlayout/Masterlayout";
import Openworld from "./../Openworld/Openworld";
import Pc from "./../Pc/Pc";
import Popularity from "./../Popularity/Popularity";
import Racing from "./../Racing/Racing";
import Releasedate from "./../Releasedate/Releasedate";
import Relevance from "./../Relevance/Relevance";
import Shooter from "./../Shooter/Shooter";
import Signup from "./../Signup/Signup";
import Social from "./../Social/Social";
import Sports from "./../Sports/Sports";
import Zombie from "./../Zombie/Zombie";
import "./App.css";

function App() {
  let { userData, logout, saveUserData } = useContext(AuthenticationContext);
  // const [userData, setUserData] = useState(null);
  // let saveUserData = () => {
  //   let encodeToken = localStorage.getItem("token");
  //   let decodeToken = jwtDecode(encodeToken);
  //   setUserData(decodeToken);
  // };
  // let logout = () => {
  //   localStorage.removeItem("token");
  //   setUserData(null);
  //   return <Navigate to="/" />;
  // };
  // useEffect(() => {
  //   if (localStorage.getItem("token")) {
  //     saveUserData();
  //   }
  // }, []);

  let routes = createHashRouter([
    {
      path: "/",
      element: <Masterlayout userData={userData} logout={logout} />,
      children: [
        { index: true, element: <Login saveUserData={saveUserData} /> },
        { path: "signup", element: <Signup userData={userData} /> },
        {
          path: "Home",
          element: (
            <ProtectedRoute userData={userData}>
              <Home />
            </ProtectedRoute>
          ),
        },
        {
          path: "All",
          element: (
            <ProtectedRoute userData={userData}>
              <All />
            </ProtectedRoute>
          ),
        },
        {
          path: "Pc",
          element: (
            <ProtectedRoute userData={userData}>
              <Pc />
            </ProtectedRoute>
          ),
        },
        {
          path: "Browser",
          element: (
            <ProtectedRoute userData={userData}>
              <Browser />
            </ProtectedRoute>
          ),
        },
        {
          path: "Release-Date",
          element: (
            <ProtectedRoute userData={userData}>
              <Releasedate />
            </ProtectedRoute>
          ),
        },
        {
          path: "Popularity",
          element: (
            <ProtectedRoute userData={userData}>
              <Popularity />
            </ProtectedRoute>
          ),
        },
        {
          path: "Alphabetical",
          element: (
            <ProtectedRoute userData={userData}>
              <Alphabetical />
            </ProtectedRoute>
          ),
        },
        {
          path: "Relevance",
          element: (
            <ProtectedRoute userData={userData}>
              <Relevance />
            </ProtectedRoute>
          ),
        },
        {
          path: "Racing",
          element: (
            <ProtectedRoute userData={userData}>
              <Racing />
            </ProtectedRoute>
          ),
        },
        {
          path: "Sports",
          element: (
            <ProtectedRoute userData={userData}>
              <Sports />
            </ProtectedRoute>
          ),
        },
        {
          path: "Social",
          element: (
            <ProtectedRoute userData={userData}>
              <Social />
            </ProtectedRoute>
          ),
        },
        {
          path: "Shooter",
          element: (
            <ProtectedRoute userData={userData}>
              <Shooter />
            </ProtectedRoute>
          ),
        },
        {
          path: "Open-World",
          element: (
            <ProtectedRoute userData={userData}>
              <Openworld />
            </ProtectedRoute>
          ),
        },
        {
          path: "Zombie",
          element: (
            <ProtectedRoute userData={userData}>
              <Zombie />
            </ProtectedRoute>
          ),
        },
        {
          path: "Fantasy",
          element: (
            <ProtectedRoute userData={userData}>
              <Fantasy />
            </ProtectedRoute>
          ),
        },
        {
          path: "Action-rbg",
          element: (
            <ProtectedRoute userData={userData}>
              <Actionrbg />
            </ProtectedRoute>
          ),
        },
        {
          path: "Action",
          element: (
            <ProtectedRoute userData={userData}>
              <Action />
            </ProtectedRoute>
          ),
        },
        {
          path: "Flight",
          element: (
            <ProtectedRoute userData={userData}>
              <Flight />
            </ProtectedRoute>
          ),
        },
        {
          path: "Battle-Royale",
          element: (
            <ProtectedRoute userData={userData}>
              <Battleroyale />
            </ProtectedRoute>
          ),
        },
        {
          path: "details/:id",
          element: (
            <ProtectedRoute userData={userData}>
              <Details />
            </ProtectedRoute>
          ),
        },
      ],
    },
  ]);
  return (
    <>
      <div>
        <Online>
          <RouterProvider router={routes} />
        </Online>
        <Offline>
          <div className="d-flex justify-content-center align-items-center vh-100">
            <i class="fa-solid fa-user-robot-xmarks"></i>
            <h4>You are Offline Try to connect to Internet</h4>
          </div>
        </Offline>
      </div>
    </>
  );
}

export default App;
