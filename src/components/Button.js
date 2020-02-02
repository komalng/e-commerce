import styled from 'styled-components';

export const ButtonContainer = styled.button`
text-transform:capitalize;
font-size:1.4rem;
backgroung:transparent;
border:0.05rem solid var(--lightBlue);
border-color:var(--lightBlue);
color:var(--lightBlue);
border-radius:0.5rem;
pading:0.2rem 0.5rem;
cursor:pointer;
margin:0.2rem 0.5rem 0.2rem 0;
transition:all 0.5s ease-in-out;
&:hover{
  background:var(--lightBlue);
  color:var(--lightBlue);
}
&:focus{
  outline:none;
}
 `;