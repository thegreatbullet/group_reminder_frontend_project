import Box from '@mui/material/Box'

import ButtonAddGroup from './components/ButtonAddGroup'
import CustomCard from '../generic_components/CardCustom'
import FormNewGroup from './components/FormNewGroup'

export default function MainAppDesktop() {
  return (
    <>
      <Box sx={{ p: 5 }}>
        <Box sx={{ mb: 5 }}>
          <ButtonAddGroup />
        </Box>

        <Box sx={{ display: 'flex' }}>
          <CustomCard date='Today' />
          <CustomCard date='Tomorrow' />
        </Box>

        <Box>
          <FormNewGroup />
        </Box>
      </Box>
    </>
  )
}
