Проект запускається в 2 етапи

# Запускаємо backend частину, для цього
1. У терміналі пишемо команди:
    > cd src/database
    > node workerindex
У разі успішного запуску ви побачите рядки:
Server Started at 7777
Data base is connected!

2. Відкриваємо другий термінал і пишемо команди:
    > cd src/database
    > node projectindex
У разі успішного запуску ви побачите рядки:
Server Started at 7778
Data base is connected!

# Запускаємо frontend частину, для цього
3. Відкриваємо третій термінал і пишемо команду:
    > npm start
