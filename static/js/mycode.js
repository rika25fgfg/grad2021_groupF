Blockly.defineBlocksWithJsonArray(
    [{
    "type": "go_left",
    "message0": "左に進む",
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": 230,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "go_right",
    "message0": "右に進む",
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": 230,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "go_up",
    "message0": "上に進む",
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": 230,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "go_down",
    "message0": "下に進む",
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": 230,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "test",
    "message0": "ボタンを押したら %1",
    "args0": [
      {
        "type": "input_statement",
        "name": "NAME"
      }
    ],
    "colour": 230,
    "tooltip": "",
    "helpUrl": ""
  }]
);
Blockly.JavaScript['go_left'] = function(block) {
    var code = 'console.log("左に進む");\n';
    //var statements = Blockly.JavaScript.statementToCode(block, 'NAME');
    //var code = 'alert("");\n'
    return code;
  };
   
  Blockly.JavaScript['go_right'] = function(block) {
    var code = 'console.log("右に進む");\n';
    //var statements = Blockly.JavaScript.statementToCode(block, 'NAME');
    //var code = 'alert("");\n'
    return code;
  };
   
  Blockly.JavaScript['go_up'] = function(block) {
    var code = 'console.log("上に進む");\n';
    //var statements = Blockly.JavaScript.statementToCode(block, 'NAME');
    //var code = 'alert("");\n'
    return code;
  };
   
  Blockly.JavaScript['go_down'] = function(block) {
    var code = 'console.log("下に進む");\n';
    //var statements = Blockly.JavaScript.statementToCode(block, 'NAME');
    //var code = 'alert("");\n'
    return code;
  };
  Blockly.JavaScript['test'] = function (block) {
    var statements = Blockly.JavaScript.statementToCode(block, 'NAME');
    //TODO: Assemble JavaScript into code variable.
    var code = 'function hoge(){\n' + statements + '\n}\nhoge();';
    //var code = 'alert("");\n'
    return code;
  };