//서버에서 구동되는 부분
import http from "http";
import WebSocket from "ws";
import express from "express"

const app=express();
app.set("view engine", "pug");
app.set("views", __dirname + "/views");
app.use("/public", express.static(__dirname + "/public"));
//유저는 public 폴더에 있는 내용은 볼 수 있다! 다른 부분은 못 본다


app.get("/", (_, res) => res.render("home"));
app.get("/*", (_, res) => res.redirect("/"));
//라우터 부분

console.log("서버를 시작합니당");
const handleListen = () => console.log(`Listening on http://localhost:3000`);
//여기선 http서버를 돌린다

const server = http.createServer(app);
const wss = new WebSocket.Server({ server });
//여기선 http서버 위에 웹소켓 서버를 돌린다


//이렇게 하면 두 서버를 같이 돌릴 수 있어요
//하지만 ws서버 하나만 만들어도 괜찮긴 해요

server.listen(3000, handleListen);