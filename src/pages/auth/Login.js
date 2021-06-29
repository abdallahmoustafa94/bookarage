import {useState} from 'react'
import {Link, useHistory} from 'react-router-dom'
import {useToasts} from 'react-toast-notifications'
import {Button, Form, Image} from 'semantic-ui-react'
import logo from '../../assets/images/logo.svg'
import Auth from '../../config/auth'
import useLocalStorage from '../../hooks/use-local-storage'
import useAsync from '../../hooks/useAsync'
import routes from '../../routes'
import {login} from '../../services/AuthServices'

const LoginPage = () => {
  const {run, isLoading} = useAsync()
  const {addToast} = useToasts()
  const [user, setUser] = useLocalStorage('user', '')
  const history = useHistory()
  const [state, setState] = useState({
    emailOrPhoneNumber: '',
    password: '',
  })

  const handleOnSubmit = () => {
    run(login(state))
      .then(({data}) => {
        console.log(data)
        Auth.setToken(data.data.token)
        setUser(
          JSON.stringify({
            nameEN: data.data.nameEN,
            nameAR: data.data.nameAR,
            role: data.data.role,
            avatar: data.data.avatar,
            _id: data.data._id,
          }),
        )
        addToast(data.message, {appearance: 'success'})
        history.push(routes.dashboard)
      })
      .catch(e => {
        console.log(e)
        e && e.errors?.map(err => addToast(err.message, {appearance: 'error'}))
      })
  }

  return (
    <div className="px-20 py-10">
      <Image src={logo} className="mx-auto" width="150" />

      <div className="mt-16">
        <Form loading={isLoading}>
          <Form.Field className="mb-7 ">
            <label className="text-sm font-medium text-labelColor">
              Email Address or Phone Number
            </label>
            <Form.Input
              type="text"
              onChange={(e, {value}) =>
                setState({...state, emailOrPhoneNumber: value})
              }
            />
          </Form.Field>

          <Form.Field>
            <label className="text-sm font-medium text-labelColor">
              Password
            </label>
            <Form.Input
              type="password"
              onChange={(e, {value}) => setState({...state, password: value})}
            />
          </Form.Field>

          <div className="my-16 text-center flex flex-col">
            <Button
              content="Login"
              className="btn-primary"
              onClick={handleOnSubmit}
            />
            <Link to={routes.forgotPassword} className="mt-3">
              Forgot Password ?
            </Link>
          </div>

          <hr />

          <div className="mt-3 text-center">
            <p className="text-lg font-normal text-labelColor">
              New to Bookrage ?
            </p>

            <div className="mt-3">
              <Button
                content="Create Account"
                className="btn-primary-outline"
                onClick={() => history.push(routes.register)}
              />
            </div>
          </div>
        </Form>
      </div>
    </div>
  )
}

export default LoginPage
