// iteration over Objects
const myObjects = {
    js: 'javascript',
    cpp: 'c++',
    rb: 'ruby',
    swift: 'swift by apple'
}

for (const key in myObjects) {
    console.log(`${key} shortcut is for ${myObjects[key]}`);
}
/*output
js shortcut is for javascript
cpp shortcut is for c++
rb shortcut is for ruby
swift shortcut is for swift by apple
*/


// iteration over array
const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming){
    console.log(key);  
}
/*output
0
1
2
3
4
=> here it don't print key values it print key iteration value
*/

for (const key in programming){
    console.log(programming[key]);  
}
/*output
js
rb
py
java
cpp
*/

