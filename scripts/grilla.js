function ObjectCol(props) {
    return <th></th>
}

function ObjectRow(props) {
    return <tr>
        <td>08:00</td>
        <td>X</td>
        <td>X</td>
        <td>X</td>
        <td>X</td>
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
    for (var i = 0; i < 5; i++) {
        rows.push(<ObjectRow key={i} />);
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