import type { NextPage } from 'next'

import Header from "../components/header";

const Home: NextPage = () => {
  return (
	  <>
	{/*<Header />*/}
	<div className="page">
	<h1>Pediatria</h1>
<p>Pediatria jest dziedziną medycyny, która zajmuje się opieką i rozwojem dzieci oraz leczeniem chorób dziecięcych.</p>

<h2>Czym zajmuje się lekarz pediatra?</h2>
<p>Pediatra, podobnie jak internista, jest specjalistą posiadającym wiedzę z zakresu różnych dziedzin medycyny.</p>

<p>Lekarz ten zajmuje się profilaktyką, diagnozowaniem i leczeniem dzieci i młodzieży od niemowlęctwa, aż do 18. roku życia. Jest to lekarz, który stale czuwa nad rozwojem dziecka: udziela rodzicom porad dotyczących opieki nad niemowlętami i dziećmi, zleca i interpretuje badania okresowe, zleca szczepienia ochronne, czy też rozpoznaje zaburzenia rozwojowe.</p>

<h2>Jakie choroby leczy pediatra?</h2>
<p>Do chorób, które najczęściej leczy pediatra, należą: przeziębienie, grypa, schorzenia wieku dziecięcego typu: ospa wietrzna, odra, świnka, różyczka, czy szkarlatyna. Jednak lekarz ten rozpoznaje również choroby i wady serca, układu pokarmowego, moczowego, zmiany skórne, czy alergie.</p>

<h2>Z jakimi objawami należy zgłosić się do lekarza pediatry?</h2>
<p>Do lekarza pediatry rodzice powinni zgłosić się zawsze, gdy zdrowie lub zachowanie dziecka budzi ich niepokój. Do objawów, z którymi rodzice najczęściej się zgłaszają, należą:</p>
<ul>
<li>podwyższona temperatura,</li>
<li>kaszel, katar,</li>
<li>wysypki i zmiany skórne,</li>
<li>wzdęty brzuszek,</li>
<li>biegunki i zaparcia,</li>
<li>wymioty,</li>
<li>brak apetytu,</li>
<li>nadmierna płaczliwość,</li>
<li>nadmierna senność lub osowiałość dziecka,</li>
<li>brak reakcji na bodźce zewnętrzne: nasze gesty, głos, mimikę,</li>
<li>opóźniony rozwój ruchowy,</li>
<li>trudności w koncentracji i zapamiętywaniu,</li>
<li>nadpobudliwość.</li>
</ul>
	</div>
	</>
  )
}

export default Home
