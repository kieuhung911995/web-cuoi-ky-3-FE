import { Modal, Col, Row, Select, Checkbox } from "antd";
import { useState } from "react";

import "../styles/AccountPayment.css";

import card from "../images/card.png";

const AccountPayment = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
  const onChange = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };
  return (
    <div className="AccountPayment">
      <h1>Payment methods</h1>
      <div className="AccountPayment-card">
        <img src={card} alt="card" className="card"></img>
        <div className="add-card" onClick={showModal}>
          <svg
            width="64"
            height="65"
            viewBox="0 0 64 65"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M56 32.5C56 19.25 45.25 8.5 32 8.5C18.75 8.5 8 19.25 8 32.5C8 45.75 18.75 56.5 32 56.5C45.25 56.5 56 45.75 56 32.5Z"
              stroke="#8DD3BB"
              strokeWidth="2"
              strokeMiterlimit="10"
            />
            <path
              d="M32 22.5V42.5M42 32.5H22"
              stroke="#8DD3BB"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <div>Add a new card</div>
        </div>
      </div>
      <Modal
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
        style={{ top: "0px" }}
      >
        <h1>Add a new Card</h1>
        <Col span={24}>
          <input className="cardInput"></input>
          <span className="cardTitle">Card Number</span>
        </Col>
        <Row span={24} style={{ columnGap: "50px", marginTop: "30px" }}>
          <Col span={10}>
            <input className="cardInput"></input>
            <span className="cardTitle">Exp. Date</span>
          </Col>
          <Col span={10}>
            <input className="cardInput"></input>
            <span className="cardTitle">CVC</span>
          </Col>
        </Row>
        <Col span={24} style={{ marginTop: "30px" }}>
          <input className="cardInput"></input>
          <span className="cardTitle">Name on Card</span>
        </Col>
        <Col span={24} style={{ marginTop: "30px" }}>
          <Select
            defaultValue="United States"
            bordered={false}
            size="large"
            className="cardInput"
            style={{ width: "100%", padding: "8px 17px" }}
            onChange={handleChange}
            options={[
              {
                value: "United States",
                label: "United States",
              },
              {
                value: "Vietnam",
                label: "Vietnam",
              },
              {
                value: "Japan",
                label: "Japan",
              },
            ]}
          />
          <span className="cardTitle">Country or Region</span>
        </Col>
        <Col span={24} style={{ marginTop: "20px" }}>
          <Checkbox onChange={onChange}>
            Securely save my information for 1-click checkout
          </Checkbox>
        </Col>
        <Col span={24} style={{ marginTop: "30px" }}>
          <div className="modal-buttonAddCard" onClick={handleOk}>
            <h3>Add Card</h3>
          </div>
        </Col>
        <Col span={24} style={{ marginTop: "10px" }}>
          <div className="modal-footer">
            By confirming your subscription, you allow The Outdoor Inn Crowd
            Limited to charge your card for this payment and future payments in
            accordance with their terms. You can always cancel your
            subscription.
          </div>
        </Col>
      </Modal>
    </div>
  );
};
export default AccountPayment;
