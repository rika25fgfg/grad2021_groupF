Blockly.defineBlocksWithJsonArray(
[{
  "type": "sample",
  "lastDummyAlign0": "RIGHT",
  "message0": "ボタンが押された",
  "nextStatement": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
}]
);
Blockly.JavaScript['sample'] = function(block) {
  var statements = Blockly.JavaScript.statementToCode(block, 'NAME');
  // TODO: Assemble JavaScript into code variable.
  var code = 'function hoge(){\n ...,\n}\n';
  //var code = 'alert("");\n'
  return code;
};