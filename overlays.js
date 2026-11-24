// Shared overlay drawings in the 585x900 coordinate space of mary.png
const OVERLAYS = {
  necklace: `<g>
<path d="M281 147 Q298 175 316 147" fill="none" stroke="#EEF4FF" stroke-width="2.4"/>
<path d="M281 147 Q298 175 316 147" fill="none" stroke="#9FB4D8" stroke-width="0.9" stroke-dasharray="1.5 2.5"/>
<g transform="translate(298 166)">
<polygon points="-7,0 7,0 10,5 0,17 -10,5" fill="#BFF3FF" stroke="#4E86B8" stroke-width="1.1"/>
<polygon points="-7,0 7,0 4,5 -4,5" fill="#F2FDFF"/>
<polygon points="-10,5 10,5 0,17" fill="#8ED8F2" opacity=".85"/>
<path class="tw" d="M13 -6 l1.6 3.6 3.6 1.6 -3.6 1.6 -1.6 3.6 -1.6 -3.6 -3.6 -1.6 3.6 -1.6z" fill="#fff"/>
</g></g>`,
  clip: `<g transform="translate(339 40) rotate(15)"><path d="M0 -13 L3.8 -4 L13 -4 L5.6 2 L8.4 11 L0 5.6 L-8.4 11 L-5.6 2 L-13 -4 L-3.8 -4 Z" fill="#FFD86B" stroke="#C98A1E" stroke-width="1.3" stroke-linejoin="round"/><circle cx="-2" cy="-3" r="2.2" fill="#FFF6C8"/></g>
<g transform="translate(352 62) rotate(-10)"><path d="M0 -8 L2.4 -2.5 L8 -2.5 L3.5 1.2 L5.2 7 L0 3.5 L-5.2 7 L-3.5 1.2 L-8 -2.5 L-2.4 -2.5 Z" fill="#7CF0D6" stroke="#2F9C87" stroke-width="1"/></g>`,
  bow: `<g transform="translate(257 32) rotate(-20)"><path d="M-3 2 L-10 20 L-4 17 L0 23 Z M3 2 L10 20 L4 17 L0 23 Z" fill="#FF8CC6" stroke="#C93C80" stroke-width="1"/><path d="M0 0 C-10 -14 -26 -10 -24 2 C-22 12 -10 10 0 0 Z" fill="#FF6FAE" stroke="#C93C80" stroke-width="1.5"/><path d="M0 0 C10 -14 26 -10 24 2 C22 12 10 10 0 0 Z" fill="#FF6FAE" stroke="#C93C80" stroke-width="1.5"/><circle r="5" fill="#E0438E"/></g>`,
  tiara: `<g transform="translate(300 10)"><path d="M-30 6 L-24 -10 L-12 0 L0 -18 L12 0 L24 -10 L30 6 Z" fill="#FFE27A" stroke="#C98A1E" stroke-width="1.5" stroke-linejoin="round"/><circle cy="-18" r="3.4" fill="#FF6FAE"/><circle cx="-24" cy="-10" r="2.6" fill="#7CF0D6"/><circle cx="24" cy="-10" r="2.6" fill="#7CF0D6"/><circle cy="0" r="3.6" fill="#BFF3FF" stroke="#4E86B8"/><path class="tw" d="M36 -14 l1.4 3 3 1.4 -3 1.4 -1.4 3 -1.4 -3 -3 -1.4 3 -1.4z" fill="#fff"/></g>`,
  bracelet: `<g transform="translate(385 463)"><ellipse rx="12" ry="4.5" fill="none" stroke="#FF6FAE" stroke-width="3.2"/><path d="M0 5 c-3 -3 -7 0 -4 3 l4 4 l4 -4 c3 -3 -1 -6 -4 -3z" fill="#FF5FA8" stroke="#C93C80" stroke-width=".8"/></g>`,
  sparkles: [[140,130,1],[455,210,.8],[115,430,.7],[480,520,1],[160,640,.8],[450,70,.6]].map(([x,y,s],i)=>`<path class="tw d${i%3}" transform="translate(${x} ${y}) scale(${s})" d="M0 -16 L4 -4 L16 0 L4 4 L0 16 L-4 4 L-16 0 L-4 -4 Z" fill="${['#FFD6F0','#7CF0D6','#FFD86B'][i%3]}"/>`).join('')
};

const PETS = {
  cat: `<g transform="translate(22 752)" stroke="#2B1A4F" stroke-width="2.5" stroke-linejoin="round">
<path d="M108 122 C138 114 138 82 124 78" fill="none" stroke="#2B1A4F" stroke-width="12" stroke-linecap="round"/>
<path d="M108 122 C138 114 138 82 124 78" fill="none" stroke="#F4B27A" stroke-width="7" stroke-linecap="round"/>
<ellipse cx="70" cy="114" rx="40" ry="28" fill="#F4B27A"/>
<path d="M40 50 L44 14 L68 36 Z" fill="#F4B27A"/><path d="M100 50 L96 14 L72 36 Z" fill="#F4B27A"/>
<circle cx="70" cy="62" r="34" fill="#F4B27A"/>
<path d="M47 40 L48 24 L59 35 Z M93 40 L92 24 L81 35 Z" fill="#FFB3C8" stroke="none"/>
<path d="M60 34 L62 43 M70 31 V41 M80 34 L78 43" stroke="#D9824A" stroke-width="3" stroke-linecap="round"/>
<ellipse cx="57" cy="62" rx="6.5" ry="8.5" fill="#2B1A4F"/><ellipse cx="83" cy="62" rx="6.5" ry="8.5" fill="#2B1A4F"/>
<circle cx="55" cy="58" r="2.5" fill="#fff" stroke="none"/><circle cx="81" cy="58" r="2.5" fill="#fff" stroke="none"/>
<ellipse cx="47" cy="75" rx="6" ry="3.5" fill="#FF9EC4" stroke="none" opacity=".8"/><ellipse cx="93" cy="75" rx="6" ry="3.5" fill="#FF9EC4" stroke="none" opacity=".8"/>
<path d="M66 73 L74 73 L70 78 Z" fill="#FF6FA8" stroke-width="1.5"/>
<path d="M62 82 Q66 87 70 80 Q74 87 78 82" fill="none" stroke-width="2"/>
<path d="M42 71 L26 68 M42 77 L27 80 M98 71 L114 68 M98 77 L113 80" stroke-width="1.6"/>
<ellipse cx="54" cy="138" rx="11" ry="7" fill="#F4B27A"/><ellipse cx="86" cy="138" rx="11" ry="7" fill="#F4B27A"/>
</g>`,
  dog: `<g transform="translate(22 752)" stroke="#2B1A4F" stroke-width="2.5" stroke-linejoin="round">
<path d="M108 118 C130 110 132 94 124 86" fill="none" stroke="#2B1A4F" stroke-width="12" stroke-linecap="round"/>
<path d="M108 118 C130 110 132 94 124 86" fill="none" stroke="#C9A06A" stroke-width="7" stroke-linecap="round"/>
<ellipse cx="70" cy="114" rx="40" ry="28" fill="#E8C79A"/>
<ellipse cx="86" cy="110" rx="11" ry="8" fill="#C9A06A" stroke="none"/>
<circle cx="70" cy="62" r="34" fill="#E8C79A"/>
<ellipse cx="37" cy="64" rx="12" ry="25" fill="#A8723E" transform="rotate(18 37 64)"/>
<ellipse cx="103" cy="64" rx="12" ry="25" fill="#A8723E" transform="rotate(-18 103 64)"/>
<ellipse cx="70" cy="78" rx="17" ry="12" fill="#FFF3E0"/>
<ellipse cx="57" cy="58" rx="6" ry="7.5" fill="#2B1A4F"/><ellipse cx="83" cy="58" rx="6" ry="7.5" fill="#2B1A4F"/>
<circle cx="55" cy="55" r="2.4" fill="#fff" stroke="none"/><circle cx="81" cy="55" r="2.4" fill="#fff" stroke="none"/>
<ellipse cx="70" cy="72" rx="6.5" ry="4.5" fill="#2B1A4F"/>
<path d="M66 85 Q70 96 74 85 Z" fill="#FF7FA8" stroke-width="1.6"/>
<path d="M60 82 Q65 87 70 80 Q75 87 80 82" fill="none" stroke-width="2"/>
<ellipse cx="54" cy="138" rx="11" ry="7" fill="#E8C79A"/><ellipse cx="86" cy="138" rx="11" ry="7" fill="#E8C79A"/>
</g>`,
  bunny: `<g transform="translate(22 752)" stroke="#2B1A4F" stroke-width="2.5" stroke-linejoin="round">
<circle cx="112" cy="112" r="12" fill="#FFFFFF"/>
<ellipse cx="70" cy="116" rx="38" ry="27" fill="#FFFFFF"/>
<ellipse cx="56" cy="18" rx="10" ry="30" fill="#FFFFFF" transform="rotate(-10 56 18)"/>
<ellipse cx="84" cy="18" rx="10" ry="30" fill="#FFFFFF" transform="rotate(10 84 18)"/>
<ellipse cx="56" cy="20" rx="4.5" ry="20" fill="#FFB3C8" stroke="none" transform="rotate(-10 56 20)"/>
<ellipse cx="84" cy="20" rx="4.5" ry="20" fill="#FFB3C8" stroke="none" transform="rotate(10 84 20)"/>
<circle cx="70" cy="66" r="31" fill="#FFFFFF"/>
<ellipse cx="58" cy="64" rx="6" ry="8" fill="#2B1A4F"/><ellipse cx="82" cy="64" rx="6" ry="8" fill="#2B1A4F"/>
<circle cx="56" cy="60" r="2.4" fill="#fff" stroke="none"/><circle cx="80" cy="60" r="2.4" fill="#fff" stroke="none"/>
<ellipse cx="48" cy="77" rx="6" ry="3.5" fill="#FF9EC4" stroke="none" opacity=".8"/><ellipse cx="92" cy="77" rx="6" ry="3.5" fill="#FF9EC4" stroke="none" opacity=".8"/>
<path d="M67 74 L73 74 L70 78 Z" fill="#FF6FA8" stroke-width="1.4"/>
<path d="M64 82 Q67 86 70 80 Q73 86 76 82" fill="none" stroke-width="2"/>
<ellipse cx="54" cy="139" rx="11" ry="7" fill="#FFFFFF"/><ellipse cx="86" cy="139" rx="11" ry="7" fill="#FFFFFF"/>
</g>`
};
