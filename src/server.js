//서버에서 구동되는 부분

import express from "express"

const app=express();
app.set("view engine", "pug");
app.set("views", __dirname + "/views");
app.use("/public", express.static(__dirname + "/public"));
//유저는 public 폴더에 있는 내용은 볼 수 있다! 다른 부분은 못 본다

app.get("/", (req, res) => res.render("home"));
//라우터 부분

console.log("Test");

app.listen(3000);