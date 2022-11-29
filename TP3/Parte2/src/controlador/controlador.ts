import { Request, Response } from "express";
import { cxMysql } from '../mysqldb';

export const getEmpleados = (req:Request, res:Response) => new Promise((resolve, reject) => {
    cxMysql.getConnection((err, connection) => {
        if (err){ 
          console.error(err);
          res.send(err);
          return;
        }
        console.log('MySQL Connection: ', connection.threadId);
        connection.query('SELECT * FROM empleado', (err, results) => {
          if (err) console.error(err);
          //console.log('User Query Results: ', results);
          res.send(results.forEach((element: any) => {
            "<tr><td>" + element.Legajo + "</td>" + 
            "<td>" + element.Nombre + "</td>" + 
            "<td>" + element.Apellido + "</td>" + 
            "<td>" + element.DNI + "</td>" + 
            "<td>" + element.Sector + "</td>" + 
            "<td>" + element.FechaIngreso + "</td>" + 
            "<td>" + element.Activo + "</td>" +
            "</tr>";
          }));
        });
        
      });
  }); 

export const getEmpladoXID = (req:Request, res:Response) => new Promise((resolve, reject) => {
    const legajo = parseInt(req.params.legajo);
    cxMysql.getConnection((err, connection) => {
        if (err){
          console.error(err);
          res.send(err);
          return;
        } 
        connection.query('SELECT * FROM empleado WHERE Legajo = ?', [legajo], (err, results) => {
          if (err) console.error(err);
          //res.send(results)
          res.send(results.forEach((element: any) => {
            "<tr><td>" + element.Legajo + "</td>" + 
            "<td>" + element.Nombre + "</td>" + 
            "<td>" + element.Apellido + "</td>" + 
            "<td>" + element.DNI + "</td>" + 
            "<td>" + element.Sector + "</td>" + 
            "<td>" + element.FechaIngreso + "</td>" + 
            "<td>" + element.Activo + "</td>" +
            "</tr>";
          }));
        });
      });
  });

export const altaEmpleado = (req:Request, res:Response) => new Promise((resolve, reject) => {
    
    const {Legajo, Apellido, Nombre, DNI, Sector, FechaIngreso, Activo} = req.body;
    var values = [Legajo, Apellido, Nombre, DNI, Sector, FechaIngreso, Activo];
    cxMysql.getConnection((err, connection) => {
        if (err) {
            console.error(err);
            res.send(err);
            return;
        }
        else{
            let sql:string = 'INSERT INTO empleado(Legajo, Apellido, Nombre, DNI, Sector, FechaIngreso, Activo) VALUES (?, ?, ?, ?, ?, ?, ?)';
            connection.query(sql, values, (err, results) => {
                if (err) {
                  console.error(err);
                  res.send("<h1>Error al tratar de insertar</h1>");
                }else{
                  res.send("<h1>Empleado dado de alta con exito</h1>");
                }
              });
        }          
      });
});

export const actualizarEmpleado = (req:Request, res:Response) => new Promise((resolve, reject) => {
    const {Legajo, Apellido, Nombre, DNI, Sector, FechaIngreso, Activo} = req.body;
    var values = [Apellido, Nombre, DNI, Sector, FechaIngreso, Activo, Legajo];
    cxMysql.getConnection((err, connection) => {
        if (err) {
            console.error(err);
            res.send(err);
            return;
        }
        else{
            let sql:string = 'UPDATE empleado SET Apellido=?, Nombre=?, DNI=?, Sector=?, FechaIngreso=?, Activo=? WHERE Legajo=?';
            connection.query(sql, values, (err, results) => {
                if (err) {
                  console.error(err);
                  res.send("<h1>Error al actualizar el empleado</h1>");
                }else{
                  res.send("<h1>Empleado Actualizado con exito</h1>");
                }
               
              });
        }          
      });
});

export const bajaEmpleado = (req:Request, res:Response) => new Promise((resolve, reject) => {
    const Legajo = parseInt(req.params.legajo);
    cxMysql.getConnection((err, connection) => {
          if (err) {
            console.error(err);
            res.send(err);
            return;
          }
          connection.query('DELETE FROM empleado WHERE Legajo = ?', [Legajo],(err, results) => {
          if (err) {
            console.error(err);
            res.send("<h1>Error al tratar de dar de baja</h1>");
          }else{
            res.send("<h1>Empleado dado de baja con exito</h1>");
          }         
        });
      });
});