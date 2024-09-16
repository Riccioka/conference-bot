module.exports = {
    ok: [ 'r01.mp4','r02.mp4','r03.mp4','r04.mp4','r05.mp4','r06.mp4','r07.mp4','r08.mp4',
          'r09.gif','r10.gif','r11.gif','r12.gif','r13.gif','r14.gif','r15.gif','r16.gif','r17.gif','r18.gif'],
    nok: [],
    images: [],
    tasks: [
        //0 - часть 1...
        "*Добро пожаловать в ДИТ challenge!*\n\nЗдесь тебе предстоит продемонстрировать свою смекалку и эрудицию, решив разнообразные логические и математические задачи.\n\nВ следующие 2 недели каждый день ты будешь решать по 1 задаче, а в финальные 3 дня по 2 задачи. На каждую задачу тебе необходимо дать верный ответ. За отсутствие ответа или неверный ответ штрафные баллы не предусматриваются.\n\n*Количество попыток для ввода правильного ответа в каждом задании: 3.*\n\nЕсли задача решена не с первой попытки, количество баллов будет меньше. Если решить задачу за 3 попытки не удастся, то начнётся следующее задание.\n\nЗадачи открываются в 12:00 GMT+3. Решать задачи можно только последовательно, подключиться можно в любой момент!\n\n*А что получат победители?*\n\nБез всяких сюрпризов: мерч и почетное звание умника или умницы ДИТ. Победители будут определены с помощью рейтинга, который складывается из количества решенных задач х 100.\n\nЧтобы узнать количество баллов, в любой момент можно дать боту команду *\/score*.\n\nРейтинг будет опубликован для всех по завершению игры.\n\n––\nУтешительный мерч будет разыгран среди всех участников *3 раза*, а финальные призы будут разыграны среди тех, кто набрал наибольшее количество баллов.\n\nВсе это поможет организовать генератор случайных чисел",
        //1
        "*Задание 1/17*\n\nОдин программист всё время посвящал работе и решению сложных задач, поэтому стал мало времени уделять жене. Однажды, придя с работы, он не увидел ужина на столе, а только записки, расклеенные по всей кухне. Когда он спросил у жены, где ужин, она сказала: ужин на кухне, но только в одной записке написана правда. Программист зашёл на кухню и прочитал их все.\n\nНа шкафчике: «ужин либо в холодильнике, либо в хлебнице».\n\nНа холодильнике: «ужин либо в шкафчике, либо вдуховке».\n\nНа хлебнице: «ужина здесь нет». \n\nНа плите: «ужин здесь, в духовке».\n\nКонечно же, он сразу понял, где ужин, и моментально наладил отношения с женой. А вы уже поняли, где был ужин?\n\n*Формат ответа: !предлогместо (БЕЗ ПРОБЕЛОВ)*",
        //2
        "*Задание 2/17*\n\nNFT-трейдер купил редкий токен на картинку с поросёнком, сумма сделки составила 6 тысяч долларов. Через время он продал токен за 7 тысяч, но передумал и выкупил обратно за 8 тысяч. Ещё через какое-то время он продал этот токен за 9 тысяч долларов.\n\nВопрос: сколько денег в итоге заработал или потерял трейдер на этой цепочке сделок? \n\n*Формат ответа: !цифра*",
        //3
        "*Задание 3/17*\n\nОдного специалиста отправили доработать ПО кофейного аппарата, а именно сделать так, чтобы тот выдавал порцию латте среднего размера – 150 мл. Когда инженер прибыл на место, он вспомнил, что забыл спросить, какую цену необходимо поставить для этой порции. Ему было известно только следующее:\n\n100 мл латте стоят 43 руб.;\n\n200 мл латте стоят 75 руб.;\n\nСтоимость стаканчиков одинаковая и не зависит от их объема.\n\nНо инженер оказался находчивым: он сразу понял,сколько должна стоить средняя порция латте и запрограммировал кофейный аппарат именно так, как было необходимо заказчику.\n\nКакова цена средней порции латте в рублях?\n\n*Формат ответа: !цифра*",
        //4
        "*Задание 4/17*\n\nУ вас есть аналоговые часы с секундной стрелкой.\n\nСколько раз в день все три стрелки часов накладываются друг на друга?\n\n*Формат ответа: !цифра*",
        //5
        "*Задание 5/17*\n\nНекоторые пингвины — птицы. Каждая птица имеет три крыла. Какое из следующих утверждений является наверняка истинным:\n\n1. Пингвины с двумя крыльями не являются птицами.\n\n2. Птицы, которые являются пингвинами, иногда имеют три крыла.\n\n3. Птицы с двумя крыльями иногда являются пингвинами.\n\n4. Пингвинов не птиц, с тремя крыльями не бывает.\n\n5. Пингвины имеют три крыла, потому что они птицы.\n\n6. Ни одно из вышеперечисленного.\n\n*Формат ответа: !цифра*",
        //6
        "*Задание 6/17*\n\nНа одном заводе производят батарейки. Программист пишет код для системы контроля качества. Из спецификаций производства он знает, что готовая батарейка может быть бракованной с вероятностью 2%.\n\nПеред упаковкой каждая батарейка проходит проверку качества, но она тоже может ошибаться: система бракует исправную батарейку с вероятностью 1% и находит неисправную батарейку с вероятностью всего 98%.\n\nПрограммисту нужно задать переменную, в которой будет храниться среднее число забракованных батареек в партии из 10 000 штук. Так он сможет следить за работой конвейера в целом.\n\nЗадача — вычислить значение переменной с забракованными батарейками.\n\n*Формат ответа: !цифра*",
        //7
        "*Задача 7/17*\n\nВ трех углах равностороннего треугольника находится по муравью. Каждый из муравьев начинает двигаться в другой случайно выбранный угол по прямой.\n\nКакова вероятность того, что ни один из муравьев не столкнется с другим муравьем?\n\n*Формат ответа: !цифра%*",
        //8
        "*Задача 8/17*\n\nВ электрическом щитке 61429526 переключателей вверх и 61430729 переключателей вниз. Для включения щитка нужно включить все переключатели: либо все вверх, либо все вниз. Но неизвестно, вверх или вниз.\n\nЗа какое минимальное количество щелчков можно включить свет?\n\n*Формат ответа: !цифра*",
        //9
        "*Задача 9/17*\n\nВ одной крупной технологической компании появился безумный рекрутер, который нанимал на работу только джуниоров. У него был хитрый план — заполнить ими весь офис и получить за это премию от начальства. Чтобы это сделать, он каждый день нанимал столько же людей, сколько уже работает в офисе. Грубо говоря, удваивал число джуниоров.\n\nКогда он только начинал, в старом офисе работал только один джуниор, но 30 дней спустя все рабочие места в офисе были полностью заняты напуганными, ничего не понимающими джуниорами.\n\nВ новом, точно таком же по размеру офисе с первого дня работает в 2 раза больше людей, чем на старте в старом — целых 2 джуниора вместо одного.\n\nСколько дней уйдёт у безумного рекрутера на то, чтобы заполнить новый офис и получить свою квартальную премию?\n\n*Формат ответа: !цифра*",
        //10
        "*Задача 10/17*\n\nВстречаются два программиста, не видевшиеся много лет. Спрашивают о житье-бытье, и в ходе разговора идет следующий диалог:\n\n– Дети есть?\n\n– Да, три дочек.\n\n– Сколько им лет?\n\n– Ну ты же программист, попробуй дойти сам. Если перемножить их возрасты, будет 36.\n\n– Недостаточно информации.\n\n– Сумма их возрастов равна номеру вооон того троллейбуса.\n\n– Недостаточно информации.\n\n– Младшая – рыжая.\n\n– Теперь все понятно!\n\nНазовите возраст детей.\n\n*Формат ответа: !цифра,цифра,цифра (от меньшего к большему БЕЗ ПРОБЕЛОВ)*",
        //11
        "*Задача 11/17*\n\nУ вас есть 8 батареек, но работают только 4 из них. Вам необходимо вставить 2 рабочие батарейки в фонарик.\n\nКакое минимальное количество пар батареек придётся проверить, чтобы фонарик точно включился?\n\n*Формат ответа: !цифра*",
        //12 - Часть 2...
        "*Финал уже близко!*\n\nС сегодняшнего дня тебе предстоит решать по 2 задачи в день! Если готов печатай фразу «продолжим» БЕЗ ПРОБЕЛОВ и с восклицательным знаком вначале, вот так:\n\n*!продолжим*",
        //13
        "*Задача 12/17*\n\nВ скачках участвуют 25 лошадей. В одной скачке может участвовать максимум 5 лошадей. Условие ограничено тем, что любая выбранная лошадь X в любом забеге скачет с одинаковой скоростью. Время и скорость лошадей засекать нельзя, можно лишь сравнить кто быстрее или медленнее.\n\nЗа какое минимальное количество забегов можно определить тройку быстрейших?\n\n*Формат ответа: !цифра*",
        //14
        "*Задача 13/17*\n\nПредставьте, что вы работаете в лаборатории, которая ищет средство от смертельной болезни. Вам на испытание пришла партия из 1 000 пробирок с лекарством, которое нужно опробовать на людях. Проверка санкционирована Минздравом, у вас имеются все лицензии, но есть проблема. Вы узнаёте, что одну пробирку перепутали и по ошибке отправили вместо лекарства ядовитый реактив. Внешне он ничем не отличается от медикамента.\n\nВам нужно как можно скорее передать пробирки в больницы для запуска клинического теста, но отправлять отравленную пробирку нельзя: погибнут люди.\n\nТесты всех пробирок займут месяцы, это очень долго. Но у вас есть лабораторные мыши. Вы знаете, что лекарство безвредно для них, а даже капля яда их убьёт за сутки. Но у вас только 10 мышей, а пробирок — 1 000.\n\nЗа сколько дней можно гарантированно найти пробирку с ядом?\n\n*Формат ответа: !цифра*",
        //15
        "*Задача 14/17*\n\nНеобходимо определить количество целых чисел из ряда от 1 до 1000, которые содержат цифры 3. При этом, если количество троек больше одной, как в числе 333, то учет всех цифр не производится, число записывается всего 1 раз.\n\nCколько чисел содержит как минимум одну цифру 3 из предложенного диапазона.\n\n*Формат ответа: !цифра*",
        //16
        "*Задание 15/17*\n\nВ среднем у человека на голове бывает 150000 волос. Они постоянно обновляются, в среднем за месяц выпадает около 3000.\n\nСколько примерно лет (опять же, в среднем) держится на голове один волос?\n\n*Формат ответа: !цифра*",
        //17
        "*Задание 16/17*\n\nВ одном IT-стартапе стали применять эджайл, начали использовать скрам, повесили канбан и другие модные слова. Из-за этого производительность труда программистов упала на 25%. Допустим, они раньше на каждую задачу тратили ровно один час, или 60 минут.\n\nНа сколько процентов теперь в среднем увеличилось время выполнения каждой задачи из баг-трекера?\n\n*Формат ответа: !цифра*",
        //18
        "*Задание 17/17*\n\n Один человек увлекался накоплением однодолларовых банкнот, 50-центовых и 25-центовых монет. Однажды у него их накопилось достаточное количество, причем все 3 вида денег было по равному количеству. Человек решил разложить их в 8 мешков так, чтобы в каждом было по одинаковому количеству каждой из 3-х видов денег.\n\nНа следующий день человек эти же деньги разложил уже в 7 мешков. На следующий день он эти же деньги разложил уже в 6 мешков. Еще через день он попытался разложить по тем же правилам в 5 мешков, но это у него уже не вышло.\n\nКакова наименьшая сумма долларов, которые этот человек мог раскладывать в мешки?\n\n*Формат ответа: !цифра*",
        //19
        "*Ура! ДИТ challenge завершён!* Отличная работа. Рейтинг участников будет опубликован вместе с именами победителей 10 марта. Ну, и, конечно, разыграем утешительный мерч!"
    ],
    conds: [
        {answer: ["!поехали"], time: 0, tryouts: 0, points: 0}, //0 --
        {answer: ["!вхлебнице"], time: 0, tryouts: 3, points: 100}, //1
        {answer: ["!2000"], time: 0, tryouts: 3, points: 100}, //2
        {answer: ["!59"], time: 0, tryouts: 3, points: 100}, //3
        {answer: ["!2"], time: 0, tryouts: 3, points: 100}, //4
        {answer: ["!1"], time: 0, tryouts: 3, points: 100}, //5
        {answer: ["!294"], time: 0, tryouts: 3, points: 100}, //6
        {answer: ["!25%"], time: 0, tryouts: 3, points: 100}, //7
        {answer: ["!184289781"], time: 0, tryouts: 3, points: 100}, //8
        {answer: ["!29"], time: 0, tryouts: 3, points: 100}, //9
        {answer: ["!1,6,6"], time: 0, tryouts: 3, points: 100}, //10
        {answer: ["!7"], time: 0, tryouts: 3, points: 100}, //11
        {answer: ["!продолжим"], time: 0, tryouts: 0, points: 0}, //12 --
        {answer: ["!7"], time: 0, tryouts: 3, points: 100}, //13
        {answer: ["!4"], time: 0, tryouts: 3, points: 100}, //14
        {answer: ["!271"], time: 0, tryouts: 3, points: 100}, //15
        {answer: ["!4"], time: 0, tryouts: 3, points: 100}, //16
        {answer: ["!33"], time: 0, tryouts: 3, points: 100}, //17
        {answer: ["!294"], time: 0, tryouts: 3, points: 100}, //18
        {answer: ["!ойвсё"], time: 0, tryouts: 0, points: 0} //19 --
    ],
    right: [ //12 random
        "БЕЗОШИБОЧНО! 💪",
        "БЕССПОРНО! 😜",
        "В ТОЧКУ! 😉",
        "В ЯБЛОЧКО! 😎",
        "ВЕРНО! 💪",
        "ВЕРНО! 🤓",
        "ВЫПОЛНЕНО! 😎",
        "ЗАСЧИТАНО! 😉",
        "МОЛОДЕЦ! 🤓",
        "ПРАВИЛЬНО! 😉",
        "ТАК ДЕРЖАТЬ! 😜",
        "ТОЧНО! 😎"
    ],
    wrong: [ //7 random
        "Тебе стоит приложить больше усилий, вероятно 😐",
        "Думаю, это не тот ответ, который я жду 🙃",
        "Кажется, не совсем верный ответ 🤔",
        "Не хочу тебя расстраивать, но это не тот ответ, который я жду 😐",
        "Неправильно. Какие еще варианты? 🙃",
        "Нет-нет, это не то. Жду другой вариант 😐",
        "Это неправильный ответ. Подумай ещё 🤔"
    ],
    left_try: "Осталось попыток: ",
    done_try: "Уже засчитал этот ответ 🤓",
    last_try: "Увы, попытки закончились 😮"
}