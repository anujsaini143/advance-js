const inp = document.querySelector("#inp");
const API_KEY = `21805bff7224936fa25d6cec016a0a4b`;
const weather = document.querySelector("#weather-box")
inp.addEventListener(
    "keyup",
    async (e) => {
        if (e.key == "Enter") {
            weather.innerHTML = "<h1>LOADING...</h1>"
            const city = e.target.value;
            e.target.value = ""
            const responce = await fetch(`https://api.openweathermap.org/data/2.5/weather? // q=${city}&appid=${API_KEY}&units=matric`);
            const data = await responce.json();
            if (data.cod == "200") {
                weather.innerHTML = `<div class="row" id="weather-box">
            <div><i class="fa-solid fa-cloud"></i></div>
            <div>
                <div>
                    <h2>${data.main.temp} C</h2>
                    <h4> ${data.weather[0].main} </h4>
                </div>
            </div> 
            </div>`;
            } else {
                weather.innerHTML = `<h1>City Not Found</h1>`;
            }

        }
    }
)