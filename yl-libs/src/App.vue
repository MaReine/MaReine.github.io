<template>
  <router-view/>
</template>

<style lang="scss">
.fl {
  float: left !important;
}

.fr {
  float: right !important;
}

.clearfix:after {
  content: "\20";
  display: block;
  height: 0;
  clear: both;
}

.clearfix {
  *zoom: 1;
}
</style>
