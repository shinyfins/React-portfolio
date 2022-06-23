import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export const Portfolio = () => {
  return (
    
    <Container>
      <div>
          <h1
           style={{display: 'flex', 
           justifyContent: 'center', 
           alignItems: 'center', 
            }}>
              Portfolio</h1>
          <h2 
          style={{display: 'flex',
          justifyContent: 'center',
          alignItems: 'center', 
          }}>
            Check out these recent projects I created / collaborated on!</h2>
     </div>

          <Container 
          style={{display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center', 
           }}>
          <Row style={{ justifyContent: "center", paddingBottom: "10px", paddingTop: "10px", }}>

          <Col md={4}>
          <a href="https://defhook.github.io/dinero/" target="_blank">
          <img src={require('../assets/Dinero.png')}
        style={{
            display: 'flex',
            width: '80%',
            borderRadius: '40px',
            justifyContent: 'left', 
            alignItems: 'center', 
            border: '20px solid #fff',
        }}></img>
        <p
        style={{display: 'flex', 
        justifyContent: 'left', 
        alignItems: 'center',
        padding: '10px', 
         }}> 
         My pride and joy the real time money converter Dinero!</p>
        </a>

          </Col>
          <Col md={4}>
          <a href="https://shinyfins.github.io/Code-Quiz-W4/" target="_blank">
          <img src={require('../assets/code-q.png')}
        style={{
            display: 'flex',
            width: '80%',
            borderRadius: '40px',
            justifyContent: 'left', 
            alignItems: 'center', 
            border: '20px solid #fff',
        }}></img>
         <p
        style={{display: 'flex', 
        justifyContent: 'left', 
        alignItems: 'center',
        padding: '10px', 
         }}> 
         The code quiz!</p>
        </a>

          </Col>
          <Col md={4}>
          <a href="https://boiling-fjord-00515.herokuapp.com/" target="_blank">
          <img src={require('../assets/food-truck.png')}
        style={{
            display: 'flex',
            width: '80%',
            borderRadius: '40px',
            justifyContent: 'left', 
            alignItems: 'center', 
            border: '20px solid #fff',
        }}></img>
         <p
        style={{display: 'flex', 
        justifyContent: 'left', 
        alignItems: 'center',
        padding: '10px', 
         }}> 
         Food truck..</p>
        </a>

          </Col>
            </Row>
            

            <Row style={{ justifyContent: "center", paddingBottom: "10px", paddingTop: "10px", }} >
            <Col md={4}>
              <a href="https://shinyfins.github.io/Weather-API/" target="_blank">
          <img src={require('../assets/WEATHER.png')}
        style={{
            display: 'flex',
            width: '80%',
            borderRadius: '40px',
            justifyContent: 'left', 
            alignItems: 'center', 
            border: '20px solid #fff',
        }}></img>
         <p
        style={{display: 'flex', 
        justifyContent: 'left', 
        alignItems: 'center',
        padding: '10px', 
         }}> 
         WEATHER.</p>
        </a>

          </Col>
          <Col md={4}>
          <a href="https://shinyfins.github.io/Calender-W5/" target="_blank">
          <img src={require('../assets/calender.png')}
        style={{
            display: 'flex',
            width: '80%',
            borderRadius: '40px',
            justifyContent: 'left', 
            alignItems: 'center', 
            border: '20px solid #fff',
        }}></img>
         <p
        style={{display: 'flex', 
        justifyContent: 'left', 
        alignItems: 'center',
        padding: '10px', 
         }}> 
         Calender!</p>
        </a>

          </Col>
          <Col md={4}>
          <a href="https://shinyfins.github.io/Code-Generator/" target="_blank">
          <img src={require('../assets/codes.png')}
        style={{
            display: 'flex',
            width: '80%',
            borderRadius: '40px',
            justifyContent: 'left', 
            alignItems: 'center', 
            border: '20px solid #fff',
        }}></img>
         <p
        style={{display: 'flex', 
        justifyContent: 'left', 
        alignItems: 'center',
        padding: '10px', 
         }}> 
         Get those pesky hacker with this code generator!</p>
        </a>

          </Col>
            </Row>
            </Container>
    </Container>
  )
}

export default Portfolio