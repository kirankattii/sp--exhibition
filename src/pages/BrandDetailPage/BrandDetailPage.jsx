import React, { useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./BrandDetailPage.module.css";
import { exhibitionGallery } from "../../assets/assets";
import ImageModal from "../../components/ ImageModal/ ImageModal";
import Gallery2 from "../../components/Gallery2";

const BrandDetailPage = () => {
  const { name } = useParams();
  const brand = exhibitionGallery.find(
    (b) => b.name === decodeURIComponent(name)
  );

  const [modalImg, setModalImg] = useState(null);

  if (!brand) return <div>Brand not found</div>;

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>{brand.name}</h1>
      <div className={styles.gallery}>
        {/* {brand.images.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`${brand.name}-${idx}`}
            className={styles.image}
            onClick={() => setModalImg(img)}
          />
        ))} */}
        <Gallery2 images2={brand.images}  />
      </div>
      {modalImg && <ImageModal img={modalImg} onClose={() => setModalImg(null)} />}
    </div>
  );
};

export default BrandDetailPage;
