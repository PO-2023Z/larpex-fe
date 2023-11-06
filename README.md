# larpex-fe
Aplikacja webowa do zarządzania wydarzeniami LARP.

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
