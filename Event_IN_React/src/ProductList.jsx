// import ProductCard from "./ProductCard"

// export default function ProductList({products, addToCart}){
//     return (
//             <div style={{border:"1px solid black",display:"flex",padding:"2px", justifyContent:"space-between"}}>
//             {products.map((product)=>
//                 <ProductCard key={product.id}
//                 products={product}
//                 addToCart={addToCart}
//                 />
//             )}
//         </div>
//     )
// }

import ProductCard from "./ProductCard";

export default function ProductList({ products, addToCart }) {
  return (
    <div style={{ display: "flex", justifyContent: "space-around" }}>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          addToCart={addToCart}
        />
      ))}
    </div>
  );
}