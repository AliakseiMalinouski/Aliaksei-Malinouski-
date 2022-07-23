"use strict"

function squareRoots(a,b,c) {
        const d=b*b-4*a*c; // дискриминант
        if (a == 0) {
                const x1 = (-c / b);
                return [x1];
            }
        if ( d<0 )
            return []; // нет корней
        if ( d==0 )
            return [ -b/(2*a) ]; // один корень
        if (a!==0) {
            const x1=(-b+Math.sqrt(d))/(2*a);
            const x2 = (-b - Math.sqrt(d)) / (2 * a); // два корня
            return [x1, x2];
        }
    }

    function ttt() {
        const a=Number(prompt('Введите a'));
        const b=Number(prompt('Введите b'));
        const c=Number(prompt('Введите c'));
        const roots=squareRoots(a,b,c);

        if ( !roots.length )
            alert('корней нет!');
        else if ( roots.length==1 )
            alert('один корень: '+roots[0]);
        else
            alert('два корня: ' + roots[0] + ' и ' + roots[1]);
    }