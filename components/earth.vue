<template>
  <div class="background-color">
    <div class="container-temp">
      <div class="wrapper">
        <div class="grid glob">
          <div class="gi giii">
            <!-- <h1>The Little Blue Marble.</h1> -->
            <div id="banner-title">
              <div>
                <h3 class="font-weight-medium">
                  Once a year...<br />
                  go someplace you've <br />never been before.
                </h3>
              </div>
              <p class="mt-3">
                This holiday season, make the most of every moment with us. Take
                pleasure in the perfect escape.

                <br />
                We will always be your favorite hotel!
              </p>
              <NuxtLink to="/aboutus" class="btn btn-secondary mt-3"
                >Learn more</NuxtLink
              >
            </div>
          </div>
          <div class="gi">
            <div class="globe-total-container">
              <div id="globe-container"></div>
              <div id="globe-shadow"></div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- <div class="hidden" id="vertexShader">
      varying vec2 vertexUV; varying vec3 vertexNormal; void main(){ vertexUV =
      uv; vertexNormal = normalize(normalMatrix * normal); gl_Position =
      projectionMatrix * modelViewMatrix * vec4(position, 1); }
    </div> -->
    <!-- 
    <div class="hidden" id="fragmentShader">
      uniform sampler2D globeTexture; varying vec2 vertexUV; varying vec3
      vertexNormal; void main(){ float intensity = 1.05 - dot(vertexNormal,
      vec3(0,0,1)); vec3 atmosphere = vec3(0.3, 0.6, 1.0) * pow(intensity, 1.5);
      gl_FragColor = vec4(atmosphere + texture2D(globeTexture, vertexUV).xyz,
      1.0); }
    </div>

    <div class="hidden" id="atmosphereVertexShader">
      varying vec3 vertexNormal; void main(){ vertexNormal =
      normalize(normalMatrix * normal); gl_Position = projectionMatrix *
      modelViewMatrix * vec4(position, 0.9); }
    </div>

    <div class="hidden" id="atmosphereFragmentShader">
      varying vec3 vertexNormal; void main(){ float intensity = pow(0.6 -
      dot(vertexNormal, vec3(0,0,1.0)), 2.0); gl_FragColor = vec4(0.3, 0.6, 1.0,
      1.0) * intensity; }
    </div> -->
    <!-- <div class="container">
      <div class="wrapper">
        <div class="grid">
          <div class="gi">
            <h1>The Little Blue Marble.</h1>
          </div>
          <div class="gi">
            <div class="globe-total-container">
              <div id="globe-container"></div>
              <div id="globe-shadow"></div>
            </div>
          </div>
        </div>
      </div>
    </div> -->

    <div class="hidden" id="vertexShader">
      varying vec2 vertexUV; varying vec3 vertexNormal; void main(){ vertexUV =
      uv; vertexNormal = normalize(normalMatrix * normal); gl_Position =
      projectionMatrix * modelViewMatrix * vec4(position, 1); }
    </div>

    <div class="hidden" id="fragmentShader">
      uniform sampler2D globeTexture; varying vec2 vertexUV; varying vec3
      vertexNormal; void main(){ float intensity = 1.05 - dot(vertexNormal,
      vec3(0,0,1)); vec3 atmosphere = vec3(0.3, 0.6, 1.0) * pow(intensity, 1.5);
      gl_FragColor = vec4(atmosphere + texture2D(globeTexture, vertexUV).xyz,
      1.0); }
    </div>

    <div class="hidden" id="atmosphereVertexShader">
      varying vec3 vertexNormal; void main(){ vertexNormal =
      normalize(normalMatrix * normal); gl_Position = projectionMatrix *
      modelViewMatrix * vec4(position, 0.9); }
    </div>

    <div class="hidden" id="atmosphereFragmentShader">
      varying vec3 vertexNormal; void main(){ float intensity = pow(0.6 -
      dot(vertexNormal, vec3(0,0,1.0)), 2.0); gl_FragColor = vec4(0.3, 0.6, 1.0,
      1.0) * intensity; }
    </div>
  </div>
</template>
<script type="module">
import gsap from "https://cdn.skypack.dev/gsap";
</script>

<script>
export default {
  head: {
    script: [
      {
        src:
          "https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js",
      },
    ],
  },
  mounted() {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    });

    renderer.setClearColor(0xffffff, 0);
    renderer.setSize(500, 500);
    renderer.setPixelRatio(devicePixelRatio);

    const container = document.getElementById("globe-container");

    container.appendChild(renderer.domElement);

    const sphereGeom = new THREE.SphereGeometry(5, 50, 50);

    const globe_image = new THREE.TextureLoader().load(
      "https://i.postimg.cc/0Ndr7GpN/earth-world-map-3d-model-low-poly-max-obj-fbx-c4d-ma-blend.jpg"
    );

    const sphereMat = new THREE.ShaderMaterial({
      vertexShader: document.getElementById("vertexShader").textContent,
      fragmentShader: document.getElementById("fragmentShader").textContent,
      uniforms: {
        globeTexture: {
          value: globe_image,
        },
      },
    });

    const sphere = new THREE.Mesh(sphereGeom, sphereMat);

    const outerGlowMat = new THREE.ShaderMaterial({
      vertexShader: document.getElementById("atmosphereVertexShader")
        .textContent,
      fragmentShader: document.getElementById("atmosphereFragmentShader")
        .textContent,
      side: THREE.BackSide,
    });

    const outer_glow = new THREE.Mesh(sphereGeom, outerGlowMat);

    outer_glow.scale.set(1.01, 1.01, 1.01);

    console.log(sphere);

    scene.add(outer_glow);

    const group = new THREE.Group();
    group.add(sphere);
    scene.add(group);

    camera.position.z = 10;

    const mouse = {
      x: 0,
      y: 0,
    };

    function animate() {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
      sphere.rotation.y -= 0.002;
      sphere.rotation.z -= 0.002;
      var scale = Math.random() * (1.013 - 1.01) + 1.015;
      outer_glow.scale.set(scale, scale, scale);

      gsap.to(group.rotation, {
        y: mouse.x * 0.1,
        x: -mouse.y * 0.1,
      });
    }
    animate();

    addEventListener("mousemove", () => {
      mouse.x = (event.clientX / innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / innerHeight) * 2 - 1;
    });
  },
};
</script>
<style scoped>
/* * {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
} */

.background-color {
  background: #54caf2;
}

#globe-container {
  margin: 0 auto;
  width: fit-content;
}

#globe-shadow {
  width: 200px;
  height: 10px;
  border-radius: 100%;
  background: rgba(0, 0, 0, 0.019);
  margin: 0 auto;
}

.container-temp {
  background: #ffffff;

  /* Chrome 10-25, Safari 5.1-6 */
  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
}

.hidden {
  display: none;
}

.grid {
  display: flex;
  align-items: center;
}
.grid .gi {
  flex: 0 0 60%;
}

h1 {
  font-size: 72px;
  color: white;
  letter-spacing: 2px;
}

.wrapper {
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
}
#banner-title h3 {
  font-weight: 500;
  color: #2495f8;
  font-size: 49px;
  padding-top: 30px;
}
.container-temp{height: auto;
    padding: 60px 0px 100px 0px;}
@media (max-width: 768px) {
  .grid .gi {
    flex: 0 0 20%;
  }
  #banner-title {
    padding: 10px;
  }
  .container-temp {
    height: auto;
  }

  .grid.glob {
    display: block;
  }
}
.globe-total-container {
  position: absolute;
  top: -213px;
  left: 0px;
  z-index: -1;
}
.gi {
  width: 18%;
  position: relative;
}
.giii {
  width: 80%;left: 3%;
}
.background-color {
  background-color: transparent;
}
.container-temp {
  background-color: transparent;
}
#banner-title h3{ font-size:30px}
.date-picker .form-control{box-shadow: 0 5px 5px -5px #333; border: 0px!important;}
.date-picker .form-control{ border: 0px!important;}
</style>
