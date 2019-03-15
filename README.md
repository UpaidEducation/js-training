# Zadanie 1

> User story:

Na stronie powinien być text input(do wpisania tekstu), przycisk(button do klikania), kontener(który będzie zmieniać kolor) na początku czarny

- User case:

Wpisujesz w input nazwe koloru(np. green), klikasz w przycisk i kontener ma zmieniać kolor na wpisany w input(np. green)

# Zadanie 2

> User story:

Stworzyć kontener który zawiera w środku tekst np. 'sample text' i dwa przyciski dla zmiany kierunku animacji tekstu. W obszarze tego kontenera stworzyć  animacje przesuwającego tekstu w odpowiednim kierunku.

- User case:

Po kliku w przycisk "w prawo" tekst ma animować się w prawo, po kliku w przycisk "w lewo" animacja ma zmieniać kierunek w lewo.

# Zadanie 3

> User story:

Napisać funkcje która będzie sprawdzać czy podany rok jest rok przestępny w kalendarzu gregoriańskim.
Na stronie powinien być text input(do wpisania roku) i kontener(który będzie zawierać odpowiedź z funkcji).

- User case:

Wpisujesz rok np. 2000, wychodzisz z inputu i w kontenerze ma pojawiać się odpowiedź czy wpisany rok jest przestępny.

# Zadanie 4

> User story:

Napisać funkcje która będzie odwracać podany string.
Na stronie powinien być text input(do wpisania słowa) i przycisk po kliku na który będzie działać funckja.

- User case:

Wpisujesz słowo np. welcome, klikasz w przycisk i w inpucie ma pojawić się odwrócone słowo np. emoclew.

Advanced*: Napisać funkcje która będzie zamieniać każdy symbol z stringu na następny według alfabetu np. python -> qzuipo.

# Zadanie 5

> User story:

Napisać 2 funkcje: 1 będzie konwertować podaną w inpucie liczbę(w milisekundach) w taki format -> godziny:minuty:sekundy:milisekundy; 2 będzie konwertować podany string według kolejności w alfabecie.

- User case:

1 funkcja: wpisujesz np. 12400000 dostajesz 3:26:40:000

2 funkcja: wpisujesz np. "python" dostajesz "hnopty"

Advanced*: Napisać funkcje dla znajdowania maxymalnej możliwej sumy N elementów tablicy(elementy dla sumy bierzemy według kolejności w tablicy). Jeżeli N(drugi argument funkcji) jest większe od iłości elementów w tablicy zwracamy "This operation can not be done".

Example: findMaxPossibleSum([1, 2, 3, 14, 5], 2) -> 19(w tym przypadku n = 2)

# Zadanie 6

Napisać 3 funkcje: 1 ma znaleźć najkrótszy string, który dodająć znaki do końca podanego stringu utworzy palindrom; 2 która będzie liczyć sume na podstawie wzoru: n + n/2 + n/4 + n/8 + ... Gdzie n to jes liczba dodatnia i całkowita, dzielniki są liczbami całkowitymi i zwiększają się dwukrotnie w stosunku do poprzedniego. Wynikiem tych iloczynów ma być liczba całkowita; 3 ma sprawdzać czy podana macierz jest diagonalna.

- User case:

1. funkcja: abcddc -> abcddcba, 122 -> 1221
2. funkcja: N = 8(8 + 8/2 + 8/4 + 8/8) -> 15, N = 26(26 + 26/2 + 26/4 + 26/8 + 26/16) -> 49
3. funkcja: [[1, 0, 0], [0, 2, 0], [0, 0, 3]] -> true, [[1, 0, 0], [0, 2, 3], [0, 0, 3] ]) -> false

Advanced*: Napisać prosty kalkulator.

# Weather app

- Step 1:

Napisać funkcje dla pobrania aktualnej pogody w Londynie i pokazania tej informacji na stronie.
Dla zrobienia tego zadania trzeba najpierw zarejestrować się pod tym <a href="https://home.openweathermap.org/users/sign_up">linkiem</a> żeby dostać APP KEY, który pozwoli zrobić request na https://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid={YOUR_APP_KEY} używająć XMLHttpRequest albo fetch.