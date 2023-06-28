import React, { useState, useEffect } from 'react';
import '../App.css';

function CurrentLocation() {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);
        },
        (error) => {
          console.error(error);
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  }, []);

  return (
    <div>
      {latitude && longitude ? (
        <p className='findCurrentLocation'>
          Latitude: {latitude.toFixed(6)}, Longitude: {longitude.toFixed(6)}
        </p>
      ) : (
        <p className='findCurrentLocation'>Loading...</p>
      )}
    </div>
  );
}

export default CurrentLocation;