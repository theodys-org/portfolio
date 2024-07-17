import { Suspense, useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Decal, useTexture, Preload } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Box = (props) => {
  const [decal] = useTexture([props.img]);
  const meshRef = useRef();
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);
  useFrame((state, delta) => (meshRef.current.rotation.x += delta));

  return (
    <mesh
      ref={meshRef}
      scale={active ? 1.4 : 1.3}
      onClick={() => {
        setActive(!active);
        window.open(props.imgUrl, "_blank");
      }}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
    >
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <boxGeometry args={[2.5, 2.5, 2.5]} />
      <meshStandardMaterial color={hovered ? "#3f3c3c" : "#050816"} />
      <Decal
        scale={1.5}
        position={[0, 0, 1]}
        rotation={[2 * Math.PI, 0, 6.25]}
        map={decal}
        flatShading
      />
      <Decal
        scale={-1.8}
        position={[0, 0, -1]}
        rotation={Math.PI}
        map={decal}
        flatShading
      />
      <Decal
        position={[0, 1, 0]}
        rotation={Math.PI}
        map={decal}
        flatShading
        scale={-1.8}
      />
      <Decal
        position={[0, -1, 0]}
        rotation={Math.PI}
        map={decal}
        flatShading
        scale={-1.8}
      />
    </mesh>
  );
};

const BoxCanvas = ({ icon, link }) => {
  return (
    <Canvas>
      <Suspense fallback={<CanvasLoader />}>
        {/* <OrbitControls enableZoom={false} /> */}
        <Box img={icon} imgUrl={link} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};
export default BoxCanvas;
