import { render } from "react-dom"

import Header2 from '../ui/Header2'
import SubHeader from '../ui/SubHeader'
import GalleryBox from './GalleryBox'

const Gallery = () => {
	return(

<>
<div id="gallery" className="text-center block mt-12 drop-shadow-md">
	<Header2 title="Gabinety Europejskiego Centrum Rehabilitacji i Psychologii" dark={true} />
	<SubHeader title="Poniżej znajdziesz nasze zdjęcia, sprawdź kim jesteśmy zanim do nas przyjdziesz" dark={true} />
</div>
<div className="grid grid-cols-3 gap-4 p-12 mb-6 m-auto max-w-screen-2xl w-full">
	<GalleryBox url="/img/port01.jpg" alt="Parking" />
	<GalleryBox url="/img/port02.jpg" alt="Parking" />
	<GalleryBox url="/img/port03.jpg" alt="Parking" />
</div>

</>
	)
}

export default Gallery
