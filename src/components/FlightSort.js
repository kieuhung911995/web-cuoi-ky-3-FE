import "../styles/FlightSort.css";

const FlightSort = () => {
  return (
    <div className="FlightSort">
      <div className="FlightSort-item">
        <h4 className="h4">Cheapest</h4>
        <p style={{ color: "gray" }}>$99 . 2h 18m</p>
      </div>
      <div className="item-line"></div>
      <div className="FlightSort-item">
        <h4 className="h4">Best</h4>
        <p style={{ color: "gray" }}>$99 . 2h 18m</p>
      </div>
      <div className="item-line"></div>
      <div className="FlightSort-item">
        <h4 className="h4">Quickest</h4>
        <p style={{ color: "gray" }}>$99 . 2h 18m</p>
      </div>
      <div className="item-line"></div>
      <div className="FlightSort-item-menu">
        <svg
          width="18"
          height="12"
          viewBox="0 0 18 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.75 1.5H17.25M0.75 6H17.25M0.75 10.5H17.25"
            stroke="black"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
          />
        </svg>
        <p>Other sort</p>
      </div>
    </div>
  );
};
export default FlightSort;
