Blockly.defineBlocksWithJsonArray(
  [{
    "type": "go_left",
    "message0": "左へすすむ",
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": 230,
    "tooltip": "左にすすむことができます",
    "helpUrl": ""
  },
  {
    "type": "go_right",
    "message0": "右へすすむ",
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": 230,
    "tooltip": "右にすすむことができます",
    "helpUrl": ""
  },
  {
    "type": "go_down",
    "message0": "下へすすむ",
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": 230,
    "tooltip": "下にすすむことができます",
    "helpUrl": ""
  },
  {
    "type": "go_up",
    "message0": "上へすすむ",
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": 230,
    "tooltip": "上にすすむことができます",
    "helpUrl": ""
  }]
  );
  


  Blockly.JavaScript['go_left'] = function(block) {
    // var code = 'console.log("左へすすむ");\n';
    // return code;
    var statements = Blockly.JavaScript.statementToCode(block, 'NAME');
    var code = 'console.log("左へすすむ");\n';
    // var code = 'alert();'
    return code;
  };
  Blockly.JavaScript['go_right'] = function(block) {
    var code = 'console.log("右へすすむ");\n';
    return code;
  };
  Blockly.JavaScript['go_up'] = function(block) {
    var code = 'console.log("上へすすむ");\n';
    return code;
  };
  Blockly.JavaScript['go_down'] = function(block) {
    var code = 'console.log("下へすすむ");\n';
    return code;
  };


  