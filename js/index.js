//Of course I can code this more programatically, but this seems good to me.
$().ready(function() {
                $('.send').click(function() {
                    setTimeout(function() {
                        $('#plate').removeClass('front');
                        $('#container').removeClass('beginning');
                        $('.curvable').addClass('curved');
                        setTimeout(function() {
                            $('#container').addClass('hover');
                            setTimeout(function() {
                                $('#container').addClass('fly_away_first');
                                setTimeout(function() {
                                    $('#container').addClass('fly_away');
                                    setTimeout(function(){
                                        $('#plate').addClass('front');
                                        $('#container').removeClass('fly_away fly_away_first hover').addClass('beginning');
                                        $('.curvable').removeClass('curved');
                                    },3000);
                                }, 600);
                            }, 2000);
                        }, 2800);
                    }, 200);
                });
    
    
    
 
  function onProgress ( xhr ) {
					if ( xhr.lengthComputable ) {
						var percentComplete = xhr.loaded / xhr.total * 100;
						console.log( Math.round(percentComplete, 2) + '% downloaded' );
					}
				};
    
    			 function onError ( xhr ) { };

var renderer, scene, camera, composer, circle, skelet, particle;

window.onload = function() {
  init();
  animate();
}

function init() {
      
THREE.Loader.Handlers.add( /\.dds$/i, new THREE.DDSLoader() );

  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setPixelRatio((window.devicePixelRatio) ? window.devicePixelRatio : 1);
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.autoClear = false;
  renderer.setClearColor(0x000000, 0.0);
  document.getElementById('canvas').appendChild(renderer.domElement);

  scene = new THREE.Scene();

  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 1000);
  camera.position.z = 400;
  scene.add(camera);

  circle = new THREE.Object3D();
  skelet = new THREE.Object3D();
  particle = new THREE.Object3D();

  scene.add(circle);
  scene.add(skelet);
  scene.add(particle);

  var geometry = new THREE.TetrahedronGeometry(2, 0);
  var geom = new THREE.IcosahedronGeometry(7, 1);
  var geom2 = new THREE.IcosahedronGeometry(15, 1);

  var material = new THREE.MeshPhongMaterial({
    color: 0xffffff,
    shading: THREE.FlatShading
  });
  for (var i = 0; i < 100; i++) {
      planePivot = new THREE.Object3D();
      planePivot.r = 0.006 + (Math.random() * 0.001)
      particle.add(planePivot);
addPlane(planePivot)

				
//    var mesh = new THREE.Mesh(geometry, material);
//    mesh.position.set(Math.random() - 0.5, Math.random() - 0.5, Math.random() - 0.5).normalize();
//    mesh.position.multiplyScalar(90 + (Math.random() * 700));
//    mesh.rotation.set(Math.random() * 2, Math.random() * 2, Math.random() * 2);
//    particle.add(mesh);
  }

  var mat = new THREE.MeshPhongMaterial({
    color: 0xffffff,
    shading: THREE.FlatShading
  });

  var mat2 = new THREE.MeshPhongMaterial({
    color: 0xffffff,
    wireframe: true,
    side: THREE.DoubleSide

  });

  var planet = new THREE.Mesh(geom, mat);
  planet.scale.x = planet.scale.y = planet.scale.z = 16;
  //circle.add(planet);

  var planet2 = new THREE.Mesh(geom2, mat2);
  planet2.scale.x = planet2.scale.y = planet2.scale.z = 10;
  //skelet.add(planet2);

  var ambientLight = new THREE.AmbientLight(0x999999 );
  scene.add(ambientLight);
  
  var lights = [];
lights[0] = new THREE.DirectionalLight( 0xffffff, 1 );
lights[0].position.set( 1, 0, 0 );
lights[1] = new THREE.DirectionalLight( 0x11E8BB, 1 );
lights[1].position.set( 0.75, 1, 0.5 );
lights[2] = new THREE.DirectionalLight( 0x8200C9, 1 );
lights[2].position.set( -0.75, -1, 0.5 );
scene.add( lights[0] );
scene.add( lights[1] );
scene.add( lights[2] );
  

  window.addEventListener('resize', onWindowResize, false);

};

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

var theta = 0;
var dTheta = 2 * Math.PI / 500;

function animate() {
  requestAnimationFrame(animate);

  
//    var time = Date.now() * 0.0005;
//	circle.position.x = Math.cos( time * 10 ) ;
//	circle.position.y = Math.cos( time * 7 ) ;
//	circle.position.z = Math.cos( time * 8 ) ;
//
//	// Animating sphere 2
////  particle.rotation.y += 0.05;
////    particle.rotation.x -= 0.0000;
////  particle.rotation.z += 0.0040;
//   
//     theta += dTheta;
//    particle.children.forEach(function(child,index){
//       
//        if(child.position.z <= 0){
//            child.position.z = 0;
//           child.position.y = child.r * Math.sin(theta);
//            child.position.x = child.r * Math.sin(theta);
//        }
//        else{
//             child.position.z -= 10;
//        }
////        if(index%2){
////              child.position.x = child.r * Math.cos(theta);
////  child.position.z = child.r * Math.sin(theta);
////            child.position.y = child.r * Math.sin(theta);
////              child.rotation.y -= 0.0060;
////        }

      
      
    //});
  
    particle.rotation.z += 0.003;
    particle.children.forEach(function(child,index){
    
     //child.rotation.y = 1.65806;
        child.rotation.y += .003;
       // child.rotation.z = 1.65806;
    });

  circle.rotation.z = -0.30;
  circle.rotation.y -= 0.0030;
 
  renderer.clear();

  renderer.render( scene, camera )
};
    
    
    


				var mtlLoader = new THREE.MTLLoader();
				mtlLoader.setPath( '../img/' );
				mtlLoader.load( 'CHAHIN_EARTH.mtl', function( materials ) {

					materials.preload();

					var objLoader = new THREE.OBJLoader();
					objLoader.setMaterials( materials );
					objLoader.setPath( '../img/' );
					objLoader.load( 'CHAHIN_EARTH.obj', function ( object ) {

                        //earth = object;
                        object.scale.x = object.scale.y = object.scale.z = 13;
						object.position.y = - 0;
						circle.add( object );

					}, onProgress, onError );

				});



            });

function addPlane(parent){
    function onProgress ( xhr ) {
					if ( xhr.lengthComputable ) {
						var percentComplete = xhr.loaded / xhr.total * 100;
						console.log( Math.round(percentComplete, 2) + '% downloaded' );
					}
				};
    
    			 function onError ( xhr ) { };

    var mtlLoader1 = new THREE.MTLLoader();
				mtlLoader1.setPath( '../img/' );
				mtlLoader1.load( 'Paper_Airplane.mtl', function( materials ) {

					materials.preload();

					var objLoader1 = new THREE.OBJLoader();
					objLoader1.setMaterials( materials );
					objLoader1.setPath( '../img/' );
					objLoader1.load( 'Paper_Airplane.obj', function ( object1 ) {

                        //earth = object;
                        //object1.r = 0.006 + (Math.random() * 0.1)
                        object1.scale.x = object1.scale.y = object1.scale.z = Math.random() * 0.5;
                       object1.position.set(Math.random() - 0.5, Math.random() - 0.5, Math.random() - 0.5).normalize();
//                        object1.position.y= -0.5 + (Math.random() * 1.5);
//                        object1.position.x= -0.5+ (Math.random() * 1.5);
//                        object1.position.z= -0.5+ (Math.random() * 1.5);
						object1.position.multiplyScalar(200 + (Math.random() * 600));
                        object1.rotation.set(0 , 0, 1.5708*Math.random());
                        parent.add(object1);
					}, onProgress, onError );

				});



}

