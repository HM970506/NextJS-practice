//서버에서 구동되는 부분
import http from "http";
import SocketIO from "socket.io";
import express from "express"


const app=express();
app.set("view engine", "pug");
app.set("views", __dirname + "/views");
app.use("/public", express.static(__dirname + "/public"));
//유저는 public 폴더에 있는 내용은 볼 수 있다! 다른 부분은 못 본다


app.get("/", (_, res) => res.render("home"));
app.get("/*", (_, res) => res.redirect("/"));
//라우터 부분.
//request 를 _로 표시할 수 있어요

console.log("서버를 시작합니당");
const httpServer = http.createServer(app);
const wsServer = SocketIO(httpServer);


const handleListen = () => console.log(`Listening on http://localhost:3000`);
httpServer.listen(3000, handleListen);