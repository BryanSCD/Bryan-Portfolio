import { Box, useBreakpointValue } from "@chakra-ui/react";
import { ExperiencePage, MainPage, ProjectsPage, StudiesPage } from "./pages";
import { ContactPage } from "./pages/ContactPage";

function App() {
  const isMobile = useBreakpointValue({ base: true, md: false });
  return (
    <Box bgGradient='linear-gradient(180deg, #09090b 0%, #021120 33%, #665cb2 80%)'>
      <MainPage />
      <ExperiencePage separatorColor='black' marginTop='-20' />
      <ProjectsPage
        separatorColor='#030F1B'
        marginTop={isMobile ? "0" : "-40"}
      />
      <StudiesPage separatorColor='#282E58' />
      <ContactPage separatorColor='#564EA2' />
    </Box>
  );
}

export default App;
