import React from 'react'
import { Button } from '@mui/material'
import { Box } from '@mui/system'

import useChoose from '../../utils/hooks/useChoose'
import Localizator from './Localizator'

const TranslationSwitch = () => {
  const { setEngChoosen, setUkChoosen, isChoosen } = useChoose()

  return (
    <Box display="flex" flexDirection="column">
      <Button
        onClick={setEngChoosen}
        variant={isChoosen.eng ? 'contained' : 'null'}
        sx={{
          fontSize: { xs: '16px', sm: '18px' },
          color: 'primary.white',
        }}
      >
        <Localizator text="English" />
      </Button>
      <Button
        onClick={setUkChoosen}
        variant={isChoosen.uk ? 'contained' : 'null'}
        sx={{
          fontSize: { xs: '16px', sm: '18px' },
          color: 'primary.white',
        }}
      >
        <Localizator text="Ukrainian" />
      </Button>
    </Box>
  )
}

export default TranslationSwitch
