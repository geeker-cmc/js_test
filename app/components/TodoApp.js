import React,{Component} from 'react';
import TodoList from './TodoList';

export default class TodoApp extends Component{
  constructor(props) {
    super(props);
  
    this.state = {
      items:[],
      text:''
    };
  }
  handleSubmit(e){
    e.preventDefault();
    this.setState((prevState)=>{
      let newItem={
        text:this.state.text,
        id:Date.now()
      }
      return {
        items:prevState.items.concat(newItem),
        text:''
      }
    })
  }
  handleChange(e){
    this.setState({
      text:e.target.value
    })
  }
  deleChild(itemKey){
    let temp=this.state.items.filter((item)=>item.id!=itemKey);
    this.setState({
      items:temp
    })
  }
  render(){
    return (
          <div>
            <h3>todo</h3>
            <TodoList deleChild={this.deleChild.bind(this)} items={this.state.items} />
            <form onSubmit={this.handleSubmit.bind(this)}>
            <input type="text" onChange={this.handleChange.bind(this)} value={this.state.text}/>
               <button>{'#'+(this.state.items.length)}</button>
            </form>
           
          </div>
      )
  }
}