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

const surveyJson = {
  title: 'ERINNERBARKEIT VON INFORMATIONSVISUALISIERUNGEN',
  logo: 'https://api.surveyjs.io/private/Surveys/files?name=fde65c11-7c39-49e5-98e1-813931fd51a3',
  logoPosition: 'right',
  pages: [
    {
      name: 'page1',
      id: 'shit3',
      elements: [
        {
          type: 'html',
          name: 'Datenschutzerklärung',
          html:/* `
         <div style="background-color: white; padding-top: 32px; padding-left: 40px; padding-bottom: 40px; padding-right: 40px; box-shadow:  0px 1px 2px 0px rgba(0, 0, 0, 0.15); border-radius: 4px">
        Liebe/r Untersuchungsteilnehmer/in!<br />
        <br />Es folgt eine Information über deine Rechte und Pflichten als Versuchsperson sowie
         über unsere Verpflichtungen als Versuchsleiter/ in: <br /><br /> 1. Freiwilligkeit der
          Teilnahme Du hast dich freiwillig dafür entschieden, an dieser Untersuchung teilzunehmen.
           Wir danken dir sehr für diese Bereitschaft, mit deiner Mitarbeit zum Zustandekommen
           unserer Untersuchung beizutragen.  <br /><br /> 2. Schutz vor Schädigung und Belastung
            Außerdem möchten wir versichern, dass wir uns bemühen, dir in diesem Experiment keine
             seelischen oder körperlichen Belastungen zuzumuten und dass das Wohlergehen der
             Versuchsteilnehmer/innen Vorrang vor reinem Interesse an signifikanten Ergebnissen hat.
              <br /><br /> 3. Abbruchrecht Sollten nun entgegen unseren Bemühungen während des Versuchs
               Belastungen auftreten, die du für zu schwerwiegend erachtest, so hast du die Möglichkeit,
                die Untersuchung abzubrechen.Aufgrund des Abbruchs musst du aber keinerlei negative
                 Konsequenzen befürchten. <br /><br />  4. Recht auf postexperimentelle Aufklärung
                 Wir versichern, dass nach Abschluss der Erhebungsphase der einzelnen Experimente
                  auf Nachfrage sämtliche gewünschten Informationen über Ablauf, Zweck und Ergebnis
                   des Versuchs gegeben werden können (Kontaktmöglichkeit s. unten).<br /><br />
                    5. Pflichten als Versuchsperson Diesen geschilderten Rechten jeder Versuchsperson
                    stehen natürlich auch einige nachvollziehbare Pflichten gegenüber.
                    Die Planung und Durchführung einer Untersuchung erfordert viel Zeit und Mühe.
                     <br />Es ist deshalb wichtig, dass du versuchst, die Aufgabenstellungen der
                      Untersuchung so gut wie möglich zu erfüllen. Dazu gehört, dass du offen und
                       ehrlich auf die Fragen antwortest und den Versuch ernst nimmst.
                       Eine uninteressierte und oberflächliche Mitarbeit gefährdet die Erreichung der
                       Untersuchungsziele erheblich, und es wäre sehr schade, wenn dadurch die ganze
                       Arbeit, die in die Vorbereitung des Experiments gesteckt worden ist, umsonst
                        gewesen wäre.<br /><br />  6. Gewährleistung der Anonymität Abschließend
                        wollen wir darauf hinweisen, dass deine Antworten streng vertraulich behandelt
                        werden. Zu diesem Zweck wird ein Codewort gebraucht, das nur du kennst und
                        das die Zuordnung der Daten zu deiner Person verhindert.<br /> Wir danken
                         dir noch einmal sehr für deine Teilnahme!
        </div>`
        */

        `
        <div style="background-color: white; padding-top: 32px; padding-left: 40px; padding-bottom: 40px; padding-right: 40px; box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.15); border-radius: 4px">
        <p style="font-weight: bold;">Liebe/r Untersuchungsteilnehmer/in!</p>
        <p>Es folgt eine Information über deine Rechte und Pflichten als Versuchsperson sowie über unsere Verpflichtungen als Versuchsleiter/ in:</p>
        <br />
        <p style="font-weight: bold;">1. Freiwilligkeit der Teilnahme</p>
        <p>Du hast dich freiwillig dafür entschieden, an dieser Untersuchung teilzunehmen. Wir danken dir sehr für diese Bereitschaft, mit deiner Mitarbeit zum Zustandekommen unserer Untersuchung beizutragen.</p>
        <br />
        <p style="font-weight: bold;">2. Schutz vor Schädigung und Belastung</p>
        <p>Außerdem möchten wir versichern, dass wir uns bemühen, dir in diesem Experiment keine seelischen oder körperlichen Belastungen zuzumuten und dass das Wohlergehen der Versuchsteilnehmer/innen Vorrang vor reinem Interesse an signifikanten Ergebnissen hat.</p>
        <br />
        <p style="font-weight: bold;">3. Abbruchrecht</p>
        <p>Sollten nun entgegen unseren Bemühungen während des Versuchs Belastungen auftreten, die du für zu schwerwiegend erachtest, so hast du die Möglichkeit, die Untersuchung abzubrechen. Aufgrund des Abbruchs musst du aber keinerlei negative Konsequenzen befürchten.</p>
        <br />
        <p style="font-weight: bold;">4. Recht auf postexperimentelle Aufklärung</p>
        <p>Wir versichern, dass nach Abschluss der Erhebungsphase der einzelnen Experimente auf Nachfrage sämtliche gewünschten Informationen über Ablauf, Zweck und Ergebnis des Versuchs gegeben werden können (Kontaktmöglichkeit s. unten).</p>
        <br />
        <p style="font-weight: bold;">5. Pflichten als Versuchsperson</p>
        <p>Den geschilderten Rechten jeder Versuchsperson stehen natürlich auch einige nachvollziehbare Pflichten gegenüber. Die Planung und Durchführung einer Untersuchung erfordert viel Zeit und Mühe.</p>
        <p>Es ist deshalb wichtig, dass du versuchst, die Aufgabenstellungen der Untersuchung so gut wie möglich zu erfüllen. Dazu gehört, dass du offen und ehrlich auf die Fragen antwortest und den Versuch ernst nimmst. Eine uninteressierte und oberflächliche Mitarbeit gefährdet die Erreichung der Untersuchungsziele erheblich, und es wäre sehr schade, wenn dadurch die ganze Arbeit, die in die Vorbereitung des Experiments gesteckt worden ist, umsonst gewesen wäre.</p>
        <br />
        <p style="font-weight: bold;">6. Gewährleistung der Anonymität</p>
        <p>Abschließend wollen wir darauf hinweisen, dass deine Antworten streng vertraulich behandelt werden. Zu diesem Zweck wird ein Codewort gebraucht, das nur du kennst und das die Zuordnung der Daten zu deiner Person verhindert. Wir danken dir noch einmal sehr für deine Teilnahme!</p>
    </div>
    

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
        "type": "text",
        "name": "LastName",
        "title": "Name"
       },
       {
        "type": "text",
        "name": "FirstName",
        "title": "Vorname"
       },
       {
        "type": "text",
        "name": "question4",
        "title": "Alter",
        "inputType": "number"
       },
       {
        "type": "text",
        "name": "question5",
        "title": "Studiengang / Ausbildung"
       },
       {
        "type": "boolean",
        "name": "Brille",
        "title": "Haben Sie Beeinträchtigungen beim Sehen?"
       },
       {
        "type": "checkbox",
        "name": "Arten von Beeinträchtigung",
        "visibleIf": "{Brille} = true",
        "title": "Bitte geben Sie die Art Ihrer Sehbeeinträchtigung an:",
        "description": "Bitte zutreffendes Ankreuzten",
        "choices": [
         {
          "value": "Item 1",
          "text": "Ich habe generelle Sehschwierigkeiten"
         },
         {
          "value": "Item 2",
          "text": "Ich bin farbenblind"
         },
         {
          "value": "Item 3",
          "text": "Ich trage eine Brille / Kontaktlinsen"
         },
         {
          "value": "Item 4",
          "text": "andere Beeinträchtigung"
         }
        ]
       },
       {
        "type": "text",
        "name": "question6",
        "visibleIf": "{Arten von Beeinträchtigung} allof ['Item 4']",
        "title": "Welche andere Sehbeeinträchtigung haben Sie ?"
       },
       {
        "type": "rating",
        "name": "question8",
        "title": "Wie würden Sie Ihren aktuellen Stresslevel auf einer Skala von 1 bis 10 bewerten, wobei 1 \"überhaupt kein Stress\" und 10 \"extrem gestresst\" bedeutet?",
        "rateCount": 10,
        "rateMax": 10
       },
       {
        "type": "boolean",
        "name": "Schlaf",
        "title": "Fühlen Sie sich nach Ihrem letzten Schlaf erfrischt und ausgeruht?"
       },
       {
        "type": "text",
        "name": "question10",
        "visibleIf": "{Schlaf} = false",
        "title": "Gibt es derzeit besondere Ereignisse oder Umstände, die Ihren Stresslevel oder Schlaf beeinflussen? (Bitte beschreiben Sie kurz.) Antwortfeld:",
        "description": "Diese Frage ist optional"
       }
      ],
      "title": "Demographische Informationen"
     },
    {
      name: 'page3',
      elements: [
        {
          type: 'html',
          name: 'Farbpräferenzermittlung',
          html: '<p>In dieser Umfrage verwenden wir ein Ausschlussverfahren, um Ihre Farbpräferenzen zu ermitteln. Sie werden durch eine Serie von Runden geführt, in denen Sie jeweils aus einer Auswahl an Farben wählen. Jede Runde besteht aus einer Frage, die auf bestimmte Farbattribute abzielt.</p><h3>So funktioniert die Umfrage:</h3><ol><li><strong>Jede Runde stellt eine Frage:</strong> Die Fragen sind so gestaltet, dass sie auf verschiedene Aspekte von Farben abzielen.</li><li><strong>Wählen Sie eine Farbe:</strong> Basierend auf Ihrer Einschätzung der Frage wählen Sie eine Farbe, die Ihrer Meinung nach am besten passt.</li><li><strong>Ausschlussverfahren:</strong> Mit jeder beantworteten Frage verringert sich die Anzahl der verbleibenden Farben.</li><li><strong>Ermittlung Ihrer Präferenzen:</strong> Nach Abschluss aller Runden erhalten Sie eine Auswertung, die Ihre Farbpräferenzen aufzeigt.</li></ol><p>Bitte beachten Sie, dass es bei dieser Umfrage nicht um die Ermittlung einer einzelnen bevorzugten Farbe geht, sondern um das Verständnis Ihrer generellen Neigung zu verschiedenen Farben.</p>',
        },
      ],
      title: 'Erklärung',
    },
    {
      name: 'page4',
      elements: [
        {
          type: 'textwithbutton',
        },
      ],
      title: 'FARBAUSWAHL',
    },
    {
      name: 'page5',
      elements: [
        {
          type: 'image',
          name: 'question15',
          title: 'Vorstellung Freunde',
          imageLink:
            'https://api.surveyjs.io/private/Surveys/files?name=c2906c76-47e2-4747-9a8f-780547c794dc',
          imageFit: 'cover',
          imageHeight: 'auto',
          imageWidth: '100%',
        },
      ],
      title: 'ERKLÄRUNG NACHSTER TEIL',
    },
    {
      name: 'page6',
      elements: [
        {
          type: 'comment',
          name: 'question11',
          title: 'Diagramm 1',
          description:
            'Ich habe meine Freunde letztens gefragt wie oft Sie eigentlich schon verreist sind und wohin. \nDabei haben wir dieses Diagramm erstellt. \n\nBitte schau es dir eine weile an und beantworte dann Fragen dazu.',
        },
        {
          type: 'land',
        },
        {
          type: 'checkbox',
          name: 'question13',
          title: 'Wer ist am meisten verreist?',
          choices: [
            {
              value: 'Item 1',
              text: 'Elli',
            },
            {
              value: 'Item 2',
              text: 'Nadine',
            },
            {
              value: 'Item 3',
              text: 'Paul',
            },
            {
              value: 'Item 4',
              text: 'Max',
            },
          ],
        },
        {
          type: 'text',
          name: 'question14',
          title: 'Wer war noch nie in Afrika ?',
        },
        {
          type: 'text',
          name: 'question16',
          title: 'Welcher Kontinent wurde am meisten besucht ?',
        },
        {
          type: 'text',
          name: 'question17',
          title: 'War jemand noch nie in Asien?',
        },
        {
          type: 'text',
          name: 'question18',
          title: 'Wer war schon mehr als drei mal in Nord Amerika ?',
        },
      ],
      title: 'Diagramm 1',
    },
    {
      name: 'page7',
      elements: [
        {
          type: 'comment',
          name: 'question19',
          description:
            'Neben den ganzen reisen ist mir auch aufgefallen dass sie relativ viel lesen. Da habe ich mich auch in ihren \nZimmern umgeschaut und die Bücher und Gernre gezählt. ',
        },
        {
          type: 'book',
        },
        {
          type: 'checkbox',
          name: 'question20',
          title: 'Wer besitzt die meisten Bücher ?',
          choices: [
            {
              value: 'Item 1',
              text: 'Elli',
            },
            {
              value: 'Item 2',
              text: 'Nadine',
            },
            {
              value: 'Item 3',
              text: 'Max',
            },
            {
              value: 'Item 4',
              text: 'Paul',
            },
          ],
        },
        {
          type: 'text',
          name: 'question21',
          title: 'Wer besitzt kein Sachbuch?',
        },
        {
          type: 'text',
          name: 'question22',
          title: 'Welches Genre ist am meisten vertreten?',
        },
        {
          type: 'text',
          name: 'question23',
          title: 'Wer hat die wenigsten Krimis gelesen?',
        },
        {
          type: 'text',
          name: 'question24',
          title: 'Wer hat die meisten Sachbücher ?',
        },
      ],
      title: 'Diagramm 2',
    },
    {
      name: 'page8',
      elements: [
        {
          type: 'comment',
          name: 'question25',
          description:
            'Neben Büchern und Reisen , hören wir auch Musik. Ich hab mit mal ihr Spotify Wrapped angeschaut und das hier\nerstellt : ',
        },
        {
          type: 'music',
        },
        {
          type: 'checkbox',
          name: 'question29',
          title: 'Wer besitzt die meisten Lieblingssongs ?',
          choices: [
            {
              value: 'Item 1',
              text: 'Elli',
            },
            {
              value: 'Item 2',
              text: 'Nadine',
            },
            {
              value: 'Item 3',
              text: 'Max',
            },
            {
              value: 'Item 4',
              text: 'Paul',
            },
          ],
        },
        {
          type: 'text',
          name: 'question30',
          title: 'Wer hört kein Techno?',
        },
        {
          type: 'text',
          name: 'question31',
          title: 'Welches Genre ist am meisten vertreten?',
        },
        {
          type: 'text',
          name: 'question32',
          title: 'Wer hört am meisten Rock?',
        },
        {
          type: 'text',
          name: 'question33',
          title: 'Wer hört am wenigsten Pop?',
        },
      ],
      title: 'Diagramm 3',
    },
  ],
};

console.log('Init Color Picker... ');
initColorPicker(Survey);

console.log('Init Chart Music');
initChartMusic({ Survey });

console.log('Init Chart Book');
initChartBook({ Survey });

console.log('Init Chart Land');
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

      //Neuer Params einfügen und neue HTML
      //
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
      default:
        newOrder.push(...lastThree);
        break;
    }

    surveyJson.pages = surveyJson.pages.slice(0, -3).concat(newOrder);
    return surveyJson;
  }

  //Falls man ablehnt kommt man zum Ende

  pageChange(pageChange: SurveyModel, event: Survey.CurrentPageChangedEvent) {
    if (event.oldCurrentPage.id === 'sp_103') {
      console.log(localStorage.getItem('colorpick'));
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
