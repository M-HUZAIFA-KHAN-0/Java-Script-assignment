let percentage = prompt("Enter Your Percentage")
let grade


if(percentage > 100)
{
    console.log("Please Enter a Correct Percentage")
}
else if(percentage >= 90)
{
    console.log("A+")
    grade = "A+"
}
else if(percentage >= 80)
{
    console.log("A1")
    grade = "A1"
}
else if(percentage >= 70)
{
    console.log("A")
    grade = "A"
}
else if(percentage >= 60)
{
    console.log("B")
    grade = "B"
}
else if(percentage >= 50)
{
    console.log("C")
    grade = "C"

}
else if(percentage >= 40)
{
    console.log("D")
    grade = "D"

}
else if(percentage < 40)
{
    console.log("F")
    grade = "F"
}




switch(grade)
{
    case "A+":
        console.log("You Have Done Excellent Job!")
    break;
    case "A1":
        console.log("You Have Done Great Job!")
    break;
    case "A":
        console.log("You Have Done Good Job!")
    break;
    case "B":
        console.log("Statisfactory Performance")
    break;
    case "C":
        console.log("Keep it up")
    break;
    case "D":
        console.log("You Have just pass")
    break;
    case "F":
        console.log("You are Fail")
    break;
}











