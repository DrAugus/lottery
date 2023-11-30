---
layout: home
title: 刮刮乐
titleTemplate: 中奖了吗
hero:
  name: 刮刮乐
  text: 体彩 福彩
  tagline: 快比对一下 中奖了吗
#   image:
#     src: /image/kafka-modified.png
#     alt: none
#   actions:
#     - theme: brand
#       text: 原神祈愿时间轴
#       link: /genshin/timeline
#     - theme: brand
#       text: 星穹铁道跃迁时间轴
#       link: /hsr/timeline
#     - theme: alt
#       text: 近期祈愿
#       link: /genshin/wish-recent
#     - theme: alt
#       text: 近期跃迁
#       link: /hsr/wish-recent
#     - theme: brand
#       text: 星穹铁道每日
#       link: /hsr/daily     
features:
  - title: 使用说明：
    icon: 🚀
    details: 选择体彩/福彩 <br/>然后在输入框中输入，您所刮彩票上显示的三个字母，快速获取您中奖多少<br/> 您完全可以看到几个字母就输入几个，输入字母数范围为 1~3 个<br/>
    linkText: 看看中奖多少万
---

<Lottery />

<LetterButton />

<script setup>
import Lottery from "./.vitepress/components/Lottery.vue";
import LetterButton from "./.vitepress/components/LetterButton.vue";
</script>
