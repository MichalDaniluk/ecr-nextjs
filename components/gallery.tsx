import { render } from "react-dom"

const Gallery = () => {
	return(
		<div id="portfolio" className="section-padding wow fadeInUp delay-05s">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <h2 className="service-title pad-bt15">Galeria</h2>
            <p className="sub-title pad-bt15">W tej sekcji znajdziesz zdjęcia z naszego Europejskiego Centrum Rehabilitacji,<br/> sprawdź kim jesteśmy zanim do nasz przyjdziesz.</p>
            <hr className="bottom-line" />
          </div>

          <div className="col-md-4 col-sm-6 col-xs-12 portfolio-item padding-right-zero mr-btn-15">
            <figure>
              <img src="/img/port01.jpg" className="img-responsive" />
              <figcaption></figcaption>
            </figure>
          </div>
          <div className="col-md-4 col-sm-6 col-xs-12 portfolio-item padding-right-zero mr-btn-15">
            <figure>
              <img src="/img/port02.jpg" className="img-responsive" />
              <figcaption></figcaption>
            </figure>
          </div>
          <div className="col-md-4 col-sm-6 col-xs-12 portfolio-item padding-right-zero mr-btn-15">
            <figure>
              <img src="/img/port03.jpg" className="img-responsive" />
              <figcaption></figcaption>
            </figure>
          </div>

          <div className="col-md-12 text-center">
            <div className="service-item">
              <br />
              <a href="/galeria">Zobacz więcej...</a>
            </div>
          </div>

        </div>
      </div>
    </div>
	)
}

export default Gallery
