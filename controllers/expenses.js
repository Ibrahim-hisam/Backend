const Expense = require('../models/Expense');

exports.AddExpense = (req, res, next) => {
    const Name = req.body.Name;
    const Price = req.body.Price;
    const Desc = req.body.Desc;
    return Expense.create({
        Name: Name,
        Price: Price,
        Desc: Desc

    })
    .then(data => {
        return res.json(data);
    })
    .catch(err => console.log(err));
}

exports.getExpense = (req, res, next) => {
    Expense.findAll()
        .then(ExpensevalData => {
            res.json(ExpensevalData);
        })
        .catch(err => console.log(err));
}

exports.DeleteExpense = (req, res, next) => {
    const id = req.body.id;
    Expense.findByPk(id)
        .then(val => {
            return val.destroy();
        })
        .then(() => {
            res.redirect('/add-expense');
        })
        .catch(err => console.log(err));
}
exports.editingExpense = (req, res, next) => {
    const id = req.params.id;
    const Name = req.body.Name;
    const Desc = req.body.Desc;
    const Price = req.body.Price;
    Expense.findByPk(id)
        .then(val => {
            val.Name = Name;
            val.Price = Price;
            val.Desc = Desc;
            return val.save();
        })
        .then(data => {
            res.json(data);
        })
        .catch(err => console.log(err))
}