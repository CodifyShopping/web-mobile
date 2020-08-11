var url = 'http://35.229.106.56:3000/returnProdCli';
var data = {id: '5f31ccdceb00624d847d8d16'};

const clothesElement = document.querySelector('.clothespa');
/* const tallesElement = document.querySelector('.talles'); */


async function getClothes(){

    clothesElement.innerHTML = '';
/*     tallesElement.innerHTML = ''; */

    fetch(url,
    {
         method: 'POST', 
        body: JSON.stringify(data), 
        headers:{
            'Content-Type': 'application/json',
            'token': "eyJhbGciOiJIUzI1NiJ9.TmV3QmFsYW5jZQ.7gliIor_gEQzNe-1DRK6bgpT3AfKuTIg-f-F1l-Z64Y"
        } 
    }
    )
    .then((response) => response.json())
    .then((result) => {
        console.log('Success:', result);
        image = "data:image/png;base64," + result.Photo;
        clothesElement.innerHTML += `
            <tr>
                <td align="center">
                    <img src=${image} alt="Remera" width="250px" height="250px" style="border-radius: 5px; margin-bottom: 10px;">            
                    <h4 style="margin-bottom: 10px;">${result.Nombre}</h4>              
                </td>
            </tr>
            <tr>
                <td>
                    <h2 style="color: rgb(238, 81, 81);">$${result.Precio}</h2>
                </td>
            </tr>
            <tr>
                <td>
                    <h6 style="margin-top: 20px;">Talles disponibles</h6>
                </td>
            </tr>
            <tr>

            <td align="center">
        `;

        result.Stock.forEach(element => {
            clothesElement.innerHTML += `
            <button type="button" class="btn btn-light" style="height: 40px; width: 40px; line-height: 0px; padding: 10px; margin-right: 10px; border-radius: 50px; box-shadow: 0px 3px 7px #808080">${element.talle}</button>
            `;        
        });
    
        clothesElement.innerHTML += `
        </td>
        <tr>
            <td align="center">
            <br><br>
            <button type="button" class="btn btn-danger" style="border-radius: 10px; padding: 10px; box-shadow: 0px 3px 8px #a71f1f; height: 50px; width: 120px;">Probar ahora</button>&nbsp;
            <button type="button" class="btn btn-warning" style="border-radius: 10px; padding: 10px; box-shadow: 0px 3px 8px #8a8b15;height: 50px; width: 120px; color: white; padding: 0px;">Agregar a whitelist</button>
            </td>
        </tr>
    `; 
    }
)
.catch(error => console.error('Error:', error))

}
getClothes();
