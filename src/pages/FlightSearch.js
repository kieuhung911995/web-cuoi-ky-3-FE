import { Col, Row } from "antd";

import "../styles/FlightSearch.css";
import banner1 from "../images/banner1.png";
import banner2 from "../images/banner2.png";

import Header from "../components/Header";
import FlightSearchMain1 from "../components/FlightSearchMain1";
import FlightSearchMain2 from "../components/FlightSearchMain2";
import FlightSearchBar from "../components/FlightSearchBar";
import Footer from "../components/Footer";

const FlightSearch = () => {
  return (
    <div className="FlightSearch">
      <Row>
        <Col span={24}>
          <Header />
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <img src={banner1} alt="banner1" className="banner"></img>
          <FlightSearchBar className="font-family" />
        </Col>
      </Row>
      <Row style={{ marginTop: "180px" }}>
        <Col span={24}>
          <div className="font-family">
            <div>
              <h1>Let's go places together</h1>
              <p>
                Discover the latest offers and news and start planning your next
                trip with us.
              </p>
            </div>
            <div className="button-seeAll">
              <>See All</>
            </div>
          </div>
          <img src={banner2} alt="banner2" className="banner"></img>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <div className="font-family">
            <div>
              <h1>Fall into travel</h1>
              <p>
                Going somewhere to celebrate this season? Whether you’re going
                home or somewhere to roam, we’ve got the travel tools to get you
                to your destination.
              </p>
            </div>
            <div className="button-seeAll">
              <>See All</>
            </div>
          </div>
          <FlightSearchMain1 />
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <div className="font-family">
            <div>
              <h1>Fall into travel</h1>
              <p>
                Going somewhere to celebrate this season? Whether you’re going
                home or somewhere to roam, we’ve got the travel tools to get you
                to your destination.
              </p>
            </div>
            <div className="button-seeAll">
              <>See All</>
            </div>
          </div>
          <FlightSearchMain2 />
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
export default FlightSearch;
