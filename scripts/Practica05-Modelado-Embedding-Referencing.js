db.clientes.insertMany([
  { cliente_id: "C003", nombre: "Carlos Mendoza", correo: "carlos.mendoza@email.com", telefono: "6671110003", direccion: { ciudad: "Culiacán", estado: "Sinaloa", cp: "80000" }, preferencias: ["tecnologia", "electronica"], activo: true },
  { cliente_id: "C004", nombre: "Ana Gómez", correo: "ana.gomez@email.com", telefono: "6671110004", direccion: { ciudad: "Mazatlán", estado: "Sinaloa", cp: "82000" }, preferencias: ["movilidad", "audio"], activo: true },
  { cliente_id: "C005", nombre: "Luis Hernandez", correo: "luis.h@email.com", telefono: "6671110005", direccion: { ciudad: "Culiacán", estado: "Sinaloa", cp: "80010" }, preferencias: ["gaming", "computo"], activo: true },
  { cliente_id: "C006", nombre: "Sofia López", correo: "sofia.l@email.com", telefono: "6671110006", direccion: { ciudad: "Los Mochis", estado: "Sinaloa", cp: "81200" }, preferencias: ["oficina", "accesorios"], activo: true },
  { cliente_id: "C007", nombre: "Roberto Martínez", correo: "roberto.m@email.com", telefono: "6671110007", direccion: { ciudad: "Culiacán", estado: "Sinaloa", cp: "80020" }, preferencias: ["almacenamiento", "tecnologia"], activo: true },
  { cliente_id: "C008", nombre: "María Ruiz", correo: "maria.ruiz@email.com", telefono: "6671110008", direccion: { ciudad: "Guasave", estado: "Sinaloa", cp: "81000" }, preferencias: ["audio", "gadgets"], activo: false },
  { cliente_id: "C009", nombre: "Javier Sanchez", correo: "javier.s@email.com", telefono: "6671110009", direccion: { ciudad: "Culiacán", estado: "Sinaloa", cp: "80030" }, preferencias: ["gaming", "tecnologia"], activo: true },
  { cliente_id: "C010", nombre: "Patricia Flores", correo: "patricia.f@email.com", telefono: "6671110010", direccion: { ciudad: "Mazatlán", estado: "Sinaloa", cp: "82010" }, preferencias: ["electronica", "oficina"], activo: true },
  { cliente_id: "C011", nombre: "Fernando Torres", correo: "fernando.t@email.com", telefono: "6671110011", direccion: { ciudad: "Culiacán", estado: "Sinaloa", cp: "80040" }, preferencias: ["computo"], activo: true },
  { cliente_id: "C012", nombre: "Gabriela Diaz", correo: "gabriela.d@email.com", telefono: "6671110012", direccion: { ciudad: "Los Mochis", estado: "Sinaloa", cp: "81210" }, preferencias: ["audio", "movilidad"], activo: true },
  { cliente_id: "C013", nombre: "Alejandro Morales", correo: "alejandro.m@email.com", telefono: "6671110013", direccion: { ciudad: "Culiacán", estado: "Sinaloa", cp: "80050" }, preferencias: ["gaming", "accesorios"], activo: true },
  { cliente_id: "C014", nombre: "Valeria Ramirez", correo: "valeria.r@email.com", telefono: "6671110014", direccion: { ciudad: "Mazatlán", estado: "Sinaloa", cp: "82020" }, preferencias: ["electronica"], activo: true },
  { cliente_id: "C015", nombre: "Ricardo Castro", correo: "ricardo.c@email.com", telefono: "6671110015", direccion: { ciudad: "Culiacán", estado: "Sinaloa", cp: "80060" }, preferencias: ["tecnologia", "almacenamiento"], activo: true },
  { cliente_id: "C016", nombre: "Daniela Vargas", correo: "daniela.v@email.com", telefono: "6671110016", direccion: { ciudad: "Guasave", estado: "Sinaloa", cp: "81010" }, preferencias: ["oficina"], activo: false },
  { cliente_id: "C017", nombre: "Manuel Ortiz", correo: "manuel.o@email.com", telefono: "6671110017", direccion: { ciudad: "Culiacán", estado: "Sinaloa", cp: "80070" }, preferencias: ["computo", "gaming"], activo: true },
  { cliente_id: "C018", nombre: "Andrea Silva", correo: "andrea.s@email.com", telefono: "6671110018", direccion: { ciudad: "Los Mochis", estado: "Sinaloa", cp: "81220" }, preferencias: ["audio"], activo: true },
  { cliente_id: "C019", nombre: "Jorge Nuñez", correo: "jorge.n@email.com", telefono: "6671110019", direccion: { ciudad: "Culiacán", estado: "Sinaloa", cp: "80080" }, preferencias: ["tecnologia", "accesorios"], activo: true },
  { cliente_id: "C020", nombre: "Natalia Reyes", correo: "natalia.r@email.com", telefono: "6671110020", direccion: { ciudad: "Mazatlán", estado: "Sinaloa", cp: "82030" }, preferencias: ["movilidad"], activo: true },
  { cliente_id: "C021", nombre: "Hector Gutierrez", correo: "hector.g@email.com", telefono: "6671110021", direccion: { ciudad: "Culiacán", estado: "Sinaloa", cp: "80090" }, preferencias: ["almacenamiento", "computo"], activo: true },
  { cliente_id: "C022", nombre: "Monica Ramos", correo: "monica.r@email.com", telefono: "6671110022", direccion: { ciudad: "Guamúchil", estado: "Sinaloa", cp: "81400" }, preferencias: ["electronica"], activo: true },
  { cliente_id: "C023", nombre: "Oscar Aguilar", correo: "oscar.a@email.com", telefono: "6671110023", direccion: { ciudad: "Culiacán", estado: "Sinaloa", cp: "80100" }, preferencias: ["gaming"], activo: true },
  { cliente_id: "C024", nombre: "Carmen Mendoza", correo: "carmen.m@email.com", telefono: "6671110024", direccion: { ciudad: "Los Mochis", estado: "Sinaloa", cp: "81230" }, preferencias: ["oficina", "audio"], activo: true },
  { cliente_id: "C025", nombre: "Eduardo Castillo", correo: "eduardo.c@email.com", telefono: "6671110025", direccion: { ciudad: "Culiacán", estado: "Sinaloa", cp: "80110" }, preferencias: ["tecnologia"], activo: true },
  { cliente_id: "C026", nombre: "Claudia Jimenez", correo: "claudia.j@email.com", telefono: "6671110026", direccion: { ciudad: "Mazatlán", estado: "Sinaloa", cp: "82040" }, preferencias: ["accesorios"], activo: false },
  { cliente_id: "C027", nombre: "Hugo Moreno", correo: "hugo.m@email.com", telefono: "6671110027", direccion: { ciudad: "Culiacán", estado: "Sinaloa", cp: "80120" }, preferencias: ["computo", "almacenamiento"], activo: true },
  { cliente_id: "C028", nombre: "Verónica Romero", correo: "veronica.r@email.com", telefono: "6671110028", direccion: { ciudad: "Guasave", estado: "Sinaloa", cp: "81020" }, preferencias: ["audio", "tecnologia"], activo: true },
  { cliente_id: "C029", nombre: "Gabriel Navarro", correo: "gabriel.n@email.com", telefono: "6671110029", direccion: { ciudad: "Culiacán", estado: "Sinaloa", cp: "80130" }, preferencias: ["gaming"], activo: true },
  { cliente_id: "C030", nombre: "Lorena Molina", correo: "lorena.m@email.com", telefono: "6671110030", direccion: { ciudad: "Los Mochis", estado: "Sinaloa", cp: "81240" }, preferencias: ["movilidad", "oficina"], activo: true },
  { cliente_id: "C031", nombre: "Adrian Delgado", correo: "adrian.d@email.com", telefono: "6671110031", direccion: { ciudad: "Culiacán", estado: "Sinaloa", cp: "80140" }, preferencias: ["electronica"], activo: true },
  { cliente_id: "C032", nombre: "Silvia Vega", correo: "silvia.v@email.com", telefono: "6671110032", direccion: { ciudad: "Mazatlán", estado: "Sinaloa", cp: "82050" }, preferencias: ["accesorios", "audio"], activo: true },
  { cliente_id: "C033", nombre: "Raúl Campos", correo: "raul.c@email.com", telefono: "6671110033", direccion: { ciudad: "Culiacán", estado: "Sinaloa", cp: "80150" }, preferencias: ["computo"], activo: true },
  { cliente_id: "C034", nombre: "Alicia Peña", correo: "alicia.p@email.com", telefono: "6671110034", direccion: { ciudad: "Guamúchil", estado: "Sinaloa", cp: "81410" }, preferencias: ["almacenamiento"], activo: true },
  { cliente_id: "C035", nombre: "Ivan Fuentes", correo: "ivan.f@email.com", telefono: "6671110035", direccion: { ciudad: "Culiacán", estado: "Sinaloa", cp: "80160" }, preferencias: ["gaming", "tecnologia"], activo: true },
  { cliente_id: "C036", nombre: "Beatriz Sandoval", correo: "beatriz.s@email.com", telefono: "6671110036", direccion: { ciudad: "Los Mochis", estado: "Sinaloa", cp: "81250" }, preferencias: ["oficina"], activo: true },
  { cliente_id: "C037", nombre: "César Cabrera", correo: "cesar.c@email.com", telefono: "6671110037", direccion: { ciudad: "Culiacán", estado: "Sinaloa", cp: "80170" }, preferencias: ["electronica", "accesorios"], activo: true },
  { cliente_id: "C038", nombre: "Irene Acosta", correo: "irene.a@email.com", telefono: "6671110038", direccion: { ciudad: "Mazatlán", estado: "Sinaloa", cp: "82060" }, preferencias: ["audio"], activo: false },
  { cliente_id: "C039", nombre: "Marcos Lara", correo: "marcos.l@email.com", telefono: "6671110039", direccion: { ciudad: "Culiacán", estado: "Sinaloa", cp: "80180" }, preferencias: ["computo", "gaming"], activo: true },
  { cliente_id: "C040", nombre: "Rocio Rivas", correo: "rocio.r@email.com", telefono: "6671110040", direccion: { ciudad: "Guasave", estado: "Sinaloa", cp: "81030" }, preferencias: ["movilidad"], activo: true },
  { cliente_id: "C041", nombre: "Esteban Medrano", correo: "esteban.m@email.com", telefono: "6671110041", direccion: { ciudad: "Culiacán", estado: "Sinaloa", cp: "80190" }, preferencias: ["almacenamiento"], activo: true },
  { cliente_id: "C042", nombre: "Pilar Rios", correo: "pilar.r@email.com", telefono: "6671110042", direccion: { ciudad: "Los Mochis", estado: "Sinaloa", cp: "81260" }, preferencias: ["tecnologia", "oficina"], activo: true },
  { cliente_id: "C043", nombre: "Arturo Cordero", correo: "arturo.c@email.com", telefono: "6671110043", direccion: { ciudad: "Culiacán", estado: "Sinaloa", cp: "80200" }, preferencias: ["accesorios"], activo: true },
  { cliente_id: "C044", nombre: "Gloria Soto", correo: "gloria.s@email.com", telefono: "6671110044", direccion: { ciudad: "Mazatlán", estado: "Sinaloa", cp: "82070" }, preferencias: ["audio", "electronica"], activo: true },
  { cliente_id: "C045", nombre: "Felipe Miranda", correo: "felipe.m@email.com", telefono: "6671110045", direccion: { ciudad: "Culiacán", estado: "Sinaloa", cp: "80210" }, preferencias: ["gaming"], activo: true },
  { cliente_id: "C046", nombre: "Yolanda Luna", correo: "yolanda.l@email.com", telefono: "6671110046", direccion: { ciudad: "Guamúchil", estado: "Sinaloa", cp: "81420" }, preferencias: ["computo"], activo: true },
  { cliente_id: "C047", nombre: "Gonzalo Juarez", correo: "gonzalo.j@email.com", telefono: "6671110047", direccion: { ciudad: "Culiacán", estado: "Sinaloa", cp: "80220" }, preferencias: ["almacenamiento", "movilidad"], activo: true },
  { cliente_id: "C048", nombre: "Teresa Pacheco", correo: "teresa.p@email.com", telefono: "6671110048", direccion: { ciudad: "Los Mochis", estado: "Sinaloa", cp: "81270" }, preferencias: ["oficina"], activo: true },
  { cliente_id: "C049", nombre: "Guillermo Leon", correo: "guillermo.l@email.com", telefono: "6671110049", direccion: { ciudad: "Culiacán", estado: "Sinaloa", cp: "80230" }, preferencias: ["tecnologia", "audio"], activo: true },
  { cliente_id: "C050", nombre: "Esperanza Meza", correo: "esperanza.m@email.com", telefono: "6671110050", direccion: { ciudad: "Mazatlán", estado: "Sinaloa", cp: "82080" }, preferencias: ["electronica"], activo: true }
]);

db.proveedores.insertMany([
  { proveedor_id: "PR004", nombre: "Sistemas Globales de Culiacán", ciudad: "Culiacán", estado: "Sinaloa", activo: true },
  { proveedor_id: "PR005", nombre: "Distribuidora del Pacífico", ciudad: "Mazatlán", estado: "Sinaloa", activo: true },
  { proveedor_id: "PR006", nombre: "Tecnología Norte de México", ciudad: "Monterrey", estado: "Nuevo León", activo: true },
  { proveedor_id: "PR007", nombre: "Importadora Electrónica S.A.", ciudad: "Guadalajara", estado: "Jalisco", activo: true },
  { proveedor_id: "PR008", nombre: "Componentes y Redes del Noroeste", ciudad: "Hermosillo", estado: "Sonora", activo: true },
  { proveedor_id: "PR009", nombre: "Soluciones Dig. Mochis", ciudad: "Los Mochis", estado: "Sinaloa", activo: true },
  { proveedor_id: "PR010", nombre: "Logística y Suministros Tech", ciudad: "Ciudad de México", estado: "CDMX", activo: true }
]);


db.productos.updateMany(
  { categoria: "Computo", sku: { $in: ["P001", "P004", "P009", "P012"] } },
  { $set: { proveedor_id: "PR001" } }
);

db.productos.updateMany(
  { categoria: "Accesorios", sku: { $in: ["P002", "P005", "P006", "P013", "P017"] } },
  { $set: { proveedor_id: "PR002" } }
);

db.productos.updateMany(
  { categoria: "Audio", sku: { $in: ["P003", "P008", "P011", "P015", "P021"] } },
  { $set: { proveedor_id: "PR003" } }
);


db.productos.updateMany(
  { categoria: "Almacenamiento", sku: { $in: ["P007", "P010", "P014", "P018", "P023"] } },
  { $set: { proveedor_id: "PR004" } }
);

db.productos.updateMany(
  { sku: { $in: ["P016", "P020", "P024", "P028", "P032"] } },
  { $set: { proveedor_id: "PR005" } }
);


db.productos.updateMany(
  { sku: { $in: ["P019", "P022", "P026", "P030", "P034"] } },
  { $set: { proveedor_id: "PR006" } }
);

db.productos.updateMany(
  { sku: { $in: ["P027", "P031", "P035", "P039", "P043", "P047"] } },
  { $set: { proveedor_id: "PR007" } }
);

db.productos.updateMany(
  { sku: { $in: ["P025", "P029", "P033", "P037", "P041", "P045", "P049"] } },
  { $set: { proveedor_id: "PR008" } }
);

db.productos.updateMany(
  { sku: { $in: ["P036", "P040", "P044", "P048"] } },
  { $set: { proveedor_id: "PR009" } }
);

db.productos.updateMany(
  { sku: { $in: ["P038", "P042", "P046", "P050"] } },
  { $set: { proveedor_id: "PR010" } }
);

db.productos.find(
  {},
  { _id: 0, sku: 1, nombre: 1, categoria: 1, proveedor_id: 1 }
).sort(
  { proveedor_id: 1, nombre: 1 }
);

db.ventas.insertMany([
  { venta_id: "V003", cliente_id: "C003", fecha: ISODate("2026-09-01T10:00:00Z"), items: [{ sku: "P001", cantidad: 1, precio: 18500 }], total: 18500, canal: "online", estado: "completada" },
  { venta_id: "V004", cliente_id: "C004", fecha: ISODate("2026-09-01T11:15:00Z"), items: [{ sku: "P002", cantidad: 2, precio: 450 }], total: 900, canal: "tienda", estado: "completada" },
  { venta_id: "V005", cliente_id: "C005", fecha: ISODate("2026-09-01T14:30:00Z"), items: [{ sku: "P003", cantidad: 1, precio: 1250 }], total: 1250, canal: "app", estado: "pendiente" },
  { venta_id: "V006", cliente_id: "C006", fecha: ISODate("2026-09-02T09:20:00Z"), items: [{ sku: "P004", cantidad: 1, precio: 6200 }], total: 6200, canal: "online", estado: "cancelada" },
  { venta_id: "V007", cliente_id: "C007", fecha: ISODate("2026-09-02T12:00:00Z"), items: [{ sku: "P005", cantidad: 1, precio: 1600 }], total: 1600, canal: "tienda", estado: "completada" },
  { venta_id: "V008", cliente_id: "C008", fecha: ISODate("2026-09-02T16:45:00Z"), items: [{ sku: "P006", cantidad: 3, precio: 980 }], total: 2940, canal: "app", estado: "completada" },
  { venta_id: "V009", cliente_id: "C009", fecha: ISODate("2026-09-03T10:10:00Z"), items: [{ sku: "P007", cantidad: 2, precio: 1450 }], total: 2900, canal: "online", estado: "completada" },
  { venta_id: "V010", cliente_id: "C010", fecha: ISODate("2026-09-03T13:25:00Z"), items: [{ sku: "P008", cantidad: 1, precio: 890 }], total: 890, canal: "tienda", estado: "pendiente" },
  
  { venta_id: "V011", cliente_id: "C011", fecha: ISODate("2026-09-03T17:00:00Z"), items: [{ sku: "P009", cantidad: 1, precio: 5200 }, { sku: "P010", cantidad: 2, precio: 320 }], total: 5840, canal: "app", estado: "completada" },
  { venta_id: "V012", cliente_id: "C012", fecha: ISODate("2026-09-04T11:00:00Z"), items: [{ sku: "P011", cantidad: 1, precio: 1350 }, { sku: "P012", cantidad: 1, precio: 12500 }], total: 13850, canal: "online", estado: "completada" },
  { venta_id: "V013", cliente_id: "C013", fecha: ISODate("2026-09-04T15:40:00Z"), items: [{ sku: "P013", cantidad: 2, precio: 780 }, { sku: "P014", cantidad: 1, precio: 1650 }], total: 3210, canal: "tienda", estado: "cancelada" },
  { venta_id: "V014", cliente_id: "C014", fecha: ISODate("2026-09-05T08:30:00Z"), items: [{ sku: "P015", cantidad: 1, precio: 1750 }, { sku: "P016", cantidad: 1, precio: 3900 }], total: 5650, canal: "app", estado: "completada" },
  { venta_id: "V015", cliente_id: "C015", fecha: ISODate("2026-09-05T12:30:00Z"), items: [{ sku: "P017", cantidad: 1, precio: 950 }, { sku: "P018", cantidad: 2, precio: 890 }], total: 2730, canal: "online", estado: "completada" },
  

  { venta_id: "V016", cliente_id: "C016", fecha: ISODate("2026-09-05T16:15:00Z"), items: [{ sku: "P019", cantidad: 1, precio: 1250 }, { sku: "P020", cantidad: 1, precio: 24500 }, { sku: "P021", cantidad: 2, precio: 690 }], total: 27130, canal: "tienda", estado: "completada" },
  { venta_id: "V017", cliente_id: "C017", fecha: ISODate("2026-09-06T09:45:00Z"), items: [{ sku: "P022", cantidad: 3, precio: 620 }, { sku: "P023", cantidad: 2, precio: 420 }, { sku: "P024", cantidad: 1, precio: 7800 }], total: 10500, canal: "app", estado: "pendiente" },
  { venta_id: "V018", cliente_id: "C018", fecha: ISODate("2026-09-06T14:00:00Z"), items: [{ sku: "P025", cantidad: 1, precio: 350 }, { sku: "P026", cantidad: 1, precio: 540 }, { sku: "P027", cantidad: 1, precio: 2750 }, { sku: "P028", cantidad: 1, precio: 9800 }], total: 13440, canal: "online", estado: "completada" },


  { venta_id: "V019", cliente_id: "C019", fecha: ISODate("2026-09-07T10:20:00Z"), items: [{ sku: "P029", cantidad: 1, precio: 2100 }], total: 2100, canal: "tienda", estado: "completada" },
  { venta_id: "V020", cliente_id: "C020", fecha: ISODate("2026-09-07T11:50:00Z"), items: [{ sku: "P030", cantidad: 2, precio: 480 }], total: 960, canal: "app", estado: "cancelada" },
  { venta_id: "V021", cliente_id: "C021", fecha: ISODate("2026-09-08T08:10:00Z"), items: [{ sku: "P031", cantidad: 1, precio: 1350 }, { sku: "P032", cantidad: 1, precio: 6900 }], total: 8250, canal: "online", estado: "completada" },
  { venta_id: "V022", cliente_id: "C022", fecha: ISODate("2026-09-08T13:30:00Z"), items: [{ sku: "P033", cantidad: 1, precio: 3200 }], total: 3200, canal: "tienda", estado: "pendiente" },
  { venta_id: "V023", cliente_id: "C023", fecha: ISODate("2026-09-09T09:15:00Z"), items: [{ sku: "P034", cantidad: 1, precio: 720 }, { sku: "P035", cantidad: 2, precio: 490 }, { sku: "P036", cantidad: 1, precio: 15800 }], total: 17500, canal: "app", estado: "completada" },
  { venta_id: "V024", cliente_id: "C024", fecha: ISODate("2026-09-09T15:00:00Z"), items: [{ sku: "P037", cantidad: 1, precio: 1100 }], total: 1100, canal: "online", estado: "completada" },
  { venta_id: "V025", cliente_id: "C025", fecha: ISODate("2026-09-10T10:40:00Z"), items: [{ sku: "P038", cantidad: 2, precio: 680 }, { sku: "P039", cantidad: 1, precio: 650 }], total: 2010, canal: "tienda", estado: "completada" },
  { venta_id: "V026", cliente_id: "C026", fecha: ISODate("2026-09-10T12:00:00Z"), items: [{ sku: "P040", cantidad: 1, precio: 7100 }], total: 7100, canal: "app", estado: "cancelada" },
  { venta_id: "V027", cliente_id: "C027", fecha: ISODate("2026-09-11T14:20:00Z"), items: [{ sku: "P041", cantidad: 1, precio: 1450 }, { sku: "P042", cantidad: 3, precio: 220 }], total: 2110, canal: "online", estado: "completada" },
  { venta_id: "V028", cliente_id: "C028", fecha: ISODate("2026-09-11T16:50:00Z"), items: [{ sku: "P043", cantidad: 1, precio: 2850 }], total: 2850, canal: "tienda", estado: "completada" },
  { venta_id: "V029", cliente_id: "C029", fecha: ISODate("2026-09-12T11:00:00Z"), items: [{ sku: "P044", cantidad: 1, precio: 19800 }, { sku: "P045", cantidad: 1, precio: 980 }, { sku: "P046", cantidad: 1, precio: 850 }], total: 21630, canal: "app", estado: "pendiente" },
  { venta_id: "V030", cliente_id: "C030", fecha: ISODate("2026-09-12T17:15:00Z"), items: [{ sku: "P047", cantidad: 2, precio: 760 }], total: 1520, canal: "online", estado: "completada" },

  { venta_id: "V031", cliente_id: "C031", fecha: ISODate("2026-09-13T09:30:00Z"), items: [{ sku: "P048", cantidad: 1, precio: 14200 }], total: 14200, canal: "tienda", estado: "completada" },
  { venta_id: "V032", cliente_id: "C032", fecha: ISODate("2026-09-13T13:45:00Z"), items: [{ sku: "P050", cantidad: 1, precio: 1050 }, { sku: "P002", cantidad: 1, precio: 450 }], total: 1500, canal: "app", estado: "completada" },
  { venta_id: "V033", cliente_id: "C033", fecha: ISODate("2026-09-14T10:00:00Z"), items: [{ sku: "P003", cantidad: 2, precio: 1250 }], total: 2500, canal: "online", estado: "cancelada" },
  { venta_id: "V034", cliente_id: "C034", fecha: ISODate("2026-09-14T15:20:00Z"), items: [{ sku: "P005", cantidad: 1, precio: 1600 }, { sku: "P006", cantidad: 1, precio: 980 }, { sku: "P007", cantidad: 1, precio: 1450 }], total: 4030, canal: "tienda", estado: "completada" },
  { venta_id: "V035", cliente_id: "C035", fecha: ISODate("2026-09-15T11:10:00Z"), items: [{ sku: "P008", cantidad: 1, precio: 890 }], total: 890, canal: "app", estado: "completada" },
  { venta_id: "V036", cliente_id: "C036", fecha: ISODate("2026-09-15T16:00:00Z"), items: [{ sku: "P010", cantidad: 5, precio: 320 }], total: 1600, canal: "online", estado: "pendiente" },
  { venta_id: "V037", cliente_id: "C037", fecha: ISODate("2026-09-16T08:50:00Z"), items: [{ sku: "P011", cantidad: 1, precio: 1350 }, { sku: "P013", cantidad: 1, precio: 780 }], total: 2130, canal: "tienda", estado: "completada" },
  { venta_id: "V038", cliente_id: "C038", fecha: ISODate("2026-09-16T12:30:00Z"), items: [{ sku: "P014", cantidad: 2, precio: 1650 }], total: 3300, canal: "app", estado: "completada" },
  { venta_id: "V039", cliente_id: "C039", fecha: ISODate("2026-09-17T09:15:00Z"), items: [{ sku: "P015", cantidad: 1, precio: 1750 }, { sku: "P017", cantidad: 1, precio: 950 }, { sku: "P018", cantidad: 1, precio: 890 }], total: 3590, canal: "online", estado: "completada" },
  { venta_id: "V040", cliente_id: "C040", fecha: ISODate("2026-09-17T14:40:00Z"), items: [{ sku: "P021", cantidad: 2, precio: 690 }], total: 1380, canal: "tienda", estado: "cancelada" },
  { venta_id: "V041", cliente_id: "C041", fecha: ISODate("2026-09-18T10:05:00Z"), items: [{ sku: "P022", cantidad: 1, precio: 620 }], total: 620, canal: "app", estado: "completada" },
  { venta_id: "V042", cliente_id: "C042", fecha: ISODate("2026-09-18T16:20:00Z"), items: [{ sku: "P023", cantidad: 3, precio: 420 }, { sku: "P025", cantidad: 1, precio: 350 }], total: 1610, canal: "online", estado: "completada" },
  { venta_id: "V043", cliente_id: "C043", fecha: ISODate("2026-09-19T11:30:00Z"), items: [{ sku: "P026", cantidad: 1, precio: 540 }], total: 540, canal: "tienda", estado: "pendiente" },
  { venta_id: "V044", cliente_id: "C044", fecha: ISODate("2026-09-19T17:00:00Z"), items: [{ sku: "P027", cantidad: 1, precio: 2750 }, { sku: "P030", cantidad: 1, precio: 480 }, { sku: "P031", cantidad: 1, precio: 1350 }], total: 4580, canal: "app", estado: "completada" },
  { venta_id: "V045", cliente_id: "C045", fecha: ISODate("2026-09-20T09:00:00Z"), items: [{ sku: "P033", cantidad: 1, precio: 3200 }], total: 3200, canal: "online", estado: "completada" },
  { venta_id: "V046", cliente_id: "C046", fecha: ISODate("2026-09-20T13:10:00Z"), items: [{ sku: "P034", cantidad: 2, precio: 720 }], total: 1440, canal: "tienda", estado: "completada" },
  { venta_id: "V047", cliente_id: "C047", fecha: ISODate("2026-09-21T10:50:00Z"), items: [{ sku: "P035", cantidad: 4, precio: 490 }, { sku: "P037", cantidad: 1, precio: 1100 }], total: 3060, canal: "app", estado: "cancelada" },
  { venta_id: "V048", cliente_id: "C048", fecha: ISODate("2026-09-21T15:35:00Z"), items: [{ sku: "P038", cantidad: 1, precio: 680 }], total: 680, canal: "online", estado: "completada" },
  { venta_id: "V049", cliente_id: "C049", fecha: ISODate("2026-09-22T08:45:00Z"), items: [{ sku: "P039", cantidad: 2, precio: 650 }, { sku: "P041", cantidad: 1, precio: 1450 }, { sku: "P042", cantidad: 2, precio: 220 }], total: 3190, canal: "tienda", estado: "completada" },
  { venta_id: "V050", cliente_id: "C050", fecha: ISODate("2026-09-22T14:15:00Z"), items: [{ sku: "P043", cantidad: 1, precio: 2850 }], total: 2850, canal: "app", estado: "pendiente" },

 
  { venta_id: "V051", cliente_id: "C001", fecha: ISODate("2026-09-23T09:00:00Z"), items: [{ sku: "P045", cantidad: 1, precio: 980 }], total: 980, canal: "online", estado: "completada" },
  { venta_id: "V052", cliente_id: "C002", fecha: ISODate("2026-09-23T11:20:00Z"), items: [{ sku: "P046", cantidad: 1, precio: 850 }, { sku: "P047", cantidad: 1, precio: 760 }], total: 1610, canal: "tienda", estado: "completada" },
  { venta_id: "V053", cliente_id: "C003", fecha: ISODate("2026-09-23T16:00:00Z"), items: [{ sku: "P050", cantidad: 1, precio: 1050 }], total: 1050, canal: "app", estado: "completada" },
  { venta_id: "V054", cliente_id: "C004", fecha: ISODate("2026-09-24T10:30:00Z"), items: [{ sku: "P001", cantidad: 1, precio: 18500 }, { sku: "P002", cantidad: 1, precio: 450 }, { sku: "P003", cantidad: 1, precio: 1250 }], total: 20200, canal: "online", estado: "completada" },
  { venta_id: "V055", cliente_id: "C005", fecha: ISODate("2026-09-24T14:50:00Z"), items: [{ sku: "P004", cantidad: 1, precio: 6200 }], total: 6200, canal: "tienda", estado: "cancelada" },
  { venta_id: "V056", cliente_id: "C006", fecha: ISODate("2026-09-25T08:15:00Z"), items: [{ sku: "P005", cantidad: 2, precio: 1600 }], total: 3200, canal: "app", estado: "completada" },
  { venta_id: "V057", cliente_id: "C007", fecha: ISODate("2026-09-25T12:40:00Z"), items: [{ sku: "P006", cantidad: 1, precio: 980 }, { sku: "P007", cantidad: 2, precio: 1450 }], total: 3880, canal: "online", estado: "completada" },
  { venta_id: "V058", cliente_id: "C008", fecha: ISODate("2026-09-25T17:10:00Z"), items: [{ sku: "P008", cantidad: 1, precio: 890 }], total: 890, canal: "tienda", estado: "pendiente" },
  { venta_id: "V059", cliente_id: "C009", fecha: ISODate("2026-09-26T09:50:00Z"), items: [{ sku: "P009", cantidad: 1, precio: 5200 }, { sku: "P010", cantidad: 1, precio: 320 }, { sku: "P011", cantidad: 1, precio: 1350 }], total: 6870, canal: "app", estado: "completada" },
  { venta_id: "V060", cliente_id: "C010", fecha: ISODate("2026-09-26T13:25:00Z"), items: [{ sku: "P012", cantidad: 1, precio: 12500 }], total: 12500, canal: "online", estado: "completada" },
  { venta_id: "V061", cliente_id: "C011", fecha: ISODate("2026-09-26T18:00:00Z"), items: [{ sku: "P013", cantidad: 1, precio: 780 }, { sku: "P014", cantidad: 1, precio: 1650 }], total: 2430, canal: "tienda", estado: "completada" },
  { venta_id: "V062", cliente_id: "C012", fecha: ISODate("2026-09-27T10:10:00Z"), items: [{ sku: "P015", cantidad: 2, precio: 1750 }], total: 3500, canal: "app", estado: "cancelada" },
  { venta_id: "V063", cliente_id: "C013", fecha: ISODate("2026-09-27T14:35:00Z"), items: [{ sku: "P016", cantidad: 1, precio: 3900 }, { sku: "P017", cantidad: 1, precio: 950 }, { sku: "P018", cantidad: 2, precio: 890 }], total: 6630, canal: "online", estado: "completada" },
  { venta_id: "V064", cliente_id: "C014", fecha: ISODate("2026-09-28T09:00:00Z"), items: [{ sku: "P019", cantidad: 1, precio: 1250 }], total: 1250, canal: "tienda", estado: "completada" },
  { venta_id: "V065", cliente_id: "C015", fecha: ISODate("2026-09-28T11:45:00Z"), items: [{ sku: "P020", cantidad: 1, precio: 24500 }], total: 24500, canal: "app", estado: "pendiente" },
  { venta_id: "V066", cliente_id: "C016", fecha: ISODate("2026-09-28T15:30:00Z"), items: [{ sku: "P021", cantidad: 3, precio: 690 }, { sku: "P022", cantidad: 1, precio: 620 }], total: 2690, canal: "online", estado: "completada" },
  { venta_id: "V067", cliente_id: "C017", fecha: ISODate("2026-09-29T10:20:00Z"), items: [{ sku: "P023", cantidad: 2, precio: 420 }], total: 840, canal: "tienda", estado: "completada" },
  { venta_id: "V068", cliente_id: "C018", fecha: ISODate("2026-09-29T14:00:00Z"), items: [{ sku: "P024", cantidad: 1, precio: 7800 }, { sku: "P025", cantidad: 1, precio: 350 }, { sku: "P026", cantidad: 2, precio: 540 }], total: 9230, canal: "app", estado: "completada" },
  { venta_id: "V069", cliente_id: "C019", fecha: ISODate("2026-09-29T16:50:00Z"), items: [{ sku: "P027", cantidad: 1, precio: 2750 }], total: 2750, canal: "online", estado: "cancelada" },
  { venta_id: "V070", cliente_id: "C020", fecha: ISODate("2026-09-30T09:30:00Z"), items: [{ sku: "P028", cantidad: 1, precio: 9800 }, { sku: "P029", cantidad: 1, precio: 2100 }], total: 11900, canal: "tienda", estado: "completada" },
  { venta_id: "V071", cliente_id: "C021", fecha: ISODate("2026-09-30T12:15:00Z"), items: [{ sku: "P030", cantidad: 1, precio: 480 }], total: 480, canal: "app", estado: "completada" },
  { venta_id: "V072", cliente_id: "C022", fecha: ISODate("2026-09-30T17:00:00Z"), items: [{ sku: "P031", cantidad: 2, precio: 1350 }, { sku: "P032", cantidad: 1, precio: 6900 }, { sku: "P033", cantidad: 1, precio: 3200 }], total: 12800, canal: "online", estado: "pendiente" },
  { venta_id: "V073", cliente_id: "C023", fecha: ISODate("2026-10-01T08:40:00Z"), items: [{ sku: "P034", cantidad: 1, precio: 720 }], total: 720, canal: "tienda", estado: "completada" },
  { venta_id: "V074", cliente_id: "C024", fecha: ISODate("2026-10-01T11:50:00Z"), items: [{ sku: "P035", cantidad: 3, precio: 490 }, { sku: "P036", cantidad: 1, precio: 15800 }], total: 17270, canal: "app", estado: "completada" },
  { venta_id: "V075", cliente_id: "C025", fecha: ISODate("2026-10-01T15:10:00Z"), items: [{ sku: "P037", cantidad: 1, precio: 1100 }], total: 1100, canal: "online", estado: "completada" },

  
  { venta_id: "V076", cliente_id: "C026", fecha: ISODate("2026-10-02T09:10:00Z"), items: [{ sku: "P038", cantidad: 2, precio: 680 }, { sku: "P039", cantidad: 1, precio: 650 }], total: 2010, canal: "tienda", estado: "cancelada" },
  { venta_id: "V077", cliente_id: "C027", fecha: ISODate("2026-10-02T13:00:00Z"), items: [{ sku: "P040", cantidad: 1, precio: 7100 }, { sku: "P041", cantidad: 1, precio: 1450 }, { sku: "P042", cantidad: 2, precio: 220 }], total: 8990, canal: "app", estado: "completada" },
  { venta_id: "V078", cliente_id: "C028", fecha: ISODate("2026-10-02T16:30:00Z"), items: [{ sku: "P043", cantidad: 1, precio: 2850 }], total: 2850, canal: "online", estado: "completada" },
  { venta_id: "V079", cliente_id: "C029", fecha: ISODate("2026-10-03T10:00:00Z"), items: [{ sku: "P044", cantidad: 1, precio: 19800 }], total: 19800, canal: "tienda", estado: "pendiente" },
  { venta_id: "V080", cliente_id: "C030", fecha: ISODate("2026-10-03T12:20:00Z"), items: [{ sku: "P045", cantidad: 2, precio: 980 }, { sku: "P046", cantidad: 1, precio: 850 }], total: 2810, canal: "app", estado: "completada" },
  { venta_id: "V081", cliente_id: "C031", fecha: ISODate("2026-10-03T15:45:00Z"), items: [{ sku: "P047", cantidad: 1, precio: 760 }, { sku: "P048", cantidad: 1, precio: 14200 }, { sku: "P050", cantidad: 1, precio: 1050 }], total: 16010, canal: "online", estado: "completada" },
  { venta_id: "V082", cliente_id: "C032", fecha: ISODate("2026-10-04T08:30:00Z"), items: [{ sku: "P001", cantidad: 1, precio: 18500 }], total: 18500, canal: "tienda", estado: "completada" },
  { venta_id: "V083", cliente_id: "C033", fecha: ISODate("2026-10-04T10:15:00Z"), items: [{ sku: "P002", cantidad: 3, precio: 450 }], total: 1350, canal: "app", estado: "cancelada" },
  { venta_id: "V084", cliente_id: "C034", fecha: ISODate("2026-10-04T11:40:00Z"), items: [{ sku: "P003", cantidad: 1, precio: 1250 }, { sku: "P004", cantidad: 1, precio: 6200 }], total: 7450, canal: "online", estado: "completada" },
  { venta_id: "V085", cliente_id: "C035", fecha: ISODate("2026-10-04T13:00:00Z"), items: [{ sku: "P005", cantidad: 1, precio: 1600 }], total: 1600, canal: "tienda", estado: "completada" },
  { venta_id: "V086", cliente_id: "C036", fecha: ISODate("2026-10-04T14:10:00Z"), items: [{ sku: "P006", cantidad: 2, precio: 980 }, { sku: "P007", cantidad: 1, precio: 1450 }, { sku: "P008", cantidad: 1, precio: 890 }], total: 4300, canal: "app", estado: "completada" },
  { venta_id: "V087", cliente_id: "C037", fecha: ISODate("2026-10-04T15:00:00Z"), items: [{ sku: "P009", cantidad: 1, precio: 5200 }], total: 5200, canal: "online", estado: "pendiente" },
  { venta_id: "V088", cliente_id: "C038", fecha: ISODate("2026-10-04T15:45:00Z"), items: [{ sku: "P010", cantidad: 4, precio: 320 }, { sku: "P011", cantidad: 1, precio: 1350 }], total: 2630, canal: "tienda", estado: "completada" },
  { venta_id: "V089", cliente_id: "C039", fecha: ISODate("2026-10-04T16:30:00Z"), items: [{ sku: "P012", cantidad: 1, precio: 12500 }], total: 12500, canal: "app", estado: "completada" },
  { venta_id: "V090", cliente_id: "C040", fecha: ISODate("2026-10-04T17:15:00Z"), items: [{ sku: "P013", cantidad: 1, precio: 780 }, { sku: "P014", cantidad: 2, precio: 1650 }], total: 4080, canal: "online", estado: "completada" },
  { venta_id: "V091", cliente_id: "C041", fecha: ISODate("2026-10-04T18:00:00Z"), items: [{ sku: "P015", cantidad: 1, precio: 1750 }], total: 1750, canal: "tienda", estado: "cancelada" },
  { venta_id: "V092", cliente_id: "C042", fecha: ISODate("2026-10-04T18:30:00Z"), items: [{ sku: "P016", cantidad: 1, precio: 3900 }, { sku: "P017", cantidad: 1, precio: 950 }, { sku: "P018", cantidad: 1, precio: 890 }, { sku: "P019", cantidad: 1, precio: 1250 }], total: 6990, canal: "app", estado: "completada" },
  { venta_id: "V093", cliente_id: "C043", fecha: ISODate("2026-10-04T19:00:00Z"), items: [{ sku: "P020", cantidad: 1, precio: 24500 }], total: 24500, canal: "online", estado: "completada" },
  { venta_id: "V094", cliente_id: "C044", fecha: ISODate("2026-10-04T19:30:00Z"), items: [{ sku: "P021", cantidad: 1, precio: 690 }, { sku: "P022", cantidad: 2, precio: 620 }], total: 1930, canal: "tienda", estado: "completada" },
  { venta_id: "V095", cliente_id: "C045", fecha: ISODate("2026-10-04T20:00:00Z"), items: [{ sku: "P023", cantidad: 5, precio: 420 }], total: 2100, canal: "app", estado: "pendiente" },
  { venta_id: "V096", cliente_id: "C046", fecha: ISODate("2026-10-04T20:30:00Z"), items: [{ sku: "P024", cantidad: 1, precio: 7800 }, { sku: "P025", cantidad: 2, precio: 350 }], total: 8500, canal: "online", estado: "completada" },
  { venta_id: "V097", cliente_id: "C047", fecha: ISODate("2026-10-04T21:00:00Z"), items: [{ sku: "P026", cantidad: 1, precio: 540 }, { sku: "P027", cantidad: 1, precio: 2750 }, { sku: "P028", cantidad: 1, precio: 9800 }], total: 13090, canal: "tienda", estado: "completada" },
  { venta_id: "V098", cliente_id: "C048", fecha: ISODate("2026-10-04T21:30:00Z"), items: [{ sku: "P029", cantidad: 1, precio: 2100 }], total: 2100, canal: "app", estado: "completada" },
  { venta_id: "V099", cliente_id: "C049", fecha: ISODate("2026-10-04T22:00:00Z"), items: [{ sku: "P030", cantidad: 2, precio: 480 }, { sku: "P031", cantidad: 1, precio: 1350 }], total: 2310, canal: "online", estado: "completada" },
  { venta_id: "V100", cliente_id: "C050", fecha: ISODate("2026-10-04T22:30:00Z"), items: [{ sku: "P032", cantidad: 1, precio: 6900 }], total: 6900, canal: "tienda", estado: "completada" }
]);

db.ventas.find().limit(10)

db.ventas.find(
    {
        cliente_id:"C001"
    })

db.ventas.find(
    {
        "items.sku":"P015"
    }
)

db.ventas.find(
    {
        canal:"online"
    }
)

db.ventas.find(
    {
        canal:"app"
    }
)

db.ventas.find(
    {
        estado:"completada"
    }
)

db.ventas.find(
    {
        estado:"cancelada"
    },

    {
        _id:0,
        venta_id:1,
        cliente_id:1,
        fecha:1,
        total:1,
        estado:1
    }
)

db.ventas.find(
    {},
    {
        _id:0,
        venta_id:1,
        cliente_id:1,
        fecha:1,
        total:1
    }
).sort({total:-1})

db.ventas.find().sort({total:-1}).limit(10)

db.ventas.find().skip(0).limit(10)
db.ventas.find().skip(10).limit(10)
db.ventas.find().skip(20).limit(10)

db.clientes.find(
    {
        "direccion.ciudad":"Los Mochis"
    }
)

db.clientes.find(
    {
        preferencias:"tecnologia"
    },
    {
        _id:0,
        cliente_id:1,
        nombre:1,
        preferencias1
    }
)

db.ventas.findOne({
    items:{$size:3}
}
)

db.ventas.find(
    {venta_id:"V005"},
    {
        _id:0,
        venta_id:1,
        cliente_id:1
    }
)

show collections

db.productos.countDocuments()
db.clientes.countDocuments()
db.proveedores.countDocuments()
db.ventas.countDocuments()
