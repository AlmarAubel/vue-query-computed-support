const later= (delay: number, value: string) =>
    new Promise(resolve => setTimeout(resolve, delay, value));

export const getUser  = (usedId:string) => later(1000, `user with id ${usedId}`)