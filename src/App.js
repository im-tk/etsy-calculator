import React, { Component } from 'react';
import getTotalFees from './util/getTotalFees';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      productPrice: 0,
      productCost: 0,
      shippingPrice: 0,
      shippingCost: 0,
      netProfitReverse: 0,
    };

    this.handleProductPrice = this.handleProductPrice.bind(this);
    this.handleProductCost = this.handleProductCost.bind(this);
    this.handleShippingPrice = this.handleShippingPrice.bind(this);
    this.handleShippingCost = this.handleShippingCost.bind(this);
    this.handleNetProfitReverse = this.handleNetProfitReverse.bind(this);
  }

  handleProductPrice(e) {
    this.setState({ productPrice: Number(e.target.value) });
  }

  handleProductCost(e) {
    this.setState({ productCost: Number(e.target.value) });
  }

  handleShippingPrice(e) {
    this.setState({ shippingPrice: Number(e.target.value) });
  }

  handleShippingCost(e) {
    this.setState({ shippingCost: Number(e.target.value) });
  }

  handleNetProfitReverse(e) {
    this.setState({ netProfitReverse: Number(e.target.value) });
  }

  getNetProfit() {
    return this.state.productPrice + this.state.shippingPrice - this.state.productCost - this.state.shippingCost// - this.getTotalFees();
  }

  getNetProfitMargin() {
    return (this.getNetProfit() / this.state.productPrice) * 100;
  }

  getNetProfitReverse() {
    return this.state.netProfitReverse + 
    (this.state.netProfitReverse * 0.05) + //transaction fee
    0.20 + //listing fee
    (this.state.netProfitReverse * 0.03) + 0.25; //processing fee
  }

  render() {
    return (
      <div className="App">
        <h1>Etsy Calculator</h1>
        <h3>Product Info</h3>
        <div>Product Price: <input onChange={this.handleProductPrice} /> </div>
        <div>Shipping Price: <input onChange={this.handleShippingPrice} /></div>

        <h3>Seller's Costs</h3>
        <div>Product Cost: <input onChange={this.handleProductCost} /> </div>
        <div>Shipping Cost: <input onChange={this.handleShippingCost} /></div>

        <h3>Breakdown</h3>
        <div>Total Etsy Fees: {getTotalFees(this.state.productPrice, this.state.shippingPrice).toFixed(2)}</div>
        <div>Net Profit: {this.getNetProfit().toFixed(2)}</div>
        <div>Net Profit Margin: {this.getNetProfitMargin().toFixed(2)}%</div>

        <h3>Reverse Formula</h3>
        <div>Desired Net Profit: <input onChange={this.handleNetProfitReverse} /></div>
        <div>Set listing to ${this.getNetProfitReverse().toFixed(2)}</div>
      </div>
    );
  }
}

export default App;