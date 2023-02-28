import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
const items = [
  {
    label: <a href="#">Chippest</a>,
    key: "0",
  },
  {
    label: <a href="#">Recommended</a>,
    key: "1",
  },
];
const TicketDropdown = () => (
  <Dropdown
    menu={{
      items,
    }}
    trigger={["click"]}
  >
    <a onClick={(e) => e.preventDefault()}>
      <Space>
        Chippest
        <DownOutlined />
      </Space>
    </a>
  </Dropdown>
);
export default TicketDropdown;
