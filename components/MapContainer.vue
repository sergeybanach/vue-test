<template>
    <div>
        <map-elem />
        <sample-button @click="btnClick">
            draw points
        </sample-button>

    </div>
</template>

<script>
import { Map, Marker } from 'maplibre-gl';
    export default {
        setup() {
            const mapRef = new ref();
            provide("mapRef", mapRef);
            const map = new ref();
            provide("map", map);

            const markers = new ref([]);

            onMounted(() => {
                sessionStorage.setItem("coord", JSON.stringify([28.345, 57.234]));
                initMap();
                
            })

            function initMap() {
                map.value = new Map({
                    // container: mapRef.value,
                    container: "map",
                    style: "https://api.maptiler.com/maps/streets/style.json?key=get_your_own_OpIi9ZULNHzrESv6T2vL",
                    center: [0, 0],
                    zoom: 3
                })
            }

            function drawPoints() {
                // let points = JSON.parse(sessionStorage.getItem("points"))
                // points.points.forEach(point => {
                //     const marker = new Marker();
                //     marker.setLngLat(point.coord)
                //     marker.addTo(map.value);
                //     console.log(marker);
                //     markers.value.push(marker);
                // });
                // console.log(map.value);
                map.value.setCenter([
                    28.345, 57.234
                ])
            }

            function btnClick() {
                drawPoints();
            }
            return {
                btnClick, markers
            }
        }
    }
</script>

<style scoped>

</style>