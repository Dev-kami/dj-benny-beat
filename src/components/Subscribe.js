const Subscribe = () => {
  return (
    <div className="subscribeContainer">
      <div className="subscribe">
        <div className="subscribeText">
          <h2>Sign Up To Newsletter</h2>
          <p>Subscribe to receive info on our latest news and episodes</p>
        </div>
        <div className="subscribeFormGroup">
          <input
            className="subscribeInput"
            placeholder="Your Email"
            type="text"
          />
          <button className="subscribeBtn">Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
