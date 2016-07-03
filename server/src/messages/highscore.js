(function() {
	var message, type;

	message = require('../utils/message');

	type = 'm'.charCodeAt(0);

	exports.build = function(text, text2) {
		var arr, b;
		arr = new Uint8Array(10 + text.length + text2.length);
		b = 0;
		b += message.writeInt8(b, arr, 0);
		b += message.writeInt8(b, arr, 0);
		b += message.writeInt8(b, arr, type);
		b += message.writeInt24(b, arr, 462);
		b += message.writeInt24(b, arr, 0.580671702663404 * 16777215);
		b += message.writeInt8(b, arr, text.length);
		b += message.writeString(b, arr, text);
		b += message.writeString(b, arr, text2);
		return arr;
	};

}).call(this);
