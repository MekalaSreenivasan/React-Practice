import { useRef, useState, useCallback } from 'react';

import Places from './components/Places.jsx';
import Modal from './components/Modal.jsx';
import DeleteConfirmation from './components/DeleteConfirmation.jsx';
import logoImg from './assets/logo.png';
import AvailablePlaces from './components/AvailablePlaces.jsx';
import {updateUserPlaces, fetchSelectedPlaces} from './http.js';
import ErrorMsg from './components/Error.jsx';
import { useFetch } from './custom-hooks/useFetch.js';

function App() {
  const selectedPlace = useRef();

  //const [userPlaces, setUserPlaces] = useState([]);
  const [errorUpdating, setErrorUpdating] = useState();
  //const [isFetching, setIsFetching] = useState(false);
  //const [error, setError] = useState();

  const [modalIsOpen, setModalIsOpen] = useState(false);

  /*useEffect(() => {
    async function fetchPlaces() {
      setIsFetching(true);
      try {
        const selectedPlaces = await fetchSelectedPlaces();
        setUserPlaces(selectedPlaces);
      } catch(error) {
        setError({message: error.message || 'Failed to fetch selected place'});
      }
      setIsFetching(false);
    }
    fetchPlaces();
  }, []);*/
  //Custom hooks
  const {
    isFetching, 
    error,
    data: userPlaces, 
    setData: setUserPlaces,
    } = useFetch(fetchSelectedPlaces, []);

  function handleStartRemovePlace(place) {
    setModalIsOpen(true);
    selectedPlace.current = place;
  }

  function handleStopRemovePlace() {
    setModalIsOpen(false);
  }

  async function handleSelectPlace(selectedPlace) {
    //Update to backend can be called before calling UI state update
    //But the loading screen about API call for update has to be handled
    //await updateUserPlaces([selectedPlace, ...userPlaces]);
    setUserPlaces((prevPickedPlaces) => {
      if (!prevPickedPlaces) {
        prevPickedPlaces = [];
      }
      if (prevPickedPlaces.some((place) => place.id === selectedPlace.id)) {
        return prevPickedPlaces;
      }
      return [selectedPlace, ...prevPickedPlaces];
    });

    try {
      await updateUserPlaces([selectedPlace, ...userPlaces]);
    } catch(error) {
      setUserPlaces(userPlaces);
      setErrorUpdating({message: error.message || 'Failed to save selected place'});
    }
  }

  const handleRemovePlace = useCallback(async function handleRemovePlace() {
    setUserPlaces((prevPickedPlaces) =>
      prevPickedPlaces.filter((place) => place.id !== selectedPlace.current.id)
    );

    try {
      await updateUserPlaces(userPlaces.filter(place => place.id !== selectedPlace.current.id));
    } catch(error) {
      setUserPlaces(userPlaces);
      setErrorUpdating({message: error.message || 'Failed to delete place'});
    }

    setModalIsOpen(false);
  }, [userPlaces, setUserPlaces]);

  function handleError() {
    setErrorUpdating(null);
  }

  return (
    <>
      <Modal open={errorUpdating} onClose={handleError}>
        {errorUpdating && <ErrorMsg 
          title="Error Occured!" 
          message={errorUpdating.message}
          onConfirm={handleError} />}
      </Modal>
      <Modal open={modalIsOpen} onClose={handleStopRemovePlace}>
        <DeleteConfirmation
          onCancel={handleStopRemovePlace}
          onConfirm={handleRemovePlace}
        />
      </Modal>

      <header>
        <img src={logoImg} alt="Stylized globe" />
        <h1>PlacePicker</h1>
        <p>
          Create your personal collection of places you would like to visit or
          you have visited.
        </p>
      </header>
      <main>
        {error && <ErrorMsg title="An error occured!" message={error.message}></ErrorMsg>}
        {!error && <Places
          title="I'd like to visit ..."
          fallbackText="Select the places you would like to visit below."
          places={userPlaces}
          isLoading={isFetching}
          loadingText="Fetching selected places..."          
          onSelectPlace={handleStartRemovePlace}
        />}

        <AvailablePlaces onSelectPlace={handleSelectPlace} />
      </main>
    </>
  );
}

export default App;
