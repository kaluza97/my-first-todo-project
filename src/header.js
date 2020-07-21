import React, { PureComponent } from "react";

class Header extends PureComponent {
  constructor() {
    super();
    this.state = {
      openAddTask: false,
      title: "",
      description: "",
      author: "",
    };
  }

  handleOpenAddTask = () => {
    this.setState({
      openAddTask: !this.state.openAddTask,
      title: "",
      description: "",
      author: "",
    });
  };

  handleTitle = (e) => {
    this.setState({
      title: e.target.value,
    });
  };
  handleDescription = (e) => {
    this.setState({
      description: e.target.value,
    });
  };
  handleAuthor = (e) => {
    this.setState({
      author: e.target.value,
    });
  };

  handleEscClose = (e) => {
    if (e.keyCode === 27) {
      this.setState({
        openAddTask: false,
      });
    }
  };

  handleAddNewItem = () => {
    const { title, description, author } = this.state;
    if (title.length > 2 && description.length > 2 && author.length > 2) {
      this.props.addTask(title, description, author);
      this.setState({
        title: "",
        description: "",
        author: "",
        openAddTask: false,
      });
    } else {
      alert("Please, complete all fields");
    }
  };

  render() {
    return (
      <>
        <div
          className="header"
          id="header"
          onClick={this.handleOpenAddTask}
          onKeyDown={this.handleEscClose}
          tabIndex="0"
        >
          <h1>TO-DO LIST</h1>
          <h3>click to add task</h3>
          <div className="dragon" id="dragon" />
        </div>
        {this.state.openAddTask && (
          <AddTask
            modalTitle={this.state.title}
            modalDescription={this.state.description}
            modalAuthor={this.state.author}
            handleTitle={this.handleTitle}
            handleDescription={this.handleDescription}
            handleAuthor={this.handleAuthor}
            close={this.handleOpenAddTask}
            addTask={this.props.addTask}
            handleAddNewItem={this.handleAddNewItem}
          ></AddTask>
        )}
      </>
    );
  }
}

const AddTask = (props) => {
  return (
    <div className="addTaskBackground">
      <div className="addTask">
        <p className="addTaskP">Add new task</p>
        <div className="katana"></div>

        <input
          type="text"
          className="addTitle"
          placeholder="Title"
          maxLength="45"
          value={props.modalTitle}
          onChange={props.handleTitle}
        />

        <input
          type="text"
          className="addAuthor"
          placeholder="Author"
          maxLength="45"
          value={props.modalAuthor}
          onChange={props.handleAuthor}
        />
        <textarea
          name="addDescription"
          id=""
          cols="30"
          rows="5"
          className="addDescription"
          placeholder="Description"
          maxLength="250"
          value={props.modalDescription}
          onChange={props.handleDescription}
        ></textarea>

        <button onClick={props.handleAddNewItem} className="confirmAddModal">
          confirm
        </button>

        <button className="cancelAddModal" onClick={props.close}>
          cancel
        </button>
      </div>
    </div>
  );
};

export default Header;
