import type { NextPage } from 'next'

import Header from "../components/header";

const Ortopeda: NextPage = () => {
  return (
	  <>
	{/*<Header />*/}
	<div className="page">
	<h1>Gabinet ortopedyczny</h1>
	<p>W gabinecie ortopedycznym świadczymy porady lekarskie, diagnostyke i leczenie:</p>
<ul>
<li>zmian przeciążeniowych i zwyrodnieniowych w obrębie narządu ruchu,</li>
<li>zmian zwyrodnieniowych stawów i kręgosłupa,</li>
<li>dyskopatia, rwa kulszowa, rwa barkowa,</li>
<li>skręcenia stawów, złamania kości,</li>
<li>schorzenia mięśni ,ścięgien, choroby tkanek miękkich,</li>
<li>zespoły bólowe i przeciążeniowe, entezopatie (łokieć tenisisty, zespół bolesnego barku, ostroga piętowa itp),</li>
<li>następstwa urazów (zaburzenia zrostu kostnego, deformacje pourazowe),</li>
<li>niestabilność stawów i inne</li>
</ul>

<p>Nasi lekarze świadczą również porady lekarskie obejmujące wskazania i kwalifikacje do leczenia operacyjnego w zakresie endoprotez, artroskopii, zabiegów rekonstrukcyjnych, operacji kręgosłupa i wielu innych</p>
	</div>
	</>
  )
}

export default Ortopeda
