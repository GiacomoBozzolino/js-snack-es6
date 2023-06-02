Problema: Abbiamo un elenco degli studenti di una facoltà, identificati da id, Nome e somma totale dei loro voti di esame...
1. Per preparare l'aula di un nuovo corso, dobbiamo stampare le targhe col nome degli studenti: creare una lista contenente il loro nome tutto in maiuscolo
ES (Marco della Rovere => MARCO DELLA ROVERE);
2. Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70
3. Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70 e id superiore a 120

1- Creo un array di ogetti, ogni oggetto avra le informazione: id, name, grades
2- Utilizzo un console.log per assicurarmi che l'array funzioni correttamente
3- Creo una nuova variabile e utlizzo .map insieme ad un arrow function per creare un nuovo array.
    3.1- all'interno dell'arrow function uso :toUpperCase per trasformare rendere i nomi tutti in maiuscolo
    3.2- utilizzo return per estrarre il risultato
4- fuori dall'arrow function uso il console.log per stampare il nuovo array
5- utilizzo un console.log per stampare in console il nuovo array
6- creo una nuova variabile e utilizzo .filter insieme ad un arrow function per creare un nuovo array.
    6.1- all'interno dell'arrow function inserisco una condizione che selezioni gli studenti i base al valore di grades
    6.2- utilizzo return per estrarre il risultato
7- fuori dall'arrow function uso il console.log per stampare il nuovo array