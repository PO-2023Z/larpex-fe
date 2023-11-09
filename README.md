# larpex-fe
Aplikacja webowa do zarządzania wydarzeniami LARP.

## Zaproponowane konwencje i praktyki
* **Konwencja nazewnicza plików i katalogów**

  Do nazywania katalogów używamy pascalCase (myComponent), a komponenty nazywamy CamelCase (MyComponent.tsx)
* **Konwencja rozszerzeń plików (.tsx, .ts)**

  Propozycja, by komponenty Reactowe tworzyć z rozszerzeniem .tsx, a pliki gdzie mamy funkcje do np. wyciągania danych z BE, czy logiki .ts. To może nam pozwlić przy szybkim "skanowaniu" struktury katalogów, w którym pliki znajdziemy logikę, a w którym sam widok.
* **Komponenty Ogólnodostępne**

  Do komponentów ogólnych twórzmy dedykowane katalogi w /src, a nie wewnątrz naszych UC. To tyczy się przykładowo AppLayout/Navbar, gdzie mamy nasz pasek nawigacyjny, który jest komponentem ogólnym do całej aplikacji.
* **Reużywalne mechaniki**

  W katalogu /src mamy podkatalog */globals* tam możemy umieszczać mechanizmy ogólne, z których kilka zespołów korzysta. Ja umiściłem plik connections.ts, gdzie mamy export apiUrl, żebyśmy sobie importowali z tamtąd, a nie hardcodowali w różnych miejscach apliakcji ten sam url. Po to jest ten katalog /globals.
* **Struktura katalogów**

    W katalogu /src tworzymy na każdy UC jeden katalog np. UCCreateEvent, a w nim dodajemy pliki (tsx, style css itp.). Wewnątrz też możemy to podzielić na np. subkatalogi View - tylko elementy ekranowe, Present/Logic/Service do obsługi logiki (wysyłanie zapytań do BE i inne) i Model - typy danych i interfejsy (np. ty umieścimy Event i jego pola). ** Jest to tylko propozycja, szczególnie te podkatalogi. A podział na katalogi o nazwach UC wydaje się sensowny, by łatwo szukać konkretnych plików **
* **Style css**

  Proponuję korzystać wszędzie z modułowego załączania css. W praktyce do widoku ExampleView.tsx tworzymy odpowiadający mu plik ExampleView.module.css (nazwa taka sama jak pliku z komponentem + module.css). Każdy plik widoku ma swój własny css. Następnie zwykły import (import classes from './ExampleView.module.css'). Zalety: spójna konwencja, wiadomo gdzie szukać odpowienich styli do interesujących elementów, **możemy niezależnie od siebie nazywać klasy, a gdyby jeden zespół nazwał klasę css .button i drugi tak samo, to wówczas możemy mieć nieprzyjemne side effect'y i do elementu trafi nie ten styl, które oczekiwaliśmy. Moduły dodają w praktyce do nazw ciąg losowych znaków przez co nigdy dwie nazwy nie będą takie same**. Niżej wyjaśnienie jak korzystać:

![image](https://github.com/PO-2023Z/larpex-fe/assets/76063659/19d2cda2-faa6-4ace-884e-c06229bc7baf)

![image](https://github.com/PO-2023Z/larpex-fe/assets/76063659/6dc934e7-6a69-4cdf-ac51-27ebf3675d0e)

## Pierwsze uruchomienie aplikacji
* Przechodzimy do katalogu z projektem
```
cd larpex-web-fe
```
* Instalujemy zależności
```
npm install
```
* Uruchamiamy projekt (dostępne domyślnie na localhost:5173)
```
npm run dev
```

Nasze wszystkie zmiany, czy use-case'y robimy zawsze na oddzielnym branch'u, a następnie wystawiamy PR i mergujemy do mastera.
## Mini instrukcja jak działamy
* Przechodzimy na main i pullujemy zmiany
```
git checkout main
```
```
git pull
```
* Przechodzimy na nowy branch 
```
git checkout -b ImieNazwisko_NazwaZadania
```
* Wykonujemy działania
* Tworzymy pull request, domerge'owujemy najnowszego main'a
* Jeśli nie ma konfliktu to mergujemy do main'a, jak konflikt to rozwiązujemy
