<template>
<div>
  <div class="card">
    <div class="card-header">
      <h4>
        News
        <RouterLink to="/news/create" class="btn btn-primary float-end">Add News</RouterLink>
      </h4>
    </div>
    <div class="card-body">
      <table class="table table-bordered">
        <thead>
        <tr>
          <td>ID</td>
          <td>Title</td>
          <td>Text</td>
          <td>Slug</td>
          <td>Created At</td>
          <td>Action</td>
        </tr>
        </thead>
        <tbody v-if="this.news.length > 0 ">
          <tr v-for="(singleNews, index) in this.news" :key="index">
            <td>{{singleNews.id}}</td>
            <td>{{singleNews.title}}</td>
            <td v-html="singleNews.text"></td>
            <td>{{singleNews.slug}}</td>
            <td>{{singleNews.created_at}}</td>
            <td>
              <RouterLink to="" class="btn btn-warning">Edit</RouterLink>
            </td>
          </tr>
        </tbody>
        <tbody v-else>
          <tr>
            <td colspan="7">Loading...</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>
</template>
<script>
import axios from 'axios'
  export default {
    name:'news',
    data() {
      return {
        news: []
      }
    },
    mounted() {
       this.getNews();
    },
    methods: {
      getNews(){
        axios.get('http://localhost:8000/api/getData?page=1').then(res =>{
          this.news = res.data.data
        });
      }
    },
  }
</script>