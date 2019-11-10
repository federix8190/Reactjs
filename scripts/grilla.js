function ObjectCol(props) {
    return <th></th>
}

function ObjectRow(props) {
    return <tr>
        <td>{props.hora}</td>
        <td>{props.lunes}</td>
        <td>{props.martes}</td>
        <td>{props.miercoles}</td>
        <td>X</td>
        <td>X</td>
        <td>X</td>
    </tr>;
}

function Grilla() {

    /*var columnas = ['Horario', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];
    var cols = [];
    for (var i = 0; i < columnas.length; i++) {
        cols.push(<ObjectCol key={i} />);
    }*/
    var rows = [];
    var datos = [
        {hora:'08:00', 'lunes':'X', 'martes':'', 'miercoles':'X'},
        {hora:'08:30', 'lunes':'X', 'martes':'X', 'miercoles':'X'},
        {hora:'09:00', 'lunes':'', 'martes':'', 'miercoles':''},
        {hora:'09:30', 'lunes':'X', 'martes':'X', 'miercoles':''},
        {hora:'10:00', 'lunes':'X', 'martes':'', 'miercoles':'X'},
    ];
    for (var i = 0; i < datos.length; i++) {
        var d = datos[i];
        rows.push(<ObjectRow hora={d.hora} lunes={d.lunes} />);
    }
    return (
        <table id="customers">
            <thead>
                <tr>
                    <th>Horario</th>
                    <th>Lunes</th> 
                    <th>Martes</th>
                    <th>Miercoles</th>
                    <th>Jueves</th>
                    <th>Viernes</th>
                    <th>Sabado</th>
                </tr>
            </thead>
            <tbody>
                {rows}
            </tbody>
        </table>
    );
}

ReactDOM.render(<Grilla />, document.getElementById('root2'));