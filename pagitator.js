'use strict';

// pagesBefore
// pagesAfter

function getNumPages(perPage, numItems) {
  return Math.max(1, Math.ceil(numItems / perPage));
}

function getItemPage(itemNo, itemsPerPage) {
  return Math.floor(itemNo / itemsPerPage);
}

/*
function getItemSegment(curItem, itemsPerSegment, numItems) {
  var set = Math.max(1, Math.ceil(curItem / itemsPerSegment))
    , start
    , end
    , arr = []
    , i
    ;

  start = ((set - 1) * itemsPerSegment) + 1;
  end = Math.min(numItems, start + (itemsPerSegment - 1));

  console.log(curItem, itemsPerSegment, numItems, start, end);

  for (i = start; i <= end; i += 1) {
    arr.push(i);
  }

  return arr;
}
*/

function getPageItemsRange(curPage, itemsPerPage, numItems) {
  if (numItems >= 0) {
    // ignore
  } else {
    numItems = Infinity;
  }

  var start = (Math.max(0, curPage - 1) * itemsPerPage) + 1
    , end = Math.min(numItems, start + (itemsPerPage - 1))
    ;

  return [start, end];
}

function getPageItems(curPage, itemsPerPage, numItems) {
  var range = getPageItemsRange(curPage, itemsPerPage, numItems)
    , arr = []
    , i
    ;

  for (i = range[0]; i <= range[1]; i += 1) {
    arr.push(i);
  }

  return arr;
}



function getPagerRange(curPage, pagerSize, numPages) {
  if (numPages >= 0) {
    // ignore
  } else {
    numPages = Infinity;
  }

  var start = Math.max(1, curPage - 2)
    , end = Math.min(numPages, start + (pagerSize - 1))
    ;

  start = Math.max(1, end - (pagerSize - 1));

  return [start, end];
}

function getPager(curPage, pagerSize, numPages) {
  var range = getPagerRange(curPage, pagerSize, numPages)
    , arr = []
    , i
    ;

  for (i = range[0]; i <= range[1]; i += 1) {
    arr.push(i);
  }

  return arr;
}

/*
function getAdvancedPagerRange(curPage, before, after, total, numPages) {
  var start = Math.max(1, curPage - before)
    , end = Math.min(numPages, start + after)
    ;

  if (!total) {
    total = after;
  }

  start = Math.max(1, end - (total - 1));

  return [start, end];
}
*/


module.exports = {
  getNumPages: getNumPages
, getItemPage: getItemPage

, getPagerRange: getPagerRange
, getPager: getPager

, getPageItemsRange: getPageItemsRange
, getPageItems: getPageItems

//, getItemSegment: getItemSegment
};
