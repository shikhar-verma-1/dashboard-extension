const IMAGE_URL = "https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature"
const CRYPTO_URL = "https://api.coingecko.com/api/v3/coins/dogecoin"



fetch(IMAGE_URL)
    .then(res=>res.json())
    .then(data=>{
        console.log(data.urls.regular)
        document.body.style.backgroundImage = `url(${data.urls.full})`;
        document.getElementById('author').textContent = `By: ${data.user.name}`;
    })
    .catch(err=>{
        document.body.style.backgroundImage = `url(https://images.unsplash.com/photo-1505567745926-ba89000d255a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNDI0NzB8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MDk3MjYyOTl8&ixlib=rb-4.0.3&q=80&w=1080)`
        document.getElementById("author").textContent = `By: Dodi Achmad`
    })


fetch(CRYPTO_URL)
.then(res => {
    if (!res.ok) {
        throw Error("Something went wrong")
    }
    return res.json()
})
.then(data => {
    document.getElementById("crypto-top").innerHTML = `
        <img src=${data.image.small} />
        <span>${data.name}</span>
    `
   
    document.getElementById("crypto").innerHTML += `
        <p>🎯: $${data.market_data.current_price.usd}</p>
        <p>👆: $${data.market_data.high_24h.usd}</p>
        <p>👇: $${data.market_data.low_24h.usd}</p>
    `
})
.catch(err => console.error(err))  

function getCurrentTime() {
    const date = new Date()
    document.getElementById("time").textContent = date.toLocaleTimeString("en-us", {timeStyle: "short"})
}

setInterval(getCurrentTime, 1000)