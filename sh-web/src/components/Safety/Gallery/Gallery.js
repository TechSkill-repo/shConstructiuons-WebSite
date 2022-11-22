import './Gallery.scss'

function Gallery() {
  return (
    <div className="gallery">
        <div className="heading">
            <p className="clip">WHAT WE DO</p>
            <h1>Gallery</h1></div>

        <div className="gallery-row">
            <div className="gallery-item">
                <img src="https://preview.codeless.co/bygge/default/wp-content/uploads/2021/06/port-1-min-740x490.jpeg" alt="gallery" />

            </div>
            <div className="gallery-item">
                <img src="https://preview.codeless.co/bygge/default/wp-content/uploads/2021/06/port-5-min-740x490.jpeg" alt="gallery" />
                
            </div>
            <div className="gallery-item">
                <img src="https://preview.codeless.co/bygge/default/wp-content/uploads/2021/06/port-4-min-1024x679.jpeg" alt="gallery" />
                
            </div>
        </div>
        <div className="gallery-row">
            <div className="gallery-item">
                <img src="https://preview.codeless.co/bygge/default/wp-content/uploads/2021/06/port-2-min-740x490.jpeg" alt="gallery" />

            </div>
            <div className="gallery-item">
                <img src="https://preview.codeless.co/bygge/default/wp-content/uploads/2021/06/port-1-min-740x490.jpeg" alt="gallery" />
                
            </div>
            <div className="gallery-item">
                <img src="https://preview.codeless.co/bygge/default/wp-content/uploads/2021/06/port-3-min-740x490.jpeg" alt="gallery" />
                
            </div>
        </div>
    </div>
  )
}

export default Gallery