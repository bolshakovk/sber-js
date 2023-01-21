import readXlsxFile from 'read-excel-file'
const input = document.getElementById('input')
input.addEventListener('change', function(){ 
    readXlsxFile(input.files[0]).then(function(data){
      console.log(data);
      var i = 0;
      data.map((row, index) =>{
        if(i==0){
          let table = document.getElementById("tbl_data");
          generateTableHead(table, row);
        }
        if(i > 0){
          let table = document.getElementById("tbl_data");
          generateTableRows(table, row);
        }
        i++;
      });
    });
  });
  function generateTableHead(table, data){
    let thead = table.createHead();
    let row = thead.insertRow();
    for(let key of data){
      let th = document.createElement('th');
      let text = document.createTextNode(key);
      th.appendChild(text);
      row.appendChild(th);
    }
    function generateTableRows(table, row){
      let newRow = table.insertRow(-1);
      data.map((row, index) =>{
        let newCell = newRow.insertCell();
        let newText = document.createTextNode(row);
        newCell.appendChild(newText);
      })
    }
  }