const resultBlock = document.createElement("div");

resultBlock.style.height = "200px";
resultBlock.style.backgroundColor = "#3498db";
resultBlock.style.textAlign = "center";
resultBlock.style.lineHeight = "200px";
resultBlock.style.fontFamily = 'Arial';

// Добавляем блок на страницу при загрузке контента
document.addEventListener("DOMContentLoaded", function () {
    const container = document.getElementById("container");
    container.appendChild(resultBlock);

    // Выполняем вычисления
    const priceProduct = parseFloat(prompt('Cтоимость товара'));
    const clientMoney = parseFloat(prompt('Кол-во ваших денег'));

    if (priceProduct === clientMoney) {
        resultBlock.textContent = 'Покупка совершена!!';
    } else if (priceProduct > clientMoney) {
        resultBlock.textContent = `Для покупки не хватает ${priceProduct - clientMoney} рублей`;
    } else {
        resultBlock.textContent = `Покупка совершена. Сдача ${clientMoney - priceProduct} рублей`;
    }
});