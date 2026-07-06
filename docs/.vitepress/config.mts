import { defineConfig } from "vitepress";
import { withSidebar } from 'vitepress-sidebar';


// VitePress 基础配置
const vitePressConfigs = {
  ignoreDeadLinks: true, //忽略死链接
  title: "DongSheng Wu's Blog", //标题
  description: "DongSheng Wu's Blog", //描述
  // logo: "/logo.svg",
  lang: "zh-CN", //语言
  lastUpdated: true, //最后更新时间

  head: [
    //头部logo配置
    //头部
    ["link", { rel: "icon", href: "/logo.svg" }]
  ],

  markdown: {
    image: {
      // 默认禁用图片懒加载
      lazyLoading: true,
    },
    container: {
      tipLabel: "提示",
      warningLabel: "警告",
      dangerLabel: "危险",
      infoLabel: "信息",
      detailsLabel: "详细信息",
    },
    lineNumbers: true,
  },

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    siteTitle: "DongSheng Wu's Blog",
    logo: "/logo.svg", // 设置网站标题的 logo

    ////////////////// 最后更新时间配置 /////////////////////
    lastUpdated: {
      text: "Updated at",
      formatOptions: {
        dateStyle: "full",
        timeStyle: "medium",
      },
    },

    ///////////////////// 每个md文档的右侧目录配置 /////////////////////
    outline: {
      level: [1, 6], // 显示H1到H6的所有标题
      label: "目录",
    },

    ///////////////////// 搜索配置 /////////////////////
    search: {
      //搜索
      provider: "local",
    },

    ///////////////////// 顶部导航栏配置 /////////////////////
    nav: [
      //导航栏
      { text: "首页", link: "/" },

      // {
      //   text: "星空板",
      //   items: [
      //     { text: "星空板", link: "/星空板/" },
      //     { text: "学习指南", link: "/星空板/学习指南/" },
      //   ],
      // },

      {
        text: "文档",
        items: [
          { text: "index", link: "/文档/index" },
          { text: "YOLOv8训练与部署", link: "/文档/yolov8训练与部署/yolov8.md" },
          { text: "Docker容器", link: "/文档/docker/docker.md" },
        ],
      },

      {
        text: "code",
        items: [
          { text: "index", link: "/code/" },
          { text: "Python基础", link: "/code/python/python基础" },
          { text: "C++基础", link: "/code/c++/c++基础" },
        ],
      },

      { text: "稀奇古怪", link: "/稀奇古怪/" },
      { text: "关于我", link: "/关于我/" },
    ],

    ///////////////////// 社交链接 /////////////////////
    socialLinks: [{ icon: "github", link: "https://cloud-home.dxh-wds.top:20110/w" }],

    ///////////////////// 页脚配置 /////////////////////
    footer: {
      //页脚
      message: "邬东升的博客",
      copyright: "2024.06.02 @wds",
    },
  }
};


// 使用 withSidebar 为每个内容块单独配置侧边栏
export default defineConfig(
  withSidebar(vitePressConfigs, [
    // code 目录的侧边栏配置
    {
      documentRootPath: 'docs',
      scanStartPath: 'code',
      resolvePath: '/code/',
      
      // ============ [ 分组设置 ] ============
      collapsed: false,                  // code 下不折叠
      collapseDepth: 2,                 // 折叠深度
      
      // ============ [ 获取菜单标题 ] ============
      useTitleFromFileHeading: false,    // 不从文件标题获取
      useTitleFromFrontmatter: false,    // 不从frontmatter获取标题
      useFolderTitleFromIndexFile: true, // 从index.md获取文件夹标题
      
      // ============ [ 获取菜单链接 ] ============
      useFolderLinkFromIndexFile: true,  // 从index.md获取文件夹链接
      
      // ============ [ 包含/排除 ] ============
      includeDotFiles: false,            // 不包含点文件
      includeEmptyFolder: false,         // 不包含空文件夹
      includeRootIndexFile: true,       // 不包含根目录index文件
      includeFolderIndexFile: true,      // 包含文件夹index文件
      
      // ============ [ 标题样式 ] ============
      hyphenToSpace: true,               // 连字符转空格
      underscoreToSpace: true,           // 下划线转空格
      capitalizeFirst: false,            // 首字母大写
      capitalizeEachWords: false,        // 每个单词首字母大写
      
      // ============ [ 排序 ] ============
      sortMenusByName: true,             // 按名称排序
      sortMenusOrderByDescending: false, // 不降序排列
    },
    
    // 文档目录的侧边栏配置
    {
      documentRootPath: 'docs',
      scanStartPath: '文档',
      resolvePath: '/文档/',
      
      // ============ [ 分组设置 ] ============
      collapsed: false,                  // 文档下不折叠
      collapseDepth: 2,                 // 折叠深度
      
      // ============ [ 获取菜单标题 ] ============
      useTitleFromFileHeading: false,    // 不从文件标题获取
      useTitleFromFrontmatter: false,    // 不从frontmatter获取标题
      useFolderTitleFromIndexFile: true, // 从index.md获取文件夹标题
      
      // ============ [ 获取菜单链接 ] ============
      useFolderLinkFromIndexFile: true,  // 从index.md获取文件夹链接
      
      // ============ [ 包含/排除 ] ============
      includeDotFiles: false,            // 不包含点文件
      includeEmptyFolder: false,         // 不包含空文件夹
      includeRootIndexFile: true,       // 包含根目录index文件
      includeFolderIndexFile: true,      // 包含文件夹index文件
      
      // ============ [ 标题样式 ] ============
      hyphenToSpace: true,               // 连字符转空格
      underscoreToSpace: true,           // 下划线转空格
      capitalizeFirst: false,            // 首字母大写
      capitalizeEachWords: false,        // 每个单词首字母大写
      
      // ============ [ 排序 ] ============
      sortMenusByName: true,             // 按名称排序
      sortMenusOrderByDescending: false, // 不降序排列
    },
    
    // 星空板目录的侧边栏配置
    {
      documentRootPath: 'docs',
      scanStartPath: '星空板',
      resolvePath: '/星空板/',
      
      // ============ [ 分组设置 ] ============
      collapsed: false,                  // 星空板下不折叠
      collapseDepth: 2,                 // 折叠深度
      
      // ============ [ 获取菜单标题 ] ============
      useTitleFromFileHeading: false,    // 不从文件标题获取
      useTitleFromFrontmatter: false,    // 不从frontmatter获取标题
      useFolderTitleFromIndexFile: true, // 从index.md获取文件夹标题
      
      // ============ [ 获取菜单链接 ] ============
      useFolderLinkFromIndexFile: true,  // 从index.md获取文件夹链接
      
      // ============ [ 包含/排除 ] ============
      includeDotFiles: false,            // 不包含点文件
      includeEmptyFolder: false,         // 不包含空文件夹
      includeRootIndexFile: true,       // 包含根目录index文件
      includeFolderIndexFile: true,      // 包含文件夹index文件
      
      // ============ [ 标题样式 ] ============
      hyphenToSpace: true,               // 连字符转空格
      underscoreToSpace: true,           // 下划线转空格
      capitalizeFirst: false,            // 首字母大写
      capitalizeEachWords: false,        // 每个单词首字母大写
      
      // ============ [ 排序 ] ============
      sortMenusByName: true,             // 按名称排序
      sortMenusOrderByDescending: false, // 不降序排列
    },
    
    // 稀奇古怪目录的侧边栏配置
    {
      documentRootPath: 'docs',
      scanStartPath: '稀奇古怪',
      resolvePath: '/稀奇古怪/',
      
      // ============ [ 分组设置 ] ============
      collapsed: false,                  // 稀奇古怪下不折叠
      collapseDepth: 2,                 // 折叠深度
      
      // ============ [ 获取菜单标题 ] ============
      useTitleFromFileHeading: false,    // 不从文件标题获取
      useTitleFromFrontmatter: false,    // 不从frontmatter获取标题
      useFolderTitleFromIndexFile: true, // 从index.md获取文件夹标题
      
      // ============ [ 获取菜单链接 ] ============
      useFolderLinkFromIndexFile: true,  // 从index.md获取文件夹链接
      
      // ============ [ 包含/排除 ] ============
      includeDotFiles: false,            // 不包含点文件
      includeEmptyFolder: false,         // 不包含空文件夹
      includeRootIndexFile: true,       // 包含根目录index文件
      includeFolderIndexFile: true,      // 包含文件夹index文件
      
      // ============ [ 标题样式 ] ============
      hyphenToSpace: true,               // 连字符转空格
      underscoreToSpace: true,           // 下划线转空格
      capitalizeFirst: false,            // 首字母大写
      capitalizeEachWords: false,        // 每个单词首字母大写
      
      // ============ [ 排序 ] ============
      sortMenusByName: true,             // 按名称排序
      sortMenusOrderByDescending: false, // 不降序排列
    },
    
    // 关于我目录的侧边栏配置
    {
      documentRootPath: 'docs',
      scanStartPath: '关于我',
      resolvePath: '/关于我/',
      
      // ============ [ 分组设置 ] ============
      collapsed: false,                  // 关于我下不折叠
      collapseDepth: 2,                 // 折叠深度
      
      // ============ [ 获取菜单标题 ] ============
      useTitleFromFileHeading: false,    // 不从文件标题获取
      useTitleFromFrontmatter: false,    // 不从frontmatter获取标题
      useFolderTitleFromIndexFile: true, // 从index.md获取文件夹标题
      
      // ============ [ 获取菜单链接 ] ============
      useFolderLinkFromIndexFile: true,  // 从index.md获取文件夹链接
      
      // ============ [ 包含/排除 ] ============
      includeDotFiles: false,            // 不包含点文件
      includeEmptyFolder: false,         // 不包含空文件夹
      includeRootIndexFile: true,       // 包含根目录index文件
      includeFolderIndexFile: true,      // 包含文件夹index文件
      
      // ============ [ 标题样式 ] ============
      hyphenToSpace: true,               // 连字符转空格
      underscoreToSpace: true,           // 下划线转空格
      capitalizeFirst: false,            // 首字母大写
      capitalizeEachWords: false,        // 每个单词首字母大写
      
      // ============ [ 排序 ] ============
      sortMenusByName: true,             // 按名称排序
      sortMenusOrderByDescending: false, // 不降序排列
    }
  ])
);
