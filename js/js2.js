var hang = 8;

for (var i = 1; i <= hang; i++) {
  document.write('<div class="ra">');
  if (i % 2 == 0) {
    for (var b = 0; b < i; b++) {
      document.write(
        '<div style="background:blue;" class="le">' +
          i +
          "x" +
          b +
          "=" +
          i * b +
          "</div>"
      );
    }
  } else {
    for (var b = 0; b < i; b++) {
      document.write(
        '<div style="background:red;" class="le">' +
          i +
          "x" +
          b +
          "=" +
          i * b +
          "</div>"
      );
    }
  }
  document.write("</div>");
}
