const types = Object.fromEntries([
	require('./Text'),
	require('./Message')
].map(type => [ type.constructor.toLowerCase(), type ]));

module.exports = chunk => new (types[chunk.type])(chunk);
