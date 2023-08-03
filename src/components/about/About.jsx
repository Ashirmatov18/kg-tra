import React, { useState } from "react";
import styles from "../../../public/styles/About.module.css";
import MainLayout from "../MainLayout";
// import Head from "@/app/head";
import Head from "../../app/head";
export default function About() {
  // const [age, setAge] = React.useState("");
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
//надежность - более 13 лет на рынке и более 10000 успешныз сделок
//operation - доставим вашу машину в кратчайшие сроки 
//лучшие цены - экономия до 20%
//ФИНАНСОВАЯ ПРОЗРАЧНОСТЬ СДЕЛКИ - весь процесс будет идти по договору
//ТЕХНИЧЕСКИЕ ГАРАНТИИ - диллер продает автомобиль с гарантией на двигатель и трансмиссию до 1 года
//НАДЕЖНАЯ ДОСТАВКА - доставку осуществливается авиа и мультиимодальной перевозкой

  return (
    <>
      <Head>
        <meta
          http-equiv="Cache-Control"
          content="no-cache, no-store, must-revalidate"
        />
        <meta http-equiv="Pragma" content="no-cache" />
        <meta http-equiv="Expires" content="0" />
      </Head>
      <MainLayout>
        <div className={styles.main_ab}>
          <div>
            <div className={styles.main_bg_image}>
              <h1>О НАС</h1>
            </div>
            <div>
              {" "}
              <div className={styles.creation}>
                <div className={styles.creation_title}>
                  <h1>
                  Добро пожаловать в компанию Kgtrading - вашего <br/> надежного партнера по перевозке машин!
                  </h1>
                </div>
                <div className={styles.information}>
                  <div className={styles.first_section}>
                    <div className={styles.start_info}>
                      <span>
                      Kgtrading - это динамичная и профессиональная компания по перевозке машин, специализирующаяся на предоставлении качественных и надежных услуг по транспортировке автомобилей. Наша компания была основана с целью обеспечить клиентам безопасные
                      <br />
                      и эффективные решения для перевозки автомобилей различных типов и размеров.

                        <br />
                        <br />
                        <br />

                        Мы готовы взять на себя ответственность за перевозку вашего автомобиля, независимо от его марки, модели или места назначения. Обратитесь к нам сегодня, и доверьте перевозку своего автомобиля профессионалам Kgtrading. Мы гарантируем высокий уровень обслуживания и полную заботу о вашем транспорте на протяжении всего процесса перевозки.


                      </span>
                    </div>
                    <div className={styles.first_image}></div>
                  </div>
                  <div className={styles.second_section}>
                    <div className={styles.second_image}></div>
                  </div>
                </div>

                <div className={styles.technologies}>
                  <h1>ПОЧЕМУ МЫ</h1>
                  <div className={styles.tech_first}>
                    <div className={styles.picture_info}>
                      <div className={styles.first_tech_pic}></div>
                      <h2>Надежность</h2>
                      <h3>более 13 лет на рынке и более 10000 успешныз сделок</h3>
                    </div>
                    <div className={styles.picture_info}>
                      <div className={styles.second_tech_pic}></div>
                      <h2>ОПЕРАТИВНОСТЬ</h2>
                      <h3>доставим вашу машину в кратчайшие сроки</h3>
                    </div>
                    <div className={styles.picture_info}>
                      <div className={styles.third_tech_pic}></div>
                      <h2>ЛУЧШИЕ ЦЕНЫ</h2>
                      <h3>экономия до 20%</h3>
                    </div>
                  </div>
                  <h1 style={{ marginTop: "170px" }} className={styles.adv_title}>Наши преимущества</h1>
                  <div className={styles.tech_first}>
                    <div className={styles.picture_info}>
                      <div className={styles.fourth_tech_pic}></div>
                      <h2>ФИНАНСОВАЯ ПРОЗРАЧНОСТЬ СДЕЛКИ</h2>
                      <h3>
                      весь процесс будет идти по договору
                      </h3>
                    </div>
                    <div className={styles.picture_info}>
                      <div className={styles.fifth_tech_pic}></div>
                      <h2>ТЕХНИЧЕСКИЕ ГАРАНТИИ</h2>
                      <h3>
                      диллер продает автомобиль с гарантией на двигатель и трансмиссию до 1 года
                      </h3>
                    </div>
                    <div className={styles.picture_info}>
                      <div className={styles.sixth_tech_pic}></div>
                      <h2>НАДЕЖНАЯ ДОСТАВКА</h2>
                      <h3>
                      доставку осуществливается авиа и мультиимодальной перевозкой
                      </h3>
                    </div>
                  </div>
                  {/* <div className={styles.tech_second}></div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </MainLayout>
    </>
  );
}
