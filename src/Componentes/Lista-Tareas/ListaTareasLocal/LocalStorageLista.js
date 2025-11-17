export const guardarEnLocal = (clave,datos) => {
    try{
        localStorage.setItem(clave,JSON.stringify(datos));
        console.log("Se guardo en localStorage",datos);
        return true;
    }catch(error){
        console.log("error al guardar en localStorage");
        return false;
    }
}