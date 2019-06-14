export function PostData(type, userData){

    let BaseUrl = "https://miapp-taller6.herokuapp.com/usuarios/";
    return fetch(BaseUrl+type,{
            method: 'POST',
            body: JSON.stringify(userData),
            headers: {
                'Content-Type': 'application/json'
                }
        })
        
}