import {Header} from 'semantic-ui-react'
import {keys} from '../../../config/keys'

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
            onClick={() => handleOnClickRole(keys.ROLES.serviceProvider)}
          >
            Service Provider
          </li>
          <li
            className="mb-5 text-primaryRedColor-default font-medium text-xl cursor-pointer"
            onClick={() => handleOnClickRole(keys.ROLES.sparePart)}
          >
            Spare Parts Shop
          </li>
          <li
            className="mb-5 text-primaryRedColor-default font-medium text-xl cursor-pointer"
            onClick={() => handleOnClickRole(keys.ROLES.showRoom)}
          >
            Showroom
          </li>
          <li
            className="mb-5 text-primaryRedColor-default font-medium text-xl cursor-pointer"
            onClick={() => handleOnClickRole(keys.ROLES.insurance)}
          >
            Insurance
          </li>
          <li
            className="mb-5 text-primaryRedColor-default font-medium text-xl cursor-pointer"
            onClick={() => handleOnClickRole(keys.ROLES.carRecovery)}
          >
            Car Recovery
          </li>
          <li
            className="mb-5 text-primaryRedColor-default font-medium text-xl cursor-pointer"
            onClick={() => handleOnClickRole(keys.ROLES.carRental)}
          >
            Car Rental
          </li>
        </ul>
      </div>
    </div>
  )
}

export default RoleSelectionStep
