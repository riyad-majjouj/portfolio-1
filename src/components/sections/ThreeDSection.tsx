
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Box, Sphere, Torus } from '@react-three/drei';
import { TerminalWindow } from '../TerminalWindow';

const Scene = () => {
  return (
    <>
      <ambientLight intensity={0.1} />
      <directionalLight position={[0, 0, 5]} intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#00ff41" />
      
      <Box position={[-2, 0, 0]} args={[1, 1, 1]}>
        <meshStandardMaterial color="#00ff41" wireframe />
      </Box>
      
      <Sphere position={[0, 0, 0]} args={[0.8, 16, 16]}>
        <meshStandardMaterial color="#39ff14" transparent opacity={0.7} />
      </Sphere>
      
      <Torus position={[2, 0, 0]} args={[0.8, 0.3, 16, 100]}>
        <meshStandardMaterial color="#00cc33" wireframe />
      </Torus>
      
      <OrbitControls enableZoom={true} enablePan={true} enableRotate={true} />
    </>
  );
};

export const ThreeDSection = () => {
  return (
    <section id="3d" className="min-h-screen flex items-center justify-center p-6">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-8">
        <TerminalWindow title="3d@developer:~$ ./render_scene.sh">
          <div className="space-y-4">
            <div className="terminal-prompt">
              <span className="text-terminal-accent">dev@graphics:~$</span>{' '}
              <span className="text-terminal-primary">./initialize_threejs_scene.sh</span>
            </div>
            
            <div className="terminal-output space-y-2">
              <div><span className="text-terminal-muted">[WEBGL]</span> Initializing WebGL context...</div>
              <div><span className="text-terminal-muted">[SCENE]</span> Creating 3D scene...</div>
              <div><span className="text-terminal-muted">[CAMERA]</span> Setting up perspective camera...</div>
              <div><span className="text-terminal-muted">[LIGHTS]</span> Adding ambient and directional lighting...</div>
              <div><span className="text-terminal-muted">[MESHES]</span> Loading geometric primitives...</div>
              <div><span className="text-terminal-muted">[CONTROLS]</span> Enabling orbit controls...</div>
              <div><span className="text-terminal-accent">[SUCCESS]</span> 3D scene rendered successfully!</div>
            </div>

            <div className="mt-6 space-y-2">
              <div className="text-terminal-accent">Interactive Controls:</div>
              <div className="text-terminal-text text-sm space-y-1">
                <div>• Mouse drag: Rotate camera</div>
                <div>• Mouse wheel: Zoom in/out</div>
                <div>• Right click + drag: Pan view</div>
              </div>
            </div>
          </div>
        </TerminalWindow>

        <TerminalWindow title="webgl@developer:~$ ./display_3d_scene">
          <div className="h-96 w-full bg-black border border-terminal-border rounded">
            <Suspense fallback={
              <div className="flex items-center justify-center h-full">
                <div className="text-terminal-accent animate-pulse">Loading 3D Scene...</div>
              </div>
            }>
              <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>
                <Scene />
              </Canvas>
            </Suspense>
          </div>
          
          <div className="mt-4 text-terminal-muted text-sm">
            <div>Three.js + React Three Fiber + WebGL</div>
            <div>Real-time 3D rendering in the browser</div>
          </div>
        </TerminalWindow>
      </div>
    </section>
  );
};
