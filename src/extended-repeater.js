const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  debugger;
    let stringArray = [];
    //type of str is string
    if(typeof str !== 'string') {
      str = '' + str;
    }
    //type of addition is string
    if(options.addition !== undefined && typeof options.addition !== 'string') {
      options.addition = '' + options.addition;
    }
    //if no repeatTimes
    if(!options.repeatTimes || isNaN(options.repeatTimes)) {
      options.repeatTimes = 1;
    }
    //repeatTimes
    for(let i = 0; i < options.repeatTimes; i++) {
      stringArray.push(str);   
      //if no additionRepeatTimes
      if(!options.additionRepeatTimes || isNaN(options.additionRepeatTimes)) {
          options.additionRepeatTimes = 1;
        }
      //additionRepeatTimes
      for(let j = 0; j < options.additionRepeatTimes; j++) {
        //extra check on addition existence
        options.addition && stringArray.push(options.addition);
        //separator for item exept last item
        if(j !== options.additionRepeatTimes - 1) {
        //Check on additionSeparator existence && defining default value of separator
        options.additionSeparator ? stringArray.push(options.additionSeparator) : stringArray.push('|');
        }
      }
      //separator for item exept last item
      if(i !== options.repeatTimes - 1) {
        //Check on separator existence && defining default value of separator
        options.separator ? stringArray.push(options.separator) : stringArray.push('+');
      }
      
    }
    return stringArray.join('');
  };
  