// Importando Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
// Importando material
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
// Importando estilos
import "./../../styles/page/tables.scss";
// import "./../../styles/base/colours.scss";

const Tables = () => {
  function createData(
    nombre_postulante,
    apellido_postulante,
    nombre_convocatoria,
    numero_celular,
    calif_total
  ) {
    return {
      nombre_postulante,
      apellido_postulante,
      nombre_convocatoria,
      numero_celular,
      calif_total
    };
  }

  const rows = [
    createData("Juan", "Ramos", "Supervisor de Producción", 988756813, 24),
    createData("Pedro", "Osorio", "Supervisor de Logística", 984556324, 20),
    createData("Jorge", "Martinez", "Jefe de Mantenimiento", 965726587, 32),
    createData("Ana", "Ramirez", "Asistente de Calidad", 925786582, 3.7, 30),
    createData("Daniel", "Ortiz", "Gerente de Logística", 915742586, 25),
  ];

  return (
    <>
      <div className="tables">
        <div className="table-title">
          <h3>Tabla de Postulantes</h3>
        </div>

        <TableContainer component={Paper} sx={{ background: 'rgb(32, 41, 64)' }}>
          <Table sx={{ minWidth: 650, background: 'rgb(32, 41, 64)' }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell style={{fontSize:'1.4rem', color:'#fff'}}>Nombre del postulante</TableCell>
                <TableCell align="right" style={{fontSize:'1.4rem', color:'#fff'}}>Apellido del postulante</TableCell>
                <TableCell align="right" style={{fontSize:'1.4rem', color:'#fff'}}>Teléfono</TableCell>
                <TableCell align="right" style={{fontSize:'1.4rem', color:'#fff'}}>Puesto</TableCell>
                <TableCell align="right" style={{fontSize:'1.4rem', color:'#fff'}}>Calificación total</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.nombre_postulante}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row" style={{fontSize:'1.4rem', color:'#fff'}}>
                    {row.nombre_postulante}
                  </TableCell>
                  <TableCell align="right" style={{fontSize:'1.4rem', color:'#fff'}}>{row.apellido_postulante}</TableCell>
                  <TableCell align="right" style={{fontSize:'1.4rem', color:'#fff'}}>{row.numero_celular}</TableCell>
                  <TableCell align="right" style={{fontSize:'1.4rem', color:'#fff'}}>{row.nombre_convocatoria}</TableCell>
                  <TableCell align="right" style={{fontSize:'1.4rem', color:'#fff'}}>{row.calif_total}</TableCell>
                  <TableCell align="right" style={{fontSize:'1.4rem', color:'#fff'}}><FontAwesomeIcon icon={faEye} className="icon"/></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        {/* <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Handle</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td colspan="2">Larry the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </table> */}
      </div>
    </>
  );
};

export default Tables;
