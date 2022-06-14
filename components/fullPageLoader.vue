<template>
  <div class="bg-overlay">
    <div class="main-content">
      <img src="@/static/logo.png" alt="" class="logo" />
      <h2>Please wait, we are getting things ready for you...</h2>
    </div>
  </div>
</template>

<script>
export default {
  layout: "EmptyLayout",
};
</script>

<style scoped>
.bg-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99999;
}

.main-content {
  text-align: center;
  padding-inline: 8px;
}

.main-content h2 {
  margin-top: 16px;
  color: white;
}

.logo {
  width: 180px;
  animation: bounce 1.2s infinite;
  /* animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite; */

  /* transform: translateX(-50%); */
}

@keyframes bounce {
  0%,
  100% {
    transform: translateY(-25%);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    transform: translateY(0);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
}

@keyframes pulse {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}
</style>
