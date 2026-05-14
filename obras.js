const obras = [
            {
                "id": 2,
                "titulo": "Autorretrato IV",
                "imagen": "Imagenes/Autorretrato 4.jpg",
                "descripcion": "Una cuarta obra que retrata a su artista.",
                "medidas": "44 x 49 cm",
                "tecnica": "Acrílico sobre lienzo",
                "ano": "2026",
                "ubicacion": "Mercedes, Soriano, Uruguay",
                "detalles": [
                    "Firma en zona inferior derecha",
                    "Basado en el artista",
                    "Tonos monocromáticos",
                    "Disponible para venta"
                ]
            },
            {
                "id": 3,
                "titulo": "Autorretrato III",
                "imagen": "Imagenes/Autorretrato 3.jpg",
                "descripcion": "Una tercera obra que retrata a su artista.",
                "medidas": "44,5 x 41 cm",
                "tecnica": "Acrílico sobre lienzo",
                "ano": "2026",
                "ubicacion": "Mercedes, Soriano, Uruguay",
                "detalles": [
                    "Firma en zona",
                    "Basado en el artista",
                    "Trabajo en tonos cálidos",
                    "Disponible para venta"
                ]
            },
            {
                "id": 4,
                "titulo": "Autorretrato II",
                "imagen": "Imagenes/Autorretrato 2.jpg",
                "descripcion": "Una segunda obra que retrata a su artista.",
                "medidas": "44 x 48,5 cm",
                "tecnica": "Acrílico sobre lienzo",
                "ano": "2026",
                "ubicacion": "Mercedes, Soriano, Uruguay",
                "detalles": [
                    "Firma en zona",
                    "Basado en el artista",
                    "Trabajo en tonos fríos con toques de calidez",
                    "Disponible para venta"
                ]
            },
        {
                "id": 5,
                "titulo": "Autorretrato",
                "imagen": "Imagenes/Autorretrato 1.jpg",
                "descripcion": "Una primera obra que retrata a su artista, siendo el primer autorretrato hecho por Davica.",
                "medidas": "44,5 x 50 cm",
                "tecnica": "Acrílico sobre lienzo",
                "ano": "2026",
                "ubicacion": "Mercedes, Soriano, Uruguay",
                "detalles": [
                    "Firma en zona",
                    "Basado en el artista",
                    "Tonos verdes y naranjas",
                    "Disponible para venta"
                ]
            },
            {
                "id": 6,
                "titulo": "Historia Encontrada",
                "imagen": "Imagenes/Historia Encontrada.jpg",
                "descripcion": "Franz Kafka fue un escritor checo en lengua alemana cuya obra señala el inicio de la profunda renovación que experimentaría la novela europea en las primeras décadas del siglo XX. Sus novelas reflejan una realidad en apariencia reconocible y cotidiana, pero sometida a inquietantes mutaciones que sumergen al lector en una opresiva y asfixiante pesadilla, plasmación de las angustias e incertidumbres que embargan al hombre contemporáneo. El cuadro hace referencia de su obra más famosa, La Metamorfosis",
                "medidas": "72,5 x 89 cm",
                "tecnica": "Acrílico sobre lienzo",
                "ano": "2026",
                "ubicacion": "Mercedes, Soriano, Uruguay",
                "detalles": [
                    "Firma en zona inferior derecha",
                    "Perteneciente a serie: Artistas y Legado",
                    "Fondo trabajado con espátula",
                    "Disponible para venta"
                ]
            },
            {
                "id": 7,
                "titulo": "Noche en el Cabo",
                "imagen": "Imagenes/Noche en el Cabo.jpg",
                "descripcion": "Cabo Polonio es caracterizado por su belleza natural agreste y su estilo de vida único, habitado por una pequeña comunidad que vive en armonía con la naturaleza, siendo famoso por sus colonias de lobos marinos, el faro y la experiencia de desconexión total.",
                "medidas": "40 x 50 cm",
                "tecnica": "Acrílico sobre cartón entelado",
                "ano": "2026",
                "ubicacion": "Mercedes, Soriano, Uruguay",
                "detalles": [
                    "Firma en zona inferior derecha",
                    "Se alterna la espátula y el pincel",
                    "Punto focal central",
                    "Disponible para venta"
                ]
            },
            {
                "id": 8,
                "titulo": "Rinconcitos del Diablo",
                "imagen": "Imagenes/Rinconcitos del Diablo.jpg",
                "descripcion": "Punta del Diablo se vuelve susurro, el murmullo de las olas, una guitarra lejana, la conversación baja en algún rancho frente a la playa. El cielo limpio, puro, allí el mundo parece más lento, allí el aire huele a sal y a redes recién tendidas y a madera húmeda.",
                "medidas": "58 x 66 cm",
                "tecnica": "Acrílico sobre lienzo",
                "ano": "2026",
                "ubicacion": "Mercedes, Soriano, Uruguay",
                "detalles": [
                    "Firma en zona inferior derecha",
                    "Pintura basada en fotografía tomada por el artista",
                    "Alternancia de tonos pasteles",
                    "Disponible para venta"
                ]
            },
            {
                "id": 9,
                "titulo": "Pueblito de Pescadores",
                "imagen": "Imagenes/Pueblito de Pescadores.jpg",
                "descripcion": "Un pueblito que huele a sal y a madera húmeda, donde las historias contadas se pierden al caer la tarde. Las barcas descansan sobre la arena como animales mansos, pintadas de colores vivos que desafían el cambiante color del mar. Allí, el tiempo no corre: camina descalzo. Al caer la tarde, el sol se derrama sobre el horizonte y enciende las fachadas simples, los techos de chapa, las ventanas abiertas al viento y la arena guarda huellas que el agua borra sin prisa.",
                "medidas": "48 x 45 cm",
                "tecnica": "Acrílico sobre lienzo",
                "ano": "2026",
                "ubicacion": "Mercedes, Soriano, Uruguay",
                "detalles": [
                    "Firma en zona inferior izquierda",
                    "Creación libre",
                    "Pertenece a serie: Punta del Diablo",
                    "Disponible para venta"
                ]
            },
            {
                "id": 10,
                "titulo": "Rancho de la Calera",
                "imagen": "Imagenes/Rancho de la Calera.jpg",
                "descripcion": "El rancho conserva la sobriedad de su tiempo, con muros gruesos de piedra y cal, líneas simples, techos bajos que guardan el fresco del interior aun en los veranos más intensos. No hay ostentación en su arquitectura, sino una firmeza silenciosa, como si cada piedra hubiese aprendido a resistir el paso del tiempo. El lugar fue parte de una antigua calera destinada a producir cal para las construcciones coloniales de la región. Hoy, más que una estructura, es una huella de la memoria material de los primeros asentamientos españoles en el territorio oriental.",
                "medidas": "55 x 37 cm",
                "tecnica": "Acrílico sobre lienzo",
                "ano": "2026",
                "ubicacion": "Mercedes, Soriano, Uruguay",
                "detalles": [
                    "Firma en zona inferior derecha",
                    "Pintada de observación directa",
                    "Rincones de la historia de la ciudad",
                    "Disponible para venta"
                ]
            },
            {
                "id": 11,
                "titulo": "Cazando Ninfas VI",
                "imagen": "Imagenes/Cazando Ninfas VI.jpg",
                "descripcion": "La estación abandonada respira un silencio oxidado, como si el tiempo hubiera decidido quedarse a vivir entre sus antiguos muros. Las vías, cubiertas de  olvido, se extienden hacia un horizonte que ya no promete llegadas ni despedidas. El andén guarda ecos de pasos que no volverán, murmullos de voces disueltas en el aire detenido. El viento atraviesa las ventanas y juega con papeles viejos, como un recuerdo que se niega a desaparecer del todo. Allí, donde antes latía el movimiento, ahora habita una calma melancólica: un lugar suspendido entre lo que fue y lo que nunca regresará.",
                "medidas": "73 x 87 cm",
                "tecnica": "Acrílico sobre lienzo",
                "ano": "2025",
                "ubicacion": "Mercedes, Soriano, Uruguay",
                "detalles": [
                    "Firma en zona inferior izquierda",
                    "Perteneciente a serie: Cazando Ninfas",
                    "Realizado con espátula",
                    "Disponible para venta"
                ]
            },
            {
                "id": 12,
                "titulo": "Viernes de Truco en la Esquina",
                "imagen": "Imagenes/Viernes de truco en la esquina.jpg",
                "descripcion": "Los viernes a la noche la esquina se transforma. Bajo una luz amarillenta, cuatro sillas desparejas y una mesa alcanzan para que empiece el ritual. Todos llegan con las ganas intactas de la semana. —¿Estamos? —dice alguno, y el sonido de las cartas barajadas marca el inicio. Las cartas vuelan cortas sobre la mesa. Hay guiños secretos, señas exageradas, acusaciones falsas y “¡Truco!” lanzados como desafíos de honor. La esquina escucha los gritos: “¡Quiero!”, “¡Retruco!”, “¡Vale cuatro!”, y algún vecino asoma la cabeza sabiendo que esa banda no discute en serio; compite por el orgullo, por la gloria mínima de ganar la noche. Entre mano y mano se cuelan historias del trabajo, quejas del calor, recuerdos de otros viernes. El humo del asado cercano y el perfume del jazmín del patio vecino se mezclan con la emoción del juego. Y cuando alguien canta “¡Envido!” con una confianza sospechosa, todos saben que más que cartas, lo que está en juego es la amistad. Cerca de la medianoche, con la última mano discutida hasta el cansancio, guardan el mazo. No importa quién ganó. Lo importante es que el viernes volvió a cumplir su promesa: en esa esquina, bajo esa luz, siempre hay lugar para el truco y para ellos.",
                "medidas": "73 x 89 cm",
                "tecnica": "Acrílico sobre lienzo",
                "ano": "2025",
                "ubicacion": "Mercedes, Soriano, Uruguay",
                "detalles": [
                    "Firma en zona inferior izquierda",
                    "Uso de pintura metalizada en parilla",
                    "Punto de fuga a la derecha del espectador",
                    "Disponible para venta"
                ]
            },
            {
                "id": 13,
                "titulo": "Historia I",
                "imagen": "Imagenes/Historia I.jpg",
                "descripcion": "Quedaron las lanzas clavadas en la tarde, como árboles delgados que olvidaron su raíz en la tierra cansada. El viento del este, todavía tibio de gritos, pasaba rozando sus astas, y en cada roce parecía despertar un susurro antiguo, un eco de caballos, de polvo y de promesas rotas. La llanura, abierta como una herida, guardaba entre sus pastos aplastados el secreto de la furia ya extinguida. Allí, donde el sol descendía lento, las sombras de las lanzas se alargaban como dedos señalando el cielo.",
                "medidas": "72,5 x 89,5 cm",
                "tecnica": "Acrílico sobre lienzo",
                "ano": "2025",
                "ubicacion": "Mercedes, Soriano, Uruguay",
                "detalles": [
                    "Firma en zona inferior izquierda",
                    "Técnica de chorreado",
                    "Detalles en espátula",
                    "Disponible para venta"
                ]
            },
            {
                "id": 14,
                "titulo": "Historia II",
                "imagen": "Imagenes/Historia II.jpg",
                "descripcion": "Había silencio, pero no paz. Un silencio espeso, de esos que pesan en el pecho, como si la tierra misma respirara con dificultad. Y sin embargo, en esa quietud, las lanzas seguían en pie, obstinadas, custodiando. Alguna llevaba aún el brillo opaco del combate, otra, la caricia oscura de la sangre seca. Todas, sin excepción, eran testigos: de hombres que ya no estaban, de banderas que se disolvieron en el polvo, de un territorio que, entre muerte y coraje, seguía latiendo bajo el mismo cielo.",
                "medidas": "72 x 89 cm",
                "tecnica": "Acrílico sobre lienzo",
                "ano": "2025",
                "ubicacion": "Mercedes, Soriano, Uruguay",
                "detalles": [
                    "Firma en zona inferior derecha",
                    "Detalles en lámina de plata",
                    "Paleta de colores basada en las banderas nacionales",
                    "Disponible para venta"
                ]
            },
            {
                "id": 15,
                "titulo": "Cortázar",
                "imagen": "Imagenes/Cortazar.jpg",
                "descripcion": "Julio Cortázar (1914–1984) fue un escritor argentino y una de las figuras más importantes del Boom latinoamericano del siglo XX. Nació en Bruselas, Bélgica, pero creció en Argentina y más tarde se estableció en París, Francia, ciudad que influyó profundamente en su obra. Fue reconocido por su estilo innovador, su imaginación desbordante y su capacidad para mezclar lo cotidiano con lo fantástico. En su obra aparece el realismo mágico y lo fantástico, rompe las estructuras narrativas tradicionales y genera una participación activa del lector en la construcción de la historia. Sus textos exploran lo existencial, el tiempo y la identidad. Aquí aparece él fusionándose con su entorno y su mascota en una mezcla de colores vibrantes.",
                "medidas": "72 x 89 cm",
                "tecnica": "Acrílico sobre lienzo",
                "ano": "2024",
                "ubicacion": "Mercedes, Soriano, Uruguay",
                "detalles": [
                    "Firma en zona inferior izquierda",
                    "Perteneciente a serie: Artistas y Legado",
                    "Composición en tonos cálidos y fríos",
                    "Disponible para venta"
                ]
            },
            {
                "id": 16,
                "titulo": "Las Sombras de Poe",
                "imagen": "Imagenes/Pou.jpg",
                "descripcion": "Las Sombras de Poe en esta obra se muestra parte de su personalidad y de su vida. Un hombre solitario con temor a la oscuridad y a ser enterrado vivo, esto último puede apreciarse en el reflejo de un ataúd en sus ojos. También aparecen un gato negro y un cuervo, al primero le falta un ojo y tiene la marca de una cuerda en su cuello haciendo referencia al cuento El Gato Negro y el segundo hace referencia al famoso poema El Cuervo, en una de sus patas tiene un diente que evoca uno de sus cuentos, Berenice.",
                "medidas": "89,5 x 72,5 cm",
                "tecnica": "Acrílico sobre lienzo",
                "ano": "2024",
                "ubicacion": "Mercedes, Soriano, Uruguay",
                "detalles": [
                    "Firma en zona inferior izquierda",
                    "Perteneciente a serie: Artistas y Legado",
                    "Trabajo en espátula casi en su totalidad",
                    "Disponible para venta"
                ]
            },
            {
                "id": 17,
                "titulo": "Charles",
                "imagen": "Imagenes/Baudelaire.jpg",
                "descripcion": "Charles Baudelaire camina entre sombras perfumadas, con el alma teñida de belleza y abismo. En sus palabras florece lo prohibido como un jardín oscuro, donde la decadencia se vuelve arte y el dolor, una forma exquisita de contemplar el mundo. Detrás su París y junto a él, una bebida que inspiró parte su poesía.",
                "medidas": "73 x 89 cm",
                "tecnica": "Acrílico sobre lienzo",
                "ano": "2024",
                "ubicacion": "Mercedes, Soriano, Uruguay",
                "detalles": [
                    "Firma en zona inferior derecha",
                    "Perteneciente a serie: Artistas y Legado",
                    "Preponderancia de zonas oscuras y tonos fríos",
                    "Disponible para venta"
                ]
            },
            {
                "id": 18,
                "titulo": "Yo Cézanne",
                "imagen": "Imagenes/Cézanne.jpg",
                "descripcion": "Entre el Impresionismo que capturaba la luz fugaz y el Cubismo que fragmentaría la realidad, Cézanne fue un puente silencioso: el arquitecto de una nueva visión. Pintó no lo que vemos, sino lo que permanece cuando dejamos de mirar. En su obra, el mundo no se desvanece: se construye. Y cada pincelada es una piedra más en ese lento, obstinado intento de entender la eternidad. Aquí aparece rodeado de sus paisajes, bodegones y escenas cotidianas.",
                "medidas": "73 x 87,3 cm",
                "tecnica": "Acrílico sobre lienzo",
                "ano": "2024",
                "ubicacion": "Mercedes, Soriano, Uruguay",
                "detalles": [
                    "Firma en zona inferior izquierda",
                    "Perteneciente a serie: Artistas y Legado",
                    "Contraste de su figura con el entorno colorido",
                    "Disponible para venta"
                ]
            },
            {
                "id": 19,
                "titulo": "Nostalgias de Monet",
                "imagen": "Imagenes/Monet.jpg",
                "descripcion": "Esta obra muestra muestra al genio del impresionismo rodeado de referencias a algunas de sus obras, los jardines, las casas del parlamento e impresión sol naciente, un viaje al pasado y la mirada del artista.",
                "medidas": "73 x 89,5 cm",
                "tecnica": "Acrílico sobre lienzo",
                "ano": "2024",
                "ubicacion": "Mercedes, Soriano, Uruguay",
                "detalles": [
                    "Firma en zona inferior izquierda",
                    "Perteneciente a serie: Artistas y Legado",
                    "Fundido de figura fondo",
                    "Disponible para venta"
                ]
            },
            {
                "id": 20,
                "titulo": "Mundo Magritte",
                "imagen": "Imagenes/Magritte.jpg",
                "descripcion": "Mundo Magritte está obra muestra a uno de los genios del surrealismo con su traje y su bombín característico. Está rodeado de referencias a su mundo onírico, el ojo en un botón, las rocas, los huevos flotando con los sombreros, la paloma recortada en el cielo sosteniendo la manzana verde, y la pipa que no es una pipa.",
                "medidas": "72,5 x 89,5 cm",
                "tecnica": "Acrílico sobre lienzo",
                "ano": "2024",
                "ubicacion": "Mercedes, Soriano, Uruguay",
                "detalles": [
                    "Firma en zona de margen derecho",
                    "Perteneciente a serie: Artistas y Legado",
                    "Surrealismo explícito",
                    "Disponible para venta"
                ]
            },
            {
                "id": 21,
                "titulo": "Nostalgias de Vincent",
                "imagen": "Imagenes/Nostalgias de Vincent.jpg",
                "descripcion": "Esta obra es un homenaje al genio del post impresionismo. Rodeado de algunas de sus obras más conocidas, recordando su mundo, imitando su paleta y sus pinceladas, los cuervos en el trigal, la noche estrellada y su habitación de Arles son un viaje al pasado y a la vida de Van Gogh.",
                "medidas": "72,7 x 89,4 cm",
                "tecnica": "Acrílico sobre lienzo",
                "ano": "2024",
                "ubicacion": "Mercedes, Soriano, Uruguay",
                "detalles": [
                    "Firma en zona",
                    "Perteneciente a serie: Artistas y Legado",
                    "Basado en cuatro de sus obras",
                    "No disponible para venta"
                ]
            },
            {
                "id": 22,
                "titulo": "Gabo y 100 años",
                "imagen": "Imagenes/Gabo.jpg",
                "descripcion": "Es una obra que tiene como figura principal a Gabriel García Márquez y se encuentra rodeado de varias referencias a su obra cumbre Cien años de soledad. Se pueden ver los bananos, el arroyo del pueblo Macondo, sus casitas, la semilla del Macondo, y en sus ojos los pescaditos de oro que fabricaba Aureliano.",
                "medidas": "70 x 90 cm",
                "tecnica": "Acrílico sobre lienzo",
                "ano": "2024",
                "ubicacion": "Colonia del Sacramento, Uruguay",
                "detalles": [
                    "Firma en zona inferior derecha",
                    "Obra en colección privada en Colonia del Sacramento",
                    "Referencias a famosa obra literaria",
                    "No disponible para venta"
                ]
            },
            {
                "id": 23,
                "titulo": "Cazando Ninfas V",
                "imagen": "Imagenes/Cazando Ninfas V.jpg",
                "descripcion": "La arenera duerme a la orilla del río como un suspiro antiguo. El río, manso se desliza con la paciencia de quien lo ha visto todo, reflejando un cielo que parece inclinarse para escucharlo. En esa orilla, todo invita a quedarse. A sentarse sin urgencias, a mirar cómo el agua dibuja y borra formas sin pedir permiso. La arenera no exige nada: solo ofrece un rincón donde el mundo se vuelve lento, y el alma, por fin, respira al ritmo del río.",
                "medidas": "48,5 x 69,5 cm",
                "tecnica": "Acrílico sobre lienzo",
                "ano": "2024",
                "ubicacion": "Mercedes, Soriano, Uruguay",
                "detalles": [
                    "Firma en zona inferior derecha",
                    "Perteneciente a serie: Cazando Ninfas",
                    "Estilo expresionista",
                    "Disponible para venta"
                ]
            },
            {
                "id": 24,
                "titulo": "Puerto Mercedes",
                "imagen": "Imagenes/Puerto Mercedes.jpg",
                "descripcion": "Es una obra que muestra un paisaje cotidiano en las costas del río negro, las chalanas y el encargado de sacarle el agua que logra filtrarse. De fondo aparece el puerto de Mercedes.",
                "medidas": "74,5 x 74,2 cm",
                "tecnica": "Acrílico sobre lienzo",
                "ano": "2024",
                "ubicacion": "Mercedes, Soriano, Uruguay",
                "detalles": [
                    "Firma en zona inferior izquierda",
                    "Basado en fotografía del artista",
                    "Escena cotidiana de la ciudad de Mercedes",
                    "Disponible para venta"
                ]
            },
            {
                "id": 25,
                "titulo": "Noche, Fuego y Contrabajo",
                "imagen": "Imagenes/Noche, Fuego y Contrabajo.jpg",
                "descripcion": "Una noche fría de invierno, al aire libre, junto al fogón que llenaba el aire de calor con los tonos cálidos y las notas al son de un jazz fusión, una luna inmensa, amarillenta que iluminaba todo lo que tocaba, y el rocío frío de un azul intenso que cae sobre el lienzo.",
                "medidas": "80 x 79,5 cm",
                "tecnica": "Acrílico sobre lienzo",
                "ano": "2024",
                "ubicacion": "Mercedes, Soriano, Uruguay",
                "detalles": [
                    "Firma en zona inferior derecha",
                    "Trabajo en espátula",
                    "Pintado en vivo junto a Ariel Galain en su casa",
                    "Disponible para venta"
                ]
            },
            {
                "id": 26,
                "titulo": "Traversa",
                "imagen": "Imagenes/Traversa.jpg",
                "descripcion": "El hombre alza su flauta traversa como quien sostiene un susurro. Sus dedos, ligeros y precisos, despiertan el aire, y de él nacen hilos de música que se enroscan en el silencio. Sus ojos, entreabiertos, parecen seguir notas invisibles, mientras el viento se vuelve melodía en su aliento. Y así, por un instante, el mundo se detiene a escuchar cómo su alma aprende a decir lo que las palabras no alcanzan.",
                "medidas": "78 x 78 cm",
                "tecnica": "Acrílico sobre lienzo",
                "ano": "2024",
                "ubicacion": "Mercedes, Soriano, Uruguay",
                "detalles": [
                    "Firma en zona inferior izquierda",
                    "Basado en fotografía de Luis Gioia",
                    "Homenaje a Festival de Jazz",
                    "Disponible para venta"
                ]
            },
            {
                "id": 27,
                "titulo": "Compinches",
                "imagen": "Imagenes/Compinches.jpg",
                "descripcion": "En el jardín bañado de luz, el abuelo siembra risas mientras sus manos, sabias y pacientes, guían las pequeñas del nieto. Entre flores y tierra, le enseña secretos que no caben en los libros, cómo escuchar al viento, cómo esperar a que brote la vida. Y en cada juego, en cada gesto, el tiempo se vuelve tierno, como si el amor encontrara allí su forma más simple y eterna.",
                "medidas": "79 x 79 cm",
                "tecnica": "Acrílico sobre lienzo",
                "ano": "2024",
                "ubicacion": "Mercedes, Soriano, Uruguay",
                "detalles": [
                    "Firma en zona inferior derecha",
                    "Homenaje al profesor y abuelo Ariel Galain",
                    "Fotografía de David Galain",
                    "Disponible para venta"
                ]
            },
            {
                "id": 28,
                "titulo": "Cazando Ninfas IV",
                "imagen": "Imagenes/Cazando Ninfas IV.jpg",
                "descripcion": "Uno de los rinconcitos del rio Negro son las escolleras de piedra que se adentran en el rio y crean espacios de recreación y descanso.",
                "medidas": "63 x 87 cm",
                "tecnica": "Acrílico sobre lienzo",
                "ano": "2024",
                "ubicacion": "Mercedes, Soriano, Uruguay",
                "detalles": [
                    "Firma en zona inferior derecha",
                    "Perteneciente a serie: Cazando Ninfas",
                    "Trabajado exclusivamente con espátula",
                    "Disponible para venta"
                ]
            },
            {
                "id": 29,
                "titulo": "Flamenco",
                "imagen": "Imagenes/Flamenco.jpg",
                "descripcion": "Rojo encendido como la sangre antigua, late en la madera de la guitarra y en el golpe seco del tacón. Palmas que crujen como fuego en la noche andaluza, y una voz que se rompe, como si el alma misma ardiera en cada quejío.",
                "medidas": "79,5 x 79,5 cm",
                "tecnica": "Acrílico sobre lienzo",
                "ano": "2024",
                "ubicacion": "Mercedes, Soriano, Uruguay",
                "detalles": [
                    "Firma en zona inferior izquierda",
                    "Perteneciente a serie: Ritmos Musicales",
                    "Colores de España",
                    "Disponible para venta"
                ]
            },
            {
                "id": 30,
                "titulo": "Salsa",
                "imagen": "Imagenes/Salsa.jpg",
                "descripcion": "Amarillo sol caribeño, vibrante y sudoroso, trompetas que brillan, congas que palpitan como corazones múltiples, el piano corre como agua entre calles calientes. Es un remolino de cuerpos, un relámpago tropical que no sabe quedarse quieto.",
                "medidas": "79,5 x 79,5 cm",
                "tecnica": "Acrílico sobre lienzo",
                "ano": "2024",
                "ubicacion": "Mercedes, Soriano, Uruguay",
                "detalles": [
                    "Firma en zona inferior derecha",
                    "Perteneciente a serie: Ritmos Musicales",
                    "Alternancia de colores cálidos y fríos",
                    "Disponible para venta"
                ]
            },
            {
                "id": 31,
                "titulo": "Bossa Nova",
                "imagen": "Imagenes/Bossa Nova.jpg",
                "descripcion": "Verde suave de selva y brisa marina, la guitarra susurra con dedos de seda, y el ritmo leve parece una conversación íntima. Todo es calma ondulante, como una tarde que se derrite lentamente en la arena.",
                "medidas": "80 x 80 cm",
                "tecnica": "Acrílico sobre lienzo",
                "ano": "2024",
                "ubicacion": "Mercedes, Soriano, Uruguay",
                "detalles": [
                    "Firma en zona inferior derecha",
                    "Perteneciente a serie: Ritmos Musicales",
                    "Colores alusivos a la bandera de Brasil",
                    "Disponible para venta"
                ]
            },
            {
                "id": 32,
                "titulo": "Rock",
                "imagen": "Imagenes/Rock.jpg",
                "descripcion": "Negro eléctrico con destellos de neón, la guitarra ruge, el bajo retumba en el pecho, la batería cae como tormenta urbana. Es rebeldía en estado puro, un grito que atraviesa la noche y no pide permiso.",
                "medidas": "79,5 x 79,5 cm",
                "tecnica": "Acrílico sobre lienzo",
                "ano": "2024",
                "ubicacion": "Mercedes, Soriano, Uruguay",
                "detalles": [
                    "Firma en zona inferior izquierda",
                    "Perteneciente a serie: Ritmos Musicales",
                    "Fondo trabajado con espátula",
                    "Disponible para venta"
                ]
            },
            {
                "id": 33,
                "titulo": "Candombe",
                "imagen": "Imagenes/Candombe.jpg",
                "descripcion": "Negro profundo y dorado de memoria viva, los tambores chico, repique y piano dialogan en la calle, como pasos heredados de siglos. Es tierra, es piel, es resistencia, un pulso que camina con orgullo bajo el cielo. El fuego calienta la noche que acompaña.",
                "medidas": "79,5 x 79,5 cm",
                "tecnica": "Acrílico sobre lienzo",
                "ano": "2024",
                "ubicacion": "Mercedes, Soriano, Uruguay",
                "detalles": [
                    "Firma en zona inferior derecha",
                    "Perteneciente a serie: Ritmos Musicales",
                    "Contraste de colores cálidos y fríos",
                    "Disponible para venta"
                ]
            },
            {
                "id": 34,
                "titulo": "Reggae",
                "imagen": "Imagenes/Reggae.jpg",
                "descripcion": "Verde, amarillo y rojo en balanceo constante, el bajo es columna, la guitarra acaricia el contratiempo, y el ritmo se mece como hamaca bajo el sol. Es calma consciente, una ola que dice mucho sin levantar la voz.",
                "medidas": "80 x 79,5 cm",
                "tecnica": "Acrílico sobre lienzo",
                "ano": "2024",
                "ubicacion": "Mercedes, Soriano, Uruguay",
                "detalles": [
                    "Firma en zona inferior izquierda",
                    "Perteneciente a serie: Ritmos Musicales",
                    "Detalles en lámina de oro",
                    "Disponible para venta"
                ]
            },
            {
                "id": 35,
                "titulo": "Country",
                "imagen": "Imagenes/Country.jpg",
                "descripcion": "Marrón polvo de caminos largos, la guitarra acústica cuenta historias, el violín llora y sonríe al mismo tiempo. Es horizonte abierto, un viaje sin prisa entre recuerdos y despedidas.",
                "medidas": "80 x 80 cm",
                "tecnica": "Acrílico sobre lienzo",
                "ano": "2024",
                "ubicacion": "Mercedes, Soriano, Uruguay",
                "detalles": [
                    "Firma en zona inferior derecha",
                    "Perteneciente a serie: Ritmos Musicales",
                    "Tonos terrosos y pastel",
                    "Disponible para venta"
                ]
            },
            {
                "id": 36,
                "titulo": "Tango",
                "imagen": "Imagenes/Tango.jpg",
                "descripcion": "Gris humo de ciudad y farol, el bandoneón respira nostalgia, el piano marca pasos que rozan el destino. Es abrazo tenso, una historia que se desliza entre deseo y despedida. El violín que llora historias de desamor.",
                "medidas": "79,5 x 79,5 cm",
                "tecnica": "Acrílico sobre lienzo",
                "ano": "2024",
                "ubicacion": "Mercedes, Soriano, Uruguay",
                "detalles": [
                    "Firma en zona inferior derecha",
                    "Perteneciente a serie: Ritmos Musicales",
                    "Detalles con lámina de oro, cartón e hilo",
                    "Disponible para venta"
                ]
            },
            {
                "id": 37,
                "titulo": "Jazz",
                "imagen": "Imagenes/Jazz.jpg",
                "descripcion": "Azul profundo como medianoche improvisada, el saxofón suspira, la trompeta conversa, el piano dibuja caminos inesperados. Es libertad en fragmentos, un lenguaje que nace y se transforma en cada instante.",
                "medidas": "79 x 79 cm",
                "tecnica": "Acrílico sobre lienzo",
                "ano": "2024",
                "ubicacion": "Mercedes, Soriano, Uruguay",
                "detalles": [
                    "Firma en zona inferior izquierda",
                    "Perteneciente a serie: Ritmos Musicales",
                    "Detalles en lámina de oro",
                    "Disponible para venta"
                ]
            },
            {
                "id": 38,
                "titulo": "Ranchera",
                "imagen": "Imagenes/Ranchera.jpg",
                "descripcion": "Rojo y blanco de pasión y herida, las trompetas anuncian orgullo, la guitarra y el guitarrón sostienen el llanto digno. Es voz al cielo, un amor que se canta aunque duela.",
                "medidas": "79,5 x 79,5 cm",
                "tecnica": "Acrílico sobre lienzo",
                "ano": "2024",
                "ubicacion": "Mercedes, Soriano, Uruguay",
                "detalles": [
                    "Firma en zona inferior izquierda",
                    "Perteneciente a serie: Ritmos Musicales",
                    "Colores de México",
                    "Disponible para venta"
                ]
            },
            {
                "id": 39,
                "titulo": "Narciso",
                "imagen": "Imagenes/FLOR AMARILLA.jpg",
                "descripcion": "Los narcisos representan la esperanza, la renovación y los nuevos comienzos, y emergen al final del invierno para anunciar la llegada de la primavera.",
                "medidas": "80 x 80 cm",
                "tecnica": "Acrílico sobre lienzo",
                "ano": "2023",
                "ubicacion": "Mercedes, Soriano, Uruguay",
                "detalles": [
                    "Firma en zona inferior derecha",
                    "Perteneciente a serie: Flores del Mundo",
                    "Detalles en lámina de oro",
                    "Disponible para venta"
                ]
            },
            {
                "id": 40,
                "titulo": "Niviarsiaq",
                "imagen": "Imagenes/FLORES ROSADAS.jpg",
                "descripcion": "Es la flor nacional de Groenlandia, conocida comúnmente como Jovencita en groenlandés. Es una planta resistente de flores rosadas, símbolo de supervivencia por su capacidad de colonizar rápidamente terrenos árticos rocosos.",
                "medidas": "79,4 x 79,5 cm",
                "tecnica": "Acrílico sobre lienzo",
                "ano": "2023",
                "ubicacion": "Mercedes, Soriano, Uruguay",
                "detalles": [
                    "Firma en zona inferior derecha",
                    "Perteneciente a serie: Flores del Mundo",
                    "Contraste de color y técnica mostrando la vida sobreviviendo al frío de la oscuridad",
                    "Disponible para venta"
                ]
            },
            {
                "id": 41,
                "titulo": "Jacarandá",
                "imagen": "Imagenes/FLORES VIOLETAS.jpg",
                "descripcion": "El jacarandá representa renovación, la sabiduría, la esperanza y la belleza. Estas son símbolo de la transformación, la espiritualidad y la magia.",
                "medidas": "79 x 79 cm",
                "tecnica": "Acrílico sobre lienzo",
                "ano": "2023",
                "ubicacion": "Mercedes, Soriano, Uruguay",
                "detalles": [
                    "Firma en zona inferior derecha",
                    "Perteneciente a serie: Flores del Mundo",
                    "Observación y boceto de árbol público",
                    "Disponible para venta"
                ]
            },
            {
                "id": 42,
                "titulo": "Cerezo",
                "imagen": "Imagenes/Cerezo.jpg",
                "descripcion": "Estas florecen por un corto período de tiempo, representando la belleza efímera y el afecto. Es usada comunmente como tema en la poesía y el arte. ",
                "medidas": "79 x 79 cm",
                "tecnica": "Acrílico acuarelado y tinta",
                "ano": "2023",
                "ubicacion": "Mercedes, Soriano, Uruguay",
                "detalles": [
                    "Firma en zona inferior izquierda",
                    "Perteneciente a serie: Flores del Mundo",
                    "Acuarela y acrílico acuarelado",
                    "Disponible para venta"
                ]
            },
            {
                "id": 43,
                "titulo": "Hibiscos",
                "imagen": "Imagenes/Hibiscos.jpg",
                "descripcion": "Esta hermosa y exótica flor ha sido utilizada a lo largo de la historia en diferentes culturas como un símbolo de belleza, amor y delicadeza.",
                "medidas": "79,5 x 79 cm",
                "tecnica": "Acrílico sobre lienzo",
                "ano": "2023",
                "ubicacion": "Mercedes, Soriano, Uruguay",
                "detalles": [
                    "Firma en zona inferior izquierda",
                    "Perteneciente a serie: Flores del Mundo",
                    "Textura con gasa",
                    "Disponible para venta"
                ]
            },
            {
                "id": 44,
                "titulo": "Girasoles",
                "imagen": "Imagenes/Girasoles.jpg",
                "descripcion": "El girasol es el símbolo del sol, simbolizando el amor y la admiración, pero también la felicidad, el positivismo, la vitalidad y la energía.",
                "medidas": "79 x 80 cm",
                "tecnica": "Acrílico sobre lienzo",
                "ano": "2023",
                "ubicacion": "Mercedes, Soriano, Uruguay",
                "detalles": [
                    "Firma en zona inferior izquierda",
                    "Perteneciente a serie: Flores del Mundo",
                    "Gama de seis amarillos",
                    "Disponible para venta"
                ]
            },
            {
                "id": 45,
                "titulo": "Tulipanes",
                "imagen": "Imagenes/Tulipanes.jpg",
                "descripcion": "Los tulipanes tienen importancia como símbolos de amor, renovación y belleza, y son apreciados por su elegancia y gran significado en diferentes culturas.",
                "medidas": "79,5 x 79,5 cm",
                "tecnica": "Acrílico sobre lienzo",
                "ano": "2023",
                "ubicacion": "Mercedes, Soriano, Uruguay",
                "detalles": [
                    "Firma en zona inferior izquierda",
                    "Perteneciente a serie: Flores del Mundo",
                    "Detalles en papel y gasa",
                    "Disponible para venta"
                ]
            },
            {
                "id": 46,
                "titulo": "Margaritas",
                "imagen": "Imagenes/Margaritas.jpg",
                "descripcion": "La margarita blanca simboliza principalmente la pureza, la inocencia, sinceridad y nuevos comienzos. Debido a su fresco y simple aspecto, representan el amor tierno y alegría.",
                "medidas": "79,5 x 79,5 cm",
                "tecnica": "Acrílico sobre lienzo",
                "ano": "2023",
                "ubicacion": "Mercedes, Soriano, Uruguay",
                "detalles": [
                    "Firma en zona inferior izquierda",
                    "Perteneciente a serie: Flores del Mundo",
                    "Acrílico con bajorrelieve en yeso",
                    "Disponible para venta"
                ]
            },
            {
                "id": 47,
                "titulo": "Calas",
                "imagen": "Imagenes/Calas.jpeg",
                "descripcion": "La flor de la cala blanca simboliza la pureza, la inocencia y la nobleza. También se las considera como un símbolo de respeto y admiración.",
                "medidas": "80 x 80 cm",
                "tecnica": "Acrílico sobre lienzo",
                "ano": "2023",
                "ubicacion": "Mercedes, Soriano, Uruguay",
                "detalles": [
                    "Firma en zona inferior derecha",
                    "Perteneciente a serie: Flores del Mundo",
                    "Bajorrelieve en yeso",
                    "No disponible para venta"
                ]
            },
            {
                "id": 48,
                "titulo": "El Horizonte se Confunde",
                "imagen": "Imagenes/El Horizonte se Confunde.jpg",
                "descripcion": "Es una obra que muestra un momento privado entre tres amigas que comparten una conversación, en lugar donde se mezclan las palabras con la naturaleza, el silencio y un momento en sus memorias.",
                "medidas": "99,5 x 120 cm",
                "tecnica": "Acrílico sobre lienzo",
                "ano": "2023",
                "ubicacion": "Mercedes, Soriano, Uruguay",
                "detalles": [
                    "Firma en zona inferior izquierda",
                    "Textura en arena",
                    "Basado en fotografía tomada por el artista",
                    "Disponible para venta"
                ]
            },
            {
                "id": 49,
                "titulo": "Ella en Claroscuro",
                "imagen": "Imagenes/Ella en Claroscuro.jpg",
                "descripcion": "Trata de una mujer en su soledad elegida dando la espalda al espectador. Los tonos fríos de su piel contrastan con los cálidos de su pantalón. La luz que entra por la ventana a su derecha genera sugerentes manchas en su cuerpo y la pared.",
                "medidas": "99 x 119,5 cm",
                "tecnica": "Acrílico sobre lienzo",
                "ano": "2023",
                "ubicacion": "Mercedes, Soriano, Uruguay",
                "detalles": [
                    "Firma en zona inferior derecha",
                    "Contraste figura y fondo",
                    "Expresionista",
                    "Disponible para venta"
                ]
            },
            {
                "id": 50,
                "titulo": "Viejo en Vaticano",
                "imagen": "Imagenes/Viejo en Vaticano.jpg",
                "descripcion": "Es una obra basada en una fotografía tomada por el artista en las calles de la ciudad-estado. En este trabajo se proyecta la sensación de vejez y transcurso en el tiempo, no solo del protagonista que es un anciano caminando lentamente con las manos en su espalda, sino también la antiguedad de los muros y el simbólico lugar.",
                "medidas": "99,5 x 120 cm",
                "tecnica": "Acrílico sobre lienzo",
                "ano": "2023",
                "ubicacion": "Mercedes, Soriano, Uruguay",
                "detalles": [
                    "Firma en zona inferior derecha",
                    "Perspectiva central",
                    "Tonos grises y azulados, alternados con pincel y espátula",
                    "Disponible para venta"
                ]
            },
            {
                "id": 51,
                "titulo": "Viejo Francés",
                "imagen": "Imagenes/Viejo Francés.jpg",
                "descripcion": "Se dejó caer en el banco como cae la tarde: despacio, sin pedir permiso. Sus huesos, viejos conspiradores del cansancio, crujieron apenas, como si recordaran que alguna vez sostuvieron prisa, él parecía habitar otro tiempo, uno más lento, más callado. Su ropa, gastada por inviernos sin nombre, colgaba de su cuerpo como historias que nadie quiso escuchar. En su barba enredada dormían restos de polvo y de días largos; en sus manos, curtidas y temblorosas, se leían los surcos de una vida que no pidió ser fácil. Cerró los ojos un instante, no para dormir, sino para dejar de ver. Quizás recordaba. Quizás no. Tal vez el pasado era ya una sombra demasiado pesada, o un lujo que no podía permitirse. En ese breve descanso, bajo el murmullo cotidiano de la ciudad, el viejo indigente pareció desvanecerse un poco menos, como si, por un instante, el mundo lo hubiera dejado existir sin urgencia.",
                "medidas": "99 x 99 cm",
                "tecnica": "Acrílico sobre lienzo",
                "ano": "2023",
                "ubicacion": "Mercedes, Soriano, Uruguay",
                "detalles": [
                    "Firma en zona inferior derecha",
                    "Basado en fotografía del artista",
                    "Paleta en tonos pasteles",
                    "Disponible para venta"
                ]
            },
            {
                "id": 52,
                "titulo": "Entretiempo",
                "imagen": "Imagenes/Entretiempo.jpg",
                "descripcion": "La bicicleta reposa en silencio, como si hubiera decidido detener el tiempo por un instante. Apoyada contra la pared solitaria, sus ruedas aún guardan la memoria del camino, el susurro del polvo y el ritmo de los latidos que la impulsaron. No hay prisa en su quietud. El manillar inclinado sugiere un gesto humano, una pausa breve antes de continuar, aunque nadie esté cerca para reclamarla. La pared, áspera y callada, la sostiene sin preguntas, como una confidencia compartida entre objetos que han visto pasar el mundo.",
                "medidas": "99 x 120 cm",
                "tecnica": "Acrílico sobre lienzo",
                "ano": "2023",
                "ubicacion": "Mercedes, Soriano, Uruguay",
                "detalles": [
                    "Firma en zona inferior derecha",
                    "Basado en fotografía del artista",
                    "Detalles con espátula",
                    "Disponible para venta"
                ]
            },
            {
                "id": 53,
                "titulo": "Encuentro en Arlés",
                "imagen": "Imagenes/Encuentro en Arlés.jpg",
                "descripcion": "En el café de Arlés, bajo una noche que parece girar lentamente como un pensamiento, las mesas despiertan. No están todas vacías: las ocupará una reunión imposible, como si el arte hubiese decidido citarse a sí mismo. Vincent van Gogh sentado luego de pintar el cielo y frente a él, Pablo Picasso, reconstruyendo en mente formas increíbles, son los primeros en llegar. Paul Cézanne llega solo, pensando en su bodegón de la noche anterior. Claude Monet llega junto a Salvador Dalí dialogando sobre la luz y los sueños, parados sobre los cielos de Munch. El café deja de ser café. Se expande. Una pegatina recuerda a Wassily Kandinsky y la Bauhaus. Dos amantes se besan a escondidas y otros se dan el beso con el cielo de testigo. El cielo gira. Las estrellas no titilan: palpitan. No hay discusión ni acuerdo, pero todo se comprende. Cada uno ve un mundo distinto, y sin embargo, todos están mirando el mismo. No son los únicos presentes. Y en ese instante suspendido, el café no pertenece a Arlés, ni al pasado, ni a la historia. Pertenece a la mirada.",
                "medidas": "100 x 120,5 cm",
                "tecnica": "Acrílico sobre lienzo",
                "ano": "2023",
                "ubicacion": "Mercedes, Soriano, Uruguay",
                "detalles": [
                    "Firma en zona inferior izquierda",
                    "Transferencia: Girasoles (Van Gogh) y referencia a Kandinsky",
                    "Presenta catorce referencias a artistas",
                    "Disponible para venta"
                ]
            },
            {
                "id": 54,
                "titulo": "Tres Cuervos",
                "imagen": "Imagenes/Tres Cuervos.jpg",
                "descripcion": "Tres cuervos descienden como sombras suaves sobre la plaza, picoteando semillas con paciencia antigua. Sus alas, negras como secretos, rozan el aire quieto, mientras el murmullo lejano de la ciudad los ignora. Entre pastos y pasos ausentes, celebran en silencio su pequeño banquete cotidiano.",
                "medidas": "90 x 99,5 cm",
                "tecnica": "Acrílico sobre lienzo",
                "ano": "2023",
                "ubicacion": "Mercedes, Soriano, Uruguay",
                "detalles": [
                    "Firma en zona inferior derecha",
                    "Basado en fotografía del artista",
                    "Puntillismo y espátula",
                    "Disponible para venta"
                ]
            },
            {
                "id": 55,
                "titulo": "Una Musa",
                "imagen": "Imagenes/Una Musa.jpg",
                "descripcion": "Ella no sabe que es musa, pero en su risa se ordena el caos, en sus preguntas se abren caminos que el mundo adulto había olvidado mirar. Tiene la pureza de lo que aún no se defiende, y la fuerza de lo que todavía no conoce el miedo. Es una mezcla tan frágil, tan invencible. El universo cabe en ese gesto, y la belleza no está en lo perfecto, sino en lo que crece, duda, cae y vuelve a levantarse.",
                "medidas": "98,5 x 99 cm",
                "tecnica": "Acrílico sobre lienzo",
                "ano": "2023",
                "ubicacion": "Mercedes, Soriano, Uruguay",
                "detalles": [
                    "Firma en zona inferior izquierda",
                    "Estilo expresionista",
                    "Contraste de fríos y cálidos",
                    "Disponible para venta"
                ]
            },
            {
                "id": 56,
                "titulo": "Camino de las Letras",
                "imagen": "Imagenes/Camino de las Letras.jpg",
                "descripcion": "Bajo la luz tenue de una tarde nublada, las escaleras del paseo del Prado se vuelven un río quieto por el que ascienden dos latidos: el de un padre y el de su hija. Él camina despacio, no por cansancio, sino para que el momento dure más; ella salta un escalón sí y otro no, como si jugara a alcanzar el cielo antes de tiempo. Cada peldaño guarda una risa, un secreto, una pregunta que aún no sabe formular. El padre la mira sin que ella lo note, como quien contempla un milagro cotidiano: la vida creciendo, subiendo, alejándose poco a poco. El murmullo de la ciudad se queda abajo, difuso, como si el mundo respetara ese instante. Y en esa subida, sencilla y eterna, el tiempo parece detenerse: un padre aprendiendo a soltar, una hija aprendiendo a volar, ambos suspendidos entre lo que fue y lo que será.",
                "medidas": "99 x 99 cm",
                "tecnica": "Acrílico sobre lienzo",
                "ano": "2023",
                "ubicacion": "Mercedes, Soriano, Uruguay",
                "detalles": [
                    "Firma en zona inferior derecha",
                    "Fotografía tomada por Pamela Curti",
                    "Expresionismo/Acuarelado",
                    "Disponible para venta"
                ]
            },
            {
                "id": 57,
                "titulo": "Punta Del Diablo",
                "imagen": "Imagenes/Punta del Diablo.jpg",
                "descripcion": "La peatonal de Punta del Diablo, de noche, parece suspender el tiempo en una brisa tibia que huele a sal y madera húmeda. Las luces amarillas de los faroles dibujan sombras suaves sobre la arena que se cuela entre las tablas, como si el mar quisiera acercarse sin hacer ruido. Se escuchan risas lejanas, el tintinear de vasos, alguna guitarra que insiste en acordes simples, sinceros. Los pasos se vuelven más lentos, casi rituales, como si cada persona entendiera, sin decirlo, que no hay apuro en llegar a ningún lado. Y ahí, entre todo eso, el océano respira. No se ve del todo, pero está. Se siente en la piel, en el pelo que se enreda, en ese murmullo constante que acompasa la noche. Caminar por la peatonal es, entonces, caminar al borde de algo más grande: una calma profunda, casi salvaje, que invita a quedarse un rato más… como si la noche nunca fuera a terminar.",
                "medidas": "75 x 75,5 cm",
                "tecnica": "Acrílico sobre lienzo",
                "ano": "2023",
                "ubicacion": "Mercedes, Soriano, Uruguay",
                "detalles": [
                    "Firma en zona inferior derecha",
                    "Textura en arena",
                    "Perteneciente a serie: Punta del Diablo",
                    "Disponible para venta"
                ]
            },
            {
                "id": 58,
                "titulo": "Buscadores del Rey",
                "imagen": "Imagenes/Buscadores del Rey.jpg",
                "descripcion": "En las tardes nubladas, de pronto, ellos no saben a dónde mirar y buscan confundidos a su rey, un guía eterno que hoy los hace dudar.",
                "medidas": "82 x 57 cm",
                "tecnica": "Acrílico sobre lienzo",
                "ano": "2023-2026",
                "ubicacion": "Mercedes, Soriano, Uruguay",
                "detalles": [
                    "Firma en zona inferior izquierda",
                    "Contraste de cálidos y fríos",
                    "Creación libre",
                    "Disponible para venta"
                ]
            },
            {
                "id": 59,
                "titulo": "Assisi",
                "imagen": "Imagenes/Assisi.jpg",
                "descripcion": "Los rinconcitos de Assisi, en el corazón de Umbria, parecen guardados en el tiempo. Entre callejuelas de piedra y balcones con flores, cada esquina susurra historias antiguas. Allí, la luz dorada del atardecer acaricia los muros medievales y el silencio invita a caminar despacio, como si la ciudad respirara paz.",
                "medidas": "90,5 x 90,5 cm",
                "tecnica": "Acrílico sobre lienzo",
                "ano": "2023",
                "ubicacion": "Mercedes, Soriano, Uruguay",
                "detalles": [
                    "Firma en zona inferior derecha",
                    "Basado en fotografía tomada por el artista",
                    "Alterna espátula y pincel",
                    "Disponible para venta"
                ]
            },
            {
                "id": 60,
                "titulo": "Arregladores del Mundo",
                "imagen": "Imagenes/Arregladores del Mundo.jpg",
                "descripcion": "Arregladores del mundo, es una obra que muestra cómo el secreto de unos pocos hombres se mueve en las sombras y de cómo se actúan a escondidas. ",
                "medidas": "85 x 100 cm",
                "tecnica": "Acrílico sobre lienzo",
                "ano": "2023",
                "ubicacion": "Mercedes, Soriano, Uruguay",
                "detalles": [
                    "Firma en zona inferior derecha",
                    "Boceto de idea original de Ariel Galain",
                    "Expresionista",
                    "Disponible para venta"
                ]
            },
            {
                "id": 61,
                "titulo": "Cazando Ninfas III",
                "imagen": "Imagenes/Cazando Ninfas III.jpg",
                "descripcion": "Caminando por ahí, la orilla del arroyo se vuelve una con la vegetación y los sauces. El cielo nublado pero cálido da un color especial a la vegetación. Tres cipreses se levantan al centro como observándome a lo lejos.",
                "medidas": "69,5 x 69,5 cm",
                "tecnica": "Acrílico sobre lienzo",
                "ano": "2023",
                "ubicacion": "Mercedes, Soriano, Uruguay",
                "detalles": [
                    "Firma en zona inferior derecha",
                    "BBBBB",
                    "CCCCC",
                    "Disponible para venta"
                ]
            },
            {
                "id": 62,
                "titulo": "Cazando Ninfas II",
                "imagen": "Imagenes/Cazando Ninfas II.jpg",
                "descripcion": "Antiguo puente, recuerdo de antiguas infancias, de tardes de pesca y disfrute de la naturaleza; del atardecer cuando el sol se esconde detrás de él. Arroyo oscuro que se esconde debajo y que lo refleja queriéndolo copiar sin saber que lo mismo pasa entre los dos.",
                "medidas": "61,5 x 72,5 cm",
                "tecnica": "Acrílico sobre lienzo",
                "ano": "2023",
                "ubicacion": "Mercedes, Soriano, Uruguay",
                "detalles": [
                    "Firma en zona inferior derecha",
                    "Basado en fotografía de artistas",
                    "Trabajo de manchas",
                    "Disponible para venta"
                ]
            },
            {
                "id": 63,
                "titulo": "Testigo Azul",
                "imagen": "Imagenes/Testigo Azul.jpg",
                "descripcion": "Testigo azul, muestra un momento íntimo entre una madre y una hija, un diálogo cotidiano del cual fui testigo. - Davica",
                "medidas": "75 x 89 cm",
                "tecnica": "Acrílico sobre lienzo",
                "ano": "2022",
                "ubicacion": "Mercedes, Soriano, Uruguay",
                "detalles": [
                    "Firma en zona inferior izquierda",
                    "Escena cotidiana",
                    "Basado en fotografía tomada por el artista",
                    "Disponible para venta"
                ]
            },
            {
                "id": 64,
                "titulo": "Cazando Ninfas I",
                "imagen": "Imagenes/Cazando Ninfas I.jpg",
                "descripcion": "El agua mansa del arroyo, la vegetación que se apodera de las orillas ocultando sus raíces y secretos ancestrales, una cuerda que mantiene en su lugar un barco que desea salir a navegar y dejar una onda en movimiento y no sólo su reflejo en el agua oscura.",
                "medidas": "70 x 69,5 cm",
                "tecnica": "Acrílico sobre lienzo",
                "ano": "2022",
                "ubicacion": "Mercedes, Soriano, Uruguay",
                "detalles": [
                    "Firma en zona inferior derecha",
                    "Basado en fotografía del artista",
                    "Preponderancia de tonos fríos",
                    "No disponible para venta"
                ]
            },
            {
                "id": 65,
                "titulo": "De Música",
                "imagen": "Imagenes/De Música.jpg",
                "descripcion": "De música. Un lugar único donde se vive la música, dónde el tiempo transcurre entre notas y acordes, donde las vibraciones del sonido traspasan la puerta y un transeúnte gira su cabeza para perseguir la melodía mientras la bicicleta espera que su dueño salga.",
                "medidas": "57,5 x 79 cm",
                "tecnica": "Acrílico sobre lienzo",
                "ano": "2022",
                "ubicacion": "Mercedes, Soriano, Uruguay",
                "detalles": [
                    "Firma en zona superior izquierda",
                    "Basado en fotografía tomada por el artista",
                    "Escena de lugares en la ciudad",
                    "Disponible para venta"
                ]
            },
            {
                "id": 66,
                "titulo": "Sin Pausa",
                "imagen": "Imagenes/Sin Pausa.jpg",
                "descripcion": "Cada mayo, la noche de Montevideo se vuelve un murmullo contenido en la Marcha del Silencio. No hay gritos, solo pasos que laten como memoria viva, nombres que flotan en el aire y miradas que sostienen la ausencia. Es un silencio que no calla, que reclama, que abraza. Entre esas sombras de luz, camina Luisa Cuesta, pequeña y firme, con el rostro surcado de historia. En sus manos, la memoria no tiembla: se vuelve presencia. Y en cada paso suyo, el dolor se transforma en dignidad, como si el amor por los que faltan guiara el rumbo de todo un pueblo.",
                "medidas": "79 x 79,5 cm",
                "tecnica": "Acrílico sobre lienzo",
                "ano": "2022",
                "ubicacion": "Mercedes, Soriano, Uruguay",
                "detalles": [
                    "Firma en zona superior izquierda",
                    "Homenaje a Luisa Cuesta",
                    "Fotografía de Marcha del Silencio 2014",
                    "Disponible para venta"
                ]
            },
            {
                "id": 67,
                "titulo": "Besos de Piedra",
                "imagen": "Imagenes/Besos de Piedra.jpg",
                "descripcion": "Calles empedradas que susurran historias, balcones de hierro donde el tiempo se asoma, paredes antiguas, recuerdan un beso escondido, y un silencio tibio que huele a siglos. La vereda respira en sombras alargadas, mientras una campana lejana tiembla en el aire, como si el pasado, aún vivo, se negara dulcemente a partir y el amor crece en el presente.",
                "medidas": "110 x 110 cm",
                "tecnica": "Acrílico sobre lienzo",
                "ano": "2022",
                "ubicacion": "Mercedes, Soriano, Uruguay",
                "detalles": [
                    "Firma en zona inferior derecha",
                    "Texturas en yeso y pastina para cerámica",
                    "Fotografía del artista",
                    "Disponible para venta"
                ]
            },
            {
                "id": 68,
                "titulo": "Dos Caminos",
                "imagen": "Imagenes/Dos Caminos.jpg",
                "descripcion": "Dos senderos se abren como una pregunta en la tierra, el viento duda un instante, como si también eligiera. Entre ambos, la hierba crece indecisa, como si no quisiera elegir. Un cielo gris observa sin intervenir, y en la distancia, el murmullo de un arroyo acompaña la escena, recordando que todo camino, sin importar cuál se tome, guarda su propia historia. El aire se queda suspendido, como si también dudara. No hay señales, no hay certezas, solo el pulso del corazón marcando el ritmo de la elección. Y allí, en ese instante detenido, el paisaje se vuelve espejo: elegir un camino no es dejar el otro atrás, sino empezar a descubrir quién se es al andar.",
                "medidas": "112,5 x 124,5 cm",
                "tecnica": "Acrílico sobre lienzo",
                "ano": "2021",
                "ubicacion": "Mercedes, Soriano, Uruguay",
                "detalles": [
                    "Firma en zona inferior derecha",
                    "Trabajo en escala de grises",
                    "Paisaje de la isla del puerto en Mercedes",
                    "Disponible para venta"
                ]
            },
            {
                "id": 69,
                "titulo": "Ellas",
                "imagen": "Imagenes/Ellas.jpg",
                "descripcion": "En papel quieto de la tinta, tres mujeres habitan un silencio luminoso. No están desnudas como quien se expone, sino como quien regresa a su forma más verdadera. Sus cuerpos, suaves y generosos, se despliegan en curvas que recuerdan la tierra: colinas tibias, frutos maduros, plenitud sin apuro. No hay prisa en la escena, ni juicio, ni mirada intrusa. Solo tres presencias completas, suficientes en sí mismas, habitando la pintura como si fuera un refugio suspendido en el tiempo.",
                "medidas": "70 x 99 cm",
                "tecnica": "Tinta china sobre lámina",
                "ano": "2015",
                "ubicacion": "Mercedes, Soriano, Uruguay",
                "detalles": [
                    "Firma en zona inferior derecha",
                    "Firma diferente",
                    "Tinta china",
                    "Disponible para venta"
                ]
            }
        ];