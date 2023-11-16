import { defineConfig } from '@umijs/max';

export default defineConfig({
  mfsu: false,
  // antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  // layout: {
  //   title: '@umijs/max',
  // },
  routes: [
    {
      path: '/',
      redirect: '/faq',
    },
    {
      name: '首页',
      path: '/faq',
      component: './faq',
    },
  ],
  extraPostCSSPlugins: [
    require('tailwindcss')({
      config: './tailwind.config.ts',
    }),
  ],
  npmClient: 'pnpm',
});
