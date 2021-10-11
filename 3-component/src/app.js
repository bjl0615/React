import React from "react";
import Header from "./components/Header.js";
import SearchForm from "./components/SearchForm.js";
import SearchResult from "./components/SearchResult.js";
import store from "./components/Store.js";

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      searchKeyword: "",
      searchResult: [],
      submitted : false,

    };
  }

  handleChangeInput(searchKeyword) {
    if (searchKeyword.length <= 0) {
      this.handleReset();
    }

    this.setState({ searchKeyword });
  }

  search(searchKeyword) {
    // store
    const searchResult =  store.search(searchKeyword);

    this.setState({
      searchResult,
      submitted : true,
    });
  }

  handleReset() {
    console.log("TODO: reset");
    this.setState({ 
      searchKeyword: "" ,
      submitted : false,
      searchResult: [],
    });
  }

  render() {
    const { searchKeyword, submitted, searchResult } = this.state;

    return (
      <>
        <Header title="검색" />
        <div className="container">
          <SearchForm
            value={searchKeyword}
            onChange={(value) => this.handleChangeInput(value)}
            onSubmit={() => this.search(searchKeyword)}
            onReset={() => this.handleReset()}
          />
          <div className="content">
            {submitted && <SearchResult data={searchResult} />}
          </div>
        </div>
      </>
    );
  }
}
