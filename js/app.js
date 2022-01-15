// import the data from data.js
const tableData = data;

function buildTable(data) {
    // clear out any existing data
    tbody.html("");
}

// loop through each object in data
// append a row & cells for each value in row
// append a row to table body
// loop through each field in dataRow
// add each value as table cell (td)
data.forEach((dataRow) => {
    let row = tbody.append("tr");
    Object.values(dataRow).forEach((val) => {
      let cell = row.append("td");
      cell.text(val);
      }
    );
});