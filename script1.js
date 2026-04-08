const getIdolMatch=(mbti)=>{
    const type=mbti.toUpperCase();

switch (type){
    case "INTJ":
        return "Ryujin (ITZY)";
    case "INFP":
        return "V (BTS)";
    case "INFJ":
        return "IU";
    case "ENFP":
        return "Danielle (NewJeans)";
    case "ENTJ":
        return "Key(SHINee)";
    case "ESFJ":
        return "Lisa(BLACKPINK)";
    case "ISTP":
        return "Haerin(NewJeans)";
    case "ISFP":
        return "JungKook(BTS)";
    default:
        return "A very unique Idol!(Data not found)"

}
};
 
const updateUI =() =>{
    const input = document.getElementById("user-mbti").value;

    if (input.length<4){
        document.getElementById("idol-result").textContent=
           "Please enter 4 leters.";
        return;
    }

    const idolName=getIdolMatch(input);
    document.getElementById("idol-result").textContent=idolName;
};

document.getElementById("button1").addEventListener("click",updateUI);