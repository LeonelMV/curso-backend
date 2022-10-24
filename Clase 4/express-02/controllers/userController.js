const getUsers = (req, res) => {
    res.status(200).send([
        { username: "Leo1", password: "1234" },
        { username: "Leo2", password: "1234" },
        { username: "Leo3", password: "1234" },
    ]);
}

const createUser = (req, res) => {
    const { username, name, lastname } = req.body;
    console.log(username);
    console.log(name);
    console.log(lastname);

    res.status(200).send({ message: 'El usuario fue creado exitosamente!', user: { username: "Leo1", password: "1234" } });
}

const updateUser = (req, res) => {
    const { username, name, lastname } = req.body;
    console.log(username);
    console.log(name);
    console.log(lastname);
    res.status(200).send({ message: 'El usuario fue actualizado exitosamente!', user: { username: "Leo2", password: "1234" } });

}

const deleteUser = (req, res) => {
    res.status(200).send({ message: 'El usuario fue eliminado exitosamente!', user: { username: "Leo3", password: "1234" } });

}

module.exports = {
    getUsers,
    createUser,
    updateUser,
    deleteUser,
}