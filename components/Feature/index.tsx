import FeatureBox from './FeatureBox'
import Features from './features.json'

const Feature = () => {
	return(
<div className="p-6 max-w-screen-2xl m-auto">
<section className="grid grid-cols-1 md:grid-cols-5 md:gap-4 md:m-4 drop-shadow-md m-auto max-w-screen-2xl w-full">

	{
		Features.map((feature,key) => (
			<FeatureBox key={key} img={feature.img} title={feature.title} description={feature.description} url={feature.url}/>
		))
	}

</section>
</div>
	)
}

export default Feature
