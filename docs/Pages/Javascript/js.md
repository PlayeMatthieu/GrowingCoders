<div align="center">

# Javascript

![Logo Javascript](../../Assets/Img/logos/Javascript.png ":no-zoom")

</div>

## Inleiding

Javascript is een scripttaal om **(statische)** webpagina's interactief te maken en zo webapplicaties te ontwikkelen.

## Variabelen en constanten

Variabelen zijn zoals in elke programmataal een manier om waardes op te slaan om later in het programma te gebruiken. Een variabel kun je vergelijken met een doos waar je een voorwerp in plaats. Als je dit voorwerp nodig hebt kun je deze dan halen en gebruiken.

```js
var btnBereken;
let naam = "Matthieu";
const pi = 3.14; // Deze waarde zal later in de code niet aangepast kunnen worden!
```

Zoals je waarschijnlijk zag kan er in Javascript met `//` commentaar geschreven worden in onze code, dit kan handig zijn om wat meer uitleg te geven over onze applicatie naar andere programmeurs. Een andere manier om grotere teksten in commentaar te plaatsen is door deze in te sluiten het volgende. `/* */`.

### Primitieve datatypes

In tegenstelling tot [C#](pages/Csharp/basics.md) is het niet nodig om een datatype mee te geven met onze variabel. In onderstaande lijst zijn de primitieve datatypes dat Javascript gebruikt.

```js
let getallen = 5;         // Numbers
let tekenreeks = "naam";  // Strings
let bool = true;          // of False    // Booleon
let nietGekend;           // Undifined
let niets = null;         // Null
let symbool = Symbol();   // vertegenwoordigt een unieke identificatie
```

- [Meer over het datatype Symbol](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol)

Om het type van een geïnitialiseerde variabel te bepalen kan er gebruik worden gemaakt van `typeof`.

```js
let boom = "eik";
console.log(typeof boom);
```

### Scope van variabelen

Een geïnitialiseerde variabel heeft een levensduur binnen ons programma. Zo kan een variabel lokaal of globaal zijn.

**Globale** variabelen kunnen overal op een willekeurige plaats in het programma worden aangeroepen.

**Lokale** variabelen worden binnen een functie of een ocdeblok gedeclareerd. Het bereik van die variabel is dan ook beperkt tot die functie of codeblok.

| Omschrijving                                 | var     | let     | const   |
|----------------------------------------------|---------|---------|---------|
| Gedeclareerd **buiten** een function         | globaal | globaal | globaal |
| Gedeclareerd **buiten** een code block       | globaal | lokaal  | lokaal  |
| Gedeclareerd **binnen** een code block { … } | globaal | lokaal  | lokaal  |
| Gedaclareerd **binnen** een function         | lokaal  | lokaal  | lokaal  |

### Template Literals

Het concateneren van variabelen en strings kunnen we net zoals in [C#](pages/Csharp/basics.md) met het + teken. Een tweede manier is door gebruik te maken van **string interpolation**.

```js
let antwoord = `${getal1} + ${getal2} = ${resultaat}`;
```

De string wordt zoals je hierboven zien geopend en gesloten met backticks \`. Deze kun je vormen op het Belgische AZERTYTY-toetsenbord met volgende toetsencombinatie: `AltGr + µ` . Mogelijk 2 is door `Alt + 96`.

### Convertie van variabelen

Net zoals in [C#](pages/Csharp/basics.md) moet een datatype omgezet worden naar een andere dataype.

#### parseInt()

Zal het ingegeven waarde proberen om te zetten naar een **integer**, moest dit niet zullen zal het **NaN (Not a Number)** retourneren.

```js
let covert = parseInt("42");
// Zal 42 retourneren als integer
```

#### parseFloat()

Zal het ingegeven waarde proberen om te zetten naar een **gebroken getal**, moest dit niet zullen zal het **NaN (Not a Number)** retourneren.

```js
let covert = parseFloat("3.14RandomTekens");
// Zal 3.14 retourneren als gebroken getal
```

#### Number()

Met de `Number()` methode zal een string ook omgezet worden naar een getal. Soms kan het een **integer** of een **decimaal** zijn. Als je een waarde geeft met tekst zal het **NaN (Not a Number)** retourneren.

```js
Number("123");              // Retourneerd 123
Number("123.3");            // Retourneerd 123.3
Number("123.3RandomTekst"); // Retourneerd NaN
```

!> Convertie van variabelen moet altijd gebeuren bij formulierelementen omdat deze steeds een **string** zal retourneren.

## DOM

### Inleiding tot de DOM

Het **Document Object Model** of de **DOM** is een platform en taalneutrale interface waarmee programma's en scripts dynamisch toegang krijgen tot de inhoud, structuur en stijl van onze document.

### Elementen selecteren

Om elementen uit onze HTML document te kunnen manipuleren moeten we deze eerst gaan selecteren.

```js
var btnCta = document.getElementById("#id"); // Zal het element nemen met het aangegeven id
var txtHeader = document.querySelector(".h1-header"); // Dit zal het eerste element met de klasse selecteren
```

Om meerdere elementen te selecteren kan gebruik gemaakt worden van volgende opties:

```js
var p = document.getElementsByName("p"); // Zal alle <p> tags selecteren
var kbd = document.getElementsByTagName("kbd"); // Zal alle elementen met die tag selecteren
var div = document.getElementsByClassName("class"); // Zal alle elementen met die tag selecteren
// Het is ook mogelijk meeredere classes te selecteren ("class1 class2");
var lbltekst = document.querySelectorAll("lbl"); // Zal alle element(en) met aangegeven lbl retourneren in een Array
```

```js
let x = document.querySelector("main");
let y = x.getElementsByTagName("p"); //Zal alle <p> tags binnen de main selecteren
```

### Elementen aanpassen

Nadat elementen uit onze html document zijn geselecteerd kunnen deze aangepast worden.

```js
kdb.innerHTML = "CTRL + DELETE"; // Zal in tekst van onze html aanpassen
div.setAttribute("attribuut", "value"); // Zal het attribuut aanpassen met de gegeven value
div.element.style.color = "red"; // De property kan bijvoorbeeld : textAlign, border, fontSize
```

### Elementen aanmaken

Naast het selecteren en aanpassen van elementen kunnen we er zelf ook aanmaken.

```js
let i = document.querySelector("#div");
let x = document.createElement(element); // Zal het html element aanmaken
let y = document.removeChild(element); // Verwijderd het html element
i.document.appendChild(x); // Voegt het aangemaakte element toe als kind van element i
i.document.replaceChild(new, old); // Vervangen van het childelement
i.document.write(text); // Schrijft tekst onmiddelijk naar het html document
```

## Events

Met event-handling staat het toe dat javascript opdrachten op het juiste moment uitvoerd, wanneer de juiste gebeurtenis heeft plaatsgevonden.

```js
click;        // Enkele klik op element
mouseover;    // Muisaanwijzer boven element
mouseout;     // Muisaanwijzer verlaat element
mousedown;    // Muisknop wordt ingedrukt boven element
mouseup;      // Muisknop wordt losgelaten boven element
dblclick;     // Dubbelklik op element
mousemove;    // Muisaanwijzer beweegt boven element
mouseenter;   // Mouseover variant zonder bubbling
mouseleave;   // Mouseout variant zonder bubbling
```

Om deze events in onze javascript document te kunnen gebruiken kan bijvoorbeeld op een knop volgende methode toegepast worden:

```js
let btn = document.querySelector("btnCalc"); // Selecteren van het DOM element
btn.addEventListener("click", functie); // Event click aan toewijzen met de aangegeven functie
btn.removeEventListener("click", functie); // Event click verwijderen met de aangegeven functie
```

De methode `addEventListener` en `removeEventListener` kunnen volgende 3 argumnten ontvangen

- Event
- actie => [functie](#functies) of [anonieme functie](#annonieme-functies)
- Boolean (facultatief) => (false = bubbling, true = capturing)

#### Bubbling

Met bubbling wordt het evenement eerst vastgelegd en afgehandeld door het binnenste element en vervolgens doorgevoerd naar buitenste elementen.

```
               / \
---------------| |-----------------
| element1     | |                |
|   -----------| |-----------     |
|   |element2  | |          |     |
|   -------------------------     |
|        Event BUBBLING           |
-----------------------------------

```

#### Capturing

Bij capturing wordt de gebeurtenis eerst vastgelegd door het buitenste element en doorgevoerd naar de binnenste elementen.

```
               | |
---------------| |-----------------
| element1     | |                |
|   -----------| |-----------     |
|   |element2  \ /          |     |
|   -------------------------     |
|        Event CAPTURING          |
-----------------------------------
```

## Operatoren

### Wiskundige operatoren

```js
let a = 5;
let b = 6;

a + b;        // Optellen             Antwoord = 11
a - b;        // Aftrekken            Antwoord = -1
a * b;        // Vermenigvuldigen     Antwoord = 30
a ** b;       // Machtsverheffing     Antwoord = 4096
a / b;        // Delen                Antwoord = 0,83
a % b;        // Modulo               Antwoord = 5
a++ && ++a;   // Increment            Antwoord = 6
a-- && --a;   // Decrement            Antwoord = 4
a += 20;      // Verhoging            Antwoord = 25       => a = a + 20;
```

?> Zoals reeds vermeld bij [primitieve datatypes](#primitieve-datatypes) kan met de methode `typeof` het datatype achterhaald worden.

!> Bij het incrementeren en decrementeren is er een verschil als de operator als prefix of suffix wordt gebruikt. <br/>
Als de operator als **prefix** is, zal het de waarde retourneren na ophogen. Bij een **suffix** zal het de waarde retourneren voor het ophogen.

### Vergelijkingsoperatoren

```js
let a = 5;
let b = 6;

a == b;     // a is gelijk aan b => false
a === b;    // a is gelijk aan b (waarde als datatype) => false
a !== b;    // a is niet gelijk aan b => true
a < b;      // a is kleiner dan b => true
a > b;      // a is groter dan b => false
a <= b;     // a is kleiner of gelijk aan b => true
a >= b;     // a is groter of gelijk aan b => false
```

?> het verschil tussen `==` en `===` is dat bij een `===` vergelijking er zal gekeken worden als de waardes en dataype gelijk zijn aan elkaar.

### Booleaanse operatoren

#### And && (Dubelle ampersand)

Met de `&&` kun je gaan vergelijken als meerdere voorwaarden voldaan zijn. Als alle voorwaarden "true" retourneren zal de test slagen. Vanaf er 1 waarde "false" retourneert, zal de test niet slagen.

#### OR || (Dubelle Pipe tekens)

In tegenstelling tot de "And" kan je met de `||` (of) de test laten slagen van zodra 1 van de waarden een "true" oplevert.

### Volgorde van bewerkingen

Net zoals in het wiskundig rekenen is er voor het programmeren een volgorde van bewerkingen.

1. Haakjes, functieaanroepen of arrayindex : () en []
2. Negatie (-), increment(++) en decrement(--)
3. Vermenigvuldigen(\*), delen(/) en modolo (%)
4. Optellen (+) en aftrekken (-)
5. Bitwise operatoren (<<,>> en >>>)
6. Vergelijkingsoperatoren (<,>, <= en >=)
7. Is gelijk aan of is ongelijk aan (==,=== en !=, !==)
8. Bitwise AND (&)
9. Bitwise XOR (^)
10. Bitwise OR (|)
11. Logische AND (&&)
12. Logische OR (||)
13. Voorwaardelijke operator (? :)
14. Toewijzingsoperator (=)
15. De komma (,) gebruikt voor het scheiden van parameters

## Voorwaardelijke uitvoering

### if-structuur

Met de `if` statement kunnen bepaalde codeblokken uitgevoerd worden als de voorwaarde voldaan is. Ook kan er een `else` gekoppeld worden. Deze zal uitgevoerd worden als de gestelde voorwaarde onwwar is.

```js
if (x == y) {
  // Doe iets
}

// If statement met een else
if (x == y) {
  // Doe iets
} else {
  // Doe iets anders
}

if (x == y) {
  // Doe iets
} else if (x > y) {
  // Doe iets
} else {
  // DOe iets
}

// Verkorte versie
x > y ? true : false;
```

?> - Na een `else` statement kan een nieuwe `if` statement geplaats worden. <br/> - `if` statements kunnen genest worden in elkaar.

### Switch

Als je meer mogelijkheen wilt scheiden kun je gebruik maken van een `switch` statement in plaatsen van meerdere `if` statements.

```js
switch (expressie) {
  case x:
    // Code
    break;
  case y:
    // Code
    break;
  default:
  // Code
}
```

?> - Elke statement moet eindigen met een `break`. <br/> - Een `string` kan ook worden gegeven als `switch` statement. <br/> - De `default` zal uitgevoerd worden als geen enkele case beantwoord aan de voorwarden.

## Lussen

### While

Een `while` statement zal een opdracht of groep opdrachten telkens opnieuw uitvoeren tot het de voorwaarde `false` bereikt.

```js
while (x >= y) {
  // Doe iets
}
```

!> Het is eenvoudig om in een **oneindige lus** te graken als je variabel vergeet aan te passen binnen je lus.

### Do...While

Bij een `do...while` lus wordt de voorwaarde om verder te lussen aangegven na het do-statement. Dit wilt zeggen dat de voorwaarde gecontroleerd wordt nadat het do-statement is uitgevoerd.

```js
do {
  // Code die uitgevoerd moet worden
} while (x >= y);
```

### For

De `for` lus wordt voornamelijk gebruikt wanneer je op voorhand weet hoeveel keer een lus moet worden uitgevoerd. Je moet natuurlijk die regel niet strikt opvolgen.
Een `for`-lus is een lusstructuur waarbij de **initialisatie, lusvoorwaarde** en **eindstatements** in een compact geheel worden geplaatst.

```js
for (initialisatie; lusvoorwaarde; eindstatement) {
  // Doe iets heel de tijd de lus loopt
}
```

### For...In

Met een `for…in`-lus kun je ondermeer **objecten** gaan doorzoeken. We gaan dit gebruiken wanneer we zelf
Javascript-objecten (JSON) aanmaken.

```js
for (x in y) {
  // Doe iets
}
```

### Break

Met een break statement kun je de lus abrupt laten en stoppen en wordt er verder gegaan met de code na de lus

```js
let i = 0;
for (i = 1; i <= 10; i++) {
  if (i == 3) {
    break;
  }
}
```

### Continue

Continue laat in tegenstelling tot de break niet de lus stoppen maar zal een beurt over slaan. Als de continue voor komt in een lus wordt de node die nog zou moeten worden uitgevoerd niet meer uitgevoerd. De lus blijft wel draaien, zolang er nog steeds wordt voldaan aan de voorwaarde.

## Functies

**Functies** zorgen ervoor om in onze code, codeherhaling te vermijden.

!> Functies terug overlopen en beschrijving verbeteren!

### Simpele functie

#### Aanmaken van een functie

```js
function MijnFunctie() {
  // Hier is de code die moet gebeuren
}
```

#### Aanroepen van de functie

```js
MijnFunctie();
```

#### Waarden retourneren

### Annonieme functies

Een **annonieme** functie is een functie die onmiddelijk na een eventlistener geschreven word. Zonder deze in een apparte functie-blok te voorzien.

```js
btnClick.addEventListener("click", function () {
  alert("Knop is aangeklikt");
});
```

### Functie als variabel

```js
const VariabelFunctie = functie(x){
  console.log(x);
}

VariabelFunctie(x);
```

### Arrow functies (fat arrow)

Door gebruik te maken van de arrow-functies vermijden we het gebruik van het herhaalde keywoord `function` in de code.

```js
const Verdubbel = (a) => a * 2;
Verdubbel(2);

let btnClick = document.querySelector("#btnClick").addEventListener("click", () => {
    console.log("Knop is geklikt");
  });
```

## Objecten

### String object

Alle tekenreeksen worden in **Javascript** gezien als een `String`. Elke `String` vormt een object die een eigenschap van `length` heeft.

Om een nieuwe lege **String** aan te maken kunnen we gebruik maken van het keyword `new`. Dit zal een lege (null) instantie aanmaken van het object `String`.

```js
let tekens = new String();
```

``` js
toUpperCase()       // Zet de tekenreeks om in hoofdletters
.toLowerCase()      // Zet de tekenreeks om in kleine letters
.substring(0,5)     // Retourneert een deel uit een string met een meegegeven begin-en eindpositie.
.substr(0,5)        // Retourneert een deel uit een string met een meegegeven beginpositie en het aantal tekens
.concat()           // Voegt tekenreeksen samen
.indexOf(‘x’)       // Retourneert de eerste positie van een meegegeven argument. Je kan als 2de argument de startpositie voor het zoeken weergeven
.lastIndexOf(‘x’)   // Retourneert de laatste positie van een meegegeven tekstdeel
.charAt(5)          // Retourneert het teken op de aangegeven positie
.split(‘;’)         // Splitst de tekenreeks in een Array, met de aangegeven delimiter of scheidingsteken (in het voorbeeld een kommapunt)
.replace(‘x’,’X’)   // Wijzigt het eerste overeenkomstig karakter in een string naar een nieuwe waarde.
```

### Number object

``` js
let getal = 55;

```

### Math object

``` js

.round(x)   //Afronden tot een integer Groter of gelijk aan 0.5 : afronding naar boven Kleiner dan 0.5 : afronding naar beneden
.random     //Willekeurig getal tussen 0 en 1
.abs(x)     //Absolute waarde van een getal
.sin(x)     //Sinus
.cos(x)     //Cosinus
.tan(x)     //Tangens
.asin(x)    //Boogsinus
.acos(x)    //Boogcosinus
.atan(x)    //Boogtangens
.log(x)     //Natuurlijke logaritme : loge(x)
.exp(x)     //exponentieel
.sqrt(x)    //Vierkantwortel
.ceil(x)    //Gehele waarde die groter of gelijk is
.floor(x)   //Gehele waarde die kleiner of gelijk is
.pow(x,y)   //x^y
.min(x,y)   //Kleinste waarde van opgegeven parameters
.max(x,y)   //Grootste waarde van opgegeven parameters

```

### Date object

``` js
.getTime()      // Tijd verstreken sinds 1 januari 1970 00:00:00 in miliseconden
.getSeconds()   // Aantal seconden
.getMinutes()   // Aantal minute
.getHours()     // Aantal uren
.getDay()       // Weekdag (0=zondag, 6=zaterdag)
.getDate()      // Dag van de maand
.getMonth()     // Maand van het jaar (0=januari, 11=December)
.getFullYear()  // Jaartal met 4 cijfers

```

### Objecten in Javascript

## Arrays

```js
var array[];
var mijnArray = new Array();
var getallen [10,2,7];
var mijnArray = new Array(10,2,7);
```

### Elementen toevoegen

dit kan aan de hand van een functie die een element zal toevoegen

```js
function VoegElementToeAanArray(waarde, doelArray) {
  let index = doelArray.length;
  doelArray[index] = waarde;
}
// of

doelArray.push(waarde);
```

### Lussen door een Array

hiervoor zijn er 2 opties

```js
let array = ["Growing", "Coders", "Are", "Awesome"];

function LusDoorArray () {
  for (let index in array) {
    console.log(array[index]);
  }
}

function LusDoorAndereArray (){
  for (let i =0; i< array.length; i++){
    console.log(array[i]);
  }
}

```

### Functies voor arrays

Met Arrays zijn er verschillende functies waarmee je de aangemaakte Array kunt bewerken.

```js
.concat()       // Voegt de element van twee (of meer) Arrays samen
.join()         // Plaatst alle elementen van een Array in een string. EZe kunnen gescheiden worden door een aangegeven scheidingsteken
.pop()          // Verwijdert en retourneert het laatste element van een Array
.push()         // Voegt een of meerdere elementen toe aan een Array en retourneert de nieuwe lengte van de Array.
.reverse()      // Keer de volgorde van de ArrayElementen om
.shift()        // Verwijderdt en retourneert het eerste element van een Array
.slide()        // Maakt een nieuwe Array van een aangegeven bereik van een Array
.sort()         // Sorteert de elementen in een Array (string-based)
.splice()       // Elementen verwijderen en toevoegen aan een Array. Deze methode retourneert de verwijderde elementen.
                // Argumenten: startpositie voor het verwijderen, aantal te verwijderen elementen, nieuwe elementen
.unshift()      // Voegt een of meerdere elementen toe aan het begin van een Array en retourneert de nieuwe lengte.
```

### High order Functions

Voorbeeld: `TypedArray.forEach(callback[, thisArg])`

```js
.every()            // Gaat na of alle elementen in een Array aan bepaalde voorwaarden voldoen
.filter()           // Retourneert een Array met alle elementen voldaan aan de filter voorwaarden
.find()             // Retourneert het eerste element van de Array dat aan de meegestuurde voorwaarde voldoet
.findIndex()        // Retourneert de indexwaarde van het eerste element van de Array die aan de meegestuurde voorwaarde voldoet
.indexOf()          // Retourneert de index van het eerste element van een array dat een bepaalde waarde heeft. Indien niet gevonden wordt er -1 geretourneerd.
                    // Optioneel kan aangegeven worden vanaf welke index er gezocht moet worden.
.lastIndexOf()      // Retourneert de index van het laatste element van een array dat een bepaalde waarde heeft. Indien niet gevonden wordt er -1 geretourneerd.
                    // Optioneel kan aangegeven worden vanaf welke index er gezocht moet worden
.includes()         // Retourneert of een array een element bevat met de opgegeven waarde 
.some()             // Retourneert of er één element van een array aan een bepaalde voorwaarde voldoet.
.map()              // Retourneert een array waarbij een bepaalde functie is uitgevoerd op alle elementen van de originele array.
.reduce()           // Retourneert 1 waarde na het uitvoeren van de meegestuurde reducer functie.
```

#### Voorbeelden van higher order functions

```js
let zoekEven = p => p%2 == 0;
let verdubbel = p => p*2;
let leeftijdArray = [15,31,17,19,52,51];

leeftijdArray.every(p => p > = 18)      // Zijn alle elementen groter dan 18
leeftijdArray.filter(ZoekEven)          // Return: array met alle even elementen
leeftijdArray.find(p=> p>=18)           // Eerste element >= 18
leeftijdArray.findIndex(p => p>=18)     // Index eerste element >= 18
leeftijdArray.indexOf(19,3)             // Index van het eerste element met waarde 19, te beginnen vanaf index 3
leeftijdArray.includes(18)              // Bevat de leeftijdArray een element met waarde 18?
leeftijdArray.some(p => p<18)           // Is er een element met waarde 18?
verdubbelLeeftijdArray = leeftijdArray.map(Verdubbel)
leeftijdsArray.reduce ((a,b) => (a+b),100)
```

### Multidimensionele arrays

```js
var adressen = [];
adressen[0] = ["De Donder", "Walter", "Affligem"];
adressen[1] = ["Crucke", "Koen", "Gent"];
adressen[2] = ["Verhulst", "Gert", "Antwerpen"];
```
