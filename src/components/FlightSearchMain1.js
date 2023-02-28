import "../styles/FlightSearchMain1.css";
import img1 from "../images/FlightSearchMain11.png";
import img2 from "../images/FlightSearchMain12.png";
import img3 from "../images/FlightSearchMain13.png";
import img4 from "../images/FlightSearchMain14.png";

const FlightSearchMain1 = () => {
  const datas = [
    {
      img: `${img1}`,
      loacation: "Melbourne",
      description: "An amazing journey",
      price: "$ 700",
    },
    {
      img: `${img2}`,
      loacation: "Paris",
      description: "A Paris Adventure",
      price: "$ 600",
    },
    {
      img: `${img3}`,
      loacation: "London",
      description: "London eye adventure",
      price: "$ 350",
    },
    {
      img: `${img4}`,
      loacation: "Columbia",
      description: "Amazing streets",
      price: "$ 700",
    },
  ];
  return (
    <div className="FlightSearchMain1">
      {datas.map((data, index) => (
        <div key={index} className="FlightSearchMain1-component">
          <img src={data.img} alt="img" className="img-main1"></img>
          <div className="position-main1">
            <div className="text-main1">
              <div>
                <h2>{data.loacation}</h2>
                <p>{data.description}</p>
              </div>
              <div className="price-main1">
                <h2>{data.price}</h2>
              </div>
            </div>
            <div className="book-flight">
              <div>Book Flight</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default FlightSearchMain1;
