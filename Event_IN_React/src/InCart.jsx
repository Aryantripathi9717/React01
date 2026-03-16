// export default function InCart({products, removeCart}){
//     return (
//         <div>
//             <div  style={{border:"1px solid black", margin:"20px",  textAlign:"center",}}  >
//             <img style={{height:"140px" , width:"150px", margin:"15px"}} src={products.image} alt={products.name} />
//             <h4>{products.name}</h4>
//             <p>{products.price}</p>
//             <div>
//             <button style={{color:"black"}} onClick={()=>removeCart(products)}>Add to Cart</button>
            
//             </div>

            
//         </div>
//         </div>
//     )
// }

export default function InCart({ product, removeCart }) {
  return (
    <div style={{ border: "1px solid black", margin: "20px", textAlign: "center" }}>
      <img
        style={{ height: "120px", width: "150px", margin: "15px" }}
        src={product.image}
        alt={product.name}
      />
      <h4>{product.name}</h4>
      <p>₹{product.price}</p>

      <button onClick={() => removeCart(product.id)}>
        Remove from Cart
      </button>
    </div>
  );
}