import axios from "axios";
import { useState, useEffect } from "react";

import "../styles/FlightSearchInput.css";

import { Col, DatePicker, Select, Spin } from "antd";

import PassengerClassDropDown from "./PassengerClassDropDown";

const { RangePicker } = DatePicker;

// Export Flight Search Input Component
export function FlightSearchInput() {
  const [isLoading, setIsLoading] = useState(true);
  const [datas, setDatas] = useState([]);
  let flightOptions = [];
  useEffect(() => {
    const getDatas = async () => {
      try {
        const response = await axios.get("http://localhost:3000/flight/input");
        setDatas(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    getDatas();
  }, []);
  datas.map((data) => {
    flightOptions.push({ value: data.city, label: data.city });
  });
  console.log(flightOptions);

  const [countPassenger, setCountPassenger] = useState(0);
  const [open, setOpen] = useState(false);
  const [classTicket, setClassTicket] = useState("Economy");

  const increasePassenger = () => {
    setCountPassenger(countPassenger + 1);
  };
  const decreasePassenger = () => {
    if (countPassenger > 0) {
      setCountPassenger(countPassenger - 1);
    }
  };

  const selectClass = (value) => {
    setClassTicket(value);
  };
  if (isLoading) {
    return (
      <Spin tip="Loading" size="large">
        <div className="content" />
      </Spin>
    );
  }
  if (!isLoading) {
    return (
      <>
        <Col span={4}>
          <div
            style={{
              position: "relative",
            }}
          >
            <span className="label-text">From</span>
            <Select
              size="large"
              style={{ width: "100%" }}
              showSearch
              value="Hanoi"
              options={flightOptions}
              filterOption={(input, option) =>
                (option?.label ?? "")
                  .toLowerCase()
                  .includes(input.toLowerCase())
              }
            />
          </div>
        </Col>
        <Col span={4}>
          <div style={{ position: "relative" }}>
            <span className="label-text">To</span>
            <Select
              size="large"
              style={{ width: "100%" }}
              showSearch
              value="Ho Chi Minh City"
              options={flightOptions}
              filterOption={(input, option) =>
                (option?.label ?? "")
                  .toLowerCase()
                  .includes(input.toLowerCase())
              }
            />
          </div>
        </Col>
        <Col span={4}>
          <div style={{ position: "relative" }}>
            <span className="label-text">Trip</span>
            <Select
              size="large"
              style={{ width: "100%" }}
              value="One-way"
              options={[
                { value: "Round-trip", label: "Round-trip" },
                { value: "One-way", label: "One-way" },
              ]}
            />
          </div>
        </Col>
        <Col span={6}>
          <div style={{ position: "relative" }}>
            <span className="label-text">Depart - Return</span>
            <RangePicker size="large" />
          </div>
        </Col>
        <Col span={6}>
          <div style={{ position: "relative" }}>
            <span className="label-text">Passenger - Class</span>
            <Select
              size="large"
              value={`${countPassenger} Passenger, ${classTicket}`}
              open={open}
              onDropdownVisibleChange={(visible) => setOpen(visible)}
              dropdownRender={() => (
                <PassengerClassDropDown
                  setCountPassenger={setCountPassenger}
                  countPassenger={countPassenger}
                  increasePassenger={increasePassenger}
                  decreasePassenger={decreasePassenger}
                  selectClass={selectClass}
                  setOpen={setOpen}
                />
              )}
              style={{ width: "100%" }}
            />
          </div>
        </Col>
      </>
    );
  }
}
export default FlightSearchInput;
