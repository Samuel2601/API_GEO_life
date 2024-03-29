const express = require('express');
const router = express.Router();
const auth = require('../middlewares/authenticate'); // Importar middleware de autenticación
const Controller = require('../controllers/RegistroModel'); // Importar controlador
var multiparty = require('connect-multiparty');
var path = multiparty({uploadDir: './uploads/incidentes'});

// Rutas para registrar elementos en diferentes modelos
router.post('/registrar_usuario', auth.auth, Controller.registrarUsuario);
router.post('/registrar_actividad_proyecto', auth.auth, Controller.registrarActividadProyecto);
router.post('/registrar_incidente_denuncia',[auth.auth,path], Controller.registrarIncidenteDenuncia);
router.post('/registrar_categoria', auth.auth, Controller.registrarCategoria);
router.post('/registrar_subcategoria', auth.auth, Controller.registrarSubcategoria);
router.post('/registrar_encargado_categoria', auth.auth, Controller.registrarEncargadoCategoria);
router.post('/registrar_rol_usuario', auth.auth, Controller.registrarRolUsuario);
router.post('/registrar_estado_incidente', auth.auth, Controller.registrarEstadoIncidente);
router.post('/registrar_estado_actividad_proyecto', auth.auth, Controller.registrarEstadoActividadProyecto);
router.post('/registrar_tipo_actividad_proyecto', auth.auth, Controller.registrarTipoActividadProyecto);
router.post('/registrar_direccion_geo', auth.auth, Controller.registrarDireccionGeo);

module.exports = router;
