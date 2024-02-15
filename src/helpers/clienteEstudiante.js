import axios from "axios"

//Funcion de la logica y funcion de la fachada.
//Cada fachada debe llevar export
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
const insertar = async (body) => {
    //post(url capacidad , body)
    //r-respuesta de axios
    //await implicito
    const data = axios.post(`http://localhost:8080/API/v1.0/Matricula/estudiantes`, body).then(r => r.data);
};
export const insertarFachada = async (body) => {
    return await insertar(body);
}


//export default nombreMetodoFuncionFachada;
