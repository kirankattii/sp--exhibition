// import LightGallery from "lightgallery/react";
// import "./commingSoon.module.css";
// // import styles
// import "lightgallery/css/lightgallery.css";
// import "lightgallery/css/lg-zoom.css";
// import "lightgallery/css/lg-thumbnail.css";

// // import plugins if you need
// import lgThumbnail from "lightgallery/plugins/thumbnail";
// import lgZoom from "lightgallery/plugins/zoom";
// import { comming } from "../../assets/assets";
// import styles from "./commingSoon.module.css";

// function CommingSoon() {
//   const onInit = () => {
//     console.log("LightGallery has been initialized");
//   };

//   return (
//     <div className="App">
//       <div className={styles.commingSoon}>
//         <h1>Comming Soon</h1>
//         <LightGallery onInit={onInit} speed={500} plugins={[lgThumbnail, lgZoom]}>
//           {comming.map((img, index) => (
//             <a key={index} href={img.img} className={styles.imageContainer}>
//               <img alt={img.name} src={img.img} className={styles.image} />
//               <p className={styles.imageName}>{img.name}</p>
//             </a>
//           ))}
//         </LightGallery>
//       </div>
//     </div>
//   );
// }

// export default CommingSoon;


import LightGallery from "lightgallery/react";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import { comming } from "../../assets/assets";
import styles from "./commingSoon.module.css";

function CommingSoon() {
  const onInit = () => {
    console.log("LightGallery has been initialized");
  };

  return (
    <div className="App">
      <div className={styles.commingSoon}>
        <h1>Comming Soon</h1>
        <LightGallery onInit={onInit} speed={500} plugins={[lgThumbnail, lgZoom]}>
          {comming.map((img, index) => (
            <a key={index} href={img.img} data-sub-html={`<p class="lg-caption">${img.name}</p>`} className={styles.commingParent}>
              <img alt={img.name} src={img.img} className={styles.image} />
              <p className={styles.commingName}>{img.name}</p>
            </a>
          ))}
        </LightGallery>
      </div>
    </div>
  );
}

export default CommingSoon;
