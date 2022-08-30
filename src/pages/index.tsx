import type { NextPage } from "next";
import styled, { ThemeProvider } from "styled-components";
import CanvasLayout from "../components/layout/CanvasLayout";
import DomLayout from "../components/layout/DomLayout";
import Homepage from "../components/dom/Homepage";
import Box from "../components/canvas/Box";

const theme = {
	bg: "#574CD1",
	text: "#ffffff",
	yellow: "#FCED90",
};

// dom components go here
const DOM = () => {
	return (
		<DomLayout>
			<ThemeProvider theme={theme}>
				<Homepage />
			</ThemeProvider>
		</DomLayout>
	);
};
	
// canvas components go here
const R3F = () => {	
	return (
		<CanvasLayout>
			<ambientLight />
			<pointLight position={[10, 10, 10]} />
			<Box color={theme.bg} />
		</CanvasLayout>
	);
};
	
const Home: NextPage = () => {
	return (
		<>
		<DOM />
		<R3F />
		</>
		);
	};
	
export default Home;
		