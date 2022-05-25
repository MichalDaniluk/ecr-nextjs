const  MainMenu = () => {
	return(
<div className="header min-h:48 bg-dark">
      <div>
        <header id="main-header">
          <nav className="navbar navbar-default navbar-fixed-top">
            <div className="container">
              <div className="navbar-header">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                	<span className="icon-bar"></span>
                	<span className="icon-bar"></span>
                	<span className="icon-bar"></span>
              	</button>
                <a className="navbar-brand" href="https://www.ecr-rehabilitacja.com.pl">ECRP<span className="logo-dec"></span></a>
              </div>
              <div className="collapse navbar-collapse" id="myNavbar">
                <ul className="nav navbar-nav navbar-right">
                  <li className=""><a href="https://www.ecr-rehabilitacja.com.pl/onas">O nas</a></li>
                  <li className=""><a href="https://www.ecr-rehabilitacja.com.pl/#service">Usługi</a></li>
                  <li className=""><a href="https://www.ecr-rehabilitacja.com.pl/pediatra">Gabinet pediatryczny</a></li>
                  <li className=""><a href="https://www.ecr-rehabilitacja.com.pl/sis">SIS</a></li>
                  <li className=""><a href="https://www.ecr-rehabilitacja.com.pl/tecar">Tecar</a></li>
                  <li className=""><a href="https://www.ecr-rehabilitacja.com.pl/rodo">RODO</a></li>
                  <li className=""><a href="https://www.ecr-rehabilitacja.com.pl/#portfolio">Galeria</a></li>
                  <li className=""><a href="https://www.ecr-rehabilitacja.com.pl/#testimonial">Opinie o nas</a></li>
                  <li className=""><a href="https://www.ecr-rehabilitacja.com.pl/#contact">Kontakt</a></li>
                  <li className=""><a href="https://www.ecr-rehabilitacja.com.pl/assets/deklaracja_dostepnosci.pdf">Deklaracja dostępności</a></li>
                </ul>
              </div>
            </div>
          </nav>
        </header>
		</div>
		</div>)
	}

export default MainMenu
