import { fabric } from 'fabric';
import { install } from 'chart-js-fabric';
import { COLOR_NAMES } from './constants';

install(fabric);

// Refer to the following help topic for details:
// https://surveyjs.io/Documentation/Survey-Creator?id=Create-Custom-Widget
export function initChartBook({ Survey }: { Survey: any }) {
  const widget = {
    name: 'book',
    title: 'book',
    iconName: '',
    widgetIsLoaded: function () {
      return true;
    },
    isFit: function (question: any) {
      return question.getType() === 'book';
    },
    activatedByChanged: function () {
      Survey.JsonObject.metaData.addClass('book', [], null, 'empty');
      Survey.JsonObject.metaData.addProperties('book', [
        { name: 'buttonText', default: 'Click Me' },
      ]);
    },
    isDefaultRender: false,
    htmlTemplate: `<canvas width="550" height="700" id="book"></canvas>`,

    afterRender: function (question: any, el: any) {
      // NoLieblingsFarbe1
      // NoLieblingsFarbe2
      // LieblingsFarbe

      const testOrder = localStorage.getItem('testOrder');
      const colorOrder = localStorage.getItem('colorOrder');




      let color: string | null;

      if (testOrder === '123') {
        if (colorOrder === '1') {
          color = localStorage.getItem(COLOR_NAMES[1]);
        }

        if (colorOrder === '2') {
          color = localStorage.getItem(COLOR_NAMES[0]);
        }

        if (colorOrder === '3') {
          color = localStorage.getItem(COLOR_NAMES[2]);
        }
      }

      if (testOrder === '231') {
        if (colorOrder === '1') {
          color = localStorage.getItem(COLOR_NAMES[0]);
        }

        if (colorOrder === '2') {
          color = localStorage.getItem(COLOR_NAMES[2]);
        }

        if (colorOrder === '3') {
          color = localStorage.getItem(COLOR_NAMES[1]);
        }
      }

      if (testOrder === '312') {
        if (colorOrder === '1') {
          color = localStorage.getItem(COLOR_NAMES[2]);
        }

        if (colorOrder === '2') {
          color = localStorage.getItem(COLOR_NAMES[1]);
        }

        if (colorOrder === '3') {
          color = localStorage.getItem(COLOR_NAMES[0]);
        }
      }

      if (testOrder === '132') {
        if (colorOrder === '1') {
          color = localStorage.getItem(COLOR_NAMES[2]);
        }

        if (colorOrder === '2') {
          color = localStorage.getItem(COLOR_NAMES[1]);
        }

        if (colorOrder === '3') {
          color = localStorage.getItem(COLOR_NAMES[0]);
        }
      }


    if (testOrder === '213') {
      if (colorOrder === '1') {
        color = localStorage.getItem(COLOR_NAMES[0]);
      }

      if (colorOrder === '2') {
        color = localStorage.getItem(COLOR_NAMES[2]);
      }

      if (colorOrder === '3') {
        color = localStorage.getItem(COLOR_NAMES[1]);
      }

      
    }

    if (testOrder === '321') {
      if (colorOrder === '1') {
        color = localStorage.getItem(COLOR_NAMES[1]);
      }

      if (colorOrder === '2') {
        color = localStorage.getItem(COLOR_NAMES[0]);
      }

      if (colorOrder === '3') {
        color = localStorage.getItem(COLOR_NAMES[2]);
      }

      
    }

      var rgb = color!.match(/\d+/g);
     // console.log('RGB Ausgabe:', rgb);

      let colors: string[] = new Array<string>(6);
      if (rgb) {
     //   console.log('Colors 0 leer:', colors[0]);

        let one = Number.parseInt(rgb[0]);
        let two = Number.parseInt(rgb[1]);
        let three = Number.parseInt(rgb[2]);

      //  console.log('R:', one);
       // console.log('G:', two);
       // console.log('B:', three);

        //Farbschema wählen

        switch (one)
        {
            case 254: //Farbe 1 gelb

            colors[0] = 'rgb(254,237,1)';
            colors[1] = 'rgb(180,170,19)';
            colors[2] = 'rgb(238,201,0)';
            colors[3] = 'rgb(255,236,139)';
            colors[4] = 'rgb(255,255,224)';
            colors[5] = 'rgb(205,173,1)';

            break;

            case 249: //Farbe 2 hellorange

            colors[0] = 'rgb(249,178,52)';
            colors[1] = 'rgb(255,165,79)';
            colors[2] = 'rgb(255,231,195)';
            colors[3] = 'rgb(255,185,15)';
            colors[4] = 'rgb(255,132,0)';
            colors[5] = 'rgb(237,189,104)';

            break;


            case 242: //Farbe 3 mittelorange

            colors[0] = 'rgb(255,153,102)';
            colors[1] = 'rgb(238,203,150)';
            colors[2] = 'rgb(193,124,20)';
            colors[3] = 'rgb(255,204,102)';
            colors[4] = 'rgb(255,154,0)';
            colors[5] = 'rgb(237,151,20)';

            break;

            case 234: //Farbe 4 zwischen rot und orange

            colors[0] = 'rgb(234,91,21)';
            colors[1] = 'rgb(241,120,53)';
            colors[2] = 'rgb(255,204,153)';
            colors[3] = 'rgb(164,67,14)';
            colors[4] = 'rgb(255,102,0)';
            colors[5] = 'rgb(255,153,102)';

            break;

            case 228: //Farbe 5 ROT

            colors[0] = 'rgb(228,6,19)';
            colors[1] = 'rgb(238,68,78)';
            colors[2] = 'rgb(255,197,197)';
            colors[3] = 'rgb(255,0,0)';
            colors[4] = 'rgb(143,10,10)';
            colors[5] = 'rgb(255,153,153)';

            break;

            case 149: //Farbe 6 Helllila

            colors[0] = 'rgb(149,27,128)';
            colors[1] = 'rgb(241,31,205)';
            colors[2] = 'rgb(228,112,208)';
            colors[3] = 'rgb(70,16,61)';
            colors[4] = 'rgb(202,147,193)';
            colors[5] = 'rgb(135,0,112)';

            break;

            case 89: //Farbe 7 Lila

            colors[0] = 'rgb(89,53,140)';
            colors[1] = 'rgb(137,54,255)';
            colors[2] = 'rgb(189,145,251)';
            colors[3] = 'rgb(65,21,128)';
            colors[4] = 'rgb(46,11,95)';
            colors[5] = 'rgb(173,126,241)';

            break;

            case 38: //Farbe 8 Dunkelblau

            colors[0] = 'rgb(38,52,140)';
            colors[1] = 'rgb(85,105,229)';
            colors[2] = 'rgb(7,20,101)';
            colors[3] = 'rgb(0,35,255)';
            colors[4] = 'rgb(59,70,137)';
            colors[5] = 'rgb(153,204,255)';

            break;

            case 1: //Farbe 9blau

            colors[0] = 'rgb(1,80,159)';
            colors[1] = 'rgb(55,138,221)';
            colors[2] = 'rgb(5,63,121)';
            colors[3] = 'rgb(153,204,255)';
            colors[4] = 'rgb(0,81,162)';
            colors[5] = 'rgb(39,143,247)';

            break;

            case 15: //Farbe 10 hellblau

            colors[0] = 'rgb(15,112,183)';
            colors[1] = 'rgb(102,204,255)';
            colors[2] = 'rgb(15,65,102)';
            colors[3] = 'rgb(0,147,255)';
            colors[4] = 'rgb(10,79,130)';
            colors[5] = 'rgb(119,163,195)';

            break;

            case 12: //Farbe 11 dunkelgrün

            colors[0] = 'rgb(12,142,54)';
            colors[1] = 'rgb(164,202,172)';
            colors[2] = 'rgb(56,229,112)';
            colors[3] = 'rgb(31,104,55)';
            colors[4] = 'rgb(8,59,25)';
            colors[5] = 'rgb(0,241,78)';

            break;

            case 148: //Farbe 11 dunkelgrün

            colors[0] = 'rgb(148,193,32)';
            colors[1] = 'rgb(195,238,85)';
            colors[2] = 'rgb(102,153,51)';
            colors[3] = 'rgb(55,73,9)';
            colors[4] = 'rgb(185,255,6)';
            colors[5] = 'rgb(153,204,102)';

            break;
            default:
          //  console.log('Digga steht nix drin');
            break;
        }

        /*for (let index = 0; index < 6; index++) {


                if (one && two && three) {
                    colors[index] = `rgb(${one}, ${two}, ${three })`;
                }

                if (isOneHigh) {
                    one -= r;
                } else {
                    one += r;
                }

                if (isTwoHigh) {
                    two -= g;
                } else {
                    two += g;
                }

                if (isThreeHigh) {
                    three -= b;
                } else {
                    three += b;
                }

            }*/

        //console.log(colors)/*
      }

      const instance = new fabric.Canvas('book');
      const conf: fabric.IChartConfiguration = {
        width: 550,
        height: 700,
        chart: {
          type: 'bar',
          // colorTheme:"default",
          // backgroundColor:"#fff",
          // chartOpacity:100,
          // labelPrefix:"",
          // labelSuffix:"",
          // labelTemplate:"{value}",
          // numberFormat:"eu",
          //drawOrder:"desc",
          //fontFamily:"Lato",
          data: {
            labels: ['Elli', 'Nadine', 'Max', 'Paul'],
            datasets: [
              {
                label: 'Bücher insgesamt',
                data: [45,30,25,60],
                backgroundColor: colors[0] ?? 'rgba(54, 163, 235, 1)',
                borderColor: 'rgb(10,10,10)',
                borderWidth: 1,
                order: 10,
                fill: true,
              },
              {
                label: 'Krimis',
                data: [5,20,0,5],
                backgroundColor: colors[1] ?? 'rgba(0, 106, 176, 1)',
                borderColor: 'rgb(10,10,10)',
                borderWidth: 1,
                order: 20,
                fill: true,
              },
              {
                label: 'Fantasy',
                data: [5,5,5,15],
                backgroundColor: colors[2] ?? 'rgba(111, 198, 255, 1)',
                borderColor: 'rgb(10,10,10)',
                borderWidth: 1,
                order: 30,
                fill: true,
              },
              {
                label: 'Sachbuch',
                data: [20,0,5,10],
                backgroundColor: colors[3] ?? 'rgba(37, 90, 125, 1)',
                borderColor: 'rgb(10,10,10)',
                borderWidth: 1,
                order: 40,
                fill: true,
              },
              {
                label: 'Liebesromane',
                data: [10,0,15,20],
                backgroundColor: colors[4] ?? 'rgba(192, 228, 252, 1)',
                borderColor: 'rgb(10,10,10)',
                borderWidth: 1,
                order: 50,
                fill: true,
              },
              {
                label: 'Science Fiction',
                data: [5,5,0,10],
                backgroundColor: colors[5] ?? 'rgba(114, 158, 187, 1)',
                borderColor: 'rgb(10,10,10)',
                borderWidth: 1,
                order: 60,
                fill: true,
              },
            ],
          },
          options: {
            responsive: false,
            maintainAspectRatio: false,
            devicePixelRatio: 1,
            tooltips: {
              enabled: false,
            },
            hover: {
              mode: undefined,
            },
            layout: {
              padding: {
                top: 10,
                left: 10,
                right: 10,
                bottom: 10,
              },
            },
            legend: {
              display: true,
              position: 'top',
              labels: {
                fontSize: 20,
              },
            },
            title: {
              display: true,
              position: 'top',
              text: 'Buchgeschmack',
              fontSize: 32,
            },
            plugins: {
              datalabels: {
                display: true,
                borderColor: '#000',
                borderWidth: 0,
                borderRadius: 3,
                color: '#fff',
                font: {
                  weight: 'bold',
                  size: 20,
                },
                align: 'center',
                anchor: 'center',
                padding: {
                  top: 4,
                  right: 4,
                  bottom: 4,
                  left: 4,
                },
              },
            },
            scales: {
              xAxes: [
                {
                  ticks: {
                    beginAtZero: true,
                    fontSize: 16,
                  },
                  gridLines: {
                    display: true,
                  },
                },
              ],
              yAxes: [
                {
                  ticks: {
                    beginAtZero: true,
                    fontSize: 16,
                    stepSize: 5,
                  },
                  gridLines: {
                    display: true,
                  },
                },
              ],
            },
          },
        },
        //fabric:{
        //    version:"5.2.4",
        //    objects:[]
        //}
      };
      instance.add(new fabric.Chart(conf));

      const onValueChangedCallback = function () {
        //text.value = question.value ? question.value : "";
      };
      const onReadOnlyChangedCallback = function () {
        /*
            if (question.isReadOnly) {
            text.setAttribute('disabled', 'disabled');
            button.setAttribute('disabled', 'disabled');
          } else {
            text.removeAttribute("disabled");
            button.removeAttribute("disabled");
          }
          */
      };
      question.readOnlyChangedCallback = onReadOnlyChangedCallback;
      question.valueChangedCallback = onValueChangedCallback;
      onValueChangedCallback();
      onReadOnlyChangedCallback();
    },
  };

  Survey.CustomWidgetCollection.Instance.addCustomWidget(widget, 'customtype');
}
