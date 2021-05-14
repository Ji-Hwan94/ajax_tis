import React, { Component } from 'react';
import SearchForm from './SearchForm';
class App extends Component {
  state = {
    item:{},
    id:''  
  }
  changeId=(id)=>{
    console.log("changeId : "+id);    

    // ajax의 코드를 componentDidUpdate 함수를 만들지 않고, changeId함수 안에 바로 넣는다.
    console.log("http://pjs.dothome.co.kr/ajaxDB3.php?id="+id);
    fetch("http://pjs.dothome.co.kr/ajaxDB3.php?id="+id)
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
  };

  
  render() {  
    const {item} = this.state;
    return (
      <div>
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
