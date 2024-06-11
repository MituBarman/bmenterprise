const app = require("./app");
const dotenv = require("dotenv");
const ConnectDB = require("./config/database");
dotenv.config({ path: "./config/config.env" });

ConnectDB();
app.listen(process.env.PORT, () => {
  console.log(process.env.PORT);
});
