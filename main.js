const v = 0.121

let version = document.querySelector(".version")
version.textContent = `VER: ${v}`


let tg = window.Telegram.WebApp;
tg.ready()
let myConsole = document.querySelector(".console");
let sendButton = document.querySelector(".button");

if (tg.initDataUnsafe.user.id === 307971589) {
    myConsole.value = 'Wake up! Neo'
    sendButton.addEventListener('click', () => {
        tg.sendData(JSON.stringify({ result: 'ok', data: myConsole.value }))
    })
} else {
    myConsole.style.backgroundColor = '#ff0000'
    myConsole.value = `${tg.initDataUnsafe.user.first_name}! У Вас нет доступа к этому приложению!`
    sendButton.hidden = true
}
