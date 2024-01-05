import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { Model, SurveyModel } from 'survey-core';
import { SurveyModule } from 'survey-angular-ui';
import { LoggingService } from './loggin.service';
import * as Survey from 'survey-core';
import { initColorPicker } from './color-picker';
import { initChartMusic } from './charts';
import { initChartBook } from './buchChart';
import { initChartLand } from './landChart';
import { TEST_CASES } from './constants';
import { timestamp } from 'rxjs';
import { survey2 } from './Umfrage2';

const surveyJson = {
  title: 'ERINNERBARKEIT VON INFORMATIONSVISUALISIERUNGEN',
  logo: 'https://api.surveyjs.io/private/Surveys/files?name=fde65c11-7c39-49e5-98e1-813931fd51a3',
  logoPosition: 'right',
  pages: [
    { name: 'page0',
    id: 'Page0',
    elements: [
      {
        type: 'html',
        name: 'Einleitung Umfrage',
        html: `<div style="background-color: white; padding-top: 32px; padding-left: 40px; padding-bottom: 40px; padding-right: 40px; box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.15); border-radius: 4px">
        <body>
        <p>
        Sehr geehrte Teilnehmende,
        </p>
        <p>
            mein Name ist <strong>Christine Müller</strong>, und ich studiere im Masterprogramm <strong>Angewandte Informatik mit dem Schwerpunkt Technische Visualistik</strong> an der HTW Dresden. Im Rahmen meiner Abschlussarbeit führe ich die Studie <strong>„Erinnerbarkeit von Informationsvisualisierung“</strong> durch.
        </p>
        <p>
            Diese Umfrage gliedert sich in <strong>zwei Abschnitte</strong>. Der erste Abschnitt, den Sie jetzt bearbeiten, wird etwa <strong>5-10 Minuten</strong> in Anspruch nehmen. Der zweite Abschnitt, der ca. <strong>5 Minuten</strong> dauern wird, findet in zwei Wochen statt. Ich werde Sie dafür erneut kontaktieren. <strong>Ihre Teilnahme an beiden Abschnitten der Umfrage ist wichtig</strong>.
        </p>
        <p>
            Bitte lesen Sie <strong>jede Aufgabenstellung in dieser Umfrage gründlich durch</strong>. Sie werden durch die verschiedenen Aufgaben geleitet, um sicherzustellen, dass alle relevanten Aspekte der Studie abgedeckt werden.
        </p>
        <p>
            Vielen Dank im Voraus für <strong>Ihre Zeit und Ihre aktive Teilnahme</strong>.
        </p>
        <p>
            Mit freundlichen Grüßen,<br>
            <strong>Christine Müller</strong>
        </p>
    </body>
        </div>`
      }
      
    ]
  },
    {
      
      name: 'page1',
      id: 'Page1',
      elements: [
        {
          type: 'html',
          name: 'Datenschutzerklärung',
          html:

        `
        <div style="background-color: white; padding-top: 32px; padding-left: 40px; padding-bottom: 40px; padding-right: 40px; box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.15); border-radius: 4px">
        <p style="font-weight: bold;">
        Sehr geehrte Teilnehmende der Untersuchung,</p>
        <p>hiermit erhalten Sie Informationen über Ihre Rechte und Pflichten als Versuchsperson sowie meiner Verpflichtungen als Versuchsleitung:</p>
        <br />
        <p style="font-weight: bold;">1. Freiwilligkeit der Teilnahme</p>
        <p>Sie haben sich freiwillig entschieden, an dieser Untersuchung teilzunehmen. 
        Wir danken Ihnen für Ihre Bereitschaft, mit Ihrer Mitarbeit zum Gelingen meiner Untersuchung beizutragen.</p>
        <br />
        <p style="font-weight: bold;">2. Schutz vor Schädigung und Belastung</p>
        <p>Wir versichern, dass wir uns bemühen, Ihnen in diesem Experiment keine seelischen oder körperlichen Belastungen zuzumuten. 
        Das Wohlbefinden der Teilnehmenden hat Vorrang vor dem reinen Interesse an signifikanten Ergebnissen.</p>
        <br />
        <p style="font-weight: bold;">3. Abbruchrecht</p>
        <p>Sollten während des Versuchs Belastungen auftreten, die Sie als zu schwerwiegend empfinden, haben Sie die Möglichkeit,
         die Untersuchung abzubrechen. Es entstehen Ihnen dadurch keine negativen Konsequenzen.</p>
        <br />
        <p style="font-weight: bold;">4. Recht auf postexperimentelle Aufklärung</p>
        <p>Nach Abschluss der Erhebungsphase der einzelnen Experimente werden auf Nachfrage alle gewünschten Informationen über den Ablauf,
         Zweck und die Ergebnisse des Versuchs bereitgestellt.</p>
        <br />
        <p style="font-weight: bold;">5. Pflichten als Versuchsperson</p>
        <p>
        Ihnen als Teilnehmende der Untersuchung obliegen einige nachvollziehbare Pflichten. Die Planung und Durchführung einer Untersuchung erfordert viel Zeit und Mühe. Daher ist es wichtig, dass Sie die Aufgabenstellungen der Untersuchung bestmöglich erfüllen, offen und ehrlich auf Fragen antworten und den Versuch ernst nehmen. Eine uninteressierte und oberflächliche Mitarbeit kann die Erreichung der Untersuchungsziele erheblich gefährden.</p>
           <br />
        <p style="font-weight: bold;">6. Gewährleistung der Anonymität</p>
        <p>Ihre Antworten werden vertraulich behandelt und anonymisiert. Sie dienen ausschließlich der Auswertung im Rahmen dieser Masterarbeit. Wir danken Ihnen herzlich für Ihre Teilnahme! </div>
    

        `
        ,
        },
        {
          type: 'boolean',
          name: 'Datenschutzerklaerung',
          title: 'Datenschutzerlärung',
          labelTrue: 'Ich nehme die Datenschutzerklärung an',
          labelFalse: 'Ich lehne die Datenschutzerklärung ab',
          isRequired: true,
        },
      ],
    },
    {
      "name": "page2",
      "elements": [
        {
          type: 'html',
          name: 'Datenschutzerklärung',
          html: `<div style="background-color: white; padding-top: 32px; padding-left: 40px; padding-bottom: 40px; padding-right: 40px; box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.15); border-radius: 4px">
          <p>
          Um einen umfassenden Überblick zu gewährleisten und die Ergebnisse unserer Umfrage besser einordnen zu können, 
          bitten wir Sie zunächst um die Angabe einiger demografischer Informationen.
          </p>
          </div>`
         },
       {
        "type": "text",
        "name": "LastName",
        "title": "Nachname",
        isRequired: true,
       },
       {
        "type": "text",
        "name": "FirstName",
        "title": "Vorname",
        isRequired: true,
       },
       {
        "type": "text",
        "name": "Alter",
        "title": "Alter",
        "inputType": "number",
        isRequired: true,
       },
       {
        "type": "text",
        "name": "E-Mail",
        "title": "E-Mail",
        isRequired: true,
       },
       {
        "type": "text",
        "name": "Arbeit",
        "title": "Studiengang / Ausbildung / Berufsbezeichnung",
        isRequired: true,
       },
       {
        "type": "boolean",
        "name": "BeeinträchtigungSehen",
        "title": "Haben Sie Beeinträchtigungen beim Sehen?",
        "description": "Falls Sie eine Brille tragen, dies Bitte auch als Sehbeeinträchtiung angeben.",
        "labelTrue": "Ja ",
        "labelFalse": "Nein",
        isRequired: true,
       },
       {
        "type": "text",
        "name": "AntwortBeeinträchtigung",
        "visibleIf": "{BeeinträchtigungSehen} = true",
        "title": "Bitte geben Sie die Art Ihrer Sehbeeinträchtigung an:",
         isRequired: true,
        
       },
       {
        "type": "rating",
        "name": "RatingStress",
        "title": "Wie würden Sie Ihren aktuellen Stresslevel auf einer Skala von 1 bis 10 bewerten, wobei 1 \"überhaupt kein Stress\" und 10 \"extrem gestresst\" bedeutet?",
        "rateCount": 10,
        "rateMax": 10,
        isRequired: true,
       },
       {
        "type": "boolean",
        "name": "Schlaf",
        "title": "Fühlen Sie sich nach Ihrem letzten Schlaf erfrischt und ausgeruht?",
        "labelTrue": "Ja ",
        "labelFalse": "Nein",
        isRequired: true,

       },
       {
        "type": "text",
        "name": "AntwortSchlaf",
        "visibleIf": "{Schlaf} = false",
        "title": "Gibt es derzeit besondere Ereignisse oder Umstände, die Ihren Stresslevel oder Schlaf beeinflussen? (Bitte beschreiben Sie kurz.) Antwortfeld:",
        "description": "Diese Frage ist optional"
       }
      ],
      //"title": "Demographische Informationen"
     },
    {
      name: 'page3',
      elements: [
        {
          type: 'html',
          name: 'Einleitung und Erlärung',
          html: `
          <div style="background-color: white; padding-top: 32px; padding-left: 40px; padding-bottom: 40px; padding-right: 40px; box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.15); border-radius: 4px">
          <body>
   
    <p>
        Im folgenden Abschnitt der Umfrage werden Sie gebeten, eine <strong>besondere Art von Fragen</strong> zu beantworten. Bei jeder Frage wählen Sie bitte <strong>eine Farbe</strong> aus, die Ihrer Meinung nach am besten zu der gestellten Frage passt. Es geht hierbei um <strong>Ihre persönlichen Wahrnehmungen und Assoziationen</strong> mit den Fragen durch Farben.
    </p>
    <p>
        Bitte beachten Sie, dass für jede Frage <strong>nur eine Farbe</strong> gewählt werden kann. Ihre Auswahl sollte die Farbe sein, die Sie spontan mit der jeweiligen Frage in Verbindung bringen oder die Ihrer Meinung nach am besten die Essenz der Frage einfängt.
    </p>
    <p>
        Um die Farben richtig beurteilen zu können, sorgen Sie bitte für <strong>gute Lichtverhältnisse</strong>. Wir empfehlen Ihnen, diese Umfrage auf einem <strong>Computer</strong> durchzuführen, um eine optimale Farbdarstellung zu gewährleisten.
    </p>

</body>
          </div>
          `},
          {
            type: 'image',
            name: 'Licht',
            imageLink: "https://api.surveyjs.io/private/Surveys/files?name=4d115bdc-b579-4b64-b2d9-e70374b2706b",
            imageFit: 'cover',
            imageHeight: 'auto',
            imageWidth: '100%',
          },
          {
            type: 'html',
            name: 'weiter',
            html: `
            <div style="background-color: white; padding-top: 32px; padding-left: 40px; padding-bottom: 40px; padding-right: 40px; box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.15); border-radius: 4px">
            <body>
    
      <p>
          Wenn Sie bereit sind, klicken Sie bitte auf <strong>„Weiter“</strong>.
      </p>
  </body>
            </div>
            `},
         
      ],
      //title: 'Erklärung',
    },
    {
      name: 'page4',
      elements: [
        {
          "name": '',
          type: 'textwithbutton',
          "hideNumber": true,
          "hideTitle": true,

        },
      ],
      title: 'FARBAUSWAHL',
    },
    {
      name: 'page5',
      elements: [
           {
            "type": "html",
            "name": "Erklärung",
            html: 
            `
            
    <div style="background-color: white; padding-top: 32px; padding-left: 40px; padding-bottom: 40px; padding-right: 40px; box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.15); border-radius: 4px">
<body>
    Im Folgenden finden Sie <b>drei kurze Geschichten,</b>, 
    die Kontext für die anschließenden Daten bieten.
    Bitte lesen Sie die Geschichten <b>aufmerksam</b> durch und
    betrachten Sie die <b>beigefügten Balkendiagramme</b>. 
    Nehmen Sie sich einen Moment Zeit, um <b>beides zu reflektieren</b>.
    Anschließend werden einige Fragen gestellt, die sich auf <b>Details der jeweiligen Geschichte</b>
    und die <b>im Diagramm dargestellten Daten</b> beziehen.
</body>
</div>
            `
           },
           {
            "type": "image",
            "name": "question9",
            "imageFit": "cover",
            "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=8660d466-3f26-4b66-b991-94c87e14422a",
            "imageHeight": "auto",
            "imageWidth": "100%"
           }
      ],
      title: 'Einführung Diagramme',
    },
    {
      name: 'page6',
      elements: [
        {
          type: 'html',
          name: 'introLand',
          title: 'Reiselust',
          html:
          `
          <div style="background-color: white; padding-top: 32px; padding-left: 40px; padding-bottom: 40px; padding-right: 40px; box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.15); border-radius: 4px">
<body>
            Ich habe meine Freunde letztens gefragt, wie oft Sie eigentlich schon verreist sind und wohin. \nDabei haben wir dieses Diagramm erstellt. \n\nBitte schauen Sie es sich eine Weile an und beantworten Sie dann Fragen dazu.
        </div>
        </body>
            `
          },

          {
            type: 'html',
            name: 'erklärung diagramm',
            html:
            `
           <p>In dieser Umfrage haben Sie die <strong>Möglichkeit</strong>, durch Klicken auf die <strong>einzelnen Themen</strong> in der Historie die entsprechenden <strong>Balken ein- und auszublenden</strong>. Diese Funktion ermöglicht es Ihnen, eine <strong>bessere Übersicht</strong> über die Ergebnisse zu erhalten und sie nach Ihren <strong>Interessen zu filtern</strong>.</p>

            `
          },
        {
          "name": '',
          type: 'land',
          "hideNumber": true,
        },
        {
          "type": "image",
          "name": "Freunde",
          "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=086021f0-d4a3-4ed2-b899-6d3f87ff845b",
          "imageFit": "cover",
          "imageHeight": "auto",
          "imageWidth": "100%"
         },
        {
          type: 'text',
          name: 'reisen_most',
          title: 'Wer ist am meisten verreist?',
          isRequired: true,
          
        },
        {
          type: 'text',
          name: 'reisen_never_afrika',
          title: 'Wer war noch nie in Afrika ?',
          isRequired: true,
        },
        {
          type: 'text',
          name: 'reisen_most_continent',
          title: 'Welcher Kontinent wurde am meisten besucht ?',
          isRequired: true,
        },
        {
          type: 'text',
          name: 'reisen_never_Asia',
          title: 'Wer war noch nie in Asien?',
          isRequired: true,
        },
        {
          type: 'text',
          name: 'reisen_moreThan_america',
          title: 'Wer war schon mehr als drei Mal in Nordamerika ?',
          isRequired: true,
        },

      
      ],
      title: 'Reiselust',
    },
    {
      name: 'page7',
      elements: [
        {
          type: 'html',
          name: 'introBuch',
          title: 'Bucherregal',
          html:
          `
          <div style="background-color: white; padding-top: 32px; padding-left: 40px; padding-bottom: 40px; padding-right: 40px; box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.15); border-radius: 4px">
<body>  Meine Freunde sind leidenschaftliche Leser und haben eine beeindruckende Sammlung von Büchern in verschiedenen Genres. Da habe ich mich auch in ihren \nZimmern umgeschaut und diese gezählt und kategorisiert. 
</div>
        </body>
            `
          },

          {
            type: 'html',
            name: 'erklärung diagramm',
            html:
            `
           <p>In dieser Umfrage haben Sie die <strong>Möglichkeit</strong>, durch Klicken auf die <strong>einzelnen Themen</strong> in der Historie die entsprechenden <strong>Balken ein- und auszublenden</strong>. Diese Funktion ermöglicht es Ihnen, eine <strong>bessere Übersicht</strong> über die Ergebnisse zu erhalten und sie nach Ihren <strong>Interessen zu filtern</strong>.</p>

            `
          },
  
        {
          "name":'',
          type: 'book',
          "hideNumber": true,
        },
        {
          "type": "image",
          "name": "Freunde",
          "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=086021f0-d4a3-4ed2-b899-6d3f87ff845b",
          "imageFit": "cover",
          "imageHeight": "auto",
          "imageWidth": "100%"
         },
        {
          type: 'text',
          name: 'book_most',
          title: 'Wer besitzt die meisten Bücher ?',
          isRequired: true,
        },
        {
          type: 'text',
          name: 'book_noSachbuch',
          title: 'Wer besitzt kein Sachbuch?',
          isRequired: true,
        },
        {
          type: 'text',
          name: 'book_mostGenre',
          title: 'Welches Genre ist am meisten vertreten?',
          isRequired: true,
        },
        {
          type: 'text',
          name: 'book_leastKrimi',
          title: 'Wer hat die wenigsten Krimis?',
          isRequired: true,
        },
        {
          type: 'text',
          name: 'book_mostSachbuch',
          title: 'Wer hat die meisten Sachbücher ?',
          isRequired: true,
        },
      ],
      title: 'Büchersammlung',
    },
    
    {
      name: 'page8',
      elements: [
        {
          type: 'html',
          name: 'introBuch',
          title: 'Bucherregal',
          html:
          `
          <div style="background-color: white; padding-top: 32px; padding-left: 40px; padding-bottom: 40px; padding-right: 40px; box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.15); border-radius: 4px">
<body> Für eine bevorstehende Party habe ich die Spotifyfavoriten meiner Freunde analysiert, um die Genres und Liederanzahl für die perfekte musikalische Abstimmung zu erfassen. Diese Zusammenfassungen geben einen Überblick über die Lieblingssongs und -genres meiner Freunde an. ,
</div>
        </body>
            `
          },
          {
            type: 'html',
            name: 'erklärung diagramm',
            html:
            `
           <p>In dieser Umfrage haben Sie die <strong>Möglichkeit</strong>, durch Klicken auf die <strong>einzelnen Themen</strong> in der Historie die entsprechenden <strong>Balken ein- und auszublenden</strong>. Diese Funktion ermöglicht es Ihnen, eine <strong>bessere Übersicht</strong> über die Ergebnisse zu erhalten und sie nach Ihren <strong>Interessen zu filtern</strong>.</p>

            `
          },

         
        {
          "name": '',
          type: 'music',
          "hideNumber": true,

        },
    
        {
          "type": "image",
          "name": "Freunde",
          "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=086021f0-d4a3-4ed2-b899-6d3f87ff845b",
          "imageFit": "cover",
          "imageHeight": "auto",
          "imageWidth": "100%"
         },
        {
          type: 'text',
          name: 'music_most',
          title: 'Wer besitzt die meisten Lieblingssongs ?',
          isRequired: true,
        },
        {
          type: 'text',
          name: 'music_noTechno',
          title: 'Wer hört kein Techno?',
          isRequired: true,
        },
        {
          type: 'text',
          name: 'music_mostGenre',
          title: 'Welches Genre ist am meisten vertreten?',
          isRequired: true,
        },
        {
          type: 'text',
          name: 'music_mostRock',
          title: 'Wer hört am meisten Rock?',
          isRequired: true,
        },
        {
          type: 'text',
          name: 'music_lessPop',
          title: 'Wer hört am wenigsten Pop?',
          isRequired: true,
        },
      ],
      title: 'Musikgeschmack',
    },
    
  ],
  "pagePrevText": "Zurück",
 "pageNextText": "Weiter ",
 "showTimerPanelMode": "survey",
 "completeText": "Abschließen",
};


//console.log('Init Color Picker... ');
initColorPicker(Survey);

//console.log('Init Chart Music');
initChartMusic({ Survey });

//console.log('Init Chart Book');
initChartBook({ Survey });

//console.log('Init Chart Land');
initChartLand({ Survey });



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, SurveyModule],
  providers: [LoggingService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  surveyModel: Model | undefined;
  titel: any;
  isRandomized = false;
  /**
   *
   */
  constructor(public service: LoggingService, private route: ActivatedRoute) {}

  ngOnInit() {
    let testOrder: string = '123';
    let colorOrder: string = '1';
    this.service.setStartTime();
    this.service.makeDate();

    

    // Sollte true sein, falls es generell random sein soll
    if (this.isRandomized) {
      testOrder = TEST_CASES[this.getRandomInt(0, 3)];
      colorOrder = this.getRandomInt(1, 3).toString();
    }


    let newSurvey: any | undefined;
    this.route.queryParams.subscribe((params) => {
      // Test Order
      testOrder = params['t'] ?? testOrder;
      localStorage.setItem('testOrder', testOrder);

      // Color Order
      colorOrder = params['f'] ?? colorOrder;
      localStorage.setItem('colorOrder', colorOrder);

      if (params['t']) {
        newSurvey = this.randomizeTestOrder(testOrder);
        const survey = new Model(newSurvey);
        survey.onComplete.add((sender, options) => this.surveyComplete(sender, options));
        survey.onCurrentPageChanging.add(this.pageChange);
        this.surveyModel = survey;
      }

  
      if(params['s'] && params['s']==='true')
      {
        newSurvey = survey2;
        const survey = new Model(newSurvey);
        survey.onComplete.add((sender, options) => this.surveyComplete(sender, options));
        survey.onCurrentPageChanging.add(this.pageChange);
        this.surveyModel = survey;
      }
    });

    const matrix = [];
    ['Lieblingsfarbe', 'NoLieblingsFarbe1', 'NoLieblingsFarbe2'].forEach(
      (color) => {}
    );
  }

  getRandomInt(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
  }

  randomizeTestOrder(testOrder: string) {
    const pages = surveyJson.pages;
    const lastThree = pages.slice(-3); // geht nur wenn die pages so bleiben wie sie sind
    const newOrder = [];

    switch (testOrder) {
      case '231':
        newOrder.push(...[lastThree[1], lastThree[2], lastThree[0]]);
        break;
      case '312':
        newOrder.push(...[lastThree[2], lastThree[0], lastThree[1]]);
        break;
      case '132':
        newOrder.push(...[lastThree[0], lastThree[2], lastThree[1]]);
        break;
      case '123':
        newOrder.push(...[lastThree[0], lastThree[1], lastThree[2]]);
        break;
      case '213':
        newOrder.push(...[lastThree[1], lastThree[0], lastThree[2]]);
        break;
      case '321':
        newOrder.push(...[lastThree[2], lastThree[1], lastThree[0]]);
        break;
    
        newOrder.push(...lastThree);
        break;
    }
    

    surveyJson.pages = surveyJson.pages.slice(0, -3).concat(newOrder);
    return surveyJson;
  }


  pageChange(pageChange: SurveyModel, event: Survey.CurrentPageChangedEvent) {
    //console.log('Time: ');
    if(event.oldCurrentPage.id === 'sp_100' )
    {
      //this.service.startTime();
      pageChange.data.duration=0;
      //console.log('START');
    }
    if (event.oldCurrentPage.id === 'sp_103') {
    // console.log(localStorage.getItem('colorpick'));
    }

    if (
      event.oldCurrentPage.id === 'sp_100' &&
      pageChange.data.Datenschutzerklaerung === false
    ) {
      pageChange.doComplete();
    }
  
  }

 
  surveyComplete(surveyComplete: any, options?: any) {
    console.log(surveyComplete.data);
    this.service.sendData(surveyComplete.data); //Service ist schon   Service ist undefined
  }
}
