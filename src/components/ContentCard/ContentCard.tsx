import React, { useMemo } from 'react'
import { isFunction } from 'lodash-es'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Icon, Space } from '../index'
import { Typography } from '../Typography'

export interface ContentCardProps {
  cardData?: any
  className?: string
}

export const ContentCard = ({
  cardData,
  className = undefined
}: ContentCardProps) => {
  const { content, rounded = false, size, subtitle, subtitleIcon } = cardData

  const renderContent = () => {
    if (isFunction(content)) {
      return content()
    }

    return content
  }

  return (
    <ContentContainer className={className}>
      <Space size={8}>
        <Icon
          className='card-icon'
          color='brandColorTint15'
          rounded={rounded}
          size={size}>
          {subtitleIcon}
        </Icon>
        <Typography variant='headingTitle' color='primaryColor'>
          {subtitle}
        </Typography>
      </Space>
      <StyledContent variant='paragraphRegular' color='textSecondary'>
        {renderContent()}
      </StyledContent>
    </ContentContainer>
  )
}

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 32px 25px 32px 25px;
`

const StyledContent = styled(Typography)`
  margin-left: 36px;
  max-width: 715px;
`
