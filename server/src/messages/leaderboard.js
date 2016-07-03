(function() {
	var math, message, type;

	message = require('../utils/message');

	math = require('../utils/math');

	type = 'l'.charCodeAt(0);

	exports.build = function(rank, players, top) {
		var arr, b, i, j, len, length, player;
		length = 0;
		for (j = 0, len = top.length; j < len; j++) {
			player = top[j];
			length += player.snake.name.length;
		}
		arr = new Uint8Array((8 + length) + (top.length * 7));
		b = 0;
		b += message.writeInt8(b, arr, 0);
		b += message.writeInt8(b, arr, 0);
		b += message.writeInt8(b, arr, type);
		b += message.writeInt8(b, arr, 0);
		b += message.writeInt16(b, arr, rank);
		b += message.writeInt16(b, arr, players);
		i = 0;
		while (i < top.length) {
			b += message.writeInt16(b, arr, top[i].snake.J);
			b += message.writeInt24(b, arr, top[i].snake.I);
			b += message.writeInt8(b, arr, math.randomInt(0, 8));
			b += message.writeInt8(b, arr, top[i].snake.name.length);
			b += message.writeString(b, arr, top[i].snake.name);
			i++;
		}
		return arr;
	};

}).call(this);
