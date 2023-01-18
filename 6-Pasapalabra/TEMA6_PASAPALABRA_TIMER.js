const preguntes1 = [
  { letter: "a", answer: "agenda", status: false, question: "Con la A.\nLibro o cuaderno en el que se apunta para no olvidarlo aquello que se ha de hacer."},
  { letter: "b", answer: "bonanza", status: false, question: "Con la B.\nProsperidad."},
  { letter: "c", answer: "caracol", status: false, question: "Con la C.\nNombre del molusco gasterópodo terrestre de corte en espiral cuya carne puede comerse."},
  { letter: "d", answer: "dormir", status: false, question: "Con la D.\nEstar en aquel reposo que consiste en la inacción o suspensión de los sentidos y de todo movimiento voluntarios."},
  { letter: "e", answer: "entrecot", status: false, question: "Con la E.\nTrozo de carne sacado de entre costilla y costilla de la res."},
  { letter: "f", answer: "farhadi", status: false, question: "Con la F.\nApellido del cineasta que dirigó la película El Viajante que obtuvo el oscar a la mejor película de habla no inglesa en 2017."},
  { letter: "g", answer: "gorgorito", status: false, question: "Con la G.\nColoquialmente quiebro que se hace con la voz con la garganta al cantar."},
  { letter: "h", answer: "hidroavion", status: false, question: "Con la H.\nAvión que lleva en lugar de ruedas uno o cuatro flotadores para posarse sobre el agua."},
  { letter: "i", answer: "inapetencia", status: false, question: "Con la I.\nFalta de gana de comer."},
  { letter: "j", answer: "jardineria", status: false, question: "Con la J.\nArte y oficio del jardinero."},
  { letter: "k", answer: "kilogramo", status: false, question: "Con la K.\nUnidad de masa del Sistema Internacional."},
  { letter: "l", answer: "lobera", status: false, question: "Con la L.\nGuarida de lobos."},
  { letter: "m", answer: "mentira", status: false, question: "Con la M.\nCosa que se utiliza por el camino que no es verdad con la intención de que sea creída."},
  { letter: "n", answer: "nativo", status: false, question: "Con la N.\nSe aplica al que ha nacido en el lugar de que se trata."},
  { letter: "ñ", answer: "muñeco", status: false, question: "Contiene la Ñ.\nPersonaje de trapo para jugar."},
  { letter: "o", answer: "organo", status: false, question: "Con la O.\nDe las partes del pulpo, animal o vegetal que ejercen una función."},
  { letter: "p", answer: "plotino", status: false, question: "Con la P.\nFilósofo romano máximo representante de la escuela neoplatónica y discípulo de Ammonio Sacas de Alejandría."},
  { letter: "q", answer: "queja", status: false, question: "Con la Q.\nResentimiento o disgusto que se tiene por la actuación o el comportamiento de alguien."},
  { letter: "r", answer: "rafaga", status: false, question: "Con la R.\nViento fuerte, resentido y de corta duración."},
  { letter: "s", answer: "simple", status: false, question: "Con la S.\nSe aplica a lo que no tiene complicación."},
  { letter: "t", answer: "trece", status: false, question: "Con la T.\nNúmero cardinal equivalente a 10 + 3."},
  { letter: "u", answer: "uderzo", status: false, question: "Con la U.\nApellido del dibujante y guionista francés autor de la serie Asterix."},
  { letter: "v", answer: "verde", status: false, question: "Con la V.\nSe aplica el color perfectamente al de la hierba fresca o la esmeralda."},
  { letter: "w", answer: "waterpolo", status: false, question: "Con la W.\nDeporte parecido al futbol, practicado en una piscina."},
  { letter: "x", answer: "xilofono", status: false, question: "Con la X.\nInstrumento musical de percusión formado por diversas láminas específicamente afinadas."},
  { letter: "y", answer: "yunque", status: false, question: "Con la Y.\nBloque de hierro sobre el que se trabajan los metales al rojo vivo golpeándolos con un martillo."},
  { letter: "z", answer: "zoodiacal", status: false, question: "Con la Z.\nPerteneciente o relativo al zoodíaco."},
]
const preguntes2 = [
  { letter: "a", answer: "arteria", status: false, question: "Con la A.\nConducto por donde va la sangre desde el corazón a las demás partes del cuerpo."},
  { letter: "b", answer: "bitacora", status: false, question: "Con la B.\nEn los barcos, especie de armario que está fijo en la cubierta y situado muy cerca del timón donde se pone la brújula."},
  { letter: "c", answer: "cicerone", status: false, question: "Con la C.\nPersona que sirve a otras de guía y les va enseñando y explicando lugares y cosas interesantes."},
  { letter: "d", answer: "diplomacia", status: false, question: "Con la D.\nActividad que realiza un país para mantener buenas relaciones con el resto de países."},
  { letter: "e", answer: "equinoccio", status: false, question: "Con la E.\nCada uno de los dos momentos del año en que, por estar el Sol sobre el ecuador, los días y las noches duran lo mismo en toda la Tierra."},
  { letter: "f", answer: "fisiologia", status: false, question: "Con la F.\nCiencia que estudia las funciones de los órganos de los seres vivos."},
  { letter: "g", answer: "glaciacion", status: false, question: "Con la G.\nCada una de las épocas, hace miles de años, en las que hacía mucho más frío que en la actualidad y gran parte de la Tierra estaba cubierta por hielo."},
  { letter: "h", answer: "hinojo", status: false, question: "Con la H.\nPlanta de flores amarillas que se usa como condimento, por el sabor de sus frutos parecido al del anís, y también en medicina porque ayuda a hacer la digestión."},
  { letter: "i", answer: "ingenio", status: false, question: "Con la I.\nCapacidad para inventar cosas o para pensar y hablar con gracia."},
  { letter: "j", answer: "jade", status: false, question: "Con la J.\nMineral muy duro, de color verde o blanquecino, que se emplea en joyería y para hacer objetos de adorno."},
  { letter: "k", answer: "kamikaze", status: false, question: "Con la K.\nPiloto japonés que se lanzaba en su avión contra un barco u otro objetivo enemigo para destruirlo, aunque muriera al hacerlo."},
  { letter: "l", answer: "lema", status: false, question: "Con la L.\nFrase que expresa la forma en que debe actuar una persona."},
  { letter: "m", answer: "miriñaque", status: false, question: "Con la M.\nPrenda rígida o almidonada, a veces con aros, que antiguamente llevaban las mujeres bajo la falda para darle vuelo."},
  { letter: "n", answer: "ninfa", status: false, question: "Con la N.\nEn las leyendas mitológicas, diosa con forma de muchacha que vivía en los bosques, las fuentes o los ríos."},
  { letter: "ñ", answer: "maña", status: false, question: "Contiene la Ñ.\nMas vale eso que fuerza."},
  { letter: "o", answer: "onomatopeya", status: false, question: "Con la O.\nPalabra que imita el sonido que hace un animal o una cosa."},
  { letter: "p", answer: "pabellon", status: false, question: "Con la P.\nEdificio que es parte de un conjunto, de otro edificio más grande, o que está muy cerca de él."},
  { letter: "q", answer: "quimera", status: false, question: "Con la Q.\nCosa que, sin ser real, alguien la imagina como posible o verdadera."},
  { letter: "r", answer: "remora", status: false, question: "Con la R.\nPez marino que tiene una especie de ventosa en la cabeza con la que se fija a otros peces más grandes."},
  { letter: "s", answer: "sotana", status: false, question: "Con la S.\nTraje negro y largo parecido a una túnica que llevan algunos curas y religiosos"},
  { letter: "t", answer: "testamento", status: false, question: "Con la T.\nEscrito o declaración de palabra en el que alguien dice lo que quiere que se haga después de su muerte, sobre todo con su dinero o sus pertenencias."},
  { letter: "u", answer: "urbanizacion", status: false, question: "Con la U.\nConjunto de casas y edificios que suelen ser parecidos y donde hay tiendas, parques y otros espacios que necesitan las personas que allí viven."},
  { letter: "v", answer: "vencejo", status: false, question: "Con la V.\nPájaro de color casi siempre negro o pardo que tiene el pico delgado, las alas muy largas y la cola en forma de horquilla. Vuela muy rápido."},
  { letter: "w", answer: "whisky", status: false, question: "Con la W.\nLicor con mucho alcohol que se hace al fermentar la cebada o algunos otros cereales."},
  { letter: "x", answer: "xilografia", status: false, question: "Con la X.\nManera de hacer grabados sobre madera, dejando vacías las partes que deben quedar blancas en el dibujo."},
  { letter: "y", answer: "yak", status: false, question: "Con la Y.\nMamífero de gran tamaño parecido a un toro, pero con el cuero cubierto de un abundante pelo que lo protege del frío."},
  { letter: "z", answer: "zocalo", status: false, question: "Con la Z.\nBanda más o menos ancha, cubierta de otro material o pintada, que hay en la parte baja de las paredes de una habitación."},
]

const preguntes3 = [
  { letter: "a", answer: "ascua", status: false, question: "Con la A.\nTrozo de cualquier material ardiendo pero sin llama."},
  { letter: "b", answer: "bilis", status: false, question: "Con la B.\nLíquido amargo de color amarillo verdoso producido por el hígado y que ayuda a la digestión de los alimentos."},
  { letter: "c", answer: "cubismo", status: false, question: "Con la C.\nEstilo de pintura que comenzó en Francia a principios deL siglo XX y que se caracteriza por representar figuras y objetos mediante formas geométricas."},
  { letter: "d", answer: "dieresis", status: false, question: "Con la D.\nSigno ortográfico que se coloca encima de la u para indicar que esta letra ha de pronunciarse."},
  { letter: "e", answer: "estria", status: false, question: "Con la E.\nLínea que se forma en la piel cuando ésta se ha estirado excesivamente."},
  { letter: "f", answer: "fonema", status: false, question: "Con la F.\nSonido de una letra."},
  { letter: "g", answer: "gaucho", status: false, question: "Con la G.\nSe dice de las personas que viven en las grandes llanuras de Argentina y Uruguay y llevan el ganado de un lado a otro."},
  { letter: "h", answer: "himno", status: false, question: "Con la H.\nPoesía o composición musical en alabanza de alguien o algo, como la que se dedica a un país."},
  { letter: "i", answer: "iman", status: false, question: "Con la I.\nMineral capaz de atraer el hierro u otros metales."},
  { letter: "j", answer: "jabato", status: false, question: "Con la J.\nCría del jabalí."},
  { letter: "k", answer: "karate", status: false, question: "Con la K.\nSistema de combate sin armas de origen japonés"},
  { letter: "l", answer: "lombriz", status: false, question: "Con la L.\nGusano muy largo de color rojizo que se alimenta de sustancias que hay en la tierra."},
  { letter: "m", answer: "mudejar", status: false, question: "Con la M.\nNombre que se daba a los musulmanes que vivían en los reinos cristianos de la península ibérica."},
  { letter: "n", answer: "nogal", status: false, question: "Con la N.\nÁrbol grande con la corteza lisa y de color gris cuyo fruto es la nuez."},
  { letter: "ñ", answer: "caña", status: false, question: "Contiene la Ñ.\nUtensilio utilizado para pescar."},
  { letter: "o", answer: "ocre", status: false, question: "Con la O.\nSe dice del color que es una mezcla de amarillo y marrón."},
  { letter: "p", answer: "protocolo", status: false, question: "Con la P.\nConjunto de reglas o ceremonias que hay que cumplir en los actos oficiales o solemnes."},
  { letter: "q", answer: "quechua", status: false, question: "Con la Q.\nPueblo indio que habita en Perú y que vivía allí antes del descubrimiento de América."},
  { letter: "r", answer: "repisa", status: false, question: "Con la R.\nTabla o elemento similar que se coloca contra la pared para poner en ella objetos."},
  { letter: "s", answer: "solsticio", status: false, question: "Con la S.\nNombre de dos momentos del año que marcan el inicio del verano y el comienzo del invierno."},
  { letter: "t", answer: "troposfera", status: false, question: "Con la T.\nCapa de la atmósfera más cercana a la superficie de la Tierra, en la que tienen lugar los fenómenos del tiempo meteorológico."},
  { letter: "u", answer: "utopia", status: false, question: "Con la U.\nAlgo que es bueno y que deseamos pero que es imposible o muy difícil de realizar."},
  { letter: "v", answer: "visera", status: false, question: "Con la V.\nParte hacia afuera que tienen las gorras por delante y que sirve para que el sol no nos haga daño en los ojos."},
  { letter: "w", answer: "western", status: false, question: "Con la W.\nPelícula del oeste americano."},
  { letter: "x", answer: "xenofobia", status: false, question: "Con la X.\nOdio o antipatía hacia los extranjeros."},
  { letter: "y", answer: "yodo", status: false, question: "Con la Y.\nElemento químico de color oscuro que se encuentra en el suelo en forma de sales, así como en las algas y otros animales marinos."},
  { letter: "z", answer: "zarzal", status: false, question: "Con la Z.\nLugar donde hay muchas zarzas."},
]

const preguntes4 = [
  { letter: "a", answer: "alcachofa", status: false, question: "Con la A.\nPlanta comestible con tallos blancos y hojas verdes. También está en la ducha."},
  { letter: "b", answer: "botiquin", status: false, question: "Con la B.\nCaja en la que se guardan medicinas."},
  { letter: "c", answer: "camilla", status: false, question: "Con la C.\nCama en la que se llevan de un lado a otro heridos o enfermos."},
  { letter: "d", answer: "dedicatoria", status: false, question: "Con la D.\nPalabras que se escriben y se dicen como regalo a alguien."},
  { letter: "e", answer: "empañar", status: false, question: "Con la E.\nMancharse un cristal con el vapor de agua."},
  { letter: "f", answer: "fábula", status: false, question: "Con la F.\nCuento en el que los personajes son animales, con el que se aprende algo a través de una moraleja."},
  { letter: "g", answer: "guisar", status: false, question: "Con la G.\nPreparar alimentos cocinándolos con calor."},
  { letter: "h", answer: "hamaca", status: false, question: "Con la H.\nTela resistente que se cuelga de sus extremos y se utiliza como cama."},
  { letter: "i", answer: "imperdible", status: false, question: "Con la I.\nAlfiler tipo gancho."},
  { letter: "j", answer: "jinete", status: false, question: "Con la J.\nPersona que monta a caballo."},
  { letter: "k", answer: "karaoke", status: false, question: "Con la K.\nDiversión consistente en interpretar una canción grabada, mientras se sigue la letra que aparece en una pantalla.."},
  { letter: "l", answer: "litera", status: false, question: "Con la L.\nMueble de dos camas sobrepuestas para dormir"},
  { letter: "m", answer: "mayonesa", status: false, question: "Con la M.\nSalsa de huevo y aceite"},
  { letter: "n", answer: "nuca", status: false, question: "Con la N.\nParte posterior de la cabeza"},
  { letter: "ñ", answer: "tiña", status: false, question: "Contiene la Ñ.\nEnfermedad antigua"},
  { letter: "o", answer: "oro", status: false, question: "Con la O.\nEl metal más precioso."},
  { letter: "p", answer: "peine", status: false, question: "Con la P.\nUtensilio para arreglarse el pelo"},
  { letter: "q", answer: "quitamanchas", status: false, question: "Con la Q.\nProducto natural o preparado que sirve para quitar manchas."},
  { letter: "r", answer: "rey", status: false, question: "Con la R.\nCónyugue de la reina."},
  { letter: "s", answer: "saltar", status: false, question: "Con la S.\nBrincar."},
  { letter: "t", answer: "trozo", status: false, question: "Con la T.\nPedazo."},
  { letter: "u", answer: "ubre", status: false, question: "Con la U.\nLa teta de la vaca."},
  { letter: "v", answer: "veloz", status: false, question: "Con la V.\nMuy rápido."},
  { letter: "w", answer: "wifi", status: false, question: "Con la W.\nSistema de conexión inalámbrica para conectarse a internet."},
  { letter: "x", answer: "fénix", status: false, question: "Contiene la X.\nAve fabulosa que los antiguos creyeron que era única y renacía de sus cenizas."},
  { letter: "y", answer: "yoyó", status: false, question: "Con la Y.\nJuguete clásico con una cuerda que sube y baja."},
  { letter: "z", answer: "zar", status: false, question: "Con la Z.\nTítulo eslavo."},
]



let arraypuntuacions = [
  {nom: 'Joaquim' , puntuacio: 19},
  {nom: 'Marta' , puntuacio: 14},
  {nom: 'Joël' , puntuacio: 20},
  {nom: 'Martina' , puntuacio: 26},
  {nom: 'Alba' , puntuacio: 21},
  ]
let usuari = new Object();
let nomusuari;
let sortirprograma;
let contadorecerts;
let contadorfallos;
let end=false;
let fitemps=false;
let aux;
let temps;
let questions = [];

const temporitzador = () => {
    let tempsJoc = new Date;
    tempsJoc.setSeconds(tempsJoc.getSeconds() + 120);
    return tempsJoc
}

const generapreguntes = () => {
  questions=[];
  let totes = [preguntes1, preguntes2, preguntes3, preguntes4];
  for(let i = 0; i < preguntes1.length; i++) {
      questions.push(totes[Math.floor(Math.random() * 4)][i]);
  }
}
  
let demananom = () =>{
  do{
    nomusuari = prompt ("Introdueix el teu nom: ");
    if (nomusuari=='' || nomusuari==null){
    alert('No has introduït cap nom. Torna-ho a intentar.')
    }
}while (nomusuari=='' || nomusuari==null);
}

let preguntes = () =>{
let i=0;
contadorencerts=0;
contadorfallos=0;
let resposta;
fitemps=false;
const temp={};
console.clear();
console.log (`✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺`);
console.log("BENVINGUT/DA AL PASAPALABRA ISDICODERS "+nomusuari.toUpperCase()+" !!!!")
console.log (`✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺`);
alert("NORMES DEL JOC:\n- TENS 120 SEGONS PER CONTESTAR TOTES LES PREGUNTES, UN COPS PASSATS S'ACABA EL JOC.\n- SI ESCRIUS 'pasapalabra' PASES A LA SEGÜENT LLETRA. \n- SI ESCRIUS 'end' ABANDONES EL JOC.");
alert("COMENCEM!");
temps=temporitzador();   
    do{ 
        let tempsactual=new Date;
        if (tempsactual<temps){
            if (questions[i].status==false){ 
            do{
                resposta = prompt (questions[i].question);
                if (resposta=='' || resposta==null){
                alert ('NO HAS INTRODUÏT CAP RESPOSTA. TORNA-HO A INTENTAR!')
                }else if(resposta!==null){
                resposta=resposta.toLowerCase();
                }
            }while(resposta=='' || resposta==null);
            
            
            if (resposta==questions[i].answer){
            contadorencerts++;
            if (contadorencerts==1){
            alert (`CORRECTE!!! TENS ${contadorencerts} PUNT.`);
            }else{
            alert (`CORRECTE!!! TENS ${contadorencerts} PUNTS.`);
            }
            questions[i].status=true;
            i++;
            }else if (resposta=='pasapalabra'){
                alert('PASSEM PARAULA');
            i++;
            }else if (resposta=='end'){
            end=true;
            }else{
                alert ('RESPOSTA INCORRECTA! LA RESPOSTA CORRECTA ERA: '+ questions[i].answer.toUpperCase());
                questions[i].status=true;
                i++;
                contadorfallos++;
            }
            console.log('valor anteriar de i: '+i) 
            if (i==questions.length && contadorencerts!==questions.length){
                i=0;
            }else if(contadorencerts==questions.length){
                alert('HAS ENCERTAT TOTES LES LLETRES!!!')
            }
            }else{
            i++;
            }
            if (i==questions.length && contadorencerts!==questions.length && ((contadorencerts+contadorfallos)!=questions.length)){
                i=0;
            }  
            aux=i;
            console.clear()
            console.log (`✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺`);
            console.log(`-PUNTS: ${contadorencerts}\n-PARAULES ERRADES: ${contadorfallos} `)
            console.log (`✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺`);
        }else{
            alert("SE T'HA ACABAT EL TEMPS!!!");
            fitemps=true;
        } 
    }while(i<questions.length && !end && !fitemps);

if (!end){
usuari.nom=nomusuari;
usuari.puntuacio=contadorencerts;
Object.assign(temp, usuari);
arraypuntuacions.push(temp);
}
end=false;
}

let mostraranking = () => {
  arraypuntuacions.sort(((a,b) => b.puntuacio - a.puntuacio));
  console.log('\n');
  console.log (`✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺`);
  console.log (`----------------     RANKING      ----------------`);
  for (let i=0;i<arraypuntuacions.length;i++){
    console.log (`${i+1} - NOM: ${arraypuntuacions[i].nom} PUNTUACIÓ: ${arraypuntuacions[i].puntuacio} `)
  }
  console.log (`✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺✺`);
}

let reiniciquestions = () =>{
  for (i=0;i<questions.length;i++){
    questions[i].status=false;
  }
}


let pasapalabra = () =>{
  demananom();

  generapreguntes();
  preguntes();
  console.clear();
  console.log('\n');
  if (aux==27 || fitemps==true){
    console.log (`${nomusuari.toUpperCase()}, HAS ENCERTAT ${contadorencerts} PARAULES I N'HAS FALLAT ${contadorfallos}!\n\nFELICITATS, ENTRES AL RANKING.`);  
  }else{
    console.log (`${nomusuari.toUpperCase()}, HAS ENCERTAT ${contadorencerts} PARAULES I N'HAS FALLAT ${contadorfallos}!\n\nAL NO HAVER ACABAT EL JOC NO ENTRES AL RANKING!`);
  }
  reiniciquestions();
  mostraranking();
  sortirprograma =confirm('VOLS TORNAR A JUGAR?\n- NO (prem cancelar)\n- SI (prem acceptar)');
}

do{
 pasapalabra();
}while(sortirprograma && end==false)
