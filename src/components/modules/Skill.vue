<template>
  <div>
    <h1>Skills</h1>
    <div v-for="skill in skills" :key="skill.id" class="skills">
      <h3>{{ skill.category }}</h3>
      <ul class="skill-list">
        <li v-for="content in skill.contents" :key="content.id">
          {{ content }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'Skill',
    computed: mapGetters({
      skills: 'getSkills'
    })
  }
</script>

<style scoped>
  .skills {
    text-align: left;
  }

  h3 {
    border-bottom: 1px solid black;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  ul li {
    display: inline-block;
    margin: 0 0 .3em 1em;
    padding: 0;
  }
  ul li {
    position: relative;
    display: inline-block;
    height: 30px;
    line-height: 30px;
    padding: 0 1em;
    margin: 0.5em 1em;
    background-color: #3498db;
    border-radius: 0 3px 3px 0;
    color: #fff;
    font-size: 13px;
    text-decoration: none;
    -webkit-transition: .2s;
    transition: .2s;
  }
  ul li::before {
    position: absolute;
    top: 0;
    left: -15px;
    content: '';
    width: 0;
    height: 0;
    border-color: transparent #3498db transparent transparent;
    border-style: solid;
    border-width: 15px 15px 15px 0;
    -webkit-transition: .2s;
    transition: .2s;
  }
  ul li::after {
    position: absolute;
    top: 50%;
    left: 0;
    z-index: 2;
    display: block;
    content: '';
    width: 6px;
    height: 6px;
    margin-top: -3px;
    background-color: #fff;
    border-radius: 100%;
  }
  ul li span {
    display: block;
    max-width: 100px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  ul li:hover {
    background-color: #555;
    color: #fff;
  }
  ul li:hover::before {
    border-right-color: #555;
  }
</style>
