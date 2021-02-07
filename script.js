const api = {
  key: "5afdeb742899f34527aca2265d2b4c21",
  url: "https://api.openweathermap.org/data/2.5/",
};

var inputBtn = document.getElementById("input-btn");
inputBtn.addEventListener("click", function () {
  const input = document.getElementById("input").value;
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${input}&units=metric&appid=${api.key}`
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      document.getElementById("input-result").innerText = data.name;
      const Temperature = (document.getElementById(
        "temp"
      ).innerText = Math.ceil(data.main.temp));
      const weather = (document.getElementById("status").innerText =
        data.weather[0].main);

      document
        .getElementById("image")
        .setAttribute(
          "src",
          `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
        );

      console.log(Temperature, weather);
    });
});
