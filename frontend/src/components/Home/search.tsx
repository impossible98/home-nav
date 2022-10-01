// import third-party modules
import { useState, useRef } from "react";
import { Button, Grid, Input, Tabs } from "@arco-design/web-react";
import type { RefInputType } from "@arco-design/web-react/es/Input/interface";
// import local modules
import { BASE_SEARCH_URL } from "@/utils/constants";

function HomeSearch() {
  const [activeTab, setActiveTab] = useState("1");
  const inputEl = useRef<RefInputType>(null);
  // return
  return (
    <Grid.Row>
      <Grid.Col span={24}>
        <Tabs activeTab={activeTab} type="rounded" onChange={setActiveTab}>
          <Tabs.TabPane key="1" title="cn Bing">
            <Input
              style={{
                borderRadius: "0.375rem",
              }}
              ref={inputEl}
              onPressEnter={() => {
                if (inputEl.current && inputEl.current.dom.value) {
                  window.open(`${BASE_SEARCH_URL}${inputEl.current.dom.value}`);
                }
              }}
            />
            <Button
              onClick={() => {
                if (inputEl.current && inputEl.current.dom.value) {
                  window.open(`${BASE_SEARCH_URL}${inputEl.current.dom.value}`);
                }
              }}
            >
              Search
            </Button>
          </Tabs.TabPane>
        </Tabs>
      </Grid.Col>
    </Grid.Row>
  );
}

export default HomeSearch;
