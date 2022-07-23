import "./App.css";
import ReactWordcloud from "react-wordcloud";
import words from "./words";
import ReactSelect from "./Dropdown";
import BarChart from "./BarChart";
import LineChart from "./LineChart";
import Section from "./Section";

function App() {
  return (
    <div
      className="App"
      style={{ marginLeft: "5%", marginRight: "5%", marginTop: "5%" }}
    >
      <Section heading={"123"} children={<ReactSelect />} />
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: "50%",
            alignItems: "center",
            justifyContent: "center",
            paddingRight: 10,
          }}
        >
          <ReactSelect />
        </div>
        <div
          style={{
            width: "50%",
            height: "100%",
            alignItems: "center",
            justifyContent: "center",
            paddingLeft: 10,
          }}
        >
          <ReactSelect />
        </div>
      </div>

      <div
        style={{
          display: "flex",
          flex: 1,
          width: "100%",
          height: "100%",
          alignItems: "center",
          justifyContent: "center",
          marginTop: 50,
          marginBottom: 50,
        }}
      >
        <LineChart />
      </div>

      <div
        style={{
          flex: 1,
          width: "100%",
          height: "100%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        Word Cloud
        <div
          style={{
            flex: 1,
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
          }}
        >
          <div>
            <ReactWordcloud words={words} />
          </div>
          <div>
            <ReactWordcloud words={words} />
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flex: 1,
          width: "100%",
          height: "100%",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            width: "50%",
            height: "100%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <BarChart />
        </div>
        <div
          style={{
            width: "50%",
            height: "100%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <BarChart />
        </div>
      </div>
    </div>
  );
}

export default App;
