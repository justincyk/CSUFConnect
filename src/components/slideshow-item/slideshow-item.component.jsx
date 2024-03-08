const SlideshowItem = ({ imageUrl, index }) => {
  return (
    <div
      className="each-slide-effect"
      style={{
        width: "90%",
        height: "600px",
        border: "1px solid #ccc",
        overflow: "hidden",
        margin: "0 auto",
      }}
    >
      <div
        style={{
          backgroundImage: `url(${imageUrl})`,
          height: "100%",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          width: "100%",
        }}
      >
        <span>{"CSUF"}</span>
      </div>
    </div>
  );
};

export default SlideshowItem;
