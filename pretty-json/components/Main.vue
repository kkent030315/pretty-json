<template>
  <main class="inner-wrapper">
    <div class="content-block">
      <div class="left">
        <div class="block horizontal-connected">
          <div class="editor-header">Input</div>
          <div id="editor-left">
            {"widget": {"debug": "on", "window": { "title": "Sample Konfabulator
            Widget","name": "main_window","width": 500,"height": 500 },"image":
            { "src": "Images/Sun.png","name": "sun1", "hOffset": 250,"vOffset":
            250,"alignment": "center" }, "text": {"data": "Click Here","size":
            36,"style": "bold","name": "text1","hOffset": 250,"vOffset": 100,
            "alignment": "center","onMouseUp": "sun1.opacity = (sun1.opacity /
            100) * 90;" } }}
          </div>
        </div>
      </div>
      <div class="right">
        <div class="block horizontal-connected">
          <div class="editor-header">Output</div>
          <div id="editor-right"></div>
        </div>
      </div>
      <button
        class="center-button"
        data-tippy-content="Beautifize!"
        v-tippy
        v-on:click="parse"
      >
        <i class="fas fa-arrow-right"></i>
      </button>
    </div>
  </main>
</template>

<script>
export default {
  mounted: function () {
    this.init();
  },
  methods: {
    init: function () {
      this.beautify = ace.require("ace/ext/beautify");
      this.editor_left = ace.edit("editor-left");
      this.editor_right = ace.edit("editor-right");
      this.init_ace(this.editor_left);
      this.init_ace(this.editor_right);
    },
    init_ace: function (x) {
      x.setTheme("ace/theme/monokai");
      x.session.setMode("ace/mode/json");
    },
    parse: function () {
      this.editor_right.setValue(this.editor_left.getValue());
      this.beatify(this.editor_right);
    },
    beatify: function (x) {
      let val = x.session.getValue();
      let lines = val.split(/\n/);
      lines[0] = lines[0].trim();
      x.session.setValue(js_beautify(lines.join("\n")));
    },
  },
};
</script>

<style>
</style>