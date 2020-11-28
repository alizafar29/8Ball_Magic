var name,question,answer,num;
answer = ['It is Certain','It is decidedly so','Reply hazy try again','Cannot predict now','Do not count on it','My sources say no','Outlook not so good','Signs point to yes'];


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

function predict(){
    question = document.getElementById('question').value;

    if(question.length > 10 && isNaN(question)){


        document.getElementById('fortune').innerHTML = answer[(Math.floor(Math.random() * 8))];
    }
    else{
        alert("Please Enter a Valid Question.")
    }

    
}

function clearValue(){
    document.getElementById('fortune').innerHTML = '';
    document.getElementById('question').value="";

}