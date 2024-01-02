
// Refer to the following help topic for details:

import { Color } from "fabric/fabric-impl";

// https://surveyjs.io/Documentation/Survey-Creator?id=Create-Custom-Widget
export function initColorPicker(Survey: any) {
    const widget = {
      name: "textwithbutton",
     title: "Text with button",
      iconName: "",
      "hideTitle": true,
      "hideNumber": true,

      widgetIsLoaded: function () {
        return true;
      },
      isFit: function (question: any) {
        return question.getType() === 'textwithbutton';
      },
      activatedByChanged: function () {
        Survey.JsonObject.metaData.addClass("textwithbutton", [], null, "empty");
        Survey.JsonObject.metaData.addProperties("textwithbutton", [
          { name: "buttonText", default: "Click Me" }
        ]);
      },
      isDefaultRender: false,
      htmlTemplate: `

    

<head>
      <div style="background-color: white; padding-top: 32px; padding-left: 40px; padding-bottom: 40px; padding-right: 40px; ">
        
    <div class='matrix' >
        <div>
          <svg width="110" height="110">
            <rect class="color" x="5" y="5" rx="20" ry="20" width="100" height="100"
            style="fill:#feed01;stroke:#9a9a9a;stroke-width:5" />
          </svg>

          <svg width="120" height="110">
            <rect class="color" x="15" y="5" rx="20" ry="20" width="100" height="100"
             style="fill:#f9b234;stroke:#9a9a9a;stroke-width:5" />
          </svg>


          <svg width="120" height="110">
            <rect class="color" x="15" y="5" rx="20" ry="20" width="100" height="100"
            style="fill:#f29200;stroke:#9a9a9a;stroke-width:5" />
          </svg>


          <svg width="120" height="110">
           <rect class="color" x="15" y="5" rx="20" ry="20" width="100" height="100"
            style="fill:#ea5b0c;stroke:#9a9a9a;stroke-width:5" />
          </svg>


        </div>

        <div>
          <svg width="110" height="110">
           <rect class="color" x="5" y="5" rx="20" ry="20" width="100" height="100"
            style="fill:#e40613;stroke:#9a9a9a;stroke-width:5" />
          </svg>

          <svg width="120" height="110">
            <rect class="color" x="15" y="5" rx="20" ry="20" width="100" height="100"
            style="fill:#951b80;stroke:#9a9a9a;stroke-width:5" />
          </svg>


          <svg width="120" height="110">
            <rect class="color" x="15" y="5" rx="20" ry="20" width="100" height="100"
            style="fill:#59358c;stroke:#9a9a9a;stroke-width:5" />
          </svg>


          <svg width="120" height="110">
            <rect class="color" x="15" y="5" rx="20" ry="20" width="100" height="100"
            style="fill:#26348c;stroke:#9a9a9a;stroke-width:5" />
          </svg>
        </div>

        <div>
          <svg width="110" height="110">
            <rect class="color" x="5" y="5" rx="20" ry="20" width="100" height="100"
            style="fill:#01509f;stroke:#9a9a9a;stroke-width:5" />
          </svg>


          <svg width="120" height="110">
            <rect class="color" x="15" y="5" rx="20" ry="20" width="100" height="100"
            style="fill:#0f70b7;stroke:#9a9a9a;stroke-width:5" />
          </svg>


          <svg width="120" height="110">
            <rect class="color" x="15" y="5" rx="20" ry="20" width="100" height="100"
            style="fill:#0c8e36;stroke:#9a9a9a;stroke-width:5" />
          </svg>

          <svg width="120" height="110">
            <rect class="color" x="15" y="5" rx="20" ry="20" width="100" height="100"
            style="fill:#94c120;stroke:#9a9a9a;stroke-width:5" />
          </svg>

        </div>
      </div>
      </head>

      <body>
      <div style="background-color: white; padding-top: 30px; padding-left: 40px; padding-bottom: 20px; padding-right: 40px;  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.15); border-radius: 4px"">
      <div class="q1" style="margin-top: 40px; " >
            <h4>Wählen Sie eine Farbe aus die Sie gar nicht anspricht.  </h4>
      </div>

      <div class="q2"  style="display:none" style="margin-top: 20px">
     
      <h4> Welche Farbe spiegelt am wenigsten <br>
     Ihre Persönlichkeit wider? </h4>
      </div>

      <div class="q3" style="display:none" style="margin-top: 20px; width:480px ">
      <h4>Wenn Sie Ihr Zuhause dekorieren würden, <br>welche Farben würden Sie definitiv 
nicht verwenden?</h4>
 </div>

 <div class="q4" style="display:none" style="margin-top: 20px;">
 <h4>Denken Sie an die Kleidung in Ihrem Schrank. <br>Welche Farben kommen dort
 am seltensten vor?
</div>

<div class="q5" style="display:none" style="margin-top: 20px;">
<h4>Stellen Sie sich vor, Sie könnten nur Gegenstände<br> einer 
 Farbe für den Rest Ihres Lebens verwenden.<br>
  Welche der verbliebenen Farben würden Sie
  <br>ausschließen?</h4>
</div>

<div class="q6" style="display:none" style="margin-top: 20px;">
<h4>Von den Übrig gebliebenen Farben,<br>
 welche Farbe empfinden Sie als am wenigsten 
 <br>beruhigend oder entspannend?</h4>
</div>

<div class="q7" style="display:none" style="margin-top: 20px;">
<h4>Wenn Sie ein Geschenk für sich selbst auswählen <br>
müssten und alle Optionen in den verbleibenden<br>
Farben verfügbar wären, welche Farbe würden <br>
 Sie als letzte wählen?</h4>
</div>

<div class="q8" style="display:none" style="margin-top: 20px;">
<h4>Welche dieser Farben würden Sie in Kunstwerken <br> nicht bevorzugen?</h4>
</div>

<div class="q9" style="display:none" style="margin-top: 20px;">
<h4>Welche der Farbe verbinden sie am <br> wenigsten mit possitiven Emotionen?</h4>
</div>

<div class="q10" style="display:none">
<h4>Bitte wählen Sie unter den verbleibenden Farben <br>
 die jenige aus, die Sie am wenigsten interessiert <br> 
 oder die Sie als langweilig empfinden.</h4>
</div>
<div class="q11" style="display:none">
<h4>Unter den verbleibenden zwei Farben, gibt es eine,<br>
 die Sie im Vergleich zu den anderen beiden 
 <br>als weniger ansprechend empfinden?</h4>
</div>
<div class="q12" style="display:none">
<h4>
Damit wurde die Fabpräferenz aktualisiert.<br>
Bitte klicken Sie auf "Weiter"</h4>
</div>
</div>
</body>


        </div>
        </body>`,  //FRAGE

      afterRender: function (question: any, el: any) {
        const next = document.getElementById("sv-nav-next"); 

        
    
       
      
        if (next) {
          next.hidden = true;
         
        }

        const colors = Array.from(el.getElementsByClassName('color' ));



        const q1 = el.getElementsByClassName('q1')[0];
        const q2 = el.getElementsByClassName('q2')[0];
        const q3 = el.getElementsByClassName('q3')[0];
        const q4 = el.getElementsByClassName('q4')[0];
        const q5 = el.getElementsByClassName('q5')[0];
        const q6 = el.getElementsByClassName('q6')[0];
        const q7 = el.getElementsByClassName('q7')[0];
        const q8 = el.getElementsByClassName('q8')[0];
        const q9 = el.getElementsByClassName('q9')[0];
        const q10 = el.getElementsByClassName('q10')[0];
        const q11 = el.getElementsByClassName('q11')[0];
        const q12 = el.getElementsByClassName('q12')[0];

    
        

        q2.style.display = 'none'

        if(localStorage!= null)                 //LocalStorage leeren falls was drin 
        {
          localStorage.removeItem('colorpick');
          localStorage.removeItem('NoLieblingsFarbe2');
          localStorage.removeItem('NoLieblingsFarbe1');
          localStorage.removeItem('Lieblingsfarbe');

        }

        colors.forEach((color: any) => {
            color.onclick = function () {
                const colorPick = localStorage.getItem('colorpick');
                let current = JSON.parse(colorPick!);

          
          


                if (current && current.length > 10) {
                  return;
                }

                if (color.style.opacity != 0.2) {
                    color.style.opacity = 0.2;

                    if (colorPick) {
                        current.push(color.style.fill);


                    } else {
                        current = [color.style.fill];
                      
                    }
                    localStorage.setItem('colorpick', JSON.stringify(current));
                    switch (current.length) {
                        case 1:
                            q1.style.display = 'none';
                            q2.style.display = 'block';
                        break;
                        case 2:
                            q2.style.display = 'none';
                            q3.style.display = 'block';
                        break;
                        case 3:
                            q3.style.display = 'none';
                            q4.style.display = 'block';
                        break;
                        case 4:
                            q4.style.display = 'none';
                            q5.style.display = 'block';
                        break;
                        case 5:
                            q5.style.display = 'none';
                            q6.style.display = 'block';
                        break;
                        case 6:
                            q6.style.display = 'none';
                            q7.style.display = 'block';
                        break;
                        case 7:
                            q7.style.display = 'none';
                            q8.style.display = 'block';
                        break;
                        case 8:
                            q8.style.display = 'none';
                            q9.style.display = 'block';
                        break;
                        case 9:
                            q9.style.display = 'none';
                            q10.style.display = 'block';
                        break;
                        case 10:
                            q10.style.display = 'none';
                            q11.style.display = 'block';
                        break;
                        case 11:
                            q11.style.display = 'none';
                            q12.style.display = 'block';
                        break;

                        default:
                            break;
                    }
                }

                if (colorPick) {
                  if (current && current.length === 11 && next) {
                    next.hidden = false;
                    localStorage.setItem('NoLieblingsFarbe1', current[0]); // 1. Nicht lieblingsfarbe
                    localStorage.setItem('NoLieblingsFarbe2', current[1]); // 2. Nicht lieblingsfarbe
                  //  console.log('current:', current);
                  //  console.log('colors:',  colors);
                  //  console.log(colorPick)

                    let lastcolor: string;
                    colors.forEach((color : any) => {

                      if (!current.includes(color.style.fill)) {
                        lastcolor = color.style.fill;

                        localStorage.setItem('Lieblingsfarbe', lastcolor);// Lieblingsfarbe
                      }



                    });

                  }
                }
            }
        });



        const onValueChangedCallback = function () {
          //text.value = question.value ? question.value : "";
        }
        const onReadOnlyChangedCallback = function() {
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
      }
    }

    Survey.CustomWidgetCollection.Instance.addCustomWidget(widget, "customtype");
  }
