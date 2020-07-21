import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFeatherAlt } from "@fortawesome/free-solid-svg-icons";
class EditModal extends Component {
  constructor() {
    super();
    this.state = {
      openEditModal: false,
      initialText: "",
    };
  }

  componentDidMount() {
    this.setState({
      initialText: this.props.modalDescription,
    });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.modalDescription !== this.props.modalDescription) {
      this.setState({
        initialText: this.props.modalDescription,
      });
    }
  }

  handleOpenEditModal = () => {
    this.setState({
      openEditModal: !this.state.openEditModal,
    });
  };

  handleClose = () => {
    this.setState({
      openEditModal: !this.state.openEditModal,
    });
  };

  handleEscClose = (e) => {
    if (e.keyCode === 27) {
      this.setState({
        openEditModal: false,
      });
    }
  };

  render() {
    return (
      <div>
        <FontAwesomeIcon
          icon={faFeatherAlt}
          onClick={this.handleOpenEditModal}
          className="feather"
          onKeyDown={this.handleEscClose}
          tabIndex="0"
        />
        {this.state.openEditModal && (
          <EditingModal
            title={this.props.modalTitle}
            initialText={this.state.initialText}
            close={this.handleClose}
            edit={this.props.modalEdit}
            id={this.props.modalId}
            description={this.props.modalDescription}
            update={this.updateText}
          ></EditingModal>
        )}
      </div>
    );
  }
}

class EditingModal extends Component {
  state = {
    myText: this.props.initialText,
  };

  handleChangeText = (e) => {
    this.setState({ myText: e.target.value });
  };

  componentWillUnmount() {
    console.log("This component will unmount!");
  }

  handleTitleAlert = () => {
    alert("If you want to edit title, buy premium account!");
  };

  render() {
    return (
      <div className="medalBackground">
        <div className="editModal">
          <input
            name="Title"
            className="editModalTitle"
            value={this.props.title}
            onChange={this.handleTitleAlert}
            maxLength="45"
          ></input>

          <textarea
            name="Description"
            className="editModalDescription"
            value={this.state.myText}
            onChange={this.handleChangeText}
            maxLength="250"
          ></textarea>

          <button className="cancelEditModal" onClick={this.props.close}>
            cancel
          </button>
          <button
            className="confirmEditModal"
            onClick={() => {
              this.props.edit(this.props.id, this.state.myText);
              this.props.close();
            }}
          >
            confirm
          </button>
        </div>
      </div>
    );
  }
}

export default EditModal;
