const { Telegraf } = require('telegraf');
const config = require('./config');
const bot = new Telegraf(config.bot_token);
const dataform = require('./dataform');
const fs = require('fs');

const userResponses = {};
let userCounter = 1; // Счетчик для уникального номера

function askQuestion(ctx, question) {
    ctx.reply(question);
}

bot.start((ctx) => {
    const userId = ctx.message.from.id;
    userResponses[userId] = { step: 0 };
    askQuestion(ctx, 'Как вас зовут?');
});

bot.on('text', (ctx) => {
    const userId = ctx.message.from.id;
    const userState = userResponses[userId];

    if (!userState) {
        ctx.reply('Пожалуйста, используйте /start, чтобы начать.');
        return;
    }

    if (userState.step === 0) {
        userState.name = ctx.message.text;
        userState.step = 1;
        askQuestion(ctx, 'Какая у вас должность?');
    } else if (userState.step === 1) {
        userState.position = ctx.message.text;
        userState.step = 2;
        askQuestion(ctx, 'Укажите ваши контакты (например, email или телефон).');
    } else if (userState.step === 2) {
        userState.contacts = ctx.message.text;
        userState.step = 3;

        // Присваиваем уникальный номер
        userState.uniqueId = userCounter++;

        // Сохранение ответов в файл
        const userData = `Номер: ${userState.uniqueId}, Имя: ${userState.name}, Должность: ${userState.position}, Контакты: ${userState.contacts}\n`;
        fs.appendFile('answers/user_responses.txt', userData, (err) => {
            if (err) {
                console.error('Ошибка записи файла:', err);
            } else {
                console.log('Ответы сохранены.');
            }
        });

        // Ответ пользователю с уникальным номером
        ctx.reply(`Спасибо за ваши ответы! Вот что вы указали:
        \nИмя: ${userState.name}
        \nДолжность: ${userState.position}
        \nКонтакты: ${userState.contacts}`);

        setTimeout(() => {
            ctx.reply(`Вам присвоен уникальный номер: ${userState.uniqueId}`);
        }, 500); // Задержка в 500 миллисекунд для разделения сообщений
    }
});

// Запуск бота
bot.launch();

