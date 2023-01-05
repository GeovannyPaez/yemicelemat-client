import React from 'react';
import { Celular } from './Categories/Celular';
import { Consignaciones } from './Categories/Consignaciones'
import Freefire from './Categories/Freefire';
import {Giros} from './Categories/Giros'
import Pines from './Categories/Pines';

import { TransferenciaVenezuela } from './Categories/TransferenciasVenezuela'
export default function Formulario({type}) {
    return (
        <>
            {type==='Celular'&&<Celular/>}
            {type==='Pines'&&<Pines/>}
            {type==='Freefire'&&<Freefire/>}
            {type==='Consignaciones'&&<Consignaciones/>}
            {type==='Giros'&&<Giros/>}
            {type==='Venezuela'&&<TransferenciaVenezuela/>}
        </>
    )
}