import {createClient} from 'contentful'

const client = createClient({
// This is the space ID. A space is like a project folder in Contentful terms
space: '7w7h2zisrwpt',
// This is the access token for this space. Normally you get both ID and the token in the Contentful web app
accessToken: 'f24af5c43de01c288f64a7db5a0d2df80010260e024590db660d2bde0e462517'
})

export default client

// import {createClient} from 'contentful'
//
// const client = createClient({
// // This is the space ID. A space is like a project folder in Contentful terms
// space: 'fks5pyxzxlp7',
// // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
// accessToken: 'b062ad6def3a191d3562bacca9e0546e0bbd2ec5bb5e4186c235fa41be9410a0'
// })
//
// export default client
