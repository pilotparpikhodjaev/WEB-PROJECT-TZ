<?php
// Указываем параметры для подключения к базе данных
$host = 'localhost';
$db = 'my_database';
$user = 'my_user';
$password = 'my_password';

// Создаем новое PDO соединение
$dbh = new PDO("mysql:host=$host;dbname=$db", $user, $password);

// Выполняем SQL запрос для получения списка продуктов
$stmt = $dbh->prepare('SELECT product_name, price FROM products');
$stmt->execute();

// Получаем все продукты в виде ассоциативного массива
$products = $stmt->fetchAll(PDO::FETCH_ASSOC);

// Конвертируем массив продуктов в JSON формат и выводим его
echo json_encode($products);
?>
