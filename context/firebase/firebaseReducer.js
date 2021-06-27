import { OBTENER_PRODUCTOS_EXITO } from '../../types'
import { OBTENER_PROMOCIONES_EXITO } from '../../types'
import { OBTENER_ACTIVIDADES_EXITO } from '../../types'

export default (state,action)=>{
    switch(action.type) {
        case OBTENER_PRODUCTOS_EXITO:
            return{
                ...state,
                habitacion:action.payload
            }
        case OBTENER_PROMOCIONES_EXITO:
            return {
                ...state,
                promocion:action.payload
            }
        case OBTENER_ACTIVIDADES_EXITO:
            return{
                ...state,
                actividad:action.payload
            }
        default:
            return state;
    }
}