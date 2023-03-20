import { useCallback } from 'react';
import Particles from 'react-particles';
import { loadFull } from 'tsparticles';
import { Engine } from 'tsparticles-engine';

import { BoxProps, forwardRef } from '@chakra-ui/react';

import { Layer } from './Layer';
import { particlesJSON } from './Particles';

export const ParticlesLayer = forwardRef<BoxProps, 'div'>(({ ...rest }, ref) => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);
  return (
    <Layer ref={ref} {...rest}>
      <Particles
        id='tsparticles'
        init={particlesInit}
        options={particlesJSON}
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
        }}
      />
    </Layer>
  );
});
