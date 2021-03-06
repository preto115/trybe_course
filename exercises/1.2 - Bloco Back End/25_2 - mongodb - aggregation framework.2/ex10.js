//  Exercício 10: Selecione todas as vendas do mês de Março de 2020, com status
//  EM SEPARACAO. Acrescente um campo chamado dataEntregaPrevista com valor
//  igual a três dias após a data da venda. Retorne apenas os campos clienteId,
//  dataVenda e dataEntregaPrevista.

db.vendas.aggregate(
  [
    {$match: {dataVenda: {$gte: ISODate("2020-03-01"), $lte: ISODate("2020-03-31") }, status: "EM SEPARACAO" } },
    {$addFields: {dataEntregaPrevista: {$add: ["$dataVenda", 24 * 3 * 60 * 60 * 1000] } } },
    {$project: {_id:0, clienteId: 1, dataVenda: 1, dataEntregaPrevista: 1} }
  ]
).pretty();
