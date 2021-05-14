import React from 'react';

class AjaxTest2 extends React.Component{
    constructor(props){
        super(props);
        this.state={
            error:null,
            isLoaded:false,
            item:{},           
            id:""
        };
    }
    componentDidMount(){
        console.log("http://pjs.dothome.co.kr/ajaxDB3.php?id="+this.props.id);
        fetch("http://pjs.dothome.co.kr/ajaxDB3.php??id="+this.props.id)
        .then(res=>res.json())
        .then(
            (result)=>{
                this.setState({
                    isLoaded: true,
                    item: result
                });
            },
            (error)=>{
                this.setState({
                    isLoaded:true,
                    error
                });
            }
        );
    }
    render(){
        const {item} = this.state;
        
            return (
                <div>                    
                    <div>
                        <h1>{item.id}</h1>
                        <h1>{item.name}</h1>
                        <h1>{item.address}</h1>
                    </div>
                </div>
              
            );
    }
}

export default AjaxTest2;