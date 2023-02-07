const { createPost, findPostById } = require('../../src/posts/posts.controllers')

const { describe, it } = require('mocha')
const { assert } = require('chai')

describe('Testing de los controladores para obtener post dependiendo el id', () => {
    let id
    createPost({
        content: 'asd',
        userName: 'Ricardo Hoyos'
    }).then((data) => id = data.id)


    it('Deberia retornar la publicacion especifica dependiendo el id', (done) => {

        findPostById(id)
            .then(data => {
                assert.equal(data.content, 'asd')
                assert.equal(data.userName, 'Ricardo Hoyos')
                assert.equal(data.id, id)
                done()
            })
    })

})



