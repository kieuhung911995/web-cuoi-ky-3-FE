import { Col, Row } from "antd";

import "../styles/Account.css";

import Header from "../components/Header";
import AccountAvatar from "../components/AccountAvatar";
import AccountTab from "../components/AccountTab";
import Footer from "../components/Footer";

const Account = () => {
  return (
    <div className="Account">
      <Row>
        <Col span={24}>
          <Header />
        </Col>
      </Row>
      <Row style={{ padding: "0 104px", margin: "100px 0" }}>
        <Col span={24}>
          <AccountAvatar />
        </Col>
      </Row>
      <Row style={{ padding: "0 104px", marginTop: "190px" }}>
        <Col span={24}>
          <AccountTab />
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
export default Account;
