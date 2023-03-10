import { useRouter } from 'next/router';
import * as SN from '@/components/common/navbar/Navbar.style';
import * as S from '@/styles/sharedstyles';
import { Form, Input } from './Components';
import * as Sform from './stylesForm';
import Button from '../common/Button/Button';
import Titles from '../common/Titles';
type Props = {
  title: string;
};
const LoginForm = (props: Props) => {
  const router = useRouter();
  const onSubmit = (data: any) => console.log(data);
  const handleClick = (page: any, e: any) => {
    e.preventDefault();
    router.push(page);
  };
  return (
    <Sform.WrapperLogin>
      <S.WrapperTitleCenter>
        <Titles title={props.title} fontSize={'70'} color={'white'} />
      </S.WrapperTitleCenter>

      <Form onSubmit={onSubmit}>
        <Input name="Email" type="email" />
        <Input name="Password" type="password" />
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
          }}
        >
          <S.Text>
            Don&apos;t have an account ?{' '}
            <SN.StyledLink
              href={'signup'}
              path={'/signup'}
              onClick={(e) => handleClick('/signup', e)}
            >
              Sign Up
            </SN.StyledLink>
          </S.Text>
          <Button title="Login" type="submit" />
          {/* <Button title="SignUp" /> */}
        </div>
      </Form>
    </Sform.WrapperLogin>
  );
};

export default LoginForm;
