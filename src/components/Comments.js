import Ellipse1 from "../Images/Ellipse 1.png";
import Ellipse2 from "../Images/Ellipse 2.png";
import Ellipse3 from "../Images/Ellipse 3.png";

const Comments = () => {
  return (
    <div className="commentsContainer" id="comments">
      <div className="comments">
        <div className="commentsTitle">
          <h1>Comments</h1>
        </div>
        <div className="commentsRow">
          <div className="col">
            <img src={Ellipse1} alt="Ellipse1" />
            <p>
              "Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloribus possimus repudiandae magni laborum natus accusamus autem
              nesciunt laboriosam!"
            </p>
            <h3>John Doe</h3>
          </div>
          <div className="col">
            <img src={Ellipse2} alt="Ellipse2" />
            <p>
              "Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloribus possimus repudiandae magni laborum natus accusamus autem
              nesciunt laboriosam!"
            </p>
            <h3>Jane Doe</h3>
          </div>
          <div className="col">
            <img src={Ellipse3} alt="Ellipse3" />
            <p>
              "Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloribus possimus repudiandae magni laborum natus accusamus autem
              nesciunt laboriosam!"
            </p>
            <h3>James Doe</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comments;
