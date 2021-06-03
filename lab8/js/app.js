function change_img(id, hide) {
	var image = document.getElementById(id);

	if(hide) {
		image.src = "img/ad2.png";
	} else {
		image.src = "img/ad1.jpg";
	}
}


function showCustomMenu(sign, x, y) {/*  Функція приймає три параметри. Перший параметр (sign) є логічного типу. Він задає, що слід зробити з меню – показати чи приховати. Другий параметр (x) та третій параметр (y)  задають горизонтальну та вертикальну екранні координати точки, в якій користувач натиснув праву кнопку миші  */
	var cm = document.getElementById("custommenu"); /* Змінна cm буде вказувати на наше «меню» */
	if(sign) /* Якщо передано параметр sign, рівний true, то меню покажемо, а інакше приховаємо */
		cm.style.visibility = 'visible';
	else
		cm.style.visibility = 'hidden';

	/* Задаємо меню абсолютну позицію та встановлюємо координати його лівого верхнього кута */
	cm.style.position = 'absolute';
	cm.style.left = x;
	cm.style.top = y;

}

function doAction(actionType) {
	switch(actionType){
		case "copy":
			break;
		case "close":
			window.close();
			break;
		case "fontIncrease":
			document.body.style.fontSize='20pt';
			break;
		case "changeBkg":
			document.body.style.background = '#234955'
			break
		case "change_fsize":
			document.body.style.fontSize = '10pt'
			break;
	}
}
