

## 1 vue的基本使用步骤
导入vue.js
new vue构造函数，得到实例对象
声明el和data数据节点
mvvm的对应关系

## 2 vue常见指令的基本用法
差值表达式、v-bind、v-on、v-if和v-else
v-for和：key、v-model

## 3 vue中过滤器的基本用法
全局过滤器vue.filter('过滤器名称',function);
私有过滤器filter节点


# 组件上

## 1 单页面应用程序以及组件话开发
SPA 、只有个页面、组件是对UI结构的复用

## 2 .vue单文件组件的组成部分
template、script、style（scoped\lang)

## 3 如何注册vue组件
全局注册 app.component
局部注册 components

## 4 如何声明组件的props属性
pros数组

## 5 如何让在组件中进行样式绑定
动态绑定class
动态绑定style

# 组件下

## 1 props进行验证
数组格式、对象格式
## 2 计算属性
computed节点、必须return一个结果、缓存计算结果

## 3 为组件绑定自定义事件
v-on绑定自定义事件、emits、$emits()

## 4 在组件上使用v-model
应用场景：实现组件内外的数据同步
v-model:props名称、emits、$emit('update:props名称'）

# 高级组件上：
## watch侦听器的基本使用
## vue中常用的生命周期
## 实现组件之间的数据共享
## 在vue3.x的项目中全局配置axios

## 1 watch侦听器

计算属性侧重于监听多个值的变化，最终计算并返回一个新值

侦听器侧重于监听单个数据变化，最终执行特定的业务处理，不需要有任何返回值

## vuex是终极的组件之间的数据共享。

存取数据都从store里面去存取


# 高级组件下

## 1、ref : 获取dom元素.使用ref引用DOM和组件实例
通过ref属性指定引用的名称，使用this.$refs访问引用实例

## 2、$nextTick调用
组件DOM更新之后才执行$nextTick中回调

## 3、动态组件 ： 动态切换组件的显示与隐藏。vue提供了一个内置的<component>组件，专门来实现组件的动态渲染
保持动态组件的状态

## 4、插槽 ： vue为组件的封装者
<slot>标签、具名插槽、作用域插槽、v-slot:简写为#

## 5、自定义指令 ： 除了v-for等内置指令。
私有自定义指令、全局自定义指令


# 路由

后端路由：请求方式、请求地址与function处理函数之间的对应关系
SPA指的是一个web网站只有唯一的一个html页面，所有组件的展示与切换都在这唯一的一个页面完成，此时，
不同组件之间的切换需要通过前端路由来实现
结论：在SPA项目中，不同的功能之间的切换，要依赖于前端路由来完成
前端路由——hash地址与组件之间的对应关系
## 前端路由工作的过程
用户点击页面路由链接
导致url地址栏中的hash地址变化
前端路由监听到hash地址的变化
前端路由把当前hash地址对应的组件渲染到浏览器中

##  vue-router 路由解决方案
在vue3.0只能安装vue-router 4.x 
npm install vue-router@next -S

路由重定向：用户在访问地址A的时候，强制用户跳转到地址C，从而展示特定的组件页面 




