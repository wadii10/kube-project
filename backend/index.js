const express = require("express");
const jsonServer = require("json-server");
const cors = require("cors");

const app = express();

const corsOptions = {
  origin: true,
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  allowedHeaders: ["Content-Type", "Authorization"],
};

app.use(cors(corsOptions));

app.use(jsonServer.router("db.json"));

app.listen(3000);
