import React from 'react'

import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import InboxIcon from '@mui/icons-material/MoveToInbox'
import MailIcon from '@mui/icons-material/Mail'

import { useGroupContext } from '../../context/group_context'

export default function ItemList() {
  const { groups } = useGroupContext()
  console.log(groups[0])
  return (
    <>
      <List>
        {groups.map((group) => (
          <ListItem key={group.id} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {group.id % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={group.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </>
  )
}
