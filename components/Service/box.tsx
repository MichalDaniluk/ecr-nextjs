import Link from '../ui/link'

type Props = {
	link?:string,
	title:string,
	description:string
}
const ServiceBox:React.FC<Props> = ({title, description, link}) => {
	return(
		<div className="md:m-4 md:p-4 mb-6 drop-shadow-lg">
		<div className="grid md:gap-4"></div>
		<h3 className="text-2xl md:text-3xl mb-2 text-white"><span className="font-bold text-3xl text-red">{title.substring(0,1)}</span>{title.substring(1,title.length)}</h3>
        <p className=" text-gray-100">{description}</p>
		{ link && <Link url={link} title="Czytaj dalej" />}
		</div>
	)
}

export default ServiceBox
