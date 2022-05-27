import Image from 'next/image'

type Props = {
	url:string,
	alt:string
}

const GalleryBox:React.FC<Props> = ({url, alt}) => {
	return(
		<div className="w-100 h-100 drop-shadow-lg">
			<Image src={url} className="img-responsive rounded-lg m-4" alt={alt} width="100" height="100" layout="responsive"/>
		</div>
	)
}

export default GalleryBox
