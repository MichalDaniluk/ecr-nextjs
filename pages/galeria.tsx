import { render } from "react-dom"

import Header2 from '../components/ui/Header2'
import SubHeader from '../components/ui/SubHeader'
import GalleryBox from '../components/Gallery/GalleryBox'

const GalleryPage = () => {
	return(

<>
<div id="gallery" className="text-center block mt-12 drop-shadow-md">
	<Header2 title="Gabinety Europejskiego Centrum Rehabilitacji i Psychologii" dark={true} />
	<SubHeader title="Poniżej znajdziesz nasze zdjęcia" dark={true} />
</div>
<div className="grid grid-cols-3 gap-4 p-12 mb-6 m-auto max-w-screen-2xl w-full">
	<GalleryBox url="/img/port01.jpg" alt="Parking" />
	<GalleryBox url="/img/port02.jpg" alt="Parking" />
	<GalleryBox url="/img/port03.jpg" alt="Parking" />
	<GalleryBox url="/img/port04.jpg" alt="Parking" />
	<GalleryBox url="/img/port05.jpg" alt="Parking" />
	<GalleryBox url="/img/port06.jpg" alt="Parking" />
	<GalleryBox url="/img/port07.jpg" alt="Parking" />
	<GalleryBox url="/img/port08.jpg" alt="Parking" />
	<GalleryBox url="/img/port09.jpg" alt="Parking" />
	<GalleryBox url="/img/port10.jpg" alt="Parking" />
	<GalleryBox url="/img/port11.jpg" alt="Parking" />
	<GalleryBox url="/img/port12.jpg" alt="Parking" />
</div>

</>
	)
}

export default GalleryPage
