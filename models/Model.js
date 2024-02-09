'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Definición del esquema para el modelo de Usuario
var UsuarioSchema = Schema({
    cedula: { type: String, required: true, unique: true },
    nombres: { type: String, required: true },
    telefono: { type: String, required: true },
    rol_user: { type: Schema.Types.ObjectId, ref: 'rol_user', required: true },
    correo: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    estado: { type: String, default: 'On' }
});

// Definición del esquema para el modelo de Actividad_proyecto
var ActividadProyectoSchema = Schema({
    categoria: { type: Schema.Types.ObjectId, ref: 'categoria', required: true },
    descripcion: { type: String, required: true },
    encargado: { type: Schema.Types.ObjectId, ref: 'usuario', required: true },
    direccion_geo: { type: Schema.Types.ObjectId, ref: 'direccion_geo' },
    estado: { type: Schema.Types.ObjectId, ref: 'estado_actividad_proyecto' },
    tipo: { type: Schema.Types.ObjectId, ref: 'tipo_actividad_proyecto' },
    fecha_evento: { type: Date },
    observacion: { type: String }
});

// Definición del esquema para el modelo de Incidentes_denuncia
var IncidentesDenunciaSchema = Schema({
    categoria: { type: Schema.Types.ObjectId, ref: 'categoria' },
    subcategoria: { type: Schema.Types.ObjectId, ref: 'subcategoria' },
    direccion_geo: { type: Schema.Types.ObjectId, ref: 'direccion_geo' },
    ciudadano: { type: Schema.Types.ObjectId, ref: 'usuario' },
    estado: { type: Schema.Types.ObjectId, ref: 'estado_incidente' },
    respuesta: { type: String },
    descripcion: { type: String, required: true },
    encargado: { type: Schema.Types.ObjectId, ref: 'usuario' },
    foto: { type: String }
});

// Definición del esquema para el modelo de Categoria
var CategoriaSchema = Schema({
    Nombre: { type: String },
    Descripcion: { type: String }
});

// Definición del esquema para el modelo de Subcategoria
var SubcategoriaSchema = Schema({
    categoria: { type: Schema.Types.ObjectId, ref: 'categoria' },
    nombre: { type: String },
    descripcion: { type: String }
});

// Definición del esquema para el modelo de Encargado_categoria
var EncargadoCategoriaSchema = Schema({
    encargado: { type: Schema.Types.ObjectId, ref: 'usuario' },
    categoria: { type: Schema.Types.ObjectId, ref: 'categoria' }
});

// Definición del esquema para el modelo de Rol_user
var RolUserSchema = Schema({
    nombre: { type: String },
    orden: { type: Number,unique: true}
});

// Definición del esquema para el modelo de Estado_incidente
var EstadoIncidenteSchema = Schema({
    nombre: { type: String }
});

// Definición del esquema para el modelo de Estado_actividad_proyecto
var EstadoActividadProyectoSchema = Schema({
    nombre: { type: String }
});

// Definición del esquema para el modelo de Tipo_actividad_proyecto
var TipoActividadProyectoSchema = Schema({
    nombre: { type: String }
});

// Definición del esquema para el modelo de Direccion_geo
var DireccionGeoSchema = Schema({
    nombre: { type: String },
    latitud: { type: Number },
    longitud: { type: Number }
});

// Exportar los esquemas
module.exports = {
    Usuario: mongoose.model('usuario', UsuarioSchema),
    Actividad_proyecto: mongoose.model('actividad_proyecto', ActividadProyectoSchema),
    Incidentes_denuncia: mongoose.model('incidentes_denuncia', IncidentesDenunciaSchema),
    Categoria: mongoose.model('categoria', CategoriaSchema),
    Subcategoria: mongoose.model('subcategoria', SubcategoriaSchema),
    Encargado_categoria: mongoose.model('encargado_categoria', EncargadoCategoriaSchema),
    Rol_user: mongoose.model('rol_user', RolUserSchema),
    Estado_incidente: mongoose.model('estado_incidente', EstadoIncidenteSchema),
    Estado_actividad_proyecto: mongoose.model('estado_actividad_proyecto', EstadoActividadProyectoSchema),
    Tipo_actividad_proyecto: mongoose.model('tipo_actividad_proyecto', TipoActividadProyectoSchema),
    Direccion_geo: mongoose.model('direccion_geo', DireccionGeoSchema)
};
