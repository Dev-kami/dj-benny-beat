import footerLogo from "../Images/footer-logo.png";
import facebook from "../Images/facebook-icon.png";
import instagram from "../Images/instagram-icon.png";
import twitter from "../Images/twitter-icon.png";
import whatsapp from "../Images/whatsapp-icon.png";

const Footer = () => {
  return (
    <div className="footer">
      <img src={footerLogo} alt="" />
      <h2 className="footerLogoText">Dj Benny</h2>
      <p>
        +2347043912400 <br /> Lagos, Nigeria
      </p>
      <div className="footerLinks">
        <a href="/">
          <img src={facebook} alt="facebook" />
        </a>
        <a href="/">
          <img src={instagram} alt="instagram" />
        </a>
        <a href="/">
          <img src={twitter} alt="twitter" />
        </a>
        <a href="/">
          <img src={whatsapp} alt="whatsapp" />
        </a>
      </div>
      <div className="footerCopyRight">
        <p>© copyright 2021 Dj Benny | All rights reserved</p>
      </div>
    </div>
  );
};

export default Footer;
