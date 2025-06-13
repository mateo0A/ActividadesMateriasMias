// Utilidades para las actividades interactivas de CSS
import anime from 'animejs/lib/anime.es.js';

export function Actividad1() {
  // Flexbox: Alinear elementos horizontalmente
  return (
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
}

export function Actividad2() {
  // Flexbox: Dirección de columna
  return (
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
}

export function Actividad3() {
  // Flexbox: Espaciado entre elementos
  return (
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
}

export function Actividad4() {
  // Grid: Crear una cuadrícula básica
  return (
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
}

export function Actividad5() {
  // Grid: Área de grid
  return (
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
}

export function Actividad6() {
  // Grid: Espaciado y gap
  return (
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
}

export function Actividad7() {
  // Flexbox: align-items
  return (
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
}

export function Actividad8() {
  // Grid: Grid auto-fit
  return (
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
}

export function Actividad9() {
  // CSS básico: color y borde
  return (
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
}

export function Actividad10() {
  // CSS básico: transición y hover
  return (
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
}
