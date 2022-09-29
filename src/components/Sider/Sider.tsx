import React, { ReactNode } from 'react'
import styled from 'styled-components'

interface LayoutProps {
  sideContent?: ReactNode
  mainContent?: ReactNode
  type?: 'light' | 'dark'
}

export const Sider = ({
  sideContent,
  mainContent,
  type = 'light'
}: LayoutProps) => (
  <Layout>
    <LeftContent type={type}>{sideContent}</LeftContent>
    <MainContent>{mainContent}</MainContent>
  </Layout>
)

export const Layout = styled.div`
  display: flex;
  height: 100vh;
  background: ${props => props.theme.colors.bgWhite};
`

export const LeftContent = styled.div<{ type?: string }>`
  display: inline-table;
  overflow: auto;

  /* TODO: Encontrar un mejor método para aplicar el tipo "dark" al sider 
  dependiendo la clase que tenga el menú. */
  background: ${props =>
    props.type == 'dark'
      ? props.theme.colors.primaryColor
      : props.theme.colors.bgWhite};
  border-right: 1px solid ${props => props.theme.colors.brandColorTint15};
`

export const MainContent = styled.div`
  flex: 0 1 100%;
`
