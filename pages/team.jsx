import { motion } from "framer-motion"
import Team from "../components/Team/Team.tsx"
import Navbar from "../components/Navbar"

const team = () => {
  return (
	 <>
	{/* <Navbar/> */}

  <motion.main transition={{ type: 'linear' }} initial={{ opacity: 0, x: -200, y: 0 }} animate={{opacity: 1, x: 0, y: 0}} exit={{ opacity: 0, x: 0, y: -100 }}>
	 <Team/> 
   </motion.main> 	
	 </>
  )
}

export default team