<template>
    <div>
        <img :src="require('assets/img/1.jpg')" alt="">
        <Button></Button>
        page1
    </div>
    
</template>
<script>
import Button from 'components/button'
export default {
    components:{
        Button
    }
}
</script>

