import Link from '../ui/link'

type Props = {
	img:string,
	title:string,
	description:string
	url:string
}
const FeatureBox:React.FC<Props> = ({img, title, description, url}) => {
	return(
		<div className="m-4 md:m-4 md:p-4">
		{/*<div className="grid place-items-center gap-4"><img src={img} /></div>*/}
		<h3 className="text-xl md:text-3xl  text-gray-600 md:mb-6"><span className="font-bold text-3xl text-amber-600">{title.substring(0,1)}</span>{title.substring(1,title.length)}</h3>
            <p className="text-gray-400">{description}</p>
			{ url && <Link url={url} title="czytaj dalej" />}
		</div>
	)
}

export default FeatureBox
