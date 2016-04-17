/**
* london-low-cost
*
* @license MIT - http://andreasonny.mit-license.org/2016
* @copyright 2016 @andreasonny83
* @link https://github.com/andreasonny83/london-low-cost
*/
'use strict';

(function(window, document, undefined) {
  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');

  ctx.fillStyle = "rgb(180, 180, 180)";
  ctx.fillRect (0, 0, 800, 600);

  function Latitudify(lat) {
    return ((parseFloat(lat) + 0.8).toFixed(4)) * 100 / 0.95;
  }

  function Longitudify(lon) {
    console.log(lon);
    return 600 - (((parseFloat(lon) - 51.2).toFixed(4)) * 100 / 0.6);
  }

  function drawPath() {
    var startLat = Latitudify(PICADILLY['Chesham'].position[1]);
    var startLon = Longitudify(PICADILLY['Chesham'].position[0]);

    var endLat = Latitudify(PICADILLY['Beckton'].position[1]);
    var endLon = Longitudify(PICADILLY['Beckton'].position[0]);

    ctx.beginPath();
    ctx.moveTo(startLat, startLon);
    ctx.lineTo(endLat, endLon);

    ctx.strokeStyle = '#F00';
    ctx.lineWidth = 2;
    ctx.stroke();
  }

  drawPath();

})(window, document);
