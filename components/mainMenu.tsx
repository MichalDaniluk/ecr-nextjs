import Link from 'next/link'

const  MainMenu = () => {
	return(

			<div className="w-full bg-gradient-to-b from-cyan-500 to-blue-500 drop-shadow-lg">
                <ul className="list-none md:flex p-4 max-w-screen-2xl m-auto">
				  <li className="mt-2 text-2xl text-white uppercase"><Link href="/">ECR</Link></li>
                  <li className="m-4 text-white uppercase"><Link href="/onas">O nas</Link></li>
                  <li className="m-4 text-white uppercase"><Link href="/#service">Usługi</Link></li>
                  <li className="m-4 text-white uppercase"><Link href="/ems">EMS</Link></li>
                  <li className="m-4 text-white uppercase"><Link href="/sis">SIS</Link></li>
                  <li className="m-4 text-white uppercase"><Link href="/tecar">Tecar</Link></li>
                  <li className="m-4 text-white uppercase"><Link href="/rodo">RODO</Link></li>
                  <li className="m-4 text-white uppercase"><Link href="/#gallery">Galeria</Link></li>
                  <li className="m-4 text-white uppercase"><Link href="#testimonial">Opinie o nas</Link></li>
                  <li className="m-4 text-white uppercase"><Link href="#contact">Kontakt</Link></li>
                  <li className="m-4 text-white uppercase"><Link href="https://www.ecr-rehabilitacja.com.pl/assets/deklaracja_dostepnosci.pdf">Deklaracja dostępności</Link></li>
                </ul>
              </div>

)
	}

export default MainMenu
