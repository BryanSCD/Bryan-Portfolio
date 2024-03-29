import { useInView } from 'framer-motion';
import { useMemo, useRef, useState } from 'react';

import { VStack, forwardRef } from '@chakra-ui/react';

import { Page, PageProps } from '../../components';
import { AvatarLayer } from './AvatarLayer/AvatarLayer';
import { ParticlesLayer } from './ParticlesLayer/ParticlesLayer';
import { TouchLayer } from './TouchLayer/TouchLayer';

export const MainPage = forwardRef<PageProps, 'div'>(({ ...rest }, ref) => {
  const divAvatar = useRef<HTMLDivElement>(null);

  const divContainer = useRef<HTMLDivElement>(null);

  const pageInView = useInView(divContainer);

  const [avatarLoaded, setAvatarLoaded] = useState(false);

  const AvatarLayerRendered = useMemo<JSX.Element>(() => {
    return (
      <AvatarLayer
        ref={divAvatar}
        zIndex={20}
        onLoadedAvatar={() => {
          setAvatarLoaded(true);
        }}
        onLoadingAvatar={() => {
          setAvatarLoaded(false);
        }}
      />
    );
  }, []);

  return (
    <Page ref={ref} childrenPaddingX='0' childrenPaddingY='0' {...rest}>
      <VStack ref={divContainer} height='100vh' spacing='-100vh' width='100%'>
        {/* Particles layer */}
        <ParticlesLayer optimize={!pageInView} zIndex={10} />
        {/* Avatar layer */}
        {pageInView && AvatarLayerRendered}
        {/* Touch layer */}
        <TouchLayer
          showIcons={avatarLoaded}
          zIndex={30}
          onClickCapture={(e) => {
            const event = new MouseEvent('click', e.nativeEvent);
            divAvatar.current?.lastChild?.dispatchEvent(event);
          }}
          onPointerMoveCapture={(e) => {
            const event = new PointerEvent('pointermove', e.nativeEvent);
            divAvatar.current?.lastChild?.dispatchEvent(event);
          }}
        />
      </VStack>
    </Page>
  );
});
