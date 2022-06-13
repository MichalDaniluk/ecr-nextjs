import FeatureBox from './FeatureBox'
import Features from './features.json'

const Feature = () => {
	return(
<div className="p-4 max-w-screen-2xl m-auto">
<section className="grid grid-cols-1 md:grid-cols-6 md:gap-2 md:m-2 drop-shadow-md m-auto max-w-screen-2xl w-full">

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
