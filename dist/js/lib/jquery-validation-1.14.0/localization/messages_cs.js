!function(e){"function"==typeof define&&define.amd?define(["jquery","../jquery.validate"],e):e(jQuery)}(function(e){e.extend(e.validator.messages,{required:"Tento údaj je povinný.",remote:"Prosím, opravte tento údaj.",email:"Prosím, zadejte platný e-mail.",url:"Prosím, zadejte platné URL.",date:"Prosím, zadejte platné datum.",dateISO:"Prosím, zadejte platné datum (ISO).",number:"Prosím, zadejte číslo.",digits:"Prosím, zadávejte pouze číslice.",creditcard:"Prosím, zadejte číslo kreditní karty.",equalTo:"Prosím, zadejte znovu stejnou hodnotu.",extension:"Prosím, zadejte soubor se správnou příponou.",maxlength:e.validator.format("Prosím, zadejte nejvíce {0} znaků."),minlength:e.validator.format("Prosím, zadejte nejméně {0} znaků."),rangelength:e.validator.format("Prosím, zadejte od {0} do {1} znaků."),range:e.validator.format("Prosím, zadejte hodnotu od {0} do {1}."),max:e.validator.format("Prosím, zadejte hodnotu menší nebo rovnu {0}."),min:e.validator.format("Prosím, zadejte hodnotu větší nebo rovnu {0}.")})});