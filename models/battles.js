const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BattlesSchema = new Schema({
  Empresa: Number,
  Obra: Number,
  Venda: Number,
  Tipo: String,
  Parcela: Number,
  DtVencimento: Date,
  DtProrrogacao: Date,
  VlrParcela: String,
  Principal: String,
  VlrOriginalJurosCorrecao: Number,
  PrincipalJuros: Number,
  VlrJuros: Number,
  Correcao: Number,
  Multa: Number,
  JurosAtraso: Number,
  DescAntecipacao: Number,
  CorrecaoAtr: Number,
  Residuo: Number,
  VlrParcResiduo: Number,
  VlrTxBoleto: Number,
  VlrDescCusta: Number,
  VlrDescImposto: Number,
  DiasAtraso: Number,
  Nparcela: Number,
  TotParc: Number,
  StatusdaVenda: String,
  CobrancaVenda: String,
  EscrituraVenda: String,
  CodCli: String,
  NomeCliente: String,
  NParcAtraso: String,
  DescricaodaEmpresa: String,
  DescricaodaObra: String,
  Competencia: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = BattlesSchema;
