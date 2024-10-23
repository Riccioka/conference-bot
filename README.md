# Conf Bot App

## General info
Conf IT bot

## Stack info
Telegram Bot API App is built using Node JS

## Структура папок проекта
* `conf` настройки web-сервера
* `htdocs` папка приложения

### Скрипт установки и запуска приложения на web-сервере
* `./start_app.sh` Для запуска приложения бота на постоянной основе. Пулит данные (git pull) с github, устанавливает модули node (npm install) и запускает приложение
* `./stop_app.sh` Для останова приложения, запущенного на постоянной основе. Может потребоваться для отладки работы приложения, см. команды ниже
* `pm2 restart appform` перезапуск приложения
