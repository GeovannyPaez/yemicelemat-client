
const keysGenerales={
    valor:'valorPagar',
    comicion:'comicion',
    fecha:'date',
    tipoRecibo: 'TypeRecibo'
}
const keysCategories={
    consignaciones: 'Consiganciones',
    recargas:'Recargas',
    giros: 'Giros',
    venezuela:'Venezuela'
}
const keysRecargas={
    tipoRecarga:'TypesRecargas',
    pines:{
        numCelular:'numCelular',
        email:'email',
        name:'name',
        pinEntidad: 'pinEntidad'
    },
    idFreefire: 'idFreefire',
    recargasCelular:{
        numCelular:'numCelular',
        operador:'operador'
    }
}
const keyConsignaciones={
    numCuenta:'numCuenta',
    name:'name',
    banco:'consignacionBanco'
}
const keysGiros={
    nameRemitente:'nameRemitente',
    ccRemitente:'ccRemitente',
    nameReceptor:'nameReceptor',
    ccReceptor:'ccReceptor',
    destino:'destinoGiro',
    entidad:'entidadGiro',
};
const keysTranferenciaVenezuela={
    numCuenta:'numCuenta',
    tipoCuenta:'typeCuenta',
    nombreBanco:'nameBanco',
    tipoDocumento:'typeDocument'
}
const buscarPorID=(id,targets)=>{
    const target=targets.find((r)=>r.id===id);
    return target?.value
};
const returnRecibo=(targets)=>{
    const typeRecibo=buscarPorID(keysGenerales.tipoRecibo,targets);
    const reciboGeneral= {
        tipoRecibo:typeRecibo,
        estado:false,
        valor:buscarPorID(keysGenerales.valor,targets),
        comicion:buscarPorID(keysGenerales.comicion,targets),
        fecha:buscarPorID(keysGenerales.fecha,targets),
    }
    if(typeRecibo==='Recargas'){
        return{
            ...reciboGeneral,
            ...returnReciboRecargas(targets),
        
        }
    }else if(typeRecibo==='Consignaciones'){
        return{
            ...reciboGeneral,
            ...returnReciboConsignaciones(targets),
        }
    }else if(typeRecibo==='Giros'){
        return{
            ...reciboGeneral,
            ...returnReciboGiros(targets),
    
        }
    }else{
        return{
            ...reciboGeneral,
            ...returnReciboVenezuela(targets),
        }
    }
}

const returnReciboRecargas=(targets)=>{
    const typeRecarga=buscarPorID(keysRecargas.tipoRecarga,targets);
    if(typeRecarga=='Recargas Celular'){
        return{
            tipoRecarga:typeRecarga,
            numCelular:buscarPorID(keysRecargas.recargasCelular.numCelular,targets),
            operador:buscarPorID(keysRecargas.recargasCelular.operador,targets),
        }
    }else if(typeRecarga=='FreeFire'){
        return{
            tipoRecarga:typeRecarga,
            idFreefire:buscarPorID(keysRecargas.idFreefire,targets),
        }
    }else{
        return{
            tipoRecarga:typeRecarga,
            numCelular:buscarPorID(keysRecargas.pines.numCelular,targets),
            name:buscarPorID(keysRecargas.pines.name,targets),
            email: buscarPorID(keysRecargas.pines.email,targets),
            entidad:buscarPorID(keysRecargas.pines.pinEntidad,targets)
        }
    }
}       

const returnReciboConsignaciones=(targets)=>{
    return{
        numCuenta:buscarPorID(keyConsignaciones.numCuenta,targets),
        nombre:buscarPorID(keyConsignaciones.name,targets),
        banco:buscarPorID(keyConsignaciones.banco,targets)
    }
}
const returnReciboGiros=(targets)=>{
    return{
        nombreRemitente:buscarPorID(keysGiros.nameRemitente,targets),
        nombreReceptor:buscarPorID(keysGiros.nameReceptor,targets),
        ccRemitente:buscarPorID(keysGiros.ccRemitente,targets),
        ccReceptor:buscarPorID(keysGiros.ccReceptor,targets),
        destino:buscarPorID(keysGiros.destino,targets),
        entidad:buscarPorID(keysGiros.entidad,targets),
    }
}
const returnReciboVenezuela=(targets)=>{
    return{
        ...returnReciboGiros(targets),
        tipoDocumento:buscarPorID(keysTranferenciaVenezuela.tipoDocumento,targets),
        nombreBanco: buscarPorID(keysTranferenciaVenezuela.nombreBanco,targets),
        tipoCuenta:buscarPorID(keysTranferenciaVenezuela.tipoCuenta,targets),
        numCuenta:buscarPorID(keysTranferenciaVenezuela.numCuenta,targets),
    }
}

export {returnRecibo}