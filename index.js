var fullDate = () => {
    let day = new Date();
    let myday = day.getDay();
    let mymonth = day.getMonth();
    let year = day.getFullYear();
    let date = day.getDate();
    let hour = (day.getHours()% 12).toString();
    let mn = day.getMinutes().toString();
    let sn = day.getSeconds().toString();

    let nulls = "";
    let month = "";
    let mydate = "";
    let allarrays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thuesday", "Friday", "Saturday"];
    let allMonths = ["January", "February", "March", "April", "May", "June", " July", "Auguest", " September", "October", "November", "December"];
    
    for (let i = 0; i < allarrays.length; i++) {
        switch (myday) {
            case i:
                nulls = allarrays[i];
                break;
        }
        for (let i = 0; i < allMonths.length; i++) {
            switch (mymonth) {
                case i:
                    month = allMonths[i];
            }
        }
        switch (date) {
            case 1:
            case 21:
            case 31:
                mydate = "st";
            case 2:
            case 22:
                mydate = "nd";
            case 3:
            case 23:
                mydate = "rd";
            default:
                mydate = "th";
        }
        if ( hour.length < 2){
            hour = '0' + hour;
        }
        if ( mn.length < 2){
            mn = '0' + mn;
        }
        if ( sn.length < 2){
            sn = '0' + sn;
        }
    }
    document.querySelector('h1').innerHTML = nulls + " " + date + "<sup>" + mydate + "</sup>" + " " + month + " " + year;
    if(day.getHours() < 12){
    document.querySelector('h2').innerHTML = hour + " :" + mn + " :" + sn  + " " +" AM";
            document.querySelector('h3').innerHTML = "GOOD MORNING EVERYONE";
            document.body.style.background = "url(23.jpg) no-repeat";
            document.body.style.backgroundSize = "cover";
    }else {
        document.querySelector('h2').innerHTML = hour + " :" + mn + " :" + sn  + " "+ "PM";
        document.querySelector('h3').innerHTML = "GOOD AFTERNOON EVERYONE";
        document.body.style.background = "url(24.jpg) no-repeat";
        document.body.style.backgroundSize = "cover";
    }
     if(day.getHours()>=16){
        document.querySelector('h2').innerHTML = hour + " :" + mn + " :" + sn  + " "+ "PM";
        document.querySelector('h3').innerHTML = "GOOD " + "  "  + " EVENING "  + " " + "EVERYBODY";
        document.body.style.background = " url(25.jpg) no-repeat";
        document.body.style.backgroundSize =  "cover";
    }
    if ( day.getHours()=20){
        document.querySelector('h2').innerHTML = hour + " :" + mn + " :" + sn  + " "+ "PM";
        document.querySelector('h3').innerHTML = "GOOD  NIGHT EVERYONE";
        document.body.style.background = "url(26.jpg) no-repeat";
        document.body.style.backgroundSize = "cover";
    }
}
fullDate();
setInterval(fullDate,1000);
var colorchange = () => {
    let color = document.querySelector('h1');
    if (color.style.color == "pink"){
        color.style.color = "blue";
    }else{
        color.style.color = "pink";
    }
}
var colorTime = () => {
    let color = document.querySelector('h2');
    if (color.style.color == "red"){
        color.style.color = "white";
    }else{
        color.style.color = "red";
    }
}
var color = () => {
    let color = document.querySelector('h3');
    if (color.style.color == "yellow"){
        color.style.color = "white";
    }else{
        color.style.color = "yellow";
    }
}
setInterval(colorchange, 900);
setInterval(colorTime, 800);
setInterval(color, 800);
