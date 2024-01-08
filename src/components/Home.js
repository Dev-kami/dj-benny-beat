import klipartz from "../Images/klipartz 1.png";
import mainImage2 from "../Images/main image 2.png";

const Home = () => {
  return (
    <div className="home" id="home">
      {/* --------- Left ------- */}
      <div className="row">
        <div className="col1">
          <h1>
            We Provide <br /> Latest Musics
          </h1>
          <p>
            A destination for music fans to <br /> discover new{" "}
            <strong> Music</strong>
          </p>

          <form>
            <div className="form-group">
              <input
                className="homeInput"
                placeholder="Your Email"
                type="text"
              />
              <button className="homeBtn">Subscribe</button>
            </div>
          </form>
        </div>
        <div className="col2">
          <img className="klipartzImg" src={klipartz} alt="klipartz" />
          <img className="homeImage2" src={mainImage2} alt="audiomack" />
        </div>
      </div>
      {/* --------- Right ------- */}
    </div>
  );
};

export default Home;
