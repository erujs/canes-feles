import {
  dogInstance,
  catInstance
} from './axios.jsx';

export class AnimalService {
  async getList(animal){
    if(animal === 'dog'){
      const res = await dogInstance.get('/breeds')
      .catch(error => {throw error.response})
      return await res;
    }else {
      const res = await catInstance.get('/breeds')
      .catch(error => {throw error.response})
      return await res;
    }
  }

  async getImages(animal, page, limit, breed){
    if(animal === 'dog'){
      const res = await dogInstance.get(`/images/search?page=${page}&limit=${limit}&breed_id=${breed}`)
      .catch(error => {throw error.response})
      return await res;
    }else {
      const res = await catInstance.get(`/images/search?page=${page}&limit=${limit}&breed_id=${breed}`)
      .catch(error => {throw error.response})
      return await res;
    }
  }

  async getItemImage(animal, id){
    if(animal === 'dog'){
      const res = await dogInstance.get(`/images/${id}`)
      .catch(error => {throw error.response})
      return await res;
    }else {
      const res = await catInstance.get(`/images/${id}`)
      .catch(error => {throw error.response})
      return await res;
    }
  }
}