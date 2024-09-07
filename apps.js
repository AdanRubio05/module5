document.getElementById("intro").innerHTML = "In The Old Testament book, Genesis, Noah was commanded by God to build an ark."

const cargo = ["Elephants", "Lions", "Dogs", "Cats", "everything that crawls or slithers."] ;

let text = "" ;
for (let i = 0; i < cargo.length; i++) {
    text += cargo[i] + "<br>" ;
}
document.getElementById("animals").innerHTML = text ;