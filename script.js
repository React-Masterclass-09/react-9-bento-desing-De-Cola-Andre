const city_search = document.querySelector('#city_search');
const button_search = document.querySelector('#button_search');
//scop globale per scattare funzioni asincrone

const getData= async(city)=>{
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},it&appid=ebfce8ee7ece2bb5f6b7373393683d63&lang=it`);
    const json= await response.json();
    return json;
}
button_search.addEventListener('click', ()=>{
    domManipulation(city_search.value);
});
//questa funzione si occupa di tutte le manipolazioni del dom
const domManipulation = async (city)=>{
    const json = await getData(city);
    city_search.value="";
    console.log(json)
    const temp_min = document.querySelector('#temp_min');
    const temp = document.querySelector('#temp');
    const temp_max = document.querySelector('#temp_max');
    const city_name = document.querySelector('#city_name'); 
    const lat = document.querySelector('#lat'); 
    const lon = document.querySelector('#lon'); 
    const descrizione = document.querySelector('#descrizione'); 
    const sunrise = document.querySelector('#sunrise'); 
    const sunset = document.querySelector('#sunset'); 
    temp_min.innerHTML= `Minima:${(json.main.temp_min - 273.15).toFixed(2)}°`;
    temp.innerHTML= `Media:${(json.main.temp_min - 273.15).toFixed(2)}°`;
    temp_max.innerHTML= `Massima:${(json.main.temp_min - 273.15).toFixed(2)}°`;
    city_name.innerHTML = json.name;
    lat.innerHTML= `Lat:${json.coord.lat}`;
    lon.innerHTML= `Long:${json.coord.lon}`;
    descrizione.innerHTML= json.weather[0].description;
    sunrise.innerHTML=`Alba: ${new Date(json.sys.sunrise * 1000).toLocaleTimeString('it-IT')}`;
    sunset.innerHTML=`Tramonto: ${new Date(json.sys.sunset * 1000).toLocaleTimeString('it-IT')}`;
    

}