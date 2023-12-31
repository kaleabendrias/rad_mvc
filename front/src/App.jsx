import "./App.css";
import About from "./components/About";
import Home from "./components/Home";
import Protected from "./components/Protected";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PrivateRoute from "./components/private.router";
import Footer from "./components/Footer";
import MainLayOut from "./components/MainLayOut";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <MainLayOut>
              <Home />
            </MainLayOut>
          }
        />
        <Route
          path="/signin"
          element={
            <MainLayOut>
              <Signin />
            </MainLayOut>
          }
        />
        <Route
          path="/about"
          element={
            <MainLayOut>
              <About />
            </MainLayOut>
          }
        />
        <Route
          path="/protected"
          element={
            <PrivateRoute
              element={
                <MainLayOut>
                  <Protected />
                </MainLayOut>
              }
            />
          }
        />
        <Route
          path="/signup"
          element={
            <MainLayOut>
              <Signup />
            </MainLayOut>
          }
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
