/*******************************************/
/*             JOURNEY.JS                  */
/*     Datos para USER JOURNEY MAP         */   
/*          [DIU] UX Toolkit               */                        
/*          ver 1.0, 2019                  */
/*******************************************/
    
/****  README:       */
/****  Modifica los datos para los Journey Map (uno para cada Persona)  */
/****  Usa los 6 pasos y sigue las instrucciones */   
/****  Las imagenes para  'Photo', 'feelX', 'imaX' están en carpeta ./photos **/
/****  Si se usan nuevas imágenes se deben añadir a esa carpeta **/
/****  Los valores de rating están entre 1..5 **/
/****  recursos de imágenes:  https://www.vectorstock.com/royalty-free-vectors/vectors-by_zdeneksasek ***/




angular.module("angular", [])
	.controller("controller", ["$scope", function($scope) { 
		
		$scope.JourneyIndex = 0;
        
        $scope.Journeys = [
			{		
                /*************************************/
                /**** PRIMER USER JOURNEY MAP  *******/
                /*** Cambiar datos             *******/
                /*************************************/
                
				Id: 0,
				Name: "Carlos García",
                Photo: "man.png",
    
                /*** PASO #1: INSPIRACION ***/ 
                goal1: "Quiere conocer su nueva ciudad realizando actividades por la zona",
                touch1: "agenda",
                feel1: "4",
                con1: "Tiene toda la tarde libre para hacer lo que le apetezca",
                ima1: "cartoon-planning.png",
				
                /*** PASO #2: DECICION ***/ 
                goal2: "busca en internet lugares para visitar en Madrid",
                touch2: "ordenador",
                feel2: "2",
                con2: "Encuentra demasiadas páginas y al ser nuevo en la ciudad no sabe bien cual escoger",
                ima2: "cartoon-PCangry.png",
                
                /*** PASO #3: ACTUA ***/ 
                
                goal3: "Decide empezar con algo más tranquilo como es el turismo, busca zonas turisticas por Madrid",
                touch3: "móvil (google maps)",
                feel3: "3",
                con3: "No sabe que linea de metro coger ni como moverse por la ciudad",
                ima3: "cartoon-phone.png",
                
                /*** PASO #4: OBSERVA ***/ 
                
                goal4: "Encuentra una página donde se muestran diferentes eventos y lugares para vistar en grandes ciudades",
                touch4: "ordenador",
                feel4: "5",
                con4: "Busca opciones por Madrid que le intersen y estén cerca de casa",
                ima4: "cartoon-PCtyping.png",
                
                 /*** PASO #5: ANALIZA ***/ 
                
                goal5: "Se encuentra multiples opciones que encajan en sus preferencias",
                touch5: "ordenador",
                feel5: "4",
                con5: "Escoge una al azar ya que no le importa lo que hacer, simplemente quiere conocer la zona",
                ima5: "cartoon-thinking.png",
                
                
                /*** PASO #6: CONCLUSION ***/ 
                
                goal6: "Ya ha decidido su plan para esta tarde",
                touch6: "Móvil",
                feel6: "3",
                con6: "Apunta los datos en su teléfono de lo que va a visitar para no perderse",
                ima6: "cartoon-phone-street.png",
                
			},
			{	
                 /*************************************/
                /**** SEGUNDO USER JOURNEY MAP *******/
                /***      Cambiar datos        *******/
                /*************************************/
                
				Id: 1,
				Name: "María Angustias Rodríguez ",
                Photo: "woman.png",
                
				 /*** PASO #1: INSPIRACION ***/ 
                goal1: "Quiere realizar cursos/actividades para apender cosas nuevas",
                touch1: "agenda",
                feel1: "5",
                con1: "No tiene muy claro lo que quiere aprender",
                ima1: "cartoon-going.png",
                
                /*** PASO #2: DECICION ***/ 
                goal2: "Decide llamar al ayuntamiento para obtener información sobre cursos",
                touch2: "Móvil(llamada)",
                feel2: "2",
                con2: "No le han aclarado mucho pero le han recomendado una página donde hay eventos y actividades",
                ima2: "cartoon-phoning.png",
                
                /*** PASO #3: ACTUA ***/ 
                
                goal3: "Le pide a su hijo que le ayude a buscar la página porque ella no maneja muy bien los ordenadores",
                touch3: "Ordenador",
                feel3: "2",
                con3: "No se está enterando muy bien de lo que está haciendo su hijo",
                ima3: "cartoon-PCcrying.png",
                
                /*** PASO #4: OBSERVA ***/ 
                
                goal4: "Comienzan a navegar por la página mirando los diferentes cursos y actividades",
                touch4: "Ordenador",
                feel4: "4",
                con4: "El hijo le recomienda un curso de informática que aparece en la página, para que así aprenda a navegar sola",
                ima4: "cartoon-PCtyping.png",
                
                 /*** PASO #5: ANALIZA ***/ 
                
                goal5: "Analiza el curso y las fechas de este",
                touch5: "Ordenador",
                feel5: "4",
                con5: "Le parece una buena idea realizar el curso para poder visitar esta página ella sola más adelante",
                ima5: "cartoon-thinking.png",

                
                /*** PASO #6: CONCLUSION ***/ 
                
                goal6: "Decide asistir al curso y llama a su amiga para que le acompañe.",
                touch6: "Télefono",
                feel6: "5",
                con6: "Su amiga no puede ir, pero ella ira sola encantada.",
                ima6: "cartoon-phone-sitting.png",
                
                
                
			}
		];
        
		$scope.model = $scope.Journeys[0];

	}])



