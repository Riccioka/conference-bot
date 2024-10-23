const cron = require('node-cron');
const { Telegraf } = require('telegraf');
const config = require('./config');
const bot = new Telegraf(config.bot_token);
const fs = require('fs');
const images = require('./dataform.js');
const path = require('path');

const userResponses = {};
let userCounter = 1;
const userIds = new Set();

bot.start((ctx) => {
    const userId = ctx.message.from.id;
    userResponses[userId] = { step: 0 };
    userIds.add(userId);

//    ctx.replyWithPhoto(images.images.begin, 'Привет! Мы Тим и Фича, техно-котики из Ингосстраха! Круто, что ты на конференции Enterprise Agile Russia 2024!');
    ctx.replyWithSticker('CAACAgIAAxkBAUpaa2cYuB4gDCGO95LLYAtZICmaNoByAALUVwACSxnISMKcBn4hsQ5fNgQ');

    setTimeout(() => {
        ctx.reply('Круто, что ты на конференции Enterprise Agile Russia 2024. В честь этого события приглашаем тебя поиграть в Ingo Agile Game. Но сначала давай познакомимся!');
    }, 1000);
    setTimeout(() => {
        ctx.reply('Мы уже представились, а как зовут тебя?');
    }, 2000);
});

bot.command('chatit', (ctx) => {
    ctx.reply(ctx.message.chat);
})

bot.command('getdata', (ctx) => {
    console.log('Команда /getdata вызвана пользователем:', ctx.from.id);

    const filePath = '/home/user/fproject/conference-bot/htdocs/answers/user_responses.txt';
    console.log('Путь к файлу:', filePath);

    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Ошибка при чтении файла:', err);
            ctx.reply('Не удалось получить данные.');
        } else {
            if (data.length === 0) {
                ctx.reply('Файл пустой.');
            } else {
                console.log('Считанные данные:', data);
                const formattedData = data.split('\n').map(line => line.trim()).join('\n');
                const chunkSize = 4096;
                for (let i = 0; i < formattedData.length; i += chunkSize) {
                    ctx.reply(formattedData.slice(i, i + chunkSize));
                }
            }
        }
    });
});

bot.command('getdata1', (ctx) => {
    console.log('Команда /getdata вызвана пользователем:', ctx.from.id);

    const filePath = '/home/user/fproject/conference-bot/htdocs/answers/user_responses.txt';
    console.log('Путь к файлу:', filePath);

    if (fs.existsSync(filePath)) {
        console.log('Файл найден, отправляю файл...');

        // Чтение файла с кодировкой UTF-8 и отправка через Buffer
        fs.readFile(filePath, (err, data) => {
            if (err) {
                console.error('Ошибка при чтении файла:', err);
                ctx.reply('Не удалось прочитать файл.');
                return;
            }

            ctx.telegram.sendDocument(ctx.chat.id, {
                source: fs.createReadStream(filePath),
                filename: path.basename(filePath)
            }, {
                contentType: 'text/plain; charset=utf-8'
            }).catch((error) => {
                console.error('Ошибка при отправке файла:', error);
                ctx.reply('Не удалось отправить файл.');
            });

        });
    } else {
        console.error('Файл не найден:', filePath);
        ctx.reply('Файл с данными не найден.');
    }
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

        ctx.replyWithSticker('CAACAgIAAxkBAUpac2cYuCLWl7HqzFmunKz2egGibGCuAANdAALWQ8hIdVVUcOBxrHs2BA');

        setTimeout(() => {
            ctx.replyWithSticker('CAACAgIAAxkBAUpae2cYuCYp-sZ4a7NBzGrFMjmBpUWWAAL8XgACRd_BSFUpO9pEVQOpNgQ');
        }, 1000);

        setTimeout(() => {
            ctx.reply('Мы работаем по Agile и этот подход уже стал неотъемлемой частью всех ИТ-процессов в компании.\n');
        }, 2000);

        setTimeout(() => {
            ctx.reply('А где работаешь ты? Чем занимаешься?\n');
        }, 3000);
    } else if (userState.step === 1) {
        userState.position = ctx.message.text;
        userState.step = 2;
        ctx.reply('Звучит здорово!\nДавай обменяемся контактами. Наш адрес: hr@ingos.ru');

        setTimeout(() => {
            ctx.replyWithSticker('CAACAgIAAxkBAUpagWcYuCql1IPCF0BdGBGQPdvTVKsdAAIVYgACg_vASM62bGjs9dCgNgQ');
        }, 1000);

        setTimeout(() => {
            ctx.reply('Укажи свои контакты (e-mail или номер телефона)');
        }, 2000);
    } else if (userState.step === 2) {
        userState.contacts = ctx.message.text;
        userState.step = 3;

        userState.uniqueId = userCounter++;
        const userData = `Номер: ${userState.uniqueId}, Имя: ${userState.name}, Должность: ${userState.position}, Контакты: ${userState.contacts}\n`;

        fs.appendFile('htdocs/answers/user_responses.txt', userData, (err) => {
            if (err) {
                console.error('Ошибка записи файла:', err);
                ctx.reply('Произошла ошибка при сохранении ваших данных.');
                return;
            } else {
                console.log('Ответы сохранены.');
            }
        });

        ctx.reply('Вау, нам очень повезло с тобой познакомиться!\nПоздравляю! Теперь ты участник розыгрыша супер-призов, который состоится в 14:00 и в 16:15 возле стенда!');

        setTimeout(() => {
            ctx.reply('И прямо сейчас подходи к нашим стендистам и получай наклейки за знакомство :)');
        }, 1000);
        setTimeout(() => {
            ctx.replyWithSticker('CAACAgIAAxkBAUpahWcYuCzuGHdFkWM3TWof0li9X0TxAALgVQAC1Z7ISDdXW5B8Y8UMNgQ');
        }, 2000);

        setTimeout(() => {
            ctx.reply(`Твой уникальный номер: ${userState.uniqueId}`);
        }, 3000);
    }
});

// Уведомление в 14:10 пришло в 17:10,
// 13:55
cron.schedule('37 12 * * *', () => {
    userIds.forEach(async (userId) => {
        try {
            await bot.telegram.sendMessage(userId, 'Скорее! Через 5 минут розыгрыш супер-призов у стенда "Ингосстрах"! Ждем тебя!');
            await bot.telegram.sendSticker(userId, 'CAACAgIAAxkBAUpajmcYuDAobrrCXxA7S7eVHvD_GSm0AAIXVwACLMHISAGYU8SeFX8VNgQ');
        } catch (error) {
            console.error(`Ошибка отправки сообщения пользователю ${userId}:`, error);
        }
    });
});

//16:10
cron.schedule('40 12 * * *', () => {
    userIds.forEach(async (userId) => {
        try {
            await bot.telegram.sendMessage(userId, 'Это снова мы! Через 5 минут состоится заключительный розыгрыш супер-призов. Скорее к стенду "Ингосстрах", мы очень тебя ждем!');
        } catch (error) {
            console.error(`Ошибка отправки сообщения пользователю ${userId}:`, error);
        }
    });
});

// Запуск бота
bot.launch();
