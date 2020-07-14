let blueberry = 15.678;
let watermelon = 123.965;
let coconut = 90.2345;
let fruitArray = [blueberry, watermelon, coconut];
let maxPrice = Math.max (blueberry, watermelon, coconut);
document.write ("Максимальна ціна: " + maxPrice + "<br/><br/>");
let minPrice = Math.min (blueberry, watermelon, coconut);
document.write ("Мінімальна ціна: " + minPrice + "<br/><br/>");
let sumPrice = blueberry + watermelon + coconut;
document.write ("Сума цін: " + sumPrice + "<br/><br/>");
let blueberryInteger = Math.floor (blueberry);
let watermelonInteger = Math.floor (watermelon);
let coconutInteger = Math.floor (coconut);
let integerSum = blueberryInteger + watermelonInteger + coconutInteger;
document.write ("Сума цілих частин: " + integerSum + "<br/><br/>");
let topSum = Math.ceil (integerSum / 100) * 100;
document.write ("Заокруглена сума: " + topSum + "<br/><br/>");
if (integerSum % 2 == 0) {
  let pairNumber = "Pair number"
  document.write ("Парне чи непарне число: " + pairNumber + "<br/><br/>");
} else {
  let unpairedNumber = "Unpaired number"
  document.write ("Парне чи непарне число: " + unpairedNumber + "<br/><br/>");
}
let payment = 500;
let remainder = payment - sumPrice;
document.write ("Решта з 500 грн: " + remainder + "<br/><br/>");
let average = sumPrice / fruitArray.length;
let averageRounded = Math.floor (average * 100) / 100;
document.write ("Середня сума, округлена до 2-го знаку після коми: " + averageRounded + "<br/><br/>");
let discount = Math.floor (Math.random() * 100);
document.write ("Сума знижки: " + discount + "%" + "<br/><br/>");
let discountPrice = (sumPrice * discount) / 100;
let cash = Math.floor ((sumPrice - discountPrice) * 100) / 100;
document.write ("Оплата зі знижкою: " + cash + "<br/><br/>");
let cost = sumPrice / 2;
document.write ("Собівартість: " + cost + "<br/><br/>");
let profit = Math.floor ((cost - discountPrice) *100) / 100;
document.write ("Чистий прибуток: " + profit + "<br/><br/>");

let priceBox = document.querySelector(".price");
priceBox.innerHTML =
`
<p>Максимальна ціна: ${maxPrice}</p>
<p>Мінімальна ціна: ${minPrice}</p>
<p>Сума цін: ${sumPrice}</p>
<p>Сума цілих частин: ${integerSum} </p>
<p>Заокруглена сума: ${topSum}</p>
<p>Парне чи непарне число: ${pairNumber}</p>
<p>Решта з 500 грн: ${remainder}</p>
<p>Середня сума, округлена до 2-го знаку після коми: ${averageRounded}</p>
<p>Сума знижки: ${discount}%</p>
<p>Оплата зі знижкою: ${cash}</p>
<p>Собівартість: ${cost}</p>
<p>Чистий прибуток: ${profit}</p>
`;
