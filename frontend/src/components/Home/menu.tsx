import { useState } from "react";
import { Layout, Menu, Button } from "@arco-design/web-react";
import { MenuFold, MenuUnfold } from "@icon-park/react";
import HomeSearch from "./search";

function HomeMenu() {
  const [collapse, setCollapse] = useState(false);
  // return
  return (
    <Layout>
      <Layout.Header
        style={{
          height: "4rem",
        }}
      >
        <Button onClick={() => setCollapse(!collapse)}>
          {collapse ? (
            <MenuFold theme="outline" />
          ) : (
            <MenuUnfold theme="outline" />
          )}
        </Button>
      </Layout.Header>
      <Layout>
        <Layout.Sider>
          <Menu
            style={{
              borderRadius: "0.375rem",
              height: "calc(100vh - 4rem)",
            }}
            collapse={collapse}
            defaultOpenKeys={["1"]}
            defaultSelectedKeys={["1"]}
          >
            <Menu.Item key="1">Home</Menu.Item>
          </Menu>
        </Layout.Sider>
        <Layout>
          <Layout.Content>
            <HomeSearch />
          </Layout.Content>
          <Layout.Footer
            style={{
              height: "4rem",
            }}
          >
            Footer
          </Layout.Footer>
        </Layout>
      </Layout>
    </Layout>
  );
}

export default HomeMenu;
