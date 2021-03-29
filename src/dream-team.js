const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members)  {
	if(typeof members !== 'object' || members === null) {
  	return false;
  }
	let dreamTeamNameArr = [];
  let dreamTeamName = '';
  for(let i = 0; i < members.length; i++) {
   if(typeof members[i] === 'string') {
    	dreamTeamNameArr.push(members[i].trim().charAt(0));
      const dreamTeamNameArrUp = dreamTeamNameArr.map(dreamTeamNameArr => dreamTeamNameArr.toUpperCase());
    	dreamTeamNameArrUp.sort();
    	dreamTeamName = dreamTeamNameArrUp.join('');      
    }  
  }
  return dreamTeamName.toUpperCase();
};
