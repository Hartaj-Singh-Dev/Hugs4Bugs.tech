import '../styles/globals.css'
import Navbar from '../components/Navbar'
import Footer from "../components/Footer"
import ProgressBar from '@badrap/bar-of-progress'
import Router from 'next/router'
import type { AppProps } from 'next/app'
import { AnimatePresence } from "framer-motion"

const progress = new ProgressBar({
  size:2,
  color:"#ffff",
  className:"bar-of-progrss",
  delay:0,
})

Router.events.on("routeChangeStart" , progress.start)
Router.events.on("routeChangeComplete", progress.finish)
Router.events.on("routeChangeError",progress.finish)

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
