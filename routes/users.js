import express from 'express';
import { v4 as uuidv4 } from 'uuid';
uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'

const router = express.Router();

const users = [
    {
        primeiroNome:"Diogo",
        ultimoNome : "Santo",
        idade: 22
    },
    {
        primeiroNome:"Daniel",
        ultimoNome : "Pires",
        idade: 23
    }
]
router.get('/', (req,res)=>{
    console.log(users)
    //res.send('utilizador');
    res.send(users);
})

router.post('/',(req,res)=>{
    const user = req.body;
    
    const userId = uuidv4();
    
    const userWithId = {...user, id : userId}
    users.push(user);
    res.send(user)
})

export default router;