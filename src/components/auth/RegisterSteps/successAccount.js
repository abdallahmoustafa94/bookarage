import {Header, Image, Button} from 'semantic-ui-react'
import successImage from '../../../assets/images/success.svg'

const SuccessAccount = ({nextStep}) => {
  return (
    <div>
      <div>
        <Image src={successImage} className="m-auto w-60 h-60" />

        <div className="my-7 text-center">
          <Header
            as="h3"
            content="Congratulations"
            className="text-labelColor font-semibold mb-1"
          />
          <Header.Subheader
            as="h4"
            content="Your Account has been Created!"
            className="text-labelColor font-medium m-0"
          />
          <p className="text-labelColor mt-5">
            All you need to do now is to setup your shop information!
          </p>
        </div>
      </div>

      <div className="mt-20 text-center">
        <Button
          content="Setup Shop Now!"
          className="btn-primary"
          onClick={() => nextStep({type: 'step', value: null})}
        />
      </div>
    </div>
  )
}

export default SuccessAccount
