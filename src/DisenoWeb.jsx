import { animate } from 'animejs';
import React from 'react';

function DisenoWeb() {
  // Actividad 1
  const actividad1 = (
    <div>
      <h3>Actividad 1: Flexbox - Alineación Horizontal</h3>
      <p>Haz clic en el botón para alinear los cuadros al centro usando Flexbox.</p>
      <div id="flex1-container" style={{display:'flex',justifyContent:'flex-start',gap:'10px',marginBottom:'10px'}}>
        <div className="box" style={{width:40,height:40,background:'#535bf2'}}></div>
        <div className="box" style={{width:40,height:40,background:'#646cff'}}></div>
        <div className="box" style={{width:40,height:40,background:'#535bf2'}}></div>
      </div>
      <button onClick={() => {
        document.getElementById('flex1-container').style.justifyContent = 'center';
        anime({targets: '#flex1-container .box', scale: [1,1.2,1], duration: 800, easing: 'easeInOutQuad'});
      }}>Alinear al centro</button>
    </div>
  );

  // Actividad 2
  const actividad2 = (
    <div>
      <h3>Actividad 2: Flexbox - Dirección de Columna</h3>
      <p>Haz clic para cambiar la dirección de los elementos a columna.</p>
      <div id="flex2-container" style={{display:'flex',flexDirection:'row',gap:'10px',marginBottom:'10px'}}>
        <div className="box" style={{width:40,height:40,background:'#f25f5c'}}></div>
        <div className="box" style={{width:40,height:40,background:'#ffe066'}}></div>
        <div className="box" style={{width:40,height:40,background:'#247ba0'}}></div>
      </div>
      <button onClick={() => {
        document.getElementById('flex2-container').style.flexDirection = 'column';
        anime({targets: '#flex2-container .box', translateX: 50, direction: 'alternate', loop: 1, duration: 600});
      }}>Cambiar a columna</button>
    </div>
  );

  // Actividad 3
  const actividad3 = (
    <div>
      <h3>Actividad 3: Flexbox - Espaciado entre Elementos</h3>
      <p>Haz clic para distribuir el espacio entre los cuadros.</p>
      <div id="flex3-container" style={{display:'flex',justifyContent:'flex-start',gap:'10px',marginBottom:'10px'}}>
        <div className="box" style={{width:40,height:40,background:'#70c1b3'}}></div>
        <div className="box" style={{width:40,height:40,background:'#b2dbbf'}}></div>
        <div className="box" style={{width:40,height:40,background:'#f3ffbd'}}></div>
      </div>
      <button onClick={() => {
        document.getElementById('flex3-container').style.justifyContent = 'space-between';
        anime({targets: '#flex3-container .box', rotate: '1turn', duration: 800});
      }}>Espaciar</button>
    </div>
  );

  // Actividad 4
  const actividad4 = (
    <div>
      <h3>Actividad 4: Grid - Cuadrícula Básica</h3>
      <p>Haz clic para mostrar una cuadrícula 2x2.</p>
      <div id="grid1-container" style={{display:'grid',gridTemplateColumns:'1fr',gap:'10px',marginBottom:'10px',width:120}}>
        <div className="box" style={{height:40,background:'#ffb6b9'}}></div>
        <div className="box" style={{height:40,background:'#fae3d9'}}></div>
        <div className="box" style={{height:40,background:'#bbded6'}}></div>
        <div className="box" style={{height:40,background:'#8ac6d1'}}></div>
      </div>
      <button onClick={() => {
        document.getElementById('grid1-container').style.gridTemplateColumns = '1fr 1fr';
        anime({targets: '#grid1-container .box', scale: [1,1.1,1], duration: 700});
      }}>Mostrar 2 columnas</button>
    </div>
  );

  // Actividad 5
  const actividad5 = (
    <div>
      <h3>Actividad 5: Grid - Áreas</h3>
      <p>Haz clic para reorganizar los cuadros usando áreas de grid.</p>
      <div id="grid2-container" style={{display:'grid',gridTemplateAreas:'"a b" "c d"',gridTemplateColumns:'1fr 1fr',gap:'10px',marginBottom:'10px',width:120}}>
        <div className="box" style={{height:40,background:'#f67280',gridArea:'a'}}></div>
        <div className="box" style={{height:40,background:'#c06c84',gridArea:'b'}}></div>
        <div className="box" style={{height:40,background:'#6c5b7b',gridArea:'c'}}></div>
        <div className="box" style={{height:40,background:'#355c7d',gridArea:'d'}}></div>
      </div>
      <button onClick={() => {
        document.getElementById('grid2-container').style.gridTemplateAreas = '"a c" "b d"';
        anime({targets: '#grid2-container .box', translateY: 20, direction: 'alternate', loop: 1, duration: 600});
      }}>Reorganizar áreas</button>
    </div>
  );

  // Actividad 6
  const actividad6 = (
    <div>
      <h3>Actividad 6: Grid - Espaciado (gap)</h3>
      <p>Haz clic para aumentar el espacio entre los cuadros.</p>
      <div id="grid3-container" style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:'5px',marginBottom:'10px',width:180}}>
        <div className="box" style={{height:40,background:'#ffb347'}}></div>
        <div className="box" style={{height:40,background:'#ffcc29'}}></div>
        <div className="box" style={{height:40,background:'#ffeead'}}></div>
      </div>
      <button onClick={() => {
        document.getElementById('grid3-container').style.gap = '25px';
        anime({targets: '#grid3-container .box', scale: [1,1.2,1], duration: 700});
      }}>Aumentar gap</button>
    </div>
  );

  // Actividad 7
  const actividad7 = (
    <div>
      <h3>Actividad 7: Flexbox - Alinear verticalmente</h3>
      <p>Haz clic para alinear los cuadros al final verticalmente.</p>
      <div id="flex4-container" style={{display:'flex',alignItems:'flex-start',height:80,gap:'10px',marginBottom:'10px',background:'#eee'}}>
        <div className="box" style={{width:40,height:20,background:'#b2dbbf'}}></div>
        <div className="box" style={{width:40,height:40,background:'#f3ffbd'}}></div>
        <div className="box" style={{width:40,height:60,background:'#70c1b3'}}></div>
      </div>
      <button onClick={() => {
        document.getElementById('flex4-container').style.alignItems = 'flex-end';
        anime({targets: '#flex4-container .box', translateY: 10, direction: 'alternate', loop: 1, duration: 600});
      }}>Alinear abajo</button>
    </div>
  );

  // Actividad 8
  const actividad8 = (
    <div>
      <h3>Actividad 8: Grid - auto-fit</h3>
      <p>Haz clic para usar auto-fit y ver cómo se adaptan los cuadros.</p>
      <div id="grid4-container" style={{display:'grid',gridTemplateColumns:'repeat(2,1fr)',gap:'10px',marginBottom:'10px',width:120}}>
        <div className="box" style={{height:40,background:'#f67280'}}></div>
        <div className="box" style={{height:40,background:'#c06c84'}}></div>
        <div className="box" style={{height:40,background:'#6c5b7b'}}></div>
        <div className="box" style={{height:40,background:'#355c7d'}}></div>
      </div>
      <button onClick={() => {
        document.getElementById('grid4-container').style.gridTemplateColumns = 'repeat(auto-fit, minmax(40px, 1fr))';
        anime({targets: '#grid4-container .box', scale: [1,1.15,1], duration: 700});
      }}>Aplicar auto-fit</button>
    </div>
  );

  // Actividad 9
  const actividad9 = (
    <div>
      <h3>Actividad 9: CSS Básico - Color y Borde</h3>
      <p>Haz clic para cambiar el color y el borde de los cuadros.</p>
      <div id="css1-container" style={{display:'flex',gap:'10px',marginBottom:'10px'}}>
        <div className="box" style={{width:40,height:40,background:'#fff',border:'2px solid #535bf2'}}></div>
        <div className="box" style={{width:40,height:40,background:'#fff',border:'2px solid #535bf2'}}></div>
        <div className="box" style={{width:40,height:40,background:'#fff',border:'2px solid #535bf2'}}></div>
      </div>
      <button onClick={() => {
        const boxes = document.querySelectorAll('#css1-container .box');
        boxes.forEach(box => {
          box.style.background = '#535bf2';
          box.style.border = '2px solid #ffb347';
        });
        anime({targets: '#css1-container .box', borderRadius: ['0%','50%','0%'], duration: 900});
      }}>Cambiar color y borde</button>
    </div>
  );

  // Actividad 10
  const actividad10 = (
    <div>
      <h3>Actividad 10: CSS Básico - Transición y Hover</h3>
      <p>Pasa el mouse sobre los cuadros para ver la transición. Haz clic para animar todos.</p>
      <div id="css2-container" style={{display:'flex',gap:'10px',marginBottom:'10px'}}>
        <div className="box hoverable" style={{width:40,height:40,background:'#fff',transition:'background 0.3s'}}></div>
        <div className="box hoverable" style={{width:40,height:40,background:'#fff',transition:'background 0.3s'}}></div>
        <div className="box hoverable" style={{width:40,height:40,background:'#fff',transition:'background 0.3s'}}></div>
      </div>
      <button onClick={() => {
        anime({targets: '#css2-container .box', backgroundColor: '#f67280', duration: 700});
      }}>Animar todos</button>
      <style>{`
        #css2-container .hoverable:hover {
          background: #ffe066 !important;
        }
      `}</style>
    </div>
  );

  // Actividad Arrastrable 2 usando HTML draggable para ordenar
  // Orden inicial mezclado
  const [dragOrder, setDragOrder] = React.useState([2, 0, 4, 1, 3]);
  const [draggedIdx, setDraggedIdx] = React.useState(null);
  const handleDragStart2 = (idx) => setDraggedIdx(idx);
  const handleDrop2 = (idx) => {
    if (draggedIdx === null || draggedIdx === idx) return;
    let newOrder = [...dragOrder];
    const [removed] = newOrder.splice(draggedIdx, 1);
    newOrder.splice(idx, 0, removed);
    setDragOrder(newOrder);
    setDraggedIdx(null);
    anime({targets: `.sortable-box`, scale: [1.2,1], duration: 400});
  };
  const boxColors = ['#535bf2','#f25f5c','#ffe066','#70c1b3','#f67280'];
  const actividadDrag2 = (
    <div>
      <h3>Actividad Arrastrable 2: Ordena los cuadros (drag & drop nativo)</h3>
      <p>Arrastra un cuadro sobre otro para cambiar el orden.</p>
      <div style={{display:'flex',gap:20,marginBottom:10,cursor:'grab'}}>
        {dragOrder.map((i, idx) => (
          <div
            key={i}
            className="sortable-box"
            draggable
            onDragStart={() => handleDragStart2(idx)}
            onDragOver={e => e.preventDefault()}
            onDrop={() => handleDrop2(idx)}
            style={{width:50,height:50,background:boxColors[i],borderRadius:8,transition:'box-shadow 0.2s',display:'flex',alignItems:'center',justifyContent:'center',fontWeight:'bold',fontSize:'1.3em',color:'#222'}}
          >{i+1}</div>
        ))}
      </div>
      <small>Tip: Arrastra un cuadro sobre otro para intercambiarlo.</small>
    </div>
  );

  // Actividad Arrastrable 1: Drag & drop de 10 cuadros a su contenedor correcto
  const [dragBoxes, setDragBoxes] = React.useState([
    ...Array(5).fill({color: '#535bf2', type: 'azul'}),
    ...Array(5).fill({color: '#f25f5c', type: 'rojo'})
  ].map((box, i) => ({...box, id: i})));
  const [leftBoxes, setLeftBoxes] = React.useState([]);
  const [rightBoxes, setRightBoxes] = React.useState([]);
  const [draggedBox, setDraggedBox] = React.useState(null);

  const handleDragStartBox = (id) => setDraggedBox(id);
  const handleDropBox = (side) => {
    if (draggedBox === null) return;
    const box = dragBoxes.find(b => b.id === draggedBox);
    if ((side === 'left' && box.type === 'azul') || (side === 'right' && box.type === 'rojo')) {
      if (side === 'left' && !leftBoxes.some(b => b.id === box.id)) {
        setLeftBoxes([...leftBoxes, box]);
        setDragBoxes(dragBoxes.filter(b => b.id !== box.id));
        anime({targets: `.box-azul-${box.id}`, scale: [1.2,1], duration: 400});
      }
      if (side === 'right' && !rightBoxes.some(b => b.id === box.id)) {
        setRightBoxes([...rightBoxes, box]);
        setDragBoxes(dragBoxes.filter(b => b.id !== box.id));
        anime({targets: `.box-rojo-${box.id}`, scale: [1.2,1], duration: 400});
      }
    }
    setDraggedBox(null);
  };
  const handleDragOverBox = (e) => e.preventDefault();
  const actividadDrag1 = (
    <div>
      <h3>Actividad Arrastrable 1: Arrastra los cuadros a su contenedor correcto</h3>
      <p>Arrastra los cuadros azules al contenedor izquierdo y los rojos al derecho.</p>
      <div style={{display:'flex',justifyContent:'center',alignItems:'flex-start',gap:30,marginBottom:10}}>
        {/* Contenedor izquierdo (azul) */}
        <div
          onDragOver={handleDragOverBox}
          onDrop={() => handleDropBox('left')}
          style={{width:90,minHeight:180,background:'#e3eaff',border:'2px dashed #535bf2',borderRadius:8,padding:10,display:'flex',flexWrap:'wrap',gap:6,alignItems:'flex-start'}}>
          {leftBoxes.map((box) => (
            <div key={box.id} className={`draggable-box box-azul-${box.id}`}
              style={{width:30,height:30,background:box.color,borderRadius:6,margin:2}}></div>
          ))}
        </div>
        {/* Contenedor central (cuadros para arrastrar) */}
        <div style={{width:180,minHeight:180,background:'#eee',border:'2px solid #bbb',borderRadius:8,padding:10,display:'flex',flexWrap:'wrap',gap:6,alignItems:'flex-start'}}>
          {dragBoxes.map((box) => (
            <div
              key={box.id}
              className={`draggable-box box-${box.type}-${box.id}`}
              draggable
              onDragStart={() => handleDragStartBox(box.id)}
              style={{width:30,height:30,background:box.color,borderRadius:6,margin:2,cursor:'grab'}}
            ></div>
          ))}
        </div>
        {/* Contenedor derecho (rojo) */}
        <div
          onDragOver={handleDragOverBox}
          onDrop={() => handleDropBox('right')}
          style={{width:90,minHeight:180,background:'#ffeaea',border:'2px dashed #f25f5c',borderRadius:8,padding:10,display:'flex',flexWrap:'wrap',gap:6,alignItems:'flex-start'}}>
          {rightBoxes.map((box) => (
            <div key={box.id} className={`draggable-box box-rojo-${box.id}`}
              style={{width:30,height:30,background:box.color,borderRadius:6,margin:2}}></div>
          ))}
        </div>
      </div>
      <small>Tip: Solo puedes soltar los cuadros en su contenedor correspondiente.</small>
    </div>
  );

  return (
    <div>
      <h2>Actividades Interactivas: Flex, Grid, CSS Básico y Arrastrables</h2>
      <div style={{display:'flex',flexDirection:'column',gap:'2rem'}}>
        {actividad1}
        {actividad2}
        {actividad3}
        {actividad4}
        {actividad5}
        {actividad6}
        {actividad7}
        {actividad8}
        {actividad9}
        {actividad10}
        {actividadDrag1}
        {actividadDrag2}
      </div>
    </div>
  );
}

export default DisenoWeb;
