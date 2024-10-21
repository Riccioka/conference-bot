
const cron = require('node-cron');
const { Telegraf } = require('telegraf');
const config = require('./config');
const bot = new Telegraf(config.bot_token);
const fs = require('fs');
const images = require('./dataform.js');

const userResponses = {};
let userCounter = 1;
const userIds = new Set();

bot.start((ctx) => {
    const userId = ctx.message.from.id;
    userResponses[userId] = { step: 0 };
    userIds.add(userId);

    // Приветственное сообщение
//    ctx.replyWithPhoto(images.images.begin, 'Привет! Мы Тим и Фича, техно-котики из Ингосстраха! Круто, что ты на конференции Enterprise Agile Russia 2024!');
    ctx.replyWithSticker('CAACAgIAAxkBAUkEJGcPfqgvh0KJ6pcdMB0j-xqAgiBYAAJYUAACbjyASN8noe69izX-NgQ');
    
    setTimeout(() => {
        ctx.reply('Круто, что ты на конференции Enterprise Agile Russia 2024. В честь этого события приглашаем тебя поиграть в Ingo Agile Game.');
    }, 500);
    setTimeout(() => {
        ctx.reply('Но сначала давай познакомимся! Мы уже представились, а как зовут тебя?');
    }, 1000);
});

bot.on('text', (ctx) => {
    const userId = ctx.message.from.id;
    const userState = userResponses[userId];

    console.log(`Получено сообщение от пользователя ${userId}: ${ctx.message.text}`);
    console.log(`Текущее состояние пользователя:`, userState);

    if (!userState) {
        ctx.reply('Пожалуйста, используйте /start, чтобы начать.');
        return;
    }

    if (userState.step === 0) {
        userState.name = ctx.message.text;
        userState.step = 1;

        ctx.replyWithSticker('CAACAgIAAxkBAUkD9WcPd6OOqUlP_sJFBUkEC8HlNuKPAAIFXQAC60aBSORs_Yo7pLB-NgQ');

        setTimeout(() => {
            ctx.replyWithSticker('CAACAgIAAxkBAUkD-GcPd6bKO1icoel1YzXNYbdqtZd7AALgUQAC5QR4SC2wVbmEzM3CNgQ');
        }, 500);

        setTimeout(() => {
            ctx.reply('Мы работаем по Agile и этот подход уже стал неотъемлемой частью всех ИТ-процессов в компании.\nА теперь напиши пару слов о своей работе');
        }, 1000);
    } else if (userState.step === 1) {
        userState.position = ctx.message.text;
        userState.step = 2;
        ctx.reply('Звучит здорово!\nДавай обменяемся контактами. Наш адрес: hr@ingos.ru');

        setTimeout(() => {
            ctx.replyWithSticker('CAACAgIAAxkBAUkD-2cPd6jU9-Vmjqu36xAhhdHf61eZAAK8UAACQrx4SPlV25YnLfdGNgQ');
        }, 500);

        setTimeout(() => {
            ctx.reply('Укажи свои контакты (email или номер телефона)');
        }, 1000);
    } else if (userState.step === 2) {
        userState.contacts = ctx.message.text;
        userState.step = 3;

        userState.uniqueId = userCounter++;
        const userData = `Номер: ${userState.uniqueId}, Имя: ${userState.name}, Должность: ${userState.position}, Контакты: ${userState.contacts}\n`;

        // Запись данных
        fs.appendFile('htdocs/answers/user_responses.txt', userData, (err) => {
            if (err) {
                console.error('Ошибка записи файла:', err);
                ctx.reply('Произошла ошибка при сохранении ваших данных.');
                return;
            } else {
                console.log('Ответы сохранены.');
            }
        });

        // Ответ пользователю
        ctx.reply('Вау! Поздравляю! Теперь ты участник розыгрыша супер-призов, который состоится в 14:00 и в 16:15 возле стенда!');

        setTimeout(() => {
            ctx.reply('И прямо сейчас подходи к нашим стендистам и получай наклейки за знакомство :)');
        }, 500);
        setTimeout(() => {
            ctx.replyWithSticker('CAACAgIAAxkBAUkD_mcPd6qKboukHw-bnCcNghX-2MY1AAJGWwAC5bKBSM1tHwABXd-84zYE');
        }, 1000);

        setTimeout(() => {
            ctx.reply(`Твой уникальный номер: ${userState.uniqueId}`);
        }, 1500);
    }
});

// Уведомление в 14:10 пришло в 17:10
cron.schedule('40 9 * * *', () => {
    userIds.forEach(async (userId) => {
        try {
            await bot.telegram.sendMessage(userId, 'Напоминание: подойти к стенду!');
        } catch (error) {
            console.error(`Ошибка отправки сообщения пользователю ${userId}:`, error);
        }
    });
});

// Запуск бота
bot.launch();

