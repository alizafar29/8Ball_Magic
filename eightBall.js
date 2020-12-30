var name,question,answer,num,lower,who;
answer = ["It is certain.","It is decidedly so.","Reply hazy try again.","Cannot predict now.","Do not count on it.","My sources say no.","Outlook not so good.","Signs point to yes.","Without a doubt.","Yes – definitely.","You may rely on it.","As I see it, yes.","Most likely.","Yes.","Better not tell you now.","Concentrate and ask again.","My sources say no.","Very doubtful."];
who = ['It is Uncertain','Reply hazy try again','Cannot predict now'];

function ask(){
    name = document.getElementById('userName').value;
    localStorage.setItem('name',name);
    location.href='home.html';
}


function greet(){
    if(name == ""){
                    document.getElementById('wish').innerHTML ="Guest Welcome to the Eight Ball Fortune Teller";
                }
    else{
            document.getElementById('wish').innerHTML = localStorage.getItem('name') + ' Welcome to the Eight Ball Fortune Teller';


        }
}

function shake(){
    question = document.getElementById('question').value;
    lower = question.toLowerCase();
    lower = lower.indexOf('who');
    if(question == ""){
        alert("Please Enter a Question !")
    }
    else if(Number.isInteger(Number(question))){
        alert("Number is Not Allowed !")
    }
    else if(question.length < 10){
        alert("Please Enter a Valid Question !")
    }

    else{
        document.getElementById('img').classList.add("logo");
        setTimeout(predict, 3000);
    }
}

function predict(){
    document.getElementById('img').classList.remove("logo");

    if(question.length > 10 && isNaN(question)){

        if(lower == 0){

            document.getElementById('fortune').innerHTML = who[(Math.floor(Math.random() * 3))];
        }
        else{
            document.getElementById('fortune').innerHTML = answer[(Math.floor(Math.random() * 18))];
            }
       
    }

}
    

function clearValue(){
    document.getElementById('fortune').innerHTML = '';
    document.getElementById('question').value="";

}
