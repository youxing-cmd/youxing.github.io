// 鼠标跟随光效
document.addEventListener('DOMContentLoaded', () => {
    const lightEffect = document.querySelector('.light-effect');
    const body = document.body;

    // 鼠标移动事件
    document.addEventListener('mousemove', (e) => {
        // 计算鼠标位置
        const x = e.clientX;
        const y = e.clientY;

        // 更新光效位置
        lightEffect.style.left = `${x}px`;
        lightEffect.style.top = `${y}px`;
        lightEffect.style.opacity = '1';
    });

    // 鼠标离开页面时隐藏光效
    document.addEventListener('mouseleave', () => {
        lightEffect.style.opacity = '0';
    });

    // 鼠标进入页面时显示光效
    document.addEventListener('mouseenter', () => {
        lightEffect.style.opacity = '1';
    });
});

// 导航栏滚动效果
const header = document.querySelector('.header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        header.classList.remove('scroll-up');
        return;
    }
    
    if (currentScroll > lastScroll && !header.classList.contains('scroll-down')) {
        // 向下滚动
        header.classList.remove('scroll-up');
        header.classList.add('scroll-down');
    } else if (currentScroll < lastScroll && header.classList.contains('scroll-down')) {
        // 向上滚动
        header.classList.remove('scroll-down');
        header.classList.add('scroll-up');
    }
    lastScroll = currentScroll;
});

// 平滑滚动
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// 初始化Swiper（仅在文章页面）
if (document.querySelector('.swiper')) {
    const swiper = new Swiper('.swiper', {
        // 基本配置
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        centeredSlides: true,
        
        // 自动播放
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        
        // 分页器
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        
        // 导航按钮
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        
        // 响应式设计
        breakpoints: {
            // 当窗口宽度大于等于 768px
            768: {
                slidesPerView: 2,
            },
            // 当窗口宽度大于等于 1024px
            1024: {
                slidesPerView: 3,
            }
        }
    });
}

// 示例文章数据
const articles = [
    {
        title: '示例文章1',
        summary: '这是第一篇示例文章的摘要内容...',
        image: 'https://picsum.photos/800/400?random=1',
        link: '#'
    },
    {
        title: '示例文章2',
        summary: '这是第二篇示例文章的摘要内容...',
        image: 'https://picsum.photos/800/400?random=2',
        link: '#'
    },
    {
        title: '示例文章3',
        summary: '这是第三篇示例文章的摘要内容...',
        image: 'https://picsum.photos/800/400?random=3',
        link: '#'
    }
];

// 动态加载文章
function loadArticles() {
    const swiperWrapper = document.querySelector('.swiper-wrapper');
    if (!swiperWrapper) return;
    
    articles.forEach(article => {
        const articleHTML = `
            <article class="swiper-slide article-card">
                <div class="article-image">
                    <img src="${article.image}" alt="${article.title}">
                </div>
                <div class="article-content">
                    <h3>${article.title}</h3>
                    <p>${article.summary}</p>
                    <a href="${article.link}" class="read-more">阅读全文</a>
                </div>
            </article>
        `;
        swiperWrapper.insertAdjacentHTML('beforeend', articleHTML);
    });
}

// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', () => {
    loadArticles();
}); 