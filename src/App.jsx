import './App.css'
import { HTMLImg, CSSImg, ReactImg, JSImg, NodeImg, MaterialUImg, ReduxImg, bootstrapImg, MySQLImg, ECommerceImg, RickMortyImg, CRUDImg, PokedexImg, TrainifyImg, SpainFlag, UKFlag, ComingSoonEspImg, Rocket, ComingSoonEngImg } from "./images";
import { useState } from 'react';
import { BrunoZeppaEngCv, BrunoZeppaEspCv} from "./documents";







function App() {

  const [currentImage, setCurrentImage] = useState(1);
  const [info, setInfo] = useState("react")
  const [changeLanguage, setChangeLanguage] = useState(false)

  const percent = 100 / 4;

  const listStyles = {
    width: `${100 * 4}%`,
    transform: `translateX(-${(currentImage - 1) * percent}%)`
  }

  const changeCv = () => {
    if (changeLanguage === true) {
      return BrunoZeppaEngCv
    } else if (changeLanguage === false) {
      return BrunoZeppaEspCv
    }
  }

  const changeCvTitle = () => {
    if (changeLanguage === true) {
      return "Bruno Zeppa CV ENG"
    } else if (changeLanguage === false) {
      return "Bruno Zeppa CV ESP"
    }
  }



  const getInfo = () => {
    if (info === "react") {
      return (
        <>
          <ul className="images-list" style={listStyles}>
            <li> <a href="https://e-commerce-bruno-zeppa.netlify.app/"><img src={ECommerceImg} alt="" /> <button className='see-project-btn'>{changeLanguage ? "See project" : "ver proyecto"}</button></a></li>
            <li><a href="https://pokedexbrunozeppa.netlify.app"> <img src={PokedexImg} alt="" /><button className='see-project-btn'>{changeLanguage ? "See project" : "ver proyecto"}</button></a></li>
            <li><a href="https://rickandmortybrunozeppa.netlify.app"><img src={RickMortyImg} alt="" /><button className='see-project-btn'>{changeLanguage ? "See project" : "ver proyecto"}</button></a></li>
            <li><a href="https://userscrudbrunozeppa.netlify.app"><img src={CRUDImg} alt="" /><button className='see-project-btn'>{changeLanguage ? "See project" : "ver proyecto"}</button></a></li>
          </ul>
        </>
      );
    } else if (info === "js") {
      return (
        <>
          <ul className="images-list" style={listStyles}>
            <li> <a href="https://www.trainify.com.mx"><img src={TrainifyImg} alt="" /><button className='see-project-btn'>{changeLanguage ? "See project" : "ver proyecto"}</button></a></li>
            <li> <img src={changeLanguage ? ComingSoonEngImg : ComingSoonEspImg} alt="" /></li>
            <li> <img src={changeLanguage ? ComingSoonEngImg : ComingSoonEspImg} alt="" /></li>
            <li> <img src={changeLanguage ? ComingSoonEngImg : ComingSoonEspImg} alt="" /></li>
          </ul>
        </>

      );
    } else if (info === "node") {
      return (
        <>
          <ul className="images-list" style={listStyles}>
            <li> <img src={changeLanguage ? ComingSoonEngImg : ComingSoonEspImg} alt="" /></li>
            <li> <img src={changeLanguage ? ComingSoonEngImg : ComingSoonEspImg} alt="" /></li>
            <li> <img src={changeLanguage ? ComingSoonEngImg : ComingSoonEspImg} alt="" /></li>
            <li> <img src={changeLanguage ? ComingSoonEngImg : ComingSoonEspImg} alt="" /></li>
          </ul>
        </>
      )
    }
  }




  return (
    <div className="App">
      <nav>
        <ul>
          <li><a href="#home"><i className="fa-solid fa-house"></i> <strong className='nav-text-desktop'>{changeLanguage ? "Home" : "Inicio"}</strong></a></li>
          <li><a href="#aboutMe"><i className="fa-solid fa-folder-open"></i> <strong className='nav-text-desktop'>{changeLanguage ? "About me" : "Acerca de mi"}</strong></a></li>
          <li><a href="#skills"><i className="fa-solid fa-wrench"></i> <strong className='nav-text-desktop'>{changeLanguage ? "Skills" : "Habilidades"}</strong></a></li>
          <li><a href="#portfolio"><i className="fa-solid fa-briefcase"></i> <strong className='nav-text-desktop'>{changeLanguage ? "Portfolio" : "Portafolio"}</strong></a></li>
          <li><a href="#contact"><i className="fa-solid fa-address-book"></i> <strong className='nav-text-desktop'>{changeLanguage ? "Contact" : "Contacto"}</strong></a></li>
        </ul>
      </nav>
      <main>


        <header id="home">
          <div className='language-container'>
            <img src={SpainFlag} alt="" onClick={() => setChangeLanguage(false)} />
            <img src={UKFlag} alt="" onClick={() => setChangeLanguage(true)} />
          </div>
          <div className='banner-container-info'>
            <div className='circle-photo'></div>
            <div>
              <h1>BRUNO ZEPPA</h1>
              <h2>FULL STACK DEV JR.</h2>
            </div>
          </div>
          <a className='cv-button' href={changeCv()} download={changeCvTitle()}>
            <p>{changeLanguage ? "download my Cv" : "descarga mi CV"}</p>
            <img src={Rocket} className="rocket" alt="" />
          </a>
          <span className='span1' style={{color: "#222222"}}>.</span>
          <span className='span2' style={{color: "#222222"}}>.</span>
        </header>


        <div className='skills-about-wrap'>

          <section className='about-me' id='aboutMe'>
            <div className='about-me-container'>
              <h3>{changeLanguage ? "About Me" : "Acerca de Mi"}</h3>
              <p>
                {changeLanguage ? "I am passionate about developing, creating and innovating and everything related to technology. I am a cheerful and ambitious man of continuous learning. I enjoy solving problems and working in team." : "Me apasiona desarrollar, crear e innovar y todo lo relacionado con la tecnología. Soy un hombre alegre y ambicioso de continuo aprendizaje. Disfruto resolviendo problemas y trabajando en equipo."}
              </p>
              <div className='social-media'>
                <a href="https://github.com/BrunoZeppa"><b><i className="fa-brands fa-github"></i></b></a>
                <a href="https://www.linkedin.com/in/brunozeppa/"><b><i className="fa-brands fa-linkedin"></i></b></a>
              </div>
            </div>
            <span className='span5' style={{color: "#222222"}}>.</span>
            <span className='span6' style={{color: "#222222"}}>.</span>
          </section>

          <section className='skills' id='skills'>
            <div className='skills-container'>
              <h3>{changeLanguage ? "Skills" : "Habilidades"}</h3>
              <div className='technologies-wrap'>
                <div>
                  <img src={HTMLImg} style={{ borderLeft: "#e44d26 7px solid", paddingLeft: "10px" }} alt="" />
                  <h6>HTML</h6>
                </div>
                <div>
                  <img src={CSSImg} style={{ borderLeft: "#2062af 7px solid", paddingLeft: "10px" }} alt="" />
                  <h6>CSS</h6>
                </div>
                <div>
                  <img src={JSImg} style={{ borderLeft: "#ffd600 7px solid", paddingLeft: "10px" }} alt="" />
                  <h6>JavaScript</h6>
                </div>
                <div>
                  <img src={ReactImg} style={{ borderLeft: "#00d8ff 7px solid", paddingLeft: "10px" }} alt="" />
                  <h6>React.js</h6>
                </div>
                <div>
                  <img src={ReduxImg} style={{ borderLeft: "#7e57c2 7px solid", paddingLeft: "10px" }} alt="" />
                  <h6>Redux</h6>
                </div>
                <div>
                  <img src={bootstrapImg} style={{ borderLeft: "#653ab3 7px solid", paddingLeft: "10px" }} alt="" />
                  <h6>Boostrap</h6>
                </div>
                <div>
                  <img src={NodeImg} style={{ borderLeft: "#8cc84b 7px solid", paddingLeft: "10px" }} alt="" />
                  <h6>Node.js</h6>
                </div>
                <div>
                  <img src={MaterialUImg} style={{ borderLeft: "#29b6f6 7px solid", paddingLeft: "10px" }} alt="" />
                  <h6>Material UI</h6>
                </div>
                <div>
                  <img src={MySQLImg} style={{ borderLeft: "#00668d 7px solid", paddingLeft: "10px" }} alt="" />
                  <h6>My SQL</h6>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/*---------------------------------------------- */}

        <section className='portfolio' id='portfolio'>
          <span className='span3' style={{color: "#222222"}}>.</span>
          <span className='span4' style={{color: "#222222"}}>.</span>
          <div className='portfolio-main-container'>
            <h3>{changeLanguage ? "Portfolio" : "Portafolio"}</h3>
            <div className='portfolio-options-container'>
              <button onClick={() => {
                setInfo("react")
                setCurrentImage(1)
              }}>REACT</button>
              <button onClick={() => {
                setInfo("js")
                setCurrentImage(1)
              }}>JAVASCRIPT</button>
              <button onClick={() => {
                setInfo("node")
                setCurrentImage(1)
              }}>NODE</button>
            </div>
            <div className='portfolio-carousel'>



              <div className="gallery">
                <div className="button-container left">
                  <button
                    onClick={() => setCurrentImage(currentImage - 1)}
                    disabled={currentImage <= 1}
                  >
                    <i className="fa-solid fa-angle-left"></i>
                  </button>
                </div>

                {getInfo()}

                <div className="button-container right">
                  <button
                    onClick={() => setCurrentImage(currentImage + 1)}
                    disabled={currentImage >= 4}
                  >
                    <i className="fa-solid fa-angle-right"></i>
                  </button>
                </div>
              </div>

              {/*-------------------<ul className="images-preview">
                {
                  images.map((image, i) => (
                    <li
                      key={image}
                      className={currentImage === i + 1 ? 'selected' : ''}
                    >
                      <img
                        src={image}
                        alt=""
                        onClick={() => setCurrentImage(i + 1)}
                      />
                    </li>
                  ))
                }
              </ul>--------------------------- */}

            </div>
          </div>
        </section>

        <section className='contact' id='contact'>
          <span className='span1'>.</span>
          <span className='span2'>.</span>
          <div className='contact-container'>
            <h3>{changeLanguage ? "Contact" : "Contacto"}</h3>
            <form action="https://formsubmit.co/be424ab82a522da618b6569779be4ab0 " method="post">
              <input type="text" placeholder={changeLanguage ? "NAME" : "NOMBRE"} name="name" required />
              <input type="email" placeholder={changeLanguage ? "EMAIL" : "CORREO"} name="email" required />

              <input type="text" placeholder={changeLanguage ? "WRITE HERE" : "ESCRIBE AQUÍ"} id="mensaje-mail" name="message" required />
              <br />
              <button type='submit' className='send-btn'>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                {changeLanguage ? "SEND" : "ENVIAR"}
              </button>
            </form>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App