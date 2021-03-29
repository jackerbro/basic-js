const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(isDirect = true) {
    this.isDirect = isDirect;
  }
  encrypt(message, key) {
    if(message === undefined || key === undefined) {
      throw Error();
    }
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase().split('');
    let encryptResult = [];
    let encryptResultIndex = 0;
    message = message.toUpperCase();
    key = key.toUpperCase();
    //code to lengthen key to message length
    let diffLength = message.length - key.length;
    for(let k = 0; k < diffLength; k++) {
      key = key + key[k]; 
    }
    let n = 0;
    for(let i = 0; i < message.length; i++) {
      let letterOfMessage = alphabet.indexOf(message[i]);
      let letterOfKey = alphabet.indexOf(key[i-n]);
      if(message[i] === ' ' || letterOfMessage === -1) {
        encryptResult.push(message[i]);
        n = n +1;
        continue;
      }
      encryptResultIndex = (letterOfMessage + letterOfKey)%26; 
      encryptResult.push(alphabet[encryptResultIndex]);
    }
    if (this.isDirect) {
      return encryptResult.join('');
    }
    return encryptResult.reverse().join(''); 
  }    
  decrypt(encryptedMessage, key) {
    if(encryptedMessage === undefined || key === undefined) {
      throw Error();
    }
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase().split('');
    let encryptResult = [];
    let encryptResultIndex = 0;
    encryptedMessage = encryptedMessage.toUpperCase();
    key = key.toUpperCase();
    //code to lengthen key to message length
    let diffLength = encryptedMessage.length - key.length;
    for(let k = 0; k < diffLength; k++) {
      key = key + key[k]; 
    }
    let n = 0;
    for(let i = 0; i < encryptedMessage.length; i++) {
      let letterOfMessage = alphabet.indexOf(encryptedMessage[i]);
      let letterOfKey = alphabet.indexOf(key[i-n]);
      if(encryptedMessage[i] === ' ' || letterOfMessage === -1) {
        encryptResult.push(encryptedMessage[i]);
        n = n +1;
        continue;
      }
      encryptResultIndex = (letterOfMessage - letterOfKey + 26)%26; 
      encryptResult.push(alphabet[encryptResultIndex]);
    }
    if (this.isDirect) {
      return encryptResult.join('');
    }
    return encryptResult.reverse().join('');
  }
}

module.exports = VigenereCipheringMachine;
