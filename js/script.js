/*function Timer() {
    var eT = new Date("16 July 2021 10:00:00 GMT+05:30");
    eT = (Date.parse(eT) / 1000);

    var nw = new Date();
    nw = (Date.parse(nw) / 1000);

    var tL = eT - nw;

    var d = Math.floor(tL / 86400);
    var h = Math.floor((tL - (d * 86400)) / 3600);
    var m = Math.floor((tL - (d * 86400) - (h * 3600 )) / 60);
    var s = Math.floor((tL - (d * 86400) - (h * 3600) - (m * 60)));

    if (h < "10") { h = "0" + h; }
    if (m < "10") { m = "0" + m; }
    if (s < "10") { s = "0" + s; }

    $("#dys").html(d + "<span>\n\n Days</span>");
    $("#hrs").html(h + "<span>\n\n Hours</span>");
    $("#mns").html(m + "<span>\n\n Minutes</span>");
    $("#sec").html(s + "<span>\n\n Seconds</span>");

}


(function () {
    const second = 1000,
      minute = second * 60,
      hour = minute * 60,
      day = hour * 24;
   
    let birthday = "Sep 30, 2021 00:00:00",
      countDown = new Date(birthday).getTime(),
      x = setInterval(function () {
        let now = new Date().getTime(),
          distance = countDown - now;
   
        (document.getElementById("days").innerText = Math.floor(distance / day)),
          (document.getElementById("hours").innerText = Math.floor(
            (distance % day) / hour
          )),
          (document.getElementById("minutes").innerText = Math.floor(
            (distance % hour) / minute
          )),
          (document.getElementById("seconds").innerText = Math.floor(
            (distance % minute) / second
          ));
   
        //do something later when date is reached
        if (distance < 0) {
          let headline = document.getElementById("headline"),
            countdown = document.getElementById("countdown"),
            content = document.getElementById("content");
   
          headline.innerText = "It's my birthday!";
          countdown.style.display = "none";
          content.style.display = "block";
   
          clearInterval(x);
        }
        //seconds
      }, 0);
  })();*/

  var deadline = new Date("Jul 29, 2021 10:00:00").getTime(); 
  
  var x = setInterval(function() { 
    
  var now = new Date().getTime(); 
  var t = deadline - now; 
  var days = Math.floor(t / (1000*60*60*24)); 
  var hours = Math.floor((t%(1000*60*60*24))/(1000 * 60 * 60)); 
  var minutes = Math.floor((t%(1000*60*60)) / (1000 * 60)); 
  var seconds = Math.floor((t%(1000*60)) / 1000); 
  document.getElementById("day").innerHTML =days ; 
  document.getElementById("hour").innerHTML =hours; 
  document.getElementById("minute").innerHTML = minutes;  
  document.getElementById("second").innerHTML =seconds;  
  if (t < 0) { 
          clearInterval(x); 
          document.getElementById("demo").innerHTML = "TIME UP"; 
          document.getElementById("day").innerHTML ='0'; 
          document.getElementById("hour").innerHTML ='0'; 
          document.getElementById("minute").innerHTML ='0' ;  
          document.getElementById("second").innerHTML = '0'; } 
  }, 1000); 