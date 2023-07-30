<template>
    <div id="map" ref="mapRef"></div>
</template>

<script>
import { Map } from 'maplibre-gl';
    export default {
        setup() {
            const mapRef = inject("mapRef");
            return {
                mapRef
            }
        }
    }
</script>

<style scoped>
#map {
    width: 300px;
    height: 300px;
}
</style>