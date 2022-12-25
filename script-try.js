let config = {
    'strokeWidth': 2, // Adjust width of stroke
    'strokeColor': '#F7C429'
}
let svg = document.querySelector('#my-svg')
let myAnimation = new LazyLinePainter(svg, config)
myAnimation.paint()