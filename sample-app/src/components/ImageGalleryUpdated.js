import { useState, useEffect } from 'react';

export default function ImageGalleryUpdated({ images }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Handle keyboard navigation
    useEffect(() => {
      const handleKeyDown = (event) => {
        if (event.key === 'ArrowLeft') {
          handlePrevious();
        } else if (event.key === 'ArrowRight') {
          handleNext();
        }
      };
      window.addEventListener('keydown', handleKeyDown);
  
      // Cleanup event listener on component unmount
      return () => window.removeEventListener('keydown', handleKeyDown);
    }, [currentIndex]);
  
    // Handle moving to the previous image
    const handlePrevious = () => {
      setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };
  
    // Handle moving to the next image
    const handleNext = () => {
      setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };
  
    // Preload images for smoother transitions
    useEffect(() => {
      const nextIndex = (currentIndex + 1) % images.length;
      const prevIndex = (currentIndex - 1 + images.length) % images.length;
  
      const preloadNext = new Image();
      preloadNext.src = images[nextIndex];
  
      const preloadPrev = new Image();
      preloadPrev.src = images[prevIndex];
    }, [currentIndex, images]);
  
    return (
      <div style={styles.galleryContainer}>
        <button onClick={handlePrevious} style={styles.button}>
          Previous
        </button>
        <div style={styles.imageContainer}>
          <img src={images[currentIndex]} alt={`Image ${currentIndex + 1}`} style={styles.image} />
          <p style={styles.imageCounter}>
            {currentIndex + 1} of {images.length}
          </p>
        </div>
        <button onClick={handleNext} style={styles.button}>
          Next
        </button>
      </div>
    );
}
// Basic styles for the component
const styles = {
    galleryContainer: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      padding: '20px',
    },
    button: {
      margin: '10px',
      padding: '10px 20px',
      fontSize: '16px',
      cursor: 'pointer',
    },
    imageContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      marginBottom: '10px',
    },
    image: {
      width: '300px',
      height: '200px',
      objectFit: 'cover',
    },
    imageCounter: {
      marginTop: '10px',
      fontSize: '14px',
      color: '#555',
    },
  };
