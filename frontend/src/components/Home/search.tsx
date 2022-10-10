// import third-party modules
import { useState } from "react";
import { Button, Grid, Input, Tabs } from "@arco-design/web-react";
// import local modules
import { BASE_SEARCH_URL } from "@/utils/constants";

function HomeSearch() {
  const [activeTab, setActiveTab] = useState("1");
  // return
  return (
    <Grid.Row>
      <Grid.Col span={24}>
        <Tabs activeTab={activeTab} type="rounded" onChange={setActiveTab}>
          <Tabs.TabPane key="1" title="cn Bing">
            <Input
              style={{
                borderRadius: "9999px",
                height: "40px",
              }}
              onPressEnter={(e) => {
                if (e.target.value) {
                  window.open(`${BASE_SEARCH_URL}${e.target.value}`);
                }
              }}
            />
          </Tabs.TabPane>
        </Tabs>
      </Grid.Col>
      <Grid.Col span={24}>
        <Button
          style={{
            borderRadius: "0.375rem",
            left: "50%",
            marginTop: "0.5rem",
            transform: "translateX(-50%)",
          }}
          onClick={(e) => {
            if (e.target.value) {
              window.open(`${BASE_SEARCH_URL}${e.target.value}`);
            }
          }}
        >
          Search
        </Button>
      </Grid.Col>
    </Grid.Row>
  );
}

export default HomeSearch;
