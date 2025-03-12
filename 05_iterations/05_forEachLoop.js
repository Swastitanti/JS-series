const coding = ["js", "ruby", "java", "python", "cpp"]

coding.forEach( function (item) {
    console.log(item);
} )
/*output
js
ruby
java
python
cpp
*/

coding.forEach( (val) => {
    console.log(val);
} )

/*output
js
ruby
java
python
cpp
*/


function printMe(item){
    console.log(item);
}
coding.forEach(printMe)
/*output
js
ruby
java
python
cpp
*/


coding.forEach( (item, index, arr) => {
    console.log(item, index, arr);
} )
/*output
js 0 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
ruby 1 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
java 2 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
python 3 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
cpp 4 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
*/


const myCoding = [
    {
        lanuageName: "javaScript",
        languageFileName: "js"
    },
    {
        lanuageName: "c++",
        languageFileName: "cpp"
    },
    {
        lanuageName: "Python",
        languageFileName: "py"
    }
]
myCoding.forEach( (item) => {
    console.log(item.lanuageName);
} )
/*output
javaScript
c++
Python
*/