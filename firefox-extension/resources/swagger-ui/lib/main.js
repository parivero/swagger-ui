var widgets = require("sdk/widget");
var data = require("sdk/self").data;
var tabs = require("sdk/tabs");

var widget = widgets.Widget({
  id: "Swagger-UI-link",
  label: "Swagger UI",
  contentURL: data.url("images/logo_small.png"),
  onClick: function() {
    tabs.open(data.url("index.html"));
  }
});
