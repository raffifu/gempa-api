const axios = require('axios');
const { parseString } = require('xml2js');

const endpoint = {
    terkini: 'autogempa',
    dirasakan: 'gempadirasakan',
    magnitudo: 'gempaterkini'
}

exports.doc = (req, res) => {
    const baseUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
    const response = {
        sumberData: 'BMKG (Badan Meteorologi, Klimatologi, dan Geofisika)',
        gempaTerkini: {
            detail: 'Gempa Bumi yang baru saja terjadi',
            url: baseUrl + 'gempa/terkini',
            shakemapBaseUrl: 'https://data.bmkg.go.id/DataMKG/TEWS/[:idShakemap]'
        },
        gempaDirasakan: {
            detail: '15 gempa bumi terbaru yang dirasakan',
            url: baseUrl + 'gempa/dirasakan'
        },
        gempaMag5: {
            detail: '15 gempa bumi dengan magnitudo > 5.0',
            url: baseUrl + 'gempa/magnitudo'
        }
    }
    res.json(response);
}

exports.fetchData = async (req, res) => {
    const statusGempa = req.params.status
    try {
        const response = await axios.get(`https://data.bmkg.go.id/DataMKG/TEWS/${endpoint[statusGempa]}.xml`)
        parseString(response.data, {trim: true, explicitArray : false}, (err, result) => {
            if(!err){
                res.json(result.Infogempa.gempa)
            }
        })
    } catch (error) {
        res.send('Error Retrieving Data')
    }
        
}
