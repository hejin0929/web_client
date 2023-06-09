import { RefObject, useEffect } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

export const useRender = (ref: RefObject<HTMLDivElement>) => {
  console.log("??/");

  //   useEffect(() => {
  //     console.log("this is a update");
  //     if (!camera) {
  //       setCamera(createCamera());
  //       return;
  //     }
  //     // 初始化渲染器
  //     const renderer = new THREE.WebGLRenderer();
  //     // 设置渲染的尺寸大小
  //     renderer.setSize(
  //       ref.current?.clientWidth ?? 0,
  //       ref.current?.clientHeight ?? 0
  //     );
  //     ref.current?.appendChild(renderer.domElement);
  //     // 添加物体
  //     // 创建几何体
  //     const cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
  //     const cubeMaterial = new THREE.MeshBasicMaterial({ color: 0xffff00 });
  //     const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
  //     scene.add(cube);
  //     // 创建轨道控制器
  //     const controls = new OrbitControls(camera, renderer.domElement);
  //     // 添加坐标轴辅助器
  //     const axesHelper = new THREE.AxesHelper(5);
  //     scene.add(axesHelper);
  //     requestAnimationFrame(() => renderer.render(scene, camera));
  //   }, [camera]);
};
