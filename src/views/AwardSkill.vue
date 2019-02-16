<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="4"><div class="grid-content"></div></el-col>
      <el-col :span="16">
        <Skill></Skill>
        <hr>
        <Award></Award>
      </el-col>
      <el-col :span="4"><div class="grid-content"></div></el-col>
    </el-row>
  </div>
</template>

<script>
  import Award from "../components/modules/Award";
  import Skill from "../components/modules/Skill";

  export default {
    components: {
      Award,
      Skill
    }
  }
</script>