// Пользователь может оформить доставку товара к себе в страну, указав ее при посещении страницы в prompt. Учти, пользователь может ввести имя страны не только буквами нижнего регистра, а к примеру 'кИтАЙ'.

// Напиши скрипт который выводит сообщение о стоимости доставки в указанную страну. Обязательно используй switch. Формат сообщения: 'Доставка в [страна] будет стоить [цена] кредитов'.

// Но доставка есть не везде, если указанной страны нет в списке, то выводи в alert сообщение 'В вашей стране доставка не доступна'.

// Ниже приведен список стран и стоимость доставки.

// Китай - 100 кредитов
// Чили - 250 кредитов
// Австралия - 170 кредитов
// Индия - 80 кредитов
// Ямайка - 120 кредитов

let deliveryCountry = prompt('Пожалуйста укажите желаемую страну доставки').toLowerCase();
const deliveryPriceChina = 100;
const deliveryPriceChile = 250;
const deliveryPriceAustralia = 170;
const deliveryPriceIndia = 80;
const deliveryPriceJamaica = 120;

switch (deliveryCountry) {
    case "китай":
        alert(`Доставка в ${deliveryCountry} будет стоить ${deliveryPriceChina} кредитов`);
        break;
    case "чили":
        alert(`Доставка в ${deliveryCountry} будет стоить ${deliveryPriceChile} кредитов`);
        break;
    case "австралия":
        alert(`Доставка в ${deliveryCountry} будет стоить ${deliveryPriceAustralia} кредитов`);
        break;
    case "индия":
        alert(`Доставка в ${deliveryCountry} будет стоить ${deliveryPriceIndia} кредитов`);
        break;
    case "ямайка":
        alert(`Доставка в ${deliveryCountry} будет стоить ${deliveryPriceJamaica} кредитов`);
        break;

    default:
        console.log('В вашей стране доставка не доступна');
}