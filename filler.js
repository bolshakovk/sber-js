const excel_file = document.getElementById('excel_file');
let items = new Map()
let numberMap = new Map()

excel_file.addEventListener('change', (event) => {
      var reader = new FileReader();
      reader.readAsArrayBuffer(event.target.files[0]); 
      reader.onload = function(event){
          var data = new Uint8Array(reader.result);
          var work_book = XLSX.read(data, {type:'array'});
          var sheet_name = work_book.SheetNames;
          var sheet_data = XLSX.utils.sheet_to_json(work_book.Sheets[sheet_name[0]], {header:1});
          var i =0;
          if(sheet_data.length > 0)
          {
              var table_output = '<table class="table table-striped table-bordered">';
              for(var row = 0; row < sheet_data.length; row++)
              {
                i++
                  table_output += '<tr>';
                  for(var cell = 0; cell < sheet_data[row].length; cell++)
                  {     
                    items.set(i, sheet_data[row])
                      if(row == 0)
                      { 
                          table_output += '<th>'+sheet_data[row][cell]+'</th>';
                      }else
                      { 
                          table_output += '<td>'+sheet_data[row][cell]+'</td>';
                      }
                  }
                  table_output += '</tr>';
              }
              table_output += '</table>';
              document.getElementById('excel_data').innerHTML = table_output;
          }
    let j =0;
    for(let [k, v] of items) {
        var s = JSON.stringify(v)
        var m = s.match(/(\d+)/)
        numberMap.set(v, m)
    }
          excel_file.value = '';
      }
  });