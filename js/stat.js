'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var FONT_GAP = 16;
var BAR_GAP = 50;
var BAR_HEIGHT_MAX = 150;
var BAR_WIDTH = 40;

var renderCloud = function(ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function(arr) {
  var maxElement = arr[0];

  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

var getRandomNumber = function() {
  return Math.floor(Math.random() * 100);
}

window.renderStatistics = function(ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'hanging';
  ctx.fillText('Ура, вы победили!', CLOUD_X + GAP, CLOUD_Y + GAP);
  ctx.fillText('Список результатов:', CLOUD_X + GAP, CLOUD_Y + GAP + FONT_GAP + GAP / 2);

  var maxTime = getMaxElement(times);

  for (var i = 0; i < players.length; i++) {
    var ctxRectX = CLOUD_X + BAR_GAP + (BAR_WIDTH + BAR_GAP) * i;
    var ctxRectY = CLOUD_Y + CLOUD_HEIGHT - GAP - FONT_GAP - GAP - BAR_HEIGHT_MAX / maxTime * times[i];

    ctx.fillText(Math.floor(times[i]), ctxRectX, ctxRectY - GAP - FONT_GAP);

    if (players[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = 'hsl(240,' + getRandomNumber() + '%, 50%)';
    }

    ctx.fillRect(ctxRectX, ctxRectY, BAR_WIDTH, BAR_HEIGHT_MAX / maxTime * times[i]);

    ctx.fillStyle = '#000';

    ctx.fillText(players[i], ctxRectX, CLOUD_Y + CLOUD_HEIGHT - GAP - FONT_GAP);
  }
};
