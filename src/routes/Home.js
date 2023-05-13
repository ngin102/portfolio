import React from "react";
import HomeScreen from "../components/HomeScreen";
import { motion } from "framer-motion/dist/framer-motion";

const Home = () => {
  return (
    <motion.div
      initial = {{opacity: 0}}
      animate = {{opacity: 1}}
      exit = {{opacity: 0}}>
        <HomeScreen/>
    </motion.div>);
}

export default Home