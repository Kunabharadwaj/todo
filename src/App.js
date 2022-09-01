import React, {Component} from 'react';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      userName: 'Kuna',
      todoItems: [
        {action: 'Buy Milk', done: false},
        {action: 'Buy Veggies', done: false},
        {action: 'Buy Drinks', done: false},
      ],
      newToDo: '',
    }
  }
  updateValue = (event) => {
    this.setState({newToDo: event.target.value})
  }
  newToDo = (event) => {
    this.setState({
      todoItems:[
        ...this.state.todoItems,
        {action: this.state.newToDo, done:false}
      ]
    })
  }
  toogleDone = (todo) => 
  this.setState({
    todoItems: this.state.todoItems.map((item)=>
    item.action === todo.action ? { ...item, done : !item.done} : item
    ),
  })
  todoRows = () => 
    this.state.todoItems.map((item)=>(
      <tr key = {item.action}>
        <td>{item.action}</td>
        <td>
          <input type='checkbox' checked = {item.done} onChange = {()=> this.toogleDone(item)}></input>
        </td>
      </tr>
    ))
  render = () => (
    <div className = 'container'>
      <div className = 'row'>
        <div className='col-12'>
          <h2 className='bg-primary text-white text-center p2'>
            {this.state.userName} To Do List
          </h2>
        </div>
        <div className='col-12'>
          <input className='from-control' value = {this.state.newToDo} onChange={this.updateValue}></input>
          <button className='btn btn-primary' onClick = {this.newToDo}>Add</button>
        </div>
        {/* <button className='btn btn-primary' onClick = {this.newToDo}>Add</button> */}
        <div className='col-12'>
          <table className='table'>
            <thead>
              <tr>
                <th>
                  Task
                </th>
                <th>Complete</th>
              </tr>
            </thead>
            <tbody>
              {this.todoRows()}
            </tbody>

          </table>

        </div>
      </div>
  
    </div>
  )
}

