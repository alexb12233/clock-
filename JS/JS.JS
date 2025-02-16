function time() {
    document.getElementById('n1').style.display='none'
    var date=new Date()
    var hours=date.getHours()
    var mins=date.getMinutes()
    var secs=date.getSeconds()
    var clock=hours+':'+mins+':'+secs
    document.getElementById("1").innerhtml=clock
    setInterval(time,1000)
}