window.onload = function() {
    // Получаем таблицу, input для фильтрации и кнопку для сортировки
    var table = document.querySelector('table');
    var filterInput = document.querySelector('#filter');
    var sortButton = document.querySelector('#sort');

    // Отображаем все продукты при загрузке страницы
    displayProducts(products, table);

    // Добавляем обработчик событий для фильтрации
    filterInput.addEventListener('keyup', function() {
        var filter = filterInput.value.toLowerCase();
        var filteredProducts = products.filter(function(product) {
            var name = product.product_name.toLowerCase();
            return name.includes(filter);
        });
        displayProducts(filteredProducts, table);
    });

    // Добавляем обработчик событий для сортировки
    sortButton.addEventListener('click', function() {
        // Сортируем продукты по цене
        products.sort(function(a, b) {
            return a.price - b.price;
        });
        // Отображаем отсортированные продукты
        displayProducts(products, table);
    });
};

function displayProducts(products, table) {
    // Удаляем все строки, кроме первой (заголовок)
    while (table.rows.length > 1) {
        table.deleteRow(1);
    }

    // Добавляем строки для каждого продукта
    products.forEach(function(product) {
        var row = table.insertRow();
        var cell1 = row.insertCell();
        var cell2 = row.insertCell();
        cell1.textContent = product.product_name;
        cell2.textContent = product.price;
    });
}
