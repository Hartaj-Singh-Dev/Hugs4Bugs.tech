import { motion } from "framer-motion"
import Team from "../components/Team/Team.tsx"
import Navbar from "../components/Navbar"
import Head from "next/head"

const team = () => {
  return (
	 <>
	 <Head>
		<title>H4B | Team Page | 6 Leading Members of h4b community</title> 
		<meta name="description" content="This is list of Leading Members , who are Mentors and CTF player in HugsForBugs Community " />
		<meta name="keywords" content="Casmpy , MrsMalware , Cat++ , Hartaj Singh , Fade , Nikk , abhishekydv , Team , Community " />
		<meta charSet="UTF-8"/>
		<meta name="robots" content="index , follow"/>
		<meta name="viewport" content="width=device-width , initial-scale=1.0" />
	 </Head>
	{/* <Navbar/> */}

  <motion.main transition={{ type: 'linear' }} initial={{ opacity: 0, x: -200, y: 0 }} animate={{opacity: 1, x: 0, y: 0}} exit={{ opacity: 0, x: 0, y: -100 }}>
	 <Team/> 
   </motion.main> 	
	 </>
  )
}

export default team