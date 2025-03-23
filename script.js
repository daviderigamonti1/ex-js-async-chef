// In questo esercizio, utilizzerai async/await per creare la funzione getChefBirthday(id). Questa funzione accetta un id di una ricetta e deve:
// Recuperare la ricetta da https://dummyjson.com/recipes/{id}
// Estrarre la proprietà userId dalla ricetta
// Usare userId per ottenere le informazioni dello chef da https://dummyjson.com/users/{userId}
// Restituire la data di nascita dello chef
// Note del docente
// Scrivi la funzione getChefBirthday(id), che deve:
// Essere asincrona (async).
// Utilizzare await per chiamare le API.
// Restituire una Promise con la data di nascita dello chef.
// Gestire gli errori con try/catch

async function fetchJson(url) {
    const response = await fetch(url);
    const obj = await response.json();
    return obj
}

async function getChefBirthday(id) {
    const ricetta = await fetchJson(`https://dummyjson.com/recipes/${id}`)
    const userId = ricetta.userId;

    const chef = await fetchJson(`https://dummyjson.com/users/${userId}`)
    return chef.birthDate;
}


(async () => {
    try {
        const birthday = await getChefBirthday(1);
        console.log("Data di nascita dello chef:", birthday);
    } catch (err) {
        console.error(err);
    }
})();

// Bonus 1
// Attualmente, se la prima richiesta non trova una ricetta, la seconda richiesta potrebbe comunque essere eseguita causando errori a cascata.

// Modifica getChefBirthday(id) per intercettare eventuali errori prima di fare la seconda richiesta.
// Bonus 2
//Utilizza la libreria dayjs per formattare la data di nascita nel formato giorno/mese/anno.