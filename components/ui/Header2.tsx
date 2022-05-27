type Props = {
	title:string
	dark: boolean
}

const Header2:React.FC<Props> = ({title, dark}) => {
	const color = dark ? 'text-gray-600' : 'text-gray-200'
	return(
		<h2 className={`text-3xl ${color} font-bold text-center`}>{title}</h2>
	)
}

export default Header2
