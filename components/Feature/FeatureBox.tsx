type Props = {
	img:string,
	title:string,
	description:string
}
const FeatureBox:React.FC<Props> = ({img, title, description}) => {
	return(
		<div className="m-4 p-4">
		{/*<div className="grid place-items-center gap-4"><img src={img} /></div>*/}
		<h3 className="text-3xl  text-gray-600 mb-6"><span className="font-bold text-3xl text-amber-600">{title.substring(0,1)}</span>{title.substring(1,title.length)}</h3>
            <p className="text-gray-400">{description}</p>
		</div>
	)
}

export default FeatureBox
