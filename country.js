class Country {
    constructor(name, lang, greeting, colors) {
        this.name = name;
        this.lang = lang;
        this.greeting = greeting;
        this.colors = colors;
    }
}
let usa = new Country("USA", "Murican", "Why Hello there world! Have some McDonalds", ["red", "white", "blue"]);
let mexico = new Country("Mexico", "Spanish", "Hola mundo!", ["red", "white", "green"]);
let algeria = new Country("Algeria", "Arabic and Berber", "Marhaban bialealam!", ["blue", "yellow", "red"])
let france = new Country("France", "French", "Bonjour le monde!", ["blue", "white", "red"]);
let germany = new Country("Germany", "German", "Hallo Welt!", ["black", "red", "gold"])
function SwitchCountry() {
    let select = document.getElementById('CountryList');
    let input = select.options[select.selectedIndex].value;
    let country;

    if (input === "USA") {
        //set country to usa 
        country = usa;
    }
    else if (input === "Mexico") {
        country = mexico;
    }
    else if (input === "Algeria") {
        country = algeria;
    }
    else if (input === "France") {
        country = france;
    }
    else if (input === "Germany") {
        country = germany;
    }
    document.getElementById("Color1").style.backgroundColor = country.colors[0];
    document.getElementById("Color2").style.backgroundColor = country.colors[1];
    if (country.colors.length < 3)
    {
        document.getElementById("Color3").style.backgroundColor = "black";
    }
    else
    {
        document.getElementById("Color3").style.backgroundColor = country.colors[2];
    }
    document.getElementById("CountryName").innerText = country.name;
    document.getElementById("OfficialLanguage").innerText = country.lang;
    document.getElementById("HelloWorld").innerText = country.greeting;
    
function DisplayColors()
{
    document.getElementById("CountryName").innerText = this.name;
    document.getElementById("OfficialLanguage").innerText = this.lang;
    document.getElementById("HelloWorld").innerText = this.greeting;
    document.getElementById("Color1").style.color = this.colors[0];
    document.getElementById("Color2").style.color = this.colors[1];
    if (this.colors.length < 3)
    {
        document.getElementById("Color3").style.color = "black";
    }
    else
    {
        document.getElementById("Color3").style.color = this.colors[2];
    }
}
}
