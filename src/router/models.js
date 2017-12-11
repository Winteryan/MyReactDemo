import {tools} from 'yrui';
const $clone = tools.$clone;

const menu1 = [{
  title: '首页驾驶舱',
  key: 'homepage',
  url: '#/homepage',
  subMenu: [{
    url: '#/homeuser',
    key: 'homeuser',
    title: '用户行为',
    disabled: false,
  }, {
    url: '#/apiecharts',
    key: 'apiecharts',
    title: 'API统计',
    disabled: false,
  }, {
    url: '#/appecharts',
    key: 'appecharts',
    title: 'APP统计',
    disabled: false,
  }, {
    url: '#/metadataecharts',
    key: 'metadataecharts',
    title: '数据开放情况统计',
    disabled: false,
  }, {
    url: '#/metaecharts',
    key: 'metaecharts',
    title: '数据申请统计分析',
    disabled: false,
  }, {
    url: '#/metareleaseecharts',
    key: 'metareleaseecharts',
    title: '数据发布统计分析',
    disabled: false,
  }],
  logo: './images/nav/homelogo.png',
}, {
  title: '数据目录管理',
  key: 'information',
  url: '#/information',
  logo: './images/nav/fund.png',
  disabled: false,
}, {
  title: 'API管理',
  key: 'interface',
  url: '#/interface',
  logo: './images/nav/jiekoulogo.png',
  disabled: false,
}, {
  title: 'APP管理',
  key: 'app',
  url: '#/app',
  logo: './images/nav/applogo.png',
  disabled: false,
}, {
  title: '数据申请管理',
  key: 'data',
  url: '#/dataapply',
  logo: './images/nav/datamanagelogo.png',
  subMenu: [{
    url: '#/dataapply',
    key: 'dataapply',
    title: '数据申请审核',
    disabled: false,
  }, {
    url: '#/datapulish',
    key: 'datapulish',
    title: '数据开放审核',
    disabled: false,
  }, {
    url: '#/apipulish',
    key: 'apipulish',
    title: 'API开放审核',
    disabled: false,
  }, {
    url: '#/apppulish',
    key: 'apppulish',
    title: 'APP开放审核',
    disabled: false,
  }],
}, {
//   title: '开放动态管理',
//   key: 'opennews',
//   url: '#/opennews',
//   logo: './images/nav/openlogo.png',
// }, {
  title: '用户动态管理',
  key: 'news',
  url: '#/news',
  logo: './images/nav/dongtailogo.png',
  subMenu: [{
    url: '#/credit',
    key: 'credit',
    title: '信用奖励管理',
    disabled: false,
  }, {
    url: '#/news/behaviour',
    key: 'behaviour',
    title: '用户行为管理',
    disabled: false,
  }, {
    url: '#/message',
    key: 'message',
    title: '留言管理',
    disabled: false,
  },{
    url: '#/usermanage',
    key: 'usermanage',
    title: '用户管理',
    disabled: false,
  },{
    url: '#/accesslog',
    key: 'accesslog',
    title: '功能访问日志',
    disabled: false,
  },{
    url: '#/authentication',
    key: 'authentication',
    title: '实名认证审核',
    disabled: false,
  },{
    url: '#/log',
    key: 'log',
    title: '审计日志',
    disabled: false,
  }],
}, {
  title:'用户行为分析',
  key:'usert',
  url:'#/usert',
  logo: './images/nav/useraction.png',
  subMenu: [{
    url: '#/usert/weboverview',
    key: 'weboverview',
    title: '网站概况',
    disabled: false,
  }, {
    url: '#/timevisitor',
    key: 'timevisitor',
    title: '实时访客',
    disabled: false,
  }, {
    url: '#/trendanalysis',
    key: 'trendanalysis',
    title: '趋势分析',
    disabled: false,
  }, {
    url: '#/pageview',
    key: 'pageview',
    title: '受访页面',
    disabled: false,
  }, {
    url: '#/systemenvironments',
    key: 'systemenvironments',
    title: '系统环境',
    disabled: false,
  },{
    url: '#/barviewsex',
    key: 'barviewsex',
    title: '用户画像',
    disabled: false,
  },{
  //   url: '#/interest',
  //   key: 'interest',
  //   title: '兴趣指数',
        // disabled: false,
  // }, {
    url: '#/loyalty',
    key: 'loyalty',
    title: '忠诚度',
    disabled: false,
  }, {
    url: '#/mapuser',
    key: 'mapuser',
    title: '用户分布',
    disabled: false,
  // },{
  //   url: '#/single',
  //   key: 'single',
  //   title: '单用户画像',
  //   disabled: false,
  // },{
  //   url: '#/keywords',
  //   key: 'keywords',
  //   title: '用户群画像',
  //   disabled: false,
  }],
}, {
  title: '系统管理模块',
  key: 'system',
  url: '#/system',
  logo: './images/nav/systemmanegelogo.png',
  subMenu: [{
    url: '#/system/user',
    key: 'user',
    title: '系统用户管理',
  }, {
    url: '#/system/role',
    key: 'role',
    title: '角色管理',
  }, {
  //   url: '#/system/menu',
  //   key: 'menu',
  //   title: '菜单管理',
  // }, {
    url: '#/system/dictionary',
    key: 'dictionary',
    title: '字典管理',
  }],
}];

const dictionary = {
  '系统用户管理': '10008.10100.003',
  '角色管理': '10008.10102.003',
  '字典管理': '10003.10301.003',
  '用户行为': '30900.30901.301',
  'API统计': '30300.30306.302',
  'APP统计': '30200.30201.301',
  '数据开放情况统计': '30300.30306.302',
  '数据申请统计分析': '30300.30301.301',
  '数据发布统计分析': '30300.30306.301',
  '数据目录管理': '30300.30306.003',
  'API管理': '30100.30101.003',
  'APP管理': '30200.30201.003',
  '数据申请审核': '30300.30301.003',
  '数据开放审核': '30300.30302.003',
  'API开放审核': '30100.30102.003',
  'APP开放审核': '30200.30202.003',
  '信用奖励管理': '30600.30601.003',
  '用户行为管理': '30900.30901.003',
  '留言管理': '30400.30401.003',
  '用户管理': '30800.30801.003',
  '功能访问日志': '30900.30901.302',
  '实名认证审核': '30800.30801.003',
  '审计日志': '30500.30501.003',
  '网站概况': '30900.30901.305',
  '实时访客': '30900.30901.303',
  '趋势分析': '30900.30901.304',
  '受访页面': '30900.30901.306',
  '系统环境': '30900.30901.307',
  '用户画像': '30800.30801.301',
  '忠诚度': '30900.30901.308',
  '兴趣指数': '30900.30901.309',
  '用户群画像': '30900.30901.309',
  '单用户画像': '30900.30901.310',
  '用户分布': '30900.30901.311',
};
//const permissions = ["30100.30101.002","30300.30306.003","30100.30101.001","30200.30201.001","30200.30201.002","30200.30201.003","30200.30201.004","30200.30201.302","30100.30101.302","30100.30101.004","30100.30101.003"];

export const getMenu = (permissions) => {
  let active;
  if(permissions){
    let newMenu = $clone(menu1);
    let dic = {};
    for(let p of permissions){
      for(let d in dictionary){
        if(p === dictionary[d]){
          dic[d] = true;
        }
      }
      
    }
    for(let m of newMenu){
      if(m.subMenu){
        for(let s of m.subMenu){
          if(dic[s.title]){
            s.disabled = false;
            if(!active){
              active = s.url;
            }
          }else{
            s.disabled = true;
          }
        }
      }else{
        if(dic[m.title]){
          m.disabled = false;
          if(!active){
            active = m.url;
          }
        }else{
          m.disabled = true;
        }
      }
    };
    return {
      menu:newMenu,
      activeRouter:active,
    };
  }
  return {
    menu:menu1,
    activeRouter:'/homeuser',
  };
  
}
