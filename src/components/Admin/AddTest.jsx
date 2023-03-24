import React, { useState } from "react";
import axios from "axios";
import FormData from "form-data";

export default function AddTest() {
  const [carData, setCarData] = useState({
    name: "",
    year: "",
    color: "",
    price: "",
    driving: "",
    image: null,
    mainimage: "",
    secondimage: "",
    thirdimage: "",
    country: "",
    mileage: "",
    description: "",
    equipment: "",
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    const formData = new FormData();

    if (files) {
      formData.append("image", files[0]);
    }

    formData.append(name, value);

    setCarData((prevData) => ({
      ...prevData,
      [name]: files ? files[0] : value,
    }));
  };

  console.log(carData);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", carData.name);
    formData.append("year", carData.year);
    formData.append("color", carData.color);
    formData.append("price", carData.price);
    formData.append("driving", carData.driving);
    formData.append("image", carData.image);
    formData.append("mainimage", carData.mainimage);
    formData.append("secondimage", carData.secondimage);
    formData.append("thirdimage", carData.thirdimage);
    formData.append("country", carData.country);
    formData.append("mileage", carData.mileage);
    formData.append("description", carData.description);
    formData.append("equipment", carData.equipment);

    try {
      const response = await axios.post(
        "http://localhost:5000/api/post",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response.data);
      // handle success
    } catch (error) {
      console.log(error);
      // handle error
    }
  };

  return (
    <form onSubmit={handleSubmit} enctype="multipart/form-data">
      <input type="text" name="name" onChange={handleChange} />
      <input type="number" name="year" onChange={handleChange} />
      <input type="text" name="color" onChange={handleChange} />
      <input type="number" name="price" onChange={handleChange} />
      <input type="text" name="driving" onChange={handleChange} />
      <input type="file" name="image" onChange={handleChange} />
      <input type="text" name="mainimage" onChange={handleChange} />
      <input type="text" name="secondimage" onChange={handleChange} />
      <input type="text" name="thirdimage" onChange={handleChange} />
      <input type="text" name="country" onChange={handleChange} />
      <input type="number" name="mileage" onChange={handleChange} />
      <input type="text" name="description" onChange={handleChange} />
      <input type="text" name="equipment" onChange={handleChange} />
      <button type="submit">Submit</button>
    </form>
  );
}
