import { Tabs } from "antd";

import "../styles/AccountTab.css";

import AccountHistory from "./AccountHistory";
import AccountInfo from "./AccountInfo";
import AccountPayment from "./AccountPayment";

const AccountTab = () => {
  const onChange = (key) => {
    console.log(key);
  };
  const items = [
    {
      key: "1",
      label: <h2>Account</h2>,
      children: <AccountInfo />,
    },
    {
      key: "2",
      label: <h2>History</h2>,
      children: <AccountHistory />,
    },
    {
      key: "3",
      label: <h2>Payment methods</h2>,
      children: <AccountPayment />,
    },
  ];
  return (
    <Tabs
      defaultActiveKey="1"
      items={items}
      onChange={onChange}
      centered={true}
      tabBarGutter="300px"
      tabBarStyle={{
        backgroundColor: "#FFFFFF",
        boxShadow: "0px 4px 16px rgba(17, 34, 17, 0.05)",
        borderRadius: "12px",
      }}
    />
  );
};
export default AccountTab;
