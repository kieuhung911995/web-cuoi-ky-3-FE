import "../styles/HistoryStay.css";
import logo from "../images/emirates.png";

const HistoryStay = () => {
  const datas = [
    {
      logo: logo,
      time1: "Thur, Dec 8",
      time2: "Fri, Dec 9",
      checkIn: "12:00pm",
      roomNo: "On arrival",
      checkOut: "11:30am",
    },
    {
      logo: logo,
      time1: "Thur, Dec 8",
      time2: "Fri, Dec 9",
      checkIn: "12:00pm",
      roomNo: "On arrival",
      checkOut: "11:30am",
    },
    {
      logo: logo,
      time1: "Thur, Dec 8",
      time2: "Fri, Dec 9",
      checkIn: "12:00pm",
      roomNo: "On arrival",
      checkOut: "11:30am",
    },
  ];
  return (
    <div className="HistoryStay">
      {datas.map((data, index) => (
        <div className="HistoryStay-item" key={index}>
          <div className="HistoryStay-item-detail">
            <img
              src={data.logo}
              alt="logo"
              className="HistoryStay-item-detail-logo"
            ></img>
            <div className="HistoryStay-item-detail-time">
              <div>
                <div style={{ color: "gray" }}>Check-In</div>
                <h3 style={{ marginTop: "6px", marginBottom: "0" }}>
                  {data.time1}
                </h3>
              </div>
              <svg
                width="20"
                height="3"
                viewBox="0 0 20 3"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M20 2.26H0V0.62H20V2.26Z" fill="#112211" />
              </svg>
              <div>
                <div style={{ color: "gray" }}>Check Out</div>
                <h3 style={{ marginTop: "6px", marginBottom: "0" }}>
                  {data.time2}
                </h3>
              </div>
            </div>
            <div className="HistoryStay-item-detail-line"></div>
            <div className="HistoryStay-item-detail-room">
              <div className="detail-room">
                <svg
                  width="32"
                  height="33"
                  viewBox="0 0 32 33"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect y="0.5" width="32" height="32" rx="4" fill="#EBF6F2" />
                  <path
                    d="M16 8.75C11.4439 8.75 7.75 12.4439 7.75 17C7.75 21.5561 11.4439 25.25 16 25.25C20.5561 25.25 24.25 21.5561 24.25 17C24.25 12.4439 20.5561 8.75 16 8.75ZM19.8077 18.2692H16C15.8317 18.2692 15.6703 18.2024 15.5513 18.0834C15.4322 17.9643 15.3654 17.8029 15.3654 17.6346V11.9231C15.3654 11.7548 15.4322 11.5933 15.5513 11.4743C15.6703 11.3553 15.8317 11.2885 16 11.2885C16.1683 11.2885 16.3297 11.3553 16.4487 11.4743C16.5678 11.5933 16.6346 11.7548 16.6346 11.9231V17H19.8077C19.976 17 20.1374 17.0669 20.2564 17.1859C20.3754 17.3049 20.4423 17.4663 20.4423 17.6346C20.4423 17.8029 20.3754 17.9643 20.2564 18.0834C20.1374 18.2024 19.976 18.2692 19.8077 18.2692Z"
                    fill="#8DD3BB"
                  />
                </svg>
                <div>
                  <div style={{ color: "gray" }}>Check-In time</div>
                  <h4 style={{ margin: "0" }}>{data.checkIn}</h4>
                </div>
              </div>
              <div className="detail-room">
                <svg
                  width="32"
                  height="33"
                  viewBox="0 0 32 33"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect y="0.5" width="32" height="32" rx="4" fill="#EBF6F2" />
                  <path
                    d="M16 8.75C11.4439 8.75 7.75 12.4439 7.75 17C7.75 21.5561 11.4439 25.25 16 25.25C20.5561 25.25 24.25 21.5561 24.25 17C24.25 12.4439 20.5561 8.75 16 8.75ZM19.8077 18.2692H16C15.8317 18.2692 15.6703 18.2024 15.5513 18.0834C15.4322 17.9643 15.3654 17.8029 15.3654 17.6346V11.9231C15.3654 11.7548 15.4322 11.5933 15.5513 11.4743C15.6703 11.3553 15.8317 11.2885 16 11.2885C16.1683 11.2885 16.3297 11.3553 16.4487 11.4743C16.5678 11.5933 16.6346 11.7548 16.6346 11.9231V17H19.8077C19.976 17 20.1374 17.0669 20.2564 17.1859C20.3754 17.3049 20.4423 17.4663 20.4423 17.6346C20.4423 17.8029 20.3754 17.9643 20.2564 18.0834C20.1374 18.2024 19.976 18.2692 19.8077 18.2692Z"
                    fill="#8DD3BB"
                  />
                </svg>
                <div>
                  <div style={{ color: "gray" }}>Check-In out</div>
                  <h4 style={{ margin: "0" }}>{data.checkOut}</h4>
                </div>
              </div>
              <div className="detail-room">
                <svg
                  width="32"
                  height="33"
                  viewBox="0 0 32 33"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect y="0.5" width="32" height="32" rx="4" fill="#EBF6F2" />
                  <path
                    d="M20.5222 8.75C20.8302 8.75 21.1255 8.87233 21.3433 9.09008C21.561 9.30783 21.6833 9.60317 21.6833 9.91111V25.0056H23.425C23.579 25.0056 23.7266 25.0667 23.8355 25.1756C23.9444 25.2845 24.0056 25.4321 24.0056 25.5861C24.0056 25.7401 23.9444 25.8878 23.8355 25.9966C23.7266 26.1055 23.579 26.1667 23.425 26.1667H8.33056C8.17658 26.1667 8.02892 26.1055 7.92004 25.9966C7.81117 25.8878 7.75 25.7401 7.75 25.5861C7.75 25.4321 7.81117 25.2845 7.92004 25.1756C8.02892 25.0667 8.17658 25.0056 8.33056 25.0056H10.0722V9.91111C10.0722 9.60317 10.1946 9.30783 10.4123 9.09008C10.6301 8.87233 10.9254 8.75 11.2333 8.75H20.5222ZM18.2 19.2C18.5079 19.2 18.8033 19.0777 19.021 18.8599C19.2388 18.6422 19.3611 18.3468 19.3611 18.0389C19.3611 17.7309 19.2388 17.4356 19.021 17.2179C18.8033 17.0001 18.5079 16.8778 18.2 16.8778C17.8921 16.8778 17.5967 17.0001 17.379 17.2179C17.1612 17.4356 17.0389 17.7309 17.0389 18.0389C17.0389 18.3468 17.1612 18.6422 17.379 18.8599C17.5967 19.0777 17.8921 19.2 18.2 19.2Z"
                    fill="#8DD3BB"
                  />
                </svg>
                <div>
                  <div style={{ color: "gray" }}>Room no.</div>
                  <h4 style={{ margin: "0" }}>{data.roomNo}</h4>
                </div>
              </div>
            </div>
          </div>
          <div className="HistoryStay-item-button">
            <div className="button-download">
              <>Download Ticket</>
            </div>
            <div className="button-next">
              <svg
                width="7"
                height="12"
                viewBox="0 0 7 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1.5L5.5 6L1 10.5"
                  stroke="#4C4850"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default HistoryStay;
