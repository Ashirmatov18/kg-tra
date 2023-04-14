import React, { useState, useEffect } from "react";
import axios from "axios";
import FormData from "form-data";
import { useRouter, Router } from "next/router";
import styles from '../../../public/styles/AddTest.module.css'

export default function AddTest() {
  const router = useRouter();
  const {id} = router.query
  
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

console.log(carData)


  useEffect(() => {
    axios
      .get(`http://localhost:3306/api/get/${id}`)
      .then((resp) => setCarData({ ...resp.data[0] }));
  }, [id]);

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


  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    if(!id){
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
          "http://localhost:3306/api/post",
          // "https://node-traiding.vercel.app/api/post",
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
    }
    setTimeout(() => router.push("/adminadd"), 500);
  };

  return (
    <form onSubmit={handleSubmit} enctype="multipart/form-data" className={styles.form_main}>
      <input type="text" name="name" onChange={handleChange} className={styles.input_main} placeholder='Название'/>
      <input type="number" name="year" onChange={handleChange} className={styles.input_main} placeholder='Год выпуска'/>
      <input type="text" name="color" onChange={handleChange} className={styles.input_main} placeholder='Цвет'/>
      <input type="number" name="price" onChange={handleChange} className={styles.input_main} placeholder='Цена'/>
      <input type="text" name="driving" onChange={handleChange}className={styles.input_main} placeholder='Привод'/>
      <input type="file" name="image" onChange={handleChange} />
      <input type="text" name="mainimage" onChange={handleChange} className={styles.input_main} placeholder='2 картинка'/>
      <input type="text" name="secondimage" onChange={handleChange} className={styles.input_main} placeholder='3 картинка'/>
      <input type="text" name="thirdimage" onChange={handleChange} className={styles.input_main} placeholder='4 картинка'/>
      <input type="text" name="country" onChange={handleChange} className={styles.input_main} placeholder='Страна'/>
      <input type="number" name="mileage" onChange={handleChange} className={styles.input_main} placeholder='Пробег'/>
      <input type="text" name="description" onChange={handleChange}className={styles.input_main}placeholder='Описание товара'/>
      <input type="text" name="equipment" onChange={handleChange}className={styles.input_main} placeholder='Комлектация'/>
      <button type="submit" className={styles.button_main}>Submit</button>
    </form>
  );
}
