import { Col, Row } from "antd";

import "../styles/FlightList.css";

import Header from "../components/Header";
import FlightListBar from "../components/FlightListBar";
import FlightFilter from "../components/FlightFilter";
import FlightSort from "../components/FlightSort";
import Footer from "../components/Footer";
import FlightListTicket from "../components/FlightListTicket";

const FlightList = () => {
  return (
    <div className="FlightList">
      <Row>
        <Col span={24}>
          <Header />
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <FlightListBar />
        </Col>
      </Row>
      <Row style={{ padding: "0 104px", marginTop: "40px" }}>
        <Col span={7}>
          <FlightFilter />
        </Col>
        <Col span={1}>
          <div
            style={{
              width: "0.5px",
              background: "#112211",
              opacity: "0.25",
              height: "1600px",
              margin: "0 40px",
            }}
          ></div>
        </Col>
        <Col span={16}>
          <FlightSort />
          <FlightListTicket />
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <Footer />
        </Col>
      </Row>
    </div>
  );
};
export default FlightList;
