/*******************************************/
/*             PERSONA.JS                  */
/*     Datos para PERSONA TEMPLATE         */   
/*          [DIU] UX Toolkit               */                        
/*          ver 1.0, 2019                  */
/*******************************************/
    
/****  README:       */
/****  Modifica los datos para las Personas      */
/****  Las imagenes para  'Photo'  están en carpeta ./photos **/
/****  Si se usan nuevas imágenes se deben añadir a esa carpeta **/
/****  Los valores de rating están entre 1..5 **/
/****  recursos de imágenes:  https://www.vectorstock.com/royalty-free-vectors/vectors-by_zdeneksasek ***/



angular.module("angular", [])
	.controller("controller", ["$scope", function($scope) { 
		
		$scope.PersonaIndex = 0;
		$scope.Personas = [
			{		
                
                /*************************************/
                /**** PRIMERA PERSONA          *******/
                /*** Cambiar datos             *******/
                /*************************************/
                
                
				Id: 0,
				Name: "Carlos García",
				Photo: "man.png",
				Quote: "No dejes para mañana lo que puedas hacer hoy",
				Age: 27,
				Occupation: "Funcionario",
				Family: "Padres y una hermana",
				Location: "Madrid",
				Character: "Responsable, le gusta aprovechar el tiempo",
				PersonalityTraits: [
					{ Name: "Introvertido/reservado Vs  Extrov/activo ", Value: 2 },
					{ Name: "Realista/práctico  Vs    Intuición/imaginativo", Value: 2 },
					{ Name: "Racional/analitico  Vs   Emocional/impulsivo", Value: 5 },
					{ Name: "Flemático/apático  Vs   Colérico/visceral", Value: 3 }
				], 
				Goals: ["Aprobar una nueva promoción y ascender en su oficio","Encontrar hobbies que le apasionen"],
				Frustrations: ["Se acaba de mudar a Madrid por trabajo y anda un poco perdido","Echa de menos a sus familiares"],
				Bio: "Cuando era joven a carlos le gustaba realizar actividades de ocio con sus amistades de siempre. Carlos estudió ADE en la UGR; una vez terminada la carrera comenzó a prepararse unas oposiciones mientras trabajaba de camarero en un restaurante de su zona para ahorrar.Aprobó las oposiciones de funcionario y le dierón una plaza en Madrid, por lo que se tuvo que ir el solo a vivr a Madrid en un piso de alquilado. Por las mañanas trabaja y por las tardes aprovecha para ir conociendo su nueva ciudad. ",
				Tech: [
					{ Name: "TIC/Internet", Value: 2 },
					{ Name: "Movil", Value: 4 },
					{ Name: "RRSS", Value: 2 },
					{ Name: "Software", Value: 3 }
					
				], 
                Contextos: "Esta centrado en su trabajo y quiere seguir avanzando profesionalemte, además aunque él está contento con su nueva vida está un poco extresado por eso aún busca alguna actividad que le ocupe tiempo para desconectar y así conocer a gente que comparta las mismas aficiones que él. ",  
				PreferredChannels: [
					{ Name: "Publicidad Tradicional", Value: 1 },
					{ Name: "Online & Social Media", Value: 4 },
					{ Name: "Recomendaciones & sugerencias", Value: 1 },
					{ Name: "Persona confianza (amigos, boca a boca)", Value: 5 }
				]
			},
			{	
                
                /*************************************/
                /**** SEGUNDA PERSONA          *******/
                /*** Cambiar datos             *******/
                /*************************************/
                
                
				Id: 1,
				Name: "María Angustias Rodríguez",
				Photo: "woman.png",
				Quote: "De las dificultades nacen milagros",
				Age: 65,
				Occupation: "Jubilada",
				Family: "Casada con 2 hijos",
				Location: "Sevilla",
				Character: "Simpática con todo el mundo",
				PersonalityTraits: [
					{ Name: "Introvertido/reservado Vs  Extrov/activo ", Value: 5 },
					{ Name: "Realista/práctico  Vs    Intuición/imaginativo", Value: 2 },
					{ Name: "Racional/analitico  Vs   Emocional/impulsivo", Value: 4 },
					{ Name: "Flemático/apático  Vs   Colérico/visceral", Value: 3 }
				], 
				Goals: ["Que a sus hijos les vaya bien en su vida", "Aprender idiomas para viajar", "Disfrutar de la jubilación como una nueva etapa de su vida"],
				Frustrations: ["No haber salido de Europa", "Su marido aún sigue trabajando", "Al tener que trabajar y cuidar de su familia, ha tenido poco tiempo para ella"],
				Bio: "Vivió y creció en un pequeño pueblo de Sevilla, muy joven empezó a trabajar de recepcionista en una clínica dental de Sevilla, le fue bien debido a su simpatía con los clientes. Se casó con un cliente que solía vistar la clínica y tuvo 2 hijos de 1 año de diferencia que ahora están estudiando sus respectivas carreras. Trabajaba por las tardes y por las mañanas se encargaba de cuidar de sus hijos, preparar la comida y ordenar la casa. Se jubió el año pasado.",
				Tech: [
					{ Name: "TIC/Internet", Value: 1 },
					{ Name: "Mobile", Value: 2 },
					{ Name: "RRSS", Value: 1 },
					{ Name: "Software", Value: 1 }
					
				], 
                Contextos:   "Ahora que esta jubilada y ya no tiene que ocuparse tanto de su familia quiere conocer mundo y tener tiempo para ella probando nuevas experienccias" ,
				PreferredChannels: [
					{ Name: "Publicidad Tradicional (Ads)", Value: 5 },
					{ Name: "Online & Social Media", Value: 1 },
					{ Name: "Recomendaciones & sugerencias", Value: 3 },
					{ Name: "Persona confianza (amigos, boca a boca)", Value: 5 }
				]
			}
		];
		$scope.model = $scope.Personas[0];

	}])