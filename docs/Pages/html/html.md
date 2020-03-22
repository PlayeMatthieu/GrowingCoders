# HTML 5 Samenvatting
<p align="center">
  <img height="250" src="Assets/Img/logos/HTML5.png">
</p>

## Boilerplate

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

``` html
<a href="link website"> Klik hier om mijn website te zien </a>
``` 

### Relatief VS Absolute

- Relatief = Vertrekt vanuit de 'root' van de folder
- Absolute = Hier moet je de volledige 'url' ingeven

### Verwwijzing in de pagina

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

### Template van html pagina met semantische elementen

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

        </nav>
    </header>
    <main>
        <aside>

        </aside>
        <section>

        </section>
        <section>
            <article>

            </article>
            <article>
                
            </article>
        </section>
    </main>
    <footer>

    </footer>
</body>
</html>
``` 



## Formulieren

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
<form method="" action="">

</form>
```

## Meta-elementen

## Handige-links

