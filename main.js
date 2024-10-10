let tg = window.Telegram.WebApp;
let console = document.querySelector(".console");
let sendButton = document.querySelector(".button");

console.value = 'Wake up! Neo'
sendButton.onclick = () => {
    tg.sendData("OK")
    tg.sendData(JSON.stringify({ result: 'ok', data: console.textContent }))
    alert("message has been sent")
}