db.productos.find({
    $nor:[
        {categoria:"Accesorios"},
        {categoria:"Almacenamiento"}
    ]
})

db.productos.find({
    $or:[
        {categoria:"Accesorios"},
        {categoria:"Almacenamiento"}
    ]
})

db.productos.find({
    stock:{$gt:10},
    stock:{$lt:30}
})

db.productos.find({
    stock:{$lte:25},
})

db.productos.find({
    precio:{$lt:1000}
})

db.productos.find({
    stock:{$gte:40}
})

db.productos.find({
    stock:{$gt:30}
})

db.productos.find({
    precio:{$ne:980}
})

db.productos.find({
    stock:{$eq:30}
})

db.productos.find({
    precio:{$eq:890}
})

db.productos.find({
    stock:{$ne:25}
})

db.productos.find({
    precio:{$gt:5000}
})

db.productos.find({
    precio:{$gte:1450}
})

db.productos.find({
    stock:{$lt:30}
})

db.productos.find({
    precio:{$gte:500},
    precio:{$lte:2000}
})

db.productos.find({
    precio:{$gt:500},
    precio:{$lt:2000}
})

db.productos.find({
categoria: {
$in: ["Audio", "Accesorios"]
}
})

db.productos.find({
categoria: {
$nin: ["Audio", "Accesorios"]
}
})

db.productos.find({
    $and:[
        {categoria:"Audio"},
        {precio: {$gt:1000}}
    ]
})

db.productos.find({
    $or:[
        {categoria:"Computo"},
        {stock: {$lt:15}}
    ]
})

db.productos.find({
    $nor:[
        {categoria:"Audio"},
        {precio: {$gt:5000}}
    ]
})

db.productos.find({
    especificaciones:{$exists:true}
})

db.productos.find({
    especificaciones:{$exists:false}
})

db.productos.find({
    etiquetas:"gaming"
})

db.productos.find({
    etiquetas:{
        $all:["audio","promocion"]
    }
})

db.productos.find({
etiquetas:{$size:2}
})

db.productos.find({
    categoria:"Accesorios",
    stock:{$gt:30}
})

db.productos.find({
    etiquetas:"usb",
    precio:{$lt:2000}
})

db.productos.find({
    categorias:{
        $in:["Audio","Computo"]
    },
    stock:{$gte:20}
})

db.productos.find({
    categoria:{
        $in:["Audio","Accesorios"]
    },
    etiquetas:"promocion",
    precio:{$gte:1000}
})
