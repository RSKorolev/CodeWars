function quadrant(x, y) {
  switch (true) {
    case x > 0 && y > 0: return 1
    case x < 0 && y > 0: return 2
    case x < 0 && y < 0: return 3
    case x > 0 && y < 0: return 4

  }
}

console.log(quadrant(-1, 2)); //2


