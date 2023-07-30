<template>
    <div>
        <map3 />
        <sample-button @click="btnClick">
            button1
        </sample-button>
    </div>
</template>

<script>
import { Map } from 'maplibre-gl';
    export default {
        setup() {
            const mapRef = new ref();
            provide("mapRef", mapRef);
            const map = new ref();
            provide("map", map);

            onMounted(() => {
                console.log(mapRef.value)
                map.value = new Map({
                    container: mapRef.value,
                    style: "https://demotiles.maplibre.org/style.json"
                })
            })
            function btnClick() {
                map.value.setZoom(5)
                console.log(map)
            }
            return {
                btnClick
            }
        }
    }
</script>

<style scoped>

</style>