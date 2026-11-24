// Eingebaute Start-Themen (NMG, 5./6. Klasse)
const BUILTIN_TOPICS = [
{
  id: 'wasser', title: 'Der Wasserkreislauf', level: '5./6. Klasse',
  summary: {
    sections: [
      {heading: 'Was ist der Wasserkreislauf?', points: [
        'Das Wasser auf der Erde ist immer unterwegs – es geht nicht verloren.',
        'Es wechselt zwischen flüssig (Wasser), gasförmig (Wasserdampf) und fest (Eis, Schnee).',
        'Die Sonne ist der «Motor»: Ihre Wärme hält den Kreislauf in Bewegung.'
      ]},
      {heading: 'Die Stationen', points: [
        'Verdunstung: Die Sonne erwärmt Meere, Seen und Flüsse. Das Wasser wird zu Wasserdampf und steigt auf.',
        'Kondensation: In der Höhe ist es kälter. Der Dampf kühlt ab und bildet winzige Tröpfchen – so entstehen Wolken.',
        'Niederschlag: Werden die Tropfen zu schwer, fallen sie als Regen, Schnee oder Hagel.',
        'Versickern und Abfliessen: Das Wasser versickert im Boden (Grundwasser) oder fliesst über Bäche und Flüsse zurück ins Meer.'
      ]},
      {heading: 'Pflanzen machen mit', points: [
        'Pflanzen nehmen Wasser mit den Wurzeln auf und geben es über die Blätter als Wasserdampf ab.'
      ]},
      {heading: 'Wasser in der Schweiz', points: [
        'Die Schweiz heisst «Wasserschloss Europas»: Grosse Flüsse wie Rhein und Rhone entspringen in den Alpen.',
        'Gletscher und Seen speichern sehr viel Wasser.'
      ]}
    ],
    lernziele: [
      'Ich kann die Stationen des Wasserkreislaufs nennen und erklären.',
      'Ich kann erklären, warum die Sonne der Motor des Wasserkreislaufs ist.'
    ]
  },
  questions: [
    {q: 'Was passiert mit dem Wasser im See, wenn die Sonne darauf scheint?', a: 'Das Wasser erwärmt sich, verdunstet und steigt als Wasserdampf in die Luft.'},
    {q: 'Wie entstehen Wolken?', a: 'Der Wasserdampf steigt auf, kühlt in der Höhe ab und bildet winzige Wassertröpfchen. Viele Tröpfchen zusammen sind eine Wolke.'},
    {q: 'Wann fällt Niederschlag aus einer Wolke?', a: 'Wenn die Tröpfchen zu gross und zu schwer werden. Dann fallen sie als Regen, Schnee oder Hagel herunter.'},
    {q: 'Nenne zwei Formen von Niederschlag.', a: 'Zum Beispiel Regen und Schnee (auch Hagel ist richtig).'},
    {q: 'Was passiert mit dem Regenwasser, wenn es auf den Boden fällt?', a: 'Es versickert im Boden und wird zu Grundwasser, oder es fliesst über Bäche und Flüsse ab.'},
    {q: 'Warum nennt man die Sonne den «Motor» des Wasserkreislaufs?', a: 'Weil ihre Wärme das Wasser verdunsten lässt. Ohne die Sonne würde der Kreislauf nicht laufen.'},
    {q: 'Wie geben Pflanzen Wasser an die Luft ab?', a: 'Sie nehmen Wasser mit den Wurzeln auf und geben es über ihre Blätter als Wasserdampf ab.'},
    {q: 'Warum nennt man die Schweiz das «Wasserschloss Europas»?', a: 'Weil in den Alpen grosse Flüsse wie Rhein und Rhone entspringen und viel Wasser in Gletschern und Seen gespeichert ist.'}
  ]
},
{
  id: 'roemer', title: 'Die Römer in der Schweiz', level: '5./6. Klasse',
  summary: {
    sections: [
      {heading: 'Die Helvetier', points: [
        'Vor den Römern lebten im Gebiet der heutigen Schweiz die Helvetier, ein keltisches Volk.',
        '58 v. Chr. wollten sie nach Gallien (Frankreich) auswandern. Julius Caesar besiegte sie bei Bibracte und schickte sie zurück.',
        'Danach wurde das Gebiet nach und nach Teil des Römischen Reiches – für rund 400 Jahre.'
      ]},
      {heading: 'Römische Städte und Gutshöfe', points: [
        'Wichtige Römerstädte waren Augusta Raurica (bei Augst) und Aventicum (Avenches) mit einem grossen Amphitheater.',
        'Auf dem Land gab es Gutshöfe («villa rustica») mit Wohnhaus, Ställen und Feldern.'
      ]},
      {heading: 'Was die Römer mitbrachten', points: [
        'Gepflasterte Strassen, damit Soldaten, Händler und Waren schnell reisen konnten.',
        'Häuser aus Stein, Bäder (Thermen) und Wasserleitungen.',
        'Münzen, die lateinische Sprache und die Schrift.'
      ]},
      {heading: 'Was davon geblieben ist', points: [
        'Französisch, Italienisch und Rätoromanisch stammen vom Latein ab.',
        'Viele Ruinen kann man heute noch besuchen, zum Beispiel in Augusta Raurica.'
      ]}
    ],
    lernziele: [
      'Ich kann erzählen, wie die Römer in unser Gebiet kamen.',
      'Ich kann Dinge nennen, die die Römer mitgebracht haben und die es heute noch gibt.'
    ]
  },
  questions: [
    {q: 'Welches Volk lebte im Gebiet der heutigen Schweiz, bevor die Römer kamen?', a: 'Die Helvetier, ein keltisches Volk.'},
    {q: 'Was geschah im Jahr 58 v. Chr. bei Bibracte?', a: 'Die Helvetier wollten nach Gallien auswandern. Julius Caesar besiegte sie und schickte sie zurück.'},
    {q: 'Nenne zwei römische Städte in der Schweiz.', a: 'Zum Beispiel Augusta Raurica (bei Augst) und Aventicum (Avenches).'},
    {q: 'Was ist eine «villa rustica»?', a: 'Ein römischer Gutshof auf dem Land mit Wohnhaus, Ställen und Feldern.'},
    {q: 'Nenne drei Dinge, die die Römer in unser Gebiet gebracht haben.', a: 'Zum Beispiel gepflasterte Strassen, Häuser aus Stein, Bäder (Thermen), Münzen und die lateinische Sprache.'},
    {q: 'Wozu bauten die Römer gute Strassen?', a: 'Damit Soldaten, Händler und Waren schnell von Ort zu Ort kamen.'},
    {q: 'Welche Sprachen in der Schweiz stammen vom Latein ab?', a: 'Französisch, Italienisch und Rätoromanisch.'},
    {q: 'Was waren Thermen?', a: 'Öffentliche Bäder der Römer mit warmem und kaltem Wasser, in denen man sich wusch und traf.'}
  ]
},
{
  id: 'wald', title: 'Der Wald als Lebensraum', level: '5./6. Klasse',
  summary: {
    sections: [
      {heading: 'Die Stockwerke des Waldes', points: [
        'Bodenschicht (Moosschicht): Moose, Pilze, Laub, viele kleine Tiere.',
        'Krautschicht: Gräser, Farne, Blumen.',
        'Strauchschicht: Büsche und junge Bäume, z. B. Haselstrauch.',
        'Baumschicht: die Kronen der grossen Bäume.'
      ]},
      {heading: 'Laub- und Nadelbäume', points: [
        'Laubbäume (z. B. Buche, Eiche) haben breite Blätter und verlieren sie meist im Herbst.',
        'Nadelbäume (z. B. Fichte, Tanne) haben Nadeln und bleiben meist im Winter grün. Ausnahme: Die Lärche verliert ihre Nadeln.'
      ]},
      {heading: 'Fressen und gefressen werden', points: [
        'Eine Nahrungskette zeigt, wer wen frisst: z. B. Eichel → Maus → Fuchs.',
        'Zersetzer wie Regenwürmer, Asseln und Pilze verwandeln totes Laub und tote Tiere in fruchtbare Erde (Humus).'
      ]},
      {heading: 'Warum der Wald wichtig ist', points: [
        'Bäume geben Sauerstoff ab und filtern Staub aus der Luft.',
        'In den Bergen schützt der Schutzwald vor Lawinen, Steinschlag und Erdrutschen.',
        'Menschen nutzen den Wald für Holz, zur Erholung und zum Sammeln von Pilzen und Beeren.'
      ]}
    ],
    lernziele: [
      'Ich kann die Stockwerke des Waldes nennen.',
      'Ich kann erklären, warum der Wald für Tiere und Menschen wichtig ist.'
    ]
  },
  questions: [
    {q: 'Nenne die vier Stockwerke des Waldes.', a: 'Bodenschicht (Moosschicht), Krautschicht, Strauchschicht und Baumschicht.'},
    {q: 'Was ist der Unterschied zwischen Laub- und Nadelbäumen?', a: 'Laubbäume haben breite Blätter und verlieren sie meist im Herbst. Nadelbäume haben Nadeln und bleiben meist im Winter grün.'},
    {q: 'Was machen Zersetzer wie Regenwürmer und Pilze?', a: 'Sie verwandeln totes Laub und tote Tiere in fruchtbare Erde (Humus).'},
    {q: 'Was ist eine Nahrungskette? Gib ein Beispiel.', a: 'Sie zeigt, wer wen frisst, zum Beispiel: Eichel → Maus → Fuchs.'},
    {q: 'Warum ist der Wald in den Bergen wichtig für die Menschen?', a: 'Als Schutzwald hält er Lawinen, Steinschlag und Erdrutsche auf.'},
    {q: 'Nenne zwei Tiere, die im Wald leben.', a: 'Zum Beispiel Reh, Fuchs, Specht oder Eichhörnchen.'},
    {q: 'Warum ist der Wald wichtig für die Luft?', a: 'Bäume geben Sauerstoff ab und filtern Staub aus der Luft.'},
    {q: 'Nenne zwei Arten, wie Menschen den Wald nutzen.', a: 'Zum Beispiel Holz für Möbel und zum Heizen, Erholung beim Spazieren oder Pilze und Beeren sammeln.'}
  ]
}
];

// Weitere Beispiel-Inhalte für Lernano
BUILTIN_TOPICS.push(
{
  id: 'wortarten', type: 'deutsch', title: 'Wortarten: Nomen, Verben, Adjektive', level: '5./6. Klasse',
  summary: {
    sections: [
      {heading: 'Nomen (Namenwörter)', points: [
        'Nomen bezeichnen Menschen, Tiere, Pflanzen, Dinge – und auch Gefühle und Gedanken (z. B. die Freude).',
        'Nomen schreibt man gross.',
        'Man kann einen Begleiter (Artikel) davorsetzen: der, die, das oder ein, eine.',
        'Nomen gibt es in der Einzahl und in der Mehrzahl: das Buch – die Bücher.'
      ]},
      {heading: 'Verben (Tunwörter)', points: [
        'Verben sagen, was jemand tut oder was geschieht: laufen, lachen, regnen.',
        'Die Grundform endet auf -en oder -n: spielen, sammeln.',
        'Verben verändern sich je nach Person: ich laufe, du läufst, sie läuft.'
      ]},
      {heading: 'Adjektive (Wiewörter)', points: [
        'Adjektive beschreiben, wie jemand oder etwas ist: gross, lustig, rot.',
        'Adjektive schreibt man klein.',
        'Man kann sie meistens steigern: gross – grösser – am grössten.'
      ]}
    ],
    lernziele: [
      'Ich kann Nomen, Verben und Adjektive erkennen.',
      'Ich kann Adjektive steigern und die Grundform von Verben bilden.'
    ]
  },
  questions: [
    {q: 'Woran erkennst du ein Nomen?', a: 'Man kann einen Begleiter (der, die, das) davorsetzen, und es wird grossgeschrieben.'},
    {q: 'Nenne drei Nomen: einen Menschen, ein Tier und ein Ding.', a: 'Zum Beispiel: die Lehrerin, die Katze, der Tisch.'},
    {q: 'Was sagt ein Verb aus?', a: 'Was jemand tut oder was geschieht.'},
    {q: 'Wie heisst die Grundform von «du läufst»?', a: 'laufen'},
    {q: 'Wozu brauchen wir Adjektive?', a: 'Um zu beschreiben, wie jemand oder etwas ist.'},
    {q: 'Steigere das Adjektiv «gross».', a: 'gross – grösser – am grössten'},
    {q: 'Welche Wortart ist «Freude»? Begründe.', a: 'Ein Nomen, denn man kann «die» davorsetzen (die Freude) und es wird grossgeschrieben.'},
    {q: 'Bestimme die Wortarten im Satz: «Die kleine Katze schläft.»', a: 'Die = Begleiter (Artikel), kleine = Adjektiv, Katze = Nomen, schläft = Verb.'}
  ]
},
{
  id: 'en-myday', type: 'voci', lang: 'en', title: 'My day', level: '5./6. Klasse',
  words: [
    {f: 'to get up', d: 'aufstehen'},
    {f: 'breakfast', d: '(das) Frühstück'},
    {f: 'school bag', d: 'Schultasche'},
    {f: 'lunch', d: 'Mittagessen'},
    {f: 'homework', d: 'Hausaufgaben'},
    {f: 'always', d: 'immer'},
    {f: 'never', d: 'nie'},
    {f: 'to brush (your teeth)', d: '(die Zähne) putzen'},
    {f: 'bedroom', d: 'Schlafzimmer'},
    {f: 'tired', d: 'müde'}
  ]
},
{
  id: 'fr-ecole', type: 'voci', lang: 'fr', title: "À l'école", level: '5./6. Klasse',
  words: [
    {f: 'le cahier', d: 'das Heft'},
    {f: 'le crayon', d: 'der Bleistift'},
    {f: 'la gomme', d: 'der Radiergummi'},
    {f: 'le livre', d: 'das Buch'},
    {f: 'la règle', d: 'das Lineal'},
    {f: "le sac (d'école)", d: 'die Schultasche'},
    {f: 'la trousse', d: 'das Etui'},
    {f: 'la maîtresse', d: 'die Lehrerin'},
    {f: 'apprendre', d: 'lernen'},
    {f: 'écrire', d: 'schreiben'}
  ]
},
{
  id: 'ma-grund', type: 'mathe', title: 'Grundrechnen & Sachaufgaben', level: '5. Klasse',
  tasks: [
    {q: '348 + 275 = ?', a: '623', s: '348 + 200 = 548, plus 75 = 623.'},
    {q: '1000 − 387 = ?', a: '613', s: '1000 − 400 = 600, dann 13 dazu (weil 387 = 400 − 13): 613.'},
    {q: '24 · 6 = ?', a: '144', s: '20 · 6 = 120 und 4 · 6 = 24. Zusammen 144.'},
    {q: '144 : 12 = ?', a: '12', s: '12 · 12 = 144, also 144 : 12 = 12.'},
    {q: '7 · 8 + 6 = ?', a: '62', s: 'Punkt vor Strich: 7 · 8 = 56, dann + 6 = 62.'},
    {q: '(45 − 15) : 5 = ?', a: '6', s: 'Zuerst die Klammer: 45 − 15 = 30. Dann 30 : 5 = 6.'},
    {q: '3 · 125 = ?', a: '375', s: '125 + 125 + 125 = 375.'},
    {q: 'Eine Packung hat 12 Stifte. Wie viele Stifte sind in 7 Packungen?', a: '84', s: '7 · 12 = 84 Stifte.'},
    {q: 'Lea hat 50 Franken. Sie kauft ein Buch für 23.50 Franken. Wie viele Franken bleiben ihr?', a: '26.50', s: '50 − 23.50 = 26.50 Franken.'},
    {q: 'Wie viele Minuten sind 3 Stunden?', a: '180', s: '1 Stunde = 60 Minuten. 3 · 60 = 180 Minuten.'},
    {q: 'Wie viele Zentimeter sind 2.5 Meter?', a: '250', s: '1 m = 100 cm. 2.5 · 100 = 250 cm.'},
    {q: 'Wie viel ist ein Viertel von 80?', a: '20', s: 'Ein Viertel heisst durch 4 teilen: 80 : 4 = 20.'}
  ]
}
);
