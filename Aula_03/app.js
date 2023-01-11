(function () {
    var DiasSemana;
    (function (DiasSemana) {
        DiasSemana[DiasSemana["Domingo"] = 0] = "Domingo";
        DiasSemana[DiasSemana["Segunda_feira"] = 1] = "Segunda_feira";
        DiasSemana[DiasSemana["Terca_feira"] = 2] = "Terca_feira";
        DiasSemana[DiasSemana["Quarta_feira"] = 3] = "Quarta_feira";
        DiasSemana[DiasSemana["Quinta_feira"] = 4] = "Quinta_feira";
        DiasSemana[DiasSemana["Sexta_feira"] = 5] = "Sexta_feira";
        DiasSemana[DiasSemana["Sabado"] = 6] = "Sabado";
    })(DiasSemana || (DiasSemana = {}));
    console.log(DiasSemana.Domingo);
})();
