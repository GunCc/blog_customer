<template>
  <nuxt-link to="/article/123" class="article-item flex">
    <el-image
      style="width: 156px; height: 104px"
      src="https://img-blog.csdnimg.cn/img_convert/bd512bb531b66fd0e7901f8861094ca2.jpeg?x-oss-process=image/format,png"
      fit="cover"
    />
    <div class="article-item-info flex-1 ml-4 flex flex-col">
      <div class="article-item-title text-lg font-bold">YOLOv5全面解析教程④：目标检测模型精确度评估</div>
      <div class="article-item-desc text-sm flex-1">
        指标评估（一些重要的定义）IOU(Intersection Over Union)
        基于Jaccard索引，用于评估两个边界框之间的重叠程度。它需要一个真实回归框 (a ground
        truth bounding归 pr...
      </div>
      <div class="article-item-set">
        日期：12312312312
      </div>
    </div>
  </nuxt-link>
</template>
<script>
export default {};
</script>
<style lang="scss"></style>
