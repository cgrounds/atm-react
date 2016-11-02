import React, { Component } from 'react';

export default class Account extends Component {
  constructor(){
    super();
    this.state = {
      balance: 0
    }
  }

  depositMoney(){
    this.setState({
      balance: this.state.balance + +this.refs.amountInput.value
    });
  }

  withdrawMoney(){
    this.setState({
      balance: this.state.balance + -this.refs.amountInput.value
    });
  }

  render() {


    return (
      <div className="account">
        <h2>{this.props.name}</h2>
        <div className="balance">{this.state.balance}</div>
        <input type="text" placeholder="enter an amount" ref="amountInput" />
        <input type="button" value="Deposit" onClick={(e) => this.depositMoney(e)} />
        <input type="button" value="Withdraw" onClick={(e) => this.withdrawMoney(e)} />
      </div>
    )
  }
}



// class Checking extends Component{
//   constructor(){
//     super();
//     this.state = {
//       balance: 0
//     }
//   }
//   render(){
//     return(
//       {this.props.balance.map((balance))}
//     )
//   }
// }
