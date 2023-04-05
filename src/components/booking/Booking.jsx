import React, { useEffect, useState } from "react";
import styles from "../../../public/styles/Booking.module.css";
import axios from "axios";
import Header from "../Container/Header/Header";
import MainLayout from "../MainLayout";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { ProSidebarProvider } from "react-pro-sidebar";
import {
  Sidebar,
  Menu,
  MenuItem,
  SubMenu,
  useProSidebar,
  sidebarClasses,
} from "react-pro-sidebar";
import "lightbox.js-react/dist/index.css";
import { SlideshowLightbox, initLightboxJS } from "lightbox.js-react";
import ScrollUpButton from "react-scroll-up-button";

export default function Booking() {
  const [state, setState] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [fetching, setFetching] = useState(false);
  const [totalCount, setTotalCount] = useState(0);
  const [value, setValue] = useState("");
  const [search, setSearch] = useState("");
  const [detail, setDetail] = useState([]);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  useEffect(() => {
    initLightboxJS("Insert License key", "Insert plan type here");
  });
  const carDetail = (item) => {
    setDetail([item]);
    handleOpen();
  };
  // const [filterState, setFilterState] = useState("");
  // useEffect(() => {
  //   getEncarCar().then((data) => setState({ data }));
  // }, []);
  // const getEncarCar = async () => {
  //   const { data } = await axios.get(api);
  //   return data.SearchResults;
  // };
  // const api = `http://api.encar.com/search/car/list/general?count=true&q=(And.Hidden.N._.CarType.Y._.Simple.keyword(1234).)&inav=%7C7C${currentPage}%7C10`;

  const api = `https://api.encar.com/search/car/list/premium?count=true&q=(And.Hidden.N.${search})&sr=%7CModifiedDate%7C${currentPage}%7C10`;
  // const api = `https://api.encar.com/search/car/list/premium?count=true&q=(And.Hidden.N._.(C.CarType.N._.Manufacturer.볼보.))&sr=%7CModifiedDate%7C${currentPage}%7C10`;
  const scrollHandler = (e) => {
    if (
      e.target.documentElement.scrollHeight -
        (e.target.documentElement.scrollTop + window.innerHeight) <
      100
      // state.length < totalCount
    ) {
      setFetching(true);
    }
  };
  console.log(state);
  // const getCar = async () => {
  //   const response = await axios.get(api);
  //   if (response.status === 200) {
  //     setState([...state, ...response.data.SearchResults]);
  //   }
  // };

  const filterItem = (categItem) => {
    const chooseItem = state.filter((curElem) => {
      return curElem.Manufacturer === categItem;
    });
    // search = setState(`(C.CarType.N._.Manufacturer.${chooseItem}.)`);
    setState(chooseItem);

    // chooseItem.map((item)=>{

    // })
    if (categItem === "") {
      setSearch("");
    } else {
      setSearch("");
      setSearch(`_.(C.CarType.N._.Manufacturer.${categItem}.)`);
    }
  };
  const filteredCars = state.filter((item) => {
    return item.Model.toLowerCase().includes(value.toLowerCase());
  });

  // useEffect(() => {}, []);

  useEffect(() => {
    if (fetching) {
      // console.log("fetching");
      axios
        .get(api)
        .then((response) => {
          setState([...state, ...response.data.SearchResults]);
          // getCar();
          setCurrentPage((prevState) => prevState + 50);
          setTotalCount(response.headers["x-total-count"]);
        })
        .finally(() => setFetching(false));
    }
  }, [scrollHandler]);

  useEffect(() => {
    document.addEventListener("scroll", scrollHandler);

    return function () {
      document.removeEventListener("scroll", scrollHandler);
    };
  }, [filterItem]);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  console.log(detail);
  return (
    <>
      <div className={styles.booking_bg}>
        <h1>Машины из кореи </h1>
      </div>
      <Header />;
      <MainLayout>
        <input
          type="text"
          onChange={(event) => setValue(event.target.value)}
          className={styles.booking_search}
        />
        <div className={styles.sidebar_main}>
          <Sidebar
            rootStyles={{
              [`.${sidebarClasses.container}`]: {
                color: "#142c56",
              },
            }}
            className={styles.sidebar}
          >
            <Menu className={styles.menu_side}>
              <SubMenu label="Charts">
                <MenuItem> Pie charts </MenuItem>
                <MenuItem> Line charts </MenuItem>
              </SubMenu>
              <MenuItem onClick={() => filterItem("")}> ВСЕ МАШИНЫ </MenuItem>
              <MenuItem onClick={() => filterItem("BMW")}> BMW </MenuItem>
              <MenuItem onClick={() => filterItem("볼보")}> Volvo </MenuItem>
              <MenuItem onClick={() => filterItem("벤츠")}> Mercedes </MenuItem>
              <MenuItem onClick={() => filterItem("아우디")}> Audi </MenuItem>
              <MenuItem onClick={() => filterItem("미니")}> Mini </MenuItem>
              <MenuItem onClick={() => filterItem("포르쉐")}> Porshe </MenuItem>
              <MenuItem onClick={() => filterItem("포르쉐")}> Porshe </MenuItem>
              <MenuItem onClick={() => filterItem("랜드로버")}>
                {" "}
                Land Rover{" "}
              </MenuItem>
              <MenuItem onClick={() => filterItem("폭스바겐")}>
                {" "}
                Wolswagen{" "}
              </MenuItem>
            </Menu>
          </Sidebar>{" "}
        </div>

        <div className={styles.sidebar_mobile}>
        <Sidebar
            rootStyles={{
              [`.${sidebarClasses.container}`]: {
                color: "#142c56",
              },
            }}
            className={styles.mobile_side}
          >
            <Menu>
              <SubMenu label="Charts">
              <MenuItem onClick={() => filterItem("")}> ВСЕ МАШИНЫ </MenuItem>
              <MenuItem onClick={() => filterItem("BMW")}> BMW </MenuItem>
              <MenuItem onClick={() => filterItem("볼보")}> Volvo </MenuItem>
              <MenuItem onClick={() => filterItem("벤츠")}> Mercedes </MenuItem>
              <MenuItem onClick={() => filterItem("아우디")}> Audi </MenuItem>
              <MenuItem onClick={() => filterItem("미니")}> Mini </MenuItem>
              <MenuItem onClick={() => filterItem("포르쉐")}> Porshe </MenuItem>
              <MenuItem onClick={() => filterItem("포르쉐")}> Porshe </MenuItem>
              <MenuItem onClick={() => filterItem("랜드로버")}>
                {" "}
                Land Rover{" "}
              </MenuItem>
              <MenuItem onClick={() => filterItem("폭스바겐")}>
                {" "}
                Wolswagen{" "}
              </MenuItem>
              </SubMenu>
            </Menu>
          </Sidebar>{" "}
        </div>

        <div className={styles.encar_product}>
          {!!state && state.length ? (
            filteredCars.map((item, index) => (
              <div className={styles.product_card} key={index}>
                <div className={styles.product_image_name}>
                  {/* <Image
                src={`https://ci.encar.com${item.Photo}001.jpg`}
                alt="картинка машины"
                width={200}
                height={200}
              /> */}
                  <div
                    style={{
                      backgroundImage: `url(https://ci.encar.com${item.Photo}001.jpg)`,
                    }}
                    className={styles.img_car}
                  ></div>
                  <h2>{item.Model}</h2>
                </div>
                <div key={index} className={styles.product_info}>
                  {/* <h2>
              модель : <strong>{item.Model}</strong>
              пробег : {item.Mileage}
              id: {item.Id}
            </h2>
            <img src={`https://ci.encar.com${item.Photo}001.jpg`} alt="aaa" /> */}
                  <div className={styles.details}>
                    <p>{item.Mileage}</p>
                    <p>{item.Id}</p>
                    <p>{item.Model}</p>
                  </div>
                  <div className={styles.pricing_info}>
                    <p>Цена: {item.Price}</p>
                    <p>Модель: {item.Manufacturer}</p>
                    <button onClick={() => carDetail(item)}>Подробнее</button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <></>
          )}
          {detail.map((pop, index) => (
            <Modal
              key={index}
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style} style={{ color: "#000" }}>
                <SlideshowLightbox
                  style={{ display: "flex" }}
                  // className="cocontainer grid grid-cols-3 gap-2 mx-auto lightboxjs"
                  className={styles.slideshow}
                >
                  <img
                    style={{ width: "300px" }}
                    className="w-full rounded"
                    src={`https://ci.encar.com${pop.Photos[0].location}`}
                  />
                  <img
                    style={{ width: "50px", height: "50px" }}
                    className="w-full rounded"
                    src={`https://ci.encar.com${pop.Photos[1].location}`}
                  />
                  <img
                    style={{ width: "50px", height: "50px" }}
                    className="w-full rounded"
                    src={`https://ci.encar.com${pop.Photos[2].location}`}
                  />
                  <img
                    style={{ width: "50px", height: "50px" }}
                    className="w-full rounded"
                    src={`https://ci.encar.com${pop.Photos[3].location}`}
                  />
                </SlideshowLightbox>
                <h2>Модель: {pop.Model}</h2>
                <h3>Год: {pop.FormYear}</h3>
                <h3>Цена: {pop.Price}</h3>
                <h3>Пробег: {pop.Mileage}</h3>
                <h3>Тип топлива: {pop.Manufacturer}</h3>
              </Box>
            </Modal>
          ))}
        </div>
        <ScrollUpButton />
      </MainLayout>{" "}
      {/* <Footer /> */}
    </>
  );
}
