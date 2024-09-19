<template>
  <div>
    <ReactTest/>
    <NuxtRouteAnnouncer />
    <NuxtWelcome />
  </div>
</template>

<script setup>
import { applyPureReactInVue, applyReactInVue } from 'veaury';
import ClientTestReact from "./react_app/ClientTestReact.jsx";

const ReactTest = applyPureReactInVue(ClientTestReact)
</script>
