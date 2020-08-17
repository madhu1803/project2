import React, { Component } from "react";

export default class Input extends Component {
  render() {
    const { type, placeholder, IconComponent } = this.props;
    return (
      <div class="form-group app-form-grp">
        <IconComponent className="custom-icon" />
        <input type={type} className="form-control" placeholder={placeholder} />
      </div>
    );
  }
}
