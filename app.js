let date = new Date()
let hours = date.getHours()
let con = document.querySelector("#contain")

setInterval(timer,1000)

function timer(){
    let days = 234
    let count = days/24
    if(count <= 0){
        con.innerHTML = "<p>less than a day remaining"
    }else{
        con.innerHTML = `<p>about ${parseInt(count)} days remaining`
    }
}
