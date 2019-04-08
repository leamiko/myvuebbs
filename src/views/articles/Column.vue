<template>
  <div class="blog-container">
    <div class="blog-pages">
      <!-- 用于渲染『文章列表』和『文章内容』 -->
      <router-view/>

      <div class="col-md-3 main-col pull-left">
        <div class="panel panel-default corner-radius">
          <div class="panel-body text-center topic-author-box blog-info">
            <div class="image blog-cover">
              <router-link :to="`/${userName}`">
                <img :src="userAvatar" class="avatar-112 avatar img-thumbnail">
              </router-link>
            </div>
            <div class="blog-name">
              <h4>
                <router-link :to="`/${userName}`">{{ userName }} 的专栏</router-link>
              </h4>
            </div>
            <hr>
            <router-link :to="`/${userName}`">
              <li class="list-group-item">
                <i class="text-md fa fa-list-ul"></i>
                专栏文章（{{ articleNum }}）
              </li>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// 引入 mapState 辅助函数
import { mapState } from "vuex";

export default {
  name: "Column",
  data() {
    return {
      userName: "",
      userAvatar: "",
      articles: []
    };
  },
  computed: {
    // // 将指定的状态混入计算属性
    // ...mapState(["user", "articles"]),
    // // 基于 user 返回用户名
    // userName() {
    //   return this.user && this.user.name;
    // },
    // // 基于 user 返回用户头像
    // userAvatar() {
    //   return this.user && this.user.avatar;
    // },
    ...mapState(["user"]),
    // 基于 articles 返回文章数量
    articleNum() {
      return this.articles ? this.articles.length : 0;
    }
  },

  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.setDataByParams(to.params);
    });
  },

  watch: {
    $route(to) {
      // 在子页面之间相互切换时，通过 to.params 参数设置用户和文章数据
      this.setDataByParams(to.params);
    }
  },

  methods: {
    setDataByParams(params) {
      const user = params.user;
      const articleId = params.articleId;

      const article = this.$store.getters.getArticleById(articleId);

      if (article) {
        this.userName = article.uname;
        this.userAvatar = article.uavater;
        this.articles = this.$store.getters.getArticlesByUid(
          null,
          article.uname
        );
      } else if (user) {
        const articles = this.$store.getters.getArticlesByUid(null, user);
        // 存在至少一篇用户文章时，设置用户数据为第一篇文章的用户信息
        if (articles.length) {
          this.userName = articles[0].uname;
          this.userAvatar = articles[0].uavatar;
        } else if (this.user) {
          // 不存在用户文章时，设置用户数据为当前用户的用户信息
          this.userName = this.user.name;
          this.userAvatar = this.user.avatar;
        }

        this.articles = articles;
      }
    }
  }
};
</script>

<style scoped>
.blog-container {
  margin-top: 20px;
}
</style>