
const url = '/api/';

const teros_url = '/TerosApis/'

const teros_sesion_url =  '/alchemy_be/Services/Session/login2.php?company=1&userid=webff&password=Fresh2023&connection=desaffood&country=PRY'


const Servers = {
  FRESHFOOD: {
    baseUrl: `${url}`
  },
  SESSION: {
    baseUrl: `${teros_sesion_url}`   
  }
};

export { Servers }; 