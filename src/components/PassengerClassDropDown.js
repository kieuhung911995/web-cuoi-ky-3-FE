import { Row, Col, Button, Select, Typography } from "antd";
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";

const { Text } = Typography;

const PassengerClassDropDown = ({
  setCountPassenger,
  countPassenger,
  increasePassenger,
  decreasePassenger,
  selectClass,
  setOpen,
}) => {
  return (
    <div className="passenger-class-drop-down">
      <Row gutter={[0, 16]}>
        <Col
          span={12}
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Text>Passenger</Text>
        </Col>
        <Col span={12}>
          <Button
            type="text"
            icon={<MinusOutlined />}
            onClick={decreasePassenger}
          ></Button>
          {countPassenger}
          <Button
            type="text"
            icon={<PlusOutlined />}
            onClick={increasePassenger}
          ></Button>
        </Col>
        <Col
          span={12}
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Text>Class</Text>
        </Col>
        <Col span={12}>
          <Select
            size="large"
            onChange={selectClass}
            onMouseDown={(e) => {
              e.preventDefault();
              e.stopPropagation();
            }}
            style={{ width: "100%" }}
            options={[
              { value: "Economy", label: "Economy" },
              {
                value: "Premium Economy",
                label: "Premium Economy",
              },
              { value: "Business", label: "Business" },
              { value: "First Class", label: "First Class" },
            ]}
            defaultValue="Economy"
          />
        </Col>
        <Col
          span={24}
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Button
            onClick={() => {
              setOpen(false);
              setCountPassenger(countPassenger);
            }}
          >
            Done
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default PassengerClassDropDown;
