import React, { Component } from 'react';

class TodoList extends Component{
    constructor(){
        super();
        this.state={
            userInput:'',
            items :[]
        }
    }
    onChange(event){
        this.setState({
            userInput : event.target.value
        })
    }

    addTodo(event){
           event.preventDefault();
           this.setState({
               userInput : '',
               items : [...this.state.items, this.state.userInput]
           },() => console.log(this.state))
    }

    removeItem(item){
       const array = this.state.items;
       const index = array.indexOf(item);
       array.splice(index,1);
       this.setState({
           items : array
       })
    }

    renderTodos(){
        return this.state.items.map((item) =>{
            return (
               <div key={item}>
                 {item} | <button onClick={this.removeItem.bind(this, item)}>X</button>
               </div>
            )
        })
    }

  

    render(){
        return(
            <div>
                 <h1>Ma TodoList</h1>
                 <form>
                 <input 
                 type='text' 
                 value={this.state.userInput}
                 placeholder ='item ajouter' 
                 onChange={(this.onChange.bind(this))}
                 />
                 <button onClick={this.addTodo.bind(this)}>Ajouter</button>
                 </form>
                 <div>
                      {this.renderTodos()}
                 </div>
            </div>
        );
    }
}

export default TodoList;