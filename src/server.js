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


//이렇게 하면 두 서버를 같이 돌릴 수 있어요
//하지만 ws서버 하나만 만들어도 괜찮긴 해요

wsServer.on("connection", (socket) => { //커넥션이 되면
  socket.onAny((event) => { //이벤트가 발생하기만 하면 해당 이벤트 키워드를 어디에서든 출력!
    console.log(`Socket Event: ${event}`);
  });

  socket.on("enter_room", (roomName, done) => { //해당 키워드가 도착하면
    
    let startRoom=socket.id;
    console.log("입장 전 소켓 룸 목록:", socket.rooms);
    socket.join(roomName);  //roOName 방에 들어가는 메서드...
    socket.leave(startRoom); //기본방은 나가준다
    console.log("입장 후 소켓 룸 목록:", socket.rooms);
    
    done(); //받아온 함수를 실행시키기
    
    socket.to(roomName).emit("welcome");
    //그리고 해당 이름의 룸에 welcome 키워드를 보냄
  });

  socket.on("disconnecting", () => { //연결이 끊기면 연결된 다른 모든 룸에 bye를 남기고 감.
    socket.rooms.forEach((room) => socket.to(room).emit("bye"));
  });
//disconnect : 연결이 완전히 끊어졌을때 발생하는 이벤트 (room 정보가 비어있음)
//disconnecting : 브라우져는 이미 닫았지만 아직 연결이 끊어지지 않은 그 찰나에 발생하는 이벤트 (그래서 room 정보가 살아있음)
  

  socket.on("new_message", (msg, room, done) => { //새 메시지 오면 룸에 메시지 보냄
    socket.to(room).broadcast.emit("new_message", msg);
    done(); //메시지 추가 함수
  });
});
  
const handleListen = () => console.log(`Listening on http://localhost:3000`);
//서버 실행
httpServer.listen(3000, handleListen);


