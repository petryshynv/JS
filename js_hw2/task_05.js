let china = 150;
let chili = 250;
let australia = 165;
let india = 90;
let yamayka = 130;

let country = prompt("Enter country for calculate delivery");
country.toLowerCase;
let editedCountryName = country.charAt(0).toUpperCase() + country.slice(1);
switch (editedCountryName) {
  case "Китай":
    alert(`Доставка в ${editedCountryName} будет стоить ${china} кредитов'`);
    break;
  case "Чили":
    alert(`Доставка в ${editedCountryName} будет стоить ${chili} кредитов'`);
    break;
  case "Австралия":
    alert(
      `Доставка в ${editedCountryName} будет стоить ${australia} кредитов'`
    );
    break;
  case "Индия":
    alert(`Доставка в ${editedCountryName} будет стоить ${india} кредитов'`);
    break;
  case "Ямайка":
    alert(`Доставка в ${editedCountryName} будет стоить ${yamayka} кредитов'`);
    break;
  default:
    alert(`В вашей стране доставка не доступна`);
}

