// Landschaft (Voci-Belohnungen) und Haustier-Accessoires (Mathe-Belohnungen)
const OUT = 'stroke="#2B1A4F" stroke-width="2" stroke-linejoin="round"';
const flowers = (x,y) => [[0,0,'#FF5FA8'],[14,4,'#FFD86B'],[-12,6,'#B79CFF'],[6,10,'#FFFFFF']].map(([dx,dy,c])=>`<path d="M${x+dx} ${y+dy+14} V${y+dy+2}" stroke="#2F8A3A" stroke-width="2"/><g transform="translate(${x+dx} ${y+dy})">${[0,72,144,216,288].map(a=>`<circle cx="${(4*Math.cos(a*Math.PI/180)).toFixed(1)}" cy="${(4*Math.sin(a*Math.PI/180)).toFixed(1)}" r="3.4" fill="${c}"/>`).join('')}<circle r="2.4" fill="#FFB020"/></g>`).join('');
const pine = (x,y,s=1) => `<g transform="translate(${x} ${y}) scale(${s})"><rect x="-4" y="0" width="8" height="12" fill="#7A4F2C"/><path d="M0 -52 L-18 -22 L-10 -22 L-24 0 L24 0 L10 -22 L18 -22 Z" fill="#2E8B57" ${OUT}/></g>`;
const butterfly = (x,y,c) => `<g transform="translate(${x} ${y})"><ellipse cx="-6" cy="-3" rx="6" ry="5" fill="${c}" stroke="#2B1A4F" stroke-width="1.2"/><ellipse cx="6" cy="-3" rx="6" ry="5" fill="${c}" stroke="#2B1A4F" stroke-width="1.2"/><ellipse cx="-5" cy="4" rx="4" ry="3.5" fill="${c}" stroke="#2B1A4F" stroke-width="1.2"/><ellipse cx="5" cy="4" rx="4" ry="3.5" fill="${c}" stroke="#2B1A4F" stroke-width="1.2"/><rect x="-1" y="-6" width="2" height="12" rx="1" fill="#2B1A4F"/></g>`;
const cloud = (x,y,s=1) => `<g transform="translate(${x} ${y}) scale(${s})" fill="#FFFFFF"><ellipse cx="0" cy="0" rx="22" ry="12"/><ellipse cx="18" cy="-6" rx="16" ry="12"/><ellipse cx="-18" cy="2" rx="14" ry="9"/><ellipse cx="34" cy="2" rx="14" ry="9"/></g>`;

// layer: far (vor dem hinteren Hügel), mid (auf dem hinteren Hügel), near (vorne)
const LAND_ITEMS = [
  {id:'sun', name:'Sonne', layer:'far', svg:`<g transform="translate(345 48)"><g stroke="#FFB020" stroke-width="4" stroke-linecap="round">${[0,45,90,135,180,225,270,315].map(a=>`<line x1="${(30*Math.cos(a*Math.PI/180)).toFixed(1)}" y1="${(30*Math.sin(a*Math.PI/180)).toFixed(1)}" x2="${(38*Math.cos(a*Math.PI/180)).toFixed(1)}" y2="${(38*Math.sin(a*Math.PI/180)).toFixed(1)}"/>`).join('')}</g><circle r="24" fill="#FFD86B" ${OUT}/><circle cx="-8" cy="-3" r="2.5" fill="#2B1A4F"/><circle cx="8" cy="-3" r="2.5" fill="#2B1A4F"/><path d="M-8 7 Q0 13 8 7" stroke="#2B1A4F" stroke-width="2" fill="none" stroke-linecap="round"/></g>`},
  {id:'cloud1', name:'Wolke', layer:'far', svg:cloud(70,48)},
  {id:'mountains', name:'Berge', layer:'far', svg:`<path d="M10 180 L85 78 L160 180 Z" fill="#A9B4D6" ${OUT}/><path d="M85 78 L68 101 L78 97 L85 105 L93 96 L103 101 Z" fill="#FFFFFF"/><path d="M110 180 L200 58 L290 180 Z" fill="#9AA6CC" ${OUT}/><path d="M200 58 L180 85 L192 80 L200 90 L209 79 L222 86 Z" fill="#FFFFFF"/>`},
  {id:'tree1', name:'Laubbaum', layer:'near', svg:`<g transform="translate(55 222)"><rect x="-6" y="-10" width="12" height="34" fill="#8A5A32" ${OUT}/><circle cx="0" cy="-30" r="26" fill="#4CB05A" ${OUT}/><circle cx="-14" cy="-20" r="14" fill="#4CB05A"/><circle cx="8" cy="-38" r="5" fill="#FF5FA8"/><circle cx="-10" cy="-26" r="4" fill="#FF5FA8"/><circle cx="12" cy="-20" r="4" fill="#FF5FA8"/></g>`},
  {id:'flowers1', name:'Blumenwiese', layer:'near', svg:flowers(30,268)},
  {id:'house', name:'Chalet', layer:'near', svg:`<g transform="translate(150 200)"><rect x="-30" y="-4" width="60" height="40" fill="#C98A50" ${OUT}/><path d="M-40 -2 L0 -34 L40 -2 Z" fill="#B5473C" ${OUT}/><rect x="-22" y="6" width="14" height="12" fill="#BFE9FF" ${OUT}/><rect x="8" y="6" width="14" height="12" fill="#BFE9FF" ${OUT}/><rect x="-7" y="16" width="14" height="20" fill="#7A4F2C" ${OUT}/><path d="M-26 22 H-8 M8 22 H26" stroke="#FF5FA8" stroke-width="4"/></g>`},
  {id:'pond', name:'Teich', layer:'near', svg:`<ellipse cx="275" cy="252" rx="48" ry="14" fill="#5BB8F0" ${OUT}/><path d="M250 250 Q258 246 266 250 M285 255 Q293 251 301 255" stroke="#FFFFFF" stroke-width="2" fill="none" stroke-linecap="round"/>`},
  {id:'duck', name:'Ente', layer:'near', svg:`<g transform="translate(262 246)"><ellipse cx="0" cy="0" rx="11" ry="7" fill="#FFD86B" ${OUT}/><circle cx="9" cy="-8" r="6" fill="#FFD86B" ${OUT}/><path d="M14 -8 L20 -6 L14 -5 Z" fill="#FF8A3D"/><circle cx="10" cy="-9" r="1.3" fill="#2B1A4F"/></g>`},
  {id:'cloud2', name:'Wölkchen', layer:'far', svg:cloud(235,32,0.8)},
  {id:'butterfly1', name:'Schmetterling', layer:'near', svg:butterfly(190,226,'#FF8CC6')},
  {id:'fence', name:'Zaun', layer:'near', svg:`<g fill="#F4E3C8" ${OUT}>${[0,1,2,3,4,5].map(i=>`<path d="M${84+i*16} 262 V242 L${90+i*16} 236 L${96+i*16} 242 V262 Z"/>`).join('')}</g><path d="M82 248 H180 M82 256 H180" stroke="#C9A87A" stroke-width="3"/>`},
  {id:'pine1', name:'Tanne', layer:'near', svg:pine(345,222)},
  {id:'mushrooms', name:'Pilze', layer:'near', svg:`<g transform="translate(110 284)"><rect x="-3" y="-8" width="6" height="10" fill="#FFF3E0" ${OUT}/><path d="M-12 -8 Q0 -24 12 -8 Z" fill="#E8453C" ${OUT}/><circle cx="-4" cy="-13" r="2" fill="#fff"/><circle cx="4" cy="-11" r="1.6" fill="#fff"/></g><g transform="translate(128 288) scale(.7)"><rect x="-3" y="-8" width="6" height="10" fill="#FFF3E0" ${OUT}/><path d="M-12 -8 Q0 -24 12 -8 Z" fill="#E8453C" ${OUT}/><circle cx="0" cy="-13" r="2" fill="#fff"/></g>`},
  {id:'birds', name:'Vögel', layer:'far', svg:`<path d="M140 62 q6 -6 12 0 q6 -6 12 0 M170 78 q5 -5 10 0 q5 -5 10 0" stroke="#2B1A4F" stroke-width="2.4" fill="none" stroke-linecap="round"/>`},
  {id:'flowers2', name:'Blumen', layer:'near', svg:flowers(215,282)},
  {id:'pine2', name:'Kleine Tanne', layer:'near', svg:pine(372,236,0.75)},
  {id:'cow', name:'Kuh', layer:'near', svg:`<g transform="translate(205 246)"><rect x="-18" y="6" width="5" height="12" fill="#fff" ${OUT}/><rect x="10" y="6" width="5" height="12" fill="#fff" ${OUT}/><ellipse cx="0" cy="0" rx="22" ry="12" fill="#FFFFFF" ${OUT}/><ellipse cx="-6" cy="-3" rx="6" ry="4" fill="#2B1A4F"/><ellipse cx="9" cy="3" rx="5" ry="3.5" fill="#2B1A4F"/><ellipse cx="25" cy="-8" rx="9" ry="8" fill="#FFFFFF" ${OUT}/><ellipse cx="29" cy="-4" rx="5" ry="3.5" fill="#FFB3C8"/><path d="M20 -15 L17 -21 M29 -15 L32 -21" stroke="#2B1A4F" stroke-width="2" stroke-linecap="round"/><circle cx="24" cy="-10" r="1.4" fill="#2B1A4F"/><circle cx="25" cy="4" r="3.5" fill="#FFD86B" stroke="#2B1A4F" stroke-width="1"/></g>`},
  {id:'rainbow', name:'Regenbogen', layer:'far', svg:`<g fill="none" stroke-width="8">${['#FF5F5F','#FFA94D','#FFD86B','#6CD47A','#5BB8F0','#B79CFF'].map((c,i)=>`<path d="M${210+i*8} 182 A${95-i*8} ${95-i*8} 0 0 1 ${400-i*8} 182" stroke="${c}"/>`).join('')}</g>`},
  {id:'bench', name:'Bank', layer:'near', svg:`<g transform="translate(330 268)"><rect x="-22" y="-14" width="44" height="6" rx="2" fill="#C98A50" ${OUT}/><rect x="-22" y="-4" width="44" height="6" rx="2" fill="#C98A50" ${OUT}/><path d="M-18 2 V12 M18 2 V12" stroke="#2B1A4F" stroke-width="3"/></g>`},
  {id:'sheep', name:'Schaf', layer:'near', svg:`<g transform="translate(160 278)"><path d="M-8 6 V14 M8 6 V14" stroke="#2B1A4F" stroke-width="3"/><g fill="#FFFFFF" ${OUT}><circle cx="-8" cy="0" r="8"/><circle cx="2" cy="-4" r="9"/><circle cx="10" cy="2" r="8"/><circle cx="0" cy="4" r="8"/></g><ellipse cx="-16" cy="-2" rx="6" ry="7" fill="#4A3D6E"/><circle cx="-17" cy="-3" r="1.3" fill="#fff"/></g>`},
  {id:'windmill', name:'Windmühle', layer:'mid', svg:`<g transform="translate(60 168)"><path d="M-10 0 L-6 -40 L6 -40 L10 0 Z" fill="#FFF3E0" ${OUT}/><g transform="translate(0 -42)">${[0,90,180,270].map(a=>`<rect x="-3" y="-24" width="6" height="22" fill="#FF8CC6" stroke="#2B1A4F" stroke-width="1.5" transform="rotate(${a+20})"/>`).join('')}<circle r="3.5" fill="#2B1A4F"/></g></g>`},
  {id:'butterfly2', name:'Blauer Falter', layer:'near', svg:butterfly(305,214,'#7CF0D6')},
  {id:'kite', name:'Drachen', layer:'far', svg:`<path d="M250 96 Q262 140 300 170" stroke="#2B1A4F" stroke-width="1.2" fill="none"/><g transform="translate(250 92)"><path d="M0 -18 L13 0 L0 20 L-13 0 Z" fill="#FF5FA8" ${OUT}/><path d="M0 -18 V20 M-13 0 H13" stroke="#2B1A4F" stroke-width="1.2"/></g>`},
  {id:'balloon', name:'Heissluftballon', layer:'far', svg:`<g transform="translate(150 105)"><path d="M-6 22 L-5 30 M6 22 L5 30" stroke="#2B1A4F" stroke-width="1.5"/><rect x="-6" y="29" width="12" height="8" fill="#C98A50" ${OUT}/><ellipse cx="0" cy="0" rx="18" ry="22" fill="#FFD86B" ${OUT}/><path d="M0 -22 Q-10 0 -4 22 M0 -22 Q10 0 4 22" stroke="#FF5FA8" stroke-width="5" fill="none"/></g>`},
  {id:'flowers3', name:'Blumenbeet', layer:'near', svg:flowers(372,280)},
  {id:'castle', name:'Schloss', layer:'mid', svg:`<g transform="translate(305 168)"><rect x="-22" y="-28" width="44" height="28" fill="#F1E6FF" ${OUT}/><rect x="-30" y="-44" width="14" height="44" fill="#F1E6FF" ${OUT}/><rect x="16" y="-44" width="14" height="44" fill="#F1E6FF" ${OUT}/><path d="M-32 -44 L-23 -60 L-14 -44 Z M14 -44 L23 -60 L32 -44 Z" fill="#FF5FA8" ${OUT}/><path d="M-6 0 V-12 Q0 -18 6 -12 V0 Z" fill="#7A4F2C"/><path d="M-23 -60 V-68 L-16 -65 L-23 -62" fill="#7CF0D6" stroke="#2B1A4F" stroke-width="1"/></g>`}
];

function landscapeSVG(n){
  const on = LAND_ITEMS.slice(0, n);
  const layer = l => on.filter(i=>i.layer===l).map(i=>i.svg).join('');
  return `<svg viewBox="0 0 400 300" role="img" aria-label="Deine Landschaft mit ${n} Teilen">
<rect width="400" height="300" fill="#A8DDFF"/>${layer('far')}
<path d="M0 182 Q100 140 200 172 T400 160 V300 H0 Z" fill="#8FD97A"/>${layer('mid')}
<path d="M0 222 Q120 196 240 216 T400 210 V300 H0 Z" fill="#6CC45A"/>${layer('near')}
</svg>`;
}

// Haustier-Accessoires: (x,y) = Ankerpunkt
const PET_ANCHORS = {
  cat:   {head:[70,30], eyes:[70,62], neck:[70,93], ear:[47,30], ear2:[93,30]},
  dog:   {head:[70,30], eyes:[70,58], neck:[70,95], ear:[40,42], ear2:[100,42]},
  bunny: {head:[70,38], eyes:[70,64], neck:[70,97], ear:[55,2],  ear2:[85,2]}
};
const ACC = [
  {id:'collar', name:'Halsband', slot:'neck', at:'neck', svg:(x,y)=>`<path d="M${x-24} ${y-3} Q${x} ${y+9} ${x+24} ${y-3}" stroke="#2B1A4F" stroke-width="8" fill="none" stroke-linecap="round"/><path d="M${x-24} ${y-3} Q${x} ${y+9} ${x+24} ${y-3}" stroke="#E0438E" stroke-width="5" fill="none" stroke-linecap="round"/>`},
  {id:'bow', name:'Schleife', slot:'ear', at:'ear', svg:(x,y)=>`<g transform="translate(${x} ${y}) rotate(-15) scale(.7)"><path d="M0 0 C-10 -14 -26 -10 -24 2 C-22 12 -10 10 0 0 Z M0 0 C10 -14 26 -10 24 2 C22 12 10 10 0 0 Z" fill="#FF6FAE" stroke="#2B1A4F" stroke-width="2"/><circle r="5" fill="#E0438E" stroke="#2B1A4F" stroke-width="1.5"/></g>`},
  {id:'partyhat', name:'Partyhut', slot:'head', at:'head', svg:(x,y)=>`<g transform="translate(${x} ${y+4})"><path d="M-14 0 L0 -30 L14 0 Z" fill="#7CF0D6" stroke="#2B1A4F" stroke-width="2" stroke-linejoin="round"/><path d="M-9 -9 L9 -9 M-5 -19 L5 -19" stroke="#FF5FA8" stroke-width="3"/><circle cy="-32" r="4.5" fill="#FFD86B" stroke="#2B1A4F" stroke-width="1.5"/></g>`},
  {id:'sunglasses', name:'Sonnenbrille', slot:'eyes', at:'eyes', svg:(x,y)=>`<g transform="translate(${x} ${y})"><rect x="-24" y="-7" width="19" height="14" rx="5" fill="#2B1A4F"/><rect x="5" y="-7" width="19" height="14" rx="5" fill="#2B1A4F"/><path d="M-5 -2 H5" stroke="#2B1A4F" stroke-width="3"/><path d="M-20 -3 L-14 -3 M9 -3 L15 -3" stroke="#7CF0D6" stroke-width="2" stroke-linecap="round"/></g>`},
  {id:'flower', name:'Blume', slot:'flower', at:'ear2', svg:(x,y)=>`<g transform="translate(${x} ${y})">${[0,72,144,216,288].map(a=>`<circle cx="${(7*Math.cos(a*Math.PI/180)).toFixed(1)}" cy="${(7*Math.sin(a*Math.PI/180)).toFixed(1)}" r="5.5" fill="#FFD86B" stroke="#2B1A4F" stroke-width="1.2"/>`).join('')}<circle r="4" fill="#FF8A3D"/></g>`},
  {id:'bowtie', name:'Fliege', slot:'neck', at:'neck', svg:(x,y)=>`<g transform="translate(${x} ${y+4})"><path d="M0 0 L-14 -8 L-14 8 Z M0 0 L14 -8 L14 8 Z" fill="#5BB8F0" stroke="#2B1A4F" stroke-width="2" stroke-linejoin="round"/><circle r="4" fill="#2B1A4F"/></g>`},
  {id:'scarf', name:'Schal', slot:'neck', at:'neck', svg:(x,y)=>`<path d="M${x-26} ${y-4} Q${x} ${y+12} ${x+26} ${y-4} L${x+24} ${y+4} Q${x} ${y+20} ${x-24} ${y+4} Z" fill="#FF5FA8" stroke="#2B1A4F" stroke-width="2"/><path d="M${x+10} ${y+8} L${x+14} ${y+30} L${x+24} ${y+28} L${x+18} ${y+6} Z" fill="#FF5FA8" stroke="#2B1A4F" stroke-width="2"/><path d="M${x+13} ${y+16} L${x+21} ${y+15} M${x+14} ${y+22} L${x+22} ${y+21}" stroke="#FFFFFF" stroke-width="2"/>`},
  {id:'crown', name:'Krönchen', slot:'head', at:'head', svg:(x,y)=>`<g transform="translate(${x} ${y+4})"><path d="M-16 0 L-16 -16 L-8 -8 L0 -20 L8 -8 L16 -16 L16 0 Z" fill="#FFD86B" stroke="#2B1A4F" stroke-width="2" stroke-linejoin="round"/><circle cy="-6" r="3" fill="#FF5FA8"/></g>`},
  {id:'bell', name:'Glöckchen', slot:'charm', at:'neck', svg:(x,y)=>`<g transform="translate(${x} ${y+9})"><circle r="6.5" fill="#FFD86B" stroke="#2B1A4F" stroke-width="1.8"/><path d="M-4 1 H4" stroke="#2B1A4F" stroke-width="1.5"/><circle cy="3" r="1.4" fill="#2B1A4F"/></g>`},
  {id:'heartglasses', name:'Herzbrille', slot:'eyes', at:'eyes', svg:(x,y)=>`<g transform="translate(${x} ${y})">${[-13,13].map(dx=>`<path transform="translate(${dx} 0)" d="M0 7 L-9 -1 A5 5 0 0 1 0 -6 A5 5 0 0 1 9 -1 Z" fill="#FF5FA8" stroke="#2B1A4F" stroke-width="1.8" stroke-linejoin="round"/>`).join('')}<path d="M-4 -2 H4" stroke="#2B1A4F" stroke-width="2"/></g>`},
  {id:'wizard', name:'Zauberhut', slot:'head', at:'head', svg:(x,y)=>`<g transform="translate(${x} ${y+4})"><ellipse rx="22" ry="5" fill="#5B3FA6" stroke="#2B1A4F" stroke-width="2"/><path d="M-13 -2 L4 -44 L13 -2 Z" fill="#7A5BD0" stroke="#2B1A4F" stroke-width="2" stroke-linejoin="round"/><path d="M0 -22 l1.6 3.4 3.6.5 -2.6 2.5 .6 3.6 -3.2 -1.7 -3.2 1.7 .6 -3.6 -2.6 -2.5 3.6 -.5z" fill="#FFD86B"/></g>`},
  {id:'glitter', name:'Glitzer', slot:'extra', at:'eyes', svg:(x,y)=>[[-50,-30,1],[48,-20,.8],[-44,30,.7],[50,40,.9]].map(([dx,dy,s],i)=>`<path class="tw d${i%3}" transform="translate(${x+dx} ${y+dy}) scale(${s*.6})" d="M0 -16 L4 -4 L16 0 L4 4 L0 16 L-4 4 L-16 0 L-4 -4 Z" fill="${['#FFD86B','#7CF0D6','#FF8CC6'][i%3]}"/>`).join('')}
];
function petAccSVG(pet, equipped){
  const A = PET_ANCHORS[pet]; if (!A) return '';
  const order = ['scarf','collar','bowtie','bell','bow','flower','partyhat','crown','wizard','sunglasses','heartglasses','glitter'];
  return order.filter(id=>equipped && Object.values(equipped).includes(id)).map(id=>{ const a = ACC.find(x=>x.id===id); const [x,y] = A[a.at]; return a.svg(x,y); }).join('');
}
function accIcon(id){
  const a = ACC.find(x=>x.id===id);
  if (id === 'glitter') return `<svg viewBox="-30 -30 60 60" width="44" height="44" aria-hidden="true"><path d="M-6 -22 L-2 -10 L10 -6 L-2 -2 L-6 10 L-10 -2 L-22 -6 L-10 -10 Z" fill="#FFD86B"/><path d="M14 4 L16.5 11.5 L24 14 L16.5 16.5 L14 24 L11.5 16.5 L4 14 L11.5 11.5 Z" fill="#7CF0D6"/></svg>`;
  const y = id==='bell' ? 22 : a.at==='neck' ? 22 : a.at==='head' ? 40 : 30;
  const k = id==='bell' ? 2.6 : a.at==='neck' ? 1.2 : 1.5;
  return `<svg viewBox="0 0 60 60" width="44" height="44" aria-hidden="true"><g transform="translate(30 30) scale(${k}) translate(-30 -30)">${a.svg(30, y)}</g></svg>`;
}
