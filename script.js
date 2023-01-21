const searchInput = document.getElementById("search")

searchInput.addEventListener("input", (e)=>{
    const value = e.target.value
    console.log(value.length)
    if(getByValue(numberMap, value) && value.length == 3){
        alert("Number is here")
    }else if (value.length == 3){
        alert("Number is not here")
    }
})
function getByValue(map, searchValue) {
    var subString = ""
    for (let [key, value] of map.entries()) {
        var s = JSON.stringify(value)
        
        if (s.slice(2, 5) === searchValue){
            subString = s.slice(2, 5)
            return true
        }
    }
    return false
}