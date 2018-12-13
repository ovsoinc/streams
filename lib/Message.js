const Chunk = require('./Chunk');

module.exports = class Message extends Chunk {
	toTerms() {
		return [
			this.content.user,
			this.content.text
		];
	}
};
