import React, { Component } from "react";

export default class Btn extends Component {
  render() {
    let { type, isBlock, text, click, styles } = this.props;
    return (
      <button
        className={`btn btn-${type} ${isBlock && "btn-block"}  ${styles}`}
        onClick={click}
      >
        Login {text}
      </button>
    );
  }
}
