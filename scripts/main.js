/**
* london-low-cost
*
* @license MIT - http://andreasonny.mit-license.org/2016
* @copyright 2016 @andreasonny83
* @link https://github.com/andreasonny83/london-low-cost
*/
(function(window, document, undefined) {
  'use strict';

  var ctc = document.getElementById('canvas');
  var ctx = ctc.getContext('2d');
  var canvas = {
    width: 1100,
    height: 1500
  }

  ctc.width = canvas.width;
  ctc.height = canvas.height;
  ctx.fillStyle = 'rgb(221, 221, 238)';
  ctx.fillRect (0, 0, canvas.width, canvas.height);

  function Latitudify(lat) {
    lat = parseFloat(lat).toFixed(6) * 100;
    lat += 80;

    return lat * canvas.width / 90;
  }

  function Longitudify(lon) {
    lon = parseFloat(lon).toFixed(6) * 100;
    lon = 5210 - lon;

    return lon * canvas.height / 100;
  }

  function drawPath(line, start, end) {
    var startLat = Latitudify(STATIONS[start].position[1]);
    var startLon = Longitudify(STATIONS[start].position[0]);

    var endLat = Latitudify(STATIONS[end].position[1]);
    var endLon = Longitudify(STATIONS[end].position[0]);

    ctx.beginPath();
    ctx.moveTo(startLat, startLon);
    ctx.lineTo(endLat, endLon);

    ctx.strokeStyle = line.color;
    ctx.lineWidth = 2;
    ctx.stroke();
  }

  for (var line in LINES) {
    for (var i = 0; i < LINES[line].directions.length; i++) {
      for (var y = 0; y < LINES[line].directions[i].route.length - 1; y++) {
        drawPath(LINES[line], LINES[line].directions[i].route[y], LINES[line].directions[i].route[y+1]);
      }
    }
  }

})(window, document);
