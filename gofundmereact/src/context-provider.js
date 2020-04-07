import React from "react";
import axios from "axios";
//import AppContext from "./context";
import { produce } from "immer";
import Welcome from './Welcome.js';


/** The context provider for our app */
export default class AppProvider extends React.Component {
//   constructor(props) {
//     super(props);
//     this.actions = {
//       addToCart: this.addToCart,
//       removeFromCart: this.removeFromCart,
//       getCartTotal: this.getCartTotal,
//       clearCart: this.clearCart
//     };
//     this.state = {
//       categories: [],
//       products: [],
//       cart: {}, //dictionary bc it maps id to quanitty,
//       cartTotal: 0
//     };
//   }
//   addToCart = pid => {
//     //get current quantity  from this.state.cart
//     //const qty = this.state.cart[pid]
//     //set the new cart
//     this.setState(state =>
//       produce(state, draft => {
//         if (draft.cart[pid]) {
//           const qty = draft.cart[pid];
//           draft.cart[pid] = qty + 1;
//         } else {
//           draft.cart[pid] = 1;
//         }
//         draft.cartTotal += 1;
//       })
//     );
//   };

//   removeFromCart = pid => {
//     this.setState(state =>
//       produce(state, draft => {
//         //delete entire key
//         let counter = parseInt(draft.cart[pid]);
//         console.log(draft.cart[pid]);
//         delete draft.cart[pid];
//         draft.cartTotal = draft.cartTotal - counter;
//       })
//     );
//   };

//   getCartTotal = () => {
//     //loop through cart
//     let cartTotal = 0;

//     Object.entries(this.state.cart).forEach(([pid, qty]) => {
//       const item = this.state.products.find(p => p.id === parseInt(pid));
//       cartTotal += parseInt(item.price) * parseInt(qty);
//     });

//     return cartTotal;
//   };

//   clearCart = () => {
//     Object.entries(this.state.cart).forEach(([pid]) => {
//       this.removeFromCart(pid);
//     });
//   };

  

  render() {
    return (
    //   <AppContext.Provider value={{ ...this.state, ...this.actions }}>
        <Welcome />
      /* </AppContext.Provider>
    );
  } */

//   async componentDidMount() {
//     const resp = await axios.get("http://localhost:8000/api/category/");
//     const resp2 = await axios.get("http://localhost:8000/api/product/");
//     this.setState({
//       ...this.state,
//       categories: resp.data,
//       products: resp2.data
//     });
//   }
    )}}