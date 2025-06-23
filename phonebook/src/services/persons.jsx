import axios from "axios";
const baseUrl = 'http://localhost:3001/persons'

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => {
    return response.data
  })
}

const create = newObject => {
  const request = axios.post(baseUrl, newObject)
  return request.then(response => response.data)
}

const deletePerson = id => {
    const request = axios.delete(`${baseUrl}/${id}`)
    return request.then(response => {
        if (response.status === 200) {
            return `Person with id ${id} deleted successfully`
        } else {
            throw new Error(`Failed to delete person with id ${id}`)
        }   
    })
}

export default { getAll, create, deletePerson }

