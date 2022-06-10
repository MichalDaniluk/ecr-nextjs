import ServiceBox from '../Service/box'
import Header2 from '../ui/Header2'
import SubHeader from '../ui/SubHeader'
import HRShort from '../ui/HRShort'

const Service = () => {
	return(
		<div id="service" className="w-full bg-gradient-to-b from-cyan-500 to-blue-500 drop-shadow-lg">
		<div className="p-6 max-w-screen-2xl m-auto">
			<div className="text-center block mt-12">
            	<Header2 title="Szukasz profesjonalnej rehabilitacji?" dark={false}/>
            	<SubHeader title="Nasi specjaliści dobiorą właściwą metodę rehabilitacji abyś zawsze czuł się doskonale" dark={false}/>
            	<HRShort />
          	</div>
			<div className="grid grid-cols-1 md:grid-cols-4 md:gap-4 max-w-screen-2xl m-auto">
				<ServiceBox title="Fizykoterapia" description="Jedna z form fizjoterapii i część medycyny fizykalnej, w której na organizm oddziałuje się rozmaitymi bodźcami fizycznymi, pobieranymi z natury" />
		  		<ServiceBox title="Terapia TECAR" description="Jedna z najbardziej skutecznych i innowacyjnych metod wspomagających regenerację stawów i mięśni" link="http://www.ecr-rehabilitacja.com.pl/tecar" />
		  		<ServiceBox title="Masaż" description="Masaż to – ogólnie rzecz ujmując – zabieg fizjoterapeutyczny, w którego trakcie tkanki ulegają sprężystemu odkształceniu po wpływem siły" />
		  		<ServiceBox title="Fala uderzeniowa" description="Falą uderzeniową w fizykoterapii nazywamy falę akustyczną o bardzo krótkim czasie narastania i dużym ciśnieniu maksymalnym, wytwarzaną zewnątrzustrojowo" />
			</div>
		 	</div>
		</div>
	)
}

export default Service
