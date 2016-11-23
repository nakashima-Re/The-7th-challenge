function addRow() {
	var tblObj = document.getElementById("excelTBL");
	var rowCnt = tblObj.rows.length;
	var colCnt = tblObj.rows[0].cells.length;
	var row = tblObj.insertRow(rowCnt);
	for (var i = 0; i < colCnt; i++) {
		var cell = row.insertCell(i);
	}
}

function addColumn() {
	var tblObj = document. getElementById("excelTBL");
	var rowCnt = tblObj.rows.length;
	var colCnt = tblObj.rows[0].cells.length;
	for (var i = 1; i < rowCnt; i++) {
		tblObj.rows[i].insertCell(-1);
	}
}