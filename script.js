let countriesInfo = [{
    name: "India",
    population: " 1,394,975,829",
    region: "Asia",
    flag:"https://upload.wikimedia.org/wikipedia/commons/7/7b/India_flag_300.png",
    capital: "New delhi"},
    {
        name: "Germany",
        population: "81,770,900",
        region: "Europe",
        flag:"https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Flag_of_Germany.svg/1200px-Flag_of_Germany.svg.png",
        capital: "Berlin"},
    {name: "United states",
    population: "323,947,000",
    region: "Americas",
    flag:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/640px-Flag_of_the_United_States.svg.png",
    capital: "Washington D.C"},
    {
        name: "Brazil",
        population: "206,135,893",
        region: "Americas",
        flag:"https://upload.wikimedia.org/wikipedia/commons/0/01/Brazil_flag_300.png",
        capital: "Brasilia"},
    {name: "Iceland",
    population: "334,300",
    region: "Europe", 
    flag:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Flag_of_Iceland.svg/640px-Flag_of_Iceland.svg.png",
    capital: "Reykjavik"}]


for(i =0;i<countriesInfo.length;i++){
    const classElement = document.createElement("div");
  
    classElement.setAttribute("class", "card");
    document.body.append(classElement);
    const imageElement = document.createElement("img");
    imageElement.setAttribute("class", "cardPhoto");
    imageElement.setAttribute(
      "src",
      countriesInfo[i].flag);
    classElement.append(imageElement);
    const cardData = document.createElement("div");
    cardData.setAttribute("class", "cardData");
    classElement.append(cardData);
    const countryName = document.createElement("h1");
    countryName.innerText = countriesInfo[i].name;
    cardData.append(countryName);
    const population = document.createElement("p");
    population.innerText = "Population:"+ countriesInfo[i].population;
    cardData.append(population);
    const region = document.createElement("p");
    region.innerText = "Region:" + countriesInfo[i].region;
    cardData.append(region);
    const capital = document.createElement("p");
    capital.innerText = "Capital:" + countriesInfo[i].capital;
    cardData.append(capital);
}
  
  
  
