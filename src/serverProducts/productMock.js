const productos = [
    {
        id: 1,
        nombre: 'Sansevieria',
        cantidad: 10,
        categoryId: 'Plantas de interior',
        precio: 3000,
        img:"https://www.elmueble.com/medio/2018/12/18/sansevieria_c00b6264_674x674.jpg",
    },
    {
        id: 2,
        nombre: 'Lazo de amor',
        cantidad: 3,
        categoryId: 'Plantas de exterior',
        precio: 850,
        img: "https://www.tiendafacil.com.ar/tienda/uploads/600x600/1596218994_7b89ad1f.jpg",
    },
    {
        id: 3,
        nombre: 'Helecho',
        cantidad: 5,
        categoryId: 'Plantas de exterior',
        precio: 2500,
        img: "https://cdn0.ecologiaverde.com/es/posts/6/2/3/cultivo_y_cuidados_de_los_helechos_1326_orig.jpg",
    },
    {
        id: 4,
        nombre: 'Ficus benjamina',
        cantidad: 8,
        categoryId: 'Plantas de interior',
        precio:3600,
        img: "https://www.parati.com.ar/wp-content/uploads/2021/08/FICUS-BENJAMINA-3.jpeg.webp",
    },
    {
        id: 5,
        nombre: 'Cactus',
        cantidad: 12,
        categoryId: 'Plantas de interior',
        precio: 700,
        img: "https://res.cloudinary.com/fronda/image/upload/f_auto%2Cq_auto/productos/fol/10089/10089588_1.jpg?12-06-2023",
    },
    {
        id: 6,
        nombre: 'Guantes jardinería',
        cantidad: 15,
        categoryId: 'Cuidado',
        precio: 800,
        img: "https://http2.mlstatic.com/D_NQ_NP_879005-MLA51089741275_082022-O.webp",
    },
    {
        id: 7,
        nombre: 'Regadera',
        cantidad: 5,
        categoryId: 'Cuidado',
        precio:1500,
        img: "https://http2.mlstatic.com/D_NQ_NP_633572-MLA44716402528_012021-O.webp",
    },
];

export const getProducts = () => {
    return new Promise((resolve, reject) => {
        if (productos.length === 0) {
        reject(new Error('no hay productos'));
        }
        setTimeout(() => {
        resolve(productos);
        }, 2000);
    });
};