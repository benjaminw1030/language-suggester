$(document).ready(function() {
  $("#language").submit(function(event) {
    $(".program").hide();
    event.preventDefault();
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
      $("#cppres").show();
    }
    if (csharp >= 6) {
      $("#csharpres").show();
    }
    if (go >= 6) {
      $("#gores").show();
    }
    if (java >= 6) {
      $("#javares").show();
    }
    if (javascript >= 6) {
      $("#jsres").show();
    }
    if (php >= 6) {
      $("#phpres").show();
    }
    if (python >= 6) {
      $("#pythonres").show();
    }
    if (ruby >= 6) {
      $("#rubyres").show();
    }
    if (perl >= 6) {
      $("#perlres").show();
    }
    if (rust >= 6) {
      $("#rustres").show();
    }
    if (swift >= 6) {
      $("#swiftres").show();
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