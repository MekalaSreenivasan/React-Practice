import { useState } from "react";

export default function ImageGallery({ images }) {
    const [currentIndex, setCurrentIndex] = useState(0); // State to keep track of the current image index

    // Function to handle moving to the previous image
    const handlePrevious = () => {
      if (currentIndex > 0) {
        setCurrentIndex(currentIndex - 1);
      }
    };
  
    // Function to handle moving to the next image
    const handleNext = () => {
      if (currentIndex < images.length - 1) {
        setCurrentIndex(currentIndex + 1);
      }
    };
  
    return (
      <div>
        <button onClick={handlePrevious} disabled={currentIndex === 0}>
          Previous
        </button>
        <img src={images[currentIndex]} alt={`Image ${currentIndex + 1}`} />
        <button onClick={handleNext} disabled={currentIndex === images.length - 1}>
          Next
        </button>
      </div>
    );
}