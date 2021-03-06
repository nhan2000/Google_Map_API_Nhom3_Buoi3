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
    '<h1>Th??ng Tin UTC2</h1>' +
    "</div>" +
    '<div id="body-content">' +
    '<p><b>B??u ??i???n Trung T??m Th??nh Ph??? HCM</b></p>' +
    '<p>S??? 125 Hai B?? Tr??ng, B???n Ngh??, Qu???n 1, Th??nh ph??? H??? Ch?? Minh, VietNam</p>' +
    '<p>B??u ??i???n trung t??m ho??nh tr??ng ho??n th??nh n??m 1891, v???i s???nh ch??nh c?? m??i v??m & m???t s??n mang d???u ???n th???i gian.</p>'
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
'<p><b>V??n Mi????u Qu????c T???? Gia??m HN</b></p>' +
'<p>61 Qu???c T??? Gi??m, V??n Mi???u, ?????ng ??a, H?? N???i, Vietnam</p>' +
'<p>Ng??i ?????n Nho gi??o c?? kho???ng s??n t????i ?????p, b??n th??? v?? ?????n th??? l???n, v?? c???ng ch??nh ????? s???.</p>'
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

