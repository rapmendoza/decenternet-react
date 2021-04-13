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

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { logIn, currentUser } = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError('');
      setLoading(true);
      await logIn(emailRef.current.value, passwordRef.current.value);
    } catch {
      setError('Credentials did not match');
    }

    setLoading(false);
  }

  return (
    <>
      <Wrapper>
        <h2>Login</h2>
        {currentUser && <Redirect push to="/" />}
        {error && <Error>{error}</Error>}
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
            <Button
              type="submit"
              disabled={loading}
            >
              Submit
            </Button>
            <StyledLink to="/signup">Sign up here.</StyledLink>
          </div>
        </form>
      </Wrapper>
    </>
  );
};
export default Login;
