// 文章数据
const articles = [
  { id: 1, title: 'AI探索：最佳落地应用场景', link: 'https://sspai.com/post/87668', cover: 'https://picsum.photos/300/180?random=1', summary: '探索AI在实际生活和工作中的最佳应用场景。', views: '2.1万', tags: ['AI', '应用'], date: '2024-05-01' },
  { id: 2, title: 'AI节点式接入：搭建批量生图SOP工程', link: 'https://sspai.com/post/88220', cover: 'https://picsum.photos/300/180?random=2', summary: '如何通过节点式接入，批量生成高质量图片。', views: '1.8万', tags: ['AI', '工程'], date: '2024-04-28' },
  { id: 3, title: '高效ChatGPT交流指南：提示词设计的专业技巧', link: 'https://sspai.com/post/89311', cover: 'https://picsum.photos/300/180?random=3', summary: '掌握提示词设计，让ChatGPT更懂你。', views: '1.5万', tags: ['ChatGPT', '提示词'], date: '2024-04-20' },
  { id: 4, title: '高效ChatGPT交流指南：GPTs搭建的全面教程', link: 'https://sspai.com/post/89855', cover: 'https://picsum.photos/300/180?random=4', summary: '手把手教你搭建属于自己的GPTs。', views: '1.3万', tags: ['ChatGPT', 'GPTs'], date: '2024-04-18' },
  { id: 5, title: 'GPTs的"窗口定向"策略：优化使用体验', link: 'https://sspai.com/post/89880', cover: 'https://picsum.photos/300/180?random=5', summary: '提升GPTs使用体验的窗口定向策略。', views: '1.1万', tags: ['GPTs', '优化'], date: '2024-04-15' },
  { id: 6, title: '千万不要直接用AI，真正帮你高效完成工作的是工作流', link: 'https://sspai.com/post/90517', cover: 'https://picsum.photos/300/180?random=6', summary: '高效工作离不开科学的AI工作流。', views: '1.0万', tags: ['AI', '工作流'], date: '2024-04-10' },
  { id: 7, title: '让你在职场中晋升的秘密：具备"打草稿"能力', link: 'https://sspai.com/post/87800', cover: 'https://picsum.photos/300/180?random=7', summary: '职场晋升的关键能力——打草稿。', views: '9500', tags: ['职场', '能力'], date: '2024-04-08' },
  { id: 8, title: '从零到AI高手：用OpenAl APl极速打造智能应用！', link: 'https://sspai.com/post/90523', cover: 'https://picsum.photos/300/180?random=8', summary: '用OpenAI API快速开发智能应用。', views: '9000', tags: ['AI', '开发'], date: '2024-04-05' },
  { id: 9, title: '怕被裁？三大软技能让你稳住岗位！', link: 'https://sspai.com/post/91976', cover: 'https://picsum.photos/300/180?random=9', summary: '提升软技能，职场更稳健。', views: '8500', tags: ['职场', '软技能'], date: '2024-04-02' },
  { id: 10, title: '如何判断AI的输出是否正确？三个办法搞定！', link: 'https://sspai.com/post/91977', cover: 'https://picsum.photos/300/180?random=10', summary: '三招教你判断AI输出的正确性。', views: '8000', tags: ['AI', '判断'], date: '2024-03-30' },
  { id: 11, title: '2024年我离不开的三个效率工具', link: 'https://sspai.com/post/92281', cover: 'https://picsum.photos/300/180?random=11', summary: '年度效率工具推荐，助你高效每一天。', views: '7800', tags: ['效率', '工具'], date: '2024-03-28' },
  { id: 12, title: '普通人如何抓住Al红利？提效+赚钱两不误', link: 'https://sspai.com/post/92544', cover: 'https://picsum.photos/300/180?random=12', summary: '普通人也能抓住AI红利，实现提效与赚钱。', views: '7500', tags: ['AI', '红利'], date: '2024-03-25' },
  { id: 13, title: '应届生的我如何拿到高薪\'入场券\'？', link: 'https://sspai.com/post/92545', cover: 'https://picsum.photos/300/180?random=13', summary: '应届生高薪入场券的获取秘籍。', views: '7000', tags: ['应届生', '高薪'], date: '2024-03-22' },
  { id: 14, title: '刚入职要学会\'脏活累活\'抢着做', link: 'https://sspai.com/post/93438', cover: 'https://picsum.photos/300/180?random=14', summary: '新员工如何快速成长？主动做"脏活累活"。', views: '6800', tags: ['职场', '成长'], date: '2024-03-20' },
  { id: 15, title: '风口上的新职业：AI训练师的崛起与未来', link: 'https://sspai.com/post/93828', cover: 'https://picsum.photos/300/180?random=15', summary: 'AI训练师职业发展前景分析。', views: '6500', tags: ['AI', '训练师'], date: '2024-03-18' },
  { id: 16, title: '你确定AI真的帮你提效了吗？', link: 'https://sspai.com/post/94146', cover: 'https://picsum.photos/300/180?random=16', summary: '反思AI提效的真实效果。', views: '6000', tags: ['AI', '效率'], date: '2024-03-15' },
  { id: 17, title: 'AI时代下设计师作业模式的变化', link: 'https://sspai.com/post/94469', cover: 'https://picsum.photos/300/180?random=17', summary: 'AI如何改变设计师的工作方式。', views: '5800', tags: ['AI', '设计'], date: '2024-03-12' }
];

// 渲染精选文章（前4篇）
function renderFeatured() {
  const wrapper = document.querySelector('.featured-swiper .swiper-wrapper');
  if (!wrapper) return;
  wrapper.innerHTML = '';
  articles.slice(0, 4).forEach(article => {
    wrapper.innerHTML += `
      <div class="swiper-slide featured-card">
        <a href="${article.link}" target="_blank" rel="noopener">
          <img src="${article.cover}" alt="封面" class="featured-cover">
          <div class="featured-info">
            <h3>${article.title}</h3>
            <p>${article.summary}</p>
          </div>
        </a>
      </div>
    `;
  });
}

// 渲染文章管理列表
function renderList() {
  const list = document.querySelector('.article-list');
  if (!list) return;
  // 保留表头
  list.innerHTML = `
    <div class="list-header">
      <span>标题</span>
      <span>全网阅读量</span>
      <span>标签</span>
      <span>发布时间</span>
    </div>
  `;
  articles.forEach(article => {
    list.innerHTML += `
      <div class="list-row">
        <span><a href="${article.link}" target="_blank" rel="noopener">${article.title}</a></span>
        <span>${article.views}</span>
        <span>${article.tags.map(tag => `<span class='tag'>${tag}</span>`).join('')}</span>
        <span>${article.date}</span>
      </div>
    `;
  });
}

// Swiper初始化
const swiper = new Swiper('.featured-swiper', {
  slidesPerView: 4,
  spaceBetween: 24,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  grabCursor: true,
  breakpoints: {
    1200: { slidesPerView: 4 },
    900: { slidesPerView: 3 },
    600: { slidesPerView: 2 },
    0: { slidesPerView: 1 }
  }
});

const featuredSection = document.querySelector('.featured-section');
if (featuredSection) {
  featuredSection.addEventListener('wheel', function(e) {
    if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
      if (e.deltaX > 0) swiper.slideNext();
      else if (e.deltaX < 0) swiper.slidePrev();
      e.preventDefault();
    } else if (Math.abs(e.deltaY) > 10) {
      if (e.deltaY > 0) swiper.slideNext();
      else if (e.deltaY < 0) swiper.slidePrev();
      e.preventDefault();
    }
  }, { passive: false });
}

// 页面加载后渲染
window.addEventListener('DOMContentLoaded', () => {
  renderFeatured();
  renderList();
  swiper.update();
}); 