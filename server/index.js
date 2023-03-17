import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
// import userRoutes from "./routes/users.js";
import mysql from "mysql2";
import multer from "multer";
import fileUpload from "express-fileupload";
import { dirname } from "path";
import { fileURLToPath } from "url";

const app = express();
const port = 5000;
// const mysql = require("mysql2");
const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "Darigul250268",
  database: "car_data",
});
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// app.use(bodyParser.json());
app.use(cors());
app.use(express.json());
app.use(fileUpload());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use("/", userRoutes);

app.get("/api/get", (req, res) => {
  const sqlGet = "SELECT * FROM car_db";
  db.query(sqlGet, (error, result) => {
    res.send(result);
  });
});

app.get("/api/get/:id", (req, res) => {
  const { id } = req.params;
  const sqlGet = "SELECT * FROM car_db WHERE id = ?";
  db.query(sqlGet, id, (error, result) => {
    if (error) {
      console.log(error);
    }
    res.send(result);
  });
});

app.put("/api/update/:id", (req, res) => {
  const { id } = req.params;
  const {
    name,
    year,
    color,
    price,
    driving,
    image,
    mainimage,
    secondimage,
    thirdimage,
    country,
    mileage,
    description,
    equipment,
  } = req.body;
  const sqlUpdate =
    "UPDATE car_db SET name = ?, year = ?, color = ?, price = ?, driving = ?, image = ? WHERE id = ?,mainimage = ?, secondimage = ?, thirdimage = ?, country = ?, mileage = ?, description = ?, equipment = ?";
  db.query(
    sqlUpdate,
    [
      name,
      year,
      color,
      price,
      driving,
      image,
      id,
      mainimage,
      secondimage,
      thirdimage,
      country,
      mileage,
      description,
      equipment,
    ],
    (error, result) => {
      if (error) {
        console.log(error);
      }
      res.send(result);
    }
  );
});

app.delete("/api/remove/:id", (req, res) => {
  const { id } = req.params;
  const sqlRemove = "DELETE FROM car_db WHERE id = ?";
  db.query(sqlRemove, id, (error, result) => {
    if (error) {
      console.log(error);
    }
  });
});

// app.post("/api/img", (req, res) => {
//   const filename = Date.now() + "_" + req.files.screenshot.name;
//   const file = req.files.screenshot;
//   let uploadPath = __dirname + "/uploads/" + filename;
//   file.mv(uploadPath, (err) => {
//     if (err) {
//       return res.send(err);
//     }
//   });
//   res.send(200);
// });

// app.post("/api/post", (req, res) => {
//   const {
//     name,
//     year,
//     color,
//     price,
//     driving,
//     image,
//     mainimage,
//     secondimage,
//     thirdimage,
//     country,
//     mileage,
//     description,
//     equipment,
//   } = req.body;
//   // const file = req.files.screenshot;
//   // const fileExtension = file.name.split(".").pop();
//   // const filename = uuidv4() + "." + fileExtension;
//   // let uploadPath = __dirname + "/uploads/" + filename;
//   // file.mv(uploadPath, (err) => {
//   //   if (err) {
//   //     return res.send(err);
//   //   }

//   const sqlInsert =
//     "INSERT INTO car_db (name, year, color, price, driving, image, mainimage, secondimage, thirdimage, country, mileage, description, equipment,) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ? )";
//   db.query(
//     sqlInsert,
//     [
//       name,
//       year,
//       color,
//       price,
//       driving,
//       image,
//       mainimage,
//       secondimage,
//       thirdimage,
//       country,
//       mileage,
//       description,
//       equipment,
//     ]
//     //     (error, result) => {
//     //       if (error) {
//     //         console.log(error);
//     //       }
//     //     }
//     //   );
//     // });
//   );
// });

app.post("/api/post", (req, res) => {
  const {
    name,
    year,
    color,
    price,
    driving,
    image,
    mainimage,
    secondimage,
    thirdimage,
    country,
    mileage,
    description,
    equipment,
  } = req.body;
  const sqlInsert =
    "INSERT INTO car_db (name, year, color, price, driving, image, mainimage, secondimage, thirdimage, country, mileage, description, equipment) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
  db.query(
    sqlInsert,
    [
      name,
      year,
      color,
      price,
      driving,
      image,
      mainimage,
      secondimage,
      thirdimage,
      country,
      mileage,
      description,
      equipment,
    ],
    (error, result) => {
      if (error) {
        console.log(error);
      }
    }
  );
});

app.get("/", (req, res) => {});

app.listen(port, () =>
  console.log(`server is listening on port: http://localhost:${port}`)
);
