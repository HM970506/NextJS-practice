const socket = io();

const welcome = document.getElementById("welcome");
const form = welcome.querySelector("form");

function handleRoomSubmit(event) {
    event.preventDefault();
    const input = form.querySelector("input");
    //여기까지는 예전에 했던 것과 같은내용.
    //이제 밑에서 socket.send가 아니라 emit이라는 걸 씁니다!
    socket.emit("enter_room", { payload: input.value }, () => {console.log("10초마다 출력됩니다!");});
//socket.emit('some event', { someProperty: 'some value'}, );
//공식 문서의 props 가이드..
//세번째 인자로 들어간 함수는 뭐지...??뭐가 들어간 거야..?
//그냥 넣고 싶은 걸 계속 props로 전달할 수 있나보다..! 꼭 객체형태에 넣지 않아도 괜찮은 듯?
    //단, 함수는 꼭 인자의 마지막에 들어가야 한다!
    //이것은 백엔드단이 아닌 프론트엔드단에 실행되는 코드.. 백엔드단에서 실행되면 보안 문제가 생기니까!
    input.value = "";
  }
  
  form.addEventListener("submit", handleRoomSubmit);