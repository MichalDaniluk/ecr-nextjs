import Header2 from '../ui/Header2'
import SubHeader from '../ui/SubHeader'
import ContactBox from './ContactBox'
import HRShort from '../ui/HRShort'

const Contact = () => {
return(
	<section className=" gap-4 bg-gradient-to-b from-cyan-500 to-blue-500 p-12">
		<div className="m-auto max-w-screen-2xl">
		<Header2 title="Skontaktuj się z nami" dark={false} />
		<SubHeader title="Zadzwoń do nas lub napisz wiadomość email" dark={false}/>
		{/*<SubHeader title="Mozesz równiez wypełnic formularz kontaktowy, a bedziemy w kontakcie" dark={false}/>*/}
		<HRShort />
		<div className="grid md:grid-cols-2 place-items-center mt-12 mb-6">
			<ContactBox street="ul. Sitnicka 76" city="21-500 Biała Podlaska" email="ecr.rehabilitacjabp@gmail.com" phone="+48 83 344 27 00" time="8-18" />
			<ContactBox street="ul. Piaskowa 1A lok nr 1" city="24-100 Puławy" email="psycholog.pulawy@gmail.com" phone="+48 797-818-489" time="8-21" />
		</div>
		</div>
	</section>
	)
}

export default Contact
