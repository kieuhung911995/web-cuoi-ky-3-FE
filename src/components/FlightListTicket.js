import { Checkbox, Spin, Pagination } from "antd";
import axios from "axios";
import dayjs from "dayjs";
import { useEffect, useState } from "react";

import "../styles/FlightListTicket.css";

import TicketDropdown from "../components/TicketDropdown";

const FlightListTicket = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [total, setTotal] = useState(0);
  const [datas, setDatas] = useState([]);
  const [limit, setLimit] = useState(4);
  const [skip, setSkip] = useState(0);
  const handleChangePage = (page, pageSize) => {
    setLimit(pageSize);
    setSkip((page - 1) * pageSize);
  };
  const onChange = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };
  useEffect(() => {
    const getDatas = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/flight/list?limit=${limit}&skip=${skip}`
        );
        setTotal(response.data[0].metadata[0].total);
        setDatas(response.data[0].data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    getDatas();
  }, [limit, skip]);

  if (isLoading) {
    <Spin tip="Loading" size="large">
      <div className="content" />
    </Spin>;
  }

  if (!isLoading) {
    return (
      <>
        <div className="header-flightList">
          <h4>Showing {total} of 89 places</h4>
          <div className="dropdown-flightList">
            <span style={{ marginRight: "5px" }}>Sort by</span>
            <TicketDropdown />
          </div>
        </div>
        <div className="FlightListTicket">
          {datas.map((data, index) => (
            <div key={index} className="ticketComponent">
              <img
                src={data.logo}
                alt="logo"
                className="ticketComponent-logo"
              ></img>
              <div className="ticket-detail">
                <div className="ticket-detail-header">
                  <div className="ticket-detail-header-left">
                    <span className="ticket-detail-header-rating">
                      <>{data.rating}</>
                    </span>
                    <span>{data.commend}</span>
                    <span>{data.review} reviews</span>
                  </div>
                  <div>
                    <div style={{ color: "gray" }}>starting from</div>
                    <div style={{ color: "#FF8682", fontSize: "24px" }}>
                      ${data.price}
                    </div>
                  </div>
                </div>
                <div className="ticket-detail-main">
                  <Checkbox onChange={onChange}></Checkbox>
                  <div>
                    <h3 style={{ margin: "0px 0px 5px" }}>
                      {dayjs(data.local_departure).format("hh:mm:ss")}
                    </h3>
                    <div style={{ color: "gray" }}>{data.flyFrom}</div>
                  </div>
                  <div style={{ margin: "0 40px" }}>{data.type}</div>
                  <div>
                    <h3 style={{ margin: "0px 0px 5px" }}>
                      {dayjs(data.local_arrival).format("hh:mm:ss")}
                    </h3>
                    <div style={{ color: "gray" }}>{data.flyTo}</div>
                  </div>
                </div>
                <div className="ticket-detail-main">
                  <Checkbox onChange={onChange}></Checkbox>
                  <div>
                    <h3 style={{ margin: "0px 0px 5px" }}>
                      {dayjs(data.local_departure).format("hh:mm:ss")}
                    </h3>
                    <div style={{ color: "gray" }}>{data.flyFrom}</div>
                  </div>
                  <div style={{ margin: "0 40px" }}>{data.type}</div>
                  <div>
                    <h3 style={{ margin: "0px 0px 5px" }}>
                      {dayjs(data.local_arrival).format("hh:mm:ss")}
                    </h3>
                    <div style={{ color: "gray" }}>{data.flyTo}</div>
                  </div>
                </div>
                <div className="ticket-detail-main-line"></div>
                <div className="ticket-detail-footer">
                  <div className="heart">
                    <svg
                      width="18"
                      height="16"
                      viewBox="0 0 18 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12.7863 1.125C10.2504 1.125 9.0004 3.625 9.0004 3.625C9.0004 3.625 7.7504 1.125 5.21446 1.125C3.15352 1.125 1.52149 2.84922 1.5004 4.90664C1.45743 9.17734 4.88829 12.2145 8.64884 14.7668C8.75251 14.8373 8.87501 14.8751 9.0004 14.8751C9.12579 14.8751 9.24829 14.8373 9.35196 14.7668C13.1121 12.2145 16.543 9.17734 16.5004 4.90664C16.4793 2.84922 14.8473 1.125 12.7863 1.125V1.125Z"
                        stroke="#4C4850"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div className="deal">
                    <>View Deals</>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <Pagination
            defaultCurrent={1}
            pageSizeOptions={[4, 10, 20, 50, 100]}
            total={total}
            pageSize={limit}
            style={{ marginTop: "30px" }}
            onChange={(page, pageSize) => handleChangePage(page, pageSize)}
          />
        </div>
      </>
    );
  }
};
export default FlightListTicket;
