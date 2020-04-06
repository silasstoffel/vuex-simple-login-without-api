const cyrb53 = (str, seed = 0) => {
    let h1 = 0xdeadbeef ^ seed,
        h2 = 0x41c6ce57 ^ seed;
    for (let i = 0, ch; i < str.length; i++) {
        ch = str.charCodeAt(i);
        h1 = Math.imul(h1 ^ ch, 2654435761);
        h2 = Math.imul(h2 ^ ch, 1597334677);
    }
    h1 =
        Math.imul(h1 ^ (h1 >>> 16), 2246822507) ^
        Math.imul(h2 ^ (h2 >>> 13), 3266489909);
    h2 =
        Math.imul(h2 ^ (h2 >>> 16), 2246822507) ^
        Math.imul(h1 ^ (h1 >>> 13), 3266489909);
    return 4294967296 * (2097151 & h2) + (h1 >>> 0);
};

const createRandomInteger = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
};

const start = (email, password) => {
    return new Promise((resolve, reject) => {
        if (email !== "" && password !== "") {
            const id = createRandomInteger(1000, 9999);
            const dd = createRandomInteger(10, 90);
            const phoneSuffix = createRandomInteger(1000, 9999);
            return resolve({
                user: {
                    id,
                    name: `User #${id}`,
                    mobile_phone: `${dd}99635${phoneSuffix}`,
                    email,
                },
                token: cyrb53(email),
            });
        } else {
            reject("Usuário não encontrado");
        }
    });
};

export { start };
