import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import Divider from '@mui/material/Divider'

import ItemList from './Sidebar/ItemList'

import { useGroupsContext } from '../context/group_context'

const drawerWidth = 240

export default function Sidebar() {
  return (
    <Box sx={{ display: 'flex' }}>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant='permanent'
        anchor='left'
      >
        <Divider />

        {/* First block of item */}
        <ItemList />
        <Divider />

        {/* Second block of item */}
        <ItemList />
      </Drawer>
    </Box>
  )
}
