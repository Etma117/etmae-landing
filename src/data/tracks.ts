export type Track = {
	slug: string;
	title: string;
	year: string;
	code: string;
	href?: string;
	teaser: string;
	story: string[];
	featured?: boolean;
};

export const tracks: Track[] = [
	{
		slug: 'tell-me-why',
		title: 'Tell Me Why',
		year: '2026',
		code: 'TMW.EXE',
		href: 'https://etmae.fanlink.tv/tellmewhy',
		featured: true,
		teaser: 'El porqué que se queda cuando el amor no llega a ser.',
		story: [
			'Hay amores que no llegan a tener nombre. Solo una pregunta que se queda en el pecho cuando la señal no vuelve.',
			'No es un reproche. Es esa voz baja que todos conocemos: el porqué que se queda encendido, no para culparnos, sino para entendernos un poco más.',
		],
	},
	{
		slug: 'silence',
		title: 'Silence',
		year: '2025',
		code: 'SILENCE.SYS',
		href: 'https://etmae.fanlink.tv/silence',
		teaser: 'Encerrado en mí, el mundo de afuera se vuelve una ventana cerrada.',
		story: [
			'Hay soledades que no duelen al principio. Se parecen a un cuarto propio: cálido, conocido, donde todo tiene sentido.',
			'El silencio no es vacío. Es quedarse tan adentro que el mundo de afuera se vuelve una ventana que olvidé abrir. Sigo aquí. Solo que, desde este lado, a veces no veo que el día sigue pasando.',
		],
	},
	{
		slug: 'in-the-name-of-love',
		title: 'In The Name Of Love',
		year: '2025',
		code: 'ITNOL.EXE',
		teaser: 'Abrirse otra vez, aunque no se sepa cómo aterriza.',
		story: [
			'Hay temporadas en las que uno ya está cansado de conocer. Y aun así aparece alguien, y el pecho dice que sí.',
			'En el nombre del amor: si florece, bien. Si no, también fue verdad. No todo lo que se abre tiene que durar para haber valido la pena.',
		],
	},
	{
		slug: 'show-we-run',
		title: 'Show We Run',
		year: '2025',
		code: 'SWR.EXE',
		teaser: 'Salir a la luz y decir: también puedo ser esto.',
		story: [
			'Hay noches en las que el cuarto propio no basta. Quieres el escenario, el brillo, el cuerpo moviéndose dentro de otro sonido.',
			'Esta es esa carrera hacia la luz: no para demostrar que valgo, sino para recordar que también sé correr. Que el corazón cabe en más de un género, y en más de una década.',
		],
	},
	{
		slug: 'remember',
		title: 'Remember',
		year: '2024',
		code: 'REM.TMP',
		href: 'https://etmae.fanlink.tv/remember',
		teaser: 'Hablar con alguien y sentir que hablas en casa.',
		story: [
			'Hubo alguien con quien hablar era como volver a mi propia voz. Sin traducir. Sin fingir.',
			'Las anécdotas siguen aquí, como archivos que todavía abro. No se fue de golpe. Se fue como se apaga una luz: despacio, y aún así dejas el interruptor un rato, por si vuelve a encenderse.',
		],
	},
	{
		slug: 'give-me-a-little-love',
		title: 'Give Me a Little Love',
		year: '2024',
		code: 'GMLL.WAV',
		href: 'https://etmae.fanlink.tv/givemelove',
		teaser: 'No pido el cielo entero. Solo un poco de calor.',
		story: [
			'A veces no se pide el amor entero. Solo una probadita: suficiente para recordar cómo se siente estar cerca de algo cálido.',
			'Es la ilusión más honesta que conozco. No de poseer. De volver a creer, aunque sea un momento, que el corazón todavía sabe el camino.',
		],
	},
	{
		slug: 'what-i-need',
		title: 'What I Need?',
		year: '2024',
		code: 'NEED.ASK',
		href: 'https://etmae.fanlink.tv/WhatINeed',
		teaser: 'Una razón para quedarse. La belleza de seguir aquí.',
		story: [
			'Hay días en los que basta una razón para quedarse. Un destello. La belleza quieta de estar vivos.',
			'Amar a alguien, a veces, es eso: elegir el mundo otra vez. No como una batalla. Como una forma de decir que todavía vale la pena continuar.',
		],
	},
	{
		slug: 'jian',
		title: 'Jian',
		year: '2024',
		code: 'JIAN.BIN',
		href: 'https://etmae.fanlink.tv/TheJian',
		teaser: 'Un ala sola. El cielo que se completa con alguien.',
		story: [
			'Hay un ave antigua de un solo ojo y una sola ala. No puede volar del todo hasta encontrar a quien lleva la otra mitad del cielo.',
			'Todos volamos un poco inclinados. Esta canción es esa búsqueda: no de alguien que nos arregle, sino de alguien con quien el vuelo, por fin, se sienta entero.',
		],
	},
	{
		slug: 'echoes',
		title: 'Echoes',
		year: '2024',
		code: 'ECHO.WAV',
		href: 'https://etmae.fanlink.tv/echoes',
		teaser: 'Si nadie lo oye, el sonido igual existió.',
		story: [
			'Si un árbol cae y no hay nadie para oírlo, ¿hizo algún sonido?',
			'Yo creo que sí. Que hay ecos que existen aunque la habitación esté vacía. Seguir haciendo ruido es una forma de fe: lo que sentimos no necesita testigos para haber sido real.',
		],
	},
	{
		slug: 'lost',
		title: 'Lost',
		year: '2024',
		code: 'LOST.LOG',
		href: 'https://fanlink.tv/lostetmae',
		teaser: 'Dos mundos. Una flor que floreció lejos.',
		story: [
			'Hubo un tiempo en que no tenía mapa. El espacio era eso: un mundo desconocido, y yo flotando en medio, aprendiendo todavía cómo nombrarme.',
			'En algún otro cielo, una flor ya había florecido. Yo era el astronauta que la veía de lejos. Hay distancias que no están vacías. Solo respiran otra atmósfera.',
		],
	},
	{
		slug: 'fall-in-love',
		title: 'Fall In Love',
		year: '2023',
		code: 'FIL.DAT',
		href: 'https://fanlink.tv/etmaeFallInLove',
		teaser: 'Enamorarse también puede ser suave, inseguro y verdadero.',
		story: [
			'Enamorarse no siempre es color de rosa. A veces es quedarse al borde de una palabra que no se dice, y no saber qué fuiste para la otra persona.',
			'Hay amores que van y vuelven sin nombre. No son menos reales por ser inciertos. Solo más silenciosos. Y en ese silencio también se siente el corazón.',
		],
	},
	{
		slug: 'for-you',
		title: 'For You',
		year: '2023',
		code: 'FOR_U.TXT',
		href: 'https://fanlink.tv/etmaeForU',
		teaser: 'Dejar la luz encendida, por si alguien conoce el camino de vuelta.',
		story: [
			'Por un momento creí que la puerta podía abrirse otra vez. Si lo hacía, yo iba a estar ahí.',
			'Hay amores que no son una espera infinita. Son una luz que uno deja encendida: no por quedarse atrapado, sino porque el calor fue real, y todavía se recuerda el camino de vuelta.',
		],
	},
	{
		slug: 'too-far',
		title: 'Too Far',
		year: '2023',
		code: 'TOO_FAR.SYS',
		href: 'https://fanlink.tv/etmaetoofargone',
		teaser: 'El amor, a veces, es una ciudad al otro lado de la lluvia.',
		story: [
			'Hay noches en las que el amor se siente como una ciudad al otro lado de la lluvia. Se ven las luces. Solo que no se puede cruzar.',
			'Escribí desde esa distancia: neón, lejos, todavía extendiendo la mano. No para alcanzar a alguien. Para decir que, incluso lejos, el deseo de acercarse sigue siendo tierno.',
		],
	},
	{
		slug: 'por-siempre',
		title: '¿Por Siempre?',
		year: '2023',
		code: 'FOREVER.QST',
		href: 'https://fanlink.tv/etmaeporsiempre',
		teaser: 'Hay páginas que otra persona todavía no puede pasar.',
		story: [
			'Pregunté si siempre iba a ser así. El silencio también fue una respuesta.',
			'Hay quienes todavía viven en una puerta que ya se cerró. No es crueldad. Es un tiempo que aún no se comparte. Y uno aprende, con suavidad, que no se puede ser el presente de alguien que todavía no termina su ayer.',
		],
	},
	{
		slug: 'el-reino',
		title: 'El Reino De Los Recuerdos Olvidados',
		year: '2022',
		code: 'ERRO.ZIP',
		href: 'https://fanlink.tv/ERDLROEP',
		teaser: 'Un reino hecho de lo que aún no terminamos de sentir.',
		story: [
			'Un reino hecho de lo que no terminamos de sentir. Amores antiguos que nunca del todo se apagaron, y casi-encuentros que nunca del todo llegaron.',
			'Jazz para las cosas que siguen calientes en una habitación de la que ya salimos. Recuerdos olvidados, no porque no importen, sino porque el corazón los guarda a su propio ritmo.',
		],
	},
	{
		slug: 'matters',
		title: 'Matters',
		year: '2022',
		code: 'MATTERS.LOG',
		teaser: 'Lo que guardamos en un cajón también tiene peso.',
		story: [
			'Hay sentimientos que uno no saca al principio. No porque no importen. Porque todavía no tienen forma.',
			'Esta canción es ese cajón abriéndose con cuidado: las cosas pendientes, las carencias, lo que duele y también lo que nos construye. Nombrarlas es una forma de quererse.',
		],
	},
	{
		slug: 'i-found-you',
		title: 'I Found You',
		year: '2022',
		code: 'FOUND.SYS',
		teaser: 'Creí encontrarte. Me estaba encontrando a mí.',
		story: [
			'Creí que te había encontrado. Que esa persona era el final de una búsqueda.',
			'Después entendí que también me estaba sintonizando a mí. A veces “encontrarte” es el nombre que le damos al momento en que, por fin, empezamos a construirnos. Antes de amar a alguien más, había que habitarme.',
		],
	},
	{
		slug: 'one-step-from-you',
		title: 'One Step From You',
		year: '2022',
		code: '10CM.WAV',
		teaser: 'Tan cerca que se siente el calor. Un paso que no se da.',
		story: [
			'Hay amores que viven a diez centímetros. Lo suficientemente cerca para sentir el calor. Lo suficientemente lejos para no tocarse.',
			'No es una tragedia. Es esa distancia suave que casi todos hemos habitado: dos vidas en paralelo, mirándose, como si el universo hubiera puesto el mismo cielo y un paso de más.',
		],
	},
	{
		slug: 'volverte-a-ver',
		title: 'Volverte a ver',
		year: '2021',
		code: 'VER.MEM',
		teaser: 'El deseo suave de volver a verte, aunque sea en memoria.',
		story: [
			'Hay fechas en las que el velo se vuelve fino. Uno no pide un milagro. Solo volver a verte: en un recuerdo, en una canción, en el aire de un día que todavía te nombra.',
			'No es despedida. Es permanencia. El amor que no se acaba cuando alguien se va: se queda, quieto, esperando el instante en que el corazón lo reconoce otra vez.',
		],
	},
	{
		slug: 'left-behind',
		title: 'Left Behind',
		year: '2021',
		code: 'LEFT.DAT',
		teaser: 'Un adiós sin palabras. La habitación que se queda encendida.',
		story: [
			'A veces alguien se va sin hacer ruido. Sin una frase que uno pueda guardar. Solo el espacio que deja.',
			'Quedarse no es un fracaso. Es habitar esa habitación un rato más, con la luz todavía encendida, aprendiendo que algunos adioses también son una forma de silencio — y el silencio, a su modo, también quiere.',
		],
	},
	{
		slug: 'invisible',
		title: 'Invisible',
		year: '2021',
		code: 'INVIS.TMP',
		teaser: 'Querer ser visto sin dejar de habitar tu propio mundo.',
		story: [
			'Me gusta mi mundo. Ese cuarto interior donde las canciones nacen. Y aun así hay un deseo sencillo: que alguien suba a la nave y conozca al humano detrás del sonido.',
			'No es pedir un escenario lleno. Es pedir ser visto. Que lo que hago no se disuelva en el aire. Que alguien, en algún lado, oiga y diga: yo también estaba ahí.',
		],
	},
	{
		slug: 'ephemeral',
		title: 'Ephemeral',
		year: '2021',
		code: 'EPH.WAV',
		teaser: 'Enamorarse también puede ser una estación, y ser hermoso.',
		story: [
			'Hay amores que no están hechos para quedarse. Brillan un tiempo, como una estación, y eso no los hace menos ciertos.',
			'Efímero no quiere decir incompleto. Quiere decir que el corazón también sabe florecer sin pedirle al tiempo que firme para siempre.',
		],
	},
	{
		slug: 'spacelove',
		title: 'Spacelove',
		year: '2021',
		code: 'SPACE.LOV',
		href: 'https://fanlink.tv/SpaceLoveEtmae',
		teaser: 'Pinté un cielo para dos. Ella miraba otro horizonte.',
		story: [
			'Quise pintar un cielo donde solo existiéramos nosotros. Un universo pequeño, hecho para dos.',
			'Algunos cuadros quedan a medias porque la otra persona estaba mirando otro horizonte. Aun así, el color que mezclé para los dos sigue siendo mío. Y sigue siendo hermoso.',
		],
	},
	{
		slug: 'miss-u',
		title: 'Miss U',
		year: '2021',
		code: 'MISS_U.TXT',
		teaser: 'Extrañar como volver a una habitación que todavía está tibia.',
		story: [
			'Extrañar no siempre duele. A veces es volver a una habitación que todavía está tibia. Un flashback. Una risa. El eco de alguien con quien uno se sentía en casa.',
			'Esta canción es esa visita: no para quedarse atrapado, sino para decirte que lo que fue importa. Que el cariño, cuando fue real, se puede recordar con suavidad.',
		],
	},
	{
		slug: 'pray-for-me',
		title: 'Pray For Me',
		year: '2021',
		code: 'PRAY.SYS',
		teaser: 'Una oración enviada al otro lado del sueño.',
		story: [
			'Soñé con alguien cuyo rostro no se veía del todo. Pensé que eras tú. El amor de una vida, todavía sin nombre claro.',
			'Esta es una oración enviada hacia allá: si todavía me guardas en algún rincón, quédate un poco. No como una deuda. Como un hilo suave entre dos noches.',
		],
	},
	{
		slug: 'escape',
		title: 'Escape',
		year: '2021',
		code: 'ESCAPE.BIN',
		teaser: 'Otro mundo, cuando este se vuelve demasiado alto.',
		story: [
			'Hay días en los que la realidad suena demasiado alto. Entonces uno abre otra puerta: un juego, otra pantalla, un mapa donde las reglas son más amables.',
			'Escapar no es desaparecer. Es cuidarse. Entrar a un mundo donde todavía se puede respirar, y volver — cuando el corazón ya sepa cómo.',
		],
	},
	{
		slug: 'ru-orion',
		title: 'R.U. Orion',
		year: '2021',
		code: 'ORION.NAV',
		teaser: 'Las estrellas como el único techo que compartíamos.',
		story: [
			'Cuando no podíamos estar en la misma habitación, el cielo sí. Cada noche miraba las estrellas y te buscaba ahí, como si Orión fuera un punto de encuentro.',
			'El amor, a veces, es eso: dos personas bajo el mismo techo enorme, deseando coincidir. No para poseerse. Solo para saberse mirando el mismo brillo.',
		],
	},
];

export function getTrack(slug: string) {
	return tracks.find((track) => track.slug === slug);
}

export function getAdjacentTracks(slug: string) {
	const index = tracks.findIndex((track) => track.slug === slug);
	return {
		previous: index > 0 ? tracks[index - 1] : undefined,
		next: index >= 0 && index < tracks.length - 1 ? tracks[index + 1] : undefined,
	};
}
