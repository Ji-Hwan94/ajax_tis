import React, { Component } from 'react';

class SearchForm extends Component {
  // 데이터가 분리 항상 input 태그에 입력한것이 state에 저장되어 있는 것이여야 한다.
  state = {
    id: ''
  }

  // handleChange로 비어 있는 id 값에 input 태그의 값을 가져온다.
  handleChange = (e) => {
    this.setState({
      // 이벤트가 발생한 이름 : 이벤트가 발생한 input 태그의 값
      [e.target.name]: e.target.value
    })
  }
  handleSubmit = (e) => {
    // 전송을 방지
    e.preventDefault();   
    console.log("handleSubmit : "+this.state.id); 
    // 
    this.props.changeId(this.state.id); 
    // 상태 초기화
    this.setState({
      id:''
    })
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        {/* input 태그의 입력값을 받기 위해서는 onChange={this.handleChange} 작성한다.*/}
        {/* 부모 태그(app)에 input 태그의 값을 전달해 준다. */}
          <input type='text' name='id' onChange={this.handleChange}></input>
          <input type="submit" value="search"></input>
        </form>
    );
  }
}

export default SearchForm;