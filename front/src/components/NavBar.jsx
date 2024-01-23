import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import checkAuth from "./auth.helper";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import logo from "../assets/DP.svg";

const NavBar = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Check if the user is authenticated by making a request to the server
        const res = await checkAuth();
        setIsAuthenticated(res);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleSignOut = (e) => {
    e.preventDefault();
    axios
      .get("http://localhost:3000/auth/signout", {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          setIsAuthenticated(false);
          navigate("/signin");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="flex justify-between items-center bg-slate-900 text-white p-5 shadow-lg">
      <Link to="/" className="flex justify-center items-center">
        <img src={logo} alt="logo" className="w-5 h-5 bg-white mr-1" />
        <p>Logo</p>
      </Link>
      <div>
        <Link to="/" className="text-sm font-semibold hover:underline mr-2">
          Home
        </Link>
        {" | "}
        <Link
          to="/about"
          className="text-sm font-semibold hover:underline ml-2"
        >
          About
        </Link>
        {isAuthenticated ? (
          <>
            {" | "}
            <Link
              to="/protected"
              className="text-sm font-semibold hover:underline ml-2"
            >
              MVC
            </Link>
          </>
        ) : null}
      </div>
      <div>
        {loading ? (
          <span className="text-sm text-gray-300">Loading...</span>
        ) : isAuthenticated ? (
          <>
            <Link
              className="text-sm font-semibold hover:underline"
              onClick={handleSignOut}
            >
              Sign Out
            </Link>
          </>
        ) : (
          <Link to="/signin" className="text-sm font-semibold hover:underline">
            Sign In
          </Link>
        )}
      </div>
    </div>
  );
};

export default NavBar;
