const restful = require("node-restful");
const mongoose = restful.mongoose;

//Schema relativo ao credito
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
//Schema relativo ao debito
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
//Schema relativo ao ciclo de pagamento
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
  documents: { type: mongoose.Schema.Types.ObjectId, ref: "documentSchema" },
  ende: [{ type: mongoose.Schema.Types.ObjectId, ref: "enderecoSchema" }]
});

module.exports = restful.model("BillingCycle", billingCycleSchema);
