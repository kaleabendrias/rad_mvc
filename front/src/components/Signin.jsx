import { useState } from "react";
import axios from "axios";
import bg from "../assets/DP.svg";
import { useNavigate, Link } from "react-router-dom";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        "http://localhost:3000/auth/signin",
        {
          email,
          password,
        },
        {
          withCredentials: true, // Important for sending cookies
        }
      )
      .then(function (response) {
        console.log("Signin response:", response);
        if (response.status === 200) {
          console.log(response.status);
          navigate("/protected");
        }
      })
      .catch(function (error) {
        console.log(error);
        setError(error.response.data.message);
      });
  };

  return (
    <>
      <div>
        <section>
          <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
            <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
              <div className="mb-2 flex justify-center">
                <img src={bg} height={90} width={90} />
              </div>
              <h2 className="text-center text-2xl font-bold leading-tight text-black">
                Sign in to your account
              </h2>
              <p className="mt-2 text-center text-sm text-gray-600 ">
                Don&#x27;t have an account?{" "}
                <Link
                  to="/signup"
                  title=""
                  className="font-semibold text-black transition-all duration-200 hover:underline"
                >
                  Create a free account
                </Link>
              </p>
              {error && <p className="text-red-700 text-lg mt-4">{error}</p>}
              <form
                action="#"
                method="POST"
                className="mt-8"
                onSubmit={handleSubmit}
              >
                <div className="space-y-5">
                  <div>
                    <label className="text-base font-medium text-gray-900">
                      {" "}
                      Email address{" "}
                    </label>
                    <div className="mt-2">
                      <input
                        className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between">
                      <label className="text-base font-medium text-gray-900">
                        {" "}
                        Password{" "}
                      </label>
                      <a
                        href="#"
                        title=""
                        className="text-sm font-semibold text-black hover:underline"
                      >
                        {" "}
                        Forgot password?{" "}
                      </a>
                    </div>
                    <div className="mt-2">
                      <input
                        className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                        type="password"
                        value={password}
                        placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                      // onClick={handleSubmit}
                    >
                      Get started{" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="ml-2"
                      >
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                      </svg>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Signin;
