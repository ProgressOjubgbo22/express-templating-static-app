const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt')

router.use(express.urlencoded({ extended: true }));

const users = [];

router.get("/user", (req, res) => {
    res.send(users)

})

router.get("/sign", (req, res) => {
    res.send(`
    <h2>Sign Up</h2>
    <form method="POST" action="/signup">
      <input type="text" name="username" placeholder="Username" required /><br/>
      <input type="email" name="email" placeholder="Email" required /><br/>
      <input type="password" name="password" placeholder="Password" required /><br/>
      <button type="submit">Register</button>
    </form>
  `)   
});

router.post("/signup", (req, res) => {
    const {username, email, password} = req.body;

    if(!username || !email || !password){
        return res.send("required field");
    }

    const user = users.find(u => u.email === email);
    if(user){
        return res.send("user exist");
    }

    users.push(req.body)

    console.log(users);
    

    res.send(`
    <h1>Registration Successful 🎉</h1>
    <p>Welcome, ${username}</p>
  `)
})

router.get("/login", (req, res) => {
    res.send(`
    <h2>Login</h2>
    <form method="POST" action="/login">
      <input type="email" name="email" placeholder="Email" required /><br/>
      <input type="password" name="password" placeholder="Password" required /><br/>
      <button type="submit">Login</button>
    </form>
  `)
})

router.post('/login', async(req, res) => {
    const {email , password} = req.body;

    const user = users.find(u => u.email == email)
    if(!user) {
        return res.send("user do not exist")
    }

    if(password !== user.password) {
        return res.send("wrong password")
    }

    res.send(`${user.username} welcome`)
})

router.get("/contact", (req, res) => {
    res.send(`
    <h2>Contact Us</h2>
    <form method="POST" action="/contact">
      <input type="text" name="name" placeholder="Your Name" required /><br/>
      <input type="email" name="email" placeholder="Your Email" required /><br/>
      <textarea name="message" placeholder="Your Message" required></textarea><br/>
      <button type="submit">Send Message</button>
    </form>
        `)
})

router.post("/contact", (req, res) => {
    const {email, name, message} = req.body;

    if(!email || !name || !message) {
        res.send("all required")
    }

    console.log(req.body);

    res.send(`
         <h2>Thank you for contacting us, ${name}!</h2>
    <p>We have received your message and will get back to you soon.</p>`)
    

})
module.exports = router;