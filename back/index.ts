import * as express from "express";
import * as bodyParser from "body-parser";
import router from "./routes";
const cors = require("cors");
const app = express();
const port = 8080; // default port to listen

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api", router);

// start the Express server
app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});
