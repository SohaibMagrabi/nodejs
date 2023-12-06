const User = require("../models/customerSchema");
var moment = require("moment");




const a = (req, res) => {
    // result ==> array of objects
    console.log("--------------------------------------------");
    User.find()
      .then((result) => {
        res.render("index", { arr: result, moment: moment });
      })
      .catch((err) => {
        console.log(err);
      });
  }

const b =(req, res) => {
    User.findById(req.params.id)
      .then((result) => {
        res.render("user/edit", { obj: result, moment: moment });
      })
      .catch((err) => {
        console.log(err);
      });
  }
const c =(req, res) => {
    // result ==> object
    User.findById(req.params.id)
      .then((result) => {
        res.render("user/view", { obj: result, moment: moment });
      })
      .catch((err) => {
        console.log(err);
      });
  }
const d = (req, res) => {
    console.log("*******************************");
  
    const searchText = req.body.searchText.trim();
  
    User.find({ $or: [{ fireName: searchText }, { lastName: searchText }] })
      .then((result) => {
        console.log(result);
        res.render("user/search", { arr: result, moment: moment });
      })
      .catch((err) => {
        console.log(err);
      });
  }
const e =(req, res) => {
    User.deleteOne({ _id: req.params.id })
      .then((result) => {
        res.redirect("/");
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  }
const f =(req, res) => {
    User.updateOne({ _id: req.params.id }, req.body)
      .then((result) => {
        res.redirect("/");
      })
      .catch((err) => {
        console.log(err);
      });
  }
const g = (req, res) => {
    res.render("user/add");
  }
const h = (req, res) => {
    User.create(req.body)
      .then(() => {
        res.redirect("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };


module.exports = {a,b,c,d,e,f,g,h}