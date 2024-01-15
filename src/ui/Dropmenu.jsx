import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
import { Link, useNavigate } from "react-router-dom";
import supabase from "../services/supabase";

function handleAdmin() {
  supabase.auth.signOut();
}
const items = [
  {
    key: "1",
    label: <Link to="/profile">Profile</Link>,
  },
  // {
  //   key: "2",
  //   label: (
  //     <a target="_blank" rel="noopener noreferrer" href="">
  //       Settings
  //     </a>
  //   ),
  //   icon: <SmileOutlined />,
  //   disabled: true,
  // },
  {
    key: "3",
    label: (
      <div onClick={handleAdmin}>
        <Link to="/admin">Admin</Link>
      </div>
    ),
  },
  {
    key: "4",
    label: <div onClick={() => supabase.auth.signOut()}>Logout</div>,
  },
];
const Dropmenu = () => (
  <Dropdown
    menu={{
      items,
    }}
  >
    <a onClick={(e) => e.preventDefault()}>
      <Space>
        <DownOutlined />
      </Space>
    </a>
  </Dropdown>
);
export default Dropmenu;
