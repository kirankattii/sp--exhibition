import { assets } from "../../assets/assets";
import styles from "./footer.module.css";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.outerContainer}>
      <div className={styles.container}>
        <div className={styles.left}>
          <img src={assets.new_logo2} alt="" />
          <ul>
            <li>
              <Link to={""}>
                {" "}
                <FaFacebookF />
              </Link>
            </li>
            <li>
              <Link to={"https://www.instagram.com/sp.exhibition/"}>
                <FaInstagram />
              </Link>
            </li>
            <li>
              <Link to={"https://www.linkedin.com/in/hitesh-jain-516527133/"}>
                <FaLinkedinIn />
              </Link>
            </li>
          </ul>
        </div>
        <ul className={styles.middle}>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/about"}>About</Link>
          </li>
          <li>
            <Link to={"/gallery"}>Gallery</Link>
          </li>
          <li>
            <Link to={"/clients"}>Client Projects</Link>{" "}
          </li>
          <li>
            <Link to={"/contact"}>Contact</Link>
          </li>
        </ul>
        <ul className={styles.right}>
          <li>
            <p className={styles.footerheading}>Email:</p>
            <a href="">spexhibitionservicesllp@gmail.com</a>
          </li>
          <li>
            <p className={styles.footerheading}>Phone</p>
            <div>
              <a href="">+91 7045380158</a>
              <a href="">+91 9820229534</a>
            </div>
          </li>
          <li>
            <p className={styles.footerheading}>Address</p>
            <p>
              1) 301, Building No-1, 3RD Floor, Kalpaka Apartment, Sidhart
              Nagar, Goregaon(W), Mumbai-400062, Maharashtra, India
            </p>
            <p style={{ marginTop: "10px" }}>
              2) # 242, 3rd floor, 53rd cross, 10 th main, 4th block
              Rajajinagar, OPP. Ram Mandir, Bangalore 560010
            </p>
          </li>
        </ul>
      </div>
      <div className={styles.copyright}>
        <p>COPYRIGHT © 2025 SP Exhibition Services LLP, All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
