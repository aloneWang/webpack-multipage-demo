<template>
    <div>
        <img :src="require('assets/img/1.jpg')" alt="">
        <Button></Button>
        dsjhdhsdhshd
        page1
    </div>
</template>
<script>
import Button from 'components/button'
console.log(1111)
Promise.resolve(1).then( ()=> {
    console.log("这是promise")
})
export default {
    components:{
        Button
    }
}
</script>

