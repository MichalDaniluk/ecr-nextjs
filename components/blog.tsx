/* this is temporary file, client not decided yet to show blog page */
const Blog = () => {
return (<section id="blog" className="section-padding wow fadeInUp delay-05s">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <h2 className="service-title pad-bt15">Artykuły o zdrowiu</h2>
            <p className="sub-title pad-bt15">Tutaj znajdziesz nasze artykuły o zdrowiu, które<br />przydadzą się kazdemu kto dba o siebie.</p>
            <hr className="bottom-line" />
          </div>
          <div className="col-md-4 col-sm-6 col-xs-12">
            <div className="blog-sec">
              <div className="blog-img">
                <a href="">
                  <img src="img/blog01.jpg" className="img-responsive" />
                </a>
              </div>
              <div className="blog-info">
                <h2>Jak odciązyć bolący kręgosłup?</h2>
                <p>Żeby zniwelować zwiększone napięcie mięśniowe w dolnym odcinku pleców, nie od razu musisz iść do lekarza. Wystarczy kilka prostych ćwiczeń.</p>
                <a href="" className="read-more">Czytaj dalej →</a>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 col-xs-12">
            <div className="blog-sec">
              <div className="blog-img">
                <a href="">
                  <img src="img/blog02.jpg" className="img-responsive" />
                </a>
              </div>
              <div className="blog-info">
                <h2>Rehabilitacja w basenie?</h2>
                <p>Rehabilitacja w basenie może stać się panaceum na wiele dolegliwości. Pływanie bowiem poprawia ogólną formę, łagodzi bóle mięśni i stawów.</p>
                <a href="" className="read-more">Czytaj dalej →</a>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 col-xs-12">
            <div className="blog-sec">
              <div className="blog-img">
                <a href="">
                  <img src="img/blog03.jpg" className="img-responsive" />
                </a>
              </div>
              <div className="blog-info">
                <h2>Czy rehabilitacja to konieczność?</h2>
                <p>Świadczenia gwarantowane z zakresu rehabilitacji leczniczej są realizowane w warunkach ambulatoryjnych, domowych, w warunkach ośrodka.</p>
                <a href="" className="read-more">Czytaj dalej →</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>)
	}

	export default Blog
