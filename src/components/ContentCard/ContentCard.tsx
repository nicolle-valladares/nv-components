import React, { useMemo } from 'react'
import { isFunction } from 'lodash-es'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Button, Icon, Space } from '../index'
import { Typography } from '../Typography/Typography'

export interface ContentCardProps {
  audit: Object
  cardData: any
  className?: string
  toggleCalendlyModal?: any
}

export const ContentCard = ({
  audit = {},
  cardData,
  className = undefined,
  toggleCalendlyModal = undefined
}: ContentCardProps) => {
  const {
    content,
    rounded = false,
    size,
    subtitle,
    subtitleIcon,
    getButtons
  } = cardData

  const buttons = useMemo(
    () => getButtons?.(toggleCalendlyModal),
    [getButtons, toggleCalendlyModal]
  )

  const renderContent = () => {
    if (isFunction(content)) {
      return content()
    }

    return content
  }

  return (
    <ContentContainer data-testid='content-container' className={className}>
      {/* <SubtitleContainer data-testid='subtitle-container' size={8}>
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
      </SubtitleContainer> */}
      <StyledContent variant='paragraphRegular' color='textSecondary'>
        {renderContent()}
        {!!buttons?.length && (
          <ButtonWrapper>
            {buttons.length &&
              buttons.map((btn: any) => (
                <Button
                  key={btn.key}
                  type='primary'
                  onClick={(e: React.MouseEvent) => btn.onClick({ ...audit })}
                  style={{ height: 24 }}>
                  <Typography variant='smallButtonText' color='bgWhite'>
                    {btn.label}
                  </Typography>
                </Button>
              ))}
          </ButtonWrapper>
        )}
      </StyledContent>
    </ContentContainer>
  )
}

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 32px 25px 32px 25px;
`

// const SubtitleContainer = styled(Space)`
//   margin-bottom: 16px;
//   align-items: center;
//   > div:first-child {
//     display: flex;
//     align-items: center;
//   }
// `

const StyledContent = styled(Typography)`
  margin-left: 36px;
  max-width: 715px;
`

const ButtonWrapper = styled.div`
  display: flex;
  margin-top: 1rem;
  button {
    margin-right: 1rem;
    padding: 0.5rem 1rem;
  }
`

ContentCard.propTypes = {
  audit: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    reportFileExtension: PropTypes.string
  }),
  cardData: PropTypes.shape({
    /** If the icon should be rounded */
    rounded: PropTypes.bool,
    /** Icon size */
    size: PropTypes.number,
    /** Subtitle icon in the card */
    subtitleIcon: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
    /** Subtitle text in the card */
    subtitle: PropTypes.string,
    /** Content in the card */
    content: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.func,
      PropTypes.node
    ])
  }),
  toggleCalendlyModal: PropTypes.func,
  /** Additional class */
  className: PropTypes.string
}
