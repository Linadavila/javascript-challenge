// from data.js
var tableData = data;

// YOUR CODE HERE!
//variable fo tbody
var tbody = d3.select("tbody");

// Build table
function buildTable(data) {
    //clean data
  tbody.html("");

  // Loop to read and add each record
  data.forEach((dataRow) => {
    var row = tbody.append("tr");
    Object.values(dataRow).forEach((val) => {
      var cell = row.append("td");
      cell.text(val);
    });
  });
}

