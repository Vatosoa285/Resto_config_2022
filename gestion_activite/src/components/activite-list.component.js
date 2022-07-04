import React, { Component } from "react";
import ActiviteDataService from "../services/activite.service";
import { Link } from "react-router-dom";

export default class ListeActivite extends Component {
  constructor(props) {
    super(props);
    this.onChangeSearchTitle = this.onChangeSearchTitle.bind(this);
    this.retrieveActivites = this.retrieveActivites.bind(this);
    this.refreshList = this.refreshList.bind(this);
    this.setActiveActivite = this.setActiveActivite.bind(this);
    this.removeAllActivites = this.removeAllActivites.bind(this);
    this.searchTitle = this.searchTitle.bind(this);
    this.state = {
      tutorials: [],
      currentActivite: null,
      currentIndex: -1,
      searchTitle: ""
    };
  }
  componentDidMount() {
    this.retrieveActivites();
  }
  onChangeSearchTitle(e) {
    const searchTitle = e.target.value;
    this.setState({
      searchTitle: searchTitle
    });
  }
  retrieveActivites() {
    ActiviteDataService.getAll()
      .then(response => {
        this.setState({
            activites: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }
  refreshList() {
    this.retrieveActivites();
    this.setState({
      currentActivite: null,
      currentIndex: -1
    });
  }
  setActiveActivite(activite, index) {
    this.setState({
      currentActivite: activite,
      currentIndex: index
    });
  }
  removeAllActivites() {
    ActiviteDataService.deleteAll()
      .then(response => {
        console.log(response.data);
        this.refreshList();
      })
      .catch(e => {
        console.log(e);
      });
  }
  searchTitle() {
    ActiviteDataService.findByTitle(this.state.searchTitle)
      .then(response => {
        this.setState({
            tutorials: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }
  render() {
    const { searchTitle, activites, currentActivite, currentIndex } = this.state;
    return (
      <div className="list row">
        <div className="col-md-8">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search by title"
              value={searchTitle}
              onChange={this.onChangeSearchTitle}
            />
            <div className="input-group-append">
              <button
                className="btn btn-outline-secondary"
                type="button"
                onClick={this.searchTitle}
              >
                Search
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-6">
        <h4>Liste des activites</h4>
          <ul className="list-group">
            {activites &&
              activites.map((activite, index) => (
                <li
                  className={
                    "list-group-item " +
                    (index === currentIndex ? "active" : "")
                  }
                  onClick={() => this.setActiveActivite(activite, index)}
                  key={index}
                >
                  {activite.title}
                </li>
              ))}
          </ul>
          <button
            className="m-3 btn btn-sm btn-danger"
            onClick={this.removeAllActivites}
          >
            Remove All
          </button>
        </div>
        <div className="col-md-6">
          {currentActivite ? (
            <div>
              <h4>Activite</h4>
              <div>
                <label>
                  <strong>Title:</strong>
                </label>{" "}
                {currentActivite.title}
              </div>
              <div>
                <label>
                  <strong>Description:</strong>
                </label>{" "}
                {currentActivite.description}
              </div>
              <div>
                <label>
                  <strong>Status:</strong>
                </label>{" "}
                {currentActivite.benevole ? "benevole" : "Pending"}
              </div>
              <Link
                to={"/activites/" + currentActivite.id}
                className="badge badge-warning"
              >
                Edit
              </Link>
            </div>
          ) : (
            <div>
              <br />
              <p>Veuillez cliquez sur une activité...</p>
            </div>
          )}
        </div>
      </div>
    );
  }

}