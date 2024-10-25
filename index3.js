//kontrolli vanust põhikool sööma mineku aeg
//(tõene&&tõene)=võrdlen kahte poolt, et ta läheks statemandi sisse
// (tõene püstikriipsx2 väär)
//
//põhikool 7-16
//söö kell 10
//gümn 17-20
//söö kl 11
//täiskasvanud 20+
//söö kell 12
//vanus on valesti

let age = prompt("vanus?")

if(age>=7&&age<=16){
    console.log("mine kl 10 sööma")
}

else if (age>=17 && age<=20){
    console.log("mine kl 11 sööma")
}
else if (age>20){
    console.log("mine kl 12 sööma")
}