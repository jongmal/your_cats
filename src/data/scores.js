const scores = {
  2: {
    1: {
      1: 0, 
      2: 0, 
      3: 10, 
      4: 5, 
      5: 7, 
      6: 0, 
      7: 6, 
      8: 5, 
      9: 6,
    },
    2: {
      1: 3, 
      2: 3, 
      3: 5, 
      4: 5, 
      5: 6, 
      6: 0, 
      7: 7, 
      8: 0, 
      9: 8,
    },
    3: {
      1: 10, 
      2: 10, 
      3: 0, 
      4: 0, 
      5: 0, 
      6: 10, 
      7: 0, 
      8: 10, 
      9: 0,
    },
    4: {
      1: 5, 
      2: 4, 
      3: 0, 
      4: 1, 
      5: 0, 
      6: 5, 
      7: 0, 
      8: 0, 
      9: 0,
    },
  },
  3: {
    1: {
      1: 2, 
      2: 2, 
      3: 5, 
      4: 4, 
      5: 4, 
      6: 0, 
      7: 3, 
      8: 0, 
      9: 6,
    },
    2: {
      1: 4, 
      2: 5, 
      3: 8, 
      4: 6, 
      5: 5, 
      6: 3, 
      7: 2, 
      8: 3, 
      9: 6,
    },
    3: {
      1: 7, 
      2: 6, 
      3: 0, 
      4: 6, 
      5: 4, 
      6: 8, 
      7: 8, 
      8: 10, 
      9: 2,
    },
    4: {
      1: 3, 
      2: 3, 
      3: 0, 
      4: 0, 
      5: 4, 
      6: 5, 
      7: 3, 
      8: 3, 
      9: 2,
    },
  },
  4: {
    1: {
      1: 2, 
      2: 2, 
      3: 8, 
      4: 2, 
      5: 4, 
      6: 0, 
      7: 6, 
      8: 5, 
      9: 6,
    },
    2: {
      1: 3, 
      2: 3, 
      3: 5, 
      4: 5, 
      5: 6, 
      6: 0, 
      7: 7, 
      8: 0, 
      9: 8,
    },
    3: {
      1: 10, 
      2: 10, 
      3: 0, 
      4: 0, 
      5: 0, 
      6: 10, 
      7: 0, 
      8: 10, 
      9: 0,
    },
    4: {
      1: 5, 
      2: 4, 
      3: 0, 
      4: 1, 
      5: 0, 
      6: 5, 
      7: 0, 
      8: 0, 
      9: 0,
    },
  },
  5: {
    1: {
      1: 2, 
      2: 4, 
      3: 2, 
      4: 2, 
      5: 4, 
      6: 2, 
      7: 10, 
      8: 2, 
      9: 2,
    },
    2: {
      1: 2, 
      2: 4, 
      3: 2, 
      4: 4, 
      5: 4, 
      6: 2, 
      7: 2, 
      8: 2, 
      9: 4,
    },
    3: {
      1: 7, 
      2: 4, 
      3: 2, 
      4: 8, 
      5: 4, 
      6: 8, 
      7: 2, 
      8: 10, 
      9: 2,
    },
    4: {
      1: 5, 
      2: 4, 
      3: 10, 
      4: 2, 
      5: 4, 
      6: 4, 
      7: 2, 
      8: 2, 
      9: 8,
    },
  },
  7: {
    1: {
      1: 0, 2: 0, 3: 0, 4: 0, 5: 10, 6: 10, 7: 4, 8: 4, 9: 10,
    },
    2: {
      1: 4, 2: 4, 3: 10, 4: 7, 5: 4, 6: 4, 7: 0, 8: 0, 9: 7,
    },
    3: {
      1: 7, 2: 10, 3: 4, 4: 4, 5: 7, 6: 7, 7: 10, 8: 7, 9: 4,
    },
    4: {
      1: 10, 2: 7, 3: 7, 4: 10, 5: 0, 6: 0, 7: 7, 8: 10, 9: 0,
    },
  },
  8: {
    1: {
      1: 7, 2: 7, 3: 10, 4: 10, 5: 0, 6: 0, 7: 4, 8: 4, 9: 4,
    },
    2: {
      1: 0, 2: 0, 3: 0, 4: 0, 5: 10, 6: 10, 7: 0, 8: 0, 9: 7,
    },
    3: {
      1: 10, 2: 10, 3: 4, 4: 4, 5: 7, 6: 7, 7: 10, 8: 10, 9: 0,
    },
    4: {
      1: 4, 2: 4, 3: 7, 4: 7, 5: 4, 6: 4, 7: 7, 8: 7, 9: 10,
    },
  },
  9: {
    1: {
      1: 0, 2: 10, 3: 7, 4: 4, 5: 10, 6: 7, 7: 10, 8: 10, 9: 4,
    },
    2: {
      1: 7, 2: 4, 3: 0, 4: 0, 5: 4, 6: 10, 7: 4, 8: 4, 9: 10,
    },
    3: {
      1: 10, 2: 7, 3: 7, 4: 7, 5: 0, 6: 4, 7: 7, 8: 7, 9: 0,
    },
    4: {
      1: 4, 2: 0, 3: 10, 4: 10, 5: 7, 6: 0, 7: 0, 8: 0, 9: 7,
    },
  },
  10: {
    1: {
      1: 3, 2: 3, 3: 3, 4: 3, 5: 0, 6: 0, 7: 0, 8: 0, 9: 3,
    },
    2: {
      1: 3, 2: 0, 3: 3, 4: 3, 5: 0, 6: 0, 7: 3, 8: 3, 9: 0,
    },
    3: {
      1: 0, 2: 0, 3: 0, 4: 0, 5: 3, 6: 3, 7: 3, 8: 3, 9: 0,
    },
    4: {
      1: 0, 2: 3, 3: 0, 4: 0, 5: 3, 6: 3, 7: 0, 8: 0, 9: 3,
    },
  },
  12: {
    1: {
      1: 7, 2: 0, 3: 10, 4: 10, 5: 4, 6: 4, 7: 4, 8: 0, 9: 0,
    },
    2: {
      1: 4, 2: 7, 3: 0, 4: 7, 5: 7, 6: 7, 7: 10, 8: 10, 9: 0,
    },
    3: {
      1: 10, 2: 10, 3: 7, 4: 4, 5: 0, 6: 0, 7: 0, 8: 4, 9: 10,
    },
    4: {
      1: 0, 2: 4, 3: 4, 4: 0, 5: 10, 6: 10, 7: 7, 8: 7, 9: 7,
    },
  },
  13: {
    1: {
      1: 10, 2: 0, 3: 10, 4: 10, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0,
    },
    2: {
      1: 7, 2: 0, 3: 0, 4: 0, 5: 10, 6: 7, 7: 7, 8: 10, 9: 10,
    },
    3: {
      1: 0, 2: 7, 3: 0, 4: 0, 5: 7, 6: 10, 7: 0, 8: 0, 9: 7,
    },
    4: {
      1: 0, 2: 10, 3: 7, 4: 7, 5: 0, 6: 0, 7: 10, 8: 7, 9: 0,
    },
  },
  14: {
    1: {
      1: 7, 2: 0, 3: 0, 4: 4, 5: 4, 6: 10, 7: 10, 8: 10, 9: 10,
    },
    2: {
      1: 4, 2: 10, 3: 4, 4: 0, 5: 7, 6: 4, 7: 7, 8: 4, 9: 7,
    },
    3: {
      1: 0, 2: 7, 3: 10, 4: 10, 5: 0, 6: 0, 7: 4, 8: 7, 9: 0,
    },
    4: {
      1: 10, 2: 4, 3: 7, 4: 7, 5: 10, 6: 7, 7: 0, 8: 0, 9: 4,
    },
  },
  15: {
    1: {
      1: 10, 2: 0, 3: 10, 4: 7, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0,
    },
    2: {
      1: 0, 2: 7, 3: 7, 4: 0, 5: 10, 6: 0, 7: 0, 8: 0, 9: 7,
    },
    3: {
      1: 7, 2: 10, 3: 0, 4: 0, 5: 7, 6: 10, 7: 10, 8: 7, 9: 10,
    },
    4: {
      1: 0, 2: 0, 3: 0, 4: 10, 5: 0, 6: 7, 7: 7, 8: 10, 9: 0,
    },
  },
  16: {
    1: {
      1: 0, 2: 10, 3: 7, 4: 0, 5: 0, 6: 7, 7: 10, 8: 10, 9: 7,
    },
    2: {
      1: 7, 2: 0, 3: 0, 4: 7, 5: 7, 6: 10, 7: 0, 8: 7, 9: 10,
    },
    3: {
      1: 10, 2: 7, 3: 10, 4: 0, 5: 10, 6: 0, 7: 7, 8: 0, 9: 0,
    },
    4: {
      1: 0, 2: 0, 3: 0, 4: 10, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0,
    },
  },
  17: {
    1: {
      1: 0, 2: 10, 3: 0, 4: 7, 5: 10, 6: 10, 7: 10, 8: 0, 9: 0,
    },
    2: {
      1: 10, 2: 0, 3: 7, 4: 10, 5: 0, 6: 0, 7: 0, 8: 7, 9: 7,
    },
    3: {
      1: 7, 2: 0, 3: 10, 4: 0, 5: 0, 6: 7, 7: 0, 8: 0, 9: 10,
    },
    4: {
      1: 0, 2: 7, 3: 0, 4: 0, 5: 7, 6: 0, 7: 7, 8: 10, 9: 0,
    },
  },
};
export default scores;
