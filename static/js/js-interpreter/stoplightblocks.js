//[{
//  "type": "stoplightswitch",
//  "message0": "turn %1 %2 %3",
//  "args0": [
//    {
//      "type": "field_dropdown",
//      "name": "colorlist",
//      "options": [
//        [
//          "red",
//          "R"
//        ],
//        [
//          "green",
//          "G"
//        ],
//        [
//          "yellow",
//          "Y"
//        ]
//      ]
//    },
//    {
//     "type": "field_dropdown",
//      "name": "switch",
//      "options": [
//        [
//          "on",
//          "T"
//        ],
//        [
//          "on",
//          "F"
//       ]
//      ]
//    },
//    {
//      "type": "input_value",
//      "name": "lightno",
//      "check": "Number"
//    }
//  ],
//  "inputsInline": true,
//  "previousStatement": "String",
//  "nextStatement": "String",
//  "colour": 230,
//  "tooltip": "信号機",
//  "helpUrl": "http://"
//}]
//Blockly.JavaScript['stoplightswitch'] = function(block) {
//  var dropdown_colorlist = block.getFieldValue('colorlist');
//  var dropdown_switch = block.getFieldValue('switch');
//  var value_lightno = Blockly.JavaScript.valueToCode(block, 'lightno', Blockly.JavaScript.ORDER_ATOMIC);
// TODO: Assemble JavaScript into code variable.
//  var code = '...;\n';
//  return code;
//};
//ブロック定義コード
//stoplight switch block - turn color on or off
Blockly.Blocks['stoplightswitch'] = {
    init: function () {
        this.appendValueInput("lightno")
            .setCheck("Number")
            .appendField("turn")
            .appendField(new Blockly.FieldDropdown([["red", "R"], ["green", "G"], ["yellow", "Y"]]), "colorlist")
            .appendField(new Blockly.FieldDropdown([["on", "T"], ["off", "F"]]), "switch");
        this.setInputsInline(true);
        this.setPreviousStatement(true, "String");
        this.setNextStatement(true, "String");
        this.setColour(230);
        this.setTooltip("信号機");
        this.setHelpUrl("http://");
    }
};
//ブロックのGenerator
Blockly.JavaScript['stoplightswitch'] = function (block) {
    var dropdown_colorlist = block.getFieldValue('colorlist');
    var dropdown_switch = block.getFieldValue('switch');
    var value_lightno = Blockly.JavaScript.valueToCode(block, 'lightno', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    if (dropdown_colorlist === "R") {
        var color = "red";
    } else if (dropdown_colorlist === "G") {
        var color = "green";
    } else if (dropdown_colorlist === "Y") {
        var color = "yellow";
    }
    if (dropdown_switch === "T") {
        var code = "setLightColor('" + value_lightno + "','" + color + "');";
    } else if (dropdown_switch === "F") {
        var code = "setLightColor('" + value_lightno + "','" + color + "');";
    }
    return code;
};