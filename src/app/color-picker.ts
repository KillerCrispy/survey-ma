
// Refer to the following help topic for details:
// https://surveyjs.io/Documentation/Survey-Creator?id=Create-Custom-Widget
export function initColorPicker(Survey: any) {
    const widget = {
      name: "textwithbutton",
      title: "Text with button",
      iconName: "",
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
    <div class='matrix'>
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

      <div class="q1">
            Klick mal ne Farbe an oder so, kein Plan.
      </div>

      <div class="q2" style="display:none">
           Klick noch ne Farbe an.
      </div>

      <div class="q3" style="display:none">
      10.
 </div>

 <div class="q4" style="display:none">
 9.
</div>

<div class="q5" style="display:none">
8.
</div>

<div class="q6" style="display:none">
7.
</div>

<div class="q7" style="display:none">
6.
</div>

<div class="q8" style="display:none">
5.
</div>

<div class="q9" style="display:none">
4.
</div>

<div class="q10" style="display:none">
3.
</div>
<div class="q11" style="display:none">
2.
</div>
<div class="q12" style="display:none">
1.
</div>


        </div>`,  //FRAGE

      afterRender: function (question: any, el: any) {
        const next = document.getElementById("sv-nav-next");
      // console.log('shit', next);
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
        
        if(localStorage!= null)
        {
          localStorage.clear();
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