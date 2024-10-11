const v = 0.1

let version = document.querySelector(".version")
version.textContent = `VER: ${v}`


let tg = window.Telegram.WebApp;
tg.ready()
let myConsole = document.querySelector(".console");
let sendButton = document.querySelector(".button");

myConsole.value = 'Wake up! Neo'
sendButton.addEventListener('click', () => {
    tg.showPopUp("message has been sent")
    tg.sendData(JSON.stringify({ result: 'ok', data: myConsole.value }))
})