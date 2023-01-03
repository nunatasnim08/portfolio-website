import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer class="footer">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-12 col-sm-6">
        </div>
        <div class="col-12 col-sm-6 text-center text-sm-end">
          <div class="footer-icons">
            <div class="social-iicon">
            <a href="tel:01765839394"><img src={navIcon2} alt="telIcon" /></a>
                <a href="https://github.com/nunatasnim08"><img src={navIcon1} alt="gitIcon" /></a>
                <a href="mailto:nunatasnim@gmail.com?subject = Feedback&body = Message"><img src={navIcon3} alt="mailIcon" /></a>
            </div>
          </div>
          <p>Copyright 2022. All Rights Reserved</p>
        </div>
      </div>
    </div>
  </footer>
  )
}