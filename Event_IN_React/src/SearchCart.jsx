import { useState } from "react";

export default function SearchCart({ products, addToCart }) {
  const [searchItem, setSearchItem] = useState("");

  const filteredProduct = products.find(
    (product) =>
      product.name.toLowerCase() === searchItem.toLowerCase()
  );

  return (
    <div style={{ margin: "20px" }}>
      <input
        type="text"
        placeholder="Search Item"
        value={searchItem}
        onChange={(e) => setSearchItem(e.target.value)}
      />

      {filteredProduct && (
        <div style={{ border: "1px solid black", margin: "20px" }}>
          <img
            src={filteredProduct.image}
            alt={filteredProduct.name}
            width="150"
          />
          <h4>{filteredProduct.name}</h4>
          <p>₹{filteredProduct.price}</p>

          <button onClick={() => addToCart(filteredProduct)}>
            Add to Cart
          </button>
        </div>
      )}
    </div>
  );
}