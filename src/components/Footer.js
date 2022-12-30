import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
          </Col> 
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-iicon">
            <a href="tel:01765839394"><img src={navIcon2} alt="telIcon" /></a>
                <a href="https://github.com/nunatasnim08"><img src={navIcon1} alt="gitIcon" /></a>
                <a href="mailto:nunatasnim@gmail.com?subject = Feedback&body = Message"><img src={navIcon3} alt="mailIcon" /></a>
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}