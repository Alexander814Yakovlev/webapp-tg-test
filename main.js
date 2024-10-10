let tg = window.Telegram.WebApp;
tg.ready()
let console = document.querySelector(".console");
let sendButton = document.querySelector(".button");

console.value = 'Wake up! Neo'
sendButton.addEventListener('click', () => {
    alert("message has been sent")
    tg.sendData("OK")
    tg.sendData(JSON.stringify({ result: 'ok', data: console.textContent }))

})