import { Avatar } from '@readyplayerme/visage';

import { BoxProps, forwardRef } from '@chakra-ui/react';

import { Layer } from './Layer';

export const AvatarLayer = forwardRef<BoxProps, 'div'>(({ ...rest }, ref) => {
  return (
    <Layer ref={ref} {...rest}>
      <Avatar
        ambientLightColor='#fff5b6'
        ambientLightIntensity={0.25}
        animationSrc='/main_page/male-idle.glb'
        cameraInitialDistance={0.9}
        cameraTarget={1.59}
        dirLightColor='#002aff'
        dirLightIntensity={5}
        headMovement
        modelSrc='/main_page/bryanavatar.glb'
        scale={1}
        spotLightAngle={0.314}
        spotLightColor='#fff5b6'
        spotLightIntensity={1}
        style={{
          background: 'transparent',
          position: 'absolute',
          width: '100%',
          height: '100%',
        }}
      />
    </Layer>
  );
});
