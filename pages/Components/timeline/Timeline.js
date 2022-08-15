import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'

import Link from 'next/link'
import Image from 'next/image'

const currentlySelectedBlueColor = {
  background: '#495057',
  color: '#fff',
}

const iconBabyBackgroundColor = {
  background: '#ae3ec9',
  color: '#fff',
}

const iconYoungStudentBackgroundColor = {
  background: '#4263eb',
  color: '#fff',
}

const iconOlderStudentBackgroundColor = {
  background: '#1098ad',
  color: '#fff',
}

const iconRedBackgroundColor = {
  background: 'rgb(233, 30, 99)',
  color: '#fff',
}

const iconSoldierBackgroundColor = {
  background: '#37b24d',
  color: '#fff',
}

const iconUniStudentBackgroundColor = {
  background: '#f59f00',
  color: '#fff',
}

export default function Timeline() {
  return (
    <>
      <VerticalTimeline lineColor='black'>
        <VerticalTimelineElement
          className='vertical-timeline-element--work'
          contentStyle={currentlySelectedBlueColor}
          contentArrowStyle={currentlySelectedBlueColor}
          date='2000 - 2005'
          iconStyle={iconBabyBackgroundColor}
          icon={
            <Image
              src='/svg/Baby_boy.svg'
              height={26}
              width={26}
              alt='An icon of a baby boy'
            />
          }
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
        >
          <h3>Uni Student</h3>
          <p>Just started.</p>
          <p>Still going.</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </>
  )
}
