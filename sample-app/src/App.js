import './App.css';
import { useEffect, useRef, useState } from 'react';
import CharacterPoints from './components/CharacterPoints';
import TodoList from './components/TodoList';
import ToggleMessage from './components/ToggleMessage';
import ImageGallery from './components/ImageGallery';
import reactImg from './assets/react-core-concepts.png';
import compImg from './assets/components.png';
import ImageGalleryUpdated from './components/ImageGalleryUpdated';
import Username from './components/Username';
import GroceryApp from './components/GroceryApp';
import Focus from './components/Focus';
import LogoutWrapper from './components/LogoutWrapper';
import VideoPlayer from './components/VideoPlayer';

const images = [
  reactImg,
  compImg,
  reactImg
];

const FocusableInput = ({shouldFocus}) => {
  const inputRef = useRef(null);
  useEffect(() => {
    if (shouldFocus && inputRef.current) {
      inputRef.current.focus();
    }
  }, [shouldFocus]);

  return <input ref={inputRef} />;
}

function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <div className="App">
      <FocusableInput shouldFocus={true} />
      <CharacterPoints characters={['John', 'Sarah', 'Alice']} totalPoints={15} />
      <TodoList />
      <ToggleMessage/>
      <ImageGallery images={images} />
      <ImageGalleryUpdated images={images} />
      <Username initialName="John Doe" />
      <GroceryApp />
      <Focus />

      <LogoutWrapper showWhenLoggedOut={true}>
        <h1>Welcome to the protected content!</h1>
      </LogoutWrapper>

      <button onClick={() => setIsPlaying(!isPlaying)}>{isPlaying ? 'Pause' : 'Play'}</button>
      <VideoPlayer isPlaying={isPlaying} src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"/>
    </div>
  );
}

export default App;
