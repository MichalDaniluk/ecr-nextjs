import Header2 from '../ui/Header2'
import TestimonialBox from '../Testimonials/TestimonialBox'

const Testimonials = () => {
	return(
		<section className="bg-dark text-white drop-shadow-lg">
		<div id="testimonial" className="w-full p-4 md:p-24 grid grid-cols-1 md:grid-cols-3 m-auto max-w-screen-2xl">
			<TestimonialBox title="Europejskie Centrum Rehabilitacji zapewniła mi profesjonalą opiekę podczas rehabilitacji mojego kręgosłupa. Bardzo dobrze dobrane zabiegi zapewniły mi szybki powrót do zdrowia" client="Paweł Brzozowski, Klient" />
			<TestimonialBox title="Rehabilitacja kolana którą przeszedłem poszła świetnie dzięki wyspecjalizowanej kadrze Europejskiego Centrum Rehabilitacji w Białej Podlaskiej" client="Krzysztof, Klient" />
			<TestimonialBox title="Dzięki fachowej, wyspecjalizowanej kadrze ECR w Białej Podlaskiej jestm zdrowy i sprawny. Specjaliści spisali się na medal, szybko wróciłem do pracy" client="Jacek Gaca, Klient" />
    	</div>
		</section>
	)
}

export default Testimonials
