import React, { useEffect, useState } from "react";
export default function PetItem(props) {
  
  const pet = props.pet;

  // petImage cannot be changed its constant with a default state defined in useState(....)
  // setPetImage is used in a function we create with whatever name to change the default value to whatever we want to
  const [petImage,setPetImage] = useState(pet.image);

  // The function below serves as the function that changes the image in the website
  const changePetImage = () => {setPetImage(pet.image2)}
  

  return (
    <div class="col-lg-4 col-md-8 col-sm-10">
      <div class="single-doctor">
        <img className="image" alt={pet.name} src={petImage} />
        <div class="content">
          <h3>{pet.name}</h3>
          <button onClick={changePetImage} type="button" class="btn btn-info">
            Pet
          </button>
        </div>
      </div>
    </div>
  );
}
