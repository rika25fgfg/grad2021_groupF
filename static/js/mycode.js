Blockly.defineBlocksWithJsonArray(
// <<<<<<< HEAD
//     [{
//       "type": "go_left",
//       "message0": "左へすすむ",
//       "inputsInline": true,
//       "previousStatement": null,
//       "nextStatement": null,
//       "colour": 230,
//       "tooltip": "左にすすむことができます",
//       "helpUrl": ""
//     },
//     {
//       "type": "go_right",
//       "message0": "右へすすむ",
//       "inputsInline": true,
//       "previousStatement": null,
//       "nextStatement": null,
//       "colour": 230,
//       "tooltip": "右にすすむことができます",
//       "helpUrl": ""
//     },
//     {
//       "type": "go_down",
//       "message0": "下へすすむ",
//       "inputsInline": true,
//       "previousStatement": null,
//       "nextStatement": null,
//       "colour": 230,
//       "tooltip": "下にすすむことができます",
//       "helpUrl": ""
//     },
//     {
//       "type": "go_up",
//       "message0": "上へすすむ",
//       "inputsInline": true,
//       "previousStatement": null,
//       "nextStatement": null,
//       "colour": 230,
//       "tooltip": "上にすすむことができます",
//       "helpUrl": ""
//     },
//     {
//       "type": "test",
//       "message0": "ボタンを押したら %1",
//       "args0": [
//           {
//             "type": "input_statement",
//             "name": "NAME"
//           }
//         ],
//        "colour": 230,
//        "tooltip": "",
//        "helpUrl": ""
//     },

//     {
//       "type": "controls_whileuntil",
//       "message0": "%1 %2 実行 %3",
//       "args0": [
//         {
//           "type": "field_variable",
//           "name": "NAME",
//           "variable": "続ける条件を指定して繰り返す"
//         },
//         {
//           "type": "input_value",
//           "name": "NAME"
//         },
//         {
//           "type": "input_statement",
//           "name": "NAME"
//         }
//       ],
//       "previousStatement": null,
//       "nextStatement": null,
//       "colour": 30,
//       "tooltip": "",
//       "helpUrl": ""
//     },

//     {
//         "type": "gokaku",
//         "message0": "合格",
//         "inputsInline": true,
//         "previousStatement": null,
//         "nextStatement": null,
//         "colour": 230,
//         "tooltip": "",
//         "helpUrl": ""
//     },

    
// ]);
    
    
//     Blockly.JavaScript['go_left'] = function(block) {
//         var statements = Blockly.JavaScript.statementToCode(block, 'NAME');
//         // var code = 'console.log("左へすすむ");\n';
//         var code = 'alert("左へすすむ");'
//         return code;
//     };
//     Blockly.JavaScript['go_right'] = function(block) {
//         // var code = 'console.log("右へすすむ");\n';
//         var code = 'alert("右へすすむ");'
//         return code;
//     };
//     Blockly.JavaScript['go_up'] = function(block) {
//         // var code = 'console.log("上へすすむ");\n';
//         var code = 'alert("上へすすむ");'
//         return code;
//     };
//     Blockly.JavaScript['go_down'] = function(block) {
//         // var code = 'console.log("下へすすむ");\n';
//         var code = 'alert("下へすすむ");'
//         return code;
//     };
//     Blockly.JavaScript['test'] = function(block) {
//         var statements = Blockly.JavaScript.statementToCode(block, 'NAME');
//         var code = 'function hoge(){\n' + statements + '\n}\nhoge();';
//         // var code = 'alert();'
//         return code;
//     };
// =======
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
  }
  ]);
Blockly.JavaScript['go_left'] = function (block) {
  var code = 'console.log("左に進む");\n';
  //var statements = Blockly.JavaScript.statementToCode(block, 'NAME');
  //var code = 'alert("");\n'
  return code;
};
Blockly.JavaScript['go_right'] = function (block) {
  var code = 'console.log("右に進む");\n';
  //var statements = Blockly.JavaScript.statementToCode(block, 'NAME');
  //var code = 'alert("");\n'
  return code;
};

Blockly.JavaScript['go_up'] = function (block) {
  var code = 'console.log("上に進む");\n';
  //var statements = Blockly.JavaScript.statementToCode(block, 'NAME');
  //var code = 'alert("");\n'
  return code;
};

Blockly.JavaScript['go_down'] = function (block) {
  var code = 'console.log("下に進む");\n';
  //var warn = '下に進む';
  //alert(warn);
  var statements = Blockly.JavaScript.statementToCode(block, 'NAME');
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

Blockly.JavaScript['controls_if'] = function (block) {
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};

Blockly.JavaScript['controls_ifelse'] = function (block) {
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');
  var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};

Blockly.JavaScript['logic_compare'] = function (block) {
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  var variable_name = Blockly.JavaScript.nameDB_.getName(block.getFieldValue('NAME'), Blockly.Variables.NAME_TYPE);
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['logic_operation'] = function (block) {
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  var variable_name = Blockly.JavaScript.nameDB_.getName(block.getFieldValue('NAME'), Blockly.Variables.NAME_TYPE);
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['logic_negate'] = function (block) {
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['logic_boolean'] = function (block) {
  var variable_name = Blockly.JavaScript.nameDB_.getName(block.getFieldValue('NAME'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

//Blockly.JavaScript['controls_whileuntil'] = function (block) {
  //var variable_name = Blockly.JavaScript.nameDB_.getName(block.getFieldValue('NAME'), Blockly.Variables.NAME_TYPE);
  //var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  //var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');
  // TODO: Assemble JavaScript into code variable.
  //var code = '...;\n';
  //return code;
//};

//Blockly.JavaScript['controls_loop'] = function (block) {
  //var variable_name = Blockly.JavaScript.nameDB_.getName(block.getFieldValue('NAME'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble JavaScript into code variable.
  //var code = '...;\n';
  //return code;
//};

//Blockly.JavaScript['controls_count'] = function (block) {
  //var variable_name = Blockly.JavaScript.nameDB_.getName(block.getFieldValue('NAME'), Blockly.Variables.NAME_TYPE);
  //var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  //var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  //var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  //var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');
  // TODO: Assemble JavaScript into code variable.
  //var code = '...;\n';
  //return code;
//};

//Blockly.JavaScript['pass'] = function (block) {
  // TODO: Assemble JavaScript into code variable.
  //var code = '...;\n';
  //return code;
//};

//Blockly.JavaScript['failure'] = function (block) {
  // TODO: Assemble JavaScript into code variable.
  //var code = '...;\n';
  //return code;
//};
