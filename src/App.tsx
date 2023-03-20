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
        left={isSmall ? '50%' : 'auto'}
        top={isSmall ? 'auto' : '50%'}
        right={isSmall ? 'auto' : '4'}
        bottom={isSmall ? '4' : 'auto'}
        transform={isSmall ? 'translate(-50%, 0)' : 'translate(0, -50%)'}
        direction={isSmall ? 'row' : 'column'}
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
              width='100%'
              height='100%'
              src='./sidebar/BryanSCD.png'
              objectFit='scale-down'
              objectPosition='center'
              rounded='full'
            />
          }
          isRound
          label='Contact'
          onButtonClick={() => scrollToRef(contactPageRef.current?.offsetTop as number)}
        />
      </Sidebar>

      {/* Pages controller */}
      <Box bgGradient='linear-gradient(180deg, #09090b 0%, #021120 33%, #665cb2 80%)' zIndex='10'>
        <MainPage ref={mainPageRef} />
        <ExperiencePage
          ref={experiencePageRef}
          separatorColor='black'
          marginTop='-20'
          childrenPaddingRight={sidebarOffsetWidth}
        />
        <ProjectsPage
          ref={projectsPageRef}
          separatorColor='#030F1B'
          marginTop={isLarge ? '0' : '-40'}
          childrenPaddingRight={sidebarOffsetWidth}
        />
        <StudiesPage
          ref={studiesPageRef}
          separatorColor='#282E58'
          childrenPaddingRight={sidebarOffsetWidth}
        />
        <ContactPage
          ref={contactPageRef}
          separatorColor='#564EA2'
          childrenPaddingRight={isLarge ? sidebarOffsetWidth : undefined}
          paddingBottom={isSmall ? '20' : undefined}
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
