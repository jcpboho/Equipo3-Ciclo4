//Importamos el estilo de la pagina home
import '../../assets/css/carousel.css';
//Importamos el componente navbar para los enlaces de la pagina
import NavBar from "../../components/NavBar";

//Importamos las imagenes a mostrar en la pagina
import img1 from "../../assets/img/banner1.jpg";
import img2 from "../../assets/img/banner2.jpg";
import img3 from "../../assets/img/banner3.jpg";
import cat1 from "../../assets/img/categoria1.jpg";
import cat2 from "../../assets/img/categoria2.jpg";
import cat3 from "../../assets/img/categoria3.jpg";
import trab1 from "../../assets/img/trabajo1.jpg";
import trab2 from "../../assets/img/trabajo2.jpg";
import trab3 from "../../assets/img/trabajo3.jpg";


const Home = () => (
  <>
    {/* Utilizamos el componente navbar el cual tiene los enlaces de navegación */}
    <NavBar />
    {/* <!-- <nav-bar/> --> */}
    <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner opacity-75">
        <div className="carousel-item active">
          <img
            className="blur"
            src={img1}
            width="100%"
            focusable="false"
            alt=""
          />


          <div className="container">
            <div className="carousel-caption text-start">
              <h1>Example headline.</h1>
              <p>
                Some representative placeholder content for the first slide of
                the carousel.
              </p>
              <p>
                <button className="btn btn-lg btn-primary" href="#">Sign up today</button>
              </p>
            </div>
          </div>
        </div>
        <div className="carousel-item opacity-100">
          <img
            className="blur"
            src={img2}
            width="100%"
            focusable="false"
            alt=""
          />


          <div className="container">
            <div className="carousel-caption">
              <h1>Another example headline.</h1>
              <p>
                Some representative placeholder content for the second slide of
                the carousel.
              </p>
              <p><button className="btn btn-lg btn-primary" href="#">Learn more</button></p>
            </div>
          </div>
        </div>
        <div className="carousel-item opacity-100">
          <img
            className="blur"
            src={img3}
            width="100%"
            focusable="false"
            alt=""
          />


          <div className="container">
            <div className="carousel-caption text-end">
              <h1>One more for good measure.</h1>
              <p>
                Some representative placeholder content for the third slide of
                this carousel.
              </p>
              <p>
                <button className="btn btn-lg btn-primary" href="#">Browse gallery</button>
              </p>
            </div>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#myCarousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#myCarousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
    {/* 
    <!-- Marketing messaging and featurettes
  ================================================== -->
    <!-- Wrap the rest of the page in another container to center all the content. --> */}

    <div className="container marketing">
      {/* <!-- Three columns of text below the carousel --> */}
      <div className="row">
        <div className="col-lg-4">
          <img
            src={cat1}
            width="140"
            height="140"
            alt=""
          />

          <title>Placeholder</title>

          <h2>Heading</h2>
          <p>
            Some representative placeholder content for the three columns of
            text below the carousel. This is the first column.
          </p>
          <p><button className="btn btn-secondary" href="#">View details &raquo;</button></p>
        </div>
        {/* <!-- /.col-lg-4 --> */}
        <div className="col-lg-4">
          <img
            src={cat2}
            width="140"
            height="140"
            alt=""
          />

          <title>Placeholder</title>

          <h2>Heading</h2>
          <p>
            Another exciting bit of representative placeholder content. This
            time, we've moved on to the second column.
          </p>
          <p><button className="btn btn-secondary" href="#">View details &raquo;</button></p>
        </div>
        {/* <!-- /.col-lg-4 --> */}
        <div className="col-lg-4">
          <img
            src={cat3}
            width="140"
            height="140"
            alt=""
          />
          <title>Placeholder</title>

          <h2>Heading</h2>
          <p>
            And lastly this, the third column of representative placeholder
            content.
          </p>
          <p><button className="btn btn-secondary" href="#">View details &raquo;</button></p>
        </div>
        {/* <!-- /.col-lg-4 --> */}
      </div>
      {/* <!-- /.row --> */}

      {/* <!-- START THE FEATURETTES --> */}

      <hr className="featurette-divider" />

      <div className="row featurette">
        <div className="col-md-7">
          <h2 className="featurette-heading">
            First featurette heading.
            <span className="text-muted">It’ll blow your mind.</span>
          </h2>
          <p className="lead">
            Some great placeholder content for the first featurette here.
            Imagine some exciting prose here.
          </p>
        </div>
        <div className="col-md-5">
          <img
            className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
            src={trab1}
            width="500"
            height="500"
            alt=""
          />
          <title>Placeholder</title>

        </div>
      </div>

      <hr className="featurette-divider" />

      <div className="row featurette">
        <div className="col-md-7 order-md-2">
          <h2 className="featurette-heading">
            Oh yeah, it’s that good.
            <span className="text-muted">See for yourself.</span>
          </h2>
          <p className="lead">
            Another featurette? Of course. More placeholder content here to give
            you an idea of how this layout would work with some actual
            real-world content in place.
          </p>
        </div>
        <div className="col-md-5 order-md-1">
          <img
            className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
            src={trab2}
            width="500"
            height="500"
            alt=""
          />
          <title>Placeholder</title>
        </div>
      </div>

      <hr className="featurette-divider" />

      <div className="row featurette">
        <div className="col-md-7">
          <h2 className="featurette-heading">
            And lastly, this one.
            <span className="text-muted">Checkmate.</span>
          </h2>
          <p className="lead">
            And yes, this is the last block of representative placeholder
            content. Again, not really intended to be actually read, simply here
            to give you a better view of what this would look like with some
            actual content. Your content.
          </p>
        </div>
        <div className="col-md-5">
          <img
            className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
            src={trab3}
            width="500"
            height="500"
            alt=""
          />
          <title>Placeholder</title>
        </div>
      </div>

      <hr className="featurette-divider" />

      {/* <!-- /END THE FEATURETTES --> */}
    </div>
    {/* <!-- /.container --> */}
    <footer className="container">
      <p className="float-end"><a href="#myCarousel">Back to top</a></p>
      <p>
        &copy; 2017–2021 Company, Inc. &middot;
        <a href="#a">Privacy</a>
        &middot;
        <a href="#a">Terms</a>
      </p>
    </footer>
  </>
);

//Exportamos el componente para ser exportado en index.js de esta carpeta public
export default Home;
/*
Altenativa, usar en los modulos el export siguiente
export {Home}

module.exports = {
    About: require('./About'),
    Home: require('./Home'),
    Login: require('./Login'),
    Register: require('./Register'),
    User: require('./Contact')}; */