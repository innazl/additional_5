module.exports = function check(str, bracketsConfig) {
  const openparent = [];  
  const closeparent = [];
  const stackparent = [];
  for (let i = 0; i < bracketsConfig.length; i++){
     openparent.push(bracketsConfig[i][0]);
     closeparent.push(bracketsConfig[i][1]);
  }
  for (let i = 0; i < str.length; i++) {
    if (openparent.includes(str[i])
      && closeparent.includes(str[i]) 
      && str[i] == stackparent[stackparent.length - 1] 
      || closeparent.includes(str[i]) 
      && openparent[closeparent.indexOf(str[i])] == stackparent[stackparent.length - 1]) {
        stackparent.pop();
        continue;  
    } 
    if (openparent.includes(str[i])) {
      stackparent.push(str[i]);
      continue;
    } 
    if (closeparent.includes(str[i]) && stackparent.length == 0) {
      return false;
    }  
  }
  if (stackparent.length > 0)
    return false;
  else
    return true;  
}