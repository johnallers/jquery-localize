(function() {
  var localizableTag;

  localizableTag = function(tag, localizeKey, attributes) {
    var k, t, v;
    t = $("<" + tag + ">").attr("rel", "localize[" + localizeKey + "]");
    if (attributes.text != null) {
      t.text(attributes.text);
      delete attributes.text;
    }
    if (attributes.val != null) {
      t.val(attributes.val);
      delete attributes.val;
    }
    for (k in attributes) {
      v = attributes[k];
      t.attr(k, v);
    }
    return t;
  };

  module("Localize Child Element Using Selector Usage");

  setup(function() {
    return this.testOpts = {
      language: "ja",
      pathPrefix: "lang",
      childSelector: ".ui-btn-text"
    };
  });

  test("jqm button child element substitution", function() {
    var child, t;
    t = localizableTag("a", "basic", {
      text: "basic fail"
    }).attr("data-role", "button");
    t.button();
    t.localize("test", this.testOpts);
    child = t.find(".ui-btn-text");
    return equals(child.text(), "basic success");
  });

  test("jqm button w/o child element substitution", function() {
    var t;
    t = localizableTag("button", "basic", {
      text: "basic fail"
    }).attr("data-role", "button");
    t.button();
    t.localize("test", this.testOpts);
    return equals(t.text(), "basic success");
  });

}).call(this);
