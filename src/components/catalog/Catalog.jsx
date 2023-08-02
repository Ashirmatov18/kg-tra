"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import styles from "../../../public/styles/AdminPage.module.css";
import PaginationRounded from "../pagination/Pagination";
import { paginate } from "../pagination/paginate";
import { useRouter } from "next/router";
import Footer from "../Container/footer/Footer";



// const CssTextField = styled(TextField)({
//   "& label.Mui-focused": {
//     color: "#fdce08",
//   },
//   "& .MuiInput-underline:after": {
//     borderBottomColor: "#142c56",
//   },
//   "& .MuiOutlinedInput-root": {
//     "& fieldset": {
//       borderColor: "red",
//     },
//     "&:hover fieldset": {
//       borderColor: "yellow",
//     },
//     "&.Mui-focused fieldset": {
//       borderColor: "green",
//     },
//   },
// });
// const drawerWidth = 240;

export default function Catalog() {
  const router = useRouter();
  const {id} = router.query

  const [value, setValue] = useState("");
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 9;

  useEffect(() => {
    getUsers();
  }, []);

  // useEffect(() => {
  //   axios
  //     .get(`https://node-traiding.vercel.app/get/${id}`)
  //     .then((resp) => setData({ ...resp.data[0] }));
  // }, [id]);

  const getUsers = async () => {
    const response = await axios.get("http://localhost:3306/api/get");
    //https://node-traiding.vercel.app/api/get
    if (response.status === 200) {
      setData(response.data);
    }
  };

  console.log(data)

  const handlePageChange = (page) => {
    setCurrentPage(page);
    console.log(setCurrentPage(page));
  };

  const filterItem = (categItem) => {
    const chooseItem = data.filter((curElem) => {
      return curElem.name === categItem;
    });
    setData(chooseItem);
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
  const searchItem = data.filter((car) => {
    return car.name.toLowerCase().includes(value.toLowerCase());
  });

  const paginateData = paginate(searchItem, currentPage, pageSize);
  return (
    <>
      <div className={styles.contacts_bg}>
        <h1>КАТАЛОГ</h1>
      </div>
      <main className={styles.main} id={styles.main_catalog}>
        <nav className={styles.nav}>
          <ul>
            <li onClick={() => getUsers()}>
              <div className={styles.all_car}></div>
            </li>
            <li>
              <div className={styles.img_lexus}></div>
            </li>
            <li>
              <div className={styles.benz_car}></div>
            </li>
            <li onClick={() => filterItem("asdsa")}>
              <div className={styles.img_bmw}></div>
              <div className={styles.mail_icon}>
                <div className={styles.mail_base}>
                  <div className={styles.mail_top}></div>
                </div>
              </div>
            </li>
          </ul>
        </nav>
        {/* <Box sx={{ display: "flex" }}>
          <CssBaseline />
          <Drawer
            sx={{
              width: drawerWidth,
              flexShrink: 0,
              "& .MuiDrawer-paper": {
                width: drawerWidth,
                boxSizing: "border-box",
              },
            }}
            variant="permanent"
            anchor="left"
          >
            <Toolbar />
            <Divider />
            <List>
              {[
                "Все машины",
                "Самые дорогие",
                "Самые дешевые",
                "Остальное",
              ].map((text, index) => (
                <ListItem key={index} disablePadding>
                  <ListItemButton>
                    <ListItemText primary={text} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
            <Divider />
          </Drawer>
          <Box
            component="main"
            sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
          >
            <Toolbar />

            <Typography paragraph> */}
        <div className={styles.searchbar}>
          {/* <CssTextField
            id="standard-basic"
            label="ПОИСК"
            variant="standard"
            onChange={(e) => setValue(e.target.value)}
            className={styles.searchbar}
          /> */}
        </div>
        {/* <div className={styles.button_group}>
          <button
            className={styles.button_74}
            role="button"
            onClick={() => getUsers()}
          >
            Все машины
          </button>
          <button
            className={styles.button_74}
            role="button"
            onClick={() => fromLowerToHigher()}
          >
            Самые дешевые
          </button>
          <button
            className={styles.button_74}
            role="button"
            onClick={() => fromHigherToLower()}
          >
            Самые дорогие
          </button>
          <button
            className={styles.button_74}
            role="button"
            onClick={() => filterItem("asdsa")}
          >
            BMW
          </button>
        </div> */}
        {/* <ProSidebarProvider>
          <Sidebar
            rootStyles={{
              [`.${sidebarClasses.container}`]: {
                color: "#142c56",
              },
            }}
            className={styles.sidebar}
          >
            <Menu>
              <SubMenu label="ПО ЦЕНЕ">
                <MenuItem onClick={() => fromHigherToLower()}>
                  Самые дорогие
                </MenuItem>
                <MenuItem onClick={() => fromLowerToHigher()}>
                  Самые дешевые
                </MenuItem>
              </SubMenu>
              <MenuItem onClick={() => getUsers()}> ВСЕ МАШИНЫ </MenuItem>

              <MenuItem onClick={() => filterItem("BMW")}> BMW </MenuItem>
              <MenuItem onClick={() => filterItem("볼보")}> 볼보 </MenuItem>
            </Menu>
          </Sidebar>
        </ProSidebarProvider> */}

        <div className={styles.bg_img}>
          <div className={styles.card_list}>
            {data &&
              paginateData.map((item, index) => {
                return (
                  <>
                    <div key={index} className={styles.card}>
                      <ul className={styles.card_menu}>
                        <a className={styles.car_menu_item}>
                          <img
                            className={styles.card_menu_img}
                            src={`http://localhost:3306/${item.secondimage}`}
                          />
                        </a>
                      </ul>
                      <img src={`http://localhost:3306/${item.image}`} className={styles.card_img} />

                      <div className={styles.card_info}>
                        <h1 className={styles.card_title}>{item.name}</h1>
                        <p className={styles.card_desc}>{item.price} $</p>
                        <div className={styles.card_button_body}>
                          <Link
                            href={"/catalogdetail/[id]"}
                            as={`/catalogdetail/${item.id}`}
                          >
                            <button className={styles.card_button}>
                              Подробнее
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
            <PaginationRounded
              items={searchItem.length}
              currentPage={currentPage}
              pageSize={pageSize}
              onPageChange={handlePageChange}
            />
          </div>
        </div>
        {/* </Typography>
          </Box>
        </Box> */}
      </main>

      <Footer id={styles.footer_catalog} />
    </>
  );
}
