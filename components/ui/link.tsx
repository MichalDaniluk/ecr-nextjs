type Props = {
	url:string,
	title:string
}
const Link:React.FC<Props> = ({url, title}) => {
	return(
		<a className=" text-red block w-full mt-4 underline" href={url}>{title}</a>
	)
}

export default Link
