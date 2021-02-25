import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import First from "./pages/First/First";

import Hero from "./pages/Hero/Hero";
import Nav from "./pages/Nav/Nav";
import Programa from "./pages/Programa/Programa";
import Footer from "./pages/Footer/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />

        <Switch>
          <Route path='/programa'>
            <Hero link='#programa' />
            <Programa />
          </Route>
          <Route path='/'>
            <Hero link='#first' />
            <First />
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
