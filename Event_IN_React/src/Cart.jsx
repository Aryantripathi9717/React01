// import productCard from "./ProductCard"
// import InCart from "./InCart"

// export default function Cart({amount,cart,removeCart, product}){
// return (
//     <div>
//         <h2>Your Cart : </h2>
//         {product.map((product)=>
//         cart.indexOf(product.id) !==-1 &&
//                         <InCart key={product.id}
//                         products={product}
//                         removeCart={removeCart}
//                         />
//                     )}
//         <button onClick={()=>removeCart()}>Remove from Cart</button>
//         <h3>Total Amount : {amount}</h3>
//     </div>
// )
// }

import InCart from "./InCart";

export default function Cart({ amount, cart, removeCart }) {
  return (

    <div>
      <h2>Your Cart:</h2>
        <div style={{display:"flex", border:"1px solid green"}}>

      {cart.length === 0 && <p style={{marginLeft:"50px"}}>Cart is empty</p>}

      {cart.map((product) => (
        <InCart
          key={product.id}
          product={product}
          removeCart={removeCart}
        />
      ))}

      
    </div>
    <h3>Total Amount: ₹{amount}</h3>
    </div>
  );
}