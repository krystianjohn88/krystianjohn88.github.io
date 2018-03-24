// pobieram do zmiennej wyswietlacz elementy z inputu o id wynik
var wyswietlacz = document.getElementById("wynik");
//dodaje za kazdym razem do zmiennej wyswietlacz - wartosc z value przycisku
function wyswietlenieLiczb() {
    wyswietlacz.value += this.value;
    if(this.value == "del"){
        wyswietlacz.value = "";
    };
};
// po przez funkcje eval pobiera zawartosc zmiennej wyswietlacza i dokonuje działania, które są naniesione na wyswietlacz
function wynik() {
  wyswietlacz.value = eval(wyswietlacz.value);
};
//eval nie obsluguje procentow?? czy da się jakoś to obejść? moje rozwiazanie ma wiele wad.
function procenty(){
    wyswietlacz.value = "("+wyswietlacz.value+")/100*";
};
// wykorzystujemy funkcje wyswietlenieLicz do pobrania wartosci do wyswietlacza
document.getElementById('jeden').onclick = wyswietlenieLiczb;
document.getElementById('dwa').onclick = wyswietlenieLiczb;
document.getElementById('trzy').onclick = wyswietlenieLiczb;
document.getElementById('cztery').onclick = wyswietlenieLiczb;
document.getElementById('piec').onclick = wyswietlenieLiczb;
document.getElementById('szesc').onclick = wyswietlenieLiczb;
document.getElementById('siedem').onclick = wyswietlenieLiczb;
document.getElementById('osiem').onclick = wyswietlenieLiczb;
document.getElementById('dziewiec').onclick = wyswietlenieLiczb;
document.getElementById('zero').onclick = wyswietlenieLiczb;
document.getElementById('razy').onclick = wyswietlenieLiczb;
document.getElementById('kropka').onclick = wyswietlenieLiczb;
document.getElementById('plus').onclick = wyswietlenieLiczb;
document.getElementById('del').onclick = wyswietlenieLiczb;
document.getElementById('minus').onclick = wyswietlenieLiczb;
document.getElementById('podzielic').onclick = wyswietlenieLiczb;
document.getElementById('procent').onclick = procenty;
//funkcja uruchamia eval i dostajemy wynik, który nadpisuje wyswietlacz
document.getElementById('rowna').onclick = wynik;