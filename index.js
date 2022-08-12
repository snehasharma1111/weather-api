const btn = document.querySelector("button");
const details = document.querySelector(".details");
const name = document.querySelector(".name");
const tempc = document.querySelector(".temp");
const desc = document.querySelector(".desc");
const iconHolder = document.querySelector(".icon");

const api = '257b728760811fc7c3ac84235d147239';
console.log(api);

const input = document.querySelector("#query");

btn.addEventListener("click", (e) => {
    e.preventDefault();
    const query = input.value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(query)}&appid=${api}&units=metric`;
    console.log(url);

    fetch(url)
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            const temp = data.main.temp;
            const place = data.name;
            const icon = data.weather[0].icon;
            const speed = data.wind.speed;
            const iconUrl = `http://openweathermap.org/img/wn/${icon}@2x.png`;
            console.log(temp);
            tempc.textContent = `${temp}°C`;
            name.textContent = `${place}`;
            desc.textContent = `${speed}`;
            iconHolder.src = iconUrl;
            details.style.visibility = "visible";
        })
        .catch((err) => alert("Enter Valid Address"));
    input.value = "";
})