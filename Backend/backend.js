// notasss
// necesitamos:
// agregar express
// levantar el servidor 
// crear los endpoints

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/enviarRespuesta', (req, res) => {
    // recibimos info del frontend
    // en este punto vamos a enviar info a la BD
    // avisarle al front si la info se guarda o no
    
    res.send('Recibir re!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

