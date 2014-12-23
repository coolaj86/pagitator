pagitator the paginator
=========

A collection of a few functions that help answer the all-too-commmon questions surrounding pagination.

Questions like:


How many pages are there...
-----

... if I have 127 articles and 15 summaries per page?

```javascript
Math.ceil(127 / 15);
```

```javascript
var numPages = pagitator.getNumPages(127 / 15);
```

Which page an item is on...
-----

... for item 15 where there are 6 items per page

```javascript
Math.floor(15 / 6);
```

```javascript
var pageNo = pagitator.getItemPage(127 / 15);
```

Which pages are selectable...
----

... from page 2 when displaying 5 pages per pager?

```javascript
var pager = pagitator.getPagerRange(2, 5, getNumPages(40, 6));
```

... from page 2 when displaying 5 pages, but only 3 pages worth of items?

```javascript
var pager = pagitator.getPagerRange(2, 5, 3);
```

Which items are on which page...
----

... if we're looking at page 4, there are 12 summaries per page, and a total of 40 summaries?

```javascript
numItems = 40;

// page starts at this number
start = ((4 - 1) * 12) + 1;                         // 37

// page ends at this number
end = Math.min(numItems, start + (12 - 1));         // 40
```

```javascript
var range = paginator.getPageItemsRange(4, 12, 20);
```
