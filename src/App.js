import React from 'react';

const UserItem = (props) => {
   return (
       <div>
           <li>
            {props.item.value} 
            <button onClick={() => props.handleDelete(props.item)}>X</button>
            <button onClick={() => props.handleUpdate(props.item)}>Update</button>
            </li>
       </div>
   )
}
const UserList = (props) => {
   return (
       <ul>
          {props.user.map(item => <UserItem key={item} item={item} handleDelete={props.handleDelete} handleUpdate={props.handleUpdate}/>)} 
       </ul>
   )
}

class Form extends React.Component{
    state={
        inputValue: ''
    }
    handleChange = (e) => {
       this.setState({inputValue: e.target.value});
    }
    handleSubmit = (e) => {
      e.preventDefault();
      const newValue = this.state.inputValue;
      console.log(newValue)
      this.setState({inputValue: ''});
      this.props.handleSubmit(newValue);
    }
    handleUpdate = (item) => {
      console.log(item);
      console.log(this.state)
    }
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <input value={this.state.inputValue} onChange={this.handleChange} handleUpdate={this.handleUpdate}/>
            </form>
        )
    }
}
class App extends React.Component {
    state={
        user: []
    }
    handleSubmit = (value) => {
        const item = {
            id: `${Math.floor(Math.random() * 20)}`,
            value,
        }
        const newUsers = [...this.state.user, item]
        this.setState({user: newUsers});
        console.log(this.state.user)
    }

    handleDelete = (element) => {
      const deleteItem = this.state.user.filter(item => element.id !== item.id)
      console.log(deleteItem);
      this.setState({user: deleteItem});
    }
    
    render() {
        return(
            <div>
            <Form handleSubmit={this.handleSubmit}/>
            <UserList user={this.state.user} handleDelete={this.handleDelete} />
            </div>
        )
    }
} 


export default App;