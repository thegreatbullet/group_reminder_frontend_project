import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'

import Link from 'next/link'
import Image from 'next/image'

const currentlySelectedBlueColor = {
  background: '#339af0',
  color: '#fff',
}

const iconBabyBackgroundColor = {
  background: '#ae3ec9',
  color: '#fff',
}

const iconBabyBorderColor = {
  border: '0.2em #ae3ec9 solid',
  'box-shadow': '0.3em 0.3em #888888',
}

const iconYoungStudentBackgroundColor = {
  background: '#4263eb',
  color: '#fff',
}

const iconYoungStudentBorderColor = {
  border: '0.2em #4263eb solid',
  'box-shadow': '0.3em 0.3em #888888',
}

const iconOlderStudentBackgroundColor = {
  background: '#1098ad',
  color: '#fff',
}

const iconOlderStudentBorderColor = {
  border: '0.2em #1098ad solid',
  'box-shadow': '0.3em 0.3em #888888',
}

const iconSoldierBackgroundColor = {
  background: '#37b24d',
  color: '#fff',
}

const iconSoldierBorderColor = {
  border: '0.2em #37b24d solid',
  'box-shadow': '0.3em 0.3em #888888',
}

const iconUniStudentBackgroundColor = {
  background: '#f59f00',
  color: '#fff',
}

const iconUniStudentBorderColor = {
  border: '0.2em #f59f00 solid',
  'box-shadow': '0.3em 0.3em #888888',
}

export default function Timeline() {
  return (
    <>
      <VerticalTimeline lineColor='black' className='py-5 px-3'>
        <VerticalTimelineElement
          className='vertical-timeline-element--work clement'
          date='2000 - 2005'
          iconStyle={iconBabyBackgroundColor}
          contentStyle={iconBabyBorderColor}
          contentArrowStyle={iconBabyBackgroundColor}
        >
          <h3>Baby</h3>
          <p>I loved playing with toys and running around.</p>
          <p>Favourite Shows: Power ranger, Transformer, Hi-5.</p>
          <p>Favourite Food: My mothers food.</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className='vertical-timeline-element--work'
          date='2005 - 2012'
          iconStyle={iconYoungStudentBackgroundColor}
          contentStyle={iconYoungStudentBorderColor}
          contentArrowStyle={iconYoungStudentBackgroundColor}
        >
          <h3>Young Student</h3>
          <p>Went to an after school daycare.</p>
          <p>Went for alot of tuitions.</p>
          <p>Favourite games: Counter Strike (LAN), Backyard Monsters.</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className='vertical-timeline-element--work'
          date='2012 - 2019'
          iconStyle={iconOlderStudentBackgroundColor}
          contentStyle={iconOlderStudentBorderColor}
          contentArrowStyle={iconOlderStudentBackgroundColor}
        >
          <h3>Older Student</h3>
          <p>
            Studied a little during lower sec, studied alot during upper sec.
          </p>
          <p>
            Slacked for Y1S1 in poly, studied for the rest to pull up my GPA.
          </p>
          <p>Favourite games: League Of Legends</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className='vertical-timeline-element--work'
          date='2019 - 2022'
          iconStyle={iconSoldierBackgroundColor}
          contentStyle={iconSoldierBorderColor}
          contentArrowStyle={iconSoldierBackgroundColor}
        >
          <h3>National Service</h3>
          <p>Hated NS at first</p>
          <p>Read and self studied alot.</p>
          <p>Made alot of cool and good friends.</p>
          <p>Loved NS</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className='vertical-timeline-element--education'
          date='2022 - ?'
          iconStyle={iconUniStudentBackgroundColor}
          contentStyle={iconUniStudentBackgroundColor}
          contentArrowStyle={iconUniStudentBackgroundColor}
        >
          <h3>Uni Student</h3>
          <p>Just started.</p>
          <p>Still going.</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </>
  )
}
