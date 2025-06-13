import React, { useState } from 'react';

function ActividadSO({ titulo, descripcion, pregunta, respuestaCorrecta, tipo = 'text', opciones = [] }) {
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

function SistemasOperativos() {
  const totalActividades = 10;
  const [puntaje, setPuntaje] = useState(0);
  const [mostrar, setMostrar] = useState(false);
  const sumarPuntaje = () => setPuntaje(p => p + 1);
  return (
    <div>
      <h2>Actividades: Sistemas Operativos y sus Características</h2>
      <div style={{fontWeight:'bold',marginBottom:16}}>Puntaje: {puntaje} / {totalActividades}</div>
      <ActividadSO
        titulo="1. ¿Qué es un sistema operativo?"
        descripcion="Explica brevemente qué es un sistema operativo."
        pregunta={<span>Respuesta:</span>}
        respuestaCorrecta="Es un software que administra los recursos de hardware y software de una computadora."
      />
      <ActividadSO
        titulo="2. Ejemplo de sistema operativo de escritorio"
        descripcion="Menciona un sistema operativo de escritorio popular."
        pregunta={<span>Respuesta:</span>}
        respuestaCorrecta="Windows"
      />
      <ActividadSO
        titulo="3. Ejemplo de sistema operativo móvil"
        descripcion="Menciona un sistema operativo utilizado en dispositivos móviles."
        pregunta={<span>Respuesta:</span>}
        respuestaCorrecta="Android"
      />
      <ActividadSO
        titulo="4. Característica: Multitarea"
        descripcion="¿Qué significa que un sistema operativo sea multitarea?"
        pregunta={<span>Respuesta:</span>}
        respuestaCorrecta="Puede ejecutar varios procesos al mismo tiempo."
      />
      <ActividadSO
        titulo="5. Característica: Multiusuario"
        descripcion="¿Qué significa que un sistema operativo sea multiusuario?"
        pregunta={<span>Respuesta:</span>}
        respuestaCorrecta="Permite que varios usuarios usen la computadora al mismo tiempo o en diferentes sesiones."
      />
      <ActividadSO
        titulo="6. Sistema operativo de código abierto"
        descripcion="¿Cuál es un sistema operativo de código abierto muy conocido?"
        pregunta={<span>Respuesta:</span>}
        respuestaCorrecta="Linux"
      />
      <ActividadSO
        titulo="7. Sistema operativo propietario"
        descripcion="¿Cuál es un sistema operativo propietario?"
        pregunta={<span>Respuesta:</span>}
        respuestaCorrecta="Windows"
      />
      <ActividadSO
        titulo="8. ¿Qué es la interfaz gráfica de usuario (GUI)?"
        descripcion="Explica qué es la GUI en un sistema operativo."
        pregunta={<span>Respuesta:</span>}
        respuestaCorrecta="Es una interfaz visual que permite interactuar con el sistema usando ventanas, iconos y menús."
      />
      <ActividadSO
        titulo="9. ¿Qué es la línea de comandos?"
        descripcion="¿Para qué sirve la línea de comandos en un sistema operativo?"
        pregunta={<span>Respuesta:</span>}
        respuestaCorrecta="Permite interactuar con el sistema mediante comandos de texto."
      />
      <ActividadSO
        titulo="10. ¿Qué es la gestión de archivos?"
        descripcion="¿Qué función cumple la gestión de archivos en un sistema operativo?"
        pregunta={<span>Respuesta:</span>}
        respuestaCorrecta="Organiza, almacena y permite acceder a los archivos en el sistema."
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

export default SistemasOperativos;
