"use strict";

    function randomDiap(n,m) {
            return Math.floor(Math.random()*(m-n+1))+n;
    }

    function mood(colorsCount) {
        var colors=[ '', 'красный', 'оранжевый', 'жёлтый', 'зелёный', 'голубой', 'синий', 'фиолетовый' ];

        console.log( 'цветов: ' + colorsCount );
        for (var i = 1; i <= colorsCount; i++) {
            var colorsObj = {};
            colorsObj[n] = true;
            do {
                var n=randomDiap(1,7);
            } while (n in colorsObj);
            var colorName=colors[n];
            console.log( colorName );
        }
}
mood(3);
