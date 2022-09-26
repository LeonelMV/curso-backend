const getUsers = (req, res) => {
    return res.end(JSON.stringify({
        "name": "Leonel",
        "lastname": "Vazquez",
        "age": 31
    }));
}

const createUser = (req, res) => {
    return res.end(JSON.stringify({
        message: "El usuario fue creado exitosamente!"
    }));
}

const updateUser = (req, res) => {
    return res.end(JSON.stringify({
        message: "El usuario fue actualizado exitosamente!"
    }));
}

const deleteUser = (req, res) => {
    return res.end(JSON.stringify({
        message: "El usuario fue eliminado exitosamente!"
    }));
}

module.exports = {
    getUsers,
    createUser,
    updateUser,
    deleteUser,
}