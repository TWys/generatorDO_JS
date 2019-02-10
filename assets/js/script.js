document.getElementById("generate").addEventListener("click", generateFunction);

function generateFunction() {
	var nrDO;
	var wynik;
	var suma;
	var nrDO_tab =[];
	
	
	nrDO = 'A'+String.fromCharCode(rand(65, 90),rand(65, 90));
	nrDO_tab = Array.from(nrDO);
	
	while (nrDO_tab.length<9) {
		nrDO_tab.push(parseInt(rand(0, 9)));
	}

	
	// Obliczenie sumy kontrolnej (bez 4 elementu) w celu wyliczenia wartości 4 elementu
	suma = (parseInt(nrDO_tab[0].charCodeAt())-55)*7+(parseInt(nrDO_tab[1].charCodeAt())-55)*3+(parseInt(nrDO_tab[2].charCodeAt())-55)+nrDO_tab[4]*7+nrDO_tab[5]*3+nrDO_tab[6]+nrDO_tab[7]*7+nrDO_tab[8]*3;
	
	// Wyliczenie wartości 4 elementu numeru na podstawie wyliczonej sumy kontrolnej
	nrDO_tab[3] = suma%10;
	nrDO = nrDO_tab.join('')
	
	document.getElementById("nrDO").innerHTML = nrDO;
}

function rand( min, max ){
    min = parseInt( min, 10 );
    max = parseInt( max, 10 );

    return Math.floor( Math.random() * ( max - min + 1 ) + min );
}


function printResult(result) {
	
	if (result == 0) {
		wynik = "Numer nieprawidłowy";
		document.querySelector('.result_box').style.color = "red";
	}
	else if (result == 1) {
		wynik = "Numer prawidłowy";
		document.querySelector('.result_box').style.color = "green";
	}
	document.querySelector('.result_box').innerHTML = wynik;
	document.querySelector('.result_box').style.display = "block";
}

function copyToClipboard(el_id) {
	var range = document.createRange();
    range.selectNode(document.getElementById(el_id));
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
	document.execCommand("copy");
	window.getSelection().removeAllRanges();
}