import {useHistory} from 'react-router-dom'
import {Header, Image, Button} from 'semantic-ui-react'
import successImage from '../../../assets/images/mail-sent.svg'
import routes from '../../../routes'

const StayTunedStep = ({nextStep, type}) => {
  const history = useHistory()
  return (
    <div>
      <div>
        <Image src={successImage} className="m-auto w-60 h-60" />

        <div className="my-7 text-center">
          <Header
            as="h3"
            content={
              window.location.pathname.includes(routes.login)
                ? 'Stay Tuned'
                : 'Congratulations!'
            }
            className="text-labelColor font-semibold mb-1"
          />
          <Header.Subheader
            as="h4"
            content={
              window.location.pathname.includes(routes.login)
                ? 'Bookarage Dashboard is under construction'
                : 'Your Shop has been Created!'
            }
            className="text-labelColor font-medium m-0"
          />
          <p className="text-labelColor mt-5">
            Stay tuned for Bookarage announcement soon!
          </p>
        </div>
      </div>
      {window.location.pathname.includes(routes.register) && (
        <div className="mt-20 text-center">
          <Button
            content="Back!"
            className="btn-primary"
            onClick={() => history.push(routes.login)}
          />
        </div>
      )}
    </div>
  )
}

export default StayTunedStep
