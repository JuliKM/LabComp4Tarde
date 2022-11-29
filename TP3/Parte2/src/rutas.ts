import {Router} from 'express'
import {getEmpleados, getEmpladoXID as getEmpleadoXID, altaEmpleado, actualizarEmpleado, bajaEmpleado} from './controlador/controlador'

const router = Router();

router.get('/test', (requ, resp) => resp.send('HOLA MUNDO'));

router.get('/empleados', getEmpleados);
router.get('/empleados/:legajo', getEmpleadoXID);
router.post('/insert', altaEmpleado);//insert
router.put('/update', actualizarEmpleado);//update
router.delete('/delete/:legajo', bajaEmpleado);//eliminar

export default router;