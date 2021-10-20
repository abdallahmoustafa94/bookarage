import {Tab} from 'semantic-ui-react'
import ExploreInquires from '../components/inquires/ExploreInquires'
import DirectInquires from '../components/inquires/DirectInquires'
import Sent from '../components/inquires/Sent'
import Rejected from '../components/inquires/Rejected'

const Inquires = () => {
  const panes = [
    {
      menuItem: 'Explore Inquires',
      render: () => <ExploreInquires />,
    },
    {
      menuItem: 'Direct Inquires',
      render: () => <DirectInquires />,
    },
    {
      menuItem: 'Sent',
      render: () => <Sent />,
    },
    {
      menuItem: 'Rejected',
      render: () => <Rejected />,
    },
  ]

  return (
    <div className="md:px-24 xs:px-8  ">
      <Tab menu={{text: true, className: 'wrapped'}} panes={panes} />
    </div>
  )
}

export default Inquires
