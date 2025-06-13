import React, { useState } from 'react';

function Actividad({ titulo, descripcion, pregunta, respuestaCorrecta, tipo = 'text', opciones = [] }) {
  const [respuesta, setRespuesta] = useState('');
  const [feedback, setFeedback] = useState(null);
  React.useEffect(() => {
    if (tipo === 'select') {
      if (respuesta && respuesta === respuestaCorrecta) {
        setFeedback('¡Correcto!');
      } else if (respuesta) {
        setFeedback('Intenta de nuevo.');
      } else {
        setFeedback(null);
      }
    } else {
      setFeedback(null);
    }
    // eslint-disable-next-line
  }, [respuesta]);
  return (
    <div style={{marginBottom:'2rem',padding:'1rem',border:'1px solid #ccc',borderRadius:8}}>
      <h3>{titulo}</h3>
      <p>{descripcion}</p>
      <div style={{marginBottom:8}}>{pregunta}</div>
      {tipo === 'select' ? (
        <select value={respuesta} onChange={e => setRespuesta(e.target.value)}>
          <option value="">Selecciona una opción</option>
          {opciones.map(opt => <option key={opt} value={opt}>{opt}</option>)}
        </select>
      ) : (
        <input type="text" value={respuesta} onChange={e => setRespuesta(e.target.value)} />
      )}
      {feedback && <div style={{marginTop:8, fontWeight:'bold'}}>{feedback}</div>}
    </div>
  );
}

function Programacion() {
  const totalActividades = 10;
  const [puntaje, setPuntaje] = useState(0);
  const [mostrar, setMostrar] = useState(false);
  const sumarPuntaje = () => setPuntaje(p => p + 1);
  return (
    <div>
      <h2>Actividades: Declaración de Variables y Tipos de Datos</h2>
      <div style={{fontWeight:'bold',marginBottom:16}}>Puntaje: {puntaje} / {totalActividades}</div>
      <Actividad
        titulo="1. Declarar una variable en JavaScript"
        descripcion="¿Cómo se declara una variable llamada 'edad' en JavaScript usando let?"
        pregunta={<span>Escribe la línea de código:</span>}
        respuestaCorrecta="let edad;"
      />
      <Actividad
        titulo="2. Declarar una variable y asignar valor"
        descripcion="Declara una variable llamada 'nombre' y asígnale el valor 'Juan'."
        pregunta={<span>Escribe la línea de código:</span>}
        respuestaCorrecta="let nombre = 'Juan';"
      />
      <Actividad
        titulo="3. Tipo de dato: number"
        descripcion="¿Qué tipo de dato es 42 en JavaScript?"
        pregunta={<span>Selecciona el tipo correcto:</span>}
        tipo="select"
        opciones={["string", "number", "boolean", "object"]}
        respuestaCorrecta="number"
      />
      <Actividad
        titulo="4. Tipo de dato: string"
        descripcion="¿Qué tipo de dato es 'Hola mundo'?"

        pregunta={<span>Selecciona el tipo correcto:</span>}
        tipo="select"
        opciones={["string", "number", "boolean", "object"]}
        respuestaCorrecta="string"
      />
      <Actividad
        titulo="5. Declarar constante"
        descripcion="Declara una constante llamada PI con valor 3.14."
        pregunta={<span>Escribe la línea de código:</span>}
        respuestaCorrecta="const PI = 3.14;"
      />
      <Actividad
        titulo="6. Tipo de dato: boolean"
        descripcion="¿Qué tipo de dato es true?"
        pregunta={<span>Selecciona el tipo correcto:</span>}
        tipo="select"
        opciones={["string", "number", "boolean", "object"]}
        respuestaCorrecta="boolean"
      />
      <Actividad
        titulo="7. Variable sin valor inicial"
        descripcion="Declara una variable llamada 'resultado' sin asignarle valor."
        pregunta={<span>Escribe la línea de código:</span>}
        respuestaCorrecta="let resultado;"
      />
      <Actividad
        titulo="8. Tipo de dato: undefined"
        descripcion="¿Qué tipo de dato tiene una variable declarada pero no inicializada?"
        pregunta={<span>Selecciona el tipo correcto:</span>}
        tipo="select"
        opciones={["string", "number", "boolean", "undefined"]}
        respuestaCorrecta="undefined"
      />
      <Actividad
        titulo="9. Tipo de dato: object"
        descripcion="¿Qué tipo de dato es { nombre: 'Ana', edad: 20 }?"
        pregunta={<span>Selecciona el tipo correcto:</span>}
        tipo="select"
        opciones={["string", "number", "boolean", "object"]}
        respuestaCorrecta="object"
      />
      <Actividad
        titulo="10. Declarar variable con var"
        descripcion="Declara una variable llamada 'x' usando var y asígnale el valor 10."
        pregunta={<span>Escribe la línea de código:</span>}
        respuestaCorrecta="var x = 10;"
      />
      <button style={{marginTop:24, fontWeight:'bold'}} onClick={() => setMostrar(true)}>
        Mostrar puntaje final
      </button>
      {mostrar && (
        <div style={{marginTop:16, fontSize:'1.2em', color:'#217346', fontWeight:'bold'}}>
          Tu puntaje final es: {puntaje} / {totalActividades}
        </div>
      )}
    </div>
  );
}

export default Programacion;
