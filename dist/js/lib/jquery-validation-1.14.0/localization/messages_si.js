!function(e){"function"==typeof define&&define.amd?define(["jquery","../jquery.validate"],e):e(jQuery)}(function(e){e.extend(e.validator.messages,{required:"To polje je obvezno.",remote:"Vpis v tem polju ni v pravi obliki.",email:"Prosimo, vnesite pravi email naslov.",url:"Prosimo, vnesite pravi URL.",date:"Prosimo, vnesite pravi datum.",dateISO:"Prosimo, vnesite pravi datum (ISO).",number:"Prosimo, vnesite pravo številko.",digits:"Prosimo, vnesite samo številke.",creditcard:"Prosimo, vnesite pravo številko kreditne kartice.",equalTo:"Prosimo, ponovno vnesite enako vsebino.",extension:"Prosimo, vnesite vsebino z pravo končnico.",maxlength:e.validator.format("Prosimo, da ne vnašate več kot {0} znakov."),minlength:e.validator.format("Prosimo, vnesite vsaj {0} znakov."),rangelength:e.validator.format("Prosimo, vnesite od {0} do {1} znakov."),range:e.validator.format("Prosimo, vnesite vrednost med {0} in {1}."),max:e.validator.format("Prosimo, vnesite vrednost manjšo ali enako {0}."),min:e.validator.format("Prosimo, vnesite vrednost večjo ali enako {0}.")})});