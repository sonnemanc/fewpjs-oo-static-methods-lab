class Formatter {
  //add static methods here
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  static sanitize(string) {
    return string.replace( /[^A-Za-z0-9 '-]/g, '' )
  }

  static titleize(string) {
    let exept = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    let splitStr = string.split(" ")
    let titleized = []

    splitStr.forEach(word => {
      if (exept.includes(word)) {
        titleized.push(word);}
        else {
          titleized.push(this.capitalize(word))
        }
    })
    return this.capitalize(titleized.join(' '))
  }

}