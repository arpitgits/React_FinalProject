import "./App.css";
import Home from "./components/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./Pages/About/About";
import GoverningBody from "./Pages/GoverningBody/GoverningBody";
import Topbar from "./components/topbar/Topbar";
import Header from "./components/Header/Header";
import NavBar from "./components/Header/NavBar";
import Partner from "./Pages/Partners/Partner";
import History from "./Pages/History/History";
import Project from "./Pages/Project/Project";
import Footer from "./components/Footer/Footer";
import Staff from "./Pages/Staff/Staff";
import Services from "./Pages/Services/Services";
import Consultancy from "./Pages/Consultancy/Consultancy";
import RightToInformation from "./Pages/RightInformation/RightToInformation";
import ProjectPage from "./Pages/ProjectPage/ProjectPage";
import NewsPage from "./Pages/News/NewsPage";
import Tenderr from "./Pages/Tenders/Tenderr";
import Resource from "./Pages/Resources/Resource";
import Newsss from "./Pages/ProjectPage/Newsss";
function App() {
  return (
    <Router>
      <Topbar />
      <NavBar />

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/governingbody">
          <GoverningBody />
        </Route>
        <Route exact path="/history">
          <History />
        </Route>
        <Route exact path="/partner">
          <Partner />
        </Route>
        <Route exact path="/staff">
          <Staff />
        </Route>
        <Route exact path="/services">
          <Services />
        </Route>
        <Route exact path="/consultancy">
          <Consultancy />
        </Route>
        <Route exact path="/information">
          <RightToInformation />
        </Route>
        <Route exact path="/project">
          <Project />
        </Route>
        <Route exact path="/news">
          <NewsPage />
        </Route>
        <Route exact path="/project">
          <Project />
        </Route>
        <Route exact path="/tenders">
          <Tenderr />
        </Route>
        <Route exact path="/resources">
          <Resource />
        </Route>
        <Route exact path="/details/:id">
          <ProjectPage />
        </Route>
        <Route exact path="/news/:id">
          <Newsss />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
