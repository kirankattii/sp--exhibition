// import { Link } from "react-router-dom";
// import { assets } from "../../assets/assets";
// import styles from "./navbar.module.css";
// import { MediaNav2 } from "./mediaNav2";

// const Navbar = () => {
//   return (
//     <div className={styles.container}>
//       <nav>
//         <img src={assets.new_logo2} alt="" />
//         <ul>
//           <li>
//             <Link to={"/"}>HOME</Link>
//           </li>
//           <li>
//             <Link to={"/about-us"}>ABOUT</Link>
//           </li>
//           <li>
//             <Link to={"/clients"}>CLIENT PROJECT</Link>
//           </li>
//           <li>
//             <Link to={"/gallary"}>GALLERY</Link>
//           </li>

//           <li>
//             <Link to={"/contact"}>CONTACT</Link>
//           </li>
//         </ul>
//       </nav>
//       <div className={styles.mediaNav}>
//         <img src={assets.new_logo2} alt="" />
//         <MediaNav2 />
//       </div>
//     </div>
//   );
// };

// export default Navbar;



import { NavLink } from "react-router-dom";
import { assets } from "../../assets/assets";
import styles from "./navbar.module.css";
import { MediaNav2 } from "./mediaNav2";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <nav>
        <img src={assets.new_logo2} alt="" />
        <ul>
          <li>
            <NavLink to="/" className={({ isActive }) => isActive ? styles.active : ""}>HOME</NavLink>
          </li>
          <li>
            <NavLink to="/about-us" className={({ isActive }) => isActive ? styles.active : ""}>ABOUT</NavLink>
          </li>
          <li>
            <NavLink to="/clients" className={({ isActive }) => isActive ? styles.active : ""}>CLIENT PROJECT</NavLink>
          </li>
          <li>
            <NavLink to="/gallary" className={({ isActive }) => isActive ? styles.active : ""}>GALLERY</NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={({ isActive }) => isActive ? styles.active : ""}>CONTACT</NavLink>
          </li>
        </ul>
      </nav>
      <div className={styles.mediaNav}>
        <img src={assets.new_logo2} alt="" />
        <MediaNav2 />
      </div>
    </div>
  );
};

export default Navbar;
