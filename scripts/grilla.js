function ObjectCol(props) {
    return <th>{props.name}</th>;
}

function ObjectRow(props) {
    return <tr>
        <td>{props.hora}</td>
        <td>{props.lunes}</td>
        <td>{props.martes}</td>
        <td>{props.miercoles}</td>
        <td>{props.jueves}</td>
        <td>X</td>
        <td>X</td>
    </tr>;
}

function Grilla(props) {

    var cols = [];
    for (var i = 0; i < props.headers.length; i++) {
        cols.push(<ObjectCol name={props.headers[i]} />);
    }
    var rows = [];    
    for (var i = 0; i < props.data.length; i++) {
        var d = props.data[i];
        rows.push(<ObjectRow hora={d.hora} lunes={d.lunes} martes={d.martes} 
            miercoles={d.miercoles} jueves={d.jueves}/>);
    }
    return (
        <table id={props.id}>
            <thead><tr>{cols}</tr></thead>
            <tbody>{rows}</tbody>
        </table>
    );
}

var columnas = ['Hora', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];

var datos = [
    {hora:'08:00', 'lunes':'X', 'martes':'X', 'miercoles':'X', 'jueves':''},
    {hora:'08:30', 'lunes':'X', 'martes':'X', 'miercoles':'X', 'jueves':''},
    {hora:'09:00', 'lunes':'', 'martes':'X', 'miercoles':'', 'jueves':''},
    {hora:'09:30', 'lunes':'X', 'martes':'X', 'miercoles':'', 'jueves':''},
    {hora:'10:00', 'lunes':'X', 'martes':'X', 'miercoles':'X', 'jueves':''},
];

ReactDOM.render(
    <Grilla id="customers" data={datos} headers={columnas} />, 
    document.getElementById('root2')
);