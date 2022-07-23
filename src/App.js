import "./App.css";
import Section from "./Section/Section";
import WordCloudSection from "./WordCloud/WordCloud";
import LineChartSection from "./LineChart/LineChartSection";
import BarChartSection from "./BarChart/BarChartSection";
import DropdownSection from "./DropdownGroup/DropdownSection";
import RecommendationsSection from "./Recommendations/RecommendationsSection";

function App() {
  return (
    <div
      className="App"
      style={{
        marginLeft: "5%",
        marginRight: "5%",
        marginTop: "5%",
        marginBottom: "5%",
      }}
    >
      <h1>{"Well Done, you are tracking well!".toUpperCase()}</h1>
      <Section header={"Quick Overview"} children={<LineChartSection />} />
      <Section header={"Quick Overview"} children={<WordCloudSection />} />
      <Section header={"Quick Overview"} children={<BarChartSection />} />
      <Section
        header={"Recomendations"}
        children={<RecommendationsSection />}
      />
      {/* <Section header={""} children={<DropdownSection />} /> */}
    </div>
  );
}

export default App;
