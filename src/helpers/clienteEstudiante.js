import axios from "axios"

//Funcion de la logica y funcion de la fachada.
//Cada fachada debe llevar export
//R
const consultarEstudianteId = async (id) => {
    //async escala hasta la fachada
    //r =>r.data retorna la respuesta del consumo
    //await esta implicito gracias a axios (espera hasta obtener una respuesta)
    const data = axios.get(`http://localhost:8080/API/v1.0/Matricula/estudiantes/${id}`).then(r => r.data);
    console.log(data)
    return data
};
export const consultarEstudianteIdFachada = async (id) => {
    return await consultarEstudianteId(id);
};
//C
const insertar = async (body) => {
    //post(url capacidad , body)
    //r-respuesta de axios
    //await implicito
    const data = axios.post(`http://localhost:8080/API/v1.0/Matricula/estudiantes`, body).then(r => r.data);
};
export const insertarFachada = async (body) => {
    return await insertar(body);
}

//U
const actualizar = async (id, body) => {
    const data = axios.put(`http://localhost:8080/API/v1.0/Matricula/estudiantes/${id}`,body).then(r => r.data);
    console.log(data)
}
export const actualizarFachada = async (id,body) => {
    return await actualizar(id,body)
}

//D
const eliminar = async (id) => {
    const data = axios.delete(`http://localhost:8080/API/v1.0/Matricula/estudiantes/${id}`).then(r => r.data);
}
export const eliminarFachada = async (id) => {
    return await eliminar(id)
}


//export default nombreMetodoFuncionFachada;
