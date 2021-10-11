import React from "react";

export default class SearchForm extends React.Component {
  constructor() {
    super();

    this.state = { searchKeyword: "" };
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onSubmit(this.state.searchKeyword)
  }

  handleRest() {
    this.props.onReset();
  }

  handleChangeInput(event) {
    const searchKeyword = event.target.value;

    if(searchKeyword.length <= 0 ) {
        this.handleRest();
    }

    this.setState({ searchKeyword });
  }

  render() {
    const { searchKeyword } = this.state;

    return (
      // TODO
      <form onSubmit={event => this.handleSubmit(event)} 
            onReset={() => this.handleRest()}>
        <input
          type="text"
          placeholder="검색어를 입력하세요"
          autoFocus
          value={searchKeyword}
          onChange={(event) => this.handleChangeInput(event)}
        />
        {searchKeyword.length > 0 && (
          <button type="reset" className="btn-reset" />
        )}
      </form>
    );
  }
}
