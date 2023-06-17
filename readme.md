# Portfolio site.

## [Demo](https://michalskibinski109.github.io/site/)
> W tej wersji nie działa pobieranie plików. Oraz nie wszystkie ikonki sie wyswietlaja.

## Status projektu
1. Nie wszystkie `Materiały do zajec dla studentow` zostaly przpisane
2. Nie wszystkie publikacje sa zamieszczone.
 
## Dodawanie nowego kontentu

### Nowy przedmiot w sekcji Materiały do zajęć dla studentów.
1. Stworzyć element

```html
<li class="list-group-item btn text-primary subject"        id="<UNIKALNE_ID>">
    <b><NAZWA PRZEDMIOTU></b>
</li>
```
2. w pliku [data.json](static/data.json) dodać sekcję:
```json
"<UNIKALNE_ID>":{
    "title":"NAZWA PRZEDMIOTU",
    "description":"OPIS PRZEDMIOTU",
    "nazwa pliku z materialem 1":"link do pliku",
    "nazwa pliku z materialem 2":"link do pliku",
    .
    .
    .
}   
```

### Dodawanie nowego materiału do zajęć dla studentów

w pliku [data.json](static/data.json)

do sekcji z id wybranego przedmiotu dodać:
```json
"nazwa pliku z materialem":"link do pliku",
```