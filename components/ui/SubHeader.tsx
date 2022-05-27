type Props = {
	title:string
	dark:boolean
}

const SubHeader:React.FC<Props> = ({title, dark}) => {
	const color = dark ? 'text-gray-600' : 'text-white'
	return(
		<p className={`${color} mt-6 text-center`}>{title}</p>
	)
}

export default SubHeader
