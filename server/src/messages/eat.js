(function() {
	var message, type;

	message = require('../utils/message');

	type = 'h'.charCodeAt(0);

	exports.build = function(id, fam) {
		var arr, b;
		arr = new Uint8Array(8);
		b = 0;
		b += message.writeInt8(b, arr, 0);
		b += message.writeInt8(b, arr, 0);
		b += message.writeInt8(b, arr, type);
		b += message.writeInt16(b, arr, id);
		b += message.writeInt24(b, arr, fam);
		return arr;
	};

}).call(this);
