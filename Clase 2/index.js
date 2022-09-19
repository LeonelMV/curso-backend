const asyncTask = () => {
    console.log("Iniciando tarea asincrona");

    setTimeout(() => {
        console.log("Ejecucion setTimeout!");
    }, 10000);

    console.log("Finalizando tarea asincrona");
}

//asyncTask();

/*************************************************************************************************************/

const logicaPromesa = (resolve, reject) => {
    resolve('Todo bien!!!');
    //reject('Todo mal!!!');
}

const exitoLogicaPromesa1 = (result) => {
    console.log(result);
}

const fracasoLogicaPromesa1 = (error) => {
    console.log(error);
}

const promesa1 = () => {
    const miPromesa1 = new Promise(logicaPromesa);

    miPromesa1.then(exitoLogicaPromesa1).catch(fracasoLogicaPromesa1);
}

//promesa1();

/************************************************************************************************************/

const sendLeoToMissionLogic = (resolve, reject) => {
    const missionResult = getRandomNumber(2);
    if(missionResult === 0){
        reject("Fail: Leo fue devorado por un Zombie!");
    } else {
        resolve("Success: Leo compro Pan!");
    }
}

const getRandomNumber = (maxValue) => {
    const randomNumber = parseInt(Math.random() * maxValue);
    return randomNumber;
}

const sendLeo = () => {
    const promiseSendLeo = new Promise(sendLeoToMissionLogic);
    
    promiseSendLeo
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.log(error);
    });
}

//sendLeo();

/************************************************************************************************************/

const sendLeoToMissionLogic2 = (resolve, reject) => {
    const missionResult = getRandomNumber(2);
    setTimeout(() => {
        if(missionResult === 0){
            reject("Fail: Leo fue devorado por un Zombie!");
        } else {
            resolve("Success: Leo compro Pan!");
        }
    }, 10000);
}



const sendLeo2 = () => {
    const promise = new Promise(sendLeoToMissionLogic2);

    promise.then(result => {
        console.log(result);
    })
    .catch(error => {
        console.log(error);
    });
}

//sendLeo2();

/************************************************************************************************************/

const promise1 = () => {
    const promesa1 = new Promise((resolve, reject) => {
        console.log("Ejecutando promesa 1")
        resolve(promise2);
    });
    return promesa1;
}

const promise2 = () => {
    const promesa2 = new Promise((resolve, reject) => {
        resolve("Promesa 2 salio ok!");
    });
    return promesa2;
}

const callPromiseChain = () => {
    promise1().then((resultPromise1) => {
        resultPromise1().then(resultPromise2 => {
            console.log(resultPromise2)
        });
    });
}

//callPromiseChain();

/************************************************************************************************************/

// async / await

const sendLeoToMissionLogic3 = (resolve, reject) => {
    const missionResult = getRandomNumber(2);
    setTimeout(() => {
        if(missionResult === 0){
            reject("Fail: Leo fue devorado por un Zombie!");
        } else {
            resolve("Success: Leo compro Pan!");
        }
    }, 1000);
}



const sendLeo3 = async () => {
    const promise = new Promise(sendLeoToMissionLogic3);

    const result = await promise.catch(error => error);
    console.log(result);
}

//sendLeo3();

/************************************************************************************************************/

// async await

const sendLeoToMissionLogic4 = (resolve, reject) => {
    const missionResult = getRandomNumber(2);
    setTimeout(() => {
        if(missionResult === 0){
            reject({ message: "Leo fue devorado por un Zombie!", pan: 0 });
        } else {
            resolve({ message: "Success: Leo compro Pan!", pan: getRandomNumber(100) });
        }
    }, 5000);
}

const sendLeo4 = async () => {
    const promise = new Promise(sendLeoToMissionLogic4);

    const missionResult = await promise.catch(error => error);

    if(missionResult.pan > 0 && missionResult.pan < 10){
        console.log("Leo sobrevivio pero trajo poco pan. Trajo " + missionResult.pan);

    } else if(missionResult.pan >= 10){
        console.log("Leo es todo un panadero. Trajo " + missionResult.pan);

    } else if(missionResult.pan === 0){
        console.log("RIP Leo");
    }

    console.log(missionResult);
}

sendLeo4();

/************************************************************************************************************/