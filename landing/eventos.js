/* Masterclasses y eventos.
 *
 * To add an event, add one entry to EVENTOS. The page sorts them on its own:
 * an event shows as "Próxima" until its end time passes, then moves to "Anteriores".
 * Dates are in Mexico City time (UTC-6).
 */
(function () {
  'use strict';

  const WHATSAPP = '525534888993';

  const EVENTOS = [
    {
      id: 'whimsy-rituals',
      nombre: 'Whimsy & Rituals',
      lema: 'El arte de crear tu propia magia',
      inicio: '2026-11-12T19:00:00-06:00',
      fin: '2026-11-12T21:00:00-06:00',
      modalidad: 'Online',
      aportacion: '$333',
      flyer: 'img/eventos/whimsy-rituals.jpg',
      listaTitulo: '¿Qué aprenderás?',
      lista: [
        ['El arte de los rituales', 'Su propósito, intención y cómo crear un espacio sagrado.'],
        ['Elementos y simbolismos', 'Conoce sus significados y cómo utilizarlos.'],
        ['Colores y energía', 'Descubre qué representa cada color y cómo elegirlo.'],
        ['Fechas y fases lunares', 'Los mejores momentos para realizar tus rituales.'],
        ['Conexión angelical', 'Cómo invocar a tus ángeles y pedir su guía.'],
        ['Crea tu propia magia', 'Diseña rituales para el amor, la abundancia, la protección y la manifestación.']
      ],
      materialesTitulo: 'Materiales · Ritual para abundancia',
      materiales: [
        'Vela dorada, amarilla o verde (nueva)', 'Vela blanca (nueva)', 'Sal', '1 hoja de laurel', 'Canela en polvo', 'Una moneda',
        'Incienso palo santo, copal o sándalo', 'Un vaso de agua', 'Papel y bolígrafo', '1 plato o base para colocar las velas'
      ],
      nota: 'Nota: las velas que sean tipo flauta.'
    },
    {
      id: 'eternidad',
      nombre: 'Eternidad',
      tipo: 'Masterclass',
      lema: 'Honrar el amor que trasciende el tiempo',
      inicio: '2026-10-22T19:00:00-06:00',
      fin: '2026-10-22T21:00:00-06:00',
      modalidad: 'Online',
      aportacion: '$333',
      flyer: 'img/eventos/eternidad.jpg',
      materialesTitulo: 'Ritual · Lista de materiales',
      materiales: [
        '1 vela violeta', '1 plato blanco de cerámica', 'Sal de grano', '1 cucharadita de miel', 'Lavanda seca (opcional)',
        '1 vaso pequeño con agua', 'Cerillos de madera', 'Imagen del Arcángel Zadquiel (opcional)'
      ]
    },
    {
      id: 'angel-whispers',
      nombre: 'Angel Whispers',
      tipo: 'Masterclass',
      lema: 'Ángeles, señales y guía divina',
      inicio: '2026-10-08T19:00:00-06:00',
      fin: '2026-10-08T21:00:00-06:00',
      modalidad: 'Online',
      aportacion: '$333',
      flyer: 'img/eventos/angel-whispers.jpg',
      listaTitulo: 'En esta masterclass exploramos',
      lista: [
        ['Quiénes son los ángeles y cómo nos acompañan'], ['Arcángeles y sus diferentes energías'], ['Cómo reconocer sus señales y mensajes'],
        ['Números y sincronicidades angelicales'], ['Cómo pedir guía y protección'], ['Cómo conectar con tu ángel de la guarda'],
        ['Práctica de conexión y canalización'], ['Meditación guiada para recibir un mensaje']
      ]
    }
  ];

  const root = document.getElementById('eventos');
  if (!root) return;

  const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const tz = { timeZone: 'America/Mexico_City' };
  const fecha = iso => new Intl.DateTimeFormat('es-MX', { ...tz, weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' }).format(new Date(iso));
  const fechaCorta = iso => new Intl.DateTimeFormat('es-MX', { ...tz, day: 'numeric', month: 'short', year: 'numeric' }).format(new Date(iso));
  const hora = iso => new Intl.DateTimeFormat('es-MX', { ...tz, hour: 'numeric', minute: '2-digit', hour12: true }).format(new Date(iso)).replace(/\s?([ap])\.?\s?m\.?/i, (m, x) => ` ${x.toUpperCase()}M`);
  const cap = s => s.charAt(0).toUpperCase() + s.slice(1);
  const wa = text => `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(text)}`;
  const icon = id => `<svg width="16" height="16" aria-hidden="true"><use href="#${id}"/></svg>`;
  const spark = '<svg class="spark" aria-hidden="true"><use href="#spark"/></svg>';

  const lista = e => e.lista ? `<div class="ev-block"><p class="label soft">${esc(e.listaTitulo)}</p><ul class="ev-list">${e.lista.map(([t, d]) =>
    `<li>${spark}<span><strong>${esc(t)}</strong>${d ? ` <span>${esc(d)}</span>` : ''}</span></li>`).join('')}</ul></div>` : '';
  const materiales = (e, open) => e.materiales ? `<details class="ev-more"${open ? ' open' : ''}><summary><span>${esc(e.materialesTitulo)}</span><span class="plus">${icon('plus')}</span></summary>
    <ul class="ev-mats">${e.materiales.map(m => `<li>${esc(m)}</li>`).join('')}</ul>${e.nota ? `<p class="ev-note">${esc(e.nota)}</p>` : ''}</details>` : '';

  function proximo(e) {
    const msg = `Hola Janine, quiero inscribirme a la masterclass ${e.nombre} (${fechaCorta(e.inicio)}).`;
    return `<article class="ev-feature rv">
      <figure class="ev-flyer frame-white"><img src="${e.flyer}" alt="Flyer de ${esc(e.nombre)}" loading="lazy" decoding="async" width="900" height="1600"></figure>
      <div class="ev-body">
        <span class="ev-badge">Próxima masterclass</span>
        <h3 class="h2">${esc(e.nombre)}</h3>
        <p class="ev-lema">${esc(e.lema)}</p>
        <ul class="ev-meta">
          <li>${esc(cap(fecha(e.inicio)))}</li>
          <li>${esc(hora(e.inicio))} - ${esc(hora(e.fin))} (CDMX)</li>
          <li>${esc(e.modalidad)}</li>
          <li>Aportación amorosa: ${esc(e.aportacion)}</li>
        </ul>
        <a class="btn" href="${wa(msg)}" target="_blank" rel="noopener">Inscribirme · ${esc(e.aportacion)}<span class="ico">${icon('arrow-ne')}</span></a>
        ${lista(e)}
        ${materiales(e, false)}
      </div>
    </article>`;
  }

  function pasado(e, k) {
    return `<article class="ev-past rv" style="--d:${k * 120}ms">
      <figure class="ev-flyer frame-white"><img src="${e.flyer}" alt="Flyer de ${esc(e.nombre)}" loading="lazy" decoding="async" width="900" height="1600"></figure>
      <div class="ev-past-body">
        <p class="label soft">${esc(e.tipo || 'Masterclass')} · ${esc(fechaCorta(e.inicio))}</p>
        <h3 class="h3">${esc(e.nombre)}</h3>
        <p class="ev-lema">${esc(e.lema)}</p>
        ${e.lista ? `<details class="ev-more"><summary><span>${esc(e.listaTitulo)}</span><span class="plus">${icon('plus')}</span></summary>
          <ul class="ev-mats">${e.lista.map(([t]) => `<li>${esc(t)}</li>`).join('')}</ul></details>` : ''}
        ${materiales(e, false)}
      </div>
    </article>`;
  }

  const now = Date.now();
  const upcoming = EVENTOS.filter(e => new Date(e.fin).getTime() > now).sort((a, b) => new Date(a.inicio) - new Date(b.inicio));
  const past = EVENTOS.filter(e => new Date(e.fin).getTime() <= now).sort((a, b) => new Date(b.inicio) - new Date(a.inicio));
  const avisame = wa('Hola Janine, quiero enterarme de las próximas masterclasses.');

  root.innerHTML = `
    ${upcoming.length ? upcoming.map(proximo).join('') : `<p class="ev-empty rv">Pronto anunciaremos la próxima masterclass.</p>`}
    ${past.length ? `<h3 class="subhead rv">Anteriores</h3><div class="ev-past-grid">${past.map(pasado).join('')}</div>` : ''}
    <div class="ev-notify rv">
      <p>¿Quieres enterarte de las próximas masterclasses?</p>
      <a class="text-link" href="${avisame}" target="_blank" rel="noopener">Avísame por WhatsApp ${icon('arrow')}</a>
    </div>`;
})();
