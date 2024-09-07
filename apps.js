document.getElementById("intro").innerHTML = "In The Old Testament book, Genesis, Noah was commanded by God to build an ark." ;

document.getElementById("originz").innerHTML = "Two of every known animal species was to be brought aboard. These included:" ;

const cargo = ["Elephants", "Lions", "Dogs", "Cats", "and everything that crawled or slithered."] ;

let text = "" ;
for (let i = 0; i < cargo.length; i++) {
    text += cargo[i] + "<br><br>";
}
document.getElementById("animals").innerHTML = text ;

let texta = "" ;
let ii = 2 ;

do {
    texta += "<br>Whoa, Look! There's " + ii + " animals!" ;
    ii++ ;
}
while (ii < 9) ;

document.getElementById("count").innerHTML = texta ;

const head = document.querySelector(".gag") ;

head.classList.add(`gag`) ;