import * as React from 'react'
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'

import Divider from '@mui/material/Divider'

import ItemList from './ItemList/ItemList'

const drawerWidth = 240

export default function SidebarDesktop() {
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
