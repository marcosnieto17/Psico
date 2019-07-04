angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('psicopedagogA.inicio', {
    url: '/page1',
    views: {
      'side-menu21': {
        templateUrl: 'templates/inicio.html',
        controller: 'inicioCtrl'
      }
    }
  })

  .state('psicopedagogA.planDeEstudios', {
    url: '/page2',
    views: {
      'side-menu21': {
        templateUrl: 'templates/planDeEstudios.html',
        controller: 'planDeEstudiosCtrl'
      }
    }
  })

  .state('psicopedagogA.perfilDelGraduado', {
    url: '/page6',
    views: {
      'side-menu21': {
        templateUrl: 'templates/perfilDelGraduado.html',
        controller: 'perfilDelGraduadoCtrl'
      }
    }
  })

  .state('psicopedagogA.alcanceDelTTulo', {
    url: '/page7',
    views: {
      'side-menu21': {
        templateUrl: 'templates/alcanceDelTTulo.html',
        controller: 'alcanceDelTTuloCtrl'
      }
    }
  })

  .state('psicopedagogA.horarios', {
    url: '/page3',
    views: {
      'side-menu21': {
        templateUrl: 'templates/horarios.html',
        controller: 'horariosCtrl'
      }
    }
  })

  .state('psicopedagogA', {
    url: '/side-menu21',
    templateUrl: 'templates/psicopedagogA.html',
    controller: 'psicopedagogACtrl'
  })

  .state('psicopedagogA.bibliotecaDigital', {
    url: '/page4',
    views: {
      'side-menu21': {
        templateUrl: 'templates/bibliotecaDigital.html',
        controller: 'bibliotecaDigitalCtrl'
      }
    }
  })

  .state('psicopedagogA.1AO', {
    url: '/page8',
    views: {
      'side-menu21': {
        templateUrl: 'templates/1AO.html',
        controller: '1AOCtrl'
      }
    }
  })

  .state('psicopedagogA.programasDeCTedra', {
    url: '/page12',
    views: {
      'side-menu21': {
        templateUrl: 'templates/programasDeCTedra.html',
        controller: 'programasDeCTedraCtrl'
      }
    }
  })

  .state('psicopedagogA.2AO', {
    url: '/page9',
    views: {
      'side-menu21': {
        templateUrl: 'templates/2AO.html',
        controller: '2AOCtrl'
      }
    }
  })

  .state('psicopedagogA.3AO', {
    url: '/page10',
    views: {
      'side-menu21': {
        templateUrl: 'templates/3AO.html',
        controller: '3AOCtrl'
      }
    }
  })

  .state('psicopedagogA.4AO', {
    url: '/page42',
    views: {
      'side-menu21': {
        templateUrl: 'templates/4AO.html',
        controller: '4AOCtrl'
      }
    }
  })

  .state('psicopedagogA.5AO', {
    url: '/page43',
    views: {
      'side-menu21': {
        templateUrl: 'templates/5AO.html',
        controller: '5AOCtrl'
      }
    }
  })

  .state('psicopedagogA.acercaDeLaApp', {
    url: '/page5',
    views: {
      'side-menu21': {
        templateUrl: 'templates/acercaDeLaApp.html',
        controller: 'acercaDeLaAppCtrl'
      }
    }
  })

  .state('psicopedagogA.calendarioAcadMico', {
    url: '/page11',
    views: {
      'side-menu21': {
        templateUrl: 'templates/calendarioAcadMico.html',
        controller: 'calendarioAcadMicoCtrl'
      }
    }
  })

  .state('psicopedagogA.introducciNALaPsicopedagogA', {
    url: '/page13',
    views: {
      'side-menu21': {
        templateUrl: 'templates/introducciNALaPsicopedagogA.html',
        controller: 'introducciNALaPsicopedagogACtrl'
      }
    }
  })

  .state('psicopedagogA.introALosEstudiosDeLaVidaUniversitaria', {
    url: '/page14',
    views: {
      'side-menu21': {
        templateUrl: 'templates/introALosEstudiosDeLaVidaUniversitaria.html',
        controller: 'introALosEstudiosDeLaVidaUniversitariaCtrl'
      }
    }
  })

  .state('psicopedagogA.pedagogA', {
    url: '/page15',
    views: {
      'side-menu21': {
        templateUrl: 'templates/pedagogA.html',
        controller: 'pedagogACtrl'
      }
    }
  })

  .state('psicopedagogA.psicologA', {
    url: '/page16',
    views: {
      'side-menu21': {
        templateUrl: 'templates/psicologA.html',
        controller: 'psicologACtrl'
      }
    }
  })

  .state('psicopedagogA.filosofA', {
    url: '/page17',
    views: {
      'side-menu21': {
        templateUrl: 'templates/filosofA.html',
        controller: 'filosofACtrl'
      }
    }
  })

  .state('psicopedagogA.neurobiologA', {
    url: '/page18',
    views: {
      'side-menu21': {
        templateUrl: 'templates/neurobiologA.html',
        controller: 'neurobiologACtrl'
      }
    }
  })

  .state('psicopedagogA.epistemologA', {
    url: '/page19',
    views: {
      'side-menu21': {
        templateUrl: 'templates/epistemologA.html',
        controller: 'epistemologACtrl'
      }
    }
  })

  .state('psicopedagogA.psicologADelDesarrolloI', {
    url: '/page20',
    views: {
      'side-menu21': {
        templateUrl: 'templates/psicologADelDesarrolloI.html',
        controller: 'psicologADelDesarrolloICtrl'
      }
    }
  })

  .state('psicopedagogA.expresiNOralYEscrita', {
    url: '/page21',
    views: {
      'side-menu21': {
        templateUrl: 'templates/expresiNOralYEscrita.html',
        controller: 'expresiNOralYEscritaCtrl'
      }
    }
  })

  .state('psicopedagogA.psicopedagogA2', {
    url: '/page22',
    views: {
      'side-menu21': {
        templateUrl: 'templates/psicopedagogA2.html',
        controller: 'psicopedagogA2Ctrl'
      }
    }
  })

  .state('psicopedagogA.antropologASocioCultural', {
    url: '/page23',
    views: {
      'side-menu21': {
        templateUrl: 'templates/antropologASocioCultural.html',
        controller: 'antropologASocioCulturalCtrl'
      }
    }
  })

  .state('psicopedagogA.historiaDeLaEducaciN', {
    url: '/page24',
    views: {
      'side-menu21': {
        templateUrl: 'templates/historiaDeLaEducaciN.html',
        controller: 'historiaDeLaEducaciNCtrl'
      }
    }
  })

  .state('psicopedagogA.psicologAGenTica', {
    url: '/page25',
    views: {
      'side-menu21': {
        templateUrl: 'templates/psicologAGenTica.html',
        controller: 'psicologAGenTicaCtrl'
      }
    }
  })

  .state('psicopedagogA.psicoanLisis', {
    url: '/page26',
    views: {
      'side-menu21': {
        templateUrl: 'templates/psicoanLisis.html',
        controller: 'psicoanLisisCtrl'
      }
    }
  })

  .state('psicopedagogA.psicologASocial', {
    url: '/page27',
    views: {
      'side-menu21': {
        templateUrl: 'templates/psicologASocial.html',
        controller: 'psicologASocialCtrl'
      }
    }
  })

  .state('psicopedagogA.psicologADelDesarrolloII', {
    url: '/page28',
    views: {
      'side-menu21': {
        templateUrl: 'templates/psicologADelDesarrolloII.html',
        controller: 'psicologADelDesarrolloIICtrl'
      }
    }
  })

  .state('psicopedagogA.informTica', {
    url: '/page29',
    views: {
      'side-menu21': {
        templateUrl: 'templates/informTica.html',
        controller: 'informTicaCtrl'
      }
    }
  })

  .state('psicopedagogA.intervenciNPsicopedagGica', {
    url: '/page30',
    views: {
      'side-menu21': {
        templateUrl: 'templates/intervenciNPsicopedagGica.html',
        controller: 'intervenciNPsicopedagGicaCtrl'
      }
    }
  })

  .state('psicopedagogA.diagnosticoPsicopedagGico', {
    url: '/page31',
    views: {
      'side-menu21': {
        templateUrl: 'templates/diagnosticoPsicopedagGico.html',
        controller: 'diagnosticoPsicopedagGicoCtrl'
      }
    }
  })

  .state('psicopedagogA.psicologADeLaEducaciN', {
    url: '/page32',
    views: {
      'side-menu21': {
        templateUrl: 'templates/psicologADeLaEducaciN.html',
        controller: 'psicologADeLaEducaciNCtrl'
      }
    }
  })

  .state('psicopedagogA.sociologADeLaEducaciN', {
    url: '/page33',
    views: {
      'side-menu21': {
        templateUrl: 'templates/sociologADeLaEducaciN.html',
        controller: 'sociologADeLaEducaciNCtrl'
      }
    }
  })

  .state('psicopedagogA.inglS', {
    url: '/page34',
    views: {
      'side-menu21': {
        templateUrl: 'templates/inglS.html',
        controller: 'inglSCtrl'
      }
    }
  })

  .state('estadSticaAplicada', {
    url: '/page35',
    templateUrl: 'templates/estadSticaAplicada.html',
    controller: 'estadSticaAplicadaCtrl'
  })

  .state('psicopedagogA.didCticaGeneral', {
    url: '/page36',
    views: {
      'side-menu21': {
        templateUrl: 'templates/didCticaGeneral.html',
        controller: 'didCticaGeneralCtrl'
      }
    }
  })

  .state('psicopedagogA.seminarioLaInvestigaciNPsicopedagGicaEnContextosEscolaresDeRiesgo', {
    url: '/page44',
    views: {
      'side-menu21': {
        templateUrl: 'templates/seminarioLaInvestigaciNPsicopedagGicaEnContextosEscolaresDeRiesgo.html',
        controller: 'seminarioLaInvestigaciNPsicopedagGicaEnContextosEscolaresDeRiesgoCtrl'
      }
    }
  })

  .state('psicopedagogA.psicopatologA', {
    url: '/page45',
    views: {
      'side-menu21': {
        templateUrl: 'templates/psicopatologA.html',
        controller: 'psicopatologACtrl'
      }
    }
  })

  .state('psicopedagogA.psicopedagogAInstitucional', {
    url: '/page46',
    views: {
      'side-menu21': {
        templateUrl: 'templates/psicopedagogAInstitucional.html',
        controller: 'psicopedagogAInstitucionalCtrl'
      }
    }
  })

  .state('psicopedagogA.educaciNEspecial', {
    url: '/page47',
    views: {
      'side-menu21': {
        templateUrl: 'templates/educaciNEspecial.html',
        controller: 'educaciNEspecialCtrl'
      }
    }
  })

  .state('psicopedagogA.didCticaI', {
    url: '/page48',
    views: {
      'side-menu21': {
        templateUrl: 'templates/didCticaI.html',
        controller: 'didCticaICtrl'
      }
    }
  })

  .state('psicopedagogA.tratamientoPsicopedagGico', {
    url: '/page49',
    views: {
      'side-menu21': {
        templateUrl: 'templates/tratamientoPsicopedagGico.html',
        controller: 'tratamientoPsicopedagGicoCtrl'
      }
    }
  })

  .state('psicopedagogA.orientaciNEducacional', {
    url: '/page50',
    views: {
      'side-menu21': {
        templateUrl: 'templates/orientaciNEducacional.html',
        controller: 'orientaciNEducacionalCtrl'
      }
    }
  })

  .state('psicopedagogA.didCticaII', {
    url: '/page51',
    views: {
      'side-menu21': {
        templateUrl: 'templates/didCticaII.html',
        controller: 'didCticaIICtrl'
      }
    }
  })

  .state('psicopedagogA.seminarioAbordajePsicopedagGicoEnElCampoDeLaEducaciNEspecialAdaptacionesCurricularesIntegraciNEscolar', {
    url: '/page52',
    views: {
      'side-menu21': {
        templateUrl: 'templates/seminarioAbordajePsicopedagGicoEnElCampoDeLaEducaciNEspecialAdaptacionesCurricularesIntegraciNEscolar.html',
        controller: 'seminarioAbordajePsicopedagGicoEnElCampoDeLaEducaciNEspecialAdaptacionesCurricularesIntegraciNEscolarCtrl'
      }
    }
  })

  .state('prCticaClNicaPsicopedagGica', {
    url: '/page53',
    templateUrl: 'templates/prCticaClNicaPsicopedagGica.html',
    controller: 'prCticaClNicaPsicopedagGicaCtrl'
  })

  .state('psicopedagogA.prCticaPsicopedagGicaEnInstitucionesEducativas', {
    url: '/page54',
    views: {
      'side-menu21': {
        templateUrl: 'templates/prCticaPsicopedagGicaEnInstitucionesEducativas.html',
        controller: 'prCticaPsicopedagGicaEnInstitucionesEducativasCtrl'
      }
    }
  })

  .state('psicopedagogA.metodologADeLaInvestigaciN', {
    url: '/page55',
    views: {
      'side-menu21': {
        templateUrl: 'templates/metodologADeLaInvestigaciN.html',
        controller: 'metodologADeLaInvestigaciNCtrl'
      }
    }
  })

  .state('psicopedagogA.TicaYDeontologA', {
    url: '/page56',
    views: {
      'side-menu21': {
        templateUrl: 'templates/TicaYDeontologA.html',
        controller: 'TicaYDeontologACtrl'
      }
    }
  })

  .state('psicopedagogA.polTicaYLegislaciNEnEducaciN', {
    url: '/page57',
    views: {
      'side-menu21': {
        templateUrl: 'templates/polTicaYLegislaciNEnEducaciN.html',
        controller: 'polTicaYLegislaciNEnEducaciNCtrl'
      }
    }
  })

  .state('psicopedagogA.currCulo', {
    url: '/page58',
    views: {
      'side-menu21': {
        templateUrl: 'templates/currCulo.html',
        controller: 'currCuloCtrl'
      }
    }
  })

  .state('psicopedagogA.orientaciNVocacional', {
    url: '/page59',
    views: {
      'side-menu21': {
        templateUrl: 'templates/orientaciNVocacional.html',
        controller: 'orientaciNVocacionalCtrl'
      }
    }
  })

  .state('psicopedagogA.formaciNDeEmprendedores', {
    url: '/page60',
    views: {
      'side-menu21': {
        templateUrl: 'templates/formaciNDeEmprendedores.html',
        controller: 'formaciNDeEmprendedoresCtrl'
      }
    }
  })

  .state('psicopedagogA.horarioIngreso', {
    url: '/page37',
    views: {
      'side-menu21': {
        templateUrl: 'templates/horarioIngreso.html',
        controller: 'horarioIngresoCtrl'
      }
    }
  })

  .state('psicopedagogA.horario1Cuatrimestre', {
    url: '/page38',
    views: {
      'side-menu21': {
        templateUrl: 'templates/horario1Cuatrimestre.html',
        controller: 'horario1CuatrimestreCtrl'
      }
    }
  })

  .state('psicopedagogA.horario2Cuatrimestre', {
    url: '/page39',
    views: {
      'side-menu21': {
        templateUrl: 'templates/horario2Cuatrimestre.html',
        controller: 'horario2CuatrimestreCtrl'
      }
    }
  })

  .state('psicopedagogA.gUAUNLaR', {
    url: '/page40',
    views: {
      'side-menu21': {
        templateUrl: 'templates/gUAUNLaR.html',
        controller: 'gUAUNLaRCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/side-menu21/page1')


});