import { useRef, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import styled from 'styled-components';
import { useAuth } from '../api/auth/context';

const Input = styled.input`
  padding: 10px;
  border-radius: 5px;
  width: 100%;

  &:focus {
    outline: none;
  }
`;

const Button = styled.button`
  padding: 10px 20px;
`;

const Wrapper = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;

  form {
    div {
      margin-bottom: 10px;
    }
  }

  div:last-child {
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const StyledLink = styled(Link)`
  color: #FFF;
  text-decoration: none;
`;

const Error = styled.span`
  color: #ED4337;
`;

const Signup = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { signUp, currentUser } = useAuth();

  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError('Passwords do not match');
    }

    try {
      console.log('try');
      setError('');
      setLoading(true);
      await signUp(
        emailRef.current.value,
        passwordRef.current.value,
      );
    } catch {
      setError('Failed to create an account');
    }

    setLoading(false);
    return true;
  }

  return (
    <>
      <Wrapper>
        <h2>Sign up</h2>
        {error && <Error>{error}</Error>}
        {currentUser && <Redirect push to="/" />}
        <form onSubmit={handleSubmit}>
          <div>
            <Input
              type="email"
              placeholder="email"
              ref={emailRef}
              required
            />
          </div>
          <div>
            <Input
              type="password"
              placeholder="password"
              ref={passwordRef}
              minLength="6"
              required
            />
          </div>
          <div>
            <Input
              type="password"
              placeholder="confirm password"
              ref={passwordConfirmRef}
              required
              minLength="6"
            />
          </div>
          <div>
            <Button
              type="submit"
              disabled={loading}
            >
              Submit
            </Button>
            <StyledLink to="/login">Log in here.</StyledLink>
          </div>
        </form>
      </Wrapper>
    </>
  );
};
export default Signup;
