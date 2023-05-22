import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-quever',
  templateUrl: './quever.component.html',
  styleUrls: ['./quever.component.scss']
})
export class QueverComponent {


  //Declaramos un array de objetos (Primero especificando un constructor con los tipos de datos que guarda), cada uno con 3 atributos que representan las rutas a los distintos tamaños de una imágen
  tarjetas: { imagen1: string; imagen2: string; imagen3: string, cast: string, titulo: string, texto: string, url: String }[] = [
    {
      imagen1: "./assets/imagenes_examen/abadia-westmister.jpg",
      imagen2: "./assets/imagenes_examen/abadia-westmister(2).jpg",
      imagen3: "./assets/imagenes_examen/abadia-westmister(1).jpg",
      cast: "abadia-westmister", titulo: "Abadia de westmister",
      texto: "'La Torre de Londres es una emblemática fortaleza histórica situada a orillas del río Támesis. Construida en el siglo XI, ha cumplido diversos roles a lo largo de la historia, desde palacio real hasta prisión. Hoy en día, alberga las Joyas de la Corona y es una popular atracción turística que ofrece fascinantes tours y exhibiciones sobre su oscuro pasado.'",
      url: "https://es.wikipedia.org/wiki/Abad%C3%ADa_de_Westminster"
    },
    {
      imagen1: "./assets/imagenes_examen/big-ben.jpg",
      imagen2: "./assets/imagenes_examen/big-ben(2).jpg",
      imagen3: "./assets/imagenes_examen/big-ben(1).jpg",
      cast: "big-ben",
      titulo: "Big ben",
      texto: "'El Big Ben es el nombre que se le da popularmente a la Gran Campana del Reloj situada en la torre del reloj del Palacio de Westminster en Londres. Es uno de los íconos más reconocibles de la ciudad y una referencia mundial para indicar la hora exacta. La torre del reloj, oficialmente llamada Elizabeth Tower, es parte integral del patrimonio de Londres y ha sido testigo de eventos históricos significativos.',",
      url: "https://es.wikipedia.org/wiki/Big_Ben"
    },
    {
      imagen1: "./assets/imagenes_examen/buckingham-palace.jpg",
      imagen2: "./assets/imagenes_examen/buckingham-palace(2).jpg",
      imagen3: "./assets/imagenes_examen/buckingham-palace(1).jpg",
      cast: "buckingham-palace",
      titulo: "Buckingham palace",
      texto: "El Palacio de Buckingham es la residencia oficial de la monarquía británica en Londres. Construido en 1703, cuenta con 775 habitaciones y es conocido por su icónica fachada neoclásica. El cambio de guardia frente al palacio es un popular espectáculo turístico. Sin embargo, solo la parte este del palacio está abierta al público en determinados períodos del año.",
      url: "https://es.wikipedia.org/wiki/Palacio_de_Buckingham"
    },
    {
      imagen1: "./assets/imagenes_examen/columna-nelson.jpg", imagen2: "./assets/imagenes_examen/columna-nelson(2).jpg", imagen3: "./assets/imagenes_examen/columna-nelson(1).jpg", cast: "columna-nelson", titulo: "Columna nelson", texto: 'La columna de Nelson es un monumento situado en Trafalgar Square, Londres, Inglaterra, en homenaje a Horatio Nelson, almirante británico fallecido en el transcurso de la batalla de Trafalgar. La columna se erigió entre 1840 y 1843 para conmemorar la muerte del almirante. La estatua mide 5,5 metros y se yergue sobre una columna de granito de 46 metros de altura.',
      url: 'https://es.wikipedia.org/wiki/Columna_de_Nelson'
    },
    {
      imagen1: "./assets/imagenes_examen/faro-trinity.jpg", imagen2: "./assets/imagenes_examen/faro-trinity(2).jpg", imagen3: "./assets/imagenes_examen/faro-trinity(1).jpg", cast: "buckingham-palace", titulo: "Faro", texto: 'Situado en la orilla del río Támesis, este faro es el más pequeño de Inglaterra y ofrece una vista única de la ciudad. Además del faro, la zona de Trinity Buoy Wharf alberga una comunidad de artistas, estudios de arte y esculturas peculiares, convirtiéndola en un lugar creativo y sorprendente para explorar.',
      url: 'https://en.wikipedia.org/wiki/Trinity_Buoy_Wharf'
    },
    {
      imagen1: "./assets/imagenes_examen/globe-theater.jpg", imagen2: "./assets/imagenes_examen/globe-theater(2).jpg", imagen3: "./assets/imagenes_examen/globe-theater(1).jpg", cast: "buckingham-palace", titulo: "globe theater", texto: 'El Globe Theatre, ubicado en Londres, es una reconstrucción del famoso teatro isabelino donde se representaron las obras de William Shakespeare. Construido en 1997, mantiene la arquitectura y el ambiente de la época. Ofrece producciones teatrales de Shakespeare y es un destino popular para los amantes del teatro y la historia literaria.',
      url: 'https://es.wikipedia.org/wiki/The_Globe'
    },
    {
      imagen1: "./assets/imagenes_examen/greenwich.jpg", imagen2: "./assets/imagenes_examen/greenwich(2).jpg", imagen3: "./assets/imagenes_examen/greenwich(1).jpg", cast: "buckingham-palace", titulo: "Greenwich", texto: 'Greenwich es un histórico distrito de Londres conocido por su importancia en la navegación y la medición del tiempo. Alberga el Real Observatorio de Greenwich, donde se encuentra el Meridiano de Greenwich, punto de referencia para establecer la longitud cero del mundo. Además, Greenwich cuenta con hermosos parques, el Cutty Sark y el Museo Marítimo Nacional, siendo declarado Patrimonio de la Humanidad por la UNESCO.',
      url: 'https://es.wikipedia.org/wiki/Real_Observatorio_de_Greenwich'
    },
    {
      imagen1: "./assets/imagenes_examen/hide-park.jpg", imagen2: "./assets/imagenes_examen/hide-park(2).jpg", imagen3: "./assets/imagenes_examen/hide-park(1).jpg", cast: "buckingham-palace", titulo: "Hide park", texto: 'Hyde Park, ubicado en el centro de Londres, es uno de los parques más grandes de la ciudad. Con una extensión de más de 140 hectáreas, ofrece vastos espacios verdes, lagos serenos y áreas de recreación. Es un lugar popular para pasear, hacer picnics, montar en bicicleta y disfrutar de eventos culturales. Además, alberga monumentos emblemáticos como el Speakers Corner y el Serpentine Gallery.',
      url: 'https://es.wikipedia.org/wiki/Hyde_Park'
    },
    {
      imagen1: "./assets/imagenes_examen/imperial-war-museum.jpg", imagen2: "./assets/imagenes_examen/imperial-war-museum(2).jpg", imagen3: "./assets/imagenes_examen/imperial-war-museum(1).jpg", cast: "imperial-war-museum", titulo: "Museo imperial", texto: 'El Imperial War Museum (Museo Imperial de la Guerra) en Londres es un museo dedicado a la historia y el impacto de los conflictos modernos en la sociedad. Exhibe una amplia colección de artefactos, documentos y testimonios relacionados con la guerra.',
      url: '',
    },
    {
      imagen1: "./assets/imagenes_examen/kensington-palace.jpg", imagen2: "./assets/imagenes_examen/kensington-palace(2).jpg", imagen3: "./assets/imagenes_examen/kensington-palace(1).jpg", cast: "buckingham-palace", titulo: "kensington Palace", texto: 'El Palacio de Kensington, situado en Londres, es una residencia real histórica que ha sido hogar de varios miembros de la familia real británica. Actualmente, es la residencia oficial del Duque y la Duquesa de Cambridge. El palacio cuenta con hermosos jardines, la Galería de Retratos y exhibiciones sobre la vida de la Princesa Diana. Es un lugar emblemático de la monarquía británica y una atracción turística destacada.',
      url: 'https://es.wikipedia.org/wiki/Palacio_de_Kensington'
    },
    {
      imagen1: "./assets/imagenes_examen/leadenhall-market.jpg", imagen2: "./assets/imagenes_examen/leadenhall-market(2).jpg", imagen3: "./assets/imagenes_examen/leadenhall-market(1).jpg", cast: "buckingham-palace", titulo: "Mercado leadhall", texto: 'Este mercado cubierto, ubicado en el distrito financiero de Londres, data del siglo XIV. Aunque no es un monumento en el sentido tradicional, su arquitectura victoriana y estilo medieval lo convierten en un lugar encantador y único para visitar, con una amplia variedad de tiendas y restaurantes.',
      url: 'https://es.wikipedia.org/wiki/Leadenhall_Market'
    },
    {
      imagen1: "./assets/imagenes_examen/lions-gate.jpg", imagen2: "./assets/imagenes_examen/lions-gate(2).jpg", imagen3: "./assets/imagenes_examen/lions-gate(1).jpg", cast: "buckingham-palace", titulo: "La Puerta de los Leones", texto: 'La Puerta de los Leones es una leyenda que relaciona a los leones de Trafalgar Square con el Big Ben en Londres. Según la leyenda, si el Big Ben sonara 13 veces, los leones cobrarían vida y comenzarían a dar vueltas alrededor de la columna Nelson ',
      url: 'https://es.wikipedia.org/wiki/Museo_Imperial_de_la_Guerra'
    },
    {
      imagen1: "./assets/imagenes_examen/london-bridge.jpg", imagen2: "./assets/imagenes_examen/london-bridge(2).jpg", imagen3: "./assets/imagenes_examen/london-bridge(1).jpg", cast: "buckingham-palace", titulo: "El London Eye", texto: 'El Puente de Londres, construido en 1894, cruza el río Támesis en el corazón de la ciudad. Es un emblemático puente levadizo de estilo victoriano, reconocido por sus torres y su arquitectura distintiva. Es un importante símbolo de la capital británica y ofrece impresionantes vistas del río y de otros monumentos cercanos, como la Torre de Londres.',
      url: 'https://es.wikipedia.org/wiki/Puente_de_Londres'
    },
    {
      imagen1: "./assets/imagenes_examen/london-eye.jpg", imagen2: "./assets/imagenes_examen/london-eye(2).jpg", imagen3: "./assets/imagenes_examen/london-eye(1).jpg", cast: "buckingham-palace", titulo: "Ojo de londres ", texto: 'El London Eye, conocido oficialmente como la Coca-Cola London Eye, es una famosa noria de observación situada en el South Bank del río Támesis. Inaugurada en 2000, es una de las atracciones más populares de Londres. Con 135 metros de altura, ofrece vistas panorámicas impresionantes de la ciudad y es un símbolo icónico de la capital británica.',
      url: 'https://es.wikipedia.org/wiki/London_Eye'
    },
    {
      imagen1: "./assets/imagenes_examen/marble-arch.jpg", imagen2: "./assets/imagenes_examen/marble-arch(2).jpg", imagen3: "./assets/imagenes_examen/marble-arch(1).jpg", cast: "buckingham-palace", titulo: "Marble Arch", texto: 'Marble Arch es una imponente estructura de arco de mármol blanco situada en el extremo norte de Park Lane, en Londres. Fue diseñado en 1827 como la entrada ceremonial a Buckingham Palace. Ahora se encuentra en el cruce de Oxford Street y Edgware Road, y es un hito icónico y punto de referencia para la ciudad.',
      url: 'https://es.wikipedia.org/wiki/Marble_Arch',
    },
    {
      imagen1: "./assets/imagenes_examen/milenium-bridge.jpg", imagen2: "./assets/imagenes_examen/milenium-bridge(2).jpg", imagen3: "./assets/imagenes_examen/milenium-bridge(1).jpg", cast: "buckingham-palace", titulo: "Puente del Milenio", texto: 'El Puente del Milenio, situado en Londres, es un puente peatonal que cruza el río Támesis. Inaugurado en el año 2000, se caracteriza por su diseño moderno y curvilíneo. Es un lugar popular para pasear y disfrutar de vistas panorámicas de la ciudad, conectando la Catedral de San Pablo con el barrio de Bankside y el Tate Modern.',
      url: 'https://es.wikipedia.org/wiki/Millennium_Bridge'
    },
    {
      imagen1: "./assets/imagenes_examen/monumento-incendio.jpg", imagen2: "./assets/imagenes_examen/monumento-incendio(2).jpg", imagen3: "./assets/imagenes_examen/monumento-incendio(1).jpg", cast: "buckingham-palace", titulo: "El monumento al gran incendio", texto: 'El Monumento al Gran Incendio de Londres es una columna de piedra de 61 metros de altura ubicada cerca de la Catedral de San Pablo. Fue construido en 1677 para conmemorar el devastador incendio de 1666. Los visitantes pueden subir a la cima para disfrutar de vistas panorámicas de la ciudad. Es un recordatorio histórico y un símbolo de la resiliencia de Londres.',
      url: 'https://es.wikipedia.org/wiki/Monumento_al_gran_incendio_de_Londres'
    },
    {
      imagen1: "./assets/imagenes_examen/museo-britanico.jpg", imagen2: "./assets/imagenes_examen/museo-britanico(2).jpg", imagen3: "./assets/imagenes_examen/museo-britanico(1).jpg", cast: "buckingham-palace", titulo: "El Museo Británico", texto: 'El Museo Británico, situado en Londres, es uno de los museos más famosos y visitados del mundo. Fundado en 1753, alberga una vasta colección de artefactos históricos y culturales de diversas civilizaciones, abarcando desde la antigüedad hasta la actualidad. Sus galerías exhiben tesoros como la Piedra de Rosetta y los frisos del Partenón, entre otros.',
      url: 'https://es.wikipedia.org/wiki/Museo_Brit%C3%A1nico'
    },
    {
      imagen1: "./assets/imagenes_examen/museo-historia.jpg", imagen2: "./assets/imagenes_examen/museo-historia(2).jpg", imagen3: "./assets/imagenes_examen/museo-historia(1).jpg", cast: "buckingham-palace", titulo: "El Museo de Historia Natural", texto: 'El Museo de Historia Natural, ubicado en Londres, es uno de los principales museos del mundo dedicado a la historia natural y la biodiversidad. Fundado en 1881, alberga una extensa colección de especímenes, fósiles y artefactos, incluyendo el famoso esqueleto de un diplodocus y la icónica sala de dinosaurios. Es un lugar fascinante para aprender sobre la evolución, la vida animal y la geología.',
      url: 'https://es.wikipedia.org/wiki/Museo_de_Historia_Natural_(Londres)'
    },
    {
      imagen1: "./assets/imagenes_examen/palacio-westmister.jpg", imagen2: "./assets/imagenes_examen/palacio-westmister(2).jpg", imagen3: "./assets/imagenes_examen/palacio-westmister(1).jpg", cast: "buckingham-palace", titulo: "El Palacio de Westminster", texto: 'El Palacio de Westminster, ubicado en Londres, es el emblemático edificio que alberga el Parlamento del Reino Unido. Con su impresionante arquitectura gótica y la icónica torre del Big Ben, es uno de los símbolos más reconocibles de la ciudad. Es un centro político y un importante destino turístico que ofrece visitas guiadas y la oportunidad de presenciar debates parlamentarios.',
      url: 'https://es.wikipedia.org/wiki/Palacio_de_Westminster',
    },
    {
      imagen1: "./assets/imagenes_examen/parlamento-britanico.jpg", imagen2: "./assets/imagenes_examen/parlamento-britanico(2).jpg", imagen3: "./assets/imagenes_examen/parlamento-britanico.jpg", cast: "buckingham-palace", titulo: "El Parlamento", texto: 'El Parlamento del Reino Unido, ubicado en el Palacio de Westminster en Londres, es el órgano legislativo supremo del país. Construido en el siglo XIX, es reconocido por su emblemática Torre del Reloj, conocida como el Big Ben. El Parlamento alberga las Cámaras del Parlamento, la Cámara de los Comunes y la Cámara de los Lores, donde se debaten y aprueban las leyes. Es un importante símbolo de la democracia británica y una atracción turística popular.',
      url: 'https://es.wikipedia.org/wiki/Parlamento_del_Reino_Unido'
    },
    {
      imagen1: "./assets/imagenes_examen/picadilly-circus.jpg", imagen2: "./assets/imagenes_examen/picadilly-circus(2).jpg", imagen3: "./assets/imagenes_examen/picadilly-circus(1).jpg", cast: "buckingham-palace", titulo: "Piccadilly Circus", texto: 'Piccadilly Circus es una famosa plaza en el corazón de Londres, conocida por sus icónicos letreros luminosos y su bullicio constante. Es un importante centro de transporte y punto de encuentro para locales y turistas. Rodeada de teatros, tiendas y restaurantes, es un lugar vibrante y emblemático de la vida urbana londinense.',
      url: 'https://es.wikipedia.org/wiki/Piccadilly_Circus'
    },
    {
      imagen1: "./assets/imagenes_examen/puente-waterloo.jpg", imagen2: "./assets/imagenes_examen/puente-waterloo(2).jpg", imagen3: "./assets/imagenes_examen/puente-waterloo(1).jpg", cast: "buckingham-palace", titulo: "El puente de Waterloo", texto: 'El puente de Waterloo, ubicado en Londres, es un icónico puente ferroviario y peatonal que atraviesa el río Támesis. Construido en 1844, mide aproximadamente 380 metros de largo y es famoso por su diseño y vistas panorámicas de la ciudad. Es un importante símbolo histórico y turístico de la capital británica.',
      url: 'https://es.wikipedia.org/wiki/Puente_de_Waterloo'
    },
    {
      imagen1: "./assets/imagenes_examen/regents-park.jpg", imagen2: "./assets/imagenes_examen/regents-park(2).jpg", imagen3: "./assets/imagenes_examen/regents-park(1).jpg", cast: "buckingham-palace", titulo: "Regents Park", texto: 'Regents Park, ubicado en el centro de Londres, es uno de los parques reales más grandes y hermosos de la ciudad. Con extensas áreas verdes, jardines bien cuidados y un lago sereno, es un lugar ideal para relajarse, hacer picnic, practicar deportes al aire libre y disfrutar de la naturaleza. También alberga el famoso zoológico de Londres y el Open Air Theatre. Es un refugio tranquilo en medio del bullicio de la ciudad.',
      url: "https://es.wikipedia.org/wiki/Regent%27s_Park",
    },
    {
      imagen1: "./assets/imagenes_examen/royal-albert.jpg", imagen2: "./assets/imagenes_examen/royal-albert(2).jpg", imagen3: "./assets/imagenes_examen/royal-albert(1).jpg", cast: "buckingham-palace", titulo: "El Royal Albert Hall", texto: 'El Royal Albert Hall, situado en Londres, es una icónica sala de conciertos y recinto multifuncional. Inaugurado en 1871, es famoso por su arquitectura y acústica excepcionales. Es sede de diversos eventos, desde conciertos de música clásica y ópera hasta ceremonias de premios y espectáculos populares. Es un lugar emblemático para disfrutar de actuaciones artísticas de renombre mundial.',
      url: 'https://es.wikipedia.org/wiki/Royal_Albert_Hall'
    },
    {
      imagen1: "./assets/imagenes_examen/San-pablo.jpg", imagen2: "./assets/imagenes_examen/San-pablo(2).jpg", imagen3: "./assets/imagenes_examen/San-pablo(1).jpg", cast: "buckingham-palace", titulo: "La Catedral de San Pablo", texto: 'La Catedral de San Pablo es una majestuosa iglesia anglicana ubicada en Londres. Construida entre los siglos XVII y XVIII, su imponente cúpula es una de las más grandes del mundo. Conocida por su arquitectura barroca, ha sido escenario de eventos históricos y funerales de renombre, y ofrece vistas panorámicas desde su galería de la cúpula.',
      url: 'https://es.wikipedia.org/wiki/Catedral_de_San_Pablo_de_Londres'
    },
    {
      imagen1: "./assets/imagenes_examen/somerset-house.jpg", imagen2: "./assets/imagenes_examen/buckingham-palace(2).jpg", imagen3: "./assets/imagenes_examen/buckingham-palace(1).jpg", cast: "buckingham-palace", titulo: "Somerset House", texto: 'Somerset House es un magnífico edificio neoclásico ubicado en Londres, cerca del río Támesis. Construido en el siglo XVIII, alberga una amplia gama de actividades culturales, incluyendo exposiciones de arte, conciertos, eventos de moda y más. También cuenta con hermosos patios interiores, fuentes y espacios para disfrutar al aire libre. Es un centro cultural emblemático de la ciudad.',
      url: 'https://es.wikipedia.org/wiki/Somerset_House'
    },
    { imagen1: "./assets/imagenes_examen/torre-londres.jpg", imagen2: "./assets/imagenes_examen/torre-londres(2).jpg", imagen3: "./assets/imagenes_examen/torre-londres(1).jpg", cast: "torre-londres", titulo: "Torre de londres", texto: "El palacio de Buckingham", url: "https://es.wikipedia.org/wiki/Palacio_de_Buckingham" },
    { imagen1: "./assets/imagenes_examen/tower-bridge.jpg", imagen2: "./assets/imagenes_examen/buckingham-palace(2).jpg", imagen3: "./assets/imagenes_examen/buckingham-palace(1).jpg", cast: "buckingham-palace", titulo: "Buckingham palace", texto: "El palacio de Buckingham", url: "https://es.wikipedia.org/wiki/Palacio_de_Buckingham" },
    {
      imagen1: "./assets/imagenes_examen/trafalgar-square.jpg", imagen2: "./assets/imagenes_examen/trafalgar-square(2).jpg", imagen3: "./assets/imagenes_examen/trafalgar-square(1).jpg", cast: "trafalgar-square", titulo: "Trafalgar", texto: 'Trafalgar Square es una icónica plaza en el corazón de Londres. Construida en 1840, está dominada por la Columna de Nelson, en honor al almirante Nelson. Rodeada de majestuosos edificios y famosos leones de bronce, la plaza alberga eventos, celebraciones y manifestaciones, siendo uno de los puntos de encuentro más emblemáticos de la ciudad.',
      url: 'https://es.wikipedia.org/wiki/Trafalgar_Square'
    },
  ];





  //Creamos la variable que guardará la ruta de la imágen
  rutaImagen!: string;

  castt!: string;
  titl!: string;
  text!: string;
  url!: string;




  //Creamos el método que se encarga de controlar el tamaño de la imágen 
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.setRutaImagen();

  }

  ngOnInit() {
    this.setRutaImagen();

  }

  //En este método controlamos, que según la anchura de la ventana, estableceremos una ruta de imágen u otra 
  setRutaImagen() {
    const windowWidth = window.innerWidth;

    this.castt = 'cast';
    this.titl = 'titulo';
    this.text = 'texto';
    this.url = 'url';

    if (windowWidth >= 920) {
      this.rutaImagen = 'imagen1';
    } else if (windowWidth >= 830) {
      this.rutaImagen = 'imagen2';
    } else {
      this.rutaImagen = 'imagen3';
    }
  }

  //Este es el método que se encarga de mandar a la ruta de la imágen elegida al componente tarjeta
  getRutaImagen(tarjeta: any) {
    return tarjeta[this.rutaImagen];
  }

}
