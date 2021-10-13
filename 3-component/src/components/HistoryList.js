import React from "react";
import { formatRelativeDate } from "../helpers.js";
import store from "../Store.js";
import List from "./List.js";

export default class HistoryList extends React.Component {
  constructor() {
    super();

    this.state = {
      historyList: [],
    };
  }

  componentDidMount() {
    this.fetch();
  }

  fetch() {
    const historyList = store.getHistoryList();
    this.setState({ historyList });
  }

  handleClickRemove(keyword) {
    store.removeHistory(keyword);
    this.fetch();
  }

  render() {
    const { onClick } = this.props;
    const { historyList } = this.state;

    return (
      <List
        data={historyList}
        onClick={onClick}
        hasDate
        onRemove = {(keyword) => this.handleClickRemove(keyword)}
        // renderItem={(item) => (
        //   <>
        //     <span>{item.keyword}</span>
        //   </>
        // )}
      />
    );
  }
}
