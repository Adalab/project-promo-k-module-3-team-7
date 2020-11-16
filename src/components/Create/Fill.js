import React from "react";
import Info from "./Info";
import FormItem from "./FormItem";
import "../../stylesheets/layout/_fill.scss";

class Fill extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      onClick: "close",
    };

    this.collapseFill = this.collapseFill.bind(this);
  }

  collapseFill() {
    this.setState((prevState) => ({
      onClick: prevState.onClick === "close" ? "open" : "close",
    }));
  }

  render() {
    return (
      <article className="border">
        <Info state={this.state.onClick} icon="fa-keyboard-o" title="Rellena" handleClick={this.collapseFill}></Info>
        <form action="" method="post" className={`fill js__display js__displayNone ${this.state.onClick}`}>
          <FormItem
            name="fullName"
            title="Nombre completo"
            placeholder="Ej: Barry Allen"
            type="text"
            value={this.props.state.fullName}
            handleInputChange={this.props.handleInputChange}
          ></FormItem>
          <FormItem
            name="job"
            title="Puesto"
            placeholder="Ej: The fastest man alive"
            type="text"
            value={this.props.state.job}
            handleInputChange={this.props.handleInputChange}
          ></FormItem>
          <label className="fill__label--img" htmlFor="img-selector">
            Imagen de perfil
          </label>
          <div className="fill__wrapper">
            <div className="action">
              <button className="action__upload-btn js__profile-trigger" type="button" title="Añadir imagen">
                Añadir imagen
              </button>
              <input
                type="file"
                name="img-selector"
                id="img-selector"
                accept="image/png, image/jpeg"
                className="action__hiddenField js__profile-upload-btn"
              />
            </div>
            <div className="profile">
              <div className="profile__preview js__profile-preview" id="previewImg"></div>
            </div>
          </div>
          <FormItem
            name="email"
            title="email"
            placeholder="Ej: barryAllen@gmail.com"
            type="email"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            value={this.props.state.email}
            handleInputChange={this.props.handleInputChange}
          ></FormItem>
          <FormItem
            name="telephone"
            title="telephone"
            placeholder="Ej: 555-55-55-55"
            type="tel"
            pattern="[0-9]{9}"
            value={this.props.state.telephone}
            handleInputChange={this.props.handleInputChange}
          ></FormItem>
          <FormItem
            name="linkedin"
            title="linkedin"
            placeholder="Ej: barryAllen"
            type="text"
            value={this.props.state.linkedin}
            handleInputChange={this.props.handleInputChange}
          ></FormItem>
          <FormItem
            name="github"
            title="github"
            placeholder="Ej: Barry-Allen"
            type="text"
            pattern="@[A-Za-z][0-9]{1,}"
            value={this.props.state.github}
            handleInputChange={this.props.handleInputChange}
          ></FormItem>
        </form>
      </article>
    );
  }
}

export default Fill;