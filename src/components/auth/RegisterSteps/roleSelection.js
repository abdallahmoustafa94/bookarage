import {Header} from 'semantic-ui-react'

const RoleSelectionStep = ({nextStep}) => {
  const handleOnClickRole = type => {
    localStorage.setItem('role', JSON.stringify(type))
    nextStep({type: 'step', value: {role: type}})
  }
  return (
    <div className="text-center">
      <Header as="h2" className="font-semibold text-labelColor">
        Register As ?
      </Header>

      <div className="my-16">
        <ul>
          <li
            className="mb-5 text-primaryRedColor-default font-medium text-xl cursor-pointer"
            onClick={() => handleOnClickRole('serviceProvider')}
          >
            Service Provider
          </li>
          <li
            className="mb-5 text-primaryRedColor-default font-medium text-xl cursor-pointer"
            onClick={() => handleOnClickRole('showroom')}
          >
            Showroom
          </li>
          <li
            className="mb-5 text-primaryRedColor-default font-medium text-xl cursor-pointer"
            onClick={() => handleOnClickRole('insurance')}
          >
            Insurance
          </li>
          <li
            className="mb-5 text-primaryRedColor-default font-medium text-xl cursor-pointer"
            onClick={() => handleOnClickRole('carRecovery')}
          >
            Car Recovery
          </li>
          <li
            className="mb-5 text-primaryRedColor-default font-medium text-xl cursor-pointer"
            onClick={() => handleOnClickRole('carRental')}
          >
            Car Rental
          </li>
        </ul>
      </div>
    </div>
  )
}

export default RoleSelectionStep
