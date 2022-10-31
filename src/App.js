import "./App.css";
import Header from "./components/Header";
import MyLinks from "./components/MyLinks";
import Footer from "./components/Footer";
import slackSvg from "./components/assets/slack.svg";
import githubSvg from "./components/assets/Social icon.svg";

function App() {
  return (
    <>
      <div className=" container mx-auto bg-white font-custom-open-sans">
        <Header />

        <MyLinks />
      </div>

      <div className="flex justify-center items-center pt-4 gap-4 pb-9">
        <img src={slackSvg} alt="slack-icon" />

        <img src={githubSvg} alt="github-icon" />
      </div>

      <Footer />
    </>
  );
}

export default App;
