const router = require('express').Router();
const bcrypt = require('bcrypt');
// express.use(router.urlencoded({extended: false}))

router.get('/', (req, res) => {
    res.render('signup');


})


router.post('/', async (req, res) => {
    console.log("data recieved: ", req.body)
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10)
        console.log(hashedPassword)
                // Users.push({
        //     id: Date.now().toString(),
        //     name: req.body.name,
        //     password: 
        // })

        
        res.redirect('/api/login')
    } catch {
        res.redirect('/api/signup')
    }
    console.log(Users)
}
)







module.exports = router;