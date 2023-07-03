import styled from 'styled-components';
import NxWelcome from './nx-welcome';
import React,{useState,useEffect} from 'react';
import Header from 'src/components/Header';
import Footer from 'src/components/Footer';
import Body from 'src/components/Body';

const StyledContainer=styled.div`
display:flex;
flex-direction:column;
justify-content:space-between;
height:100vh;
`

const App=()=>{
  const[headerTitle,setHeaderTitle]=useState('');
  useEffect(()=>{
    setHeaderTitle('Hospital Management System')
  },[])

  return(
    <StyledContainer>
      <Header header={headerTitle} />
      <Body/>
      <Footer/>
    </StyledContainer>
  )
}
export default App;

