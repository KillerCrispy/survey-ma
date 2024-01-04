export const survey2=
{
    "title": "ERINNERBARKEIT VON INFORMATIONSVISUALISIERUNGEN",
    "logoPosition": "right",
    "pages": [
     {
      "name": "page1",
      "elements": [
       {
        "type": "html",
        "name": "Erklärung",
        "title": "Erklärung",
        html: `<div style="background-color: white; padding-top: 32px; padding-left: 40px; padding-bottom: 40px; padding-right: 40px; box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.15); border-radius: 4px">
        <body>
        <p><strong>Willkommen zum zweiten Teil unserer Umfrage.</strong> Wir schätzen Ihre fortgesetzte Beteiligung und bedanken uns für Ihr Engagement.</p>
        <p>Dieser Abschnitt baut auf den Informationen auf, die Sie im ersten Teil bereitgestellt haben. Die Fragen, die nun folgen, zielen darauf ab, <strong>unsere Forschung weiter zu vertiefen und ein umfassenderes Verständnis der untersuchten Thematik zu erlangen</strong>. Es ist wichtig, dass Sie sich Zeit nehmen, <strong>jede Frage sorgfältig zu lesen und zu beantworten</strong>. Ihre Einsichten sind entscheidend für den Erfolg dieser Studie.</p>
        <p>Bitte beachten Sie, dass die Umfrage erst mit <strong>Ihrer Teilnahme an diesem zweiten Teil als abgeschlossen</strong> gilt. Vielen Dank für Ihre <strong>wertvolle Unterstützung</strong>.</p>
          
          </body>
       `}
      ]
     },
     {
      "name": "page2",
      "elements": [
       {
        "type": "text",
        "name": "LastName2",
        "title": "Nachname:",
        "isRequired": true
       },
       {
        "type": "text",
        "name": "FirstName2",
        "title": "Vorname:",
        "isRequired": true
       },
      
       {
        "type": "text",
        "name": "E-Mail_2",
        "title": "Email:",
        "isRequired": true,
        "inputType": "email"
       },
       {
        "type": "comment",
        "name": "answ_allg_stories",
        "title": "Reproduzieren Sie bitte woran Sie sich erinnern können:",
        "isRequired": true
       },
       {
        "type": "boolean",
        "name": "bool_allg_names",
        "title": "Können Sie sich noch an die Namen der Personen erinnern?"
       },
       {
        "type": "text",
        "name": "answ_allg_names",
        "visibleIf": "{bool_allg_names} = true",
        "title": "Bitte reproduzieren Sie die Namen der Personen an die Sie sich erinnern können."
       },
       {
        "type": "comment",
        "name": "allg_2",
        "title": "Welche andern Informationen sind Ihnen noch im Gedächtnis geblieben?"
       }
      ]
     },
     {
      "name": "page3",
      "elements": [
       {
        "type": "image",
        "name": "question5",
        "title": "Folgende Personen waren Teil der Geschichten",
        "hideNumber": true,
        "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=d44adf88-de35-424b-a52b-c3eb88d5b8a2",
        "imageFit": "cover",
        "imageHeight": "auto",
        "imageWidth": "100%"
       },
       {
        "type": "boolean",
        "name": "bool_music_mostSong",
        "title": "Können Sie sich noch daran erinnern wer die meisten Lieblingssongs besessen hat ?"
       },
       {
        "type": "text",
        "name": "answ_music_mostSong",
        "visibleIf": "{bool_music_mostSong} = true",
        "title": "Wer hatte die meisten Lieblingssongs?"
       },
       {
        "type": "boolean",
        "name": "bool_music_noTechno",
        "title": "Können Sie sich noch daran erinnern wer kein Techno gehört hat ?"
       },
       {
        "type": "text",
        "name": "answ_music_noTechno",
        "visibleIf": "{bool_music_noTechno} = true",
        "title": "Wer hat kein Techno gehört?"
       },
       {
        "type": "boolean",
        "name": "bool_music_mostGenre",
        "title": "Können Sie sich noch daran erinnern welches Gerne am meisten vertreten war?"
       },
       {
        "type": "text",
        "name": "answ_music_mostGenre",
        "visibleIf": "{bool_music_mostGenre} = true",
        "title": "Welches Gerne war am meisten vertreten ?"
       },
       {
        "type": "boolean",
        "name": "bool_music_mostRock",
        "title": "Können Sie sich daran erinnern wer am meisten Rock gehört hat ?"
       },
       {
        "type": "text",
        "name": "ans_music_mostRock",
        "visibleIf": "{bool_music_mostRock} = true",
        "title": "Wer hat am meisten Rock gehört ?"
       },
       {
        "type": "boolean",
        "name": "bool_music_leastPop",
        "title": "Können Sie sich noch daran erinnern wer am wenigsten Pop gehört hat ?"
       },
       {
        "type": "text",
        "name": "answ_music_leastPop",
        "visibleIf": "{bool_music_leastPop} = true",
        "title": "Wer hat am wenigsten Pop gehört ?"
       }
      ],
      "title": "MUSIKGESCHMACK"
     },
     {
      "name": "page4",
      "elements": [
       {
        "type": "image",
        "name": "question1",
        "title": "Folgende Personen waren Teil der Geschichten",
        "hideNumber": true,
        "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=d44adf88-de35-424b-a52b-c3eb88d5b8a2",
        "imageFit": "cover",
        "imageHeight": "auto",
        "imageWidth": "100%"
       },
       {
        "type": "boolean",
        "name": "bool_reisen_most",
        "title": "Können Sie sich noch daran erinnern wer am meisten verreist ist?"
       },
       {
        "type": "text",
        "name": "answ_reisen_most",
        "visibleIf": "{bool_reisen_most} = true",
        "title": "Wer ist am meisten verreist?"
       },
       {
        "type": "boolean",
        "name": "bool_reisen_neverAfrica",
        "title": "Können Sie sich noch daran erinnern wer noch nie in Afrika war?"
       },
       {
        "type": "text",
        "name": "answ_reisen_neverAfrica",
        "visibleIf": "{bool_reisen_neverAfrica} = true",
        "title": "Wer war noch nie in Afrika?"
       },
       {
        "type": "boolean",
        "name": "bool_reisen_mostContinent",
        "title": "Können Sie sich noch daran erinnern welcher Kontinent am meisten besucht wurde?"
       },
       {
        "type": "text",
        "name": "answ_reisen_mostContinent",
        "visibleIf": "{bool_reisen_mostContinent} = true",
        "title": "Welcher Kontinent wurde am meisten besucht?"
       },
       {
        "type": "boolean",
        "name": "bool_reisen_neverAsia",
        "title": "Können Sie sich daran erinnern wer noch nie in Asien war?"
       },
       {
        "type": "text",
        "name": "answ_reisen_neverAsia",
        "visibleIf": "{bool_reisen_neverAsia} = true",
        "title": "Wer war noch nie in Asien?"
       },
       {
        "type": "boolean",
        "name": "bool_reisen_more3NA",
        "title": "Können Sie sich noch daran erinnern wer mehr als drei mal in Nord Amerika war?"
       },
       {
        "type": "text",
        "name": "answ_reisen_more3NA",
        "visibleIf": "{bool_reisen_more3NA} = true",
        "title": "Wer war bereits mehr als drei mal in Nord Amerika?"
       }
      ],
      "title": "REISELUST"
     },
     {
      "name": "page5",
      "elements": [
       {
        "type": "image",
        "name": "question2",
        "title": "Folgende Personen waren Teil der Geschichten",
        "hideNumber": true,
        "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=d44adf88-de35-424b-a52b-c3eb88d5b8a2",
        "imageFit": "cover",
        "imageHeight": "auto",
        "imageWidth": "100%"
       },
       {
        "type": "boolean",
        "name": "bool_book_most",
        "title": "Können Sie sich noch daran erinnern wer die meisten Bücher besessen hat ?"
       },
       {
        "type": "text",
        "name": "answ_book_most",
        "visibleIf": "{bool_book_most} = true",
        "title": "Wer hat die meisten Bücher besessen?"
       },
       {
        "type": "boolean",
        "name": "bool_book_noSachbuch",
        "title": "Können Sie sich noch daran erinnern wer keine Sachbücher besessen hat ?"
       },
       {
        "type": "text",
        "name": "answ_book_noSachbuch",
        "visibleIf": "{bool_book_noSachbuch} = true",
        "title": "Wer hat keine Sachbücher besessen?"
       },
       {
        "type": "boolean",
        "name": "bool_book_mostGenre",
        "title": "Können Sie sich noch daran erinnern welches Gerne am meisten vertreten war ?"
       },
       {
        "type": "text",
        "name": "answ_book_mostGenre",
        "visibleIf": "{bool_book_mostGenre} = true",
        "title": "Welches Genre war am meisten vertreten?"
       },
       {
        "type": "boolean",
        "name": "bool_book_leastKrimi",
        "title": "Können Sie sich daran erinnern wer die wenigsten Krimis gelesen hat ?"
       },
       {
        "type": "text",
        "name": "answ_book_leastKrimi",
        "visibleIf": "{bool_book_leastKrimi} = true",
        "title": "Wer hat die wenigsten Krimis gelesen?"
       },
       {
        "type": "boolean",
        "name": "bool_book_mostSachbuch",
        "title": "Können Sie sich noch daran erinnern wer die meisten Sachbücher besessen hat ?"
       },
       {
        "type": "text",
        "name": "answ_book_mostSachbuch",
        "visibleIf": "{bool_book_mostSachbuch} = true",
        "title": "Wer hat die meisten Sachbücher?"
       }
      ],
      "title": "BÜCHERSAMMLUNG"
     },
     {
      "name": "page6",
      "elements": [
       {
        "type": "html",
        "name": "question3",
        "html": "\Ich möchte mich herzlich bei Ihnen für Ihre Teilnahme und die Zeit bedanken, die Sie dieser Umfrage gewidmet haben. Ihr Beitrag ist für den Erfolg meiner Studie von großer Bedeutung. Vielen Dank für Ihre wertvolle Unterstützung.\\n\n\n\n\n\n"
       }
      ],
      "title": "DANKE FÜR DIE TEILNAHME"
     }
    ],
    "pagePrevText": "Zurück",
    "pageNextText": "Weiter ",
   }