import LightGallery from "lightgallery/react"
import "./gallery.css"
// import styles
import "lightgallery/css/lightgallery.css"
import "lightgallery/css/lg-zoom.css"
import "lightgallery/css/lg-thumbnail.css"

// import plugins if you need
import lgThumbnail from "lightgallery/plugins/thumbnail"
import lgZoom from "lightgallery/plugins/zoom"

function Gallery({ images }) {
	const onInit = () => {
		console.log("lightGallery has been initialized")
	}
	return (
		<div className="App">
			<LightGallery
				onInit={onInit}
				speed={500}
				plugins={[lgThumbnail, lgZoom]}
			>
				{images.map((img, index) => (
					<a href={img}>
						<img
							alt=""
							src={img}
						/>
					</a>
				))}
			</LightGallery>
		</div>
	)
}

export default Gallery
