//import { useState, useEffect } from 'react';
import Places from './Places.jsx';
import ErrorMsg from './Error.jsx';
import { sortPlacesByDistance } from '../loc.js';
import { fetchAvailablePlaces } from '../http.js';
import { useFetch } from '../custom-hooks/useFetch.js';

async function fetchSortedPlaces() {
  const places = await fetchAvailablePlaces();

  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition((position) => {
      const sortedPlaces = sortPlacesByDistance(
        places, 
        position.coords.latitude,
        position.coords.longitude
      )
      resolve(sortedPlaces);
    });    
  })
}

export default function AvailablePlaces({ onSelectPlace }) {
  //const [isFetching, setIsFetching] = useState(false);
  //const [availablePlaces, setAvailablePlaces] = useState([]);
  //const [error, setError] = useState();
  //Types of http request that can be sent
  //using in-built fetch(url) function which is provided by browser
  //Sending fetch request directly will result in an infinite loop of component rendering
  //as we are calling setAvailablePlaces call inside the callback(then)
  //We can use useEffect to avoid this infinite loop
  /*useEffect(() => {
    fetch('http://localhost:3000/places').then((response) => {
      return response.json();
    }).then((data) => {
      setAvailablePlaces(data.places);
    });
  }, [])*/
  /*useEffect(() => {
    setIsFetching(true);
    async function fetchPlaces() {
      try {
        const places = await fetchAvailablePlaces();

        //Sorting near by places by location which was already done in another project
        navigator.geolocation.getCurrentPosition((position) => {
          const sortedPlaces = sortPlacesByDistance(
            places, 
            position.coords.latitude,
            position.coords.longitude
          )
          setAvailablePlaces(sortedPlaces);
          setIsFetching(false);
        });
        
      } catch(error) {
        setError({message: error.message || 'Could not fetch. Please try again'});
        setIsFetching(false);
      } 
    }
    fetchPlaces();
  }, []);*/
  const {
    isFetching, 
    error,
    data: availablePlaces   
  } = useFetch(fetchSortedPlaces, []);

  if (error) {
    return <ErrorMsg title="An error occured!" message={error.message}></ErrorMsg>
  }

  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      isLoading={isFetching}
      loadingText="Fetching places..."
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
