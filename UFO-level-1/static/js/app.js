// from data.js
var tableData = data;

// YOUR CODE HERE!

//INITIAL TABLE
//variable fo tbody
var tbody = d3.select("tbody");

//build initial table
function buildTable(data) {
    //clean data
  tbody.html("");

  //loop to read and add each record
  data.forEach((dataRow) => {
    var row = tbody.append("tr");
    Object.values(dataRow).forEach((val) => {
      var cell = row.append("td");
      cell.text(val);
    });
  });
}

buildTable(tableData);



//FILTERED TABLE
//create variable to store date to filter
var filters = {};

//get input value from filter and add it to the filter variable
function DateFilter() {
  var changedElement = d3.select(this).select("input");
  var elementValue = changedElement.property("value");
  var filterId = changedElement.attr("id");
  filters[filterId] = elementValue;

  //call function for filtered table
  FilteredTable();
}


function FilteredTable() {
  //assign filtred data
  let filteredData = tableData;

  //loop to read and add each filtered value
  Object.entries(filters).forEach(([key, value]) => {
    filteredData = filteredData.filter(row => row[key] === value);
  });

  //create filtered table
  buildTable(filteredData);
}



// MAKE D3 WORK
d3.selectAll(".filter").on("change", DateFilter);

