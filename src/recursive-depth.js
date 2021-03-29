const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr, depthNum, depth) {
    depthNum = depthNum || 1; 
    depth = depth || 1; 
     if (depth > depthNum) { 
       depthNum = depth; 
      }
     for(let i = 0; i < arr.length; i++) {
       let arrCurrent = arr[i];
       if(Array.isArray(arrCurrent)) {
        let temp = this.calculateDepth(arrCurrent, depthNum, depth + 1);
        if (temp > depthNum) {
          depthNum = temp;
        }
       
       }
     } 
   return depthNum;
  }
};


 