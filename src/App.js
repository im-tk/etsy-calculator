import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      productPrice: 0,
      productCost: 0,
      shippingPrice: 0,
      shippingCost: 0, 
    };

    this.handleProductPrice = this.handleProductPrice.bind(this);
    this.handleProductCost = this.handleProductCost.bind(this);
    this.handleShippingPrice = this.handleShippingPrice.bind(this);
    this.handleShippingCost = this.handleShippingCost.bind(this);
    this.getNetProfit = this.getNetProfit.bind(this);
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

  getTotalFees() {
    return (this.state.productPrice + this.state.shippingPrice) * 0.05 //transaction fee
      + ((this.state.productPrice + this.state.shippingPrice) * 0.03 + 0.25) // 0.34 Payment processing fee
      + 0.20; // relisting fee
  }

  getNetProfit() {
    return (this.state.productPrice + this.state.shippingPrice) // 2 + 1
      - (this.state.productCost + this.state.shippingCost) // 0.16 + 1 Seller Costs
      - this.getTotalFees();
  }

  getProfitMargin() {
    return;
  }

  render() {
    return (
      <div className="App">
        <h1>Etsy Calculator</h1>
        <h3>Market Price</h3>
        <div>Product Price: <input onChange={this.handleProductPrice} /> </div>
        <div>Shipping Price: <input onChange={this.handleShippingPrice} /></div>

        <h3>Seller's Costs</h3>
        <div>Product Price: <input onChange={this.handleProductCost} /> </div>
        <div>Shipping Price: <input onChange={this.handleShippingCost} /></div>

        <h3>Breakdown</h3>
        <div>Total Etsy Fees: {this.getTotalFees()}</div>
        <div>Net Profit: {this.getNetProfit()}</div>
        <div>Profit Margin: {}%</div>
      </div>
    );
  }
}

export default App;


/*


5% of fee
5% of shipping
0.20 relisting fee

reverse calculator
if you're looking to make X profit per product
//gets markup %
*/