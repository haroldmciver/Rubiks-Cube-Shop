import React from "react";

function MenuItem({ image, name, price }) {
  return (
    <div className="menuItem">
      <div style={{ backgroundImage: `url(${image})` }}> </div>
      <h1> {name} </h1>
      <p> ${price} </p> 
      <button className="addToCartBttn">
        Add To Cart
      </button>
    </div>
  );
}

export default MenuItem;

// import React, { useContext } from "react";
// import { ShopContext } from "../context/shop-context";

// export const Product = (props) => {
//   const { id, name, price, image } = props.data;
//   const { addToCart, cartItems } = useContext(ShopContext);

//   const cartItemCount = cartItems[id];

//   return (
//     <div className="product">
//       <img src={image} />
//       <div className="description">
//         <p>
//           <b>{name}</b>
//         </p>
//         <p> ${price}</p>
//       </div>
//       <button className="addToCartBttn" onClick={() => addToCart(id)}>
//         Add To Cart {cartItemCount > 0 && <> ({cartItemCount})</>}
//       </button>
//     </div>
//   );
// };
// export default Product;
