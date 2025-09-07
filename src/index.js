module.exports = function toReadable(x) {
  const y = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
    'ten',
    'eleven',
    'twelve',
    'thirteen',
    'fourteen',
    'fifteen',
    'sixteen',
    'seventeen',
    'eighteen',
    'nineteen',
  ];

  const z = {
    20: 'twenty',
    30: 'thirty',
    40: 'forty',
    50: 'fifty',
    60: 'sixty',
    70: 'seventy',
    80: 'eighty',
    90: 'ninety',
  };

  if (x >= 0 && x <= 19) {
    return y[x];
  }

  if (x in z) {
    return z[x];
  }

  if (x >= 21 && x <= 99) {
    const q = Math.floor(x / 10) * 10;
    const w = x % 10;
    let e = '';
    if (q in z) {
      e += `${z[q]} `;
    }
    if (w >= 0 && w <= 19) {
      e += y[w];
    }
    return e.trim();
  }

  if (x >= 100 && x <= 999) {
    const u = Math.floor(x / 100);
    const o = x % 100;
    let v = '';

    if (u >= 1 && u <= 9) {
      v += `${y[u]} hundred`;
    }

    if (o > 0) {
      v += ' ';
      if (o <= 19) {
        v += y[o];
      } else if (o in z) {
        v += z[o];
      } else if (o >= 21 && o <= 99) {
        const q = Math.floor(o / 10) * 10;
        const w = o % 10;
        let e = '';
        if (q in z) {
          e += `${z[q]} `;
        }
        if (w >= 0 && w <= 19) {
          e += y[w];
        }
        v += e.trim();
      }
    }

    return v.trim();
  }

  return 'Number out of range';
};
