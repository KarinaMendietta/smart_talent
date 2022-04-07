import React, { Component } from "react";
import ParticlesBg from "particles-bg";
import Fade from "react-reveal";


class Finalizo extends Component {
  render() {
    if (!this.props.data) return null;

    
  
    const finalizo1 = this.props.data.finalizo1;
    const finalizo2 = this.props.data.finalizo2;


    return (
      <header id="finalizo" >
       <ParticlesBg type="circle" bg={true} ></ParticlesBg>
       
        

        <div className="row banner ">
          <div className="banner-text">
            <Fade bottom>
            <p className="finalizo1">{finalizo1}</p>
              <p className="finalizo2">{finalizo2}</p>
            </Fade>
           
            <hr />
            <Fade bottom duration={2000}>
              <ul className="social">
                <a href="{ Header }" className="button btn postula-btn">
                  <i className="fa fa-book"></i>Cerrar
                </a>
             
              </ul>
            </Fade>
          </div>
        </div>

        
      </header>
    );
  }
}

export default Finalizo;