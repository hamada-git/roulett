var intervalid;
var data = [];     
var num;
var random = null;

$(function() {
    show_roulette();
    $('#start').click(start_roulette);
    $('#stop').click(stop_roulette);
    $('#reset').click(reset_roulette);　
});

function show_roulette() {   
    $('#matrix').empty();　
    random = null;
    data = [];　　　　　　　　
    for (var i=1; i<=4; i++){    
        $('#matrix').append('<tr></tr>');    
        for (var j=1; j<=4; j++){  
            var NUM = 4*(i-1)+j;　　
            $('tr').eq(i - 1).append('<td id = "td' + NUM + '">' + NUM + '</td>');　
            data.push(NUM);　　
        }
    } 
}

function start_roulette() {                             
    intervalid = setInterval(shuffle_roulette,50);
    $('#start').prop('disabled',true);               
    $('#stop').prop('disabled',false);　 　　　　　　　
}

function shuffle_roulette() {  
    $('#td' + num).removeClass('light_up_pink'); 
    random = Math.floor(Math.random() * data.length); 
    num = data[random];
    $('#td' + num).addClass('light_up_pink');    
}

function stop_roulette() {    
    if (random === null) {　
        return;             
    }                       
    clearInterval(intervalid);
    $('#td' + num).addClass('light_up_gray');    
    data.splice( random , 1 );
    random = null;    
    if (data.length < 1) {
        $('#start').prop('disabled',true);        
        $('#stop').prop('disabled',true);　　　　　　　　　
    } else {
        $('#start').prop('disabled',false);        
        $('#stop').prop('disabled',true);　　　　　
    }
}

function reset_roulette() {
    show_roulette(); 
    clearInterval(intervalid);
    $('#start').prop('disabled',false);   
    $('#stop').prop('disabled',true);　　
}
