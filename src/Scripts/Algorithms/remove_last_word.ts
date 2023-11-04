export function removeLastWord(str) {
    const lastIndexOfSpace = str.lastIndexOf(' ');
  
    if (lastIndexOfSpace === -1) {
      return str;
    }
  
    return str.substring(0, lastIndexOfSpace);
  }