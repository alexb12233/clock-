function time() {
    document.getElementById('n1').style.display='none'
    var date=new Date()
    var hours=date.getHours()
    var mins=date.getMinutes()
    var secs=date.getSeconds()
    var session=0
    if (hours>=12){
        session='pm'
    }
    if (hours<12){
        session='am'
    }
    var clock=hours+':'+mins+':'+secs+session
    document.getElementById("1").innerHTML=clock
    setInterval(time,1000)
}