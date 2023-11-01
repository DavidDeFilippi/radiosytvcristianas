const fs = require('fs');

const toJson = async () => {

    let radios = [

        { id: 'bbn', name: 'BBN', url: 'https://streams.radiomast.io/475ebed1-595e-4717-b888-64fe8fc6b09f', logo: 'https://bbn1.bbnradio.org/spanish/wp-content/uploads/sites/5/2017/01/bbnfavicon32x32.png', categoria: '' },
        { id: 'armonia', name: 'Armonia', url: 'http://audio.armonia.cl:3032/1.mp3', logo: 'https://myradioonline.cl/public/uploads/radio_img/radio-armonia/play_250_250.jpg', categoria: '' },
    ];

    radios.sort(function (a, b) {
        if (a.name > b.name) {
          return 1;
        }
        if (a.name < b.name) {
          return -1;
        }
        // a must be equal to b
        return 0;
      });

    const jsonData = JSON.stringify(radios);

    fs.writeFileSync("radio.json", jsonData);

};

toJson();