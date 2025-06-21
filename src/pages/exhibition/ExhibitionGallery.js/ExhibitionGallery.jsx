


// import React from 'react';
// import { Link } from 'react-router-dom';
// import { exhibitionGallery } from '../../../assets/assets';
// import styles from './ExhibitionGallery.module.css';

// const ExhibitionGallery = () => {
//   return (
//     <div className={styles.galleryGrid}>
//       {exhibitionGallery.map((exhibitor, index) => (
//         <Link to={`/exhibitor/${exhibitor.name}`} key={index} className={styles.exhibitorLink}>
//           <div className={styles.exhibitorCard}>
//             <div className={styles.logoContainer}>
//               {exhibitor.logo ? (
//                 <img src={exhibitor.logo} alt={`${exhibitor.name} logo`} className={styles.logo} />
//               ) : exhibitor.images.length > 0 ? (
//                 <img src={exhibitor.images[0]} alt={`${exhibitor.name} first image`} className={styles.logo} />
//               ) : (
//                 <div className={styles.placeholderLogo}>{exhibitor.name[0]}</div>
//               )}
//               {exhibitor.images.length > 0 && (
//                 <img
//                   src={exhibitor.images[0]}
//                   alt={`${exhibitor.name} first exhibition image`}
//                   className={styles.hoverImage}
//                 />
//               )}
//             </div>
//             <p className={styles.exhibitorName}>{exhibitor.name}</p>
//           </div>
//         </Link>
//       ))}
//     </div>
//   );
// };

// export default ExhibitionGallery;




import React, { useMemo, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { exhibitionGallery } from '../../../assets/assets';
import styles from './ExhibitionGallery.module.css';

const ExhibitorCard = React.memo(({ exhibitor }) => {
  const logoElement = useMemo(() => {
    if (exhibitor.logo) {
      return <img src={exhibitor.logo} alt={`${exhibitor.name} logo`} className={styles.logo} />;
    } else if (exhibitor.images.length > 0) {
      return <img src={exhibitor.images[0]} alt={`${exhibitor.name} first image`} className={styles.logo} />;
    } else {
      return <div className={styles.placeholderLogo}>{exhibitor.name[0]}</div>;
    }
  }, [exhibitor.logo, exhibitor.images, exhibitor.name]);

  return (
    <div>
      <Link to={`/exhibitor/${exhibitor.name}`} className={styles.exhibitorLink}>
        <div className={styles.exhibitorCard}>
          <div className={styles.logoContainer}>
            {logoElement}
            {exhibitor.images.length > 0 && (
              <img
                src={exhibitor.images[0]}
                alt={`${exhibitor.name} first exhibition image`}
                className={styles.hoverImage}
              />
            )}
          </div>
          <p className={styles.exhibitorName}>{exhibitor.name}</p>
        </div>
      </Link>
    </div>
  );
});

const ExhibitionGallery = () => {
  const renderExhibitorCard = useCallback((exhibitor, index) => (
    <ExhibitorCard key={index} exhibitor={exhibitor} />
  ), []);

  return (
    <div className={styles.exhibitionsContainer}>
      <h1>Our Exhibitions</h1>
      <div className={styles.galleryGrid}>
        {exhibitionGallery.map(renderExhibitorCard)}
      </div>
    </div>
  );
};

export default ExhibitionGallery;
