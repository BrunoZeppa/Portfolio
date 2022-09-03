import './App.css'
import { HTMLImg, CSSImg, ReactImg, JSImg, NodeImg, MaterialUImg, ReduxImg, bootstrapImg, MySQLImg, ECommerceImg, RickMortyImg, CRUDImg, PokedexImg, TrainifyImg, SpainFlag, UKFlag, ComingSoonEspImg, Rocket, ComingSoonEngImg, ProfilePhoto2 } from "./images";
import { useState } from 'react';
import { BrunoZeppaEngCv, BrunoZeppaEspCv } from "./documents";
import { useRef } from 'react';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';







function App() {

  const [lightMode, setLightMode] = useState(false)
  const [currentImage, setCurrentImage] = useState(1);
  const [info, setInfo] = useState("react")
  const [changeLanguage, setChangeLanguage] = useState(false)

  const percent = 100 / 4;

  const listStyles = {
    width: `${100 * 4}%`,
    transform: `translateX(-${(currentImage - 1) * percent}%)`,
    background: lightMode ? "radial-gradient(circle at center, cyan, #fff)" : " "
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

  const themeToggler = () => {
    if (lightMode == false) {
      return true
    } else if (lightMode == true) {
      return false
    }
  }


  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_cqr6mca', 'template_o2p9zfs', form.current, 'kEyUcrFm61DdnxY1n')
    e.target.reset()
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: changeLanguage ? 'Your message has been delivered' : 'tu mensaje ha sido entregado',
      showConfirmButton: false,
      timer: 1700
    })
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };





  return (
    <div className="App">
      <nav style={{ backgroundColor: lightMode ? "#222222" : "", color: lightMode ? "white" : "" }}>
        <ul>
          <li><a href="#home"><i className="fa-solid fa-house"></i> <strong className='nav-text-desktop'>{changeLanguage ? "Home" : "Inicio"}</strong></a></li>
          <li><a href="#aboutMe"><i className="fa-solid fa-folder-open"></i> <strong className='nav-text-desktop'>{changeLanguage ? "About me" : "Acerca de mi"}</strong></a></li>
          <li><a href="#skills"><i className="fa-solid fa-wrench"></i> <strong className='nav-text-desktop'>{changeLanguage ? "Skills" : "Habilidades"}</strong></a></li>
          <li><a href="#portfolio"><i className="fa-solid fa-briefcase"></i> <strong className='nav-text-desktop'>{changeLanguage ? "Portfolio" : "Portafolio"}</strong></a></li>
          <li><a href="#contact"><i className="fa-solid fa-address-book"></i> <strong className='nav-text-desktop'>{changeLanguage ? "Contact" : "Contacto"}</strong></a></li>
        </ul>
      </nav>
      <main>


        <header id="home" style={{ backgroundImage: lightMode ? "unset" : "", backgroundColor: lightMode ? "#fff" : "#222222" }}>
          <div className='setings-container'>
            <button onClick={() => setLightMode(themeToggler)} style={{ backgroundColor: lightMode ? "" : "#222222", color: lightMode ? "" : "white" }}>{lightMode ? <i className="fa-solid fa-moon"></i> : <i className="fa-solid fa-sun"></i>}</button>
            <div className='language-container'>
              <img src={SpainFlag} alt="" onClick={() => setChangeLanguage(false)} />
              <img src={UKFlag} alt="" onClick={() => setChangeLanguage(true)} />
            </div>
          </div>
          <div className='banner-container-info'>
            <div className='circle-photo' style={{ backgroundImage: lightMode ? `url( ${ProfilePhoto2} )` : "" }}></div>
            <div>
              <h1 style={{ color: lightMode ? "#222222" : "" }}>BRUNO ZEPPA</h1>
              <h2 style={{ color: lightMode ? "#222222" : "" }}>FULL STACK DEV JR.</h2>
            </div>
          </div>
          <a className='cv-button' href={changeCv()} download={changeCvTitle()}>
            <p>{changeLanguage ? "download my Cv" : "descarga mi CV"}</p>
            <img src={Rocket} className="rocket" alt="" />
          </a>
          <span className='span1' style={{ color: lightMode ? "#fff" : "#222222", background: lightMode ? " media screen and (min-width: 599px){ linear-gradient(90deg, #9fa0a5 , #f2f2f2) }" : "" }}>.</span>
          <span className='span2' style={{ color: lightMode ? "#fff" : "#222222", background: lightMode ? "lmedia screen and (min-width: 599px){ linear-gradient(90deg, #9fa0a5 , #f2f2f2) }" : "" }}>.</span>
        </header>


        <div className='skills-about-wrap'>

          <section className='about-me' id='aboutMe' style={{ backgroundImage: lightMode ? "unset" : "", backgroundColor: lightMode ? "#fff" : "#222222" }}>
            <div className='about-me-container'>
              <h3 style={{ color: lightMode ? "Black" : "" }}>{changeLanguage ? "About Me" : "Acerca de Mi"}</h3>
              <p style={{ color: lightMode ? "#222222" : "" }}>
                {changeLanguage ? "I am passionate about developing, creating and innovating and everything related to technology. I am a cheerful and ambitious man of continuous learning. I enjoy solving problems and working in team." : "Me apasiona desarrollar, crear e innovar y todo lo relacionado con la tecnología. Soy un hombre alegre y ambicioso de continuo aprendizaje. Disfruto resolviendo problemas y trabajando en equipo."}
              </p>
              <div className='slmd'>
                <a href="https://github.com/BrunoZeppa"><b style={{ color: lightMode ? "#222222" : "" }}><i className="fa-brands fa-github"></i></b></a>
                <a href="https://www.linkedin.com/in/brunozeppa/"><b style={{ color: lightMode ? "#222222" : "" }}><i className="fa-brands fa-linkedin"></i></b></a>
              </div>
            </div>
            <span className='span5' style={{ color: lightMode ? "#fff" : "#222222", background: lightMode ? "linear-gradient(90deg, #f2f2f2, #9fa0a5 )" : "" }}>.</span>
            <span className='span6' style={{ color: lightMode ? "#fff" : "#222222", background: lightMode ? "linear-gradient(90deg, #f2f2f2, #9fa0a5 )" : "" }}>.</span>
          </section>

          <section className='skills' id='skills' style={{ backgroundImage: lightMode ? "unset" : "", backgroundColor: lightMode ? "#fff" : "#222222" }}>
            <div className='skills-container'>
              <h3 style={{ color: lightMode ? "Black" : "" }}>{changeLanguage ? "Skills" : "Habilidades"}</h3>
              <div className='technologies-wrap'>
                <div>
                  <img src={HTMLImg} style={{ borderLeft: "#e44d26 7px solid", paddingLeft: "10px" }} alt="" />
                  <h6 style={{ color: lightMode ? "#222222" : "" }}>HTML</h6>
                </div>
                <div>
                  <img src={CSSImg} style={{ borderLeft: "#2062af 7px solid", paddingLeft: "10px" }} alt="" />
                  <h6 style={{ color: lightMode ? "#222222" : "" }}>CSS</h6>
                </div>
                <div>
                  <img src={JSImg} style={{ borderLeft: "#ffd600 7px solid", paddingLeft: "10px" }} alt="" />
                  <h6 style={{ color: lightMode ? "#222222" : "" }}>JavaScript</h6>
                </div>
                <div>
                  <img src={ReactImg} style={{ borderLeft: "#00d8ff 7px solid", paddingLeft: "10px" }} alt="" />
                  <h6 style={{ color: lightMode ? "#222222" : "" }}>React.js</h6>
                </div>
                <div>
                  <img src={ReduxImg} style={{ borderLeft: "#7e57c2 7px solid", paddingLeft: "10px" }} alt="" />
                  <h6 style={{ color: lightMode ? "#222222" : "" }}>Redux</h6>
                </div>
                <div>
                  <img src={bootstrapImg} style={{ borderLeft: "#653ab3 7px solid", paddingLeft: "10px" }} alt="" />
                  <h6 style={{ color: lightMode ? "#222222" : "" }}>Boostrap</h6>
                </div>
                <div>
                  <img src={NodeImg} style={{ borderLeft: "#8cc84b 7px solid", paddingLeft: "10px" }} alt="" />
                  <h6 style={{ color: lightMode ? "#222222" : "" }}>Node.js</h6>
                </div>
                <div>
                  <img src={MaterialUImg} style={{ borderLeft: "#29b6f6 7px solid", paddingLeft: "10px" }} alt="" />
                  <h6 style={{ color: lightMode ? "#222222" : "" }}>Material UI</h6>
                </div>
                <div>
                  <img src={MySQLImg} style={{ borderLeft: "#00668d 7px solid", paddingLeft: "10px" }} alt="" />
                  <h6 style={{ color: lightMode ? "#222222" : "" }}>My SQL</h6>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/*---------------------------------------------- */}

        <section className='portfolio' id='portfolio' style={{ backgroundImage: lightMode ? "unset" : "", backgroundColor: lightMode ? "#fff" : "#222222" }}>
          <span className='span3' style={{ color: lightMode ? "#fff" : "#222222", background: lightMode ? "linear-gradient(90deg, #f2f2f2, #9fa0a5 )" : "" }}>.</span>
          <span className='span4' style={{ color: lightMode ? "#fff" : "#222222", background: lightMode ? "linear-gradient(90deg, #f2f2f2, #9fa0a5 )" : "" }}>.</span>
          <div className='portfolio-main-container'>
            <h3 style={{ color: lightMode ? "Black" : "" }}>{changeLanguage ? "Portfolio" : "Portafolio"}</h3>
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

        <section className='contact' id='contact' style={{ backgroundImage: lightMode ? "unset" : "", backgroundColor: lightMode ? "" : "#222222" }}>
          <span className='span1' style={{ color: lightMode ? "#fff" : "#222222", background: lightMode ? "linear-gradient(90deg, #9fa0a5 , #f2f2f2)" : "" }}>.</span>
          <span className='span2' style={{ color: lightMode ? "#fff" : "#222222", background: lightMode ? "linear-gradient(90deg, #9fa0a5 , #f2f2f2)" : "" }}>.</span>
          <div className='contact-container'>
            <h3 style={{ color: lightMode ? "#222222" : "" }}>{changeLanguage ? "Contact" : "Contacto"}</h3>
            <form ref={form} onSubmit={sendEmail}>
              <input type="text" placeholder={changeLanguage ? "NAME" : "NOMBRE"} style={{ backgroundColor: lightMode ? "#222222" : "", color: lightMode ? "white" : "" }} name="name" required />
              <input type="email" placeholder={changeLanguage ? "EMAIL" : "CORREO"} style={{ backgroundColor: lightMode ? "#222222" : "", color: lightMode ? "#fff" : "" }} name="email" required />

              <input type="text" placeholder={changeLanguage ? "WRITE HERE" : "ESCRIBE AQUÍ"} id="mensaje-mail" style={{ backgroundColor: lightMode ? "#222222" : "", color: lightMode ? "#fff" : "" }} name="message" required />
              <br />
              <button type='submit' className='send-btn' style={{ backgroundColor: lightMode ? "#222222" : "", color: lightMode ? "#fff" : "" }}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                {changeLanguage ? "SEND" : "ENVIAR"}
              </button>
            </form>
          </div>
        </section>
      </main >
    </div >
  )
}

export default App
