function task1(){
    let r = document.querySelector(".content")
    r.innerHTML = ""
    for(let i=0; i<3; i++){
        
        // console.log(11)
        let d  = document.createElement("div")
        // console.log(d)
        // const x = 23
        // console.log(x)
        // x  = 24
        // console.log(x)
        // console.log(r)
        d.classList.add("ball")
        r.appendChild(d)
    }
}