import React, { useState } from 'react';

function FoodAdd(props) {
  //!----------------Props -----------------
  const { addFoodList } = props;
  //!----------------Estados -----------------
  const [name, setName] = useState(' ');
  const [calories, setCalories] = useState(0);
  const [image, setImage] = useState(' ');

  //!----------------Submit -----------------
  const addFood = (event) => {
    event.preventDefault();
    let newFood = {
      name,
      calories,
      image,
    };
    addFoodList(newFood);
    console.log(newFood);
  };

  //!----------------nameChange -----------------

  const handleChangeName = (event) => {
    setName(event.target.value);
  };
  //!----------------CaloriesChange -----------------
  const handleChangeCalories = (event) => {
    setCalories(event.target.value);
  };
  //!----------------imageChange -----------------
  const handleChangeImage = (event) => {
    setImage(event.target.value);
    console.log();
  };

  //!----------------Render -----------------
  return (
    <div>
      <form onSubmit={addFood}>
        <label htmlFor="name">Nombre:</label>
        <input type="text" name="name" onChange={handleChangeName} />
        <label htmlFor="name">Calorias:</label>
        <input type="number" name="name" onChange={handleChangeCalories} />
        <label htmlFor="name">Imagen:</label>
        <input type="text" name="name" onChange={handleChangeImage} />
        <button>Añadir Comida</button>
      </form>
    </div>
  );
}

export default FoodAdd;
