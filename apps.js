document.getElementById("intro").innerHTML = "In The Old Testament book, Genesis, Noah was commanded by God to build an ark."

document.getElementById("originz").innerHTML = "Two of every known animal species was to be brought aboard. These included:"

const cargo = ["Elephants", "Lions", "Dogs", "Cats", "and everything that crawled or slithered."] ;

let text = "" ;
for (let i = 0; i < cargo.length; i++) {
    text += cargo[i] + "<br><br>";
}
document.getElementById("animals").innerHTML = text ;