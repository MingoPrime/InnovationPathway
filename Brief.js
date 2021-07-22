Survey
    .StylesManager
    .applyTheme("modern");

    var json = {
        questions: [
            {
                name: "name",
                type: "text",
                title: "Please enter your name:",
                placeHolder: "Jon Snow",
                isRequired: true,
                autoComplete: "name"
            }, {
                name: "birthdate",
                type: "text",
                inputType: "date",
                title: "Your birthdate:",
                isRequired: true,
                autoComplete: "bdate"
            }, {
                name: "color",
                type: "text",
                inputType: "color",
                title: "Your favorite color:"
            }, {
                name: "email",
                type: "text",
                inputType: "email",
                title: "Your e-mail:",
                placeHolder: "jon.snow@nightwatch.org",
                isRequired: true,
                autoComplete: "email",
                validators: [
                    {
                        type: "email"
                    }
                ]
            }
        ]
    };
    

window.survey = new Survey.Model(json);

survey
    .onComplete
    .add(function (sender) {
        document
            .querySelector('#surveyResult')
            .textContent = "Result JSON:\n" + JSON.stringify(sender.data, null, 3);
    });

survey.data = {
    satisfaction: 2
};

survey.render("surveyElement");