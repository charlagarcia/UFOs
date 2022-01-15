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


// grab datetime value from filter
function handleClick() {
    let date = d3.select("#datetime").property("value");
    let filteredData = tableData;

    //check to see if date was entered. 
    //filter data by that date.
    if (date) {
        filteredData = filteredData.filter(row => row.datetime === date);
    };

    //rebuild table using filtered data
    buildTable(filteredData);
};

// Attach an event to listen for the form button
d3.selectAll("#filter-btn").on("click", handleClick);

// Build the table when the page loads
buildTable(tableData);