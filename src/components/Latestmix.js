import image1 from "../Images/image 1.png";
import image2 from "../Images/image 2.png";
import image3 from "../Images/image 3.png";
import image4 from "../Images/image 4.png";

const Latestmix = () => {
  return (
    <div className="latestContainer" id="latestmix">
      <div className="latest">
        <span className="latestTitle">
          <h1>Latest Mix</h1>
        </span>
        <div className="images">
          <img src={image1} alt="" />
          <img src={image2} alt="" />
          <img src={image3} alt="" />
          <img src={image4} alt="" />
        </div>
        <div className="latestBtn">
          <button>View All</button>
        </div>
      </div>
    </div>
  );
};

export default Latestmix;
