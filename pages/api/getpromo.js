import { GoogleSpreadsheet } from 'google-spreadsheet';
/*import credentials from '../../credentials.json';*/

const doc = new GoogleSpreadsheet('');


export default async (request, response) => {
    try {
        await doc.useServiceAccountAuth(credentials)
        await doc.loadInfo()

        const sheet = doc.sheetsByIndex[2];
        await sheet.loadCells('A3:B3'); 
        
        const mostrarPromoCell = sheet.getCell(2, 0);

        const textCell = sheet.getCell(2, 1);

        response.end(JSON.stringify({
            showCoupon: mostrarPromoCell.value === 'VERDADEIRO',
            message: textCell.value
    }))

    } catch(err){
        response.end(JSON.stringify({
            showCoupon: false,
            message: 'Ooopa! Houve algum erro, tente mais tarde!'
    }))
    }


}