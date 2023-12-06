<template>
  <div class="container mt-5">
      <div class="card">
          <div class="card-header">
            <h4>Create News</h4>
          </div>
        <div class="card-body">
          <div class="mb-3">
            <label for="">Title</label>
            <input type="text" class="form-control" v-model="model.news.title"/>
          </div>
          <div class="mb-3">
            <label for="">Text</label>
            <textarea class="form-control" v-model="model.news.text"></textarea>
          </div>
          <div class="mb-3">
            <label for="">Slug</label>
            <input type="text" class="form-control" v-model="model.news.slug"/>
          </div>
          <div class="mb-3">
            <button type="button" @click="saveNews" class="btn btn-primary"> Submit</button>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "newsCreate",
  data(){
    return {
      model:{
        news:{
          title:'',
          text:'',
          slug:'',
        }
      }
    }
  },
}
</script>

<style scoped>

</style>