const Contact = () => {
return(<div id="contact" className="section-padding wow fadeInUp delay-05s">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center white">
            <h2 className="service-title pad-bt15">Skontaktuj się z nami</h2>
            <p className="sub-title pad-bt15">Zadzwoń do nas lub napisz wiadomość email.<br/>Mozesz równiez wypełnic formularz kontaktowy, a bedziemy w kontakcie</p>
            <hr className="bottom-line white-bg" />
          </div>
          <div className="col-md-6 col-sm-6 col-xs-12">
            <div className="loction-info white">
              <p><i className="fa fa-map-marker fa-fw pull-left fa-2x"></i>ul. Sitnicka 76<br/>21-500 Biała Podlaska</p>
              <p><i className="fa fa-envelope-o fa-fw pull-left fa-2x"></i>ecr.rehabilitacjabp@gmail.com</p>
              <p><i className="fa fa-phone fa-fw pull-left fa-2x"></i>+48 83 344 27 00</p>
              <p><i className="fa fa-map-marker fa-fw pull-left fa-2x"></i>Godziny pracy: 8-18</p>
              <a className="btn btn-primary btn-submit" href="http://e-rejestracja.info.pl/ecr">Zarejestruj się</a>
            </div>
          </div>
          <div className="col-md-6 col-sm-6 col-xs-12">
            <div className="loction-info white">
              <p><i className="fa fa-map-marker fa-fw pull-left fa-2x"></i>ul. Piaskowa 1A lok nr 1<br/>24-100 Puławy</p>
              <p><i className="fa fa-envelope-o fa-fw pull-left fa-2x"></i>psycholog.pulawy@gmail.com</p>
              <p><i className="fa fa-phone fa-fw pull-left fa-2x"></i>+48 797-818-489</p>
              <p><i className="fa fa-map-marker fa-fw pull-left fa-2x"></i>Godziny pracy: 8-21</p>
              <a className="btn btn-primary btn-submit" href="http://e-rejestracja.info.pl/ecr">Zarejestruj się</a>
            </div>
          </div>
        </div>
      </div>
    </div>)
	}

	export default Contact
