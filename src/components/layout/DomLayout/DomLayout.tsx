import { useEffect, useRef } from "react";
import useStore from "../../../hooks/store";
import styled from "styled-components";

const DomLayout = ({ children }: any) => {
    const ref = useRef(null);

    useEffect(() => {
        useStore.setState({ dom: ref });
    }, []);

    return <StyledDOMWrapper ref={ref}>{children}</StyledDOMWrapper>;
};

const StyledDOMWrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100%;
    z-index: 10;
    overflow: auto;
`;

export default DomLayout;
