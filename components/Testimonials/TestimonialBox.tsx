type Props = {
	title:string,
	client:string,
}
const TestimonialBox:React.FC<Props> = ({ title, client}) => {
	return(
		<div className="m-4 p-6 border-2 rounded-lg drop-shadow-lg border-gray-300">
		<blockquote>
        	<p className="text-white text-lg italic">{title}</p>
        </blockquote>
        	<span className="text-gray-300 text-lg italic mt-4 block">{client}</span>
		</div>
	)
}

export default TestimonialBox
