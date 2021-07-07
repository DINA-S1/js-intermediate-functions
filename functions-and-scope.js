// Je gaat functies schrijven die we kunnen hergebruiken om een lijst met eindcijfers van studenten te checken. Je zult over de cijfers heen moeten itereren (hoe pak je dat aan?),
// maar ook een manier moeten vinden om hetgeen dat je verzamelt ergens te bundelen. Op deze manier zul je ontdekken hoe je omgaat met scope. Pak vooral het hoofdstuk op EdHub over for-loops er nog eens bij!
// Tip: je mag hier geen ingebouwde object methoden gebruiken, dus daar hoef je niet naar te kijken.



const grades = [ 9, 8, 5, 7, 7, 4, 9, 8, 8, 3, 6, 8, 5, 6 ]


//forEach
grades.forEach( item => console.log( item ))




/* Opdracht  1: Cum Laude */

/* 1a: Script schrijven  */
// De administratie moet weten hoeveel studenten er dit blok cum laude zijn afgestudeerd (8 of hoger). Daar moeten namelijk speciale diploma's voor besteld worden.
// Schrijf de stapjes om dit te kunnen checken eerst uit en vraag jezelf de volgende dingen af:
// * Hoe kan ik iedere waarde van de array checken op deze conditie? (for loop)
// * Hoe zorg ik ervoor dat dit ook werkt wanneer de array 100 entries bevat? (.length)
// * Hoe zorgt ik ervoor dat wanneer ik een cijfer tegenkom die aan de conditie voldoet, ik dit ergens kan bijhouden?  (variab.)
// Log het antwoord in de terminal.




//heeft lijst met cijfers die >= 8

function getDiploma( grades ) {
    return grades >= 8
}

console.log( grades.filter( getDiploma ))

// niet gelukt om 6 te krijgen




// ---- Verwachte uitkomst: 6


/*  1b: Omschrijven tot een herbruikbare functie   */
// Schrijf een functie genaamd cumLaude, die een array van cijfers verwacht (zoals grades) en het aantal Cum laude studenten teruggeeft. Gebruik hiervoor jouw antwoord van 1a.
// Zorg ervoor dat jouw functie ook werkt als we een andere array met eindcijfers willen checken, zoals bijvoorbeeld: [6, 4, 5] of [8, 9, 4, 6, 10].
// Log het antwoord in de terminal.

// ---- Verwachte uitkomsten:
// cumLaude(grades) geeft 6
// cumLaude([6, 4, 5]) geeft 0
// cumLaude([8, 9, 4, 6, 10]) geeft 3


function cumLaude( grades ) {
let amount = 0
    for( let i = 0; i < grades.length; i++ ) {
        if (grades [ i ] >= 8 ) amount++
        values = grades [  i ]
        amount = amount + values

       // console.log( values )
    }
}

console.log( cumLaude )




/* Opdracht  2: Gemiddeld cijfer */

/* 2a: Script schrijven  */
// De studenten-administratie moet ieder blok opnieuw berekenen wat het gemiddelde eindcijfer is, maar we beginnen met de grades array van hierboven.
// Schrijf de stapjes om dit te kunnen berekenen eerst uit en vraag jezelf de volgende dingen af:
// * Hoe wordt een gemiddelde berekend?
// * Wat moet ik verzamelen uit de array van cijfers om uiteindelijk een gemiddelde te kunnen berekenen?
// * Hoe zorgt ik ervoor dat ik alle waardes uit de array kan langslopen, ook als de array wel 100 entries zou bevatten?
// Log het antwoord in de terminal.



let total = 0
for( let i = 0; i < grades.length; i++ ) {
    total += grades [ i ]
}
let avg = total / grades.length

console.log( avg )




// ---- Verwachte uitkomst: 6.642857142857143


/* 2b: Omschrijven tot een herbruikbare functie */
// Schrijf een functie genaamd averageGrade, die een array van cijfers verwacht (zoals grades) en het gemiddelde cijfer teruggeeft. Gebruik hiervoor jouw antwoord van 2a.
// Zorg ervoor dat jouw functie ook werkt als we een andere array willen checken, zoals bijvoorbeeld: [6, 4, 5] of [8, 9, 4, 6, 10].
// Log het antwoord in de terminal.



function averageGrade( input ) {
    let total = 0
    for (let i = 0; i < input.length; i++) {
        total += input[ i ]
    }
    let avg = total / input.length

    return avg
}

averageGrade( [ 8, 9, 4, 6, 10 ])

console.log( averageGrade( grades ))

console.log( averageGrade([6, 4, 5 ]))

console.log( averageGrade([8, 9, 4, 6, 10 ]))



// ---- Verwachte uitkomsten:
// averageGrade(grades) geeft 6.642857142857143
// averageGrade([6, 4, 5]) geeft xxxx
// averageGrade([8, 9, 4, 6, 10]) geeft xxxx


/* 2c: Afronden op twee decimalen */
// Zorg ervoor dat het gemiddelde cijfer dat wordt teruggegeven uit de functie netjes wordt afgerond op twee decimalen.
// Tip: Google is your best friend!



function decimal(number){

    return Math.round( number *100 ) /100
}

const averages = averageGrade( [ 8, 9, 4, 6, 10 ])
const roundGrades = decimal( averages )

console.log( " Average grade:  ", roundGrades)
console.log( decimal( averageGrade( grades )))





/* Bonusopdracht: hoogste cijfer */

/* 3a: Script schrijven  */
// Schrijf een script die op basis van de grades array (hierboven) checkt wat het hoogst behaalde cijfer is. Je mag hier geen bestaande methoden voor gebruiken. Schrijf de stapjes eerst uit en vraag jezelf de volgende dingen af:
// * Hoe kan ik iedere waarde van de array langsgaan?( for loop )
// * Op welke conditie moet ik checken? ( hoogste cijfer )
// * Hoe zorgt ik ervoor dat wanneer ik een cijfer tegenkom die aan de conditie voldoet, ik dit ergens kan opslaan?( variabele )
// Log het antwoord in de terminal.



console.log( Math.max( ...grades ))



function big( arr ) {
    let largest = arr[ 0 ] || null
    let number = 0
    for ( let i = 0; i < arr.length; i++ ) {
        number = arr[i]
        largest = Math.max( largest, number )
        console.log( number )
    }
}

 big( [ 4, 6, 5 ])




// ---- Verwachte uitkomst: 9



/* 3b: Omschrijven tot een herbruikbare functie */
// Schrijf een functie genaamd highestGrade, die een array van cijfers verwacht (zoals grades) en het hoogste cijfer teruggeeft. Gebruik hiervoor jouw antwoord van 3a.
// Zorg ervoor dat jouw functie ook werkt als we een andere array willen checken, zoals bijvoorbeeld: [6, 4, 5] of [8, 9, 4, 6, 10].
// Log het antwoord in de terminal.

// ---- Verwachte uitkomsten:
// highestGrade(grades) geeft 9
// highestGrade([6, 4, 5]) geeft 6
// highestGrade([8, 9, 4, 6, 10]) geeft 10


function highestGrade ( arr ) {
    let number = 0

    for( let i = 0; i < arr.length; i++ ) {
        if( arr[ i ] > number ) {
            number = arr[ i ]
        }
    }
    console.log( number )
}
console.log( highestGrade )
highestGrade([8, 9, 4, 6, 10 ])
highestGrade ([ 6, 4, 5 ])




