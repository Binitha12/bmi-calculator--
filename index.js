//button has id btn

const bmiinput=document.getElementById("bmiresult");
const weightcondn=document.getElementById("wt-condn");
function calculatebmi()
{
  const height=document.getElementById("Height").value /100;
  const weight=document.getElementById("Weight").value;

const bmivalue=weight/(height*height);
bmiinput.value= bmivalue;

if(bmivalue<18.5)
{
    weightcondn.innerText="Under Weight";
}
else if(bmivalue>18.5 && bmivalue<24.9)
{
    weightcondn.innerText="Healthy Weight";

}
else if(bmivalue>25 && bmivalue<29.9)
{
    weightcondn.innerText="Over Weight";
}
else
{
weightcondn.innerText="Obese";
}


}
document.getElementById("btn").addEventListener("click",calculatebmi);
