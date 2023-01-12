import { NavBar } from "../Components/NavBar.js";
import { Banner } from "../Components/Banner.js";
import { Skills } from "../Components/Skills.js";
import { Projects } from "../Components/Projects.js";

const Home = () => {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
    </div>
  );
};
export default Home;
