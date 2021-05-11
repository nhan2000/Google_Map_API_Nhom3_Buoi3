function initMap(){

    const vanMieu=new google.maps.LatLng(21.027607559290445, 105.83539658220654);
    const buuDienTT=new google.maps.LatLng(10.780026524348184, 106.69987531090884);
    const map=new google.maps.Map(document.getElementById("map"),{
        zoom:11,
        center:buuDienTT,
    });

    var arrayPoint=[
        new google.maps.geometry.spherical.computeOffset(buuDienTT,13000,0),
        new google.maps.geometry.spherical.computeOffset(buuDienTT,13000,120),
        new google.maps.geometry.spherical.computeOffset(buuDienTT,13000,-120),
        new google.maps.geometry.spherical.computeOffset(buuDienTT,13000 *2,0),
        new google.maps.geometry.spherical.computeOffset(buuDienTT,13000 *2,120),
        new google.maps.geometry.spherical.computeOffset(buuDienTT,13000*2,-120),
        new google.maps.geometry.spherical.computeOffset(buuDienTT,13000,0),
        new google.maps.geometry.spherical.computeOffset(buuDienTT,13000,120),
        new google.maps.geometry.spherical.computeOffset(buuDienTT,13000,-120),
        new google.maps.geometry.spherical.computeOffset(buuDienTT,13000*2,0),
        new google.maps.geometry.spherical.computeOffset(buuDienTT,13000*2,120),
        new google.maps.geometry.spherical.computeOffset(buuDienTT,13000*2,-120),
    ]


    function drawingCircle(a){
        const Circle=new google.maps.Circle({
            strokeColor:"#FF7878",
            map:map,
            edittable:false,
            center:a,
            radius:13000
        });
    }
    drawingCircle(buuDienTT);
    drawingCircle(vanMieu);

    function drawingTriagle(a,b,c){
        const triagle=new google.maps.Polygon({
            path:[a,b,c],
            strokeColor:"blue",
            strokeOpacity:1,
            strokeWeight:2,
        });
        triagle.setMap(map);
    }
    drawingTriagle(arrayPoint[0],arrayPoint[1],arrayPoint[2]);
    drawingTriagle(arrayPoint[3],arrayPoint[4],arrayPoint[5]);
    drawingTriagle(arrayPoint[6],arrayPoint[7],arrayPoint[8]);
    drawingTriagle(arrayPoint[9],arrayPoint[10],arrayPoint[11]);

    const markerBuDien=new google.maps.Marker({
        position:buuDienTT,
        map:map,
    });
    const markerVanMieu=new google.maps.Marker({
        position:vanMieu,
        map:map,
    });

    const strBuuDien='<div id = "content">' +
    '<div id="site-notice>' +
    '<h1>Thông Tin UTC2</h1>' +
    "</div>" +
    '<div id="body-content">' +
    '<p><b>Bưu Điện Trung Tâm Thành Phố HCM</b></p>' +
    '<p>Số 125 Hai Bà Trưng, Bến Nghé, Quận 1, Thành phố Hồ Chí Minh, VietNam</p>' +
    '<p>Bưu điện trung tâm hoành tráng hoàn thành năm 1891, với sảnh chính có mái vòm & mặt sơn mang dấu ấn thời gian.</p>'
    "</div>" +
    "</ div>"
    const infoBuuDienWindow=new google.maps.InfoWindow({content:strBuuDien,});
    markerBuDien.addListener("click",()=>{infoBuuDienWindow.open(map,markerBuDien)});

const strVanMieu=
'<div id = "content">' +
'<div id="site-notice>' +
'<h1>My Information</h1>' +
"</div>" +
'<div id="body-content">' +
'<p><b>Văn Miếu Quốc Tử Giám HN</b></p>' +
'<p>61 Quốc Tử Giám, Văn Miếu, Đống Đa, Hà Nội, Vietnam</p>' +
'<p>Ngôi đền Nho giáo có khoảng sân tươi đẹp, bàn thờ và đền thờ lớn, và cổng chính đồ sộ.</p>'
"</div>" +
"</ div>"
const infoVanMieuWindow=new google.maps.InfoWindow({content:strVanMieu,});
markerVanMieu.addListener("click",()=>{infoVanMieuWindow.open(map,markerVanMieu)});

    const directionService=new goolge.maps.DirectionsServiec();
    directionService.route({
        origin:buuDienTT,
        destination:vanMieu,
        travelMode:"DRIVING",
    },
    (response,status)=>{
        if(status=="OK"){
            var directionRender=new google.maps.DirectionsRenderer({
                directions:response,
                map:map,
            });
            console.log(response);
        }
    })

}

