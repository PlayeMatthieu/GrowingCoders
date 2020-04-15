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
let getallen = 5; // Numbers
let tekenreeks = "naam"; // Strings
let bool = true; // of False    // Booleon
let nietGekend; // Undifined
let niets = null; // Null
let symbool = Symbol(); // vertegenwoordigt een unieke identificatie
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
| -------------------------------------------- | ------- | ------- | ------- |
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

Net zoals in [C#](pages/Csharp/basics.md) moet een datatype omgezet worden naar een andere dataype. Dit moet gebeuren bij formulierelementen omdat deze steeds een **string** zal retourneren.

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
Number("123"); // Retourneerd 123
Number("123.3"); // Retourneerd 123.3
Number("123.3RandomTekst"); // Retourneerd NaN
```

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
click; // Enkele klik op element
mouseover; // Muisaanwijzer boven element
mouseout; // Muisaanwijzer verlaat element
mousedown; // Muisknop wordt ingedrukt boven element
mouseup; // Muisknop wordt losgelaten boven element
dblclick; // Dubbelklik op element
mousemove; // Muisaanwijzer beweegt boven element
mouseenter; // Mouseover variant zonder bubbling
mouseleave; // Mouseout variant zonder bubbling
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

a + b; // Optellen                 Antwoord = 11
a - b; // Aftrekken                Antwoord = -1
a * b; // Vermenigvuldigen         Antwoord = 30
a ** b; // Machtsverheffing        Antwoord = 4096
a / b; // Delen                    Antwoord = 0,83
a % b; // Modulo                   Antwoord = 5
a++ && ++a; // Increment           Antwoord = 6
a-- && --a; // Decrement           Antwoord = 4
a += 20; // Verhoging              Antwoord = 25       => a = a + 20;
```

?> Zoals reeds vermeld bij [primitieve datatypes](#primitieve-datatypes) kan met de methode `typeof` het datatype achterhaald worden.

!> Bij het incrementeren en decrementeren is er een verschil als de operator als prefix of suffix wordt gebruikt. <br/>
Als de operator als **prefix** is, zal het de waarde retourneren na ophogen. Bij een **suffix** zal het de waarde retourneren voor het ophogen.

### Vergelijkingsoperatoren

```js
let a = 5;
let b = 6;

a == b; // a is gelijk aan b => false
a === b; // a is gelijk aan b (waarde als datatype) => false
a !== b; // a is niet gelijk aan b => true
a < b; // a is kleiner dan b => true
a > b; // a is groter dan b => false
a <= b; // a is kleiner of gelijk aan b => true
a >= b; // a is groter of gelijk aan b => false
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

### Switch

## Lussen

### While

### Do...While

### For

### For...In

### Break

### Continue

## Functies

### Annonieme functies

### Functie als variabel

### Arrow functies

## Objecten

### String object

### Number object

### Math object

### Date object

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

Manier 1

```js
```

Manier 2

```js
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
.findIndex()        //
.indexOf()          //
.lastIndexOf()      //
.includes()         //
.some()             //
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
