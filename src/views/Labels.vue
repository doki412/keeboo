<template>
  <div>
    <Layout>
      <div class="tags">
        <router-link
          class="tag"
          :to="`/labels/edit/${tag.id}`"
          v-for="tag in tags"
          :key="tag.id"
        >
          <span>{{ tag.name }}</span> <Icon name="right" />
        </router-link>
      </div>
      <div class="createTag-wrapper">
        <Button class="createTag" @click="createTag">新建标签</Button>
      </div>
    </Layout>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component
export default class Labels extends Vue {
  tags = window.tagList;
  createTag() {
    const tagName = window.prompt("请输入标签名");
    if (tagName) {
      window.createTag(tagName) 
    }
  }
}
</script>

<style lang="scss" scoped>
.tags {
  background-color: white;
  font-size: 16px;
  padding-left: 16px;
  > .tag {
    min-height: 44px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #e6e6e6;
  }
  svg {
    color: #222;
    margin-right: 16px;
    width: 20px;
    height: 20px;
  }
}
.createTag {
  background: #767676;
  color: white;
  border-radius: 4px;
  border: none;
  height: 40px;
  padding: 0 16px;
  &-wrapper {
    text-align: center;
    padding: 16px;
    margin-top: 44-16px;
  }
}
</style>