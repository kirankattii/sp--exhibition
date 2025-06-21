import { assets } from "../../assets/assets";
import styles from "./about.module.css";

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.aboutContainer}>
        {/* <img
					src={assets.aboutUs}
					alt=""
					className={styles.img1}
				/> */}
        <img src={assets.homeImg13} alt="" className={styles.img1} />
        <img src={assets.interiorDesign13} alt="" className={styles.img2} />
        <div className={styles.content}>
          <div className={styles.heading}>
            <h1>About</h1>
            <p>SP Exhibition</p>
          </div>
          <div className={styles.paraContent}>
            <p>
              Welcome to SP Exhibition Services LLP, your trusted partner in
              exhibition For over 13 years, we have been at the forefront of
              constructing and designing stalls for exhibitions and shows,
              catering to jewellery brands and corporate sectors. Founded by Mr.
              Hitesh Jain, our company prides itself on delivering premium
              booths that showcase your products and drive business growth.
            </p>
            <p>
               At SP Exhibition Services LLP, we specialize in crafting bespoke
              stalls with meticulous attention to detail. Known for our
              commitment to excellence, we consistently exceed our clients
              expectations by delivering high-quality work on time . Our
              reputation extends across India and beyond, where we bring our
              expertise to international projects as well. We are AESDAC
              members.
            </p>
            <p>
            
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
