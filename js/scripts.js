$(document).ready(function() {
  $("#language").submit(function(event) {
    event.preventDefault();
    $("#cppres, #csharpres, #gores, #javares, #jsres, #phpres, #pythonres, #rubyres, #perlres, #rustres, #swiftres").empty();
    var cpp = 0;
    var csharp = 0;
    var go = 0;
    var java = 0;
    var javascript = 0;
    var perl = 0;
    var php = 0;
    var python = 0;
    var ruby = 0;
    var rust = 0;
    var swift = 0;

    var object = $("#object").val();
    if (object === "yes") {
      cpp += 1;
      csharp += 1;
      java += 1;
      javascript += 1;
      perl += 1;
      php += 1;
      python += 1;
      ruby += 1;
      rust +=1;
      swift +=1;
    }
    else {
      go += 1;
    }

    var functional = $("#functional").val();
    if (functional === "yes") {
      cpp += 1;
      csharp += 1;
      java += 1;
      javascript += 1;
      perl += 1;
      php += 1;
      python += 1;
      ruby += 1;
      rust +=1;
      swift +=1;
    }
    else {
      go += 1;
    }    

    var procedural = $("#procedural").val();
    if (procedural === "yes") {
      cpp += 1;
      csharp += 1;
      go += 1;
      java += 1;
      javascript += 1;
      perl += 1;
      php += 1;
      python += 1;
      rust +=1;
      swift +=1;
    }
    else {
      ruby += 1;
    }

    var generic = $("#generic").val();
    if (generic === "yes") {
      cpp += 1;
      csharp += 1;
      go += 1;
      java += 1;
      perl += 1;
      python += 1;
      rust +=1;
      swift +=1;
    }
    else {
      javascript += 1;
      php += 1;
      ruby +=1;
    }
    
    var reflective = $("#reflective").val();
    if (reflective === "yes") {
      csharp += 1;
      go += 1;
      java += 1;
      javascript += 1;
      perl += 1;
      php += 1;
      python += 1;
      ruby += 1;
      swift +=1;
    }
    else {
      cpp += 1;
      rust += 1;
    }

    var eventDriven = $("#eventDriven").val();
    if (eventDriven === "yes") {
      csharp += 1;
      go += 1;
      java += 1;
      javascript += 1;
      python += 1;
      rust +=1;
      swift +=1;
    }
    else {
      cpp += 1;
      perl += 1;
      php += 1;
      ruby += 1;
    }

    var standardized = $("#standardized").val();
    if (standardized === "yes") {
      cpp += 1;
      csharp += 1;
      go += 1;
      java += 1;
      javascript += 1;
      php += 1;
      python += 1;
      ruby += 1;
    }
    else {
      perl += 1;
      rust += 1;
      swift += 1;
    }
    
    if (cpp >=  6) {
      $("#cppres").text("C++");
    }
    if (csharp >= 6) {
      $("#csharpres").text("C#");
    }
    if (go >= 6) {
      $("#gores").text("Go");
    }
    if (java >= 6) {
      $("#javares").text("Java");
    }
    if (javascript >= 6) {
      $("#jsres").text("JavaScript");
    }
    if (php >= 6) {
      $("#phpres").text("PHP");
    }
    if (python >= 6) {
      $("#pythonres").text("Python");
    }
    if (ruby >= 6) {
      $("#rubyres").text("Ruby");
    }
    if (perl >= 6) {
      $("#perlres").text("Perl");
    }
    if (rust >= 6) {
      $("#rustres").text("Rust");
    }
    if (swift >= 6) {
      $("#swiftres").text("Swift");
    }
    console.log(csharp);
    console.log(cpp);
    console.log(go);
    console.log(java);
    console.log(javascript);
    console.log(php);
    console.log(python);
    console.log(ruby);
    console.log(perl);
    console.log(rust);
    console.log(swift);
  });
});