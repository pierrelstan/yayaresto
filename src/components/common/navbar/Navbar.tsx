import React, { useState } from 'react';
import List from '@/components/common/navbar/List';
import ActiveLink from './ActiveLink';
import * as S from './Navbar.style';

const Navbar: React.FC = () => {
  const [toggle, setToggle] = useState(false);

  const handleClick = () => {
    setToggle(!toggle);
  };

  return (
    <S.Wrapper toggle={toggle}>
      <S.Nav>
        <S.WrapperLogo>
          <S.Logo
            src={'/logo.svg'}
            alt="Logo"
            width={100}
            height={100}
            priority
          />
        </S.WrapperLogo>
        <S.Drawer>
          {toggle === false && <S.MenuSharp onClick={handleClick} />}
          {toggle === true && <S.CloseSharp onClick={handleClick} />}
        </S.Drawer>
      </S.Nav>

      <S.ListItems toggle={toggle}>
        <List />

        <ActiveLink href={'/login'} path={'/login'}>
          <S.Button>
            <S.ListItem>Login</S.ListItem>
          </S.Button>
        </ActiveLink>
      </S.ListItems>
    </S.Wrapper>
  );
};
export default Navbar;
