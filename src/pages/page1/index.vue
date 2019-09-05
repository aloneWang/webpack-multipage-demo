<template>
    <div>
        <img :src="require('assets/img/1.jpg')" alt="">
        <Button></Button>
        <img :src="require('assets/img/hah.jpg')" alt="">
       <div class="less">这是一个less样式</div>
    </div>
</template>
<script>
import Button from 'components/button'

export default {
    components:{
        Button
    },
    mounted() {
        Promise.resolve(1).then( () => {
            console.log("promise")
        })
    }
}
</script>
<style lang="less">
.less {
    height: 100px;
    line-height: 100px;
    background: #000;
    color: #fff;
}
</style>

