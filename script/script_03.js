'use strict';

// 1) Спрашиваем у пользователя “Ваш месячный доход?” и результат сохраняем в переменную money
let money = +prompt('Ваш месячный доход: ', 5432),                                     
income = 'фриланс', 
// 2) Спросить у пользователя “Перечислите возможные расходы за рассчитываемый период через запятую” сохранить в переменную addExpenses, вывести в консоль в виде массива 
addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'еда, проезд, комуналка'),
// 3) Спросить у пользователя “Есть ли у вас депозит в банке?” и сохранить данные в переменной deposit (булевое значение true/false)  
deposit = confirm('Есть ли у вас депозит в банке?'), 
mission = 123456, 
period;

// 2) сохранить в переменную addExpenses, вывести в консоль в виде массива
console.log('Расходы за рассчитываемый период: ', addExpenses.split(', '));

// 4) -Вывести в консоль тип данных значений переменных money, income, deposit
console.log(money + ' -тип данных значения money: ' + typeof money);                  
console.log(income + ' -тип данных значения income: ' + typeof income);
console.log(deposit + ' -тип данных значения deposit: ' + typeof deposit);

// 5) Спросить у пользователя по 2 раза каждый вопрос и записать ответы в переменные  
let exprensesMonth1 = prompt('Какие обязательные ежемесячные расходы у вас есть?', 'Люблю потусоваться, знаете...'),
exprenses1 = +prompt('Во сколько это обойдется?', 987),
exprensesMonth2 = prompt('Какие обязательные ежемесячные расходы у вас есть?', 'Вечер пятницы...'),
exprenses2 = +prompt('Во сколько это обойдется?', 567);
// 6) Вычислить доход за месяц, учитывая обязательные расходы, сохранить в переменную budgetMonth и вывести результат в консоль

let budgetMonth = money - (exprenses1 + exprenses1);
console.log('Чистый доход за месяц: ' + budgetMonth);

// 7) Зная budgetMonth, посчитать за сколько месяцев будет достигнута цель mission, вывести в консоль, округляя в большую сторону
period = mission / budgetMonth;
console.log('Сумму в: ' + mission + ' - Вы накопите за ' + Math.ceil(period) + ' месяцев');


// 8) Поправить budgetDay учитывая бюджет на месяц, а не месячный доход. Вывести в консоль  округлив в меньшую сторону (методы объекта Math в помощь)
let budgetDay = money / 30;
console.log('Даход за день: ' + Math.floor(budgetDay));


// 9) Написать конструкцию условий
if(budgetDay >= 800) {
	console.log('Высокий уровень дохода');
} else if(budgetDay >= 300 && budgetDay < 800) {
	console.log('Средний уровень дохода');
} else if(budgetDay >= 0 && budgetDay < 300) {
	console.log('Низкий уровень дохода');
}  else if (budgetDay < -budgetDay) {
	console.log('Что-то пошло не так');
} else {
	console.log('Что-то пошло не так');
}



