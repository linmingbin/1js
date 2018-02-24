var col=3;
var hang=3;
document.write('<table>')
for(var i=0;i<col;i++){
    document.write('<tr>')
    for(var io=1;io<=hang;io++){
        document.write('<td>'+(io+i*3)+'</td>')
    }
    document.write('</tr>')
}
document.write('</table>')