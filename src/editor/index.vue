<script setup lang="ts">
import EditorHeader from './components/Header/index.vue'
import EditorLeftAside from './components/LeftAside/index.vue'
import EditorRightPanel from './components/RightPanel/index.vue'
import EditorSimulator from './components/SimulatorEditor/index.vue'
</script>

<template>
  <t-layout>
    <t-header>
      <EditorHeader />
    </t-header>

    <t-layout>
      <t-aside>
        <EditorLeftAside />
      </t-aside>

      <t-layout>
        <t-content>
          <EditorSimulator />
        </t-content>
        <t-footer>Copyright @ 2019-{{ new Date().getFullYear() }} Simon Luo. All Rights Reserved</t-footer>
      </t-layout>

      <t-aside>
        <EditorRightPanel />
      </t-aside>
    </t-layout>
  </t-layout>
</template>

<style scoped>

</style>
