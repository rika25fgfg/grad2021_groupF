
/** ローカルストレージに保存するときのキー接頭辞 */

var savedBlockPrefix = '/static/assets/';


//* ブロックを保存 */

function saveBlocks() {

    if ('localStorage' in window) {

        var name = null;

        while (!name) {

            name = window.prompt('プログラム名を入力してください');

            if (!name) { return; } // ignore if empty

            if (window.localStorage[savedBlockPrefix + name]) {

                if (!window.confirm(name + ' は存在します。上書きしますか?')) {

                    name = null;

                }

            }

        }

        name = savedBlockPrefix + name;

        var xml = Blockly.Xml.workspaceToDom(workspace);

        alert(Blockly.Xml.domToText(xml));

        const blob = new Blob([Blockly.Xml.domToText(xml)], { type: "text/plain" });

        const link = document.createElement('a');

        link.href = URL.createObjectURL(blob);

        link.download = savedBlockPrefix + 'test.txt';

        link.click();

        //window.localStorage.setItem(name, Blockly.Xml.domToText(xml));

    }

}


//復元

function restoreBlocksFrom(name) {

    const file = document.getElementById('file').files[0];

    //alert(file.size);

    const reader = new FileReader();

    reader.readAsText(file);

    reader.onload = function () { // 読みんこんだ後のコールバック

        const pre = document.getElementById('pre1');

        pre.innerHTML = reader.result;

        //alert("1" + reader.result);

        var xml = Blockly.Xml.textToDom(reader.result);//window.localStorage[name]);

        //alert("2" + xml);

        workspace.clear();

        Blockly.Xml.domToWorkspace(xml, workspace);

    };




}


function cancelRestoreBlocks() {

    var modal = document.getElementById('restoreModal');

    modal.style.display = 'none';

}


function pressCancelRestoreBlocks(event) {

    var modal = document.getElementById('restoreModal');

    if (event.target == modal) {

        cancelRestoreBlocks();

    }

}



for (var i = 1; i < 10; i++) {
    (function (j) {
        Blockly.Blocks['digit' + j] = {
            init: function (block) {
                this.jsonInit({
                    "type": "digit" + j,
                    "message0": j.toString(),
                    "output": "Number",
                    "colour": j * 40,
                    "tooltip": "",
                    "helpUrl": ""
                })
            }
        }
        Blockly.JavaScript['digit' + j] = function (block) {
            return [j.toString(), Blockly.JavaScript.ORDER_NONE]
        }
    })(i)
}

// たし算
Blockly.Blocks.addition = {
    init: function (block) {
        this.jsonInit({
            "type": "addition",
            "message0": "%1 + %2",
            "args0": [
                {
                    "type": "input_value",
                    "name": "left_value",
                    "check": "Number"
                },
                {
                    "type": "input_value",
                    "name": "right_value",
                    "check": "Number"
                }
            ],
            "inputsInline": true,
            "output": "Number",
            "colour": 0,
            "tooltip": "2つのすうじをたします",
            "helpUrl": ""
        })
    }
}
Blockly.JavaScript.addition = function (block) {
    var left_value = Blockly.JavaScript.valueToCode(block, 'left_value', Blockly.JavaScript.ORDER_NONE) || 0
    var right_value = Blockly.JavaScript.valueToCode(block, 'right_value', Blockly.JavaScript.ORDER_NONE) || 0
    return [left_value + ' + ' + right_value, Blockly.JavaScript.ORDER_NONE]
}

// ひき算
Blockly.Blocks.subtraction = {
    init: function (block) {
        this.jsonInit({
            "type": "subtraction",
            "message0": "%1 ー %2",
            "args0": [
                {
                    "type": "input_value",
                    "name": "left_value",
                    "check": "Number"
                },
                {
                    "type": "input_value",
                    "name": "right_value",
                    "check": "Number"
                }
            ],
            "inputsInline": true,
            "output": "Number",
            "colour": 0,
            "tooltip": "2つの数字を引きます",
            "helpUrl": ""
        })
    }
}
Blockly.JavaScript.subtraction = function (block) {
    var left_value = Blockly.JavaScript.valueToCode(block, 'left_value', Blockly.JavaScript.ORDER_NONE) || 0
    var right_value = Blockly.JavaScript.valueToCode(block, 'right_value', Blockly.JavaScript.ORDER_NONE) || 0
    return [left_value + ' - ' + right_value, Blockly.JavaScript.ORDER_NONE]
}

// 掛け算
Blockly.Blocks.multiplication = {
    init: function (block) {
        this.jsonInit({
            "type": "multiplication",
            "message0": "%1 × %2",
            "args0": [
                {
                    "type": "input_value",
                    "name": "left_value",
                    "check": "Number"
                },
                {
                    "type": "input_value",
                    "name": "right_value",
                    "check": "Number"
                }
            ],
            "inputsInline": true,
            "output": "Number",
            "colour": 0,
            "tooltip": "2つの数字を掛けます",
            "helpUrl": ""
        })
    }
}
Blockly.JavaScript.multiplication = function (block) {
    var left_value = Blockly.JavaScript.valueToCode(block, 'left_value', Blockly.JavaScript.ORDER_NONE) || 0
    var right_value = Blockly.JavaScript.valueToCode(block, 'right_value', Blockly.JavaScript.ORDER_NONE) || 0
    return [left_value + ' * ' + right_value, Blockly.JavaScript.ORDER_NONE]
}


// 割り算
Blockly.Blocks.division = {
    init: function (block) {
        this.jsonInit({
            "type": "division",
            "message0": "%1 ÷ %2",
            "args0": [
                {
                    "type": "input_value",
                    "name": "left_value",
                    "check": "Number"
                },
                {
                    "type": "input_value",
                    "name": "right_value",
                    "check": "Number"
                }
            ],
            "inputsInline": true,
            "output": "Number",
            "colour": 0,
            "tooltip": "2つの数字を割ります",
            "helpUrl": ""
        })
    }
}
Blockly.JavaScript.division = function (block) {
    var left_value = Blockly.JavaScript.valueToCode(block, 'left_value', Blockly.JavaScript.ORDER_NONE) || 0
    var right_value = Blockly.JavaScript.valueToCode(block, 'right_value', Blockly.JavaScript.ORDER_NONE) || 0
    return [left_value + ' / ' + right_value, Blockly.JavaScript.ORDER_NONE]
}


Blockly.Blocks.display = {
    init: function (block) {
        this.jsonInit({
            "type": "display",
            "message0": "%1 の計算結果",
            "args0": [
                {
                    "type": "input_value",
                    "name": "value"
                }
            ],
            "colour": 230,
            "tooltip": "",
            "helpUrl": ""
        })
    }
}
Blockly.JavaScript.display = function (block) {
    var value = Blockly.JavaScript.valueToCode(block, 'value', Blockly.JavaScript.ORDER_NONE) || 0
    return "var e = document.getElementById('dialog');e.textContent = '計算結果は ' + (" + value + ") + ' です！';e.style.display = ''"
}
var workspace = Blockly.inject('canvas', {
    toolbox: document.getElementById('toolbox'),
    trashcan: true,
    zoom: { startScale: 1.5 }
})
document.getElementById('run').addEventListener('click', function () {
    try {
        eval(Blockly.JavaScript.workspaceToCode(workspace))
    } catch (e) {
        alert(e)
    }
})
document.getElementById('dialog').addEventListener('click', function (e) {
    e.target.style.display = 'none'
})

