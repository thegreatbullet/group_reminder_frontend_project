import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import Divider from '@mui/material/Divider'

import GroupList from './Sidebar/GroupList'
import AddGroup from './Sidebar/AddGroup'

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
        <Box sx={{ py: 2, px: 1 }}>
          <AddGroup />
        </Box>
        <Divider />

        {/* Second block of item */}
        <GroupList />
      </Drawer>
    </Box>
  )
}
