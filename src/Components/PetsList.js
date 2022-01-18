import { useState } from "react";
import PetItem from "./PetItem";
import SearchBar from "./SearchBar.js";

export default function PetsList(petData) {
  const [query, setQuery] = useState("");
  const [type, setType] = useState("");

  const pets = petData.pets
    .filter(
      (pet) =>
        pet.name.toLowerCase().includes(query.toLocaleLowerCase()) &&
        pet.type.includes(type)
    )
    .map((pet) => <PetItem key={pet.id} pet={pet} />);

  const onChangeType = (event) => {
    setType(event.target.value);
  };

  const onChangeSearch = (event) => {
    setQuery(event.target.value);
  };

  return (
    <section id="doctors" class="doctor-section pt-140">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-xxl-5 col-xl-6 col-lg-7">
            <div class="section-title text-center mb-30">
              <h1 class="mb-25 wow fadeInUp" data-wow-delay=".2s">
                Fur-ends
              </h1>
              <SearchBar changeFunc={onChangeSearch} />
              <br />
              Type:
              <select class="form-select" onChange={onChangeType}>
                <option value="" selected>
                  All
                </option>
                <option value="Cat">Cat</option>
                <option value="Dog">Dog</option>
                <option value="Rabbit">Rabbit</option>
              </select>
            </div>
          </div>
        </div>

        <div class="row justify-content-center">{pets}</div>
      </div>
    </section>
  );
}
