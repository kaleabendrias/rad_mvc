import model from "../assets/radModel.webp";
import controller from "../assets/radController.webp";
import view from "../assets/radView.webp";
import MVC from "../assets/Model2.webp";
import { motion } from "framer-motion";

const Protected = () => {
  const imageStyle = "border rounded object-fit w-full h-96"; // Adjust the height value

  return (
    <div className="w-full text-white bg-gradient-to-r from-gray-700 via-gray-900 to-black p-8">
      <div className="flex flex-wrap md:flex-nowrap justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="border rounded-lg p-4 m-4"
        >
          <h1 className="font-bold text-4xl mb-4 text-center">View</h1>
          <p>
            The view is responsible for presenting the user interface to the
            user. It displays the data from the model to the user and captures
            user input. The view component is designed to be as passive as
            possible, meaning it should not contain any business logic.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="border rounded-lg p-4 m-4"
        >
          <h1 className="font-bold text-4xl mb-4 text-center">Controller</h1>
          <p>
            The controller acts as an intermediary between the model and the
            view. It handles user input, processes requests, and updates the
            model and view accordingly. The controller component interprets user
            actions and triggers changes in the model or view.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="border rounded-lg p-4 m-4"
        >
          <h1 className="font-bold text-4xl mb-4 text-center">Model</h1>
          <p>
            The model represents the data and business logic of the application.
            It is responsible for managing the data, processing business rules,
            and interacting with the database.
          </p>
        </motion.div>
      </div>

      <div className="flex flex-col items-center mt-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="w-[70%] md:w-[30%] mb-4"
        >
          <p className="font-bold text-xl mb-2 text-center">MVC</p>
          <img src={MVC} className={imageStyle} alt="MVC" />
        </motion.div>
      </div>

      <div className="pb-6 flex items-center mt-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="w-[70%] md:w-[30%] m-4"
        >
          <p className="font-bold text-xl mb-2 text-center">Model</p>
          <img src={model} className={imageStyle} alt="Model" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="w-[70%] md:w-[30%] m-4"
        >
          <p className="font-bold text-xl mb-2 text-center">View</p>
          <img src={view} className={imageStyle} alt="View" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="w-[70%] md:w-[30%] m-4"
        >
          <p className="font-bold text-xl mb-2 text-center">Controller</p>
          <img src={controller} className={imageStyle} alt="Controller" />
        </motion.div>
      </div>
    </div>
  );
};

export default Protected;
