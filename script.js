// Класс студентов
class StudentInfo {
	// Конструктор класса
	constructor(surname, algebra, geometry, physics, history, chemistry) {
		this.surname = surname;
		this.algebra = Number(algebra);
		this.geometry = Number(geometry);
		this.physics = Number(physics);
		this.history = Number(history);
		this.chemistry = Number(chemistry);

		if (this.algebra < 3 || this.geometry < 3 ||
			this.physics < 3 || this.history < 3 ||
			this.chemistry < 3) {
			this.academicPerf = "badStud";
		}
		else if (Number(algebra) < 5 || Number(geometry) < 5 ||
			Number(physics) < 5 || Number(history) < 5 || Number(chemistry) < 5) {
			this.academicPerf = "goodStud";
		}
		else {
			this.academicPerf = "excellentStud";
		}
	}

	// Функции возвращающие значения класса 
	getSurname() {
		return this.surname;
	}
	getAcademicPerf() {
		return this.academicPerf;
	}
}

// Запись оценок и фамилии студента
function writeInfo(arr) {
	let SelAlg = document.querySelector("select[name='algebra']");
	let SelGeo = document.querySelector("select[name='geometry']");
	let SelPhy = document.querySelector("select[name='physics']");
	let SelHis = document.querySelector("select[name='history']");
	let SelChe = document.querySelector("select[name='chemistry']");

	// Создаем новый объект/Экземпляр
	let StudInf = new StudentInfo(
		document.getElementById("surname").value,
		SelAlg.options[SelAlg.selectedIndex].text,
		SelGeo.options[SelGeo.selectedIndex].text,
		SelPhy.options[SelPhy.selectedIndex].text,
		SelHis.options[SelHis.selectedIndex].text,
		SelChe.options[SelChe.selectedIndex].text
	);
	if (StudInf.getSurname() == "") {
		alert("Укажите фамилию!");1
	}
	else {
		arr.push(StudInf);	// Записываем объект класса в массив
	}
	document.getElementById("surname").value = "";
}

// Функция расчета успеваемости студентов
function calculate(arr) {
	let text1 = "", text2 = "", text3 = "";
	let numBad = 0, numGood = 0, numEx = 0;

	for(let i = 0; i < arr.length; i++) {
		if (arr[i].getAcademicPerf() == "badStud") {
			text1 += arr[i].getSurname() + "<br>";
			numBad++;
		}
		else if (arr[i].getAcademicPerf() == "goodStud") {
			text2 += arr[i].getSurname() + "<br>";
			numGood++;
		}
		else if (arr[i].getAcademicPerf() == "excellentStud") {
			text3 += arr[i].getSurname() + "<br>";
			numEx++;
		}
	}
	document.getElementById("badStud").innerHTML = text1;
	document.getElementById("textBad").innerHTML = "Неуспевающие: (" + numBad + ")";
	document.getElementById("goodStud").innerHTML = text2;
	document.getElementById("textGood").innerHTML = "Хорошисты: (" + numGood + ")";
	document.getElementById("excellentStud").innerHTML = text3;
	document.getElementById("textEx").innerHTML = "Отличники: (" + numEx + ")";
}

let arrStudentInfo = [];	// Массив для оценок студентов

const btnCal = document.querySelector("#btn1");	// Присваиваем btnCal кнопку с id btn1
btnCal.addEventListener("click", function() { calculate(arrStudentInfo); });	// Вызываем метод одного нажатия на кнопку

const btnWrite = document.querySelector("#btn2");	// Присваиваем btnCal кнопку с id btn1
btnWrite.addEventListener("click", function() { writeInfo(arrStudentInfo); });	// Вызываем метод одного нажатия на кнопку