//  Exercício 6: Agrupe os clientes por sexo e uf. Retorne o total de clientes
//  de cada sexo no campo total.

db.clientes.aggregate(
  [
    {
      $group:
        {_id:
          { sexo: "$sexo", uf: "$endereco.uf" },
            totalDeClientes: {$sum: 1}
        }
    }
  ]
).pretty();