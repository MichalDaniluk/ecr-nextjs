import type { NextPage } from 'next'

import Header from "../components/header";
import Welcome from '../components/welcome'
import Feature from '../components/Feature/index'
import Service from '../components/Service'
import Gallery from '../components/Gallery'
import Testimonials from '../components/Testimonials'
import Contact from '../components/Contact'

const Home = () => {
  return (
	  <>
		{/*<Header />*/}
	  	<Welcome />
	  	<Feature />
	  	<Service />
		<Gallery />
		<Testimonials />
		<Contact />
	</>
  )
}

export default Home
