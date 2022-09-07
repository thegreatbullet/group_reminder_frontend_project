import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'

import List from './CustomList'

export default function CustomCard() {
  return (
    <Card
      variant='outlined'
      sx={{
        width: {
          sx: 1.0,
          sm: 250,
          md: 300,
        },
      }}
    >
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color='text.secondary' gutterBottom>
          Todo:
        </Typography>
        <List />
      </CardContent>
    </Card>
  )
}
