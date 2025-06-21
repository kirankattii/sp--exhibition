import { useNavigate } from "react-router-dom";
import { allExhibition, assets } from "../../assets/assets";
import styles from "./gallary.module.css";
import Gallery2 from "../../components/Gallery2";

const Gallary = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      <h1 className={styles.ourProject}>Our Projects</h1>
      <div className={styles.imgContainer}>
        {/* <div className={styles.exhibition}>
					<img
						src={assets.exhibitionDesign}
						alt=""
					/>
					<button onClick={() => navigate("/gallary/exhibitions")}>
						Exhibitions
					</button>
				</div> */}
        {/* <h1>Exhibitions</h1> */}
        <Gallery2 images2={allExhibition} />
      </div>
    </div>
  );
};

export default Gallary;
