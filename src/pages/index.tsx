import type { NextPage } from "next";
import styled, { ThemeProvider } from "styled-components";
import CanvasLayout from "../components/layout/CanvasLayout";
import DomLayout from "../components/layout/DomLayout";
import Main from "../components/dom/Main";
import Box from "../components/canvas/Box";
import { View } from "@react-three/drei";
import { useRef } from "react";
import About from "../components/dom/About";

const theme = {
	bg: "#574CD1",
	text: "#ffffff",
	yellow: "#FCED90",
};

const Container = styled.div`
	height: auto;
`;
	
const Home: NextPage = () => {
  // refs for each site section so r3f components can be linked to dom elements
  const main = useRef<HTMLDivElement>(null);
  const about = useRef<HTMLDivElement>(null);
  const projects = useRef<HTMLDivElement>(null);

  // dom components go here
  const DOM = () => {
    return (
      // @ts-expect-error
      <ThemeProvider theme={theme}>
        <DomLayout>
            <div ref={main} style={{ height: '100vh' }} >
              <Main />
            </div>
            <div ref={about} style={{ height: '100vh' }} >
              <About />
            </div>
        </DomLayout>
      </ThemeProvider>
    );
  };
	
  // canvas components go here
  const R3F = () => {	
    return (
      <CanvasLayout>
        {/* @ts-expect-error */}
        <View track={main}>
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          <Box color={theme.yellow} />
        </View>
        <View track={about}>
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          <Box color={theme.bg} />
        </View>
      </CanvasLayout>
    );
  };

	return (
		<>
			<DOM />
			<R3F />
		</>
		);
	};
	
export default Home;
		