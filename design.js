function makeGrid() {
// When size is submitted by the user, call makeGrid()
// Select color input
// Select size input
var cols = $("#input_width").val();
var rows = $("#input_height").val();
const table = $("#pixel_canvas");

table.children().remove();

// Use while or for loops
for (var i = 0; i < rows; i++) {
  table.append("<tr></tr>");
  for (var j = 0; j < cols; j++) {
    table.children().last().append("<td></td>");
    }
  }
  table.on("click", "td", function() {
    //Get color from color picker
    var color = $("input[type='color']").val();
    //Apply color to cell
    $(this).attr("bgcolor", color);
  });
}
$("input[type='submit']").click(function(event) {
  event.preventDefault(); //submit and reset canvas
  makeGrid();
});
