import { Database } from './database/database.js';
import {randomUUID} from 'node:crypto'
import { buildRoutePath } from './utils/build-route-path.js';

const dataBase = new Database()

export const routes = [{
  method: 'GET',
  path: buildRoutePath('/users'),
  handle: (req,res) => {
    const { search } = req.query

    const users = dataBase.select("users", search ? { 
      name: search,
      email: search
    }: null)

    return res.end(JSON.stringify(users))
  }
  },{
    method: 'POST',
    path: buildRoutePath('/users'),
    handle: (req,res) => {
      const { email, name } = req.body

      const user = {
        id: randomUUID(),
        name,
        email,
      }

      dataBase.insert('users',user)

      return res.writeHead(201).end()
    }
  },{
    method: 'PUT',
    path: buildRoutePath('/users/:id'),
    handle: (req,res) =>{
      const { id } = req.params
      const { name, email } = req.body

      dataBase.update('users', id,{ name, email })

      return res.writeHead(204).end()
    }
  },{
    method: 'DELETE',
    path: buildRoutePath('/users/:id'),
    handle: (req,res) =>{
      const { id } = req.params

      dataBase.delete('users', id)

      return res.writeHead(204).end()
    }
  }
]