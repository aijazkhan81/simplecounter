var counter = $('#counter'),
    number = $('#number'),
    enter = $('#enter'),
    resetForm = $('#resetForm'),
    box = $('#box'),
    finish = $('#finish');
number.val(0);

function animate(x) {
    x.animate({marginRight: "20px", opacity: "1"},300)
    .delay(800)
    .animate({marginRight: "-20em", opacity: "0.5"},500);   
};

function rest(){    
    number.val(0);
    counter.text(0);
};

counter.click(function(){  
    var count = Number(counter.text()),
    val = number.val();
    if(val > count){
        count++;
        counter.text(count);
        console.log(count);
    };
    if(count % 5 === 0 && count > 0){
        animate(box);
        var message = count + " so far.";
        box.html(message);
    };
    if(val == count){
        console.log(val, count);
        animate(finish);
        var message = count + " complete.";
        finish.html(message);
    };
    if((val == 0) && (count == 0)){
        animate(finish);
        var message = "Please enter a number";
        finish.html(message);
         number.focus();
    };
});

resetForm.click(function(e){
    e.preventDefault();
    rest();
});
