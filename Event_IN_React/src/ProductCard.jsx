// export default function productCard({products , addToCart}){
//     return (
//         <div  style={{border:"1px solid black", margin:"20px", textAlign:"center"}}  >
//             <img style={{height:"120px" , width:"150px", margin:"15px"}} src={products.image} alt={products.name} />
//             <h4>{products.name}</h4>
//             <p>{products.price}</p>
//             <div>   
//             <button style={{color:"black", margin:"10px"}} onClick={()=>addToCart(products)}>Add to Cart</button>
            
//             </div>

            
//         </div>
//     )
// }

export default function ProductCard({ product, addToCart }) {
  return (
    <div style={{ border: "1px solid black", margin: "20px", textAlign: "center" }}>
      <img
        style={{ height: "120px", width: "150px", margin: "15px" }}
        src={product.image}
        alt={product.name}
      />
      <h4>{product.name}</h4>
      <p>₹{product.price}</p>

      <button onClick={() => addToCart(product)}>
        Add to Cart
      </button>
    </div>
  );
}