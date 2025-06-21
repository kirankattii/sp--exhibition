import { Link } from "react-router-dom";
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
            <Link to={"/"}>HOME</Link>
          </li>
          <li>
            <Link to={"/about-us"}>ABOUT</Link>
          </li>
          <li>
            <Link to={"/clients"}>CLIENT PROJECT</Link>
          </li>
          <li>
            <Link to={"/gallary"}>GALLERY</Link>
          </li>

          <li>
            <Link to={"/contact"}>CONTACT</Link>
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
