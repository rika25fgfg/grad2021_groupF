const workspace = Blockly.inject(
  'blocklyDiv',
  {
    toolbox: document.getElementById('toolbox'),
    grid: {
      spacing: 18,
      length: 3,
      colour: '#ccc',
      snap: true,
    },
    trashcan: true,
    zoom: {
      controls: true,
      wheel: true,
      startScale: 1.0,
      maxScale: 3,
      minScale: 0.3,
      scaleSpeed: 1.2,
    },
  }
);

function showCode() {
  Blockly.JavaScript.INFINITE_LOOP_TRAP = null;
  const pre = document.getElementById('jsCode');
  pre.innerHTML = Blockly.JavaScript.workspaceToCode(workspace);
}

document.getElementById('showCode').addEventListener('click', showCode, false);
