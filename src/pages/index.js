import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import { formLogin } from '../utils/form-validation';
import { Logo, Button } from '../components/commons';
import { InputText, InputPassword } from '../components/forms';
import useAuth from '../hooks/use-auth';

export default function LoginPage() {
  const { login, user } = useAuth();
  const {
    register, formState, handleSubmit, setError,
  } = useForm(formLogin);
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (user || localStorage.token) {
      router.replace('/user');
    }
  }, [user]);

  const onSubmit = async (value) => {
    setLoading(true);
    try {
      await login(value);
    } catch (err) {
      console.error(err, 'err');
      setError('email', { message: 'Invalid Email!' });
      setError('password', { message: 'Invalid Password!' });
    }
    setLoading(false);
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen space-y-4 px-4 lg:px-0">
      <div className="flex flex-row justify-start items-end space-x-1">
        <Logo />
        <span className="text-sm leading-none">Assessment Test</span>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col w-full lg:w-1/4 space-y-4">
        <InputText
          register={register('email')}
          placeholder="email"
          errors={formState.errors}
          label="Email"
        />
        <InputPassword
          register={register('password')}
          placeholder="password"
          errors={formState.errors}
          label="Password"
        />
        <Button label="Login" type="submit" className="w-full" loading={loading} />
      </form>
    </div>
  );
}
