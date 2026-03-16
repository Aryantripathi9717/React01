// import { useState } from "react";
// // import './App.css'
// import EventToDo from './EventToDo'
// import Counter from './Counter'
// import Search from "./Search";
// import Header from "./Header";
// // import ProductCard from "./ProductCard";
// import ProductList from "./ProductList";
// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       {/* <EventToDo name={'Aryan Tripathi'}/> */}
//       {/* <Counter/> */}
//       <Search/>
//     </>
//   )
// }

// export default App



// import { useState } from "react";
// import Search from "./Search";
// import Header from "./Header";
// import ProductList from "./ProductList";
// // import RemoveFromCart from "./RemoveFromCart";
// import Cart from "./Cart";
// import Address from "./Address";
// import SearchCart from "./SearchCart";
// function App() {
//   const [cart, setCart] = useState([]);
//   const [amount, setAmount] = useState(0);
  
//   const product = [
//     {id: 1,
//     name: "Laptop",
//     price: 56000,
//     image:
//       "https://www.bing.com/th/id/OIP.30y29wUXqS17aMfWTdQ7rQHaE8?w=277&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.4&pid=3.1&rm=2",
//  },{id: 2,
//     name: "Mobile",
//     price: 31000,
//     image:
//       "https://www.bing.com/th/id/OIP.lERrLKdl-yn0GkZPH3UsVAAAAA?w=152&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.4&pid=3.1&rm=2",
//  },{id: 3,
//     name: "KeyBoard",
//     price: 1000,
//     image:
//       "https://th.bing.com/th/id/OIP.BKRJH_sfReTg0SZ0YPnazwHaDt?w=274&h=180&c=7&r=0&o=7&dpr=1.4&pid=1.7&rm=3",
//  },{id: 4,
//     name: "Mouse",
//     price: 500,
//     image:
//       "https://www.bing.com/th/id/OIP.Ku5e5tNnhSv5Bqa4QrgpuwHaGC?w=224&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.4&pid=3.1&rm=2",
//  }
//  ];
//  function addToCart(product){
//   setCart([...cart,product])
//   setAmount(amount + product.price)
//  }

//  function removeCart(productId) {
//   setCart((prevCart) =>
//     prevCart.filter((item) => item.id !== productId)
//   );
// }

//   return (
//     <div style={{textAlign:"center"}}>
//       <Header cartCount = {cart.length} />
//       <SearchCart product ={product} />
//       <ProductList products={product} addToCart ={addToCart}/>
//       {/* <RemoveFromCart cart= {cart} product={product} removeCart={removeCart}/> */}
//       <Cart amount={amount} cart={cart} removeCart={removeCart} product={product}/>
//       <Address/>
//       {/* <Search/> */}
//     </div>
//   );
// }

// export default App;

import { useState } from "react";
import Header from "./Header";
import ProductList from "./ProductList";
import Cart from "./Cart";
import Address from "./Address";
import SearchCart from "./SearchCart";

function App() {
  const [cart, setCart] = useState([]);
  const [amount, setAmount] = useState(0);

  const products = [
    {
      id: 1,
      name: "Laptop",
      price: 56000,
      image: "https://www.bing.com/th/id/OIP.30y29wUXqS17aMfWTdQ7rQHaE8?w=277&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.4&pid=3.1&rm=2"
    },
    {
      id: 2,
      name: "Mobile",
      price: 31000,
      image: "https://www.bing.com/th/id/OIP.lERrLKdl-yn0GkZPH3UsVAAAAA?w=152&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.4&pid=3.1&rm=2"
    },
    {
      id: 3,
      name: "Keyboard",
      price: 1000,
      image: "https://th.bing.com/th/id/OIP.BKRJH_sfReTg0SZ0YPnazwHaDt?w=274&h=180&c=7&r=0&o=7&dpr=1.4&pid=1.7&rm=3"
    },
    {
      id: 4,
      name: "Mouse",
      price: 500,
      image: "https://www.bing.com/th/id/OIP.Ku5e5tNnhSv5Bqa4QrgpuwHaGC?w=224&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.4&pid=3.1&rm=2"
    }
  ];

  function addToCart(product) {
    setCart((prev) => [...prev, product]);
    setAmount((prev) => prev + product.price);
  }

  function removeCart(productId) {
    const item = cart.find((p) => p.id === productId);
    setCart((prev) => prev.filter((p) => p.id !== productId));

    if (item) {
      setAmount((prev) => prev - item.price);
    }
  }

  return (
    <div style={{ textAlign: "center" }}>
      <Header cartCount={cart.length} />

      <SearchCart 
        products={products}
        addToCart={addToCart}
      />

      <ProductList 
        products={products} 
        addToCart={addToCart}
      />

      <Cart 
        cart={cart} 
        removeCart={removeCart}
        amount={amount}
      />

      <Address />
    </div>
  );
}

export default App;
