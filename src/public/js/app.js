//프론트엔드에서 구동되는 부분..      로컬호스트3000의 상대적 위치
const socket = new WebSocket(`ws://${window.location.host}`);
//웹소켓을 쓸 거에요~ ws서버이름은 저곳입니다. 
//http가 아니라 웹소켓이니까 ws를 넣어주는 겁니다!

//이벤트리스너처럼 사용하면 됩니다
socket.addEventListener("open", ()=>{console.log("브라우저: 브라우저 연결")});
socket.addEventListener("message", (m)=>{console.log("브라우저가 받은 메시지:" , m.data)});
socket.addEventListener("close", ()=>{console.log("클라이언트 끊김")});

setTimeout(()=>{socket.send("브라우저가 보낸 메시지입니다")},1000);