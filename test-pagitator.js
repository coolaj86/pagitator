var pagitator = require('./pagitator')
  , _ = require('lodash')
  , pagerTest
  , itemsTest
  ;

pagerTest = [
  { input: [1, 5, 7]
  , result: [1, 2, 3, 4, 5]
  }
, { input: [2, 5, 7]
  , result: [1, 2, 3, 4, 5]
  }
, { input: [3, 5, 7]
  , result: [1, 2, 3, 4, 5]
  }
, { input: [4, 5, 7]
  , result: [2, 3, 4, 5, 6]
  }
, { input: [5, 5, 7]
  , result: [3, 4, 5, 6, 7]
  }
, { input: [6, 5, 7]
  , result: [3, 4, 5, 6, 7]
  }
, { input: [7, 5, 7]
  , result: [3, 4, 5, 6, 7]
  }


, { input: [1, 5, 2]
  , result: [1, 2]
  }
, { input: [2, 5, 2]
  , result: [1, 2]
  }


, { input: [1, 5, 3]
  , result: [1, 2, 3]
  }
, { input: [2, 5, 3]
  , result: [1, 2, 3]
  }
, { input: [3, 5, 3]
  , result: [1, 2, 3]
  }
];

itemsTest = [
  { input: [1, 5, 7]
  , result: [1, 2, 3, 4, 5]
  }
, { input: [2, 5, 7]
  , result: [6, 7]
  }
, { input: [3, 5, 7]
  , result: []
  }


, { input: [5, 3, 25]
  , result: [13, 14, 15]
  }
, { input: [6, 3, 25]
  , result: [16, 17, 18]
  }
];

pagerTest.forEach(function (data/*, j*/) {
  var result = pagitator.getPager.apply(null, data.input)
    ;

  if (!_.isEqual(result, data.result)) {
    throw new Error(
      JSON.stringify(data.input) + ' not equal: '
    + JSON.stringify(result)
    + ' ' + JSON.stringify(data.result)
    );
  }
});

console.log('PASS');

itemsTest.forEach(function (data/*, j*/) {
  var result = pagitator.getPageItems.apply(null, data.input)
    ;

  if (!_.isEqual(result, data.result)) {
    throw new Error(
      JSON.stringify(data.input) + ' not equal: '
    + JSON.stringify(result)
    + ' ' + JSON.stringify(data.result)
    );
  }
});

console.log('PASS');
