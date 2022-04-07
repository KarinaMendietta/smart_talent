
import React, { Component } from "react";
import Fade from "react-reveal";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';



class About extends Component {
  render() {
    if (!this.props.data) return null;

    
    const profilepic = "images/" + this.props.data.image;
    const bio = this.props.data.bio;
    
 
    

    return (
      <section id="about">
        <Fade duration={1000}>
          <div className="row">
            <div>
              <img
                className="profile-pic"
                src={profilepic}
                alt="Smart Talent"
              
              />
            </div>
            {/* quienes somos */}
           
          
           
              <h2>Quienes Somos</h2>

              <p className="">{bio}</p>
          </div>
              <h2>Desarrollado por:</h2>
              <br />

              <Box sx={{ flexGrow: 1 }}>
      <Grid container justifyContent="space-evenly" alignItems="center" >
        <Grid item >
        <img
                className="profile-github"
                src={"https://avatars.githubusercontent.com/u/97640041?v=4"}
                
                alt="Smart Talent"
              
              />
              <p >
                    <span>karina Mendietta</span>
                    <br />
                <a href={"https://github.com/KarinaMendietta"} >
                 <img className="github-btn" src="../images/GitHub-logo2.png"></img>
                </a>
                
              </p>
        </Grid>
        <Grid item >
        <img
                className="profile-github"
                src={"https://avatars.githubusercontent.com/u/98371849?v=4"}
                
                alt="Smart Talent"
              
              />
              <p >
                    <span>Victor Borjas</span>
                    <br />
                <a href={"https://github.com/vborjas"} >
                 <img className="github-btn" src="../images/GitHub-logo2.png"></img>
                </a>
                
              </p>
        </Grid>
        <Grid item >
        <img
                className="profile-github"
                src={"https://avatars.githubusercontent.com/u/83736953?v=4"}
                
                alt="Smart Talent"
              
              />
              <p >
                    <span>Karen Obispo</span>
                    <br />
                <a href={"https://github.com/sskaren1"} >
                 <img className="github-btn" src="../images/GitHub-logo2.png"></img>
                </a>
                
              </p>
        </Grid>
        <Grid item >
        <img
                className="profile-github"
                src={"https://avatars.githubusercontent.com/u/44207299?v=4"}
                
                alt="Smart Talent"
              
              />
              <p >
                    <span>Patricia Perez</span>
                    <br />
                <a href={"https://github.com/PatPetChav"} >
                 <img className="github-btn" src="../images/GitHub-logo2.png"></img>
                </a>
                
              </p>
        </Grid>
        <Grid item >
        <img
                className="profile-github"
                src={"https://avatars.githubusercontent.com/u/30963719?v=4"}
                
                alt="Smart Talent"
              
              />
              <p >
                    <span>Willy Patiño</span>
                    <br />
                <a href={"https://github.com/WillyPatino"} >
                 <img className="github-btn" src="../images/GitHub-logo2.png"></img>
                </a>
                
              </p>
        </Grid>
        <Grid item >
        <img
                className="profile-github"
                src={"https://avatars.githubusercontent.com/u/98372161?v=4"}
                
                alt="Smart Talent"
              
              />
              <p >
                    <span>Erick Milan</span>
                    <br />
                <a href={"https://github.com/milone1"} >
                 <img className="github-btn" src="../images/GitHub-logo2.png"></img>
                </a>
                
              </p>
        </Grid>
      </Grid>
    </Box>
    
              
          
             
           
  
      
      
    </Fade>
 
    </section>
   
    );
  }
}

export default About;