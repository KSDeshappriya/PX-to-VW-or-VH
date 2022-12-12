
console.log(window.outerWidth);
console.log(window.outerHeight);

console.log(window.screen);

console.log(screen.availWidth)
console.log(screen.availHeight);


console.log(window.innerWidth);
console.log(window.innerHeight);

console.log(screen.width)
console.log(screen.height)

console.log(window.screenX);
console.log(window.screenY);
console.log(document.querySelector('#d2').getAttributeNames())

/*
var all='';
const tags = ['body', 'div', 'p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'i', 'pre', 'code', 'center']

for (var y = 0; y < tags.length; y++) {
    var ts = document.querySelectorAll(tags[y]);
    for (var x = 0; x < ts.length; x++) {
        var atn = ts[x].getAttributeNames();
        for (var z = 0; z < atn.length; z++) {
            all += atn[z] + ', ';
        }
    }
}
console.log(all);
*/

var ele = document.querySelector('#d2');
console.log(document.querySelector('#d2').getAttribute('id'))
console.log(document.querySelector('#d2').getAttribute('class'))


/* get Outer CSS Details */

const isSameDomain = (styleSheet) => {
    if (!styleSheet.href) {
        return true;
    }

    return styleSheet.href.indexOf(window.location.origin) === 0;
};

const isStyleRule = (rule) => rule.type === 1;

const CSSStyleRules = () =>
    [...document.styleSheets].filter(isSameDomain).reduce(
        (finalArr, sheet) =>
            finalArr.concat(
                [...sheet.cssRules].filter(isStyleRule)
            ),
        []
    );
var csr = CSSStyleRules();
console.log(CSSStyleRules());

const cssArrVal = () =>
    CSSStyleRules().reduce(
        (propValArr, rule) => {
        const props = [...rule.style].map((propName) => [
            propName.trim(),
            rule.style.getPropertyValue(propName).trim()
        ]);

        return [...propValArr, ...props];
    }, [])
var cav = cssArrVal();
console.log(cssArrVal());

// try it with 'for'


// try can do it
// 1px = (100 vw / [document.documentElement.clientWidth] px);



console.log(csr[0].selectorText); // x 
console.log('x:- ' + csr.length);
console.log(cav[0][0]); // y, z
console.log(cav[0][1]); // y, z
console.log('y:- ' + cav.length);
console.log('z:- ' + cav[0].length);

