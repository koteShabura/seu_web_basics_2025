function task1(){
    // console.log(11)
    let a = document.getElementById("result")
    // console.log(a)
    a.innerText = "Hello SEU!!!!"
}

let t2 = document.querySelector("#test-2")
// console.log(t2)

let names = ["მარი", "გია", "ირინა", "ნინო", "მედეა"]

t2.addEventListener("click", function(){
    // console.log(11)
    // document.getElementById("d1").innerText = "გამარჯობა ნიკა!!"
    // document.getElementById("d2").innerText = "გამარჯობა ნინი!!"
    // document.getElementById("d3").innerText = "გამარჯობა ლიკა!!"
    let ar2 =  document.getElementsByTagName("article")[1]
    let divs =  ar2.querySelectorAll("div")

    // console.log(ar[1])

    // console.log(divs)

    for(let i = 0; i<divs.length; i++){
        console.log(divs[i])
        divs[i].innerText = `გამარჯობა ${names[i]} !!!`
    }
})

