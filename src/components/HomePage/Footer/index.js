import React from "react";
import "../styles/FooterStyle.scss";

function Footer(props) {
  return (
    <div className="footer-wrapper">
      <div className="footer-content d-flex">
        <div>
          <div className="contact-wrapper">
            <div className="title">Need My Travel Help?</div>
            <div>Got Questions ? Call us 24/7! Call Us: (024) 2242 0777</div>
            <div className="font-weight-600">Contact Info</div>
            <div>Toà B1, Đại học Bách Khoa Hà Nội</div>
          </div>
          <div className="company-wrapper">
            <div className="title">Company</div>
            <div>About us</div>
            <div>Careers</div>
            <div>Terms of Use</div>
            <div>Privacy Statement</div>
            <div>Give Us Feedbacks</div>
          </div>
          <div className="other-service-wrapper">
            <div className="title">Other Services</div>
            <div>Investor Relations</div>
            <div>Rewards Program</div>
            <div>PointsPLUS</div>
            <div>Partners</div>
            <div>List My Hotel</div>
          </div>
          <div className="support-wrapper">
            <div className="title">Support</div>
            <div>Account</div>
            <div>Legal</div>
            <div>Legal</div>
            <div>Affiliate Program</div>
            <div>Privacy Policy</div>
          </div>
          <div className="mail-list">
            <div className="title">Mailing List</div>
            <div>
              Sign up for our mailing list to get latest updates and offers.{" "}
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5 mb-5">
        <hr />
      </div>
      <div className="d-flex justify-content-center mb-4"><p>&copy; 2023 YourTour.com by Pham Tuan Viet</p></div>
    </div>
  );
}
export default Footer;
