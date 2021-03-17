const MAX_TEXT_LENGTH = 150;

export const cutText = (content) => {
	if (content.length > MAX_TEXT_LENGTH) {
		return `${content.slice(0, MAX_TEXT_LENGTH)}...`;
	}
};
