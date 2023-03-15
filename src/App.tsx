import { Box, useBreakpointValue } from "@chakra-ui/react";
import { Sidebar, SidebarItem } from "./components";
import { IoBag, IoBook, IoFolderOpen, IoHappy } from "react-icons/io5";
import { ExperiencePage, MainPage, ProjectsPage, StudiesPage } from "./pages";
import { ContactPage } from "./pages/ContactPage";

function App() {
  const isMobile = useBreakpointValue({ base: true, md: false });
  return (
    <>
      <Sidebar zIndex='1000'>
        <SidebarItem icon={<IoHappy />} label='Main' />
        <SidebarItem
          icon={<IoFolderOpen />}
          label='Experience'
        />
        <SidebarItem
          icon={<IoBag />}
          label='Projects'
        />
        <SidebarItem
          icon={<IoBook />}
          label='Studies'
        />
      </Sidebar>
      <Box
        bgGradient='linear-gradient(180deg, #09090b 0%, #021120 33%, #665cb2 80%)'
        zIndex='10'
      >
        <MainPage />
        <ExperiencePage separatorColor='black' marginTop='-20' />
        <ProjectsPage
          separatorColor='#030F1B'
          marginTop={isMobile ? "0" : "-40"}
        />
        <StudiesPage separatorColor='#282E58' />
        <ContactPage separatorColor='#564EA2' />
      </Box>
    </>
  );
}

export default App;
