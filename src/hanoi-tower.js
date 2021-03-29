const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
	let turnsNum = (Math.pow(2, disksNumber)) - 1;
  let secondsNum = Math.floor(turnsNum/turnsSpeed * 3600);
  return {turns: turnsNum, seconds: secondsNum};
};
