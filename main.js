let h1 = document.querySelector('h1')
let h2 = document.querySelector('h2')
let p = document.querySelector('p')
let img = document.querySelector('img')
let card = document.querySelector('#card')
let input = document.querySelector('input')
let form = document.querySelector('form')





const getWeather = async (e) => {

    e.preventDefault()

    try {
        const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=91f3f6e8ec4c49319d670527260810&q=${input.value}&aqi=yes`)
        const data = await response.json()

        h1.innerText = data.current.temp_c + "°C"
        h2.innerText = data.location.name
        p.innerText = data.current.condition.Text
        img.setAttribute('src', data.current.condition.icon)

        card.className = "p-8 rounded-lg bg-white flex items-center justify-between w-full md:w-1/2 "
    } catch (error) {
        window.alert("Please Enter Valid City Name !!!")

    }

    form.reset

}

form.addEventListener("submit", getWeather)