import React,{Component} from 'react';
export default class TodoList extends Component{
  constructor(props) {
    super(props);
  }
  componentWillReceiveProps(){
   
  }
  handleClick(e){
    this.props.deleChild(e.target.parentElement.getAttribute('data-key'));
  }
  render(){
    return (
         <ul>
           {
            this.props.items.map(item=>{
              return (<li data-key={item.id} key={item.id} >{item.text}<i style={{background:'red',display:'inline-block',width:20,height:20}} onClick={this.handleClick.bind(this)}>X</i></li>)
            })
          }
         </ul>
      )
  }
}