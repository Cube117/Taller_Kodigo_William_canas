/*

3. Lanzar la pregunta 1 con alternativas, el usuario responde, luego se muestra la pregunta
2 y luego la 3.
4. Mostrar una pantalla de resultados (respuestas correctas) y dos botones de volver a jugar:
• Jugar con preguntas de tipo A (Por ejemplo: sobre comida)
• Jugar con preguntas de tipo B (Por ejemplo: sobre cervezas)

*/
//variables
let questionsAnswers = 0;
let userName = "";//nombre de usuario.
let triviaName = "Trivia Kiwi 3.0";//nombre de la trivia.
const temas = ["Computacion", "Video_Juegos"];
//indicaciones 
const indicationsT = ["Antes de empezar te recomendamos leer detenidamente las siguientes indicaciones:", "No olvides contestar cuidadosamente antes de darle click al botón siguiente, No hay vuelta atras!!"];
//pasos para jugar
const instructionsT = ["Ingresa tu nombre/apodo y le das click al botón siguiente.(si dejas el campo vacio, jugaras como usuario anonimo)", "Seleccina la tematica de las preguntas de la trivia.", "¡Empieza a Jugar!", "Selecciona la respuesta que consideres correcta.", "Dale click al botón siguiente para avanzar a la siguiente pregunta.", "Una vez termines de responder la trivia, espera los resultados.", "Necesitas responder correctamente un minimo de 3 preguntas para ganar la trivia"];
//array de pregunta con sus alternativas a
const questionA1 = ["¿Cuál tipo de unidad de almacenamiento es más rápida?", [["HDD.", "0"], ["SSD.", "1"], ["USB.", "0"], ["Micro SD.", "0"]]];
const questionA2 = ["Conjunto de los componentes físicos en un ordenador.", [["Software.", "0"], ["Las dos son ciertas.", "0"], ["Hardware.", "1"], ["Las dos son falsas.", "0"]]];
const questionA3 = ["Componente encargado de procesar los datos de video recibidos desde el microprocesador y enviarlos al monitor.", [["Tarjeta de video.", "1"], ["Tarjeta madre.", "0"], ["Chihuahua.", "0"], ["Almacenamiento de Video.", "0"]]];
const questionA4 = ["¿Cuál de estos programas NO pertenece a Microsoft Office?", [["Word.", "0"], ["Excel.", "0"], ["PowerPoint.", "0"], ["Grand theft Auto 5.", "1"]]];
const questionA5 = ["¿Cómo se llama el navegador web de Apple?", [["Safari.", "1"], ["Chrome.", "0"], ["Opera.", "0"], ["El poderosísimo Internet Explorer SD.", "0"]]];
//array de preguntas a
const questionsA = [questionA1, questionA2, questionA3, questionA4, questionA5];
//array de pregunta con sus alternativas a
const questionB1 = ["Primer videojuego de la Historia", [["Pacman.", "0"], ["Space invaders.", "0"], ["Block brakers.", "0"], ["Pong.", "1"]]];
const questionB2 = ["Primer Nombre de Mario (mascota de Nintendo) en su debut.", [["PipeMan.", "0"], ["JumpMan.", "1"], ["Mario Bros.", "0"], ["DunkMan.", "0"]]];
const questionB3 = ["¿Qué compañía salvo a los videojuegos de morir?", [["Sega.", "0"], ["Atari.", "0"], ["Nintendo.", "1"], ["Sony.", "0"]]];
const questionB4 = ["Videojuego mas vendido de todos los tiempos.", [["Minecraft.", "1"], ["The wicher 3.", "0"], ["Grand theft Auto 5.", "0"], ["Buscaminas.", "0"]]];
const questionB5 = ["Principal villano de “Zelda: Ocarina Of time”.", [["Ganondorf.", "1"], ["Princesa Zelda.", "0"], ["Link.", "0"], ["Gallina Cuco.", "0"]]];
//array de preguntas a
const questionsB = [questionB1, questionB2, questionB3, questionB4, questionB5];


//funciones
function generarInstrucciones(trivia, indi, instru, principal) {

    //creamos una etiqueta h1,que sera el titulo de la trivia.
    let titleTrivia = document.createElement("h1");
    //le agregamos un id a la etiqueta h1
    titleTrivia.id = "titleTrivia";
    //le agregamos texto al h1
    titleTrivia.textContent = trivia;
    //agregamos el h1 al div root
    principal.appendChild(titleTrivia);

    //creamos y preparamos el div instrucciones
    let div = document.createElement("div");
    div.id = "instrucciones";
    principal.appendChild(div);

    //creamos y preparamos una etiqueta p para cada indicacion junto a las instrucciones del juego
    let indiSize = indi.length;
    for (let i = 0; i < indiSize; i++) {
        let pIndicaciones = document.createElement("p");
        pIndicaciones.textContent = indi[i];
        div.appendChild(pIndicaciones);
        if (i === 0) {
            let ol = document.createElement("ol");
            div.appendChild(ol);
            let instruSize = instru.length;
            for (let j = 0; j < instruSize; j++) {
                let stepUser = document.createElement("li");
                stepUser.textContent = instru[j];
                ol.appendChild(stepUser);
            }
        }
    }

    //creamos el formulario para recibir el nombre del usuario
    let formUser = document.createElement("form");
    let pForm = document.createElement("p");
    pForm.textContent = "Digita tu nombre o apodo:";
    let labelUser = document.createElement("label");
    labelUser.htmlFor = "nNombre";
    labelUser.textContent = "Nombre/Apodo: ";
    let input = document.createElement("input");
    input.type = "text";
    input.id = "nNombre";
    let buttonUser = document.createElement("button");
    buttonUser.type = "submit";
    buttonUser.classList.add("siguiente");
    buttonUser.textContent = "Siguiente";
    div.appendChild(formUser);
    formUser.appendChild(pForm);
    formUser.appendChild(labelUser);
    formUser.appendChild(input);
    formUser.appendChild(buttonUser);
}

function generarOpciones(temas, userName, divPadre) {

    //referenciamos el menu anterior
    let divBefore = document.getElementById("instrucciones");
    //eliminamos el menu anterior.       
    divBefore.parentNode.removeChild(divBefore);

    //creamos el siguiente menu (div)
    let divOptions = document.createElement("div");
    divOptions.id = "opciones";
    divPadre.appendChild(divOptions);
    let h2Options = document.createElement("h2");
    h2Options.textContent = "Hola " + userName + " selecciona tu tematica favorita:"; ''
    divOptions.appendChild(h2Options);
    let formOpciones = document.createElement("form");
    formOpciones.id = "option";
    divOptions.appendChild(formOpciones);
    let temasSize = temas.length;
    for (let i = 0; i < temasSize; i++) {
        let button = document.createElement("button");
        button.type = "submit";
        button.classList.add("opcion");
        button.value = "op" + i;
        button.textContent = temas[i];
        formOpciones.appendChild(button);
    }
}

function generarTrivia(questions, principal) {
    //referenciamos el menu anterior
    let divBefore = document.getElementById("opciones");
    //eliminamos el menu anterior.       
    divBefore.parentNode.removeChild(divBefore);

    //creamos el siguiente menu (div)
    let div = document.createElement("div");
    div.id = "Trivia";
    principal.appendChild(div);
    let form = document.createElement("form");
    form.id = "preguntas";
    div.appendChild(form);
    let questionsSize = questions.length;
    for (let i = 0; i < questionsSize; i++) {
        let divP = document.createElement("div");
        divP.id = "pregunta" + i;
        (i === 0) ? divP.classList.add("show") : divP.classList.add("hide");
        form.appendChild(divP);
        let pPregunta = document.createElement("p");
        pPregunta.textContent = questions[i][0];
        pPregunta.id = "preguntaTxt" + i;
        divP.appendChild(pPregunta);
        let ulPregunta = document.createElement("ul");
        ulPregunta.classList.add("alternativa" + i);
        divP.appendChild(ulPregunta);
        let alternativeSize = questions[i][1].length;
        for (let j = 0; j < alternativeSize; j++) {
            let li = document.createElement("li");
            let input = document.createElement("input");
            input.type = "radio";
            input.id = "al" + j + i;
            input.name = "alternativa" + i;
            input.value = questions[i][1][j][1];
            let label = document.createElement("label");
            label.for = "al" + j + i;
            label.textContent = questions[i][1][j][0];
            li.appendChild(input);
            li.appendChild(label);
            ulPregunta.appendChild(li);
        }
    }
    let button = document.createElement("button");
    button.type = "submit";
    button.id = "siguientePregunta";
    button.textContent = "Siguiente Pregunta";
    form.appendChild(button);
}


//calificar trivia
function calificarTrivia(p, label, alternativas) {

    //referenciamos el menu anterior
    let divBefore = document.getElementById("Trivia");
    //escondemos el menu anterior.       
    divBefore.classList.add("hide");
    let preguntasBuenas = 0;

    //let trRespuestas = document.createElement("tr");

    let alternativasSize = alternativas.length;
    for (let j = 0; j < alternativasSize; j++) {
        let alterSize = alternativas[0].length;
        for (let i = 0; i < alterSize; i++) {
            if (alternativas[j][i].checked) {
                if (alternativas[j][i].value === "1") {
                    preguntasBuenas++;
                    /*let tdRespuestas = document.createElement("td");
                    tdRespuestas.textContent=p[j].textContent;
                    trRespuestas.appendChild(tdRespuestas);
                    alternativas[j][i].id;*/

                }

                break;
            }
        }
    }
    let estado = "";
    if (preguntasBuenas >= 3) {
        estado = "Felicidades, pasaste la trivia";
    } else {
        estado = "Lo sentimos, no tuviste la nota minima";
    }


    //creando la tabla de resultados
    let div = document.createElement("div");
    div.id = "resultados";
    principal.appendChild(div);
    let table = document.createElement("table");
    table.id = "usuario";
    div.appendChild(table);
    let thead = document.createElement("thead");
    table.appendChild(thead);
    let tr = document.createElement("tr");
    thead.appendChild(tr);
    let th = document.createElement("th");
    th.classList.add("titulo");
    th.textContent = "Nombre del participante";
    tr.appendChild(th);
    let th1 = document.createElement("th");
    th1.classList.add("titulo");
    th1.textContent = "Nota";
    tr.appendChild(th1);

    let th11 = document.createElement("th");
    th11.classList.add("titulo");
    th11.textContent = "Respuestas Correctas";
    tr.appendChild(th11);

    let th2 = document.createElement("th");
    th2.classList.add("titulo");
    th2.textContent = "Estado";
    tr.appendChild(th2);
    let tbody = document.createElement("tbody");
    table.appendChild(tbody);
    let tr2 = document.createElement("tr");
    tbody.appendChild(tr2);
    let td1 = document.createElement("td");
    td1.textContent = userName;
    tr2.appendChild(td1);
    let td2 = document.createElement("td");
    td2.textContent = (preguntasBuenas / alternativasSize) * 10;
    tr2.appendChild(td2);
    
    
    let td22 = document.createElement("td");
    td22.textContent = preguntasBuenas;
    tr2.appendChild(td22);

    let td3 = document.createElement("td");
    td3.textContent = estado;
    tr2.appendChild(td3);

    //respuesta
    /*let table1 = document.createElement("table");
    table1.id="respuesta";
    div.appendChild(table1);
    let thead1 = document.createElement("thead");
    table1.appendChild(thead1);
    let tr3 = document.createElement("tr");
    thead1.appendChild(tr3);
    let th3 = document.createElement("th");
    th3.classList.add("titulo");
    th3.textContent = "Preguntas correctas";
    tr3.appendChild(th3);


    let th4 = document.createElement("th");
    th4.classList.add("titulo");
    th4.textContent = "tu respuesta";
    tr3.appendChild(th4);

    
    let tbody2 = document.createElement("tbody");
    tbody2.appendChild(trRespuestas);
    table1.appendChild(tbody2);*/




}



//Ejecución.
//referencia al div root
let principal = document.getElementById("root");

//generamos el primer menu
generarInstrucciones(triviaName, indicationsT, instructionsT, principal);

document.getElementsByClassName("siguiente")[0].addEventListener("click", function (e) {
    e.preventDefault();
    userName = document.getElementById("nNombre").value;
    if (userName.trim() !== "") {
        generarOpciones(temas, userName, principal);
    } else {
        userName = "Usuario Anonimo";
        generarOpciones(temas, userName, principal);
    }

    btn = document.getElementsByClassName("opcion");

    btn[0].addEventListener("click", function (e) {
        e.preventDefault();
        generarTrivia(questionsA, principal);
        document.getElementById("siguientePregunta").addEventListener("click", function (e) {
            e.preventDefault();
            if (questionsAnswers < 4) {
                document.getElementById("pregunta" + questionsAnswers).classList.replace("show", "hide");
                questionsAnswers++;
                document.getElementById("pregunta" + questionsAnswers).classList.replace("hide", "show");
            } else {
                let rad = [];
                for (let i = 0; i < 5; i++) {
                    rad[i] = document.getElementsByName('alternativa' + i);
                }
                let label = document.getElementsByTagName("label");
                let p = document.getElementsByTagName("p");
                calificarTrivia(p, label, rad);
            }
        })
    });


    btn[1].addEventListener("click", function (e) {
        e.preventDefault();
        generarTrivia(questionsB, principal);
        document.getElementById("siguientePregunta").addEventListener("click", function (e) {
            e.preventDefault();
            if (questionsAnswers < 4) {
                document.getElementById("pregunta" + questionsAnswers).classList.replace("show", "hide");
                questionsAnswers++;
                document.getElementById("pregunta" + questionsAnswers).classList.replace("hide", "show");
            } else {
                let rad = [];
                for (let i = 0; i < 5; i++) {
                    rad[i] = document.getElementsByName('alternativa' + i);
                }
                let label = document.getElementsByTagName("label");
                let p = document.getElementsByTagName("p");
                calificarTrivia(p, label, rad);
            }
        })
    });

});









