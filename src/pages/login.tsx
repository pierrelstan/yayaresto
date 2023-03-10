import React from 'react';
import Layout from '@/components/common/Layout/Layout';
import LoginForm from '@/components/Form/LoginForm';
import IndexHead from './IndexHead';

const Login = () => {
  return (
    <div>
      <IndexHead />
      <Layout>
        <div>
          <LoginForm title="Login" />
        </div>
      </Layout>
    </div>
  );
};

export default Login;
