<div align="center">

# HTML 5 Samenvatting

![Logo HTML 5](../../Assets/Img/logos/HTML5.png ":no-zoom")
</div>

## Opbouw html

Een html pagina heeft een basis opbouw van volgende structuur:

``` html
<!DOCTYPE html>
<html lang="nl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <!-- Tussen de body tags komt de content van de pagina -->
</body>
</html>
```

## Tekst

Zoals op een blad papier kan er in html een onderscheid gemaakt worden tussen verschillende type teksten. Zo heb je hoofdtitels. Deze hebben zes verschillende niveaus en kunnen later via [css](pages/css/css.md) aangepast worden. Hieronder zijn de verschillende teksttags.

### Header tags

``` html
<h1> Header 1</h1>
<h2> Header 2</h2>
<h3> Header 3</h3>
<h4> Header 4</h4>
<h5> Header 5</h5>
<h6> Header 6</h6>
```

### Tekst tags

``` html
<p> Paragraaf </p>

<div> De div is een container om elementen te groepeneren </div>

<span>Enkel de tekst tussen de span zal geselecteerd worden </span>

<b>Breng aandacht naar </b>

<strong> Inhoud die van groot belang is </strong>

<i lang="en"> Start small think Big</i>
<!-- Wijkt af van de originele tekst (technische termen, vreemnde talen, ...) -->

<em> Emphasis </em>

<u class="spelling">Verkeerd</u>
<!-- Dit zal rode stippelijn toevoegen onder het woord verkeerd met de gepaste css -->

<mark> Deze tekst zal gemarkeerd zijn </mark>

<cite> citatie </cite>
<!-- Verwijzing naar tekst van iemand anders, tekst dat jij de auteur niet van bent -->

<small> tekst in kleine lettertjes </small>

<code> BringToFront()</code>

<samp> Sample </samp>
<!-- Voorbeeld van een output van een computer programma -->

<kbd>CTRL</kbd>

<pre> geproformateerd </pre>

<sup> 2 </sup>

<sub> 2 </sub>

<blockquote cite="link">
    <!-- Content -->
</blockquote>

<q cite="link" lang="nl"> quatation </q>

<abbr title="een titel"> titel </abbr>
 ``` 

 ## Links

 Een link in html is een verwijzing naar een andere pagina of sectie in het document.

``` html
<a href="link website"> Klik hier om mijn website te zien </a>
``` 

### Relatief VS Absolute

- Relatief = Vertrekt vanuit de 'root' van de folder
- Absolute = Hier moet je de volledige 'url' ingeven

### Verwijzing in de pagina

``` html
<a href="#verwijzing">ga naar het hoofdstuk </a>
<!-- De ref is gekoppeld aan een ID in de html pagina -->

<a href="#top"> Keer terug naar de top </a>
<a href="mailto: iemand@mail.com"></a>
<a href="tel:0000000000"></a>
<!-- De hyperlinks kunnen ook een class krijgen -->
<!-- Ze kunnen ook genest worden in een p, h1-h6 -->
<!-- Een afbeelding kan ook een <a></a> tag hebben -->
``` 

## Afbeelding

Afbeeldingen kunnen volgende formaat hebben
* GIF
* JPEG
* PNG

``` html
<img src="afbeelding.jpg" alt="korte beschrijving van de afbeelding"/>
<!-- Een img tag is een self closing tag -->
``` 
## Tabellen

```html
<table>
    <thead>
        <tr>
            <th> tabel hoofd </th>
            <th> tabel hoofd </th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td> Tabel data </td>
            <td> Tabel data </td>
        </tr>
    <tfoot>
        <tr>
            <td> Tabel footer </td>
            <td> Tabel footer </td>
        </tr>
    </tfoot>
</table>
```

## Semantische elementen

Hieronder in de tabel is een lijst van de symantische elementen 

|            |            |               |            |
|------------|------------|---------------|------------|
| \<header>  | \<article> | \<figure>     | \<nav>     |
| \<aside>   | \<section> | \<main>       | \<details> |
| \<time>    | \<footer>  | \<figcaption> | \<mark>    |
| \<summary> |            |               |            |

In onderste code is een voorbeeld van een html pagina met correcte opbouw volgend de semantische elementen.

``` html
<!DOCTYPE html>
<html lang="nl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <header>
        <nav>
            <!-- De navbar genest in de header-->
        </nav>
    </header>
    <main>
        <aside>
            <!-- Informatie die links of rechts op de pagina kan worden getoont-->
        </aside>
        <section>
            <!-- Een sectie-->
        </section>
        <section>
            <article>
                <!-- Een artiekel genest in een sectie-->
            </article>
            <article>
                <!-- Een artiekel genest in een sectie-->
            </article>
        </section>
    </main>
    <footer>
        <!-- De voettekst van onze website-->
    </footer>
</body>
</html>
``` 

## Formulieren

Formulieren worden op 95% van alle websites gebruikt. Voor een contactpagina als voor berekeningen te maken. 

``` html
<form method="">
    <fieldset title="Titel van het formulier">
        <legend> tekst </legend>
        <div>
            <label for="idInput"> Label </label>
            <input type="text" id="idInput" name="inputNaam">
        </div>
    </fieldset>
</form>
```

### Form attributen

``` html
<form method="GET"></form>
<!-- Zal de content van het formulier toevoegen achter de url -->

<form method="POST"></form>
<!-- Zal de content versturen naar de gelinkte action -->
```

``` html
<form method="Post" action="UitTevoerenScript.js">

</form>
```

### Input elementen

Met HTML5 heeft de `input` verschillende `type=" "` om aan te duiden wat de input is.

``` html
<input type="button">               <!-- Knoppen-->
<input type="checkbox">             <!-- Aanvinkvak-->
<input type="color">                <!-- Kleurkeuze-->
<input type="date">                 <!-- Datum-->
<input type="datetime-local">       <!-- Datum volgens de lokale tijd-->
<input type="email">                <!-- Mailadres-->
<input type="file">                 <!-- Bestand kiezen-->
<input type="hidden">               <!-- Verborgen-->
<input type="image">                <!-- Afbeelding-->
<input type="month">                <!-- Enkel maand en jaar kiezen-->
<input type="number">               <!-- Nummers-->
<input type="password">             <!-- Wachtwoord-->
<input type="radio">                <!-- Ronde aanvinkvak-->
<input type="range">                <!-- Slider-->
<input type="reset">                <!-- Zal de form resetten-->
<input type="search">               <!-- Zoek input-->
<input type="submit">               <!-- knop-->
<input type="tel">                  <!-- Telefoonnummer-->
<input type="text">                 <!-- Alles tekst is hier mogelijk-->
<input type="time">                 <!-- Tijd (uur)-->
<input type="url">                  <!-- Website link-->
<input type="week">                 <!-- Week-->
```

Elk van bovenstaande input kan ook verschillende attributen krijgen.

``` html
<input type="text" name="Naam van de input" id="Id_Input" placeholder="schrijf hier text" minlength="5" maxlength="10" required>
```
De volledige lijst kun je op volgende website vinden: [Input Attibutes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input)


## Meta-elementen

Wat is een metatag? Een metatag is een element die specifieke informatie bevat over de website. De metatag zal zich altijd tussen het head element bevinden van onze website.

### Voorbeeld van gebruikte metatags op GrowingCoders
``` html
<head>
  <meta charset="UTF-8">
  <title>GrowingCoders</title>
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
  <meta name="description" content="GrowingCoders is een referentie voor startende programmeurs als ze iets vergeten zijn. Hier kun je snel een eenvoudig vinden wat je zoekt.">
  <meta name="author" content="GrowingCoders"/>
  <meta name="application-name" content="GrowingCoders website"/>
  <meta name="keywords" content="HTML, CSS, Javascript, SQL, C#, Git, Markdown, Snippets, Leren programmeren, GrowingCoders"/>
  <meta property="og:title" content="GrowingCoders"/>
  <meta property="og:type" content="website"/>
  <meta property="og:url" content="https://growingcoders.tech/"/>
  <meta property="og:image" content="https://growingcoders.tech/Assets/Img/logos/GrowingCoders.svg" />
  <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
</head>
```


## Handige-links

