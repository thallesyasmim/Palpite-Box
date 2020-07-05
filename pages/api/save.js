import { GoogleSpreadsheet } from 'google-spreadsheet';
/*import credentials from '../../credentials.json';*/
import moment from 'moment';

const doc = new GoogleSpreadsheet('');

const getCupom = () => {
    const code = parseInt(moment().format('YYMMDDHHmmssSSS')).toString(16).toUpperCase();
    return code.substr(0, 4) + '-' + code.substr(4, 4) + '-' + code.substr(8, 4)
}

export default async (request, response) => {

    try {
        await doc.useServiceAccountAuth(credentials)
        await doc.loadInfo()
        const sheet = doc.sheetsByIndex[1];

        const { Nome, Email, Whatsapp, Nota } = JSON.parse(request.body);

        const sheetConfig = doc.sheetsByIndex[2];
        await sheetConfig.loadCells('A3:B3');

        const mostrarPromocaoCell = sheetConfig.getCell(2, 0);
        const textCell = sheetConfig.getCell(2, 1);

        let Cupom = '';
        let Promo = '';

        if(mostrarPromocaoCell.value === 'VERDADEIRO'){
            Cupom = getCupom()
            Promo = textCell.value;
        }

        // Nome	Email	Whatsapp	Cupom	Promo
        await sheet.addRow({
            Nome,
            Email,
            Whatsapp,
            Cupom,
            Promo,
            'Data Preenchimento': moment().format('DD/MM/YYYY HH:mm:ss'),
            Nota: parseInt(Nota)
        })

      response.end(JSON.stringify({
          showCoupon: Cupom !== '',
          Cupom,
          Promo
      }));

    } catch(err){
        response.end('error');
    }

}