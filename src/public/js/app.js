const socket = io();

const welcome = document.getElementById("welcome");
const form = welcome.querySelector("form");
const room = document.getElementById("room");

room.hidden=true;
//우선 표시되지 않게 하고,

let roomName; 
let nickName;

function addMessage(message) { //ul에 메시지를 추가해주는 함수
    const ul = room.querySelector("ul");
    const li = document.createElement("li");
    li.innerText = message;
    ul.appendChild(li);
  }

function handleMessageSubmit(event) { //메시지용 함수..처음에 했던 거랑 같다!
    event.preventDefault();
    const input = room.querySelector("input");
    const value = input.value;

    //서버에 메시지와 해당 메시지가 보일 룸 이름, 그리고 실행될 함수를 보냅니다
    socket.emit("new_message", `${nickName}: ${input.value}`, roomName, () => { // 클->서 메시지 보냄
      addMessage(`You: ${value}`);
    });

    input.value = "";
  }

  socket.on("new_message", addMessage); // 서->클 메시지 받음


function showRoom(){ //서버에 방 이름이 전달되면 방이름을 변경하는 함수
    welcome.hidden=true; 
    room.hidden = false; 

    const h3 = room.querySelector("h3");
    h3.innerText = `Room ${roomName}`; 
    const form = room.querySelector("form"); //메시지 보내기 버튼에 동작 추가
    form.addEventListener("submit", handleMessageSubmit);
}

function handleRoomSubmit(event) {
    event.preventDefault();
    const input1 = document.getElementById("roomname");
    const input2 = document.getElementById("nickname");
    socket.emit("enter_room",input1.value,  input2.value,showRoom);  //서버로 키워드와 입력한 방이름과 함수를 보냅니다
    roomName = input1.value;
    nickName = input2.value;
    
    input1.value = "";
    input2.value = "";
  }
  
  form.addEventListener("submit", handleRoomSubmit);

  socket.on("welcome", (nownickName) => { //welcome 키워드 받음
    addMessage(`${nownickName} joined!`);
  });
  
  socket.on("bye", (nownickName) => { //bye 키워드 받음
    addMessage(`${nownickName} left ㅠㅠ`);
  });
  
  socket.on("room_change", (rooms) => { //rome change 키워드 받음
    const roomList = document.getElementById("openroom");
    roomList.innerHTML = "";
    if (rooms.length === 0) return; //방이 한개도 없으면 빈공간으로 만들기

    rooms.forEach((room) => {
    const li = document.createElement("li");
    li.innerText = room;
    roomList.append(li);
    });
});