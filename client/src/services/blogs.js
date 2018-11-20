import * as baseService from './base';
import * as blogServices from '../services/blogs';

function all() {
    return baseService.get('/api/blogs');
}

function one(id) {
    return baseService.get(`/api/blogs/${id}`);
}

function insert(data) {
    return baseService.post('/api/blogs', data);
}

function update(id, data) {
    return baseService.put(`/api/blogs/${id}`, data);
}

function destroy(id) {
    return baseService.destroy(`/api/blogs/${id}`);
}

export { all, one, insert, update, destroy };

// import { Router } from 'express';
// // import Table from '../table';

// let router = Router();
// let blogsTable = new Table('blogs');

// router.get('/', async (req, res) => {
//     console.log(req.user);
//     try {
//         let blogs = await blogs.getAll()
//         res.json(blogs);
//     } catch (err) {
//         console.log(err);
//         res.sendStatus(500);
//     }
// });

// router.post('/', async (req, res) => {
//     try {
//         // idObj will look like { id: 7 }
//         let idObj = await Table.insert({
//             name: req.body.name,
//             description: req.body.description
//         });
//         res.status(201).json(idObj);
//     } catch (err) {
//         console.log(err);
//         res.sendStatus(500);
//     }
// });

// router.get('/:id', async (req, res) => {
//     try {
//         let foundBlogs = await blogsTable.getOne(req.params.id);
//         res.json(foundBlogs);
//     } catch (err) {
//         console.log(err);
//         res.sendStatus(500);
//     }
// });

// router.put('/:id', async (req, res) => {
//     try {
//         // not concerned about getting a value back, just waiting on update to finish
//         await blogsTable.update(req.params.id, req.body);
//         res.sendStatus(200);
//     } catch (err) {
//         console.log(err);
//         res.sendStatus(500);
//     }
// });

// router.delete('/:id', async (req, res) => {
//     try {
//         // not concerned about getting a value back, just waiting on delete to finish
//         await blogsTable.delete(req.params.id);
//         res.sendStatus(200);
//     } catch (err) {
//         console.log(err);
//         res.sendStatus(500);
//     }
// });

// export default router;