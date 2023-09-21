import React from "react";
import { MenuList } from "../helpers/MenuList";
import Product from "../components/MenuItem";
import "../styles/Menu.css";


function Menu() {
  return (
    <div className="menu">
      <h1 className="menuTitle">Rubik's Shop</h1>
      <div className="menuList">
        {MenuList.map((menuItem, key) => {
          return (
            <Product
              key={key}
              image={menuItem.image}
              name={menuItem.name}
              price={menuItem.price}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Menu;

// export const Shop = () => {
//   return (
//     <div className="shop">
//       <div className="shopTitle">
//         <h1>PedroTech Shop</h1>
//       </div>

//       <div className="products">
//         {MenuList.map((product) => (
//           <Product data={product} />
//         ))}
//       </div>
//     </div>
//   );
// };