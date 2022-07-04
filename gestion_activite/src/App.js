import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component, Link, Switch, Route } from "react";
import AddTutorial from "./components/add-activite.component";
import Tutorial from "./components/activite.component";
import TutorialsList from "./components/activite-list.component";

class App extends Component {
  render() {
    return (
    <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <a href="/activites" className="navbar-brand">
            Gérer les activités
          </a>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/activites"} className="nav-link">
                Activites
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/add"} className="nav-link">
                Add
              </Link>
            </li>
          </div>
        </nav>
        <div className="container mt-3">
          <Switch>
            <Route exact path={["/", "/activites"]} component={ListeActivite} />
            <Route exact path="/add" component={AddActivite} />
            <Route path="/activites/:id" component={Activite} />
          </Switch>
        </div>
      </div>
    );
  };
}

export default App;
