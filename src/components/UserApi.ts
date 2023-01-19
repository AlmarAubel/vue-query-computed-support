const later = <T>(delay: number, value: T): Promise<T> =>
    new Promise(resolve => setTimeout(resolve, delay, value));

var gebruikersnaam = "piet";
export const getUser = (userId: string) => {
    console.log("user id api aangeroepen", userId);
    return later(3000, {userId, timeStamp: new Date(Date.now()).toUTCString(), gebruikersnaam});
}

export const updateUser = (userId: string, naam: string) => {
    gebruikersnaam = naam
    return later(1000, true);
}