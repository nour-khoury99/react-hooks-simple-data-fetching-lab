import React, { useEffect, useState } from 'react';

const API_URL = "https://dog.ceo/api/breeds/image/random"


function FoxImage() {
  const [image, setImage] = useState([])
  const [isLoaded,setIsLoaded] = useState(false)
  
  useEffect(() => {
      fetch(API_URL)
        .then(r => r.json())
        .then(data => {
            setImage(data.dog);
            setIsLoaded(true)
        });


  }, []);

  if (!isLoaded) return <p>Loading .....</p>

  
  return (
    <div>
      
      <img src={image} alt="Random Fox" />
    </div>
  );
}

export default FoxImage