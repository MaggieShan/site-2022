import React, { useRef, useState, useEffect } from "react";
import { useFrame, extend, useStore } from "@react-three/fiber";
import type { Mesh } from "three";
import { Preload, OrbitControls, shaderMaterial } from "@react-three/drei";
import * as THREE from "three";

/* @ts-ignore */
import vertex from "../shaders/glsl/vertex.glsl";
/* @ts-ignore */
import frag from "../shaders/glsl/frag.glsl";
import { Controls } from "../../layout/CanvasLayout/CanvasLayout";

const ColorShiftMaterial = shaderMaterial(
    {
        time: 0,
        color: new THREE.Color(0.05, 0.0, 0.025),
    },
    vertex,
    frag
);

// This is the 🔑 that HMR will renew if this file is edited
// It works for THREE.ShaderMaterial as well as for drei/shaderMaterial
// @ts-ignore
ColorShiftMaterial.key = THREE.MathUtils.generateUUID();

extend({ ColorShiftMaterial });

interface BoxProps {
    color: string;
}

const Box = (props: BoxProps) => {
    let color = props.color;
    // This reference will give us direct access to the mesh
    const mesh = useRef<Mesh>(null!);

    // Set up state for the hovered and active state

    const [active, setActive] = useState(false);

    // Rotate mesh every frame, this is outside of React without overhead
    useFrame(() => {
        if (mesh.current)
            mesh.current.rotation.x = mesh.current.rotation.y += 0.01;
    });

    return (
        <mesh
            ref={mesh}
            scale={active ? [1.5, 1.5, 1.5] : [1, 1, 1]}
            onClick={(event) => setActive(!active)}
        >
            {/* <OrbitControls /> */}
            <boxBufferGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color={color} />
        </mesh>
    );
};

export default Box;
