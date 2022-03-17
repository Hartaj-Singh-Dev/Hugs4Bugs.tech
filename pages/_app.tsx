import '../styles/globals.css'
import Navbar from '../components/Navbar'
import Footer from "../components/Footer"
import type { AppProps } from 'next/app'
import { AnimatePresence , AnimateSharedLayout, motion} from "framer-motion"

function MyApp({ Component, pageProps , router }: AppProps) {
  return(
    <>
 <Navbar/>
 <AnimatePresence onExitComplete={() => window.scrollTo(0, 0)} exitBeforeEnter initial={false}>
  <Component {...pageProps} key={router.pathname}/>
  </AnimatePresence>
  <Footer/>
    </> 
  ) 
}

export default MyApp
