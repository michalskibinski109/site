# Portfolio site.

## [Demo](https://michalskibinski109.github.io/site/)
> W tej wersji nie działa pobieranie plików.

## Status projektu
1. Nie wszystkie `Materiały do zajec dla studentow` zostaly przpisane
2. Nie wszystkie publikacje sa zamieszczone.
3. Dla urzadzen mobilnych niektore elemnety sa szersze od innych
 
## Dodawanie nowego kontentu

### Nowy przedmiot w sekcji Materiały do zajęć dla studentów.
1. Stworzyć element

```html
<li class="list-group-item btn text-primary subject"        id="<UNIKALNE_ID>">
    <b><NAZWA PRZEDMIOTU></b>
</li>
```
2. Należy umieścić ten element element

```html
<ol class="list-group row-4 m-3">
<li class="list-group-item">
    <b>Materiały do zajęć dla studentów:</b>
</li>
<li class="list-group-item btn text-primary subject" id="subject-0">
    Metody wspomagania e-biznesu
</li>
. . . HERE GOES YOUR CODE
```


### Dodawanie nowego materiału do zajęć dla studentów

w pliku [data.json](static/data.json)