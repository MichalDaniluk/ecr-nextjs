import FeatureBox from './FeatureBox'
import Features from './features.json'

const Feature = () => {
	return(

<section className="grid grid-cols-1 md:grid-cols-5 md:gap-4 md:m-4 drop-shadow-md m-auto max-w-screen-2xl">
	{
		Features.map((feature,key) => (
			<FeatureBox key={key} img={feature.img} title={feature.title} description={feature.description} url={feature.url}/>
		))
	}
</section>

	//	<section>
    //  <div className="container">
    //    <div className="row">
    //      <div className="col-md-3 col-sm-6 col-xs-12">
    //        <div className="wrap-item text-center">
    //          <div className="item-img">
    //            <img src="/img/ser01.png" />
    //          </div>
    //          <h3 className="pad-bt15"><span className="text-danger font-weight-bold">P</span>oradnia rehabilitacyjna</h3>
    //          <p>Świadczymy profesjonalne usługi rehabilitacyjne w systemie ambulatoryjnej opieki lekarskiej oraz fizjoterapeutycznej.</p>
    //        </div>
    //      </div>
    //      <div className="col-md-3 col-sm-6 col-xs-12">
    //        <div className="wrap-item text-center">
    //          <div className="item-img">
    //            <img src="/img/ser02.png" />
    //          </div>
    //          <h3 className="pad-bt15"><span className="text-danger font-weight-bold">P</span>oradnia<br />psychologiczna</h3>
    //          <p>Zespół wysoko wykwalifikowanych i doświadczonych psychologów. Łączy nas podejście do pracy, które cechuje profesjonalizm, otwartość i uczciwość.</p>
    //        </div>
    //      </div>
    //      <div className="col-md-3 col-sm-6 col-xs-12">
    //        <div className="wrap-item text-center">
    //          <div className="item-img">
    //            <img src="/img/ser03.png" />
    //          </div>
    //          <h3 className="pad-bt15"><span className="text-danger font-weight-bold">G</span>abinet<br />chirurgiczny</h3>
    //          <p>Zapraszamy do nowocześnie wyposażonego gabinetu chirurgicznego. Zapewniamy profesjonalizm, nowoczesne, bezbolesne leczenie.</p>
    //        </div>
    //      </div>
    //      <div className="col-md-3 col-sm-6 col-xs-12">
    //        <div className="wrap-item text-center">
    //          <div className="item-img">
    //            <img src="/img/ser04.png" />
    //          </div>
    //          <h3 className="pad-bt15"><span className="text-danger font-weight-bold">G</span>abinet<br />gastrologiczny</h3>
    //          <p>Zapraszamy pacjentów z dolegliwościami układu pokarmowego  na konsultacje ze specjalistami gastroenterologii</p>
    //        </div>
    //      </div>
    //    </div>
    //  </div>
    //</section>
	)
}

export default Feature
