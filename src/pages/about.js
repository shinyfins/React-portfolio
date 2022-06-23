import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';

export const About = () => {
  return (
    <Container>
           <Col md={4}>
        <img src={require('../assets/me.JPG')}
        style={{
            display: 'flex',
            width: '40%',
            borderRadius: '40px',
            float: 'left',
            border: '20px solid #fff',
        }}></img>
        </Col>
        <Col md={4}>
        <Row style={{ justifyContent: "center", paddingBottom: "10px", paddingTop: "10px", }}>
        <h1
        style={{display: 'flex', 
        height:'90vh',
        }}
        >I'm Marcos, I like lego, zoids, and One Piece<br></br>
        Hello born and raised in Phoenix, Arizona. Have always had a love for technology and videogames! I realized why not take that passion and put it to good use.</h1>
        
        </Row>
        </Col>
    </Container>
  )
}

export default About