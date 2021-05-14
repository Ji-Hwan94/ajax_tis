import React, { Component } from 'react';
import SearchForm from './SearchForm';
class App extends Component {
  state = {
    item:{}, // 객체 하나만 가져오기 위해서 {} 사용
    id:''  
  }

  changeId=(vid)=>{
    console.log("changeId : "+vid);
    this.setState({ 
      id:vid
     });
  }

  // id가 SearchForm에서부터 받아지고, changeId에서 state가 변경이 될때 rendering이 진행되므로, componentDidUpdate를 작성한다.
  // 즉 componentDidUpdate는 state가 변경되면 호출된다.
  componentDidUpdate(prevProps,prevState){
    //id가 변경됐을 때만 수행. 이 코드 없으면 무한루프
    if(prevState.id===this.state.id){
      return;
    }
    fetch("http://pjs.dothome.co.kr/ajaxDB3.php?id="+this.state.id)
        .then(res=>res.json())
        .then(
            (result)=>{
                this.setState({
                    isLoaded: true,
                    item: result
                });
                console.log(result);
            },
            (error)=>{
                this.setState({
                    isLoaded:true,
                    error
                });
            }
        );
  }
  render() {  
    const {item} = this.state;
    return (
      <div>
        {/* SearchForm에서 받아온 input의 값을 changeId의 함수에 집어넣는다. */}
        <SearchForm changeId={this.changeId}/>        
        <div>
            <h1>{item.id}</h1>
            <h1>{item.name}</h1>
            <h1>{item.address}</h1>
        </div>
      </div>
    );
  }
}

export default App;
