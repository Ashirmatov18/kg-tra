import React from "react";
import axios from "axios";
import { useState, useRef, useEffect } from "react";
import styles from "../../public/styles/Test.module.css";
import dynamic from "next/dynamic";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Footer from "./Container/footer/Footer";
import Link from "next/link";
import emailjs from "@emailjs/browser";


export default function Test() {
  const [state, setState] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  let productsp = [
    {
      id: 1,
      name: "Product Number 1",
      brand: "Brand Name",
      url: "https://impel.io/wp-content/uploads/2022/02/ABR-Full-639x480.jpg",
      price: 100,
    },
    {
      id: 2,
      name: "Product Number 1",
      brand: "Brand Name",
      url: "https://media.istockphoto.com/id/1150425295/photo/3d-illustration-of-generic-hatchback-car-perspective-view.jpg?b=1&s=170667a&w=0&k=20&c=QKVzqIOrSi8pYPDM90tUOpECoLcfbe8GVIkJDBI7cb8=",
      price: 100,
    },
    {
      id: 3,
      name: "Product Number 1",
      brand: "Brand Name",
      url: "https://media.istockphoto.com/id/468686480/photo/modern-generic-car-on-white-background.jpg?s=170667a&w=0&k=20&c=-bEVTQ5-_fN1cU0b1Pi-U-zD9d4ew2-ZokcisSY8gEo=",
      price: 100,
    },
    {
      id: 4,
      name: "Product Number 1",
      brand: "Brand Name",
      url: "https://корейские-авто.рф/upload/000/u1/c/7/populjarnye-avto-korei-cover-normal.webp",
      price: 100,
    },
    {
      id: 5,
      name: "Product Number 1",
      brand: "Brand Name",
      url: "https://корейские-авто.рф/upload/000/u1/d/5/populjarnye-avto-japonii-cover-normal.webp",
      price: 100,
    },
    {
      id: 6,
      name: "Product Number 1",
      brand: "Brand Name",
      url: "https://корейские-авто.рф/upload/000/u1/f/7/s-probegom-po-rf-cover-normal.webp",
      price: 100,
    },
    {
      id: 7,
      name: "Product Number 1",
      brand: "Brand Name",
      url: "https://корейские-авто.рф/upload/000/u1/9/d/bez-probega-po-rf-cover-normal.webp",
      price: 100,
    },
  ];

  const dropItems = [
    {
      key: "1",
      label: 'hi'
    },
    {
      key: "2",
      label: 'hi'      
    },
    {
      key: "3",
      label: 'hi'
    },
    {
      key: "4",
      label: "a danger item"
    }
  ];

  if (typeof window !== "undefined") {
    var $ = require("jquery");
    window.$ = window.jQuery = require("jquery");
  }

  // This is for Next.js. On Rect JS remove this line
  const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
    ssr: false,
  });

  const options = {
    margin: 30,
    responsiveClass: true,
    nav: true,
    dots: true,
    autoplay: false,
    smartSpeed: 1000,
    navClass: ["owl-prev", "owl-next"],
    navText: ["", ""],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      600: {
        items: 2,
      },
      700: {
        items: 3,
      },
      1000: {
        items: 4,
      },
    },
  };

  const [year, setYear] = useState("less-than-3y");
  const [capacity, setCapacity] = useState("");
  const [cost, setCost] = useState("");
  const [customsDuty, setCustomsDuty] = useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  function handleYearChange(event) {
    setYear(event.target.value);
  }

  function handleCapacityChange(event) {
    setCapacity(event.target.value);
  }

  function handleCostChange(event) {
    setCost(event.target.value);
  }

  function calculateCustomsDuty() {
    var result;
    if (year === "less-than-3y") {
      result = calculateLessThan3y(capacity, cost);
    } else if (year === "more-than-3y") {
      result = calculateMoreThan3y(capacity);
    } else if (year === "more-than-5y") {
      result = calculateMoreThan5y(capacity);
    } else {
      alert("Something went wrong");
      return;
    }

    setCustomsDuty(result);
  }

  function calculateLessThan3y(capacity, cost) {
    var percentageCost;
    var cm3Cost;

    if (cost <= 8500) {
      percentageCost = cost * 0.54;
      cm3Cost = capacity * 2.5;
    } else if (cost <= 16700) {
      percentageCost = cost * 0.48;
      cm3Cost = capacity * 3.5;
    } else if (cost <= 42300) {
      percentageCost = cost * 0.48;
      cm3Cost = capacity * 5.5;
    } else if (cost <= 84500) {
      percentageCost = cost * 0.48;
      cm3Cost = capacity * 7.5;
    } else if (cost <= 169000) {
      percentageCost = cost * 0.48;
      cm3Cost = capacity * 15;
    } else {
      percentageCost = cost * 0.48;
      cm3Cost = capacity * 20;
    }

    return percentageCost > cm3Cost ? percentageCost : cm3Cost;
  }

  function calculateMoreThan3y(capacity) {
    if (capacity <= 1000) return capacity * 1.5;
    else if (capacity <= 1500) return capacity * 1.7;
    else if (capacity <= 1800) return capacity * 2.5;
    else if (capacity <= 2300) return capacity * 2.7;
    else if (capacity <= 3000) return capacity * 3;
    else return capacity * 3.6;
  }

  function calculateMoreThan5y(capacity) {
    if (capacity <= 1000) return capacity * 3;
    else if (capacity <= 1500) return capacity * 3.2;
    else if (capacity <= 1800) return capacity * 3.5;
    else if (capacity <= 2300) return capacity * 4.8;
    else if (capacity <= 3000) return capacity * 5;
    else return capacity * 5.7;
  }

  function preventNegativeNumbers(event) {
    const { key, target } = event;
    if (key === "-" && !target.value) {
      // prevent writing negative symbol if the input is empty
      event.preventDefault();
    } else if (key === "-" && target.value) {
      // prevent writing negative symbol if there is already a minus sign
      if (target.value.includes("-")) {
        event.preventDefault();
      }
    } else if (key < "0" || key > "9") {
      // prevent writing non-numeric characters
      event.preventDefault();
    }
  }

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_4x06svs",
        "template_b79mc17",
        form.current,
        "lq0uIX0QtsFTPLE6C"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  const getUsers = async () => {
    const response = await axios.get("https://node-traiding.vercel.app/api/get");
    if (response.status === 200) {
      setState(response.data);
    }
  };

  const carItems = state.slice(0, 6).map((item, index) => (
    <div key={item.id} className={styles.card}>
      <ul className={styles.card_menu}>
        <a className={styles.car_menu_item}>
          <img className={styles.card_menu_img} src={item.secondimage} />
        </a>
      </ul>
      <img src={`https://node-traiding.vercel.app/${item.image}`} className={styles.card_img} />

      <div className={styles.card_info}>
        <h1 className={styles.card_title}>{item.name}</h1>
        <p className={styles.card_desc}>{item.price} $</p>
        <div className={styles.card_button_body}>
          <Link href={"/catalogdetail/[id]"} as={`/catalogdetail/${item.id}`}>
            <button className={styles.card_button}>Подробнее</button>
          </Link>
        </div>
      </div>
    </div>
  ));



  
  


  return (
    // <MainLayout>
    <div>
      <div>
        {/* <div className={styles.main_bg_image}> */}
        <div className={styles.overlay}></div>
        <video className={styles.video_bg} autoPlay loop muted>
          <source src="./images/vide4.mp4" />
        </video>
        <div className={styles.main_name}>
          <div className={styles.logo_center}>
            {/* <Image className={styles.logo} src={logo} alt="main_logo" /> */}

            <h1>
              Автомобили <br /> из{" "}
              <strong>
                Южной <br /> Кореи
              </strong>
            </h1>
          </div>
          {/* <h1 className={styles.name}>KG-TRADING</h1> */}
          {/* <h1 className={styles.name_company}>Автомобили из Южной Кореи</h1> */}
          <div className={styles.main_page_number}>
            <div className={styles.main_page_number_first}>
              <div className={styles.main_page_number_img}></div>
              <div>
                <span>Позвони нам</span>
                <p>+996755081000</p>
              </div>
            </div>
            <div className={styles.main_page_number_first}>
              <div className={styles.main_page_number_img_second}></div>
              <div>
                <span>Наша почта</span>
                <p>test@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
        {/* </div> */}

        <div className={styles.main_bg}>
          <div className="row no-gutters">
            <div
              className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 mt-3 pb-2 bg-white"
              id="owl-carousel-products"
            >
              <ul
                id="owl-carousel-ul"
                className="owl-carousel owl-loaded owl-drag"
              >
                <OwlCarousel
                  className="owl-theme"
                  loop
                  margin={2}
                  nav={true}
                  navText={[
                    '<img src= "/images/Arrow_left.png" />',
                    '<img src="/images/Arrow_right.png" />',
                  ]}
                  dots={true}
                  animateIn={true}
                  {...options}
                >
                  {productsp && productsp.length > 0
                    ? productsp.map((product) => {
                        return (
                          <div
                            id="featuredProducts"
                            // className="item float-left w-100"
                            key={product.id}
                          >
                            <div className="productListing col-lg-5th col-md-4 col-sm-6 col-xs-12">
                              <a
                                href={product.url}
                                style={{
                                  display: "inline-block",
                                  textAlign: "center",
                                }}
                              >
                                <a className="product float-left">
                                  <span className="image text-center">
                                    <img
                                      id={"img" + product.id}
                                      src={product.url}
                                      alt={product.name}
                                      title={product.name}
                                      className={styles.image_car_slider}
                                    />
                                  </span>
                                  <span className="w-100 text-center mt-1">
                                    <h5
                                      className="brand text-capitalize float-left"
                                      style={{
                                        textAlign: "center",
                                        fontSize: "35px",
                                      }}
                                    >
                                      {product.brand}
                                    </h5>
                                  </span>
                                </a>
                              </a>
                            </div>
                          </div>
                        );
                      })
                    : ""}
                </OwlCarousel>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <h1
        style={{
          textAlign: "center",
          marginBottom: "70px",
          marginTop: "70px",
          fontSize: "50px",
          lineHeight: "53px",
          letterSpacing: "0.06em",
          textTransform: "uppercase",
          color: "#142c56",
        }}
        className={styles.about_main_title}
      >
        О Нас
      </h1>
      <div className={styles.main_info_about}>
        <div className={styles.main_info_text}>
          <h2 style={{ paddingTop: "20px", paddingBottom: "50px" }}>
            Наша компания
          </h2>
          KG Trading Company — надежная транспортная компания, специализирующаяся на импорте и экспорте автомобилей из Южной Кореи. Благодаря многолетнему опыту мы предоставляем надежные и эффективные логистические решения для частных лиц и предприятий. <br /> <br /> Наша преданная команда обеспечивает безопасную и своевременную доставку, занимаясь всеми аспектами процесса перевозки, включая проверку, документацию и таможенное оформление. <br /> <br /> Выбирайте KG Trading Company для профессиональных и клиентоориентированных услуг по перевозке автомобилей. Свяжитесь с нами сегодня для беспроблемных логистических решений.
        </div>
        <div className={styles.main_info_img}></div>
      </div>

      <h1
        style={{
          textAlign: "center",
          marginBottom: "70px",
          marginTop: "5 0px",
          fontSize: "50px",
          lineHeight: "53px",
          letterSpacing: "0.06em",
          textTransform: "uppercase",
          color: "#142c56",
        }}
        className={styles.catalog_title}
      >
        Наш Каталог
      </h1>
      <div className={styles.card_block}>{carItems}</div>      <div className={styles.button_container}>
        <button className={styles.storage_button}>
          <Link href="/catalog">Перейти ко всем</Link>
        </button>
      </div>
      <h1
        style={{
          textAlign: "center",
          marginTop: "70px",
          fontSize: "50px",
          lineHeight: "53px",
          letterSpacing: "0.06em",
          textTransform: "uppercase",
          color: "#142c56",
        }}
        className={styles.calculator_title_main}
      >
        Видео
      </h1>
      <div className={styles.video_review}>
        <div className={styles.video_info_block}>
        <video className={styles.video_info} controls>
          <source src="./images/r1.MOV" />
        </video>
        </div>
        <div className={styles.video_info_block}>
        <video className={styles.video_info} controls>
          <source src="./images/r2.MOV" />
        </video>
        </div>
        <div className={styles.video_info_block}>
        <video className={styles.video_info} controls>
          <source src="./images/r3.MOV" />
        </video>
        </div>
        <div className={styles.video_info_block}>
        <video className={styles.video_info} controls>
          <source src="./images/r4.MOV" />
        </video>
        </div>
        <div className={styles.video_info_block}>
        <video className={styles.video_info} controls>
          <source src="./images/r5.MOV" />
        </video>
        </div>
      </div>
      {/* <div className={styles.center}>
        <h1>КАЛЬКУЛЯТОР</h1>
        <form>

          <div className={styles.box_drop}>
          <select value={year} onChange={handleYearChange}>
             <option value="less-than-3y">Меньше 3х лет</option>
             <option value="more-than-3y">Больше 3 лет</option>
             <option value="more-than-5y">Больше 5 лет</option>
          </select>
          </div>
          <div className={styles.inputbox}>
            <input
              id="vehicle-capacity"
              type="number"
              value={capacity}
              onChange={handleCapacityChange}
              required="required"
              onKeyPress={preventNegativeNumbers}
              className={styles.input_text}
            />
            <span>
              ОБЪЁМ В М<sup>3</sup>
            </span>
          </div>
          {!!year && year === "less-than-3y" ? (
            <>
              <div className={styles.inputbox}>
                <input
                  id="vehicle-cost"
                  type="number"
                  value={cost}
                  onChange={handleCostChange}
                  required="required"
                  onKeyPress={preventNegativeNumbers}
                  className={styles.input_text}
                />
                <span>ЦЕНА</span>
              </div>
            </>
          ) : (
            <></>
          )}
          <div className={styles.inputbox}>
            <input
              type="button"
              value="Рассчитать"
              onClick={calculateCustomsDuty}
            />
          </div>
        </form>
        {customsDuty && (
          <div className={styles.calc_final_result}>
            <p>
              Итоговая цена: <strong>{customsDuty}</strong> Евро
            </p>
          </div>
        )}
      </div>  */}

      
      <div className={styles.connect_us}>
        <div className={styles.message}>
          <h1>Оставить сообщение</h1>
          <form ref={form} onSubmit={sendEmail}>
            <input
              type="text"
              name="user_name"
              placeholder="Имя"
              className={styles.message_inp}
            />
            <input
              type="email"
              name="user_email"
              placeholder="Email"
              className={styles.message_inp}
            />
            <textarea name="message" className={styles.input_message} />
            <input
              type="submit"
              value="Отправить"
              className={styles.input_button}
            />
          </form>
        </div>

        <Footer id={styles.footer_contact} />
      </div>
    </div>
  );
}
