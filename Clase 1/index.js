function helloWorldFunc() {
    console.log("Hola mundo desde Node!");
}

const helloNode = () => {
    console.log("Hola mundo desde Node!");
}

const testContext = () => {
    const miVariable = 100;
    console.log(miVariable);
    
    if(2 > 1){
        const miVariable = 150;
        console.log(miVariable);
    }

    console.log(miVariable);
}

testContext();

const templateString = () => {
    const name = 'Leo';
    const hello1 = 'Hola ';
    const final1 = '!!!';

    const frase1 = hello1 + name + final1 + '\n =)';

    console.log(frase1);

    const frase2 = `Con Templates Strings : ${hello1} ${name} ${final1}
    =)`;

    console.log(frase2);
}

const myCallback = () => {
    console.log("Mi primer callback");
}

const invokeCallback = (callback) => {
    callback();
}

const objects = () => {
    const myObject = new Object();
    myObject.name = "Leo";
    console.log(myObject);

    const myObject2 = {
        name: 'Leo'
    }

    console.log('Mi objecto 2 es =' + JSON.stringify(myObject2));
}

const iterators = () => {
    const myArray = ['Leonel', 'Leonardo', 'Matias', 'Tomas', 'Gaston', 'Pablo'];

    // loop for
    for(let i=0; i < myArray.length; i++){
        console.log(myArray[i]);
    }

    //loop map
    myArray.map((value, index) => {
        console.log(`En la posicion ${index} el nombre es ${value}`);
    });

    //loop map
    const newArray = myArray.map((value, index) => {
        if(value.includes('Leo')){
            value = `${value} ;)`;
        }
        return value;
    });

    console.table(newArray);

    const onlyLeos = myArray.filter((value, index) => {
        return value.includes('Leo');
    });

    console.table(onlyLeos);

    const matias = myArray.find((value, index) => value === 'Matias');

    console.log(matias);

    myArray.forEach((value, index) => console.log(`Desde forEach: ${value} ;)`));
}

const promises = () => {
    const myFirstPromise = new Promise((resolve, reject) => {
        resolve(1);
    });

    myFirstPromise.then(result => {
        console.log(result);
    })
}

//helloWorldFunc();
//helloNode();
//templateString();
//objects();
//invokeCallback(myCallback);
//iterators();
//promises();
