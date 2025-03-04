import { Component } from '@angular/core';
import { SurveyCreatorModel } from "survey-creator-core";
import "survey-core/survey.i18n.js";
import "survey-creator-core/survey-creator-core.i18n.js";
import "survey-core/defaultV2.css";
import "survey-creator-core/survey-creator-core.css";
import { SurveyCreatorModule } from "survey-creator-angular";

@Component({
  selector: 'app-s-creator',
  imports: [SurveyCreatorModule],
  templateUrl: './s-creator.component.html',
  styleUrl: './s-creator.component.scss'
})

export class SCreatorComponent {
  model: SurveyCreatorModel | undefined;

  ngOnInit() {
    const options = {
      showLogicTab: true
    };
    const creator = new SurveyCreatorModel(options);
    const localStorageKey = "survey-json-example";

    creator.saveSurveyFunc = (saveNo: any, callback: any) => {
      window.localStorage.setItem(localStorageKey, creator.text);
      callback(saveNo, true);

      // If you use a web service:
      // saveSurveyJson(
      //     "https://your-web-service.com/",
      //     creator.JSON,
      //     saveNo,
      //     callback
      // );
    }

    const defaultJSON = {
      pages: [{
        name: 'page1',
        elements: [{
          type: 'text',
          name: "q1"
        }]
      }]
    };

    creator.text = window.localStorage.getItem(localStorageKey) || JSON.stringify(defaultJSON);

    // If you use a web service:
    // function saveSurveyJson(url, json, saveNo, callback) {
    //   fetch(url, {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json;charset=UTF-8'
    //     },
    //     body: JSON.stringify(json)
    //   })
    //   .then(response => {
    //     if (response.ok) {
    //       callback(saveNo, true);
    //     } else {
    //       callback(saveNo, false);
    //     }
    //   })
    //   .catch(error => {
    //     callback(saveNo, false);
    //   });
    // }
    this.model = creator;
  }
}