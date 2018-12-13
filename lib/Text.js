const Chunk = require('./Chunk');

module.exports = class Text extends Chunk {
	toTerms() {
		return [
			this.content
		];
	}
};
