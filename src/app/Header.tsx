import { Menu, MenuProps } from "antd";
import Layout, { Header } from "antd/es/layout/layout";
import { UserOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const items: MenuProps["items"] = [
  {
    label: "Home",
    key: "",
  },
  {
    label: "Anime",
    key: "anime",
  },
  {
    label: "Movies",
    key: "movie",
  },
  {
    label: "Characters",
    key: "characters",
  },
  {
    label:<UserOutlined style={{fontSize:24}} />,
    key: "logi1n",
    children: [
      {
        label: "Profile",
        key: "profile",
      },
      {
        label: "LogOut",
        key: "login",
      },
    ],
  },
];

function AppHeader(props: { Auth: boolean }) {
  const navigate = useNavigate();

  const onClick: MenuProps["onClick"] = (e) => {
    navigate(e.key);
  };

  return (
    <>
      <Header style={{position:"absolute",width:"100%"}} className={props.Auth ? "al-s" : ""}>
        <div onClick={()=>{navigate('/')}} className='logo'>
          <img src="/logo.png" alt="logo" />
        </div>
        {props.Auth ? (
          <></>
        ) : (
          <Menu onClick={onClick} mode="horizontal"  items={items} />
        )}
      </Header>
    </>
  );
}
export default AppHeader;
