import React, { useState } from 'react';
import FoodAdd from '../Components/FoodAdd';
import Search from '../Components/Search';
import foods from '../foods.json';

function Foods() {
  //!----------------Estados -----------------
  const [allFoods, setAllFoods] = useState(foods); //Renderizar todas las comidas del array
  const [showForm, setShowForm] = useState(true); //hace que aparezca el formulario de insertar comida
  const [searchArr, setSearchArr] = useState(foods); //Para realizar la busqueda
  const [qty, setQty] = useState(0);

  //!----------------Añadir comida -----------------
  const addFoodList = (foodToAdd) => {
    console.log(foodToAdd);
    setAllFoods([foodToAdd, ...allFoods]);
  };

  //!----------------Oculta formulario -----------------
  const handleShowForm = () => setShowForm(!showForm);

  //!----------------Realizar la busqueda -----------------
  const searchFood = (searching) => {
    //Hacemos el filter de allProducts pq ahí estan incluidos tambien los productos que añadimos
    const filterProduct = allFoods.filter((eachProduct) => {
      return eachProduct.name.toUpperCase().includes(searching.toUpperCase());
    });

    setSearchArr(filterProduct);
  };
  //!---------------- handleAddQty-----------------
  const handleAddQty = () => {
    const newQty = searchArr.reduce((acc, e) => {
      return acc + e.quantity + 1;
    }, 0);
    console.log(newQty);
    setQty(newQty);
  };

  //!----------------Render -----------------
  return (
    <div>
      <button onClick={handleShowForm}>Ver formulario</button>
      <br />
      <br />
      {showForm === true && <FoodAdd addFoodList={addFoodList} />}
      <hr />
      <br />
      <Search searchFood={searchFood} />
      <br />
      <br />
      <hr />

      {searchArr.map((eachFood, i) => {
        //Renderizamos la array filtrada
        return (
          <div className="foods" key={eachFood.name + i}>
            <img src={eachFood.image} alt="" width="100px" />
            <p>
              <strong>{eachFood.name}</strong>
              <small>{eachFood.calories}</small>
            </p>
            <input type="number" value={qty} />
            <button onClick={handleAddQty}>+</button>
          </div>
        );
      })}
    </div>
  );
}

export default Foods;
