Blockly.defineBlocksWithJsonArray(
[{
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
Blockly.JavaScript['test'] = function(block) {
  var statements = Blockly.JavaScript.statementToCode(block, 'NAME');
  // TODO: Assemble JavaScript into code variable.
  var code = 'function hoge(){\n' + statements + '\n}\n';
  //var code = 'alert("");\n'
  return code;
};