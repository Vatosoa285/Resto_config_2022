import React, { Component } from "react";
import ActiviteDataService from "../services/activite.service";

export default class Activite extends Component {
  constructor(props) {
    super(props);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.getActivite = this.getActivite.bind(this);
    this.updateBenevole = this.updateBenevole.bind(this);
    this.updateActivite = this.updateActivite.bind(this);
    this.deleteActivite = this.deleteActivite.bind(this);
    this.state = {
      currentActivite: {
        id: null,
        title: "",
        description: "",
        Benevole: false
      },
      message: ""
    };
  }
  componentDidMount() {
    this.getActivite(this.props.match.params.id);
  }
  onChangeTitle(e) {
    const title = e.target.value;
    this.setState(function(prevState) {
      return {
        currentActivite: {
          ...prevState.currentActivite,
          title: title
        }
      };
    });
}
onChangeDescription(e) {
  const description = e.target.value;
  
  this.setState(prevState => ({
    currentTutorial: {
      ...prevState.currentTutorial,
      description: description
    }
  }));
}
getActivite(id) {
    ActiviteDataService.get(id)
    .then(response => {
      this.setState({
        currentActivite: response.data
      });
      console.log(response.data);
    })
    .catch(e => {
      console.log(e);
    });
}
updateBenevole(status) {
  var data = {
    id: this.state.currentActivite.id,
    title: this.state.currentActivite.title,
    description: this.state.currentActivite.description,
    benevole: status
    };
    ActiviteDataService.update(this.state.currentActivite.id, data)
      .then(response => {
        this.setState(prevState => ({
          currentActivite: {
            ...prevState.currentTutorial,
            published: status
          }
        }));
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }
  updateActivite() {
    ActiviteDataService.update(
      this.state.currentActivite.id,
      this.state.currentActivite
    )
      .then(response => {
        console.log(response.data);
        this.setState({
          message: "The tutorial was updated successfully!"
        });
      })
      .catch(e => {
        console.log(e);
    });
}
deleteActivite() {    
    ActiviteDataService.delete(this.state.currentActivite.id)
    .then(response => {
      console.log(response.data);
      this.props.history.push('/activites')
    })
    .catch(e => {
      console.log(e);
    });
}
render() {
  // ...
  const { currentActivite } = this.state;
    return (
      <div>
        {currentActivite ? (
          <div className="edit-form">
            <h4>Activite</h4>
            <form>
              <div className="form-group">
                <label htmlFor="title">Title</label>
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  value={currentActivite.title}
                  onChange={this.onChangeTitle}
                />
              </div>
              <div className="form-group">
                <label htmlFor="description">Description</label>
                <input
                  type="text"
                  className="form-control"
                  id="description"
                  value={currentActivite.description}
                  onChange={this.onChangeDescription}
                />
              </div>
              <div className="form-group">
                <label>
                  <strong>Status:</strong>
                </label>
                {currentActivite.benevole ? "Benevole" : "Pending"}
              </div>
            </form>
            {currentActivite.published ? (
              <button
                className="badge badge-primary mr-2"
                onClick={() => this.updateBenevole(false)}
              >
                0
              </button>
            ) : (
              <button
                className="badge badge-primary mr-2"
                onClick={() => this.updateBenevole(true)}
              >
                Benevole
              </button>
            )}
            <button
              className="badge badge-danger mr-2"
              onClick={this.deleteActivite}
            >
              Delete
            </button>
            <button
             type="submit"
             className="badge badge-success"
             onClick={this.updateActivite}
           >
             Update
           </button>
           <p>{this.state.message}</p>
         </div>
       ) : (
         <div>
           <br />
           <p>Cliquez sur une activité ...</p>
         </div>
       )}
     </div>
   );
 }
}
