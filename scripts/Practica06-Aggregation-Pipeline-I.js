db.ventas.aggregate([
{
$group: {
_id: null,
numero_ventas: { $sum: 1 }
}
}
])

db.ventas.aggregate([
{
$group: {
_id: null,
ingreso_total: { $sum: "$total" }
}
}
])

db.ventas.aggregate([
{
$group: {
_id: null,
numero_ventas:{$sum:1},
ingreso_total: { $sum: "$total" },
venta_minima: {$min: "$total"},
venta_maxima:{$max:"$total"},
ticket_promedio:{$avg:"$total"}
}
}
])

db.ventas.aggregate([
{
$group: {
_id: "$canal",
numero_ventas:{$sum:1},
}
}
])

db.ventas.aggregate([
{
$group: {
_id: "$canal",
ingreso_total:{$sum:"$total"},
}
}
])

db.ventas.aggregate([
{
$group: {
_id: "$canal",
ticket_promedio:{$avg:"$total"},
}
}
])

db.ventas.aggregate([
{
$group: {
_id: "$canal",
ingreso_total:{$sum:"$total"},
}
},
{
    $sort:{
        ingreso_total:-1
    }
}
])

db.ventas.aggregate([
{
$group: {
_id: "$estado",
numero_ventas:{$sum:1},
}
}
])

db.ventas.aggregate([
{
$group: {
_id: "$estado",
ingreso_total:{$sum:"$total"},
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
$group: {
_id: null,
ventas_completadas: { $sum: 1 },
ingreso: { $sum: "$total" },
promedio: { $avg: "$total" }
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
$group: {
_id: null,
ventas_completadas: { $sum: 1 },
ingreso: { $sum: "$total" }
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
$group: {
_id: "$canal",
ventas: { $sum: 1 }
}
}
])

db.ventas.aggregate([
{
$group: {
_id: "$cliente_id",
compras: { $sum: 1 }
}
}
])

db.ventas.aggregate([
{
$group: {
_id: "$cliente_id",
total_gastado: { $sum: "$total" }
}
}
])

db.ventas.aggregate([
{
$group: {
_id: "$cliente_id",
promedio_gastado: { $avg: "$total" }
}
}
])

db.ventas.aggregate([
{
$group: {
_id: "$cliente_id",
total_gastado: { $sum: "$total" }
}
},
{
$sort:{
    total_gastado:-1
}
},
{
$limit:5
}
])

db.ventas.aggregate([
{
$group: {
_id: "$cliente_id",
compras: { $sum: 1 }
}
},
{
    $sort:{
        compras:-1
    }
},
{
    $limit:5
}
])

db.ventas.aggregate([
    {
        $match:{
            total:{$gte:2000}
        }
    },
    {
        $group:{
            _id:"$canal",
            total_ventas:{$sum:1}
        }
    }
])

//Mostrar el total de ventas canceladas por canal y ordenarlos de mayor a menor

db.ventas.aggregate([
    {
        $match:{
            estado:"cancelada"
        }
    },
    {
        $group:{
            _id:"$canal",
            ventas_canceladas:{$sum:1}
        }
    },
    {
        $sort:{
            ventas_canceladas:-1
        }
    }
])
