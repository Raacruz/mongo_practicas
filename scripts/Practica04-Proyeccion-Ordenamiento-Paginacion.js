db.productos.find(
{},
{
_id: 0,
sku: 1,
nombre: 1,
precio: 1
}
)

db.productos.find(
{},
{
_id: 0,
sku: 1,
nombre: 1,
categoria: 1,
stock:1
}
)

db.productos.find(
{categoria:"Audio"},
{
_id: 0,
nombre: 1,
precio: 1
}
)

db.productos.find(
{},
{
etiquetas:0
}
)

db.productos.find(
    {},
    {
        _id:0,
        sku:1,
        nombre:1,
        precio:1
    }
).sort({precio:1})

db.productos.find(
    {},
    {
        _id:0,
        sku:1,
        nombre:1,
        precio:1
    }
).sort({precio:-1})

db.productos.find(
    {},
    {
        _id:0,
        sku:1,
        nombre:1,
        stock:1
    }
).sort({stock:1})

db.productos.find(
    {},
    {
        _id:0,
        sku:1,
        nombre:1,
    }
).sort({nombre:1})

db.productos.find(
    {},
    {
        _id:0,
        sku:1,
        nombre:1,
        categoria:1,
        precio:1
    }
).sort({
    categoria:1,
    precio:-1
})

db.productos.find(
    {},
    {
        _id:0,
        sku:1,
        nombre:1,
        precio:1
    }
).sort({precio:-1}).limit(5)

db.productos.find(
    {},
    {
        _id:0,
        sku:1,
        nombre:1,
        precio:1
    }
).sort({precio:1}).limit(5)

db.productos.find(
    {},
    {
        _id:0,
        sku:1,
        nombre:1,
        stock:1
    }
).sort({stock:1}).limit(10)

db.productos.find(
    {},
    {
        _id:0,
        sku:1,
        nombre:1,
        stock:1
    }
).sort({stock:-1}).limit(5)

db.productos.find(
    {categoria:"Audio"},
    {
        _id:0,
        sku:1,
        nombre:1,
        categoria:1,
        precio:1
    }
).sort({precio:-1}).limit(3)

db.productos.find(
    {categoria:"Accesorios"},
    {
        _id:0,
        sku:1,
        nombre:1,
        categoria:1,
        precio:1
    }
).sort({precio:1}).limit(5)

db.productos.find({},
    {
        _id:0,
        sku:1,
        nombre:1
    }
).sort({sku:1}).skip(0).limit(10)

db.productos.find({},
    {
        _id:0,
        sku:1,
        nombre:1
    }
).sort({sku:1}).skip(10).limit(10)

db.productos.find({},
    {
        _id:0,
        sku:1,
        nombre:1
    }
).sort({sku:1}).skip(30).limit(10)

db.productos.find(
    {categoria:"Computo"},
    {
        _id:0,
        sku:1,
        nombre:1,
        categoria:1,
        precio:1
    }
).sort({precio:-1}).skip(0).limit(5)

//5 productos de audio con promocion con mayor stock
db.productos.find(
    {
        etiquetas:"promocion",
        categoria:"Audio"
    },
    {
        _id:0,
        sku:1,
        nombre:1,
        categoria:1,
        etiquetas:1,
        stock:1
    }
).sort({stock:-1}).limit(5)
