//ACHRAF KARKAIH MOURAD ZAKAR

init();
 var x = document.createElement("INPUT");
  x.setAttribute("type", "text");
  x.setAttribute("class", "maxi");
  document.body.appendChild(x);
var scoreconst1=0;
var scoreconst2=0;
var score1=0;
var score2=0;
var max =100;
function init(){

    document.getElementById("nom-0").innerHTML="joueur 1<i class='ion-social-tux'></i>";
    document.getElementById("nom-1").innerHTML="joueur 2<i class='ion-social-tux'></i>";
var scr1= document.getElementById("score-0").innerHTML="0";
var scr2 = document.getElementById("score-1").innerHTML="0";

var cort1= document.getElementById("courent-0").innerHTML="0";
var cort2 = document.getElementById("courent-1").innerHTML="0";

var actjrs1 = document.querySelector(".panel-joueur-0");
actjrs1.classList.add("actif");


var actjrs2 = document.querySelector(".panel-joueur-1");
actjrs2.classList.remove("actif");

document.querySelector(".de").style.display='none';
score1=0;
score2=0;
scoreconst1=0;
scoreconst2=0;
var btnlance =document.body.getElementsByClassName("btn-lancer");
 btnlance[0].disabled=false;
 var btnpasse =document.body.getElementsByClassName("btn-passe");
 btnpasse[0].disabled=false;

}
var x =0 ;
function lance(){
   var numb = document.body.querySelector(".maxi").value;

   console.log(numb);
   if(numb!=null){
max=numb;
   }
    var imgqrr=['de-1.png','de-2.png','de-3.png','de-4.png','de-5.png','de-6.png'];
    var actjrs1 = document.querySelector(".panel-joueur-0").classList;

    var actjrs2 = document.querySelector(".panel-joueur-1").classList;
 
     x = Math.floor(Math.random()*6+1);
    document.querySelector(".de").src=imgqrr[x-1];
    document.querySelector(".de").style.display='block';
     


    if(x==1){
         
         score1=0;
         score2=0;
         x=0;
         
    joueurSuivant();

    }
    
    if(actjrs1[1]!=null ){
        score1= document.getElementById("courent-0").innerHTML=score1 +x;
        
    
    }else{
        score2= document.getElementById("courent-1").innerHTML=score2 +x;
    }

}

function  joueurSuivant()
{
    
    var cort1= document.getElementById("courent-0").innerHTML="0";
var cort2 = document.getElementById("courent-1").innerHTML="0";
    var actjrs1 = document.querySelector(".panel-joueur-0").classList;

    var actjrs2 = document.querySelector(".panel-joueur-1").classList;

    


    if(actjrs1[1]!=null ){
        scoreconst1=scoreconst1+score1;
        if(scoreconst1>=max){
            document.getElementById("nom-0").innerHTML="Winner <i class='ion-social-tux'></i>";
            var actjrs1 = document.querySelector(".panel-joueur-0");
        actjrs1.classList.add("actif");
        var actjrs2 = document.querySelector(".panel-joueur-1");
        actjrs2.classList.remove("actif");
        document.getElementById("score-0").innerHTML=scoreconst1;
        var btnlance =document.body.getElementsByClassName("btn-lancer");
 btnlance[0].disabled=true;
 var btnpasse =document.body.getElementsByClassName("btn-passe");
 btnpasse[0].disabled=true;
        return 0;
        }
    
        var actjrs1 = document.querySelector(".panel-joueur-0");
        actjrs1.classList.remove("actif");
        var actjrs2 = document.querySelector(".panel-joueur-1");
        actjrs2.classList.add("actif");
        
      document.getElementById("score-0").innerHTML=scoreconst1;
      document.querySelector(".de").style.display='none';
    
    }else{
        scoreconst2=scoreconst2+score2;
        if(scoreconst2>=max){

            document.getElementById("nom-1").innerHTML="Winner <i class='ion-social-tux'></i>";
            var actjrs1 = document.querySelector(".panel-joueur-0");
        actjrs1.classList.remove("actif");
        var actjrs2 = document.querySelector(".panel-joueur-1");
        actjrs2.classList.add("actif");
        document.getElementById("score-1").innerHTML=scoreconst2;
        var btnlance =document.body.getElementsByClassName("btn-lancer");
 btnlance[0].disabled=true;
 var btnpasse =document.body.getElementsByClassName("btn-passe");
 btnpasse[0].disabled=true;
        return 0;
        }
        var actjrs1 = document.querySelector(".panel-joueur-0");
        actjrs1.classList.add("actif");
        var actjrs2 = document.querySelector(".panel-joueur-1");
        actjrs2.classList.remove("actif");
        
      document.getElementById("score-1").innerHTML=scoreconst2;
      document.querySelector(".de").style.display='none';
        
    }
    
    score1=0;
    score2=0;

}

 var btnnv =document.body.getElementsByClassName("btn-new");
 btnnv[0].addEventListener('click',init,false);
 var btnlance =document.body.getElementsByClassName("btn-lancer");
 btnlance[0].addEventListener('click',lance,false);
 var btnpasse =document.body.getElementsByClassName("btn-passe");
 btnpasse[0].addEventListener('click',joueurSuivant,false);