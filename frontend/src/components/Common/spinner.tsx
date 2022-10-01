// import third-party modules
import { Grid, Spin } from "@arco-design/web-react";

function Spinner() {
  return (
    <Grid.Row
      style={{
        alignItems: "center",
        display: "flex",
        height: "100vh",
        margin: "0px",
        justifyContent: "center",
        width: "100vw",
        textAlign: "center",
      }}
    >
      <Grid.Col
        span={24}
        style={{
          blockSize: "50vh",
          display: "grid",
          inlineSize: "50vw",
          placeItems: "center",
        }}
      >
        <Spin dot />
      </Grid.Col>
    </Grid.Row>
  );
}

export default Spinner;
