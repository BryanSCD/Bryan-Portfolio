import { useEffect, useRef, useState } from 'react';
import { IoBag, IoBook, IoFolderOpen, IoHappy } from 'react-icons/io5';

import { Box, Image, useBreakpointValue, useToast } from '@chakra-ui/react';

import { Sidebar, SidebarItem } from './components';
import { ExperiencePage, MainPage, ProjectsPage, StudiesPage } from './pages';
import { ContactPage } from './pages/ContactPage';

function App() {
  const toast = useToast();

  useEffect(() => {
    const isMobile = /iphone|ipad|ipod|android|webos|blackberry|iemobile|opera mini/i.test(
      navigator.userAgent.toLowerCase(),
    );

    if (isMobile) {
      toast({
        title: 'Just a detail...',
        description: 'This website is best viewed on a large screen!',
        status: 'info',
        duration: 10000,
        isClosable: true,
        position: 'top',
      });
    }
  }, [toast]);

  const isSmall = useBreakpointValue({ base: true, md: false }, { ssr: false });
  const isLarge = useBreakpointValue({ base: true, xl: false }, { ssr: false });

  const sidebarRef = useRef<HTMLDivElement>(null);
  const [sidebarOffsetWidth, setSidebarOffsetWidth] = useState<string | undefined>(undefined);

  const mainPageRef = useRef<HTMLDivElement>(null);
  const experiencePageRef = useRef<HTMLDivElement>(null);
  const projectsPageRef = useRef<HTMLDivElement>(null);
  const studiesPageRef = useRef<HTMLDivElement>(null);
  const contactPageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isSmall && sidebarRef.current) {
      setSidebarOffsetWidth(
        `${
          (document.documentElement.clientWidth -
            sidebarRef.current?.getBoundingClientRect().right) *
            2 +
          sidebarRef.current?.clientWidth
        }px`,
      );
    } else {
      setSidebarOffsetWidth(undefined);
    }
  }, [isSmall, sidebarRef]);

  return (
    <>
      <Sidebar
        ref={sidebarRef}
        bottom={isSmall ? '4' : 'auto'}
        direction={isSmall ? 'row' : 'column'}
        left={isSmall ? '50%' : 'auto'}
        right={isSmall ? 'auto' : '4'}
        top={isSmall ? 'auto' : '50%'}
        transform={isSmall ? 'translate(-50%, 0)' : 'translate(0, -50%)'}
        zIndex='1000'
      >
        {/* Item ref to Main Page */}
        <SidebarItem
          icon={<IoHappy />}
          label='Main'
          onButtonClick={() => scrollToRef(mainPageRef.current?.offsetTop as number)}
        />
        {/* Item ref to Experience Page */}
        <SidebarItem
          icon={<IoFolderOpen />}
          label='Experience'
          onButtonClick={() => scrollToRef(experiencePageRef.current?.offsetTop as number)}
        />
        {/* Item ref to Projects Page */}
        <SidebarItem
          icon={<IoBag />}
          label='Projects'
          onButtonClick={() => scrollToRef(projectsPageRef.current?.offsetTop as number)}
        />
        {/* Item ref to Studies Page */}
        <SidebarItem
          icon={<IoBook />}
          label='Studies'
          onButtonClick={() => scrollToRef(studiesPageRef.current?.offsetTop as number)}
        />

        {/* Item ref to Contact Page */}
        <SidebarItem
          icon={
            <Image
              height='100%'
              objectFit='scale-down'
              objectPosition='center'
              rounded='full'
              src='./sidebar/BryanSCD.png'
              width='100%'
            />
          }
          isRound
          label='Contact'
          onButtonClick={() => scrollToRef(contactPageRef.current?.offsetTop as number)}
        />
      </Sidebar>

      {/* Pages controller */}
      <Box
        bgGradient='linear-gradient(180deg, #09090b 0%, #021120 33%, #665cb2 80%)'
        overflowX='hidden'
        width='100%'
        zIndex='10'
      >
        <MainPage ref={mainPageRef} />
        <ExperiencePage
          ref={experiencePageRef}
          childrenPaddingRight={sidebarOffsetWidth}
          marginTop='-20'
          separatorColor='black'
        />
        <ProjectsPage
          ref={projectsPageRef}
          childrenPaddingRight={sidebarOffsetWidth}
          marginTop={isLarge ? '0' : '-40'}
          separatorColor='#030F1B'
        />
        <StudiesPage
          ref={studiesPageRef}
          childrenPaddingRight={sidebarOffsetWidth}
          separatorColor='#282E58'
        />
        <ContactPage
          ref={contactPageRef}
          childrenPaddingRight={isLarge ? sidebarOffsetWidth : undefined}
          paddingBottom={isSmall ? '20' : undefined}
          separatorColor='#564EA2'
        />
      </Box>
    </>
  );
}

const scrollToRef = (offsetTop: number) => {
  window.scrollTo({
    top: offsetTop,
    behavior: 'smooth',
  });
};

export default App;
