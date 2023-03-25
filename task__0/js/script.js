"use strict"

// Задача 1.  Описати масив об’єктів – сайтів розроблених компанією з такими властивостями 1) загальну вартість усіх сайтів 2) кількість сайтів, що було зроблено між 2000 та 2009 рр. 3) кількість сайтів, де сума спонсорських вкладень була більшою за 100000 4) створити загальний список усіх спонсорів (поки можуть повторюватись, просто зібрати усі у масив) 5) знайти рік, коли прибуток був найбільшим 6) упорядкувати список за спаданням прибутку 7) Створити 2 окремих списки з копіями об’єктів, що містять сайти з вартість до 10000 і більше 10000 -----------------------------

// ----- Властивості ------
// назва компанії на час розробки (назву періодично змінюють)
// власник компанії
// споснсори (масив спонсорів)
//       * прізвище спонсора
//       * ім’я  спонсора
//       * сума вкладень спонсора
// рік випуску
// вартість сайту

const listComputerCompane = [
	{
		name: 'AerCool',
		owner: 'Jame',
		sponsor: [
			{name: 'Kate', secondName:'Lorens', donat: 110000 },
			{name: 'Leon', secondName:'Kill', donat: 1000 },
			{name: 'Billy', secondName:'Yellow', donat: 100000 },
			{name: 'Kyle', secondName:'Brendi', donat: 6000 },
		],
		yearsSite: 2001,
		siteCost: 5000,
	},
	{
		name: 'Asus',
		owner: 'John',
		sponsor: [
			{name: 'Olivia', secondName:'Smith', donat: 62000 },
			{name: 'William', secondName:'Johnson', donat: 108000 },
			{name: 'Sophia', secondName:'Brown', donat: 99000 },
			{name: 'Jacob', secondName:'Garcia', donat: 12000 },
	],
		yearsSite: 1989,
		siteCost: 8000,
	},
	{
		name: 'MSI',
		owner: 'Alex',
		sponsor: [
			{name: 'Emma', secondName:'Martinez', donat: 7000 },
			{name: 'Ethan', secondName:'Davis', donat: 54000 },
			{name: 'Isabella', secondName:'Wilson', donat: 106000 },
		{name: 'Michael', secondName:'Lee', donat: 87000 },
	],
		yearsSite: 1986,
		siteCost: 10000,
	},
	{
		name: 'Gigabyte',
		owner: 'Emily',
		sponsor: [
			{name: 'Daniel', secondName:'Lopez', donat: 89000 },
			{name: 'Madison', secondName:'Gonzalez', donat: 25000 },
			{name: 'Jackson', secondName:'Clark', donat: 119000 },
			{name: 'Ava', secondName:'Allen', donat: 104000 },
	],
		yearsSite: 1986,
		siteCost: 15000,
	},
]
//1) загальну вартість усіх сайтів
const totalCostSite = listComputerCompane.reduce((acc, site) => acc + site.siteCost, 0)

console.log(`Загальна вартість усіх сайтів: ${totalCostSite}`);

//2) кількість сайтів, що було зроблено між 2000 та 2009 рр.
const getYearSiteOver2000 = listComputerCompane => {
	let siteCounter = 0
	for (const site of listComputerCompane) {
		if(site.yearsSite > 2000 && site.yearsSite < 2009){
			siteCounter++
		} 
	}
	return siteCounter
}

console.log(`Кількість сайтів більші за 2000 і менші за 2009: ${getYearSiteOver2000(listComputerCompane)}`)

//3) кількість сайтів, де сума спонсорських вкладень була більшою за 100000
const getTotalCostDonationMore100000 = listComputerCompane => {
	let donationCount = 0
	for (const compnay of listComputerCompane) {
		let currentSum = 0 
		const {
			sponsor: listSponsor
		} = compnay
		for (const sponsor of listSponsor) {
			currentSum += sponsor.donat
		}
		if (currentSum > 100000) {
			donationCount++
		}
	}
	return donationCount
}

console.log(`Сайти де донати були більші за 100 000: ${getTotalCostDonationMore100000(listComputerCompane)}`);

//4) створити загальний список усіх спонсорів (поки можуть повторюватись, просто зібрати усі у масив)
function getNamesSponsor(listComputerCompane) {
	let nameList = [];
	for (const company of listComputerCompane) {
	const {sponsor} = company;
	for (const sponsorObj of sponsor) {
		nameList.push(`${sponsorObj.name} ${sponsorObj.secondName}`);
		}
	}
	return nameList;
}

console.log(`Список усіх спонсорів: ${getNamesSponsor(listComputerCompane)}`);


//5) знайти рік, коли прибуток був найбільшим
function getYearsProfitsGreatest(listComputerCompane) {
	let yearsProfit
	let maxProfit = -Infinity
	for (const company of listComputerCompane) {
		const{
			siteCost, yearsSite
		} = company
		if (siteCost > maxProfit) {
			maxProfit = siteCost
			yearsProfit = yearsSite
		}
	}
	return yearsProfit
}

console.log(`Рік коли прибуток був найбільшим: ${getYearsProfitsGreatest(listComputerCompane)}`);

//6) упорядкувати список за спаданням прибутку
const sortedList = listComputerCompane.sort((a, b) => b.siteCost - a.siteCost);

console.log('Список компаній відсортований за спаданням прибутку:');
for (const company of sortedList) {
	console.log(`${company.name} - ${company.siteCost}`);
}

//7) Створити 2 окремих списки з копіями об’єктів, що містять сайти з вартістю до 10000 і більше 10000 

// Список компаній з сайтом вартістю до 10000
const cheapSites = listComputerCompane
.filter(company => company.siteCost < 10000)
.map(company => ({ ...company }));

// Список компаній з сайтом вартістю більше 10000
const expensiveSites = listComputerCompane
.filter(company => company.siteCost >= 10000)
.map(company => ({ ...company }));

console.log(`Список компаній з сайтом вартістю до 10000`, cheapSites);
console.log(`Список компаній з сайтом вартістю більше 10000`, expensiveSites);




