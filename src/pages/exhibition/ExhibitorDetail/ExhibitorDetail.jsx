import React from 'react';
import { useParams } from 'react-router-dom';
import { exhibitionGallery } from '../../../assets/assets';
import styles from './ExhibitorDetail.module.css';
import Gallery2 from '../../../components/Gallery2';

const ExhibitorDetail = () => {
  const { name } = useParams();
  const exhibitor = exhibitionGallery.find(ex => ex.name === decodeURIComponent(name));

  if (!exhibitor) return <div>Exhibitor not found</div>;

  return (
    <div className={styles.exhibitorDetail}>
      <div className={styles.header}>
        <h1 className={styles.exhibitorName}>{exhibitor.name}</h1>
        {exhibitor.logo && (
          <img src={exhibitor.logo} alt={`${exhibitor.name} logo`} className={styles.logo} />
        )}
      </div>
      <p className={styles.description}>{exhibitor.description}</p>
      <div className={styles.imageGallery}>

        <Gallery2 images2={exhibitor.images} />

      </div>

    </div>
  );
};

export default ExhibitorDetail;
