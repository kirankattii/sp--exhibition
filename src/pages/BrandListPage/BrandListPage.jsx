// import React from "react";
// import styles from "./BrandListPage.module.css";
// import { useNavigate } from "react-router-dom";
// import { exhibitionGallery } from "../../assets/assets";

// const BrandListPage = () => {
//   const navigate = useNavigate();

//   return (
//     <div className={styles.container}>
//       <h1 className={styles.heading}>Our Brands</h1>
//       <div className={styles.grid}>
//         {exhibitionGallery.map((brand, index) => (
//           <div
//             key={index}
//             className={styles.card}
//             onClick={() => navigate(`/brand/${encodeURIComponent(brand.name)}`)}
//           >
//             {brand.logo ? (
//               <img src={brand.logo} alt={brand.name} className={styles.logo} />
//             ) : (
//               <div className={styles.noLogo}>No Logo</div>
//             )}
//             <p className={styles.name}>{brand.name}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default BrandListPage;




import React from "react";
import styles from "./BrandListPage.module.css";
import { useNavigate } from "react-router-dom";
import { exhibitionGallery } from "../../assets/assets";

const BrandListPage = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Our Clients</h1>
      <div className={styles.grid}>
        {exhibitionGallery.map((brand, index) => (
          <div
            key={index}
            className={styles.card}
            onClick={() => navigate(`/brand/${encodeURIComponent(brand.name)}`)}
          >
            {brand.logo ? (
              <img src={brand.logo} alt={brand.name} className={styles.logo} />
            ) : (
              <div className={styles.noLogo}>No Logo</div>
            )}
            <p className={styles.name}>{brand.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandListPage;
