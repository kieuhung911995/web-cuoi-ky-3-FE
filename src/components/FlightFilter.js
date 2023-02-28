import "../styles/FlightFilter.css";

import { Slider, Checkbox } from "antd";

const FlightFilter = () => {
  const marksPrice = {
    50: "$50",
    1200: "$1200",
  };
  const marksDeparture = {
    0: "0h",
    24: "24h",
  };
  const onChange = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };
  return (
    <div className="FlightFilter">
      <h1>Filters</h1>
      <div>
        <h4>Price</h4>
        <Slider marks={marksPrice} defaultValue={37} min={50} max={1200} />
        <div className="line"></div>
      </div>
      <div>
        <h4>Departure Time</h4>
        <Slider marks={marksDeparture} defaultValue={37} min={0} max={24} />
        <div className="line"></div>
      </div>
      <div>
        <h4>Rating</h4>
        <div className="rating-block">
          <div className="rating-block-item">
            <>0+</>
          </div>
          <div className="rating-block-item">
            <>1+</>
          </div>
          <div className="rating-block-item">
            <>2+</>
          </div>
          <div className="rating-block-item">
            <>3+</>
          </div>
          <div className="rating-block-item">
            <>4+</>
          </div>
        </div>
        <div className="line"></div>
      </div>
      <div>
        <h4>Airlines</h4>
        <div className="checkbox-container">
          <div className="checkbox-item">
            <Checkbox onChange={onChange}>Emirated</Checkbox>
          </div>
          <div className="checkbox-item">
            <Checkbox onChange={onChange}>Fly Dubai</Checkbox>
          </div>
          <div className="checkbox-item">
            <Checkbox onChange={onChange}>Qatar</Checkbox>
          </div>
          <div className="checkbox-item">
            <Checkbox onChange={onChange}>Etihad</Checkbox>
          </div>
        </div>
        <div className="line"></div>
      </div>
      <div>
        <h4>Trips</h4>
        <div className="checkbox-container">
          <div className="checkbox-item">
            <Checkbox onChange={onChange}>Round trip</Checkbox>
          </div>
          <div className="checkbox-item">
            <Checkbox onChange={onChange}>On Way</Checkbox>
          </div>
          <div className="checkbox-item">
            <Checkbox onChange={onChange}>Multi-City</Checkbox>
          </div>
          <div className="checkbox-item">
            <Checkbox onChange={onChange}>My Dates Are Flexible</Checkbox>
          </div>
        </div>
        <div className="line"></div>
      </div>
    </div>
  );
};
export default FlightFilter;
