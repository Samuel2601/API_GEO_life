var mongoose = require('mongoose');

const Model = require('../models/Model');

// Función para registrar un nuevo usuario
const registrarUsuario = async function (req, res) {
	if (req.user) {
		try {
			var data = req.body;
			var admin_arr = await Model.Usuario.find({ email: data.email });

			var admin_arr2 = await Model.Usuario.find({ dni: data.dni });

			if (admin_arr.length == 0 && admin_arr2.length == 0) {
				try {
					bcrypt.hash(data.password, null, null, async function (err, hash) {
						if (hash) {
							data.password = hash;
							data.estado = 'On';
							await Model.Usuario.create(data);
                            res.status(200).send({ message: 'Registrado con exito' });
						} else {
							res.status(200).send({ message: 'ErrorServer' });
						}
					});
				} catch (error) {
					res.status(200).send({ message: 'Algo salió mal' });
				}
			} else {
				res.status(200).send({ message: 'El correo y/o la cedula ya existe en la base de datos' });
			}
		} catch (error) {
			res.status(200).send({ message: 'Algo salió mal' });
		}
	} else {
		res.status(500).send({ message: 'NoAccess' });
	}
};

// Función para registrar una nueva actividad de proyecto
const registrarActividadProyecto = async function (req, res) {
    if (req.user) {
        try {
            let nuevaActividad = await Model.Actividad_proyecto.create(req.body);
            res.status(200).send({ message: 'Actividad de proyecto registrada correctamente', data: nuevaActividad });
        } catch (error) {
            res.status(500).send({ message: 'Error al registrar la actividad de proyecto', error: error });
        }
    } else {
        res.status(500).send({ message: 'Acceso no permitido' });
    }
};

// Función para registrar un nuevo incidente o denuncia
const registrarIncidenteDenuncia = async function (req, res) {
    if (req.user) {
        try {
            let nuevoIncidente = await Model.Incidentes_denuncia.create(req.body);
            res.status(200).send({ message: 'Incidente/denuncia registrado correctamente', data: nuevoIncidente });
        } catch (error) {
            res.status(500).send({ message: 'Error al registrar el incidente/denuncia', error: error });
        }
    } else {
        res.status(500).send({ message: 'Acceso no permitido' });
    }
};

// Función para registrar una nueva categoría
const registrarCategoria = async function (req, res) {
    if (req.user) {
        try {
            let nuevaCategoria = await Model.Categoria.create(req.body);
            res.status(200).send({ message: 'Categoría registrada correctamente', data: nuevaCategoria });
        } catch (error) {
            res.status(500).send({ message: 'Error al registrar la categoría', error: error });
        }
    } else {
        res.status(500).send({ message: 'Acceso no permitido' });
    }
};

// Función para registrar una nueva subcategoría
const registrarSubcategoria = async function (req, res) {
    if (req.user) {
        try {
            let nuevaSubcategoria = await Model.Subcategoria.create(req.body);
            res.status(200).send({ message: 'Subcategoría registrada correctamente', data: nuevaSubcategoria });
        } catch (error) {
            res.status(500).send({ message: 'Error al registrar la subcategoría', error: error });
        }
    } else {
        res.status(500).send({ message: 'Acceso no permitido' });
    }
};

// Función para registrar un nuevo encargado de categoría
const registrarEncargadoCategoria = async function (req, res) {
    if (req.user) {
        try {
            let nuevoEncargado = await Model.Encargado_categoria.create(req.body);
            res.status(200).send({ message: 'Encargado de categoría registrado correctamente', data: nuevoEncargado });
        } catch (error) {
            res.status(500).send({ message: 'Error al registrar el encargado de categoría', error: error });
        }
    } else {
        res.status(500).send({ message: 'Acceso no permitido' });
    }
};

// Función para registrar un nuevo rol de usuario
const registrarRolUsuario = async function (req, res) {
    if (req.user) {
        try {
            let nuevoRol = await Model.Rol_user.create(req.body);
            res.status(200).send({ message: 'Rol de usuario registrado correctamente', data: nuevoRol });
        } catch (error) {
            res.status(500).send({ message: 'Error al registrar el rol de usuario', error: error });
        }
    } else {
        res.status(500).send({ message: 'Acceso no permitido' });
    }
};

// Función para registrar un nuevo estado de incidente
const registrarEstadoIncidente = async function (req, res) {
    if (req.user) {
        try {
            let nuevoEstado = await Model.Estado_incidente.create(req.body);
            res.status(200).send({ message: 'Estado de incidente registrado correctamente', data: nuevoEstado });
        } catch (error) {
            res.status(500).send({ message: 'Error al registrar el estado de incidente', error: error });
        }
    } else {
        res.status(500).send({ message: 'Acceso no permitido' });
    }
};

// Función para registrar un nuevo estado de actividad de proyecto
const registrarEstadoActividadProyecto = async function (req, res) {
    if (req.user) {
        try {
            let nuevoEstado = await Model.Estado_actividad_proyecto.create(req.body);
            res.status(200).send({ message: 'Estado de actividad de proyecto registrado correctamente', data: nuevoEstado });
        } catch (error) {
            res.status(500).send({ message: 'Error al registrar el estado de actividad de proyecto', error: error });
        }
    } else {
        res.status(500).send({ message: 'Acceso no permitido' });
    }
};

// Función para registrar un nuevo tipo de actividad de proyecto
const registrarTipoActividadProyecto = async function (req, res) {
    if (req.user) {
        try {
            let nuevoTipo = await Model.Tipo_actividad_proyecto.create(req.body);
            res.status(200).send({ message: 'Tipo de actividad de proyecto registrado correctamente', data: nuevoTipo });
        } catch (error) {
            res.status(500).send({ message: 'Error al registrar el tipo de actividad de proyecto', error: error });
        }
    } else {
        res.status(500).send({ message: 'Acceso no permitido' });
    }
};

// Función para registrar una nueva dirección geográfica
const registrarDireccionGeo = async function (req, res) {
    if (req.user) {
        try {
            let nuevaDireccion = await Model.Direccion_geo.create(req.body);
            res.status(200).send({ message: 'Dirección geográfica registrada correctamente', data: nuevaDireccion });
        } catch (error) {
            res.status(500).send({ message: 'Error al registrar la dirección geográfica', error: error });
        }
    } else {
        res.status(500).send({ message: 'Acceso no permitido' });
    }
};

module.exports = {
    registrarUsuario,
    registrarActividadProyecto,
    registrarIncidenteDenuncia,
    registrarCategoria,
    registrarSubcategoria,
    registrarEncargadoCategoria,
    registrarRolUsuario,
    registrarEstadoIncidente,
    registrarEstadoActividadProyecto,
    registrarTipoActividadProyecto,
    registrarDireccionGeo
};
