const express = require('express')
const bodyParser = require('body-parser')
const mysql = require('mysql')

const app = express()

// Config Port
const port = process.env.PORT || 5000;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// Config BD
const database  = {
    host            : 'localhost',
    user            : 'root',
    password        : '',
    database        : 'concesionario',
    port            : '3306'
}

// Connection BD
const pool = mysql.createPool(database);
pool.getConnection(function(err,conn){
    console.log('DB is connected') //Connnection is automatically released when query resolves
});


{//TABLA CLIENTES

// Get all Customers
app.get('/customers', (req, res) => {

    pool.getConnection((err, connection) => {
        if(err) throw err
        console.log(`connected as id ${connection.threadId}`)

        connection.query('SELECT * from Clientes', (err, rows) => {
            connection.release() // return the connection to pool

            if(!err) {
                res.send(rows)
            } else {
                console.log(err)
            }

        })
    })
})

// Get a customer by ID
app.get('/customers/:id', (req, res) => {

    pool.getConnection((err, connection) => {
        if(err) throw err
        console.log(`connected as id ${connection.threadId}`)

        connection.query('SELECT * from Clientes WHERE ID_cliente = ?', [req.params.id], (err, rows) => {
            connection.release() // return the connection to pool

            if(!err) {
                res.send(rows)
            } else {
                console.log(err)
            }

        })
    })
})

// Delete a customer
app.delete('/customers/:id', (req, res) => {

    pool.getConnection((err, connection) => {
        if(err) throw err
        console.log(`connected as id ${connection.threadId}`)

        connection.query('DELETE from Clientes WHERE ID_cliente = ?', [req.params.id], (err, rows) => {
            connection.release() // return the connection to pool

            if(!err) {
                res.send(`Customer with the Record ID: ${[req.params.id]} has been removed.`)
            } else {
                console.log(err)
            }

        })
    })
})

// Create a customer
app.post('/customers', (req, res) => {

    pool.getConnection((err, connection) => {
        if(err) throw err
        console.log(`connected as id ${connection.threadId}`)

        const params = req.body

        connection.query('INSERT INTO Clientes SET ?', params , (err, rows) => {
            connection.release() // return the connection to pool

            if(!err) {
                res.send(`Customers with the name: ${params.Nombre_cliente} has been added.`)
            } else {
                console.log(err)
            }

        })

        console.log(req.body)
    })
})


// Update a customer
app.put('/customers', (req, res) => {

    pool.getConnection((err, connection) => {
        if(err) throw err
        console.log(`connected as id ${connection.threadId}`)

        const { ID_cliente, Nombre_cliente, Apellido_cliente, Cedula, Direccion, Telefono_cliente} = req.body

        connection.query('UPDATE Clientes SET Nombre_cliente=?, Apellido_cliente=?, Cedula=?, Direccion=?, Telefono_cliente=? WHERE ID_cliente = ?',
                        [Nombre_cliente, Apellido_cliente, Cedula, Direccion, Telefono_cliente, ID_cliente ] , (err, rows) => {
            connection.release() // return the connection to pool

            if(!err) {
                res.send(`Customer with the name: ${Nombre_cliente} has been update.`)
            } else {
                console.log(err)
            }

        })

        console.log(req.body)
    })
})
}

{//TABLA EMPLEADOS


// Get all Employees
app.get('/employees', (req, res) => {

    pool.getConnection((err, connection) => {
        if(err) throw err
        console.log(`connected as id ${connection.threadId}`)

        connection.query('SELECT * from Empleados', (err, rows) => {
            connection.release() // return the connection to pool

            if(!err) {
                res.send(rows)
            } else {
                console.log(err)
            }

        })
    })
})

// Get a employee by ID
app.get('/employees/:id', (req, res) => {

    pool.getConnection((err, connection) => {
        if(err) throw err
        console.log(`connected as id ${connection.threadId}`)

        connection.query('SELECT * from Empleados WHERE ID_empleado = ?', [req.params.id], (err, rows) => {
            connection.release() // return the connection to pool

            if(!err) {
                res.send(rows)
            } else {
                console.log(err)
            }

        })
    })
})

// Delete a records / employee
app.delete('/employees/:id', (req, res) => {

    pool.getConnection((err, connection) => {
        if(err) throw err
        console.log(`connected as id ${connection.threadId}`)

        connection.query('DELETE from Empleados WHERE ID_empleado = ?', [req.params.id], (err, rows) => {
            connection.release() // return the connection to pool

            if(!err) {
                res.send(`Employee with the Record ID: ${[req.params.id]} has been removed.`)
            } else {
                console.log(err)
            }

        })
    })
})

// Create a employee
app.post('/employees', (req, res) => {

    pool.getConnection((err, connection) => {
        if(err) throw err
        console.log(`connected as id ${connection.threadId}`)

        const params = req.body

        connection.query('INSERT INTO Empleados SET ?', params , (err, rows) => {
            connection.release() // return the connection to pool

            if(!err) {
                res.send(`employee with the name: ${params.Nombre_empleado} has been added.`)
            } else {
                console.log(err)
            }

        })

        console.log(req.body)
    })
})


// Update a employee
app.put('/employees', (req, res) => {

    pool.getConnection((err, connection) => {
        if(err) throw err
        console.log(`connected as id ${connection.threadId}`)

        const { ID_empleado, Nombre_empleado, Apellido_empleado, Telefono_empleado, Salario} = req.body

        connection.query('UPDATE Empleados SET Nombre_empleado=?, Apellido_empleado=?, Telefono_empleado=?, Salario=? WHERE ID_empleado = ?',
                        [Nombre_empleado, Apellido_empleado, Telefono_empleado, Salario, ID_empleado] , (err, rows) => {
            connection.release() // return the connection to pool

            if(!err) {
                res.send(`Employee with the name: ${Nombre_empleado} has been update.`)
            } else {
                console.log(err)
            }

        })

        console.log(req.body)
    })
})
}

{//TABLA MARCAS

// Get all Brands
app.get('/brands', (req, res) => {

    pool.getConnection((err, connection) => {
        if(err) throw err
        console.log(`connected as id ${connection.threadId}`)

        connection.query('SELECT * from Marcas', (err, rows) => {
            connection.release() // return the connection to pool

            if(!err) {
                res.send(rows)
            } else {
                console.log(err)
            }

        })
    })
})

// Get a Brand by ID
app.get('/brands/:id', (req, res) => {

    pool.getConnection((err, connection) => {
        if(err) throw err
        console.log(`connected as id ${connection.threadId}`)

        connection.query('SELECT * from Marcas WHERE ID_marca = ?', [req.params.id], (err, rows) => {
            connection.release() // return the connection to pool

            if(!err) {
                res.send(rows)
            } else {
                console.log(err)
            }

        })
    })
})

// Delete a Brand
app.delete('/brands/:id', (req, res) => {

    pool.getConnection((err, connection) => {
        if(err) throw err
        console.log(`connected as id ${connection.threadId}`)

        connection.query('DELETE from Marcas WHERE id = ?', [req.params.id], (err, rows) => {
            connection.release() // return the connection to pool

            if(!err) {
                res.send(`Brand with the Record ID: ${[req.params.id]} has been removed.`)
            } else {
                console.log(err)
            }

        })
    })
})

// Create a Brand
app.post('/brands', (req, res) => {

    pool.getConnection((err, connection) => {
        if(err) throw err
        console.log(`connected as id ${connection.threadId}`)

        const params = req.body

        connection.query('INSERT INTO Marcas SET ?', params , (err, rows) => {
            connection.release() // return the connection to pool

            if(!err) {
                res.send(`Brand with the name: ${params.Marca} has been added.`)
            } else {
                console.log(err)
            }

        })

        console.log(req.body)
    })
})


// Update a Brand
app.put('/brands', (req, res) => {

    pool.getConnection((err, connection) => {
        if(err) throw err
        console.log(`connected as id ${connection.threadId}`)

        const { ID_marca, Marca} = req.body

        connection.query('UPDATE Marca SET Marca=? WHERE id = ?',
                        [Marca, ID_marca ] , (err, rows) => {
            connection.release() // return the connection to pool

            if(!err) {
                res.send(`Employee with the name: ${Marca} has been added.`)
            } else {
                console.log(err)
            }

        })

        console.log(req.body)
    })
})
}

{//TABLA MODELOS


// Get all Models
app.get('/models', (req, res) => {

    pool.getConnection((err, connection) => {
        if(err) throw err
        console.log(`connected as id ${connection.threadId}`)

        connection.query('SELECT * from Modelos', (err, rows) => {
            connection.release() // return the connection to pool

            if(!err) {
                res.send(rows)
            } else {
                console.log(err)
            }

        })
    })
})

// Get a Model by ID
app.get('/models/:id', (req, res) => {

    pool.getConnection((err, connection) => {
        if(err) throw err
        console.log(`connected as id ${connection.threadId}`)

        connection.query('SELECT * from Modelos WHERE ID_modelo = ?', [req.params.id], (err, rows) => {
            connection.release() // return the connection to pool

            if(!err) {
                res.send(rows)
            } else {
                console.log(err)
            }

        })
    })
})

// Delete a Model
app.delete('/models/:id', (req, res) => {

    pool.getConnection((err, connection) => {
        if(err) throw err
        console.log(`connected as id ${connection.threadId}`)

        connection.query('DELETE from Modelos WHERE ID_modelo = ?', [req.params.id], (err, rows) => {
            connection.release() // return the connection to pool

            if(!err) {
                res.send(`Model with the Record ID: ${[req.params.id]} has been removed.`)
            } else {
                console.log(err)
            }

        })
    })
})

// Create a Model
app.post('/models', (req, res) => {

    pool.getConnection((err, connection) => {
        if(err) throw err
        console.log(`connected as id ${connection.threadId}`)

        const params = req.body

        connection.query('INSERT INTO Modelos SET ?', params , (err, rows) => {
            connection.release() // return the connection to pool

            if(!err) {
                res.send(`Model with the name: ${params.Modelo} has been added.`)
            } else {
                console.log(err)
            }

        })

        console.log(req.body)
    })
})


// Update a Model
app.put('/models', (req, res) => {

    pool.getConnection((err, connection) => {
        if(err) throw err
        console.log(`connected as id ${connection.threadId}`)

        const { ID_modelo, ID_Marca, Modelo, Ano_fabricacion} = req.body

        connection.query('UPDATE Modelos SET ID_Marca=? , Modelo=?, Ano_fabricacion=? WHERE ID_Modelo = ?' ,
                        [ID_Marca, Modelo, Ano_fabricacion, ID_modelo ] , (err, rows) => {
            connection.release() // return the connection to pool

            if(!err) {
                res.send(`Model with the name: ${Modelo} has been update.`)
            } else {
                console.log(err)
            }

        })

        console.log(req.body)
    })
})
}

{//TABLA VEHICULOS

// Get all Cars
app.get('/cars', (req, res) => {

    pool.getConnection((err, connection) => {
        if(err) throw err
        console.log(`connected as id ${connection.threadId}`)

        connection.query('SELECT * from Vehiculos', (err, rows) => {
            connection.release() // return the connection to pool

            if(!err) {
                res.send(rows)
            } else {
                console.log(err)
            }

        })
    })
})

// Get a Car by ID
app.get('/cars/:id', (req, res) => {

    pool.getConnection((err, connection) => {
        if(err) throw err
        console.log(`connected as id ${connection.threadId}`)

        connection.query('SELECT * from Vehiculos WHERE ID_vehiculo = ?', [req.params.id], (err, rows) => {
            connection.release() // return the connection to pool

            if(!err) {
                res.send(rows)
            } else {
                console.log(err)
            }

        })
    })
})

// Delete a Car
app.delete('/cars/:id', (req, res) => {

    pool.getConnection((err, connection) => {
        if(err) throw err
        console.log(`connected as id ${connection.threadId}`)

        connection.query('DELETE from Vehiculos WHERE ID_vehiculo = ?', [req.params.id], (err, rows) => {
            connection.release() // return the connection to pool

            if(!err) {
                res.send(`Cars with the Record ID: ${[req.params.id]} has been removed.`)
            } else {
                console.log(err)
            }

        })
    })
})

// Create a Car
app.post('/cars', (req, res) => {

    pool.getConnection((err, connection) => {
        if(err) throw err
        console.log(`connected as id ${connection.threadId}`)

        const params = req.body

        connection.query('INSERT INTO Vehiculos SET ?', params , (err, rows) => {
            connection.release() // return the connection to pool

            if(!err) {
                res.send(`Cars with the identification: ${params.Matricula} has been added.`)
            } else {
                console.log(err)
            }

        })

        console.log(req.body)
    })
})


// Update a Cars
app.put('/cars', (req, res) => {

    pool.getConnection((err, connection) => {
        if(err) throw err
        console.log(`connected as id ${connection.threadId}`)

        const {ID_vehiculo, Matricula, ID_modelo, Color, Kilometraje, Estado, Precio_venta} = req.body

        connection.query('UPDATE Clientes SET Matricula=?, ID_modelo=?, Color=?, Kilometraje=?, Estado=?, Precio_venta=? WHERE ID_vehiculo = ?',
                        [Matricula, ID_modelo, Color, Kilometraje, Estado, Precio_venta, ID_vehiculo ] , (err, rows) => {
            connection.release() // return the connection to pool

            if(!err) {
                res.send(`Cars with the identification: ${Matricula} has been update.`)
            } else {
                console.log(err)
            }

        })

        console.log(req.body)
    })
})
}

{//TABLA VENTAS

// Get all Sales
app.get('/sales', (req, res) => {

    pool.getConnection((err, connection) => {
        if(err) throw err
        console.log(`connected as id ${connection.threadId}`)

        connection.query('SELECT * from Ventas', (err, rows) => {
            connection.release() // return the connection to pool

            if(!err) {
                res.send(rows)
            } else {
                console.log(err)
            }

        })
    })
})

// Get a Sale by ID
app.get('/sales/:id', (req, res) => {

    pool.getConnection((err, connection) => {
        if(err) throw err
        console.log(`connected as id ${connection.threadId}`)

        connection.query('SELECT * from Ventas WHERE ID_venta = ?', [req.params.id], (err, rows) => {
            connection.release() // return the connection to pool

            if(!err) {
                res.send(rows)
            } else {
                console.log(err)
            }

        })
    })
})

// Delete a Sale
app.delete('/sales/:id', (req, res) => {

    pool.getConnection((err, connection) => {
        if(err) throw err
        console.log(`connected as id ${connection.threadId}`)

        connection.query('DELETE from Ventas WHERE ID_venta = ?', [req.params.id], (err, rows) => {
            connection.release() // return the connection to pool

            if(!err) {
                res.send(`Sale with the Record ID: ${[req.params.id]} has been removed.`)
            } else {
                console.log(err)
            }

        })
    })
})

// Create a Sale
app.post('/sales', (req, res) => {

    pool.getConnection((err, connection) => {
        if(err) throw err
        console.log(`connected as id ${connection.threadId}`)

        const params = req.body

        connection.query('INSERT INTO Ventas SET ?', params , (err, rows) => {
            connection.release() // return the connection to pool

            if(!err) {
                res.send(`Sale with the ID: ${params.ID_venta} has been added.`)
            } else {
                console.log(err)
            }

        })

        console.log(req.body)
    })
})


// Update a Sales
app.put('/sales', (req, res) => {

    pool.getConnection((err, connection) => {
        if(err) throw err
        console.log(`connected as id ${connection.threadId}`)

        const {ID_venta, ID_cliente, ID_vehiculo, ID_empleado, Fecha_venta, Forma_pago} = req.body

        connection.query('UPDATE Ventas SET ID_cliente=?, ID_vehiculo=?, ID_empleado=?, Fecha_venta=?, Forma_pago=? WHERE  ID_venta = ?',
                        [ID_cliente, ID_vehiculo, ID_empleado, Fecha_venta, Forma_pago, ID_venta] , (err, rows) => {
            connection.release() // return the connection to pool

            if(!err) {
                res.send(`Sale with the ID: ${ID_venta} has been update.`)
            } else {
                console.log(err)
            }

        })

        console.log(req.body)
    })
})
}

// Listen on enviroment port or 5000
app.listen(port, () => console.log(`Listening on port ${port}`))