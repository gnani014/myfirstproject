let x="gnani";
let y="eashwar";
let z ="gnani eashwar"
console.log(x.length);
console.log(x.charAt(4))
console.log(x.charCodeAt(0))
console.log(x.concat(y))
console.log(x.charAt(1).concat(y.charAt(1)))
console.log(x.startsWith("g"))//returns true
console.log(z.endsWith("eashwar"))
console.log(x.endsWith("g"))
console.log(x.includes("g",0))//checks whether the "g" is present at 0 index position. and returns true or false after checking.
console.log(x.indexOf("n",))//gives index position of first occurrence of a string
console.log(x.lastIndexOf("n"))// last occurrence
console.log(y.localeCompare(x))//checks which string comes first.
console.log(x.match("ga"))//checks the string(if mathces returns array)else (null)
console.log(x.repeat("2"))//repeats the string o/p;gnanignani
console.log(x.replace("i","esh"))//replaces i with esh
console.log(x)
let c = x.replace("i","esh")
console.log(c)
console.log(x.search("ani"))//searches and returns the position of string
let d=(x.slice(1,5))//returns new string
console.log(d)
console.log(x.slice(3))//starts from 3 index position
console.log(x.split(""))//returns an array["g","n","a","n","i"]
console.log(x.split("",2))//return an array['g','n']
console.log(x.substring(1,5))//returns  new string o/p:nani
console.log(x.trim())//removes spaces from both sides
let a = 20;
console.log(a.toString(2))
console.log(a)