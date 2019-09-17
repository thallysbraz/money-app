const BillingCycle = require("./billingCycle");

//web service pega os metodos do http aplica em uma mesma url o metodo requisitado.
BillingCycle.methods(["get", "post", "put", "delete"]);
//forçando retornar o objeto atualizado e rodando validações no "put"
BillingCycle.updateOptions({ new: true, runValidators: true });

BillingCycle.route("count", (req, res, next) => {
  BillingCycle.count((error, value) => {
    if (error) {
      res.status(500).json({ errors: [error] });
    } else {
      res.json({ value });
    }
  });
});

module.exports = BillingCycle;
