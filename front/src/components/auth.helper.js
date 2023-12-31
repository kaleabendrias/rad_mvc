import axios from "axios";
const checkAuth = async () => {
  try {
    const response = await axios.get("http://localhost:3000/auth/checktoken", {
      withCredentials: true, // Include credentials (cookies) in the request
    });

    console.log(response.data);
    // If the response is successful, the user is authenticated
    return response.data.isAuthenticated;
  } catch (err) {
    console.log(err);
    return false;
  }
};

export default checkAuth;
