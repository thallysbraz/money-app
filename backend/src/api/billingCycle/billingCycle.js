/*const restful = require("node-restful");
const mongoose = restful.mongoose;

//Schema relativo ao credito
const creditSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  value: {
    type: Number,
    min: 0,
    required: true
  }
});
//Schema relativo ao debito
const debtSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  value: {
    type: Number,
    min: 0,
    required: [true, "Informe o valor do débito!"]
  },
  status: {
    type: String,
    required: false,
    uppercase: true,
    enum: ["PAGO", "PENDENTE", "AGENDADO"]
  }
});
//Schema relativo ao ciclo de pagamento
const billingCycleSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  month: {
    type: Number,
    min: 1,
    max: 12,
    required: true
  },
  year: {
    type: Number,
    min: 1970,
    max: 2100,
    required: true
  },
  credits: [creditSchema],
  debts: [debtSchema]
});

module.exports = restful.model("BillingCycle", billingCycleSchema);
*/
const restful = require("node-restful");
const mongoose = restful.mongoose;

//Schema relativo a documentos
const documentSchema = new mongoose.Schema({
  cpf: {
    type: String,
    required: true
  },
  rg: {
    type: String,
    required: true
  },
  telefone: {
    type: Number,
    default: 0
  }
});
//Schema relativo a endereço
const enderecoSchema = new mongoose.Schema({
  rua: {
    type: String,
    uppercase: true,
    required: true[(true, "Informe o nome da rua!")]
  },
  bairro: {
    type: String,
    uppercase: true,
    required: [true, "Informe o nome do bairro!"]
  },
  num: {
    type: Number,
    uppercase: true,
    required: [true, "Informe o numero da residencia!"]
  },
  complemento: {
    type: String,
    uppercase: true
  }
});
//Schema relativo a usuario
const billingCycleSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  eAdmin: {
    type: Number,
    default: 0
  },
  senha: {
    type: String,
    required: true
  },
  passwordResetToken: {
    type: String,
    select: false
  },
  passwordResetExpires: {
    type: Date,
    select: false
  },
  documents: [documentSchema],
  ende: [enderecoSchema]
});

module.exports = restful.model("BillingCycle", billingCycleSchema);
