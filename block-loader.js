module.exports = function(source) {

	// const blocks = source.split(/<\/?code.*?>/);
	const blocks = source.split("```");
	const codeBlocks = [];

	for (let i = 1; i < blocks.length; i = i + 2) {
		codeBlocks.push(blocks[i].substring(blocks[i].indexOf('\n') + 1));
	}

	return codeBlocks.join('\n');
};
