/*var a= "Bravo ",b=" vous etes ", x, y, z, c=" le premier\n", d= " le deuxieme\n", e=" le troisieme\n", somme,somme1,somme2;
x= prompt ("ENTREZ  le premier Nom");
y= prompt ("ENTREZ le deuxieme Nom ");
z=prompt ("ENTREZ le troisieme NOM ");
somme= a+ x+ b+ c ;
somme1= a+ y+ b+ d ;
somme2=a+ z+ b+ e;
somme3=somme+ somme1+ somme2;
alert(somme3); 
alert("bienvenu sur ma page \nje m'appelle EKANGO MARC \nJe suis en specialite en DW");*/


/*var x= 3.14, y= "je suis", z= true , a= 14, b= "A";
document.write("le type de 3.14 est :" + typeof(x) + "\nle type de je suis est :" + typeof(y) +  "\nle type de vrai est :" + typeof(z) + "\nle type de 14 est :" + typeof(a) + "\nle type de A est:" + typeof(b));*/

/*function marc () {
    var number= prompt ("ENTREZ  votre montant en euro"), result= number*650, result2=number*1.07, result3=number*0.8, result4=number*1469.92;
    document.write("le resultat en frscfa est : "+ result + " frsCFA <br>")
    document.write("le resultat en dollar americain est : "+ result2 + " dollar <br>")
    document.write("le resultat en livre sterling est : "+ result3 + " livre sterling  <br>")
    document.write("le resultat en won sud-coreen est : "+ result4 + " won  <br>")
};
marc()*/
  
/*function pepin () {
    var age= prompt("ENTREZ  votre age"), result=  parseInt(age)+ parseInt(5),result2= parseInt(age)-parseInt(5);
    alert(result);
    document.write(result2);
};
pepin (); 

function pepin () {
    var age=     parseInt(prompt("ENTREZ  votre age"));
    age += 5;
    alert(age);
};
pepin ();
function marc() {
    var Age=   parseInt(prompt("ENTREZ  votre age"));
    Age -=5;
    document.write(Age); 
}; 
marc();
 
var Nbre=parseInt(prompt("ENTREZ  votre age"));

function ageplus() {
    Nbre +=5;
    alert(Nbre);   
};
function agemoins() {
   var Nbre=parseInt(prompt("ENTREZ  votre age"));
    Nbre -=5;
    document.write(Nbre);   
};
ageplus();
agemoins();
function pepin () {
    var NOMBRE= prompt("ENTREZ  votre nombre");
  result= NOMBRE==5;
    alert(result);

};
pepin ();
pepin ();
pepin ();
pepin ();
pepin ();

var NOMBRE1, NOMBRE2, NOMBRE3, NOMBRE4, NOMBRE5;
NOMBRE1=prompt("ENTREZ  votre premier essai");
alert(NOMBRE1==5);
NOMBRE2=prompt("ENTREZ  votre deuxieme essai");
alert(NOMBRE2==5);
NOMBRE3=prompt("ENTREZ  votre troisieme essai");
alert(NOMBRE3==5);
NOMBRE4=prompt("ENTREZ  votre quatrieme essai" + "\nvasy encore un peu d'effort ");
NOMBRE5=prompt("Derniere chance ");
alert(NOMBRE5==5);
alert(" votre premier essai est: " + NOMBRE1+"\nvotre deuxieme essai est: " + NOMBRE2+ "\nvotre troisieme essai: " + NOMBRE3+"\nvotre quatrieme essai: " + NOMBRE4 + "\nvotre dernier essai est: " + NOMBRE5);
document.write(" votre premier essai est: " + NOMBRE1 +"<br> votre deuxieme essai est: " + NOMBRE2+ "<br> votre troisieme essai: " + NOMBRE3+"<br>  votre quatrieme essai: " + NOMBRE4 + "<br> votre dernier essai est: " + NOMBRE5);*/ 

/*var  age= prompt("ENTREZ VOTRE AGE");

if (age < 21) {
    alert("vous etes mineur");
}


else  {
    alert("vous etes MAJEUR");
}


var  age= prompt("ENTREZ VOTRE AGE");
if (!age) {
    alert("ENTREZ un nombre");
}

else  {
   if (age<21);  
}


var  age= prompt("ENTREZ VOTRE AGE");
if (isNaN (age)) {
    alert("ENTREZ un age valide");
}

else  {
   if (age<21);  
}

var age= prompt("ENTREZ VOTRE AGE");
if (age>=0 && age<=2 ) {
    alert("vous ete bebe");

} 
    else if (age>=3 && age<=14 ) {
    alert("vous ete enfant");

}  else if (age>=15 && age<=20 ) {
    alert("vous ete adolescent");

} else if (age>=21 && age<=59 ) {
    alert("vous ete adulte");

} else if (age>=60 && age<=89 ) {
    alert("vous ete veillard");

} else if (age>=90  ) {
    alert("vous ete patriarche");

} else {
    alert("age invalide");

}

var age= parseInt(prompt("ENTREZ VOTRE AGE"));
switch (true) {
    case (age>=0 && age<=2 ):
        alert("vous ete bebe");
        break;
    case (age>=3 && age<=14 ) :
        alert("vous ete enfant");
        break;
    case (age>=15 && age<=20 ):
        alert("vous ete adolescent");
        break;
    case (age>=21 && age<=59 ):
        alert("vous ete adulte");
        break;
    case (age>=60 && age<=89 ):
        alert("vous ete veillard");
        break;
  case (age>=90): ;
        alert("vous ete patriarche");
         break;
    default:
        alert("invalide");
        break;
}
var  prenoms , prenom;
while (true) {
    prenom= prompt("ENTREZ VOTRE NOM:");
if (prenom) {
    prenoms += prenom + "\n   ";
} else {
   break;
}
} alert(prenoms);

var promo;
while (true) {
    promo= prompt("ENTREZ VOTRE NOM:");
    if (promo.charAt(0).toUpperCase()==="M") {
        alert("bravo");
    }
    else {
        alert("Desole ce nest pas juste");
    }
}

var marcArray=["\nGERVAIS", " \nRUSSEl"," \nMAXIME", " \nMEGANE", " \nJORDAN "];
alert(marcArray);
alert(marcArray, marcArray.pop(4 ));
alert(marcArray, marcArray[2]= "\nzoukmiel");
alert(marcArray, marcArray.unshift( "marbeuf" ));
var marcArray=["DESIGNATION", " QUANTITE"," PRIX UNITAIRE", " MONTANT"], valeurArray=["\nSOURIS", " 10  ","  2500   ", "  25000  "] ;
alert([marcArray,valeurArray]);
var marc, marcArray;

while (true) {
    marc=prompt("DESIGNATION,  QUANTITE, PRIX ,  MONTANT");
  
    if (marc) {
        marcArray=["DESIGNATION", " QUANTITE"," PRIX UNITAIRE", " MONTANT"];
    }
    else {
        break;
    }
    alert( marcArray +"\n"+ marc);
} 


var valeur1=prompt("Entrez la DESIGNATION"), valeur2= prompt("Entrez la QUANTITE"), valeur3= prompt("Entrez le PRIX UNITAIRE"),valeur4= parseInt(valeur3)*parseInt(valeur2), marcArray, valeurArray ;
marcArray=["DESIGNATION", " QUANTITE"," PRIX UNITAIRE", " MONTANT"];
valeurArray= valeur1 + "                " + valeur2 + "                 " + valeur3+ "                  " + valeur4; 

alert(marcArray +"\n"+ valeurArray);*/
let q1=  parseInt(prompt("entrez nombre")), q2= parseInt(prompt("deuxieme nombre")), q3= parseInt(prompt("deuxieme nombre")), eka= Math.max(q1,q2,q3);
alert(eka);
let g=  parseInt(prompt("entrez nombre")), r= parseInt(prompt("deuxieme nombre"));
alert(g % r);

function light() {
    let i=  parseInt(prompt("entrez nombre"));
alert(i % 5==0);
};
light();

let x=  parseInt(prompt("entrez nombre")), y= parseInt(prompt("deuxieme nombre"));
alert(x+y);

let m= parseInt(prompt("un nombre entier de minutes "));
alert(m*60);

let b=  parseInt(prompt("entrez dimension base du triangle")), h= parseInt(prompt("entrez dimension hauteur du triangle"));
alert(b*h*0.5);

    
   let ekaArray=["\nDIGITALLIGHT", " \nMARC"," \nMAXIME", " \nMEGANE", " \nJORDAN "];
    alert(ekaArray[0]);
  

        let k=  parseInt(prompt("entrez nombre")), l= parseInt(prompt("deuxieme nombre"));
        marco= k+l;

        if (marco <100) {
            alert("true");
        }
        if (marco >100) {
            
        } else {
            alert("false")
        }
        
        
        let v= parseInt(prompt("un nombre entier en heure"));
    alert(m*3600 + "seconde");

let t=  parseInt(prompt("entrez nombre heure")), p= parseInt(prompt("deuxieme nombre en minute"));

alert(t*3600 + "seconde\n"+ p*60+"seconde" );


   