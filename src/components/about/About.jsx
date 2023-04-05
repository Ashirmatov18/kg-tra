import React, { useState } from "react";
import styles from "../../../public/styles/About.module.css";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
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
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.{" "}
                    <br /> At, incidunt!
                  </h1>
                </div>
                <div className={styles.information}>
                  <div className={styles.first_section}>
                    <div className={styles.start_info}>
                      <span>
                        ВLorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Doloremque, inventore dolores. Labore explicabo
                        reiciendis nostrum! <br /> <br />
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Autem, esse. <br /> Lorem ipsum dolor, sit amet
                        consectetur adipisicing elit. Dolores, in ipsa. Lorem
                        ipsum dolor sit amet consectetur, adipisicing elit.
                        Harum, nobis? <br /> asdsa dolor sit amet consectetur
                        adipisicing elit. Quae, assumenda autem.4 <br />
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Voluptate, fuga.
                        <br />
                        <br />
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Accusamus adipisci totam consequatur asperiores
                        inventore dicta, fugit voluptatem ducimus maiores
                        quisquam tempore quis hic ea expedita veniam rerum.
                        Laborum vel impedit pariatur hic distinctio voluptas
                        placeat voluptatum facilis veniam dolorem molestias
                        reprehenderit aspernatur dignissimos praesentium odit
                        nihil quod officia, expedita quia.
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
                    </div>
                    <div className={styles.picture_info}>
                      <div className={styles.second_tech_pic}></div>
                      <h2>ОПЕРАТИВНОСТЬ</h2>
                    </div>
                    <div className={styles.picture_info}>
                      <div className={styles.third_tech_pic}></div>
                      <h2>ЛУЧШИЕ ЦЕНЫ</h2>
                    </div>
                  </div>
                  <h1 style={{ marginTop: "170px" }} className={styles.adv_title}>Наши преимущества</h1>
                  <div className={styles.tech_first}>
                    <div className={styles.picture_info}>
                      <div className={styles.fourth_tech_pic}></div>
                      <h2>ФИНАНСОВАЯ ПРОЗРАЧНОСТЬ СДЕЛКИ</h2>
                      <h3>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Eum dignissimos voluptatum impedit, alias facilis
                        libero!
                      </h3>
                    </div>
                    <div className={styles.picture_info}>
                      <div className={styles.fifth_tech_pic}></div>
                      <h2>ТЕХНИЧЕСКИЕ ГАРАНТИИ</h2>
                      <h3>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Eum dignissimos voluptatum impedit, alias facilis
                        libero!
                      </h3>
                    </div>
                    <div className={styles.picture_info}>
                      <div className={styles.sixth_tech_pic}></div>
                      <h2>НАДЕЖНАЯ ДОСТАВКА</h2>
                      <h3>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Eum dignissimos voluptatum impedit, alias facilis
                        libero!
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
