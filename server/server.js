const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const helmet = require("helmet");
const xss = require("xss-clean");
const app = express();

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config(); // Load .env file
}
const morgan = require("morgan");
app.use(morgan("dev"));

// Body parser
app.use(express.json());

// Set Security HTTP Headers
app.use(helmet());

// Sanitize incoming data
app.use(xss());

// CORS
app.use(
  cors({
    origin: ["http://localhost:3000", process.env.ORIGIN],
    credentials: true,
  })
);

// Cookie parser
app.use(cookieParser());

// Routes
app.use("/api/v1", require("./routes"));

app.use((err, req, res, next) => {
  let { statusCode, message } = err;
  if (!statusCode) statusCode = 500;

  const response = { error: message };
  res.status(statusCode).json(response);
});

process.on("unhandledRejection", (err) => {
  console.error("Unhandled Rejection", err.stack);
  process.exit(1);
});

app.listen(process.env.PORT || 4000, () => {
  console.log("Server is running at http://localhost:4000");
  require("./connection");
});

app.get("/healthcheck", (req, res) => {
  res.send("Everything is working fine....");
});
