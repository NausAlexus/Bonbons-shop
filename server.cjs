const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const cors = require('cors');

const app = express();

// Используйте CORS
app.use(cors());

const TELEGRAM_BOT_TOKEN = 'ТОКЕН ВАШЕГО БОТА'; // Замените на ваш токен
const CHAT_ID = 'ID ВАШЕГО ЧАТА'; // Замените на ваш ID чата

app.use(bodyParser.json());

app.post('/send-data', (req, res) => {
    const userData = req.body;

    // Формируем список покупок в нужном формате
    const formattedShoppingList = userData.shoppingList.map(item => {
        return `\nid: ${item.id}, Наименование: ${item.title}, Цена: ${item.price} $, Количество: ${item.quantity};`;
    }).join('\n'); // Соединяем элементы в строку, разделяя их переносом строки

    const message = `
        **********Новая заявка**********
        ___________________________
        Имя: ${userData.name};
        ___________________________
        Телефон: ${userData.phone};
        ___________________________
        Комментарий: ${userData.comment};
        ___________________________
        Адрес: ${userData.address};
        ___________________________
        Способ доставки: ${userData.deliveryOption};
        ___________________________
        Общая стоимость: ${userData.totalPrice} $;
        ___________________________
        Список покупок: \n${formattedShoppingList}
    `;

    axios.post(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
        chat_id: CHAT_ID,
        text: message,
    })
    .then(response => {
        res.status(200).json({ success: true });
    })
    .catch(error => {
        console.error('Ошибка при отправке в Telegram:', error);
        res.status(500).json({ success: false, error: error.message });
    });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Сервер запущен на http://localhost:${PORT}`);
});