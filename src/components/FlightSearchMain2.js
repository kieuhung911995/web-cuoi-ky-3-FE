import "../styles/FlightSearchMain2.css";
import img1 from "../images/FlightSearchMain21.png";
import img2 from "../images/FlightSearchMain22.png";
import img3 from "../images/FlightSearchMain23.png";
import img4 from "../images/FlightSearchMain24.png";

const FlightSearchMain2 = () => {
  const data = {
    img: [img1, img2, img3, img4],
    location: "Backpacking Sri Lanka",
    description:
      "Traveling is a unique experience as it's the best way to unplug from the pushes and pulls of daily life. It helps us to forget about our problems, frustrations, and fears at home. During our journey, we experience life in different ways. We explore new places, cultures, cuisines, traditions, and ways of living.",
    price: "$700",
  };

  return (
    <>
      {
        <div className="FlightSearchMain2">
          <div className="text-main2">
            <div className="text-main2-head">
              <h1 className="text-main2-head-title">Backpacking Sri Lanka</h1>
              <div className="text-main2-head-price">
                <p
                  style={{
                    fontSize: "12px",
                    color: "gray",
                    marginBottom: "4px",
                  }}
                >
                  From
                </p>
                <h3>$700</h3>
              </div>
            </div>
            <p className="text-main2-body">
              Traveling is a unique experience as it's the best way to unplug
              from the pushes and pulls of daily life. It helps us to forget
              about our problems, frustrations, and fears at home. During our
              journey, we experience life in different ways. We explore new
              places, cultures, cuisines, traditions, and ways of living.
            </p>
            <div className="text-main2-foot">Book Flight</div>
          </div>
          <div className="img-main2">
            <img src={data.img[0]} alt="img"></img>
            <img src={data.img[1]} alt="img"></img>
            <img src={data.img[2]} alt="img"></img>
            <img src={data.img[3]} alt="img"></img>
          </div>
        </div>
      }
    </>
  );
};
export default FlightSearchMain2;
