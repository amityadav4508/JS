//  call apply bind 
// funcction ko call karte waqt aap set kr skte ho ki uski this ki value kay hogi


let obj = {
    name: "harsh",
};

function abcd(){
    console.log(this);
}
// abcd()
abcd.call(obj);