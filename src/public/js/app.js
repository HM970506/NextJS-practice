const socket = io();

const welcome = document.getElementById("welcome");
const form = welcome.querySelector("form");
const room = document.getElementById("room");

room.hidden=true;
//우선 표시되지 않게 하고,

let roomName; //룸네임을 받을 겁니다

function showRoom(){ //서버에 방 이름이 전달되면 방이름을 변경하는 함수
    welcome.hidden=true; //숨겨
    room.hidden = false; //꺼내

    const h3 = room.querySelector("h3");
    h3.innerText = `Room ${roomName}`; //컴포넌트화 하고싶어~~

}

function handleRoomSubmit(event) {
    event.preventDefault();
    const input = form.querySelector("input");
    socket.emit("enter_room", input.value, showRoom);  //서버로 키워드와 입력한 방이름과 함수를 보냅니다
    roomName = input.value; //룸네임을 반영해 줍시다..리액트 하고 싶어잇
    
    input.value = "";
  }
  
  form.addEventListener("submit", handleRoomSubmit);