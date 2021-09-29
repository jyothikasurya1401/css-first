var heading =document.getElementById('heading')
heading.innerHTML ="Hi from JS"
console.log( heading)
var para =document.getElementsByClassName('para')

console.log(para[0])
console.log(para[1])
console.log(para.length)

var tags =document.getElementsByTagName('a')
console.log(tags)
var query = document.querySelector('.para')
console.log(para)
console.log(query)
var query = document.querySelectorAll('.para')
console.log(para)
console.log(query)
heading.innerHTML="i was added by js"
heading.style="color:red;font-size:2rem"
console.log(heading.classList)
heading.classList.add('five')
heading.classList.remove('one')
console.log(heading.classList)
var body =document.querySelector('body')
body.classList.add("dark")
var list =document.querySelector('ul')
console.log(list)
var arr =['go to the gym','prepare oatmeal','eat']
for(var i=0;i<arr.length;i++){
    console.log(arr[i])
    arr.push["complete the assignment"]
    var element =document.createElement('li')
    var textNode =document.createTextNode(arr[i])
    console.log(textNode)
    element.appendChild(textNode)
    list.appendChild(element)
}