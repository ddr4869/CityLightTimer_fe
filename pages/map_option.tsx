
import $ from 'jquery';
function addMapTrafficLayer(map:naver.maps.Map) {
    console.log("교통상황 test")
    var trafficLayer = new naver.maps.TrafficLayer({
        interval: 300000 // 5분마다 새로고침 (최소값 5분)
    });
    
    var btn = $('#traffic');

    naver.maps.Event.addListener(map, 'trafficLayer_changed', function(trafficLayer) {
        if (trafficLayer) {
            btn.addClass('control-on');
            $("#autorefresh").parent().show();
            ($("#autorefresh")[0] as HTMLInputElement).checked = true;
        } else {
            btn.removeClass('control-on');
            $("#autorefresh").parent().hide();
        }
    });

    btn.on("click", function(e) {
        e.preventDefault();

        if (trafficLayer.getMap()) {
            trafficLayer.setMap(null);
        } else {
            trafficLayer.setMap(map);
        }
    });

    $("#autorefresh").on("click", function(e) {
        var btn = $(this),
            checked = btn.is(":checked");

        if (checked) {
            trafficLayer.startAutoRefresh();
        } else {
            trafficLayer.endAutoRefresh();
        }
    });

    naver.maps.Event.once(map, 'init', function() {
        trafficLayer.setMap(map);
    });
}

export default addMapTrafficLayer;