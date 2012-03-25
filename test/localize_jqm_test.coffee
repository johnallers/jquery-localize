localizableTag = (tag, localizeKey, attributes) ->
  t = $("<#{tag}>").attr("rel", "localize[#{localizeKey}]")
  if attributes.text?
    t.text(attributes.text)
    delete attributes.text
  if attributes.val?
    t.val(attributes.val)
    delete attributes.val
  t.attr(k,v) for k, v of attributes
  t

module "Localize Child Element Using Selector Usage"

setup ->
  @testOpts = language: "ja", pathPrefix: "lang", childSelector: ".ui-btn-text"

test "jqm button child element substitution", ->
  t = localizableTag("a", "basic", text: "basic fail").attr("data-role", "button")
  t.button();
  t.localize("test", @testOpts)
  child = t.find(".ui-btn-text");
  equals child.text(), "basic success"

test "jqm button w/o child element substitution", ->
  t = localizableTag("button", "basic", text: "basic fail").attr("data-role", "button")
  t.button();
  t.localize("test", @testOpts)
  equals t.text(), "basic success"

