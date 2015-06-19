'use strict';

describe('Service: RnDropdownSortOptions', function () {

  beforeEach(module('angularDemo', 'RnDropdownSortOptionsMock'));

  var RnDropdownSortOptions, MockData;

  beforeEach(inject(function (_RnDropdownSortOptions_, _RnDropdownSortOptionsMock_) {
    RnDropdownSortOptions = _RnDropdownSortOptions_;
    MockData = _RnDropdownSortOptionsMock_
  }));

  it('should filter by Increasing Alphabetical order', function () {
    var option = RnDropdownSortOptions.getSortFunction(true, 'name');
    var filter = option.filterFrom;
    var filterResult = filter(MockData.representatives);

    var name = '';
    for (var y = 0; y < filterResult.length; y++) {
      var result = filterResult[y];
      expect(result.name).toBeGreaterThan(name);
      name = result.name;
    }
  });

  it('should filter by Decreasing Alphabetical order', function () {
    var option = RnDropdownSortOptions.getSortFunction(false, 'name');
    var filter = option.filterFrom;
    var filterResult = filter(MockData.representatives);

    var name = '';
    for (var y = filterResult.length-1; y >= 0; y--) {
      var result = filterResult[y];
      expect(result.name).toBeGreaterThan(name);
      name = result.name;
    }
  });
});

