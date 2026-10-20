import { Container, ContainerSucces } from './styles'
import { useForm, ValidationError } from '@formspree/react'
import { toast, ToastContainer } from 'react-toastify'
import ReCAPTCHA from 'react-google-recaptcha'
import { useEffect, useState } from 'react'
import validator from 'validator'

export function Form() {
  const [state, handleSubmit] = useForm('xknkpqry')
  const [validEmail, setValidEmail] = useState(false)
  const [isHuman, setIsHuman] = useState(false)
  const [message, setMessage] = useState('')
  function verifyEmail(email: string) {
    if (validator.isEmail(email)) {
      setValidEmail(true)
    } else {
      setValidEmail(false)
    }
  }
  useEffect(() => {
    if (state.succeeded) {
      toast.success('Email successfully sent!', {
        position: 'bottom-left',
        pauseOnFocusLoss: false,
        closeOnClick: true,
        hideProgressBar: false,
        toastId: 'succeeded',
      })
    }
  }, [state.succeeded])
  if (state.succeeded) {
    return (
      <ContainerSucces>
        <h3>Thanks for getting in touch!</h3>
        <button
          onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' })
          }}
        >
          Back to the top
        </button>
        <ToastContainer />
      </ContainerSucces>
    )
  }
  return (
    <Container>
      <h3>Send a message</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Your email</label>
        <input
          placeholder="you@example.com"
          id="email"
          type="email"
          name="email"
          autoComplete="email"
          onChange={(e) => {
            verifyEmail(e.target.value)
          }}
          required
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <label htmlFor="message">Your message</label>
        <textarea
          required
          placeholder="Tell me a little about your project or idea…"
          id="message"
          name="message"
          onChange={(e) => {
            setMessage(e.target.value)
          }}
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        <div className="captcha"><ReCAPTCHA
          sitekey="6Lfj9NYfAAAAAP8wPLtzrsSZeACIcGgwuEIRvbSg"
          onChange={(token) => setIsHuman(Boolean(token))}
          onExpired={() => setIsHuman(false)}
        /></div>
        <button
          type="submit"
          disabled={state.submitting || !validEmail || !message || !isHuman}
        >
          Send message <span aria-hidden="true">↗</span>
        </button>
      </form>
      <ToastContainer />
    </Container>
  )
}
