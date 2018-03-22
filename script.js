const app = new Vue({
  el: '#app',
  data: {
    images: []
  },
  methods: {
    upvote: function (img) {
      request('POST', 'vote', {
        imageId: img.imageId,
        type: 'up',
        userId: localStorage.getItem('userId'),
        authToken: localStorage.getItem('authToken')
      }, res => {
        console.log('up', res);
        if (res !== false) img.upvotes = res;
      });
    },
    downvote: function (img) {
      request('POST', 'vote', {
        imageId: img.imageId,
        type: 'down',
        userId: localStorage.getItem('userId'),
        authToken: localStorage.getItem('authToken')
      }, res => {
        console.log('down', res);
        if (res !== false) img.downvotes = res;
      });
    },
    comment: function (img, input) {
      request('POST', 'comment', {
        imageId: img.imageId,
        text: input.value,
        userId: localStorage.getItem('userId'),
        authToken: localStorage.getItem('authToken')
      }, res => {
        console.log('comment', res);
        if (res) {
          img.comments.push({
            userId: localStorage.getItem('userId'),
            text: input.value,
            username: ''
          });

          img.commentBox = false;
          input.value = '';

          this.username(img.comments[img.comments.length - 1]);
          img.commentsAmount++;
        }
      });
    },
    getComments: function (img, amount) {
      request('GET', 'get-comments', {
        imageId: img.imageId,
        amount: amount
      }, res => {
        img.comments = res.map(val => {
          return {
            userId: val.userId,
            text: val.text,
            username: ''
          };
        });

        for (comment of img.comments) {
          this.username(comment);
        }
      });
    },
    username: function (comment) {
      if (sessionStorage.getItem(comment.userId)) {
        comment.username = sessionStorage.getItem(comment.userId);
      } else {
        request('GET', 'get-user', {
          userId: comment.userId
        }, res => {
          sessionStorage.setItem(comment.userId, res.username);
          comment.username = res.username;
        });
      }
    }
  }
});

if (location.search.length > 0) {
  request('GET', 'search', {
    name: location.search.substring(1)
  }, res => {
    app.images = res.map(val => {
      val.commentsAmount = new Number(val.comments);
      val.comments = [];
      val.commentBox = false;
      return val;
    });;
  });
} else {
  request('GET', 'all-images', {}, res => {
    app.images = res.map(val => {
      val.commentsAmount = new Number(val.comments);
      val.comments = [];
      val.commentBox = false;
      return val;
    });
  });
}
