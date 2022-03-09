const copy=document.getElementById("copy");
const pw=document.getElementById("pw");
const length=document.getElementById("length");
const upper=document.getElementById("upper");
const lower=document.getElementById("lower");
const number=document.getElementById("number");
const symbol=document.getElementById("symbol");
const generate=document.getElementById("generate");

const upperletters="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerletters="abcdefghijklmnopqrstuvwxyz";
const numbers="0123456789";
const symbols="~!@#$%^&*()_-=+";


function getLower()
{
    return lowerletters[Math.floor(Math.random()*lowerletters.length)];
}
function getUpper()
{
    return upperletters[Math.floor(Math.random()*upperletters.length)];
}
function getNumber()
{
    return numbers[Math.floor(Math.random()*numbers.length)];
}
function getSymbol()
{
    return symbols[Math.floor(Math.random()*symbols.length)];
}
function generatePassword()
{
    const len=length.value;
    let password='';
    for(let i=0;i<len;i++)
    {
        const x=generateX();
        console.log(x);
        password+=x;

    }
    // alert(password);
    
    pw.innerText=password;
    
}

function generateX()
{
    const xs=[];
    if(upper.checked)
    {
        xs.push(getUpper());
    }
    if(lower.checked)
    {
        xs.push(getLower());
    }
    if(number.checked)
    {
        xs.push(getNumber());
    }
    if(symbol.checked)
    {
        xs.push(getSymbol());
    }
    if(xs.length==0)
    {
        return "";
    }
    return xs[Math.floor(Math.random() * xs.length)];
}

    generate.addEventListener("click",generatePassword);


    copy.addEventListener("click",()=>{
        console.log("Hello");
        const a = document.createElement("textarea");
        const pa=pw.innerText;
        if(!pa)
        {
            return ;
        }
        a.value=pa;
        document.body.appendChild(a);
        a.select();
        document.execCommand("copy");
        a.remove();
        alert("password Copied");
    }
);
