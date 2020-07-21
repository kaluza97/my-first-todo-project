import React, { PureComponent } from "react";
import Header from "./header";
import DeleteModal from "./deleteModal";
import EditModal from "./editModal";
import { truncate } from "./truncate";

export default class App extends PureComponent {
  constructor() {
    super();
    this.state = {
      listy: [
        {
          id: 159007923566,
          title: "Pyszne.pl",
          description:
            "Jedz za 10ciu, zamow u nas i żryj u nas aż Ci bebzol pęknie. Tylko u nas zaplacisz za 2 pizze tyle co za 3. promocja trwa do jutra",
          author: "Michel Moran",
          date: "19.5.2020 18:37",
          sort: 1590000000000,
        },
        {
          id: 1590079250352,
          title: "Puszyste.pl",
          description:
            "Masz problem z otyłością? Dobrze sie składa! Kup u mnie syty obiad i chudnij w oczach",
          author: "Magda Gesler",
          date: "19.5.2020 19:22",
          sort: 1590000000000,
        },
        {
          id: 1590079275372,
          title: "Pogrzebane.pl",
          description:
            "Tylko dzisiaj - promocja na trumny! Kup trumnę już dzisiaj, a dostaniesz piękny wieniec pogrzebowy gratis.",
          author: "Ksiadz Ryszard",
          date: "19.5.2020 21:05",
          sort: 1590000000000,
        },
        {
          id: 1590079307460,
          title: "Abstynent.pl",
          description:
            "Alkohol! Najdrożej w mieście! Ale za to ile przyjemności!",
          author: "Zbyszek Żul",
          date: "19.6.2020 12:22",
          sort: 1590000000000,
        },
      ],
    };
  }

  edit = (id, description) => {
    this.setState({
      listy: this.state.listy.map((el) =>
        el.id === id ? { ...el, description } : el
      ),
    });
  };

  delete = (item) => {
    const listy = this.state.listy.filter((i) => i.id !== item.id);
    this.setState({ listy });
  };

  addTask = (title, description, author) => {
    var newItem = {
      id: Date.now(),
      title: title,
      description: description,
      author: author,
      date: `${new Date().getDate()}.${
        new Date().getMonth() + 1
      }.${new Date().getFullYear()} ${new Date().getHours()}:${new Date().getMinutes()}`,
      sort: 100,
    };
    this.setState((prevState) => ({
      listy: [...prevState.listy, newItem],
    }));
  };

  render() {
    const list = this.state.listy.map((item) => (
      <div key={item.id} index={item.id} className="itemContainer">
        <div className="list-item">
          <div className="itemWithoutMenu">
            <div className="list-head">
              <h2 className="list-head-title">{item.title}</h2>
              <p className="head-item">Author : {item.author}</p>
              <p className="head-item">Date : {item.date}</p>
            </div>
            <div className="list-tail">
              <p className="tail-item">{truncate(item.description, 55)}</p>
            </div>
          </div>
          <div className="list-scroll">
            <div className="list-scroll-description">{item.description}</div>
          </div>

          <div className="menu">
            <DeleteModal
              modalTitle={item.title}
              deleteEdit={this.delete.bind(this, item)}
            ></DeleteModal>

            <EditModal
              modalTitle={item.title}
              modalId={item.id}
              modalDescription={item.description}
              modalEdit={this.edit}
            ></EditModal>
          </div>
        </div>
      </div>
    ));
    return (
      <>
        <div className="imgDragon" />

        <div className="list">
          <Header addTask={this.addTask}></Header>
          <div className="listContainer">{list}</div>
          <div className="footer">
            <p className="footer-p">App created by Piotr Kałużny</p>
            <a href="https://www.facebook.com/kaluza97">
              <div className="facebook" />
            </a>
          </div>
        </div>
      </>
    );
  }
}
