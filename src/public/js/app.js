//프론트엔드에서 구동되는 부분
const socket = new WebSocket(`ws://${window.location.host}`);
//웹소켓을 쓸 거에요~ ws서버이름은 저곳입니다
//http가 아니라 웹소켓이니까 ws를 넣어주는 겁니다!