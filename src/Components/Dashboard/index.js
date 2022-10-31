import React from 'react'
import { AlignButtonSC, ButtonSC, DashboardWrapperSC, DescriptionSC } from './styles'
import { Link } from "react-router-dom";

export const Dashboard = () => {
  return (
    <DashboardWrapperSC> 
      <DescriptionSC>Which grid would you like to display?</DescriptionSC>
      <AlignButtonSC>
      <Link to='grid/completions'>
        <ButtonSC>Completions</ButtonSC>
      </Link>
      <Link to='grid/production'>
        <ButtonSC>Production</ButtonSC>
      </Link>
      </AlignButtonSC>
    </DashboardWrapperSC>
  )
}
