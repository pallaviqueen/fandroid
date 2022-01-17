navigator.getBattery().then(function(battery) { 
    var level = battery.level; 
    level = Math.round(Number(level*100)) + "%";


//-------------Pallavi-Bhardwaj-------------//
var d1 = new Object();
var d2 = new Object();
d1 = {
    0:'SUNDAY',
    1:'MONDAY',
    2:'TUESDAY',
    3:'WEDNESDAY',
    4:'THURSDAY',
    5:'FRIDAY',
    6:'SATURDAY'
}

d2 = {
    0:"January",
    1:"February",
    2:"March",
    3:"April",
    4:"May",
    5:"June",
    6:"July",
    7:"August",
    8:"September",
    9:"October",
    10:"November",
    11:"December"    
}

function time(){
        var d = new Date();
        var sec = d.getSeconds();
        var min = d.getMinutes();
        var hor = d.getHours();
        var dat = d.getDate();
        var mon = d.getMonth();
        var yer = d.getFullYear();
        var day = d.getDay();
        var d_y = d1[day];
        var m_n = d2[mon];
        
        if (sec<10){
            sec = "0"+sec;
        }
        if (min<10){
            min = "0"+min;
        }
        
        if (hor>12){
            hor = hor -12 ;
            if (hor<10){
                hor = "0"+hor;
            }
            var a_p = "PM"
        }
        else {
            var a_p = "AM";
            if(hor<10){
                    hor = "0"+hor;
                }
        }
var num = (Math.random()*100).toFixed(2);
document.getElementById('date').innerHTML = d_y+", "+m_n+" "+dat;
document.getElementById('date2').innerHTML = d_y.slice(0,3)+", "+m_n.slice(0,3)+" "+dat;
document.getElementById('time').innerHTML = hor+":"+min;
}
setInterval(time,1000);
});

function settings() {
    document.getElementById('3').style.display = 'none';
    document.getElementById('4').style.display = 'none';
    document.getElementById('5').style.display = 'none';
    document.getElementById('2').style.display = 'block';
}

function func1() {        
    document.getElementById('2').style.display = 'none'; 
document.getElementById('6').style.display = 'block'; 
document.getElementById('7').style.display = 'none'; 
document.getElementById('8').style.display = 'none'; 
}

function func2() {        
    document.getElementById('2').style.display = 'none'; 
document.getElementById('6').style.display = 'none'; 
document.getElementById('7').style.display = 'block'; 
document.getElementById('8').style.display = 'none'; 
}

function func3() {        
    document.getElementById('2').style.display = 'none'; 
document.getElementById('6').style.display = 'none'; 
document.getElementById('7').style.display = 'none'; 
document.getElementById('8').style.display = 'block'; 
}

function walsmooth1() {
var imgurl = "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsc3Hz_xEzJ05dIsdZDuwcZR-HByk4mHyYPw&usqp=CAU')";
document.getElementById('7').style.display = 'none';
document.getElementById('3').style.display = 'block';
    document.getElementById('4').style.display = 'block';
    document.getElementById('5').style.display = 'block';
document.getElementById('3').style.backgroundImage = imgurl;
    document.getElementById('4').style.backgroundImage  = imgurl;
   document.getElementById('5').style.backgroundImage = imgurl;
}

function walsmooth2() { 
var imgurl = "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNsHVausqOjUR_uxJbYYN806xNCrtLHGzrmw&usqp=CAU')";
document.getElementById('3').style.backgroundImage = imgurl;
    document.getElementById('4').style.backgroundImage  = imgurl;
   document.getElementById('5').style.backgroundImage = imgurl;
document.getElementById('7').style.display = 'none';
document.getElementById('3').style.display = 'block';
    document.getElementById('4').style.display = 'block';
    document.getElementById('5').style.display = 'block';
}

function walsmooth3() { 
var imgurl = "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNXZ0pT7FHyyrZnkUfPOFqrHYznHRbE5uYug&usqp=CAU')";
document.getElementById('3').style.backgroundImage = imgurl;
    document.getElementById('4').style.backgroundImage  = imgurl;
   document.getElementById('5').style.backgroundImage = imgurl;
document.getElementById('7').style.display = 'none';
document.getElementById('3').style.display = 'block';
    document.getElementById('4').style.display = 'block';
    document.getElementById('5').style.display = 'block';
}

function walsmooth4() { 
var imgurl = "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGwWFYf2HMvvrSDGyLdGTTsXuG6kFL0qquHQ&usqp=CAU')";
document.getElementById('3').style.backgroundImage = imgurl;
    document.getElementById('4').style.backgroundImage  = imgurl;
   document.getElementById('5').style.backgroundImage = imgurl;
document.getElementById('7').style.display = 'none';
document.getElementById('3').style.display = 'block';
    document.getElementById('4').style.display = 'block';
    document.getElementById('5').style.display = 'block';
}

function walsmooth5() { 
var imgurl = "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLUl_9UQ6w8udEKiAY0jjo06MWyT-0AqIpqw&usqp=CAU')";
document.getElementById('3').style.backgroundImage = imgurl;
    document.getElementById('4').style.backgroundImage  = imgurl;
   document.getElementById('5').style.backgroundImage = imgurl;
document.getElementById('7').style.display = 'none';
document.getElementById('3').style.display = 'block';
    document.getElementById('4').style.display = 'block';
    document.getElementById('5').style.display = 'block';
}

function walsmooth6() { 
var imgurl = "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4iY1K6iyJ07QVKwdjJXzEkjL7NAE5RwE28g&usqp=CAU')";
document.getElementById('3').style.backgroundImage = imgurl;
    document.getElementById('4').style.backgroundImage  = imgurl;
   document.getElementById('5').style.backgroundImage = imgurl;
document.getElementById('7').style.display = 'none';
document.getElementById('3').style.display = 'block';
    document.getElementById('4').style.display = 'block';
    document.getElementById('5').style.display = 'block';
}

function walsmooth7() { 
var imgurl = "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ50gJuI7unFRbSl-w9lRzMOMIh7NZLKbKTbQ&usqp=CAU')";
document.getElementById('3').style.backgroundImage = imgurl;
    document.getElementById('4').style.backgroundImage  = imgurl;
   document.getElementById('5').style.backgroundImage = imgurl;
document.getElementById('7').style.display = 'none';
document.getElementById('3').style.display = 'block';
document.getElementById('4').style.display = 'block';
document.getElementById('5').style.display = 'block';
}
function walsmooth8() { 
var imgurl = "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTf1moyzdrOW6_IC5SzPCIxNbc8RBheirCyQ&usqp=CAU')";
document.getElementById('3').style.backgroundImage = imgurl;
    document.getElementById('4').style.backgroundImage  = imgurl;
   document.getElementById('5').style.backgroundImage = imgurl;
document.getElementById('7').style.display = 'none';
document.getElementById('3').style.display = 'block';
document.getElementById('4').style.display = 'block';
document.getElementById('5').style.display = 'block';
}
function walsmooth9() { 
var imgurl = "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcKUMjaW_YVhR8SQdIqfvWgtfnjc_Tr-Cmbw&usqp=CAU')";
document.getElementById('3').style.backgroundImage = imgurl;
    document.getElementById('4').style.backgroundImage  = imgurl;
   document.getElementById('5').style.backgroundImage = imgurl;
document.getElementById('7').style.display = 'none';
document.getElementById('3').style.display = 'block';
document.getElementById('4').style.display = 'block';
document.getElementById('5').style.display = 'block';
}
function walsmooth10() { 
var imgurl = "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGj35Gf3T52M5Puqc8DiHjgcdbjaSIZ3iFhA&usqp=CAU')";
document.getElementById('3').style.backgroundImage = imgurl;
    document.getElementById('4').style.backgroundImage  = imgurl;
   document.getElementById('5').style.backgroundImage = imgurl;
document.getElementById('7').style.display = 'none';
document.getElementById('3').style.display = 'block';
document.getElementById('4').style.display = 'block';
document.getElementById('5').style.display = 'block';
}

function walnature1() {
var imgurl = "url('https://images.unsplash.com/photo-1592691475195-29939a07272a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGhpZ2glMjBtZWdhcGl4ZWx8ZW58MHx8MHx8&auto=format&fit=crop&w=700&q=60')";
document.getElementById('7').style.display = 'none';
document.getElementById('3').style.display = 'block';
    document.getElementById('4').style.display = 'block';
    document.getElementById('5').style.display = 'block';
document.getElementById('3').style.backgroundImage = imgurl;
    document.getElementById('4').style.backgroundImage  = imgurl;
   document.getElementById('5').style.backgroundImage = imgurl;
}

function walnature2() { 
var imgurl = "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVNvhCPTZUgP4rn3n3RwbdcATb6PeF4DFOzA&usqp=CAU')";
document.getElementById('3').style.backgroundImage = imgurl;
    document.getElementById('4').style.backgroundImage  = imgurl;
   document.getElementById('5').style.backgroundImage = imgurl;
document.getElementById('7').style.display = 'none';
document.getElementById('3').style.display = 'block';
    document.getElementById('4').style.display = 'block';
    document.getElementById('5').style.display = 'block';
}

function walnature3() { 
var imgurl = "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRXvql-qSEUox0iDof1CZes9R-lDBkICsJwg&usqp=CAU')";
document.getElementById('3').style.backgroundImage = imgurl;
    document.getElementById('4').style.backgroundImage  = imgurl;
   document.getElementById('5').style.backgroundImage = imgurl;
document.getElementById('7').style.display = 'none';
document.getElementById('3').style.display = 'block';
    document.getElementById('4').style.display = 'block';
    document.getElementById('5').style.display = 'block';
}

function walnature4() { 
var imgurl = "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKz0EEgoBhaicvScG_DeXBWlQcj-ScZUeO4g&usqp=CAU')";
document.getElementById('3').style.backgroundImage = imgurl;
    document.getElementById('4').style.backgroundImage  = imgurl;
   document.getElementById('5').style.backgroundImage = imgurl;
document.getElementById('7').style.display = 'none';
document.getElementById('3').style.display = 'block';
    document.getElementById('4').style.display = 'block';
    document.getElementById('5').style.display = 'block';
}

function walnature5() { 
var imgurl = "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKnKONXdySw246Xn9mL2cqhjEIxP1h6D5QRg&usqp=CAU')";
document.getElementById('3').style.backgroundImage = imgurl;
    document.getElementById('4').style.backgroundImage  = imgurl;
   document.getElementById('5').style.backgroundImage = imgurl;
document.getElementById('7').style.display = 'none';
document.getElementById('3').style.display = 'block';
    document.getElementById('4').style.display = 'block';
    document.getElementById('5').style.display = 'block';
}

function walnature6() { 
var imgurl = "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMXKMqSo7LHQB5oah9HDVc068L02oVLpY2Uw&usqp=CAU')";
document.getElementById('3').style.backgroundImage = imgurl;
    document.getElementById('4').style.backgroundImage  = imgurl;
   document.getElementById('5').style.backgroundImage = imgurl;
document.getElementById('7').style.display = 'none';
document.getElementById('3').style.display = 'block';
    document.getElementById('4').style.display = 'block';
    document.getElementById('5').style.display = 'block';
}

function walnature7() { 
var imgurl = "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6Q0RthIKlwirDiI29vMIUOhTMGd7wgaJ0ZA&usqp=CAU')";
document.getElementById('3').style.backgroundImage = imgurl;
    document.getElementById('4').style.backgroundImage  = imgurl;
   document.getElementById('5').style.backgroundImage = imgurl;
document.getElementById('7').style.display = 'none';
document.getElementById('3').style.display = 'block';
document.getElementById('4').style.display = 'block';
document.getElementById('5').style.display = 'block';
}
function walnature8() { 
var imgurl = "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoF_JNZVqoBrJbxsuW4zavL9jq3ChUE2V4SA&usqp=CAU')";
document.getElementById('3').style.backgroundImage = imgurl;
    document.getElementById('4').style.backgroundImage  = imgurl;
   document.getElementById('5').style.backgroundImage = imgurl;
document.getElementById('7').style.display = 'none';
document.getElementById('3').style.display = 'block';
document.getElementById('4').style.display = 'block';
document.getElementById('5').style.display = 'block';
}
function walnature9() { 
var imgurl = "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZHdB8zDOfC_trGWgyeIl7AlLsTeOp11Ym5w&usqp=CAU')";
document.getElementById('3').style.backgroundImage = imgurl;
    document.getElementById('4').style.backgroundImage  = imgurl;
   document.getElementById('5').style.backgroundImage = imgurl;
document.getElementById('7').style.display = 'none';
document.getElementById('3').style.display = 'block';
document.getElementById('4').style.display = 'block';
document.getElementById('5').style.display = 'block';
}
function walnature10() { 
var imgurl = "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8OlZd-dc-WAINZfpTXfjz3sRDuQiB433ABA&usqp=CAU')";
document.getElementById('3').style.backgroundImage = imgurl;
    document.getElementById('4').style.backgroundImage  = imgurl;
   document.getElementById('5').style.backgroundImage = imgurl;
document.getElementById('7').style.display = 'none';
document.getElementById('3').style.display = 'block';
document.getElementById('4').style.display = 'block';
document.getElementById('5').style.display = 'block';
}

function walmonuments1() {
var imgurl = "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5CM2YnnuijaUl4t4w_oTTz0MLH_G4pWqZQw&usqp=CAU')";
document.getElementById('7').style.display = 'none';
document.getElementById('3').style.display = 'block';
    document.getElementById('4').style.display = 'block';
    document.getElementById('5').style.display = 'block';
document.getElementById('3').style.backgroundImage = imgurl;
    document.getElementById('4').style.backgroundImage  = imgurl;
   document.getElementById('5').style.backgroundImage = imgurl;
}

function walmonuments2() { 
var imgurl = "url('https://wallpapercave.com/wp/wp6089366.jpg')";
document.getElementById('3').style.backgroundImage = imgurl;
    document.getElementById('4').style.backgroundImage  = imgurl;
   document.getElementById('5').style.backgroundImage = imgurl;
document.getElementById('7').style.display = 'none';
document.getElementById('3').style.display = 'block';
    document.getElementById('4').style.display = 'block';
    document.getElementById('5').style.display = 'block';
}

function walmonuments3() { 
var imgurl = "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKJZSFtcx8_aFHc5t319x3If_Qbnf8MudNnQ&usqp=CAU')";
document.getElementById('3').style.backgroundImage = imgurl;
    document.getElementById('4').style.backgroundImage  = imgurl;
   document.getElementById('5').style.backgroundImage = imgurl;
document.getElementById('7').style.display = 'none';
document.getElementById('3').style.display = 'block';
    document.getElementById('4').style.display = 'block';
    document.getElementById('5').style.display = 'block';
}

function walmonuments4() { 
var imgurl = "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0LBrVq1UNyP0obJtO5rX3R1aWp77a2_AVSA&usqp=CAU')";
document.getElementById('3').style.backgroundImage = imgurl;
    document.getElementById('4').style.backgroundImage  = imgurl;
   document.getElementById('5').style.backgroundImage = imgurl;
document.getElementById('7').style.display = 'none';
document.getElementById('3').style.display = 'block';
    document.getElementById('4').style.display = 'block';
    document.getElementById('5').style.display = 'block';
}

function walmonuments5() { 
var imgurl = "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgSkOFC77kfohWmAlEt3ZWhUpBmlMhTx-nxg&usqp=CAU')";
document.getElementById('3').style.backgroundImage = imgurl;
    document.getElementById('4').style.backgroundImage  = imgurl;
   document.getElementById('5').style.backgroundImage = imgurl;
document.getElementById('7').style.display = 'none';
document.getElementById('3').style.display = 'block';
    document.getElementById('4').style.display = 'block';
    document.getElementById('5').style.display = 'block';
}

function walmonuments6() { 
var imgurl = "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLm5J17mH_wYsNxT4y2EjkZWUNNb6SVJ3BRQ&usqp=CAU')";
document.getElementById('3').style.backgroundImage = imgurl;
    document.getElementById('4').style.backgroundImage  = imgurl;
   document.getElementById('5').style.backgroundImage = imgurl;
document.getElementById('7').style.display = 'none';
document.getElementById('3').style.display = 'block';
    document.getElementById('4').style.display = 'block';
    document.getElementById('5').style.display = 'block';
}

function walmonuments7() { 
var imgurl = "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkEQGSdHpdT2vBsJ-Drd1aD_YdIaDaF9ZerQ&usqp=CAU')";
document.getElementById('3').style.backgroundImage = imgurl;
    document.getElementById('4').style.backgroundImage  = imgurl;
   document.getElementById('5').style.backgroundImage = imgurl;
document.getElementById('7').style.display = 'none';
document.getElementById('3').style.display = 'block';
document.getElementById('4').style.display = 'block';
document.getElementById('5').style.display = 'block';
}
function walmonuments8() { 
var imgurl = "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDpTA_Cb5GWfN_k3NjAGci69l_KxhrWhvacQ&usqp=CAU')";
document.getElementById('3').style.backgroundImage = imgurl;
    document.getElementById('4').style.backgroundImage  = imgurl;
   document.getElementById('5').style.backgroundImage = imgurl;
document.getElementById('7').style.display = 'none';
document.getElementById('3').style.display = 'block';
document.getElementById('4').style.display = 'block';
document.getElementById('5').style.display = 'block';
}
function walmonuments9() { 
var imgurl = "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPO_V24cmnB9A3dp9-RWAmz51RNctS0-E9uQ&usqp=CAU')";
document.getElementById('3').style.backgroundImage = imgurl;
    document.getElementById('4').style.backgroundImage  = imgurl;
   document.getElementById('5').style.backgroundImage = imgurl;
document.getElementById('7').style.display = 'none';
document.getElementById('3').style.display = 'block';
document.getElementById('4').style.display = 'block';
document.getElementById('5').style.display = 'block';
}
function walmonuments10() { 
var imgurl = "url('https://wallpapercave.com/wp/wp6089267.jpg')";
document.getElementById('3').style.backgroundImage = imgurl;
    document.getElementById('4').style.backgroundImage  = imgurl;
   document.getElementById('5').style.backgroundImage = imgurl;
document.getElementById('7').style.display = 'none';
document.getElementById('3').style.display = 'block';
document.getElementById('4').style.display = 'block';
document.getElementById('5').style.display = 'block';
}

function waltech1() {
var imgurl = "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8Ql2LGehgPlZ2KhGBPR1c9UAw6OjJZWfXDQ&usqp=CAU')";
document.getElementById('7').style.display = 'none';
document.getElementById('3').style.display = 'block';
    document.getElementById('4').style.display = 'block';
    document.getElementById('5').style.display = 'block';
document.getElementById('3').style.backgroundImage = imgurl;
    document.getElementById('4').style.backgroundImage  = imgurl;
   document.getElementById('5').style.backgroundImage = imgurl;
}

function waltech2() { 
var imgurl = "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK_fTSXcj2EkG4cIYHVbTl5cYyFnzgRn597Q&usqp=CAU')";
document.getElementById('3').style.backgroundImage = imgurl;
    document.getElementById('4').style.backgroundImage  = imgurl;
   document.getElementById('5').style.backgroundImage = imgurl;
document.getElementById('7').style.display = 'none';
document.getElementById('3').style.display = 'block';
    document.getElementById('4').style.display = 'block';
    document.getElementById('5').style.display = 'block';
}

function waltech3() { 
var imgurl = "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu2CL_Xoc1kCK1sLO0w4DMhyn-ZZNtGQo3rg&usqp=CAU')";
document.getElementById('3').style.backgroundImage = imgurl;
    document.getElementById('4').style.backgroundImage  = imgurl;
   document.getElementById('5').style.backgroundImage = imgurl;
document.getElementById('7').style.display = 'none';
document.getElementById('3').style.display = 'block';
    document.getElementById('4').style.display = 'block';
    document.getElementById('5').style.display = 'block';
}

function waltech4() { 
var imgurl = "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcQMRWBiwSFnfb5W4Ub4gZmw4QrWdLYgG1PQ&usqp=CAU')";
document.getElementById('3').style.backgroundImage = imgurl;
    document.getElementById('4').style.backgroundImage  = imgurl;
   document.getElementById('5').style.backgroundImage = imgurl;
document.getElementById('7').style.display = 'none';
document.getElementById('3').style.display = 'block';
    document.getElementById('4').style.display = 'block';
    document.getElementById('5').style.display = 'block';
}

function waltech5() { 
var imgurl = "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5BnMDCUw3N00-dsXtH8gA9XkpKpbMs0olTA&usqp=CAU')";
document.getElementById('3').style.backgroundImage = imgurl;
    document.getElementById('4').style.backgroundImage  = imgurl;
   document.getElementById('5').style.backgroundImage = imgurl;
document.getElementById('7').style.display = 'none';
document.getElementById('3').style.display = 'block';
    document.getElementById('4').style.display = 'block';
    document.getElementById('5').style.display = 'block';
}

function waltech6() { 
var imgurl = "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW-dO41WVFCYmMUbx4F85Pl6L5XGc4m1_2XQ&usqp=CAU')";
document.getElementById('3').style.backgroundImage = imgurl;
    document.getElementById('4').style.backgroundImage  = imgurl;
   document.getElementById('5').style.backgroundImage = imgurl;
document.getElementById('7').style.display = 'none';
document.getElementById('3').style.display = 'block';
    document.getElementById('4').style.display = 'block';
    document.getElementById('5').style.display = 'block';
}

function waltech7() { 
var imgurl = "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH6sckKwYPGs5yQzkVwByvU0hr4vO3w2EeHw&usqp=CAU')";
document.getElementById('3').style.backgroundImage = imgurl;
    document.getElementById('4').style.backgroundImage  = imgurl;
   document.getElementById('5').style.backgroundImage = imgurl;
document.getElementById('7').style.display = 'none';
document.getElementById('3').style.display = 'block';
document.getElementById('4').style.display = 'block';
document.getElementById('5').style.display = 'block';
}
function waltech8() { 
var imgurl = "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR20qda71qhxU3DXcvaKfIIs1lmT9J79QpSmg&usqp=CAU')";
document.getElementById('3').style.backgroundImage = imgurl;
    document.getElementById('4').style.backgroundImage  = imgurl;
   document.getElementById('5').style.backgroundImage = imgurl;
document.getElementById('7').style.display = 'none';
document.getElementById('3').style.display = 'block';
document.getElementById('4').style.display = 'block';
document.getElementById('5').style.display = 'block';
}
function waltech9() { 
var imgurl = "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLz8cOM-rJbTnH4sc_Xfq7DFiYh2om1ihDwQ&usqp=CAU')";
document.getElementById('3').style.backgroundImage = imgurl;
    document.getElementById('4').style.backgroundImage  = imgurl;
   document.getElementById('5').style.backgroundImage = imgurl;
document.getElementById('7').style.display = 'none';
document.getElementById('3').style.display = 'block';
document.getElementById('4').style.display = 'block';
document.getElementById('5').style.display = 'block';
}
function waltech10() { 
var imgurl = "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi1OU-ILtHRwjNpR_EjeroQK0V1O01vLzTMg&usqp=CAU')";
document.getElementById('3').style.backgroundImage = imgurl;
    document.getElementById('4').style.backgroundImage  = imgurl;
   document.getElementById('5').style.backgroundImage = imgurl;
document.getElementById('7').style.display = 'none';
document.getElementById('3').style.display = 'block';
document.getElementById('4').style.display = 'block';
document.getElementById('5').style.display = 'block';
}

function bk() {
document.getElementById('2').style.display = 'block';
document.getElementById('6').style.display = 'none';
document.getElementById('7').style.display = 'none';
document.getElementById('8').style.display = 'none';
}

function Contact() {
document.getElementById('9').style.display = 'block';
document.getElementById('3').style.display = 'none';
document.getElementById('4').style.display = 'none';
document.getElementById('5').style.display = 'none';    
}

function show() {
document.getElementById('callbooth').style.display = 'block'; 
document.getElementById('cut').style.display = 'block'; 
}

function hide() {
document.getElementById('callbooth').style.display = 'none'; 
document.getElementById('cut').style.display = 'none'; 
}

function chrmshow() {
document.getElementById('ooo').style.display = 'block';  
}

function chrmhide() {
document.getElementById('ooo').style.display = 'none';  
}


function calculator() {
document.getElementById('10').style.display = 'block';
document.getElementById('3').style.display = 'none';
document.getElementById('4').style.display = 'none';
document.getElementById('5').style.display = 'none';    
}

function chrome() {
document.getElementById('11').style.display = 'block';
document.getElementById('3').style.display = 'none';
document.getElementById('4').style.display = 'none';
document.getElementById('5').style.display = 'none';    
}

function whatsapp() {
document.getElementById('12').style.display = 'block';
document.getElementById('3').style.display = 'none';
document.getElementById('4').style.display = 'none';
document.getElementById('5').style.display = 'none';    
}

function playstore() {
document.getElementById('13').style.display = 'block';
document.getElementById('3').style.display = 'none';
document.getElementById('4').style.display = 'none';
document.getElementById('5').style.display = 'none';    
}

function Message() {
document.getElementById('14').style.display = 'block';
document.getElementById('3').style.display = 'none';
document.getElementById('4').style.display = 'none';
document.getElementById('5').style.display = 'none';    
}

function music() {
document.getElementById('15').style.display = 'block';
document.getElementById('3').style.display = 'none';
document.getElementById('4').style.display = 'none';
document.getElementById('5').style.display = 'none';    
}

function chess() {
document.getElementById('16').style.display = 'block';
document.getElementById('3').style.display = 'none';
document.getElementById('4').style.display = 'none';
document.getElementById('5').style.display = 'none';    
}

function templerun() {
document.getElementById('17').style.display = 'block';
document.getElementById('3').style.display = 'none';
document.getElementById('4').style.display = 'none';
document.getElementById('5').style.display = 'none';    
}

function shift1() {
document.getElementById('dsmdl').innerHTML = "<i class='fas fa-dot-circle' onclick='shift1()' style='margin-left:60px;color:royalblue;'></i><i class='far fa-circle' onclick='shift2()' style='margin-left:110px;color:grey;'></i>";
document.getElementById('6').style.background = "#Eaf4fc";
document.getElementById('6').style.color = "#000";
document.getElementById('dbtn').style.color = "#000";
document.getElementById('dbtn2').style.color = "#000";
document.getElementById('dbtn3').style.color = "#000";
document.getElementById('ds').style.background = "#Eaf4fc";
document.getElementById('2').style.background = "#F5F5F5";
document.getElementById('2').style.color = "#000";
document.getElementById('7').style.background = "#Eaf4fc";
document.getElementById('7').style.color = "#000";
document.getElementById('8').style.background = "#Ecf3f9";
document.getElementById('8').style.color = "#000";
}

function shift2() {
document.getElementById('dsmdl').innerHTML = "<i class='far fa-circle' onclick='shift1()' style='margin-left:60px;color:grey;'></i><i class='fas fa-dot-circle' onclick='shift2()' style='margin-left:110px;color:royalblue;'></i>";
document.getElementById('6').style.background = "rgb(0,0,0,0.8)";
document.getElementById('6').style.color = "#fff";
document.getElementById('dbtn').style.color = "#fff";
document.getElementById('dbtn2').style.color = "#fff";
document.getElementById('dbtn3').style.color = "#fff";
document.getElementById('2').style.background = "#000";
document.getElementById('2').style.color = "#fff";
document.getElementById('ds').style.background = "#343434";
document.getElementById('7').style.background = "#000";
document.getElementById('7').style.color = "#fff";
document.getElementById('8').style.background = "#000";
document.getElementById('8').style.color = "#fff";
}
