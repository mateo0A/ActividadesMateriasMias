import React, { useState } from 'react';

const aplicaciones = [
  { nombre: 'Word', extension: '.docx', color: '#2b579a' },
  { nombre: 'Excel', extension: '.xlsx', color: '#217346' },
  { nombre: 'PowerPoint', extension: '.pptx', color: '#d24726' },
  { nombre: 'Access', extension: '.accdb', color: '#a4373a' },
  { nombre: 'Outlook', extension: '.pst', color: '#0072c6' },
];

function ActividadArrastrable() {
  const [extensiones, setExtensiones] = useState(
    aplicaciones
      .map((app, i) => ({ ...app, id: i }))
      .sort(() => Math.random() - 0.5)
  );
  const [dragged, setDragged] = useState(null);
  const [aciertos, setAciertos] = useState([]);

  const handleDragStart = (id) => setDragged(id);
  const handleDrop = (nombre) => {
    const ext = extensiones.find(e => e.id === dragged);
    if (ext && ext.nombre === nombre && !aciertos.includes(ext.id)) {
      setAciertos([...aciertos, ext.id]);
    }
    setDragged(null);
  };
  const handleDragOver = (e) => e.preventDefault();

  return (
    <div style={{marginBottom:'2rem'}}>
      <h3>Actividad Arrastrable: Relaciona la aplicación de Office con su extensión</h3>
      <div style={{display:'flex',gap:30,justifyContent:'center',marginTop:20}}>
        {/* Columnas de aplicaciones */}
        <div style={{display:'flex',flexDirection:'column',gap:20}}>
          {aplicaciones.map(app => (
            <div
              key={app.nombre}
              onDragOver={handleDragOver}
              onDrop={() => handleDrop(app.nombre)}
              style={{width:120,height:50,background:app.color,color:'#fff',display:'flex',alignItems:'center',justifyContent:'center',borderRadius:8,fontWeight:'bold',fontSize:'1.1em',border:'2px solid #fff'}}
            >{app.nombre}</div>
          ))}
        </div>
        {/* Columnas de extensiones arrastrables */}
        <div style={{display:'flex',flexDirection:'column',gap:20}}>
          {extensiones.map(ext => (
            <div
              key={ext.id}
              className="draggable-ext"
              draggable={!aciertos.includes(ext.id)}
              onDragStart={() => handleDragStart(ext.id)}
              style={{
                width:90,
                height:50,
                background:aciertos.includes(ext.id) ? '#b6e7a7' : '#eee',
                color:'#222',
                display:'flex',
                alignItems:'center',
                justifyContent:'center',
                borderRadius:8,
                fontWeight:'bold',
                fontSize:'1.1em',
                border:'2px solid #bbb',
                opacity: aciertos.includes(ext.id) ? 0.5 : 1,
                cursor: aciertos.includes(ext.id) ? 'default' : 'grab',
                transition:'background 0.3s, opacity 0.3s'
              }}
            >{ext.extension}</div>
          ))}
        </div>
      </div>
      {aciertos.length === aplicaciones.length && (
        <div style={{marginTop:20, color:'#217346', fontWeight:'bold'}}>¡Correcto! Has relacionado todas las extensiones.</div>
      )}
    </div>
  );
}

function ActividadOfimatica({ titulo, descripcion, pregunta, respuestaCorrecta, opciones, onCorrect }) {
  const [respuesta, setRespuesta] = useState('');
  const [feedback, setFeedback] = useState(null);
  React.useEffect(() => {
    if (respuesta && respuesta === respuestaCorrecta) {
      setFeedback('¡Correcto!');
      onCorrect();
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

function Ofimatica() {
  const totalActividades = 10;
  const [puntaje, setPuntaje] = useState(0);
  const [mostrar, setMostrar] = useState(false);
  const sumarPuntaje = () => setPuntaje(p => p + 1);
  return (
    <div>
      <h2>Ofimática: Aplicaciones Office y sus Extensiones</h2>
      <div style={{fontWeight:'bold',marginBottom:16}}>Puntaje: {puntaje} / {totalActividades}</div>
      <ActividadArrastrable />
      <ActividadOfimatica
        titulo="2. ¿Para qué sirve Microsoft Word?"
        descripcion="Selecciona la función principal de Microsoft Word."
        pregunta={<span>¿Para qué sirve Word?</span>}
        opciones={["Procesador de textos", "Hojas de cálculo", "Presentaciones", "Bases de datos"]}
        respuestaCorrecta="Procesador de textos"
        onCorrect={sumarPuntaje}
      />
      <ActividadOfimatica
        titulo="3. ¿Qué extensión tiene un archivo de Excel?"
        descripcion="Selecciona la extensión correcta para un archivo de Excel."
        pregunta={<span>¿Qué extensión tiene un archivo de Excel?</span>}
        opciones={['.docx', '.xlsx', '.pptx', '.accdb']}
        respuestaCorrecta=".xlsx"
        onCorrect={sumarPuntaje}
      />
      <ActividadOfimatica
        titulo="4. ¿Para qué sirve PowerPoint?"
        descripcion="Selecciona la función principal de PowerPoint."
        pregunta={<span>¿Para qué sirve PowerPoint?</span>}
        opciones={["Procesador de textos", "Hojas de cálculo", "Presentaciones", "Bases de datos"]}
        respuestaCorrecta="Presentaciones"
        onCorrect={sumarPuntaje}
      />
      <ActividadOfimatica
        titulo="5. ¿Qué extensión tiene un archivo de Access?"
        descripcion="Selecciona la extensión correcta para un archivo de Access."
        pregunta={<span>¿Qué extensión tiene un archivo de Access?</span>}
        opciones={['.docx', '.xlsx', '.pptx', '.accdb']}
        respuestaCorrecta=".accdb"
        onCorrect={sumarPuntaje}
      />
      <ActividadOfimatica
        titulo="6. ¿Para qué sirve Outlook?"
        descripcion="Selecciona la función principal de Outlook."
        pregunta={<span>¿Para qué sirve Outlook?</span>}
        opciones={["Correo electrónico", "Presentaciones", "Bases de datos", "Hojas de cálculo"]}
        respuestaCorrecta="Correo electrónico"
        onCorrect={sumarPuntaje}
      />
      <ActividadOfimatica
        titulo="7. ¿Qué extensión tiene un archivo de Word?"
        descripcion="Selecciona la extensión correcta para un archivo de Word."
        pregunta={<span>¿Qué extensión tiene un archivo de Word?</span>}
        opciones={['.docx', '.xlsx', '.pptx', '.accdb']}
        respuestaCorrecta=".docx"
        onCorrect={sumarPuntaje}
      />
      <ActividadOfimatica
        titulo="8. ¿Para qué sirve Excel?"
        descripcion="Selecciona la función principal de Excel."
        pregunta={<span>¿Para qué sirve Excel?</span>}
        opciones={["Procesador de textos", "Hojas de cálculo", "Presentaciones", "Bases de datos"]}
        respuestaCorrecta="Hojas de cálculo"
        onCorrect={sumarPuntaje}
      />
      <ActividadOfimatica
        titulo="9. ¿Qué extensión tiene un archivo de PowerPoint?"
        descripcion="Selecciona la extensión correcta para un archivo de PowerPoint."
        pregunta={<span>¿Qué extensión tiene un archivo de PowerPoint?</span>}
        opciones={['.docx', '.xlsx', '.pptx', '.accdb']}
        respuestaCorrecta=".pptx"
        onCorrect={sumarPuntaje}
      />
      <ActividadOfimatica
        titulo="10. ¿Para qué sirve Access?"
        descripcion="Selecciona la función principal de Access."
        pregunta={<span>¿Para qué sirve Access?</span>}
        opciones={["Procesador de textos", "Hojas de cálculo", "Presentaciones", "Bases de datos"]}
        respuestaCorrecta="Bases de datos"
        onCorrect={sumarPuntaje}
      />
      <ActividadOfimatica
        titulo="11. ¿Qué extensión tiene un archivo de Outlook?"
        descripcion="Selecciona la extensión correcta para un archivo de Outlook."
        pregunta={<span>¿Qué extensión tiene un archivo de Outlook?</span>}
        opciones={['.pst', '.docx', '.xlsx', '.pptx']}
        respuestaCorrecta=".pst"
        onCorrect={sumarPuntaje}
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

export default Ofimatica;
