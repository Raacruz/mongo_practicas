db.ventas.aggregate([
    {
        $project:{
            _id:0,
            venta_id:1,
            cliente_id:1,
            fecha:1,
            total:1
        }
    }
])

db.ventas.aggregate([
    {
        $project:{
            _id:0,
            venta_id:1,
            cliente_id:1,
            fecha:1,
            total:1,
            iva_estimado:{
                $multiply:["$total",0.16]            }
        }
    }
])

db.ventas.aggregate([
    {
        $project:{
            _id:0,
            venta_id:1,
            fecha:1,
            anio:{
                $year:"$fecha"
            }
        }
    }
])

db.ventas.aggregate([
    {
        $project:{
            _id:0,
            venta_id:1,
            fecha:1,
            mes:{
                $month:"$fecha"
            }
        }
    }
])

db.ventas.aggregate([
    {
        $project:{
            _id:0,
            venta_id:1,
            anio:{
                $year:"$fecha"
            },
            mes:{
                $month:"$fecha"
            },
            total:1
        }
    }
])

db.ventas.aggregate([
    {
        $project:{
            anio:{
                $year:"$fecha"
            },
            mes:{
                $month:"$fecha"
            },
        }
    },
    {
        $group:{
            _id:{
                anio:"$anio",
                mes:"$mes"
            },
            total_ventas:{$sum:1}
        }
    }
])

db.ventas.aggregate([
    {
        $project:{
            mes:{
                $month:"$fecha"
            }
        }
    },
    {
        $group:{
            _id:{mes:"$mes"},
            total_ventas:{$sum:1}
        }
    }
])

db.ventas.aggregate([
    {
        $project:{
            mes:{
                $month:"$fecha"
            },
            total:1
        }
    },
    {
        $group:{
            _id:{mes:"$mes"},
            total_ingreso:{$sum:"$total"}
        }
    }
])

db.ventas.aggregate([
    {
        $unwind:"$items"
    }
])

db.ventas.aggregate([
    {
        $unwind:"$items"
    },
    {
        $project:{
            _id:0,
            venta_id:1,
            sku:"$items.sku",
            cantidad:"$items.cantidad",
            precio:"$items.precio"  
        }
    }
])

db.ventas.aggregate([
    {
        $unwind:"$items"
    },
    {
        $group:{
            _id:"$items.sku",
            unidades_vendidas:{
                $sum:"$items.cantidad"
            }
        }
    }

])

db.ventas.aggregate([
    {
        $unwind:"$items"
    },
    {
        $group:{
            _id:"$items.sku",
            unidades_vendidas:{
                $sum:"$items.cantidad"
            }
        }
    },
    {
        $sort:{
            unidades_vendidas:-1
        }
    }

])

db.ventas.aggregate([
    {
        $unwind:"$items"
    },
    {
        $group:{
            _id:"$items.sku",
            ingreso_generado:{
                $sum:{
                    $multiply:["$items.cantidad","$items.precio"]
                }
            }
        }
    }
])

db.ventas.aggregate([
    {
        $unwind:"$items"
    },
    {
        $group:{
            _id:"$items.sku",
            ingreso_generado:{
                $sum:{
                    $multiply:["$items.cantidad","$items.precio"]
                }
            }
        }
    },
    {
        $sort:{
            ingreso_generado:-1
        }
    },
    {
        $limit:5
    }
])

db.ventas.aggregate([
    {
        $unwind:"$items"
    },
    {
        $group:{
            _id:"$items.sku",
            unidades_vendidas:{
                $sum:"$items.cantidad"
            }
        }
    },
    {
        $sort:{
            unidades_vendidas:-1
        }
    },
    {
        $limit:10
    }

])

db.ventas.aggregate([
{
$match: {
estado: "completada"
}
},
{
$unwind: "$items"
},
{
$group: {
_id: "$items.sku",
unidades: {
$sum: "$items.cantidad"
}
}
}
])

db.ventas.aggregate([
{
$match: {
estado: "completada"
}
},
{
$project: {
mes: {
$month: "$fecha"
},
total: 1
}
},
{
$group: {
_id: {
mes: "$mes"
},
ingreso: {
$sum: "$total"
}
}
}
])

db.ventas.aggregate([
    {
        $unwind:"$items"
    },
    {
        $group:{
            _id:null,
            unidades_vendidas:{
                $sum:"$items.cantidad"
            }
        }
    }

])

db.ventas.aggregate([
{
$unwind: "$items"
},
{
$group: {
_id: "$items.sku",
unidades: {
$sum: "$items.cantidad"
}
}
},
{
$group: {
_id: null,
promedio_unidades_por_producto: {
$avg: "$unidades"
}
}
}
])

//5 productos con mayor unidades vendidad en linea

db.ventas.aggregate([
    {$match:{
        canal:"online"
    }},
    {
        $unwind:"$items"
    },
    {
        $group:{
            _id:"$items.sku",
            unidades:{
                $sum:"$items.cantidad"
            }
        }
    },
    {
        $sort:{
            unidades:-1
        }
    },
    {
        $limit:5
    }
])