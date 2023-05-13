import { v4 as uuidv4 } from 'uuid';

let users = [
    // {
    //     primeiroNome:"Diogo",
    //     ultimoNome : "Santo",
    //     idade: 22
    // },
    // {
    //     primeiroNome:"Daniel",
    //     ultimoNome : "Pires",
    //     idade: 23
    // }
]

export const getUsers = (req,res)=>{
    console.log(users)
    //res.send('utilizador');
    res.send(users);
}

export const creatUser = (req,res)=>{
    const user = req.body;

    const userId = {...user, id : uuidv4()}

    users.push(userId);

    res.send(userId)
}

export const getUserId = (req,res)=>{
    const { id } = req.params;

    const foundUser = users.find((user)=>user.id==id);

    res.send(foundUser);
}

export const deleteUser =(req,res)=>{
    const { id } = req.params;
    
    users = users.filter((user)=>user.id != id);
        
    res.send(`utilizador com o id ${id} apagado`);
}

export const updateUser = (req,res) => {
    const { id } = req.params;
    const {primeiroNome,ultimoNome,idade} = req.body;
    
    const user = users.find((user)=> user.id == id);

    if (primeiroNome) user.primeiroNome=primeiroNome;

    if (ultimoNome) user.ultimoNome=ultimoNome;

    if (idade) user.idade=idade;

    res.send(`utilizador com o id ${id} foi alterado`);
}