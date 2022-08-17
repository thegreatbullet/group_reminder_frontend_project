import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'

import Link from 'next/link'
import Image from 'next/image'

import { Box } from '@mui/material'
import Grid from '@mui/material/Grid'

const iconSoldierBackgroundColor = {
  background: '#37b24d',
  color: '#fff',
}

const iconSoldierBorderColor = {
  border: '0.2em #37b24d solid',
  boxShadow: '0.3em 0.3em #888888',
}

const iconUniStudentBackgroundColor = {
  background: '#f59f00',
  color: '#fff',
  border: '0.2em #f59f00 solid',
  boxShadow: '0.3em 0.3em #888888',
}

const iconUniStudentArrowColor = {
  background: '#f59f00',
  color: '#fff',
}

export default function Timeline() {
  return (
    <>
      <Box sx={{ pl: 2, pr: 4 }}>
        <VerticalTimeline lineColor='#495057'>
          <VerticalTimelineElement
            className='vertical-timeline-element--education'
            date='2000 - ?'
            iconStyle={iconUniStudentBackgroundColor}
            contentStyle={iconUniStudentBackgroundColor}
            contentArrowStyle={iconUniStudentArrowColor}
          >
            <h3>Student Life</h3>
            <p>Went to Poly studying Computer Engineering.</p>
            <p>In Uni studying Electrical Engineering.</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className='vertical-timeline-element--work'
            date='2019 - 2022'
            iconStyle={iconSoldierBackgroundColor}
            contentStyle={iconSoldierBorderColor}
            contentArrowStyle={iconSoldierBackgroundColor}
          >
            <h3>NS</h3>
            <p>Read and self studied alot.</p>
            <p>Learnt coding.</p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </Box>
    </>
  )
}
