import superAgent from 'superagent';

const BASE_URL = '/api';

export default {
  fetchInfoByName(name){
    return new Promise((resolve, reject)=> {
      superAgent
        .get(`${BASE_URL}/service/accounts/name/${name}`)
        .end((err, res)=> {
          if (err) {
            reject(err)
          }
          resolve(res.body)
        })
    })
  },

  getNameListBy(input){
    return new Promise((resolve, reject)=> {
      superAgent
        .get(`${BASE_URL}/service/names/${input}`)
        .end((err, res)=> {
          if (err) {
            reject(err)
          }
          resolve(res.body)
        })
    })
  }

};
