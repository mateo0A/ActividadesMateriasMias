import React, { useState } from 'react';

function usePuntaje(total) {
  const [puntaje, setPuntaje] = useState(0);
  const sumar = () => setPuntaje(p => p + 1);
  return [puntaje, sumar];
}

function ActividadArrastrableRed({ onAcierto }) {
  const cables = [
    { nombre: 'UTP', tipo: 'Par trenzado', color: '#4a90e2' },
    { nombre: 'Fibra óptica', tipo: 'Fibra óptica', color: '#f5a623' },
    { nombre: 'Coaxial', tipo: 'Coaxial', color: '#7b7b7b' },
    { nombre: 'HDMI', tipo: 'Otro', color: '#b8e986' },
  ];
  const tipos = ['Par trenzado', 'Fibra óptica', 'Coaxial', 'Otro'];
  const [dragged, setDragged] = useState(null);
  const [aciertos, setAciertos] = useState([]);
  const [cablesMezclados] = useState([...cables].sort(() => Math.random() - 0.5));

  const handleDragStart = (nombre) => setDragged(nombre);
  const handleDrop = (tipo) => {
    const cable = cables.find(c => c.nombre === dragged);
    if (cable && cable.tipo === tipo && !aciertos.includes(cable.nombre)) {
      setAciertos([...aciertos, cable.nombre]);
      if (onAcierto) onAcierto();
    }
    setDragged(null);
  };
  const handleDragOver = (e) => e.preventDefault();

  return (
    <div style={{marginBottom:'2rem'}}>
      <h3>Actividad Arrastrable: Relaciona el tipo de cable de red</h3>
      <div style={{display:'flex',gap:30,justifyContent:'center',marginTop:20}}>
        {/* Columnas de tipos de cable */}
        <div style={{display:'flex',flexDirection:'column',gap:20}}>
          {tipos.map(tipo => (
            <div
              key={tipo}
              onDragOver={handleDragOver}
              onDrop={() => handleDrop(tipo)}
              style={{width:150,height:50,background:'#f0f0f0',color:'#222',display:'flex',alignItems:'center',justifyContent:'center',borderRadius:8,fontWeight:'bold',fontSize:'1.1em',border:'2px solid #bbb'}}
            >{tipo}</div>
          ))}
        </div>
        {/* Columnas de cables arrastrables */}
        <div style={{display:'flex',flexDirection:'column',gap:20}}>
          {cablesMezclados.map(cable => (
            <div
              key={cable.nombre}
              className="draggable-cable"
              draggable={!aciertos.includes(cable.nombre)}
              onDragStart={() => handleDragStart(cable.nombre)}
              style={{
                width:120,
                height:50,
                background:aciertos.includes(cable.nombre) ? '#b6e7a7' : cable.color,
                color:'#222',
                display:'flex',
                alignItems:'center',
                justifyContent:'center',
                borderRadius:8,
                fontWeight:'bold',
                fontSize:'1.1em',
                border:'2px solid #bbb',
                opacity: aciertos.includes(cable.nombre) ? 0.5 : 1,
                cursor: aciertos.includes(cable.nombre) ? 'default' : 'grab',
                transition:'background 0.3s, opacity 0.3s'
              }}
            >{cable.nombre}</div>
          ))}
        </div>
      </div>
      {aciertos.length === cables.length && (
        <div style={{marginTop:20, color:'#217346', fontWeight:'bold'}}>¡Correcto! Has relacionado todos los cables.</div>
      )}
    </div>
  );
}

function ActividadSoporte({ titulo, descripcion, pregunta, respuestaCorrecta, opciones, onAcierto }) {
  const [respuesta, setRespuesta] = useState('');
  const [feedback, setFeedback] = useState(null);
  React.useEffect(() => {
    if (respuesta && respuesta === respuestaCorrecta) {
      setFeedback('¡Correcto!');
      if (onAcierto) onAcierto();
    } else if (respuesta) {
      setFeedback('Intenta de nuevo.');
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
      <select value={respuesta} onChange={e => setRespuesta(e.target.value)}>
        <option value="">Selecciona una opción</option>
        {opciones.map(opt => <option key={opt} value={opt}>{opt}</option>)}
      </select>
      {feedback && <div style={{marginTop:8, fontWeight:'bold'}}>{feedback}</div>}
    </div>
  );
}

function SoporteTecnico() {
  const totalActividades = 10;
  const [puntaje, sumarPuntaje] = usePuntaje(totalActividades);
  const [mostrar, setMostrar] = useState(false);
  return (
    <div>
      <h2>Soporte Técnico: Cables de Red y Componentes de una Computadora</h2>
      <div style={{fontWeight:'bold',marginBottom:16}}>Puntaje: {puntaje} / {totalActividades}</div>
      <ActividadArrastrableRed onAcierto={sumarPuntaje} />
      <ActividadSoporte
        titulo="3. ¿Cuál es el componente principal que ejecuta las instrucciones del computador?"
        descripcion="Selecciona el componente que es el cerebro de la computadora."
        pregunta={<span>¿Cuál es el cerebro de la computadora?</span>}
        opciones={["RAM", "CPU", "Disco duro", "Fuente de poder"]}
        respuestaCorrecta="CPU"
        onAcierto={sumarPuntaje}
      />
      <ActividadSoporte
        titulo="4. ¿Qué componente almacena datos de manera permanente?"
        descripcion="Selecciona el componente que almacena datos aunque la computadora esté apagada."
        pregunta={<span>¿Qué componente almacena datos permanentemente?</span>}
        opciones={["RAM", "CPU", "Disco duro", "Tarjeta de red"]}
        respuestaCorrecta="Disco duro"
        onAcierto={sumarPuntaje}
      />
      <ActividadSoporte
        titulo="5. ¿Cuál es la función de la memoria RAM?"
        descripcion="Selecciona la función principal de la memoria RAM."
        pregunta={<span>¿Para qué sirve la RAM?</span>}
        opciones={["Almacenar datos temporalmente", "Procesar datos", "Mostrar imágenes", "Conectar a internet"]}
        respuestaCorrecta="Almacenar datos temporalmente"
        onAcierto={sumarPuntaje}
      />
      <ActividadSoporte
        titulo="6. ¿Qué componente permite la conexión a redes?"
        descripcion="Selecciona el componente encargado de la conexión a redes."
        pregunta={<span>¿Qué componente permite la conexión a redes?</span>}
        opciones={["Tarjeta de red", "Fuente de poder", "Monitor", "Teclado"]}
        respuestaCorrecta="Tarjeta de red"
        onAcierto={sumarPuntaje}
      />
      <ActividadSoporte
        titulo="7. ¿Cuál es la función de la fuente de poder?"
        descripcion="Selecciona la función principal de la fuente de poder."
        pregunta={<span>¿Para qué sirve la fuente de poder?</span>}
        opciones={["Almacenar datos", "Proveer energía", "Procesar datos", "Mostrar imágenes"]}
        respuestaCorrecta="Proveer energía"
        onAcierto={sumarPuntaje}
      />
      <ActividadSoporte
        titulo="8. ¿Qué componente muestra la información al usuario?"
        descripcion="Selecciona el componente que permite ver la información."
        pregunta={<span>¿Qué componente muestra la información?</span>}
        opciones={["Monitor", "Teclado", "Mouse", "CPU"]}
        respuestaCorrecta="Monitor"
        onAcierto={sumarPuntaje}
      />
      <ActividadSoporte
        titulo="9. ¿Cuál es el dispositivo principal de entrada de texto?"
        descripcion="Selecciona el dispositivo de entrada de texto."
        pregunta={<span>¿Cuál es el principal dispositivo de entrada de texto?</span>}
        opciones={["Monitor", "Teclado", "Mouse", "Impresora"]}
        respuestaCorrecta="Teclado"
        onAcierto={sumarPuntaje}
      />
      <ActividadSoporte
        titulo="10. ¿Qué componente permite la interacción con el puntero?"
        descripcion="Selecciona el componente que permite mover el puntero en pantalla."
        pregunta={<span>¿Qué componente permite mover el puntero?</span>}
        opciones={["Teclado", "Mouse", "Monitor", "Fuente de poder"]}
        respuestaCorrecta="Mouse"
        onAcierto={sumarPuntaje}
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

export default SoporteTecnico;
