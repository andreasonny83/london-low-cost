/**
* london-low-cost
*
* @license MIT - http://andreasonny.mit-license.org/2016
* @copyright 2016 @andreasonny83
* @link https://github.com/andreasonny83/london-low-cost
*/
(function(window, document, undefined) {
  'use strict';

  var linesMatched = [];
  var _start = 'Uxbridge';
  var _zoneAllowed = ['6', '5', '4', '3'];

  /**
   * [defineRoute description]
   *
   * @param  {[type]} start       [description]
   * @param  {[type]} end         [description]
   * @param  {[type]} zoneAllowed [description]
   *
   * @return {[type]}             [description]
   */
  function defineRoute(start, end, zoneAllowed) {
    var line;
    var i;
    var station;
    var stationName;

    for (line in LINES) {
      for (i in LINES[line].directions) {
        for (station in LINES[line].directions[i].route) {
          console.log(LINES[line].directions[i].route[station]);
        }
      }
    }

    for (line in LINES) {
      for (i in LINES[line].directions) {
        for (station in LINES[line].directions[i].route) {
          stationName = LINES[line].directions[i].route[station];

          if (LINES[line].directions[i].route[station] === start && zoneAllowed.indexOf(STATIONS[stationName].zone) !== -1) {
            linesMatched.push(line);
          }
        }
      }
    }
  }

  defineRoute(_start, 'Acton Town', _zoneAllowed);

  console.log('start:', _start, ', with:', linesMatched);
})(window, document);
