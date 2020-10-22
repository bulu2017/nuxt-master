<template>
    <div>
        {{error.statusCode}}{{error.message}}
    </div>
</template>

<script>
export default {
    //接受错误信息，error:{statusCode,message}
    props:['error'],
    methods: {

    }
}
</script>