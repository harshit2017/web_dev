
var express = require("express"),
    mongoose = require("mongoose"),
    bodyParser = require("body-parser"),
    User = require("./models/user.js"),
    passport = require("passport"),
    passportLocalMongoose = require("passport-local-mongoose"),
    localStartegy = require("passport-local");

var app = express();

mongoose.connect("mongodb://localhost/auth");
app.set("view engine", "ejs");


app.use(require("express-session")({
    secret: "I am good.",
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(bodyParser.urlencoded({ extended: true }));

passport.use((new localStartegy(User.authenticate())));
passport.serializeUser(User.serializeUser());//encodes 
passport.deserializeUser(User.deserializeUser());//decodes

//=======
//Routes
//=======

app.get("/", function (req, res) {
    res.render("index");
});

app.get("/secret", isLoggedIn, function (req, res) {
    res.render("secret");
});

app.get("/register", function (req, res) {
    res.render("register");
});


app.get("/login", function (req, res) {
    res.render("login");
});

app.get("/logout", function (req, res) {
    req.logout();
    res.redirect("/");
});


app.post("/register", function (req, res) {
    var username = req.body.username, password = req.body.password;
    User.register(new User({ username: username }), password, function (err, user) {
        if (err) {
            console.log(err);
            return res.render("register");
        }
        else {
            passport.authenticate("local")(req, res, function () {
                res.redirect("/secret");
            });
        }

    });
});
//middleware code wich runs before callback functions

app.post("/login", passport.authenticate("local", {
    successRedirect: "/secret",
    failureRedirect: "/login"
}), function (req, res) { });

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    else
        res.redirect("/login");
}


app.listen(8080, function () {
    console.log("Server has started");
}); 