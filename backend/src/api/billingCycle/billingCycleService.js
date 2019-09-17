const BillingCycle = require("./billingCycle");

//web service pega os metodos do http aplica em uma mesma url o metodo requisitado.
BillingCycle.methods(["get", "post", "put", "delete"]);
//forçando retornar o objeto atualizado e rodando validações no "put"
BillingCycle.updateOptions({ new: true, runValidators: true });

module.exports = BillingCycle;
