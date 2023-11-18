import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import phone from "../assets/img/phone.png";
import mail from "../assets/img/mail.png";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          
          <Col size={12} sm={6}>
            <span>Tadiwos</span>
            <p>
              <span>
                <img style={{ width: "18px" }} src={mail} alt="mail" />
              </span>
              tadiwosanegagregn@gmail.com
            </p>
            <p>
              <span>
                <img style={{ width: "18px" }} src={phone} alt="phone" />
              </span>
              +251936234742
            </p>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
          <div className="social-icon">
                <a href="https://www.linkedin.com/in/tadiwos-anegagergn-951b25256/">
                  <img src={navIcon1} alt="" />
                </a>
                <a href="https://github.com/Tadi-san">
                  <img src={navIcon2} alt="" />
                </a>
                <a href="https://www.instagram.com/tadiosane/">
                  <img src={navIcon3} alt="" />
                </a>
              </div>
            <p>Copyright 2023. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
