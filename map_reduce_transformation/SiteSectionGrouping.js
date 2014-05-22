var SiteSectionGrouping = function () {

};



SiteSectionGrouping.prototype.map = function () {
  var sections = [
    {key: 'shop_image', regex: new RegExp('/shop/.+/images/')},
    {key: 'vendors_image', regex: new RegExp('/vendors/.+/images/')},
    {key: 'posts_image', regex: new RegExp('/posts/.+/images/')},
    {key: 'rw_images', regex: new RegExp('/real-weddings/.+/images/')},
    {key: 'shop', regex: new RegExp('shop')},
    {key: 'realweddings', regex: new RegExp('real-weddings')},
    {key: 'weddinginspiration', regex: new RegExp('wedding-inspiration')}
    {key: 'other', regex: new RegExp('.*')}
  ]

  for (var i in sections) {
    if (sections[i].regex.test(this.path)) {
      emit(sections[i].key, {count: 1});
      break;
    }
  }


};


SiteSectionGrouping.prototype.reduce = function (key, values) {
  var reduced = {count: 0};
  for (var i in values) {
    reduced.count += values[i].count;
  }
  return reduced;
};