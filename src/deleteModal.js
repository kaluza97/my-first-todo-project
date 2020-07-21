import React, { PureComponent } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXRay } from "@fortawesome/free-solid-svg-icons";

class DeleteModal extends PureComponent {
  state = {
    openDeleteModal: false,
  };

  handleOpenDeleteModal = () => {
    this.setState({
      openDeleteModal: !this.state.openDeleteModal,
    });
  };

  handleEscClose = (e) => {
    if (e.keyCode === 27) {
      this.setState({
        openDeleteModal: false,
      });
    }
  };

  render() {
    return (
      <div onKeyDown={this.handleEscClose} tabIndex="0">
        <FontAwesomeIcon
          icon={faXRay}
          onClick={this.handleOpenDeleteModal}
          className="xRay"
        />
        {this.state.openDeleteModal && (
          <Medal
            title={this.props.modalTitle}
            deleteMod={this.props.deleteEdit}
            close={this.handleOpenDeleteModal}
          ></Medal>
        )}
      </div>
    );
  }
}

// funkcyjny czyli propsy bez this i w nawiasie "props" wyzej sa zdefioniowane!
const Medal = (props) => {
  // const { title } = props;
  return (
    <div className="medalBackground">
      <div className="DeleteModal">
        <p className="questionDeleteModalp">{props.title}</p>
        <p className="questionDeleteModal">
          are you sure you want to delete item?
        </p>

        <button className="cancelDeleteModal" onClick={props.close}>
          cancel
        </button>
        <button className="deleteDeleteModal" onClick={props.deleteMod}>
          delete
        </button>
      </div>
    </div>
  );
};

export default DeleteModal;
