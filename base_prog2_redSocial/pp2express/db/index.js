/*objeto literal (index) con propiedades: (usarios,posteos y  comentarios)*/

const index = {

    usuarios: [
        {
            id: 1,
            email:'michaelscott@gmail.com',
            contrasenia: 'scott1234',
            foto:'/public/images/scott.jpg',
            fecha:'1988-06-22',
            dni:'34683203',
        },
        {
            id: 2,
            email:'catadiaz@gmail.com',
            contrasenia: 'diaz1234',
            foto:'/public/images/diaz.jpg',
            fecha:'1978-06-12',
            dni:'89753203',
        },
        {
            id: 3,
            email:'gueerrerom@gmail.com',
            contrasenia: 'guerrerosss',
            foto:'/public/images/guerrero.jpg',
            fecha:'1999-06-13',
            dni:'44362014',
        },
        {
            id: 4,
            email:'wos@gmail.com',
            contrasenia: 'wos234',
            foto:'/public/images/wos.jpg',
            fecha:'2005-07-12',
            dni:'09873203',
        },
        {
            id: 5,
            email:'dariobenedetto@gmail.com',
            contrasenia: 'dario1234',
            foto:'/public/images/benedetto.jpg',
            fecha:'1972-09-02',
            dni:'78353203',
        },
    ],


    posteos: [
        {
            id:1,
            id_usuario:1,
            nombre_imagen: '/img/Michael/mc.png',
            texto_imagen: 'Michael',
        },
        {
            id:2,
            id_usuario:2,
            nombre_imagen: '/img/catadiaz/mc.png',
            texto_imagen: 'cata diaz',
        },
        {
            id:3,
            id_usuario:3,
            nombre_imagen: '/img/guerrero/mc.png',
            texto_imagen: 'guerrero',
        }, 
        {
            id:4,
            id_usuario:4,
            nombre_imagen: '/img/wos/mc.png',
            texto_imagen: 'wos',
        },
        {
            id:5,
            id_usuario:5,
            nombre_imagen: '/img/dariobenedetto/mc.png',
            texto_imagen: 'benedetto',
        },
        {
            id:1,
            id_usuario:1,
            nombre_imagen: '/img//catadiaz.png',
            texto_imagen: 'diaz',
        },
        {
            id:2,
            id_usuario:2,
            nombre_imagen: '/img/guerrero/mc.png',
            texto_imagen: 'miguelguerrero',
        },
        {
            id:3,
            id_usuario:3,
            nombre_imagen: '/img/guerrero/mc.png',
            texto_imagen: 'miguelguerrero',
        },
        {
            id:4,
            id_usuario:4,
            nombre_imagen: '/img/michaelscott/mc.png',
            texto_imagen: 'michael',
        },
        {
            id:5,
            id_usuario:5,
            nombre_imagen: '/img/benedetto/mc.png',
            texto_imagen: 'dariobenedetto',
        },
    ],


    comentarios: [
        {   
            id: 1,
            id_posteo: 1,
            id_usuario:1,
            texto_comentario:'Me gusta tu foto', 
        },

        {   
            id: 2,
            id_posteo: 2,
            id_usuario:2,
            texto_comentario:'hola', 
        },

        {   
            id: 3,
            id_posteo: 3,
            id_usuario:3,
            texto_comentario:'buena foto', 
        },

        {   
        id: 4,
        id_posteo: 4,
        id_usuario:4,
        texto_comentario:'cuando nos vemos', 
        },
    ]
}

