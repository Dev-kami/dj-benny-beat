import logo from "../Images/logo1.png";

const Navbar = () => {
  return (
    <div className="navBarContainer">
      <div className="navBar">
        <div className="logo">
          <a href="/">
            <img className="navLogo" src={logo} alt="Logo" />
          </a>
        </div>
        <ul className="navLinks">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#latestmix">Latest</a>
          </li>
          <li>
            <a href="#comments">Testimonials</a>
          </li>
        </ul>
        <div className="navBtn">
          <button>Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
