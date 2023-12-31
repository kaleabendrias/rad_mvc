import { motion } from "framer-motion";

const About = () => {
  return (
    <div
      className="flex flex-col md:flex-row justify-center w-full text-white bg-gradient-to-r from-gray-700 via-gray-900 to-black"
      style={{ height: "90vh" }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="mt-16 mx-16"
      >
        <h1 className="text-4xl font-bold text-center">About us</h1>
        <p className="text-xl ml-3">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus
          odio aliquam iusto veritatis consectetur enim rerum labore, maiores
          veniam possimus tenetur perspiciatis molestias amet est obcaecati rem
          reiciendis dignissimos doloremque?Lorem ipsum dolor sit amet
          consectetur, adipisicing elit. Minima nostrum accusantium ad? Amet
          ipsa dolores necessitatibus eveniet dolor est, provident hic
          laudantium saepe reiciendis ullam, exercitationem adipisci quasi
          perferendis veniam!
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="mt-16 mx-16"
      >
        <h1 className="text-4xl font-bold text-center">What we do</h1>
        <p className="text-xl ml-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus,
          soluta cumque eos esse inventore aliquam optio excepturi vero tenetur,
          rerum exercitationem id labore quod eaque iusto ex culpa voluptatem
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit,
          doloribus. Dicta alias assumenda perferendis cum impedit deserunt eius
          commodi sed temporibus, numquam est vero esse quibusdam suscipit,
          placeat voluptatem tempore. cum!
        </p>
      </motion.div>
    </div>
  );
};

export default About;
