const express = require("express");
const router = express.Router();
const { initConnection, exect, isDatabasesOnline } = require("../MySQLHandler");

//BD de Windows
let conn = undefined;
//BD rélica de Windows
let conn2 = undefined;

//Función que se ejecutará al cargar el archivo.
function init() {
  //Primero creamos las conexiones las bases de datos.
  //BD de Windows
  conn = initConnection("windows");
  //BD réplica de Windows
  conn2 = initConnection("rwindows");
}
init();

router.get("/", (req, res) => {
  res.status(500).json({ mensaje: "Hola soy windows." });
});

router.post("/", (req, res) => {
  let query = req.body.query;
  if (!query) {
    res
      .status(500)
      .json({
        error:
          "Sintaxis incorrecta, no se encuentra el campo 'query' en tu JSON.",
      });
    return;
  }

  //Si las bases de datos están en linea...
  isDatabasesOnline(conn, conn2)
    .then(() => {
      conn.query(query, function (err, rows) {
        if (err) {
          res.status(500).json({
            mensaje:
              "Error al ejecutar en la base de datos " + conn.config.user,
            error: err,
          });
        } else {
          conn2.query(query, function (err2, rows2) {
            if (err2) {
              res.status(500).json({
                mensaje:
                  "Error al ejecutar en la base de datos " + conn2.config.user,
                error: err2,
              });
            } else {
              res.status(200).json({ mensaje: "ok", bd1: rows, bd2: rows2 });
            }
          });
        }
      });
    })
    .catch((err) => {
      res.status(500).json({
        mensaje:
          "No se puede ejecutar la consulta porque una base de datos no responde.",
        error: err,
      });
    });
});

router.put("/", (req, res) => {
  let query = req.body.query;
  if (!query) {
    res
      .status(500)
      .json({
        error:
          "Sintaxis incorrecta, no se encuentra el campo 'query' en tu JSON.",
      });
    return;
  }

  //Si las bases de datos están en linea...
  isDatabasesOnline(conn, conn2)
    .then(() => {
      //Ejecutamos en la primera base de datos
      exect(query, conn)
        .then(() => {
          //Si todo está correcto, también la ejecutamos en la segunda
          exect(query, conn2)
            .then(() => {
              res.status(200).json({ mensaje: "ok" });
            })
            .catch((err) => {
              res.status(500).json({ error: err });
            });
        })
        .catch((err) => {
          res.status(500).json({ error: err });
        });
    })
    .catch((err) => {
      res.status(500).json({
        mensaje:
          "No se puede ejecutar la consulta porque una base de datos no responde.",
        error: err,
      });
    });
});

router.post('/altaAsg', function (req, res) {
  console.log(req.body);
  conn.query(
      'insert into asg (eno, pno, resp, dur) VALUES (?,?,?,?)',
      //["pepe", "pepe", "pepe", 1000],
      [req.body.eno, req.body.pno, req.body.resp, parseInt(req.body.dur)],
      (error) => {
          if (error) {
              console.error(error);
              res.status(500).json({ status: 'error' });
          } else {
              res.status(200).json({ status: 'registrado' });
          }
      }
  );
});

router.post('/altaAsgR', function (req, res) {
  console.log(req.body);
  conn2.query(
      'insert into asg (eno, pno, resp, dur) VALUES (?,?,?,?)',
      [req.body.eno, req.body.pno, req.body.resp, parseInt(req.body.dur)],
      (error) => {
          if (error) {
              console.error(error);
              res.status(500).json({ status: 'error' });
          } else {
              res.status(200).json({ status: 'registrado' });
          }
      }
  );
});

router.post('/altaEmp', function (req, res) {
  console.log(req.body);
  conn.query(
      'insert into emp (eno, ename, title) VALUES (?,?,?)',
      [req.body.eno, req.body.ename, req.body.title],
      (error) => {
          if (error) {
              console.error(error);
              res.status(500).json({ status: 'error' });
          } else {
              res.status(200).json({ status: 'registrado' });
          }
      }
  );
});

router.post('/altaEmpR', function (req, res) {
  console.log(req.body);
  conn2.query(
    'insert into emp (eno, ename, title) VALUES (?,?,?)',
    [req.body.eno, req.body.ename, req.body.title],
    (error) => {
        if (error) {
          console.error(error);
          res.status(500).json({ status: 'error' });
        } else {
            res.status(200).json({ status: 'registrado' });
        }
      }
  );
});

router.post('/altaPay', function (req, res) {
  console.log(req.body);
  conn.query(
      'insert into pay (payno, title, salary) VALUES (?,?,?)',
      [req.body.payno, req.body.title, parseInt(req.body.sal)],
      (error) => {
          if (error) {
              console.error(error);
              res.status(500).json({ status: 'error' });
          } else {
              res.status(200).json({ status: 'registrado' });
          }
      }
  );
});

router.post('/altaPayR', function (req, res) {
  console.log(req.body);
  conn2.query(
    'insert into pay (payno, title, salary) VALUES (?,?,?)',
      [req.body.payno, req.body.title, parseInt(req.body.sal)],
      (error) => {
          if (error) {
              console.error(error);
              res.status(500).json({ status: 'error' });
          } else {
              res.status(200).json({ status: 'registrado' });
          }
      }
  );
});

router.post('/altaProj', function (req, res) {
  console.log(req.body);
  conn.query(
      'insert into proj (pno, pname, budget) VALUES (?,?,?)',
      [req.body.pno, req.body.pname, parseInt(req.body.budget)],
      (error) => {
          if (error) {
              console.error(error);
              res.status(500).json({ status: 'error' });
          } else {
              res.status(200).json({ status: 'registrado' });
          }
      }
  );
});

router.post('/altaProjR', function (req, res) {
  console.log(req.body);
  conn2.query(
    'insert into proj (pno, pname, budget) VALUES (?,?,?)',
      [req.body.pno, req.body.pname, parseInt(req.body.budget)],
      (error) => {
          if (error) {
              console.error(error);
              res.status(500).json({ status: 'error' });
          } else {
              res.status(200).json({ status: 'registrado' });
          }
      }
  );
});

router.post('/cambioAsg', function (req, res) {
  console.log(req.body);
  var t = 'update asg set  resp = ?, dur = ?  where eno = ? and pno = ?';
  conn.query(t,
      [req.body.resp,parseInt(req.body.dur), req.body.eno, req.body.pno],
      (error) => {
          if (error) {
              console.error(error);
              res.status(500).json({ status: 'error' });
          } else {
              res.status(200).json({ status: 'registrado' });
          }
      }
  );
});

router.post('/cambioAsgR', function (req, res) {
  console.log(req.body);
  var t = 'update asg set  resp = ?, dur = ?  where eno = ? and pno = ?';
  conn2.query(t,
      [req.body.resp,parseInt(req.body.dur), req.body.eno, req.body.pno],
      (error) => {
          if (error) {
              console.error(error);
              res.status(500).json({ status: 'error' });
          } else {
              res.status(200).json({ status: 'registrado' });
          }
      }
  );
});

router.post('/cambioEmp', function (req, res) {
  console.log(req.body);
  var t = 'update emp set  ename = ?, title = ?  where eno = ?';
  conn.query(t,
      [req.body.ename, req.body.title, req.body.eno],
      (error) => {
          if (error) {
              console.error(error);
              res.status(500).json({ status: 'error' });
          } else {
              res.status(200).json({ status: 'registrado' });
          }
      }
  );
});

router.post('/cambioEmpR', function (req, res) {
  console.log(req.body);
  var t = 'update emp set  ename = ?, title = ?  where eno = ?';
  conn2.query(t,
    [req.body.ename, req.body.title, req.body.eno],
      (error) => {
          if (error) {
              console.error(error);
              res.status(500).json({ status: 'error' });
          } else {
              res.status(200).json({ status: 'registrado' });
          }
      }
  );
});

router.post('/cambioPay', function (req, res) {
  console.log(req.body);
  var t = 'update pay set  title = ?, salary = ?  where payno = ?';
  conn.query(t,
      [req.body.title, parseInt(req.body.sal), req.body.payno],
      (error) => {
          if (error) {
              console.error(error);
              res.status(500).json({ status: 'error' });
          } else {
              res.status(200).json({ status: 'registrado' });
          }
      }
  );
});

router.post('/cambioPayR', function (req, res) {
  console.log(req.body);
  var t = 'update pay set  title = ?, salary = ?  where payno = ?';
  conn2.query(t,
    [req.body.title, parseInt(req.body.sal), req.body.payno],
      (error) => {
          if (error) {
              console.error(error);
              res.status(500).json({ status: 'error' });
          } else {
              res.status(200).json({ status: 'registrado' });
          }
      }
  );
});

router.post('/cambioProj', function (req, res) {
  console.log(req.body);
  var t = 'update proj set  pname = ?, budget = ?  where pno = ?';
  conn.query(t,
      [req.body.pname, parseInt(req.body.budget),  req.body.pno],
      (error) => {
          if (error) {
              console.error(error);
              res.status(500).json({ status: 'error' });
          } else {
              res.status(200).json({ status: 'registrado' });
          }
      }
  );
});

router.post('/cambioProjR', function (req, res) {
  console.log(req.body);
  var t = 'update proj set  pname = ?, budget = ?  where pno = ?';
  conn2.query(t,
    [req.body.pname, parseInt(req.body.budget),  req.body.pno],
      (error) => {
          if (error) {
              console.error(error);
              res.status(500).json({ status: 'error' });
          } else {
              res.status(200).json({ status: 'registrado' });
          }
      }
  );
});

router.post('/bajaAsg', function (req, res) {
  console.log(req.body.id);
  var t = 'delete from asg WHERE (eno = ? and pno = ? )';
  conn.query(t,
    [req.body.id, req.body.id2],
      (error) => {
          if (error) {
              console.error(error);
              res.status(500).json({ status: 'error' });
          } else {
              res.status(200).json({ status: 'registrado' });
          }
      }
  );
});

router.post('/bajaAsgR', function (req, res) {
  console.log(req.body);
  var t = 'delete from asg WHERE (eno = ? and pno = ?)';
  conn2.query(t,
    [req.body.id, req.body.id2],
      (error) => {
          if (error) {
              console.error(error);
              res.status(500).json({ status: 'error' });
          } else {
              res.status(200).json({ status: 'registrado' });
          }
      }
  );
});

router.post('/bajaEmp', function (req, res) {
  console.log(req.body);
  var t = 'delete from emp WHERE eno = ? ';
  conn.query(t,
    [req.body.id],
      (error) => {
          if (error) {
              console.error(error);
              res.status(500).json({ status: 'error' });
          } else {
              res.status(200).json({ status: 'registrado' });
          }
      }
  );
});

router.post('/bajaEmpR', function (req, res) {
  console.log(req.body);
  var t = 'delete from emp WHERE eno = ? ';
  conn2.query(t,
    [req.body.id],
      (error) => {
          if (error) {
              console.error(error);
              res.status(500).json({ status: 'error' });
          } else {
              res.status(200).json({ status: 'registrado' });
          }
      }
  );
});

router.post('/bajaPay', function (req, res) {
  console.log(req.body);
  var t = 'delete from pay WHERE payno = ? ';
  conn.query(t,
    [req.body.id],
      (error) => {
          if (error) {
              console.error(error);
              res.status(500).json({ status: 'error' });
          } else {
              res.status(200).json({ status: 'registrado' });
          }
      }
  );
});

router.post('/bajaPayR', function (req, res) {
  console.log(req.body);
  var t = 'delete from pay WHERE payno = ? ';
  conn2.query(t,
    [req.body.id],
      (error) => {
          if (error) {
              console.error(error);
              res.status(500).json({ status: 'error' });
          } else {
              res.status(200).json({ status: 'registrado' });
          }
      }
  );
});

router.post('/bajaProj', function (req, res) {
  console.log(req.body);
  var t = 'delete from proj WHERE pno = ? ';
  conn.query(t,
    [req.body.id],
      (error) => {
          if (error) {
              console.error(error);
              res.status(500).json({ status: 'error' });
          } else {
              res.status(200).json({ status: 'registrado' });
          }
      }
  );
});

router.post('/bajaProjR', function (req, res) {
  console.log(req.body);
  var t = 'delete from proj WHERE pno = ? ';
  conn2.query(t,
    [req.body.id],
      (error) => {
          if (error) {
              console.error(error);
              res.status(500).json({ status: 'error' });
          } else {
              res.status(200).json({ status: 'registrado' });
          }
      }
  );
});

router.post('/conAsg', function (req, res) {
  console.log(req.body);
  var t = 'select * from asg';
  conn.query(t, function (error, result, fields) {
          if (error) {
              console.error(error);
              res.status(500).json({ status: 'error' });
          } else {
              res.status(200).json(result);
              console.log(result);
          }
      }
  );
}); 

router.post('/conAsg1', function (req, res) {
  console.log(req.body);
  var t = 'select * from asg1';
  conn.query(t, function (error, result, fields) {
          if (error) {
              console.error(error);
              res.status(500).json({ status: 'error' });
          } else {
              res.status(200).json(result);
              console.log(result);
          }
      }
  );
});

router.post('/conAsg2', function (req, res) {
  console.log(req.body);
  var t = 'select * from asg2';
  conn.query(t, function (error, result, fields) {
          if (error) {
              console.error(error);
              res.status(500).json({ status: 'error' });
          } else {
              res.status(200).json(result);
              console.log(result);
          }
      }
  );
});

router.post('/conAsg3', function (req, res) {
  console.log(req.body);
  var t = 'select * from asg3';
  conn.query(t, function (error, result, fields) {
          if (error) {
              console.error(error);
              res.status(500).json({ status: 'error' });
          } else {
              res.status(200).json(result);
              console.log(result);
          }
      }
  );
});

router.post('/conEmp', function (req, res) {
  console.log(req.body);
  var t = 'select * from emp';
  conn.query(t, function (error, result, fields) {
          if (error) {
              console.error(error);
              res.status(500).json({ status: 'error' });
          } else {
              res.status(200).json(result);
              console.log(result);
          }
      }
  );
});

router.post('/conPay', function (req, res) {
  console.log(req.body);
  var t = 'select * from pay';
  conn.query(t, function (error, result, fields) {
          if (error) {
              console.error(error);
              res.status(500).json({ status: 'error' });
          } else {
              res.status(200).json(result);
              console.log(result);
          }
      }
  );
});

router.post('/conProj', function (req, res) {
  console.log(req.body);
  var t = 'select * from proj';
  conn.query(t, function (error, result, fields) {
          if (error) {
              console.error(error);
              res.status(500).json({ status: 'error' });
          } else {
              res.status(200).json(result);
              console.log(result);
          }
      }
  );
});

router.post('/conProj1', function (req, res) {
  console.log(req.body);
  var t = 'select * from proj1';
  conn.query(t, function (error, result, fields) {
          if (error) {
              console.error(error);
              res.status(500).json({ status: 'error' });
          } else {
              res.status(200).json(result);
              console.log(result);
          }
      }
  );
});

router.post('/conProj2', function (req, res) {
  console.log(req.body);
  var t = 'select * from proj2';
  conn.query(t, function (error, result, fields) {
          if (error) {
              console.error(error);
              res.status(500).json({ status: 'error' });
          } else {
              res.status(200).json(result);
              console.log(result);
          }
      }
  );
});

router.post('/conProj3', function (req, res) {
  console.log(req.body);
  var t = 'select * from proj3';
  conn.query(t, function (error, result, fields) {
          if (error) {
              console.error(error);
              res.status(500).json({ status: 'error' });
          } else {
              res.status(200).json(result);
              console.log(result);
          }
      }
  );
});

module.exports = router;