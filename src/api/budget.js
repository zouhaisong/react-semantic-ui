import superAgent from 'superagent';

const BASE_URL = '/api';

export default {
  fetchInfoByName(name){
    return new Promise((resolve, reject)=> {
      superAgent
        .get(`${BASE_URL}/service/accounts/name/${name}`)
        .set('contentType','')
        .end((err, res)=> {
          if (err) {
            reject(err)
          }
          resolve(res.body)
        })
    })
  }
};
