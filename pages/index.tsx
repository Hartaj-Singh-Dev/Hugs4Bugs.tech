import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import HomePage from "../components/Home/HomePage";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";

const Home: NextPage = () => {
  return (
    <div className="max-w-full w-full">
      <Head>
        <meta name="robots" content="index , follow" />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <meta
          name="description"
          content="HugsForBugs is an international community where we compete in CTFs and learn things together. We play around once or twice a month or so and aren't super hardcore. No one will expect you to stay up all night two nights in a row!"
        />
        <title>H4B | Internatinal Community to participate in CTF&apos; | International CTF Community</title>
      </Head>

     {/* <Navbar/> */}
      
        <motion.main transition={{ type: 'linear' }} initial={{ opacity: 0, x: -200, y: 0 }} animate={{opacity: 1, x: 0, y: 0}} exit={{ opacity: 0, x: 0, y: -100 }}>
             <HomePage />  
        </motion.main> 

    </div>
  );
};

export default Home;
