
export const USER_KEY = 'auth-ff-enterprise';
export const TOKEN_KEY = 'token-ff-enterprise';
export const TOKEN_TEROS_KEY = 'token-teros-ff-enterprise';
export const SESSION_TEROS_KEY = 'session-teros-ff-enterprise';
export const PERSONALIZACION_KEY = 'personalizacion-ff-enterprise'

export const VIEW_LABELS = {
    CONFIRM: 'Confirmar',
    VOLVER: 'Volver'
}

export const getData = function (key: any) {
    var data = localStorage.getItem(key);
    if (data == null) {
        return null
    }
    return JSON.parse(data);

}
export const removeData = function (key: any) {
    localStorage.removeItem(key);
}
export const setData = function (key: any, data: any) {
    try {
        var data_json = JSON.stringify(data);
        localStorage.setItem(key, data_json)
    } catch (e) {
        localStorage.setItem(key, data)
    }

}

export const getInitial = function (string1: any, string2: any) {
    return string1[0] + string2[0];
}


export const getMessageError = function (objet: any) {

}

export const isValidQuantity = function (x: any, salto_cantidad: any): boolean {
    // Convertir x a un número, reemplazando comas por puntos si es un string.
    const valorNumericoX = typeof x === 'string' ? parseFloat(x.replace(',', '.')) : x;
    // Asegurarse de que salto_cantidad sea un número.
    const valorSaltoCantidad = typeof salto_cantidad === 'string' ? parseFloat(salto_cantidad.replace(',', '.')) : salto_cantidad;

    // Si salto_cantidad es 1, verificar que x sea un entero.
    if (valorSaltoCantidad === "1") {
        return Number.isInteger(valorNumericoX);
    }
    // Para otros valores de salto_cantidad, verificar que x sea divisible por salto_cantidad.
    else {
        return valorNumericoX % valorSaltoCantidad === 0;
    }
}

export const nextValidValueAbove = function (x: any) {
    x = "" + x;
    var cantidad: any = parseFloat(x.replace(',', '.'));
    return Math.ceil(cantidad / 0.25) * 0.25;
}

export const nextValidValueBelow = function (x: any) {
    x = "" + x;
    var cantidad: any = parseFloat(x.replace(',', '.'));


    return Math.floor(cantidad / 0.25) * 0.25;
}

export const transformarDatos = function (data: any[]): any[] {
    return data.map((item: any) => ({
        id: parseInt(item.cod_articulo),
        categoria: {
            id: item.cod_categoria,
            nombre: item.nom_tipo_insumo || ''
        },
        unidad: {
            nombre: item.nom_unidad || ''
        },
        sku: item.cod_articulo || '',
        nombre: item.nom_articulo || '',
        precio: parseFloat(item.costo_ppp_uni),
        url: '',
        salto_cantidad: item.tipo_redondeo || ''
    }));
}


export const links = [{
    "title": "Inicio",
    "url": "/"
}, {
    "title": "Categorias",
    "url": "/categorias"
}, {
    "title": "Contacto",
    "url": "/contacto"
}, {
    "title": "Nuestra producción",
    "url": "/nuestra-produccion-hidroponica"
}
]
