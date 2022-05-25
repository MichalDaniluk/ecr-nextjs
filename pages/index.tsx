import type { NextPage } from 'next'

import Welcome from '../components/welcome'
import Feature from '../components/feature'
import Service from '../components/service'
import Gallery from '../components/gallery'
import Testimonials from '../components/testimonials'
import Contact from '../components/contact'

const Home: NextPage = () => {
  return (
	  <>
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
