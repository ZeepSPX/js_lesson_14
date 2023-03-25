"use strict"

// Задача 2. Розробити функцію, у яку передають об’єкт (день, місяць, рік). Визначити, який буде рік через N місяців.----------------------------------------

function getYearAfterNMonths(day, month, year, N) {
	// створюємо нову дату з вхідних параметрів
	const currentDate = new Date(year, month - 1, day);
	// додаємо N місяців до поточної дати
	const futureDate = new Date(currentDate.setMonth(currentDate.getMonth() + N));
	// повертаємо рік з отриманої дати
	return futureDate.getFullYear();
}
  // Приклад використання
  console.log(getYearAfterNMonths(21, 3, 2023, 9000)); // повинно вивести 2023 (бо через 5 місяців буде все ще 2023)


