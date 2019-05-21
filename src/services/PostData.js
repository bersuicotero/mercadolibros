export function PostData(type, userData){

    let BaseUrl = "https://miapp-taller6.herokuapp.com/usuarios/";
    return new Promise((resolve, reject) => {
        fetch(BaseUrl+type,{
            method: 'POST',
            body: JSON.stringify(userData),
            headers: {
                'Content-Type': 'application/json'
                }
        })
        .then((response) => response.json())
        .then((responseJSON) => {
            resolve(responseJSON);
        })
        .catch((error)=>{
            reject(error);
        });
    });
}