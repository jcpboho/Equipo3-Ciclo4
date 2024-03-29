//Importamos en navbar el cual tiene los enlaces de navegacion
import NavBar from "components/NavBar";


//Importamos las imagenes a mostrar en la pagina
import trab1 from "assets/img/trabajo1.jpg";
import trab2 from "assets/img/trabajo2.jpg";
import trab3 from "assets/img/trabajo3.jpg";

const About = () => (
    <>
        {/* Utilizamos el componente navbar el cual tiene los enlaces de navegación */}
        <NavBar />
        <div className="container marketing">


            {/* <!-- START THE FEATURETTES --> */}


            <div className="row featurette  mt-5">
                <div className="col-md-7  mt-5">
                    <h2 className="featurette-heading">
                        First featurette heading.
                        <span className="text-muted">It’ll blow your mind.</span>
                    </h2>
                    <p className="lead">
                        Some great placeholder content for the first featurette here.
                        Imagine some exciting prose here.
                    </p>
                </div>
                <div className="col-md-5  mt-5">
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

//Exportamos el componente login para ser llamado en el index.js de esta carpeta public
export default About;
/*
Altenativa, usar en los modulos el export siguiente
export {Home}

module.exports = {
    About: require('./About'),
    Home: require('./Home'),
    Login: require('./Login'),
    Register: require('./Register'),
    User: require('./Contact')}; */