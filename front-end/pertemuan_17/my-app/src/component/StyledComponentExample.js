import styled from 'styled-components';

const StyledButton = styled.button`
    background-color: black;
    font-size: 32px;
    color: white;
`;

function StyledComponentExample() {
    return <StyledButton>Login</StyledButton>
}

export default StyledComponentExample;