import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import styles from "../../../public/styles/AdminPage.module.css";
import PaginationRounded from "../pagination/Pagination";
import { paginate } from "../pagination/paginate";
import { useRouter } from "next/router";
import { useContext } from "react";
import { toast } from "react-toastify";


// const style = {
//   position: "absolute",
//   top: "50%",
//   left: "50%",
//   transform: "translate(-50%, -50%)",
//   width: 400,
//   bgcolor: "background.paper",
//   border: "2px solid #000",
//   boxShadow: 24,
//   p: 4,
//   color: "black",
// };

export default function AdminPage() {
  const router = useRouter();
  const [value, setValue] = useState("");
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    // const response = await axios.get("http://localhost:3306/api/get");
    const response = await axios.get("http://localhost:3306/api/get");
    if (response.status === 200) {
      setData(response.data);
    }
  };

  const onDelete = (id) => {
    // const response = await axios.delete(
    //   `http://localhost:5000/api/remove/${id}`
    // );
    // if (response.status === 200) {
    //   getUsers();
    // }
    // setOpen(false);
    if (window.confirm("Вы хотите удалить?")) {
      axios.delete(`http://localhost:3306/api/remove/${id}`);
      toast.success("удален успешно");
      setTimeout(() => getUsers(), 500);
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    console.log(setCurrentPage(page));
  };

  const filterItem = (categItem) => {
    if(data){
      const chooseItem = data.filter((curElem) => {
        return curElem.name === categItem;
      });
      setData(chooseItem);
    }
  };

  const fromLowerToHigher = () => {
    const sorted = searchItem.sort((a, b) => a.price - b.price);
    setData(sorted);
  };

  const fromHigherToLower = () => {
    const sortToHigh = searchItem.sort((a, b) => b.price - a.price);
    setData(sortToHigh);
  };

  console.log(data)


  if(data){
    
  }

  const searchItem = data.filter((car) => {
    return car.name.toLowerCase().includes(value.toLowerCase());
  });
  
  const paginateData = paginate(searchItem, currentPage, pageSize);
  

  return (
    <main className={styles.main}>
      <div className={styles.button_a}>
      <Link href='/'>
        <button className={styles.mainpage_button}>Главная</button>
      </Link>
      </div>

      <div className={styles.button_a}>
        <Link href="/addcar">
          <button className={styles.add_button}>Добавить</button>
        </Link>
      </div>

      <div>
        <input
          type="text"
          placeholder="Найти"
          onChange={(e) => setValue(e.target.value)}
        />
      </div>

      <div>
        <button onClick={() => filterItem("asdsa")}>bmw</button>
        <button onClick={() => getUsers()}>all</button>
        <button onClick={() => fromLowerToHigher()}>----</button>
        <button onClick={() => fromHigherToLower()}>+++</button>
      </div>

      <div className={styles.card_list}>
        {data &&
          paginateData.map((item, index) => {
            return (
              <div key={index}>
                <div key={item.id} className={styles.card_main}>
                  <div className={styles.car_card} key={item.id}>
                    <img
                      // style={{
                      //   backgroundImage: `https://node-traiding.vercel.app/${item.image}`,
                      // }}
                      src={`http://localhost:3306/${item.image}`}
                      className={styles.card_img}
                    />
                    <div style={{ padding: "10px" }}>
                      <h1
                        style={{ textAlign: "center", fontSize: "30px" }}
                        className={styles.detail}
                      >
                        {item.name}
                      </h1>
                      <h3
                        style={{ textAlign: "center", fontSize: "25px" }}
                        className={styles.price_detail}
                      >
                        Цена: <strong>{item.price} $</strong>
                      </h3>
                    </div>
                  </div>
                  <div className={styles.control_buttons}>
                    <Link href={"/update/[id]"} as={`/update/${item.id}`}>
                      <button className={styles.button_u}>Изменить</button>
                    </Link>
                    <button
                      className={styles.button_d}
                      onClick={() => onDelete(item.id)}
                    >
                      Удалить
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        <PaginationRounded
          items={searchItem.length}
          currentPage={currentPage}
          pageSize={pageSize}
          onPageChange={handlePageChange}
        />
      </div>
    </main>
  );
}
