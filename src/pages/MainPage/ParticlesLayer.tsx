import { useCallback, useEffect, useState } from 'react';
import Particles from 'react-particles';
import { loadFull } from 'tsparticles';
import { Container, Engine } from 'tsparticles-engine';

import { BoxProps, forwardRef } from '@chakra-ui/react';

import { Layer } from './Layer';
import { particlesJSON } from './Particles';

export type ParticlesLayerProps = {
  optimize: boolean;
} & BoxProps;

export const ParticlesLayer = forwardRef<ParticlesLayerProps, 'div'>(
  ({ optimize, ...rest }, ref) => {
    const particlesInit = useCallback(async (engine: Engine) => {
      await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async (container: Container | undefined) => {
      setParticles(container);
    }, []);

    const [particles, setParticles] = useState<Container | undefined>(undefined);

    useEffect(() => {
      if (optimize) {
        particles?.pause();
      } else {
        particles?.play();
      }
    }, [optimize, particles]);

    return (
      <Layer ref={ref} {...rest}>
        <Particles
          id='tsparticles'
          init={particlesInit}
          loaded={particlesLoaded}
          options={particlesJSON}
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
          }}
        />
      </Layer>
    );
  },
);
