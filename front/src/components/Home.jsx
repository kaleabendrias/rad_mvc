import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div
      className="flex flex-col items-center justify-center w-full text-white bg-gradient-to-r from-gray-700 via-gray-900 to-black"
      style={{ height: "90vh" }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-semibold text-center mb-6">RAD Project</h1>
        <p className="mx-28 text-xl text-center">
          Model–view–controller (MVC) is a software design pattern[1] commonly
          used for developing user interfaces that divides the related program
          logic into three interconnected elements. These elements are the
          internal representations of information (the model), the interface
          (the view) that presents information to and accepts it from the user,
          and the controller software linking the two.
          <Link to="/protected" className="text-blue-900">
            Learn More
          </Link>
        </p>
      </motion.div>
    </div>
  );
};

export default Home;
