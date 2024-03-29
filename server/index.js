import  express  from "express";
import http from "http";
import path from "path";

const app = express();
const server = http.createServer(app);

app.use(express.static(path.resolve('./client-temp'))),

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});     
